import React from 'react';
import styles from './Paginator.module.css';
import { MdOutlineNavigateBefore } from 'react-icons/md';

export default function ButtonPrev(props) {
	const { currentPage, onCurrent } = props;

	const beforeButton = `${styles['icon']} ${
		currentPage > 1 ? styles['before'] : ''
	}`;
	return (
		<li className={beforeButton}>
			{currentPage > 1 && (
				<MdOutlineNavigateBefore
					onClick={onCurrent.bind(null, -1)}
					size={'3rem'}
				/>
			)}
		</li>
	);
}
