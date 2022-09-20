import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Carrousel.module.css';
import InQueueMovies from './InQueueMovies/InQueueMovies';
import DisplayedMovie from './DisplayedMovie/DisplayedMovie';
import Movies from '../../../../assets/objPeliculas';

const INITIAL_STATE = Object.values(Movies);

export default function Carrousel() {
	const [queueMovies, setQueueMovies] = useState(INITIAL_STATE);
	const [animation, setAnimation] = useState('rigth');

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimation(null);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [animation, queueMovies]);

	const setQueueMoviesHandler = action => {
		if (action === 'rigth') {
			const singleMovie = queueMovies.shift();
			setAnimation(action);
			setQueueMovies([...queueMovies, singleMovie]);
		}
		if (action === 'left') {
			setAnimation(action);
			const singleMovie = queueMovies.pop();
			setQueueMovies([singleMovie, ...queueMovies]);
		}
	};

	const clickMoviesHandler = movie => {
		const filteredArray = queueMovies.filter(
			film => movie.title !== film.title
		);
		setQueueMovies([movie, ...filteredArray]);
	};
	return (
		<div className={styles['carrousel-container']}>
			<div className={styles['selected-movie']}>
				<DisplayedMovie
					actionChange={setQueueMoviesHandler}
					movie={queueMovies[0]}
					animation={animation}
				/>
			</div>
			<div className={styles['side-queue']}>
				<InQueueMovies
					movies={queueMovies.slice(1, 4)}
					onClickMov={clickMoviesHandler}
					animation={animation}
				/>
			</div>
		</div>
	);
}
