import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import styles from './Input.module.css';
import { BsSearch } from 'react-icons/bs';

//Text
const textValue = 'Search TopMovies';
//////////////////////////////////////////

const Input = forwardRef((props, ref) => {
	const { toSearchInput, actionOnChange } = props;
	const toSearchRef = useRef();

	const onChangeHandler = event => {
		event.preventDefault();
		const value = toSearchRef.current.value;
		toSearchInput(value);
		actionOnChange();
	};

	const inputInitialValue = () => {
		toSearchRef.current.value = '';
	};
	useImperativeHandle(ref, () => {
		return {
			inputInitialValue
		};
	});

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
				/>

				<button className={styles.button}>
					<BsSearch className={styles.icon} />
				</button>
			</form>
		</div>
	);
});
export default Input;
