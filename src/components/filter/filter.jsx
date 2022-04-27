import React from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { events } from '../../store/store';
import { action } from 'mobx';

const Filter = observer(() => {
	const location = useLocation().pathname;
	const { id } = useParams();

	const {
		notArchiveData,
		pastData,
		todayData,
		futureData,
		favoriteData
	} = events

	const handleFiltred = action((evt) => {
		events.filtredData = events[evt.target.value];
		events.sortedData = events[events.sortingType];
		events.filtredType = evt.target.value;
	});

	return (
		<section className='main__filter filter'>
			<input
				type='radio'
				id='filter__all'
				className='filter__input visually-hidden'
				name='filter'
				value={'notArchiveData'}
				onClick={handleFiltred}
				disabled={!notArchiveData.length}
				defaultChecked={events.filtredType === 'notArchiveData'}
			/>
			<label htmlFor='filter__all' className='filter__label'>
				Все <span className='filter__all-count count'>{notArchiveData.length}</span></label
			>
			<input
				type='radio'
				id='filter__overdue'
				className='filter__input visually-hidden'
				name='filter'
				value={'pastData'}
				onClick={handleFiltred}
				disabled={!pastData.length}
				defaultChecked={events.filtredType === 'pastData'}
			/>
			<label htmlFor='filter__overdue' className='filter__label'
			>Прошедшие <span className='filter__overdue-count count'>{pastData.length}</span></label
			>
			<input
				type='radio'
				id='filter__today'
				className='filter__input visually-hidden'
				name='filter'
				value={'todayData'}
				onClick={handleFiltred}
				disabled={!todayData.length}
				defaultChecked={events.filtredType === 'todayData'}
			/>
			<label htmlFor='filter__today' className='filter__label'
			>Сегодня <span className='filter__today-count count'>{todayData.length}</span></label
			>
			<input
				type='radio'
				id='filter__future'
				className='filter__input visually-hidden'
				name='filter'
				value={'futureData'}
				onClick={handleFiltred}
				disabled={!futureData.length}
				defaultChecked={events.filtredType === 'futureData'}
			/>
			<label htmlFor='filter__future' className='filter__label'
			>Будущие <span className='filter__future-count count'>{futureData.length}</span></label
			>
			<input
				type='radio'
				id='filter__favorite'
				className='filter__input visually-hidden'
				name='filter'
				value={'favoriteData'}
				onClick={handleFiltred}
				disabled={!favoriteData.length}
				defaultChecked={events.filtredType === 'favoriteData'}
			/>
			<label htmlFor='filter__favorite' className='filter__label'
			>Избранное <span className='filter__favorite-count count'>{favoriteData.length}</span></label
			>
			<Link to={AppRoute.ADD}
				name='control'
				className={`btn-add ${(location === AppRoute.ADD || location === `${AppRoute.ADD}/${id}`) && 'hidden'}`}
			>Создать</Link>
		</section >
	)
}
)

export default Filter;