import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
	const { fixed, highlight } = props;

	const cardStyles = `${styles['card']}${
		highlight ? ' ' + styles['highlight'] : ''
	}${fixed ? ' ' + styles['size-fixed'] : ''}`;

	return <div className={cardStyles}>{props.children}</div>;
}
