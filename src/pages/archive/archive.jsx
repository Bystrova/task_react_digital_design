import React from 'react';
import Header from '../../components/header/header';
import Board from '../../components/board/board';

const Archive = ({ events }) => {
	const archiveEvents = events.filter(event => event.archive);
	return (
		<>
			<Header location={window.location.pathname} />
			<section className='main__wrapper'>
				<Board location={window.location.pathname} events={archiveEvents} />
			</section>
		</>
	)
}

export default Archive;