import React from 'react';
import './clear-archive.css';
import { events } from '../../store/store';

const ClearArchive = () => {

	const handleClear = (evt) => {
		evt.preventDefault();
		events.clearArchive();
		// archiveData.forEach(item => events.deleteEvent(item._id));
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