import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import SearchMovie from './Search/SearchMovie';
import styles from './Nav.module.css';
import imgLogo from '../../../assets/topMoviesLogo.png';
import { BsBookmarkPlusFill } from 'react-icons/bs';

export default function Nav() {
	//

	const toSearch = searching => {
		fetch(`http://www.omdbapi.com/?s=${searching}&apikey=8c005ce0`)
			.then(response => {
				return response.json();
			})
			.then(datas => {
				console.log(datas);
			});

		console.log(searching);
	};

	return (
		<nav className={styles.nav}>
			<div className={styles['logo-container']}>
				<img className={styles.logo} src={imgLogo} alt='topMovies logo' />
			</div>

			<Input onValueToSearch={toSearch}>{/*<SearchMovie/>*/}</Input>
			<Button className={styles.btn} text='Watchlist'>
				<BsBookmarkPlusFill className={styles.icon} />
			</Button>
		</nav>
	);
}
