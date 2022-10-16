import React, { Fragment } from 'react';
import styles from './SearchedMovies.module.css';
import FoundMovie from './FoundMovie';
import SearchedMovieList from './SearchedMovieList';
import Spinner from '../../../UI/Spinner/Spinner';
import NavShowMore from './NavShowMore';

export default function SearchedMovies(props) {
	const { MoviesList, hidden, onNotFoundMovies, query, visibilityHidden } =
		props;

	const containerSearched = `${styles['search-container']} ${
		hidden ? styles['hidden'] : ''
	}`;

	return (
		!hidden && (
			<div className={containerSearched}>
				{onNotFoundMovies ? (
					<FoundMovie fixed={true} NotFound={true} movie={{}} />
				) : MoviesList ? (
					<Fragment>
						<SearchedMovieList MoviesList={MoviesList} query={query} />
						<NavShowMore visibilityHidden={visibilityHidden} query={query} />
					</Fragment>
				) : (
					<Spinner />
				)}
			</div>
		)
	);
}
