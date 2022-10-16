import React, { useRef } from 'react';
import styles from './Input.module.css';
import { BsSearch } from 'react-icons/bs';

//Text
const textValue = 'Search TopMovies';
//////////////////////////////////////////

const Input = props => {
	const { toSearchInput, actionOnChange } = props;
	const toSearchRef = useRef();

	const onChangeHandler = event => {
		event.preventDefault();
		const value = toSearchRef.current.value;
		toSearchInput(value);
		actionOnChange();
	};

	const onClickHandler = () => {
		if (toSearchRef.current.value.length > 0) {
			const value = toSearchRef.current.value;
			toSearchInput(value);
		}
	};

	return (
		<div className={styles.search}>
			<form>
				<input
					type='search'
					id='search'
					placeholder={textValue}
					ref={toSearchRef}
					onChange={onChangeHandler}
					autoComplete='off'
					onClick={onClickHandler}
				/>

				<button className={styles.button}>
					<BsSearch className={styles.icon} />
				</button>
			</form>
		</div>
	);
};
export default Input;
