import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Event from '../../components/event/event';

const Form = (props) => {
	const getLocation = () => {
		const longLocation = window.location.pathname;
		const secondSlash = longLocation.lastIndexOf('/');
		return secondSlash === 0 ? longLocation : longLocation.slice(0, secondSlash);
	}
	const { id } = props.match.params;

	return (
		<>
			<Header location={getLocation()} />
			<section className='main__wrapper'>
				<Filter location={getLocation()} />
				<section className='board'>
					<Event id={id} />
				</section>
			</section>
		</>
	)
}

export default Form;