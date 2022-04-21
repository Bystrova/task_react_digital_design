import React from 'react';
import moment from 'moment';

const Event = ({ id, theme, comment, date }) => {
	let formHeading;
	let buttonText;
	if (id) {
		formHeading = 'Редактирование события';
		buttonText = 'Сохранить';
	} else {
		formHeading = 'Добавление события';
		buttonText = 'Добавить';
	}
	const formatDate = moment(date).utc().format('YYYY-MM-DDTHH:mm');

	return (
		<form className='board__form'>
			<h2 className='board__title'>{formHeading}</h2>
			<fieldset className='board__field board__field--theme'>
				<label htmlFor='theme' className='board__label board__label--theme'>Тема:</label>
				<textarea
					type='formHeading'
					className='board__input board__input--theme'
					name='theme'
					required
					defaultValue={id && theme}
				></textarea>
			</fieldset>
			<fieldset className='board__field board__field--comment'>
				<label htmlFor='comment' className='board__label board__label--comment'>Комментарий:</label>
				<textarea
					type='formHeading'
					className='board__input board__input--comment'
					name='comment'
					required
					defaultValue={id && comment}
				></textarea>
			</fieldset>
			<fieldset className='board__field board__field--date'>
				<label htmlFor='date' className='board__label board__label--date'>Дата:</label>
				<input
					type='datetime-local'
					className='board__input board__input--date'
					name='date'
					defaultValue={id && formatDate}
				/>
			</fieldset>
			<div className='btns'>
				<button type='submit' className='btn-submit'>{buttonText}</button>
				<button type='reset' className='btn-reset'>Очистить</button>
			</div>
		</form>
	)
}

export default Event;