import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import moment from 'moment';
import 'moment/locale/ru';
import { events } from '../../store/store';
import { AppRoute } from '../../const';


const Card = ({ event }) => {
	const { _id, theme, comment, date, favorite, archive } = event;

	const formatDate = moment(date).format('DD MMMM');

	const handleArchive = (evt) => {
		evt.preventDefault();
		events.editEvent({
			...event,
			id: _id,
			archive: !archive
		});
	}

	const handleFavorite = (evt) => {
		evt.preventDefault();
		events.editEvent({
			...event,
			id: _id,
			favorite: !favorite,
		});
	}

	const handleDelete = (evt) => {
		evt.preventDefault();
		events.deleteEvent(_id);
	}

	return (
		<article className='card'>
			<div className='card__form'>
				<div className='card__inner'>
					<div className='card__control'>
						<Link
							to={`${AppRoute.ADD}/${_id}`}
							type='button'
							className='card__btn card__btn--edit'
						>
							Редактировать
						</Link>
						<button
							type='button'
							className='card__btn card__btn--archive'
							onClick={handleArchive}
						>
							В архив
						</button>
						<button
							type='button'
							className={`card__btn card__btn--favorites ${favorite && 'favorite-on'}`}
							onClick={handleFavorite}
						>
							В избранное
						</button>
						<button
							type='button'
							className='card__btn card__btn--remove'
							onClick={handleDelete}
						>
							Удалить
						</button>
					</div>

					<div className='card__textarea-wrap'>
						<p className='card__text--theme'>{theme}</p>
						<p className='card__text--comment'>{comment}</p>
					</div>

					<div className='card__settings'>
						<span className='card__date'>{formatDate}</span>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Card;