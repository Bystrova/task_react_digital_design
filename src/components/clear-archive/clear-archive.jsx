import React from 'react';
import './clear-archive.css';
import { events } from '../../store/store';

const ClearArchive = () => {
	const { archiveData } = events;
	const dataToClear = archiveData.map((item) => {
		const obj = {};
		obj._id = item._id;
		obj.theme = item.theme;
		obj.comment = item.comment;
		obj.date = item.date;
		obj.favorite = item.favorite;
		obj.archive = item.archive;
		return obj;
	})

	console.log(dataToClear);

	const handleClear = (evt) => {
		evt.preventDefault();
		events.clearArchive(dataToClear);
	}

	return (
		<button
			className='clear-archive'
			type='button'
			onClick={handleClear}
		>Очистить архив
		</button>
	)
}

export default ClearArchive;