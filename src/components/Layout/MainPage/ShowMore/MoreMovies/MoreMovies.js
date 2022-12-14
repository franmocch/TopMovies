import React, { useContext } from 'react';
import styles from './MoreMovies.module.css';
import Card from '../../../../UI/Card/Card';
import Movie from '../../../../UI/Movie/Movie';
import BMIcon from '../../../../UI/BMIcon/BMIcon';
import MovieContext from '../../../../context/movie-context';

export default function MoreMovies(props) {
	const { movies } = props.Movies;
	const ctx = useContext(MovieContext);

	const movieInfo = id => {
		ctx.setDisplayMovie(id);
	};
	return (
		<ul className={styles['list-movies']}>
			{movies.map(singleMovie => {
				const { img, title, year, id, type } = singleMovie;
				return (
					<li key={id}>
						<Card highlight={true}>
							<Movie
								img={img}
								title={title}
								type={type}
								year={year}
								column={true}
								onClick={movieInfo.bind(null, id)}
							>
								<h4>{year}</h4>
								<h4> {type}</h4>
							</Movie>
							<BMIcon onMovie={singleMovie} onAbsolute={true} />
						</Card>
					</li>
				);
			})}
		</ul>
	);
}
