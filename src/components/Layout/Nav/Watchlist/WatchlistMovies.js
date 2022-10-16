import React, { Fragment, useState } from 'react';
import styles from './WatchlistMovies.module.css';
import { getMovies } from '../../../context/Bookmark/Bookmark';
import MovieList from './MovieList';
import NotAMarkedMovie from './NotAMarkedMovie';
import Button from '../../../UI/Button/Button';

export default function WatchlistMovies(props) {
	const [moviesList, setMoviesList] = useState(getMovies());

	const setMoviesListHandler = () => {
		setMoviesList(getMovies());
	};

	const accionOnClickHandler = () => {
		props.onRemoveMovies();
	};

	return (
		<div className={styles['container']}>
			{moviesList.length < 1 ? (
				<NotAMarkedMovie />
			) : (
				<Fragment>
					<ul className={styles['movies-list']}>
						<MovieList
							moviesList={moviesList}
							onSetMovieList={setMoviesListHandler}
						/>
					</ul>
					<Button
						text='Clear All'
						hl={'hl-yellow'}
						accionOnClick={accionOnClickHandler}
					/>
				</Fragment>
			)}
		</div>
	);
}
