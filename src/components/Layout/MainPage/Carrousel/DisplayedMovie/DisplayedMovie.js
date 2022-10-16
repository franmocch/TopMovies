import React from 'react';
import styles from './DisplayedMovie.module.css';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import SelecctedMovie from './SelecctedMovie';
import ReactPlayer from 'react-player';
import { useState } from 'react';

export default function DisplayedMovie(props) {
	const { movie, animation } = props;

	const [start, setStart] = useState(true);

	const submitPlayHandler = () => {
		setStart(!start);
	};

	const actionChang = action => {
		props.actionChange(action);
	};

	const keyframes = `animation-${animation}`;
	const trailerStyles = `${styles['trailer-container']} ${
		animation ? styles[keyframes] : ''
	}`;

	return (
		<div className={styles['movie-container']}>
			<div className={styles['sub-container']}>
				<div className={trailerStyles}>
					<ReactPlayer
						url={movie.trailer}
						width='100%'
						height='100%'
						volume={0.2}
						playing={start}
					/>
				</div>

				<div className={styles['icon-container']}>
					<button
						className={styles['icon-borders']}
						onClick={actionChang.bind(null, 'left')}
					>
						<MdOutlineNavigateBefore className={styles['icon']} />
					</button>
					<button
						className={styles['icon-borders']}
						onClick={actionChang.bind(null, 'rigth')}
					>
						<MdOutlineNavigateNext className={styles['icon']} />
					</button>
				</div>
				<div className={styles['description']}>
					<SelecctedMovie
						submitPlay={submitPlayHandler}
						movie={movie}
						animation={animation}
					/>
				</div>
			</div>
		</div>
	);
}
