import React from 'react';
import styles from './SearchedMovieList.module.css';
import FoundMovie from './FoundMovie';

export default function SearchedMovieList(props) {
	const { MoviesList } = props;

	const submitMovie = () => {
		//funcion que redirecciona a la pagina de la pelicula
	};
	return (
		<ul className={styles['searched-movies']}>
			{MoviesList.map(singleMovie => {
				return (
					<li key={singleMovie.id}>
						<FoundMovie
							highlight={true}
							onClick={submitMovie.bind(null, singleMovie)}
							movie={singleMovie}
						/>
					</li>
				);
			})}
		</ul>
	);
}
