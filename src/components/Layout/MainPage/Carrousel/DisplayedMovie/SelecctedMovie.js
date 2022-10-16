import React from 'react';
import styles from './SelecctedMovie.module.css';
import { BsPlayCircle } from 'react-icons/bs';

export default function SelecctedMovie(props) {
	const { description: desc, img, title } = props.movie;
	const { animation, submitPlay } = props;

	const keyframes = `animation-${animation}`;
	const movieStyles = `${styles['movie-container']} ${
		animation ? styles[keyframes] : ''
	}`;

	const submitPlayController = event => {
		submitPlay();
	};

	return (
		<div className={styles['main-container']} onClick={submitPlayController}>
			<div className={movieStyles}>
				<div className={styles['container-img']}>
					<img className={styles['movie-img']} src={img} alt={title} />
				</div>

				<BsPlayCircle className={styles['play-icon']} size={'8rem'} />

				<div className={styles['description-container']}>
					<h2 className={styles['title']}>{title}</h2>
					<p className={styles['desc']}>{desc}</p>
				</div>
			</div>
		</div>
	);
}
