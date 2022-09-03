import styles from './Movie.module.css';
import Card from '../Card/Card';
import { BsPlayCircle } from 'react-icons/bs';

export default function Movie(props) {
	const { img, title, desc } = props;

	return (
		<Card>
			<div onClick={props.onClick} className={styles.movie}>
				<div className={styles.imgContainer}>
					<img src={img} alt='sds' />
				</div>
				<div className={styles.otherContainer}>
					<BsPlayCircle className={styles.icon} />
					<span className={styles.title}>{title}</span>
					<span className={styles.desc}>{desc}</span>
				</div>
			</div>
		</Card>
	);
}
