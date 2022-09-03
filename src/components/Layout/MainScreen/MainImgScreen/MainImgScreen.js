import styles from './MainImgScreen.module.css';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import SelectedMovie from './SelectedMovie';
import ReactPlayer from 'react-player';
import { useState } from 'react';

export default function MainImgScreen(props) {
	const [start, setStart] = useState(true);

	const submitPlayHandler = () => {
		setStart(!start);
	};
	const actionChang = action => {
		props.actionChange(action);
	};

	return (
		<div className={styles.boxContainer}>
			<div className={styles.elementsContainer}>
				<ReactPlayer
					className={styles.trailer}
					url={props.movie.trailer}
					width='100%'
					height='100%'
					volume={0.2}
					//playing={start}
				/>

				<div className={styles.iconContainer}>
					<div
						className={styles.iconSquare}
						onClick={actionChang.bind(null, 'previous')}
					>
						<MdOutlineNavigateBefore className={styles.icon} />
					</div>
					<div
						className={styles.iconSquare}
						onClick={actionChang.bind(null, 'next')}
					>
						<MdOutlineNavigateNext className={styles.icon} />
					</div>
				</div>
				<SelectedMovie submitPlay={submitPlayHandler} movie={props.movie} />
			</div>
		</div>
	);
}
