import React from 'react';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import Sorting from '../sorting/sorting';
import { AppRoute } from '../../const';

const Board = ({ location, id }) => {
	return (
		<section className='board'>
			{location === AppRoute.MAIN && <Sorting />}
			<div className={`board__events ${location === AppRoute.ARCHIVE && 'board__events--archive'}`}>
				<Card />
			</div>
			<LoadMore />
		</section>
	)
}

export default Board;
