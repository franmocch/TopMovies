import React from 'react';
import styles from './Button.module.css';

export default function Button(props) {
	const { children, text, accionOnClick, hl = null } = props;

	const onClickHandler = () => {
		accionOnClick();
	};

	const buttonStyles = `${styles['btn']} ${styles[hl]}
	`;

	return (
		<button className={buttonStyles} onClick={onClickHandler}>
			{children ? children : <label>{text}</label>}
		</button>
	);
}
