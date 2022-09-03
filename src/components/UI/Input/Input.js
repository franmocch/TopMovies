import React, { useRef } from 'react';
import styles from './Input.module.css';
import { BsSearch } from 'react-icons/bs';

export default function Input(props) {
	const textValue = 'Search TopMovies';

	const searchValue = useRef();

	const submitHandler = event => {
		event.preventDefault();

		const enteredSearch = searchValue.current.value;

		enteredSearch.trim().length > 0 && props.onValueToSearch(enteredSearch);

		searchValue.current.value = '';
	};

	return (
		<div>
			<div className={styles.search}>
				<form onSubmit={submitHandler}>
					<input
						type='search'
						id='search'
						placeholder={textValue}
						ref={searchValue}
					/>

					<button className={styles.button} type='submit'>
						<BsSearch className={styles.icon} />
					</button>
				</form>
			</div>
			<div>{props.children}</div>
		</div>
	);
}
