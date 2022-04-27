import React from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Header = () => {
	const { id } = useParams();
	const location = useLocation().pathname;
	// const longLocation = useLocation().pathname;
	// let location;
	// const secondSlashIndex = longLocation.lastIndexOf('/');
	// secondSlashIndex === 0 ? location = longLocation : location = longLocation.slice(0, secondSlashIndex);

	return (
		<section className='main__header'>
			<section className='main__header-wrap'>
				<span className='main__header-logo'>SomeList</span>
				<div className='main__header-group-lnk'>
					<Link to='/' className={`main__header-lnk ${(location === AppRoute.MAIN || location === AppRoute.ADD || location === `${AppRoute.ADD}/${id}`) && 'lnk-active'}`}>События</Link>
					<Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${location === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>
				</div>
			</section>
		</section>
	)
}

export default Header;
