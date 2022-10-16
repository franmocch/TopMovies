import React from 'react';
import styles from './Paginator.module.css';
import paginationLogic from './logicPagination';
import ButtonPrev from './ButtonPrev';
import ButtonNext from './ButtonNext';

///////////////////////////////////////
const displayedMovies = 10;
const firstPage = 1;
//////////////////////////////////////
export default function Paginator(props) {
	const { totalMovies, onCurrent, currentPage, selectOnClick } = props;

	const totalPages = Math.ceil(totalMovies / displayedMovies);

	const secondButton = paginationLogic(2, -1, -2, -3, currentPage, totalPages);
	const thirdButton = paginationLogic(3, 0, -1, -2, currentPage, totalPages);
	const quartButton = paginationLogic(4, +1, 0, -1, currentPage, totalPages);

	return (
		<div className={styles['pagination']}>
			<ul>
				<ButtonPrev currentPage={currentPage} onCurrent={onCurrent} />

				<li>
					<span
						onClick={selectOnClick.bind(null, firstPage)}
						className={currentPage === 1 ? styles['active'] : styles['minmax']}
					>
						{firstPage}
					</span>
				</li>

				{totalPages > 1 && (
					<li>
						<span
							onClick={selectOnClick.bind(null, secondButton)}
							className={currentPage === 2 ? styles['active'] : ''}
						>
							{secondButton}
						</span>
					</li>
				)}

				{totalPages > 2 && (
					<li>
						<span
							onClick={selectOnClick.bind(null, thirdButton)}
							className={
								currentPage === 3 ||
								(totalPages - 2 >= currentPage && currentPage > 2)
									? styles['active']
									: ''
							}
						>
							{thirdButton}
						</span>
					</li>
				)}

				{totalPages > 3 && (
					<li>
						<span
							onClick={selectOnClick.bind(null, quartButton)}
							className={
								(currentPage === 4 && quartButton === 4) ||
								(currentPage === totalPages - 1 && totalPages > 4)
									? styles['active']
									: ''
							}
						>
							{quartButton}
						</span>
					</li>
				)}
				{totalPages > 4 && (
					<li>
						<span
							onClick={selectOnClick.bind(null, totalPages)}
							className={
								currentPage === totalPages ? styles['active'] : styles['minmax']
							}
						>
							{totalPages}
						</span>
					</li>
				)}

				<ButtonNext
					currentPage={currentPage}
					onCurrent={onCurrent}
					totalPages={totalPages}
				/>
			</ul>
		</div>
	);
}
