import React from 'react';
import styles from './Nav.module.css';
import imgLogo from '../../../assets/topMoviesLogo.png';
import Search from './Search/Search';
import Watchlist from './Watchlist/Watchlist';
import { NavLink } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<NavLink to='/main' className={styles['button-logo']}>
				<img className={styles['logo']} src={imgLogo} alt='topMovies logo' />
			</NavLink>
			<Search />
			<Watchlist />
		</nav>
	);
}
