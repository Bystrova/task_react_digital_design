import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Event from '../../components/event/event';
import { events } from '../../store/store';
import { observer } from 'mobx-react-lite';

const Form = observer((props) => {

	const getLocation = () => {
		const longLocation = window.location.pathname;
		const secondSlash = longLocation.lastIndexOf('/');
		return secondSlash === 0 ? longLocation : longLocation.slice(0, secondSlash);
	}

	const { id } = props.match.params;
	const { data } = events;
	const event = data.find(element => element._id === id);

	return (
		<>
			<Header location={getLocation()} />
			<section className='main__wrapper'>
				<Filter location={getLocation()} />
				<section className='board'>
					<Event id={id} {...event} />
				</section>
			</section>
		</>
	)
}
)
export default Form;