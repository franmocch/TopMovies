import React, { useContext } from 'react';
import styles from './MovieList.module.css';
import Card from '../../../UI/Card/Card';
import Movie from '../../../UI/Movie/Movie';
import BMIcon from '../../../UI/BMIcon/BMIcon';
import MovieContext from '../../../context/movie-context';

export default function MovieList(props) {
	const { moviesList, onSetMovieList } = props;

	const ctx = useContext(MovieContext);

	const submitMovie = id => {
		ctx.setDisplayMovie(id);
	};

	return moviesList?.map(movie => {
		return (
			<li className={styles['element']} key={movie.id}>
				<Card highlight={true}>
					<Movie
						onClick={submitMovie.bind(null, movie.id)}
						img={movie.img}
						title={movie.title}
						scale={true}
					/>
					<BMIcon onMovie={movie} onRemove={onSetMovieList} onSize='1.5' />
				</Card>
			</li>
		);
	});
}
