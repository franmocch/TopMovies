import styles from './Button.module.css';

export default function Button(props) {
	//
	return (
		<div className={styles.btn}>
			<button>{props.children}</button>
			<label>{props.text}</label>
		</div>
	);
}
