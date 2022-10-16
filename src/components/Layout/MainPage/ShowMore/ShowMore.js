import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useApi from '../../../../hooks/useApi';
import transformMovies from '../../../Helpers/transformMovies';
import ShowMoreMovies from './ShowMoreMovies';

const INITIAL_STATE = 1;

export default function ShowMore() {
	const location = useLocation();
	const { query } = location.state;
	const [moviesTransf, setMoviesTransf] = useState(null);
	const [currentPage, setCurrentPage] = useState(INITIAL_STATE);
	const [loading, setLoding] = useState(true);
	const { error, sendRequest: fetchMovie } = useApi();

	useEffect(() => {
		const apyKey = `${query}&page=${currentPage}`;
		//' example Batman&page=3'/
		setLoding(true);

		const timer = setTimeout(() => {
			fetchMovie({ query: apyKey, type: 'search' }, moviesList => {
				transformMovies([...moviesList.Search], setMoviesTransf);
				setMoviesTransf(prevState => {
					return {
						movies: [...prevState],
						totalMovies: moviesList.totalResults
					};
				});
				setLoding(false);
			});
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [fetchMovie, query, currentPage]);

	useEffect(() => {
		setLoding(true);
	}, [currentPage]);

	useEffect(() => {
		setMoviesTransf(null);
		setCurrentPage(INITIAL_STATE);
	}, [query]);

	return (
		<ShowMoreMovies
			moviesTransf={moviesTransf}
			loading={loading}
			query={query}
			currentPage={currentPage}
			error={error}
			setLoding={setLoding}
			setCurrentPage={setCurrentPage}
		/>
	);
}
