import React, { useState } from 'react';
import styles from './Watchlist.module.css';
import ButtonNav from '../../../UI/Button/ButtonNav';
import WatchlistMovies from './WatchlistMovies';
import { removeMovies } from '../../../context/Bookmark/Bookmark';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Watchlist() {
	const [isOpen, setIsOpen] = useState(false);

	const accionClick = bool => {
		setIsOpen(bool);
	};

	const onRemoveMoviesHandler = () => {
		accionClick(false);
		removeMovies();
	};
	return (
		<OutsideClickHandler onOutsideClick={accionClick.bind(null, false)}>
			<div className={styles['watchlist']}>
				<ButtonNav
					text='Watchlist'
					open={isOpen}
					onClickIn={accionClick.bind(null, !isOpen)}
					icon={<BsBookmarkPlusFill size={'1.2rem'} />}
				/>
				{isOpen && <WatchlistMovies onRemoveMovies={onRemoveMoviesHandler} />}
			</div>
		</OutsideClickHandler>
	);
}
