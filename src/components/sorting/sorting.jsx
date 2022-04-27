import React from 'react';
import { observer } from 'mobx-react-lite';
import { events } from '../../store/store';
import { action } from 'mobx';

const Sorting = observer(() => {

	const handleSorted = action((evt) => {
		events.sortedData = events[evt.target.value];
		events.sortingType = evt.target.value;
	})

	return (
		<div className='board__filter-list'>
			<span className='board__filter--title'>Сортировка:</span>
			<input
				type='radio'
				id='board__filter-default'
				className='board__filter visually-hidden'
				name='board-filter'
				value={'defaultSortedData'}
				defaultChecked={events.sortingType === 'defaultSortedData'}
				onClick={handleSorted}
			/>
			<label htmlFor='board__filter-default' className='board__filter-label'>По умолчанию</label>
			<input
				type='radio'
				id='board__filter-new'
				className='board__filter visually-hidden'
				name='board-filter'
				value={'descendingSortedData'}
				defaultChecked={events.sortingType === 'descendingSortedData'}
				onClick={handleSorted}
			/>
			<label htmlFor='board__filter-new' className='board__filter-label'>Сначала новые</label>
			<input
				type='radio'
				id='board__filter-old'
				className='board__filter visually-hidden'
				name='board-filter'
				value={'ascendingSortedData'}
				defaultChecked={events.sortingType === 'ascendingSortedData'}
				onClick={handleSorted}
			/>
			<label htmlFor='board__filter-old' className='board__filter-label'>Сначала старые</label>
		</div>
	)
})

export default Sorting;