import React from 'react';
import Header from '../../components/header/header';
import Board from '../../components/board/board';

const Archive = () => {
	return (
		<>
			<Header location={window.location.pathname} />
			<section className='main__wrapper'>
				<Board location={window.location.pathname} />
			</section>
		</>
	)
}

export default Archive;