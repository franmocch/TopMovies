import React from 'react';
import styles from './AsideScreen.module.css';
import Movie from '../../../UI/Movie/Movie';

export default function AsideScreen(props) {
	const trailer = 'Browse trailers > ';
	const text = 'Up next';
	const submitMovie = movie => {
		props.onClickMov({ ...movie });
	};

	return (
		<div className={styles.aside}>
			<span className={styles.upnext}>{text}</span>

			<div className={styles.nextContainer}>
				<ul>
					{props.movies.map(movie => {
						return (
							<li key={Math.random()}>
								<Movie
									onClick={submitMovie.bind(null, movie)}
									img={movie.img}
									desc={movie.description}
									title={movie.title}
								/>
							</li>
						);
					})}
				</ul>
			</div>

			<span className={styles.browser}>{trailer}</span>
		</div>
	);
}
