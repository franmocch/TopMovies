import React from 'react';
import styles from './ButtonNav.module.css';
import Button from './Button';

export default function ButtonNav(props) {
	const { text, open, onClickIn, icon } = props;

	const buttonStyles = `${styles['hl-nav']} ${open ? styles['open'] : ''}`;

	return (
		<Button accionOnClick={onClickIn}>
			<div className={buttonStyles}>
				<span className={styles['icon']}>{icon}</span>
				<label>{text}</label>
			</div>
		</Button>
	);
}
