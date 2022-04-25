import React from 'react';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import ClearArchive from '../clear-archive/clear-archive';
import Sorting from '../sorting/sorting';
import { AppRoute } from '../../const';
import { useLocation } from 'react-router-dom';

const Board = ({ events }) => {
	const location = useLocation().pathname;
	return (
		<section className='board'>
			{location === AppRoute.MAIN && <Sorting />}
			<div className={`board__events ${location === AppRoute.ARCHIVE && 'board__events--archive'}`}>
				{events.map(event => <Card {...event} key={event._id} />)}
			</div>
			<LoadMore />
			{location === AppRoute.ARCHIVE && <ClearArchive />}
		</section>
	)
}

export default Board;
