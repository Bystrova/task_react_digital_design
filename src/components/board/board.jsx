import React from 'react';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Event from '../event/event';
import Sorting from '../sorting/sorting';
import { AppRoute } from '../../const';

const Board = ({ mode }) => {
	if (mode === AppRoute.MAIN || mode === AppRoute.ARCHIVE) {
		return (
			<section className='board'>
				<Sorting mode={mode} />
				<div className={`board__events ${mode === AppRoute.ARCHIVE && 'board__events--archive'}`}>
					<Card />
				</div>
				<LoadMore />
			</section>
		)
	}
	return (
		<section className='board'>
			<Event isNewEvent={true} />
		</section>
	)
}

export default Board;
