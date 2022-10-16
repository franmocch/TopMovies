import React, { useContext } from 'react';
import styles from './SearchedMovieList.module.css';
import FoundMovie from './FoundMovie';
import MovieContext from '../../../context/movie-context';
import MoonLoader from 'react-spinners/MoonLoader';

export default function SearchedMovieList(props) {
	const { MoviesList } = props;

	const ctx = useContext(MovieContext);
	const submitMovie = id => {
		ctx.setDisplayMovie(id);
	};
	return (
		<ul className={styles['searched-movies']}>
			{MoviesList.map(singleMovie => {
				return (
					<li key={singleMovie.id}>
						<FoundMovie
							highlight={true}
							onClick={submitMovie.bind(null, singleMovie.id)}
							movie={singleMovie}
						/>
					</li>
				);
			})}
		</ul>
	);
}
