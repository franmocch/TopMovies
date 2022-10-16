import React from 'react';
import styles from './Paginator.module.css';
import { MdOutlineNavigateNext } from 'react-icons/md';

export default function ButtonNext(props) {
	const { currentPage, onCurrent, totalPages } = props;

	const nextButton = `${styles['icon']} ${
		currentPage < totalPages ? styles['next'] : ''
	}`;
	return (
		<li className={nextButton}>
			{currentPage < totalPages && (
				<MdOutlineNavigateNext
					onClick={onCurrent.bind(null, +1)}
					size={'3rem'}
				/>
			)}
		</li>
	);
}
