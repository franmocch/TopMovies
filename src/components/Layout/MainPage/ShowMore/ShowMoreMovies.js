import React, { Fragment } from 'react';
import styles from './ShowMoreMovies.module.css';
import MoreMovies from './MoreMovies/MoreMovies';
import MoonLoader from 'react-spinners/MoonLoader';
import Paginator from '../../../UI/Paginator/Paginator';

export default function ShowMoreMovies(props) {
	const {
		moviesTransf,
		loading,
		query,
		currentPage,
		setCurrentPage,
		setLoding,
		error
	} = props;

	const setCurrentPageHandler = number => {
		setLoding(true);
		setCurrentPage(prevState => {
			return prevState + number;
		});
	};

	const setPageOnClick = number => {
		setLoding(true);
		setCurrentPage(number);
	};

	const textResults =
		moviesTransf &&
		`'${query.toUpperCase()}' films   : ${moviesTransf.totalMovies} `;

	return (
		<div className={styles['container']}>
			<div className={styles['paginator']}>
				{moviesTransf || (loading && moviesTransf) ? (
					<Fragment>
						<p>{textResults}</p>

						<Paginator
							totalMovies={moviesTransf.totalMovies}
							currentPage={currentPage}
							onCurrent={setCurrentPageHandler}
							selectOnClick={setPageOnClick}
						/>
					</Fragment>
				) : (
					<h3>Searching...</h3>
				)}
			</div>
			<div className={styles['movies-container']}>
				{(!moviesTransf || loading) && (
					<div className={styles['spinner']}>
						<MoonLoader color='#f0f0f0' />
					</div>
				)}
				{moviesTransf && !loading && (
					<MoreMovies Movies={moviesTransf} notFound={error} />
				)}
			</div>
		</div>
	);
}
