import styles from './SelectedMovie.module.css';
import { BsPlayCircle } from 'react-icons/bs';

export default function SelectedMovie(props) {
	const { description: desc, img, title } = props.movie;

	return (
		<div className={styles.container} onClick={props.submitPlay}>
			<div className={styles.movieContainer}>
				<div>
					<img className={styles.img} src={img} alt='fake ' />
				</div>

				<BsPlayCircle className={styles.icon} />
				<div className={styles.text}>
					<span className={styles.title}>{title}</span>
					<span className={styles.desc}>{desc}</span>
				</div>
			</div>
		</div>
	);
}
