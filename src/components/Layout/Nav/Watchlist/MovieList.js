import React from 'react';
import styles from './MovieList.module.css';
import Card from '../../../UI/Card/Card';
import Movie from '../../../UI/Movie/Movie';
import BMIcon from '../../../UI/BMIcon/BMIcon';

export default function MovieList(props) {
	const { moviesList, onSetMovieList } = props;

	const submitMovie = () => {};

	return moviesList?.map(movie => {
		return (
			<li className={styles['element']} key={movie.id}>
				<Card highlight={true}>
					<Movie
						onClick={submitMovie.bind(null, movie)}
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
