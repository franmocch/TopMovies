import React from 'react';
import styles from './InQueueMovies.module.css';
import Movie from '../../../../UI/Movie/Movie';
import { BsPlayCircle } from 'react-icons/bs';

const trailer = 'Browse trailers > ';
const text = 'Up next';

export default function InQueueMovies(props) {
	const { movies, onClickMov, animation } = props;

	const keyframes = `animation-${animation}`;
	const movieStyles = `${styles['element-movie']} ${
		animation ? styles[keyframes] : ''
	}`;

	const submitMovie = movie => {
		onClickMov({ ...movie });
	};

	return (
		<div className={styles['queue-container']}>
			<h2 className={styles.upnext}>{text}</h2>

			<div className={styles['queue']}>
				<ul>
					{movies.map(movie => {
						return (
							<li className={movieStyles} key={Math.random()}>
								<Movie
									onClick={submitMovie.bind(null, movie)}
									img={movie.img}
									title={movie.title}
									scale={true}
								>
									<p>{movie.description}</p>
									<BsPlayCircle className={styles['icon']} />
								</Movie>
							</li>
						);
					})}
				</ul>
			</div>

			<h2 className={styles['browser']}>{trailer}</h2>
		</div>
	);
}
