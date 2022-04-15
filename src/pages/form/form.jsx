import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { AppRoute } from '../../const';

const Form = () => {
	return (
		<>
			<Header mode={AppRoute.FORM} />
			<section className='main__wrapper'>
				<Filter mode={AppRoute.FORM} />
				<Board mode={AppRoute.FORM} />
			</section>
		</>
	)
}

export default Form;