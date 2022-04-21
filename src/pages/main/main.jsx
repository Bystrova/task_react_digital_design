import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';


const Main = ({ events }) => {
	return (
		<>
			<Header location={window.location.pathname} />
			<section className='main__wrapper'>
				<Filter />
				<Board location={window.location.pathname} events={events} />
			</section>
		</>
	)
}

export default Main;