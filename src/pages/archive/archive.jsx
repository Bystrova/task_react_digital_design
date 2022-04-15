import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { AppRoute } from '../../const';

const Archive = () => {
	return (
		<>
			<Header mode={AppRoute.ARCHIVE} />
			<section className='main__wrapper'>
				<Filter />
				<Board />
			</section>
		</>
	)
}

export default Archive;