import React from 'react';
import styles from './Movie.module.css';

export default function Movie(props) {
	const { img, title, children, column, scale, onClick } = props;

	const movieContainer = `${styles['movie_container']} ${
		column && styles['column']
	} ${scale && styles['scale-img-effect']}`;

	return (
		<div className={movieContainer} onClick={onClick}>
			<div className={styles['container_img']}>
				<img className={styles['movie_img']} src={img} alt={title} />
			</div>

			<div className={styles['movie_info']}>
				<h2 className={styles['tittle']}>{title}</h2>
				{children}
			</div>
		</div>
	);
}
