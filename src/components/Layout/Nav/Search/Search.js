import React, { useEffect, useState, useRef } from 'react';
import styles from './Search.module.css';
import SearchedMovies from './SearchedMovies';
import Input from '../../../UI/Input/Input';
import useApi from '../../../../hooks/useApi';
import transformMovies from '../../../Helpers/transformMovies';
import OutsideClick from 'react-outside-click-handler';

const INITIAL_STATE = {
	isText: false,
	isVisible: false
};

export default function Search() {
	const [toSearch, setToSearch] = useState('');
	const [searchedMovies, setSearchedMovies] = useState();
	const [display, setDisplay] = useState(INITIAL_STATE);

	const { error, sendRequest: fetchMovie, setErrorHandler } = useApi();

	const inputRef = useRef();

	const toSearchHandler = valueToSearch => {
		setToSearch(valueToSearch);
	};

	const setDislayVisibleHandler = bool => {
		setDisplay(prevState => {
			return { ...prevState, isVisible: bool };
		});
	};
	const visibilityHidden = () => {
		setDisplay(INITIAL_STATE);
	};

	useEffect(() => {
		const setDislayIsTextHandler = bool => {
			setDisplay(prevState => {
				return { ...prevState, isText: bool };
			});
		};
		if (toSearch.trim().length > 0) {
			setDislayIsTextHandler(true);

			const timer = setTimeout(() => {
				fetchMovie({ query: toSearch, type: 'search' }, movies => {
					if (movies.Search.length >= 3) {
						transformMovies([...movies.Search.slice(0, 3)], setSearchedMovies);
					}
					if (movies.Search.length < 2 && movies.Search.length > 0) {
						transformMovies([...movies.Search], setSearchedMovies);
					}
				});
			}, 2000);
			return () => clearTimeout(timer);
		}
		if (toSearch.trim().length === 0) {
			setDislayIsTextHandler(false);
		}
	}, [toSearch, fetchMovie]);

	const actionOnChangeHandler = () => {
		setSearchedMovies();
		setErrorHandler();
	};

	return (
		<div
			className={styles['search']}
			onClick={setDislayVisibleHandler.bind(null, true)}
		>
			<Input
				ref={inputRef}
				toSearchInput={toSearchHandler}
				actionOnChange={actionOnChangeHandler}
			/>
			{display.isText && (
				<OutsideClick
					onOutsideClick={setDislayVisibleHandler.bind(null, false)}
				>
					{
						<SearchedMovies
							hidden={!display.isVisible}
							MoviesList={searchedMovies}
							onNotFoundMovies={error}
							query={toSearch}
							visibilityHidden={visibilityHidden}
							inputRef={inputRef}
						/>
					}
				</OutsideClick>
			)}
		</div>
	);
}
