import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Event from '../../components/event/event';
import { events } from '../../store/store';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

const Form = observer(() => {
	const { id } = useParams();
	const { data } = events;
	const event = data.find(element => element._id === id);

	return (
		<>
			<Header />
			<section className='main__wrapper'>
				<Filter />
				<section className='board'>
					<Event {...event} />
				</section>
			</section>
		</>
	)
}
)
export default Form;