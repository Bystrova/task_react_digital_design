import React from 'react';
import Card from '../card/card';
import LoadMore from '../load-more/load-more';
import ClearArchive from '../clear-archive/clear-archive';
import Sorting from '../sorting/sorting';
import { AppRoute } from '../../const';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Board = ({ events }) => {
	const location = useLocation().pathname;

	const [step, setStep] = useState(1);
	const handleLoadMore = () => {
		events.length >= step ? setStep(step + 1) : setStep(events.length);
	}

	return (
		<section className='board'>
			{location === AppRoute.MAIN && <Sorting />}
			<div className={`board__events ${location === AppRoute.ARCHIVE && 'board__events--archive'}`}>
				{events.slice(0, step).map(event => <Card event={event} key={event._id} />)}
			</div>
			<LoadMore handleLoadMore={handleLoadMore} />
			{location === AppRoute.ARCHIVE && <ClearArchive />}
		</section>
	)
}

export default Board;
