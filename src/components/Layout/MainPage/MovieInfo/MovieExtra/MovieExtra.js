import React from 'react';
import styles from './MovieExtra.module.css';
import { AiFillStar } from 'react-icons/ai';
import BMIcon from '../../../../UI/BMIcon/BMIcon';
export default function MovieExtra(props) {
	const {
		id,
		title,
		img,
		released,
		awards,
		director,
		genre,
		actors,
		score,
		desc,
		runtime,
		type
	} = props.movie;

	const movie = { id, title, img, type, released };

	return (
		<div className={styles['movie-info']}>
			<header key={id}>
				<h1>{title}</h1>
				<div className={styles['info']}>
					<h4>{released}</h4>
					<h4>{genre}</h4>
					<h4>{runtime}</h4>
				</div>
				<div className={styles['image']}>
					<img src={img} alt={title} />;
					<div className={styles['score']}>
						<AiFillStar />
						<h2>{score}/10</h2>
						<BMIcon onAbsolute={true} onMovie={movie} />
					</div>
				</div>
			</header>
			<article>
				<h3 className={styles['award']}>Awards: {awards}</h3>
				<p>{desc}</p>
				<div className={styles['extra']}>
					<h3>Stars: {actors}</h3>
					<h3>Director: {director}</h3>
				</div>
			</article>
		</div>
	);
}
