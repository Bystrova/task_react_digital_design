import React from 'react';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Sorting from '../sorting/sorting';
import Event from '../../components/event/event';
import { AppRoute } from '../../const';

const Board = ({ location, id }) => {
	if (location === AppRoute.MAIN || location === AppRoute.ARCHIVE) {
		return (
			<section className='board'>
				<Sorting location={location} />
				<div className={`board__events ${location === AppRoute.ARCHIVE && 'board__events--archive'}`}>
					<Card />
				</div>
				<LoadMore />
			</section>
		)
	}
	return (
		<section className='board'>
			<Event id={id} />
		</section>
	)
}

export default Board;
