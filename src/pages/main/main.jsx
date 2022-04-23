import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { events } from '../../store/store';
import { observer } from 'mobx-react-lite';


const Main = observer(() => {
	const { notArchiveData } = events;

	return (
		<>
			<Header location={window.location.pathname} />
			<section className='main__wrapper'>
				<Filter />
				<Board location={window.location.pathname} events={notArchiveData} />
			</section>
		</>
	)
}
)
export default Main;

