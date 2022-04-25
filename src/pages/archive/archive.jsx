import React from 'react';
import Header from '../../components/header/header';
import Board from '../../components/board/board';
import { events } from '../../store/store';
import { observer } from 'mobx-react-lite';

const Archive = observer(() => {
	const { archiveData } = events;
	return (
		<>
			<Header />
			<section className='main__wrapper'>
				<Board events={archiveData} />
			</section>
		</>
	)
}
)
export default Archive;