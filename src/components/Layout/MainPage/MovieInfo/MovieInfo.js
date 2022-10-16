import React, { useState, useEffect, Fragment, useContext } from 'react';
import styles from './MovieInfo.module.css';
import useApi from '../../../../hooks/useApi';
import transformMovie from './transformMovie';
import MovieExtra from './MovieExtra/MovieExtra';
import MovieContext from '../../../context/movie-context';
import MoonLoader from 'react-spinners/MoonLoader';

export default function MovieInfo() {
	const [loading, setLoading] = useState(true);
	const [movieInfo, setMovieInfo] = useState('');
	const { error, sendRequest: fetchMovie } = useApi();

	const ctx = useContext(MovieContext);

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			fetchMovie({ query: ctx.displayMovie.movieId, type: 'info' }, movie => {
				setMovieInfo(transformMovie(movie));
				setLoading(false);
			});
		}, [1000]);

		return () => {
			clearTimeout(timer);
		};
	}, [fetchMovie, ctx.displayMovie.movieId]);

	const backdropHandler = () => {
		ctx.setInitialState();
	};

	return (
		ctx.displayMovie.display && (
			<Fragment>
				<div className={styles['backdrop']} onClick={backdropHandler} />
				<div className={styles['movieinfo-container']}>
					{loading ? (
						<div className={styles['spinner']}>
							<MoonLoader color='#f0f0f0' />
						</div>
					) : (
						<MovieExtra movie={movieInfo} />
					)}
				</div>
			</Fragment>
		)
	);
}
