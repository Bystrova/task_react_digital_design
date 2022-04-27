import {computed, makeAutoObservable, onBecomeObserved} from 'mobx';
import { getEvents, addEvent, editEvent, deleteEvent, clearArchive } from '../api';
import moment from 'moment';

class EventStore {
	_id;
	theme = '';
	comment = '';
	date = new Date();
	favorite = false;
	archive = false;

	constructor({_id, theme, comment, date, favorite, archive}) {
		makeAutoObservable(this, {}, {
			autoBind: true
		});

		this._id = _id;
		this.theme = theme;
		this.comment = comment;
		this.date = date;
		this.archive = archive;
		this.favorite = favorite;
	}
}

class EventsStore {
	data = [];
	filtredData = [];
	sortedData = [];
	sortingType = 'defaultSortedData';
	filtredType = 'notArchiveData';
	

	constructor() {
		makeAutoObservable(this, {}, {
		autoBind: true,
		archiveData: computed,
		notArchiveData: computed
		})

		onBecomeObserved(this, 'data', this.fetch);
	}

	get archiveData() {
		return this.data
			.map(event => new EventStore(event))
			.filter(event => event.archive);
	}

	get notArchiveData() {
		return this.data
			.map(event => new EventStore(event))
			.filter(event => !event.archive);
	}

	get pastData() {
		return this.data
			.map(event => new EventStore(event))
			.filter(event => moment(event.date).isBefore(moment(), 'day') && !event.archive)
	}

	get todayData() {
		return this.data
			.map(event => new EventStore(event))
			.filter(event => moment(event.date).isSame(moment(), 'day') && !event.archive)
}

	get futureData() {
		return this.data
			.map(event => new EventStore(event))
			.filter(event => moment(event.date).isAfter(moment(), 'day') && !event.archive)
}

	get favoriteData() {
		return this.data
			.map(event => new EventStore(event))
			.filter(event => event.favorite && !event.archive)
	}

	get ascendingSortedData() {
		return this.filtredData
			.slice()
			.sort((a, b) => a.date > b.date ? 1 : -1)
	}

	get descendingSortedData() {
		return this.filtredData
			.slice()
			.sort((a, b) => a.date < b.date ? 1 : -1)
	}

	get defaultSortedData() {
		return this.filtredData
	}

	*fetch() {
		const response = yield getEvents();
		this.data = response.map(event => new EventStore(event));
		this.filtredData = this[this.filtredType];
		this.sortedData = this[this.sortingType];
	}

	*addEvent(data) {
		yield addEvent(data);
		yield this.fetch();
	}

	*editEvent(data) {
		yield editEvent(data);
		yield this.fetch();
	}

	*deleteEvent(id) {
		yield deleteEvent(id);
		yield this.fetch();
	}

	*clearArchive() {
		yield clearArchive();
		yield this.fetch();
	}
}

export const events = new EventsStore();