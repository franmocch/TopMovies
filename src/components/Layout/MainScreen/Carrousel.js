import { useState } from 'react';
import styles from './Carrousel.module.css';
import AsideScreen from './AsideScreen/AsideScreen';
import MainImgScreen from './MainImgScreen/MainImgScreen';
import Movies from './objPeliculas';

export default function Carrousel() {
	const moviesArray = Object.values(Movies);

	const [queueMovies, setQueueMovies] = useState(moviesArray);
	const [selectedMovie, setSelectedMovie] = useState(moviesArray[0]);
	const [sideMovies, setSideMovies] = useState(moviesArray.slice(1, 4));

	const buttonMoviesHandler = action => {
		const newSideArray = [...queueMovies];

		if (action === 'next') {
			const shftMov = newSideArray.shift();
			newSideArray.push(shftMov);
		}
		if (action === 'previous') {
			const shftMov = newSideArray.pop();
			newSideArray.unshift(shftMov);
		}

		setQueueMovies([...newSideArray]);
		setSelectedMovie(newSideArray.shift());
		setSideMovies(newSideArray);
	};

	const clickMoviesHandler = movie => {
		const newSideArray = [...sideMovies.concat(selectedMovie)];
		const filteredArray = newSideArray.filter(
			film => movie.title !== film.title
		);

		setSideMovies([...filteredArray]);
		setSelectedMovie(movie);
	};

	return (
		<div className={styles.container}>
			<div className={styles.selectedMovie}>
				<MainImgScreen
					actionChange={buttonMoviesHandler}
					movie={selectedMovie}
				/>
			</div>
			<div className={styles.asideBar}>
				<AsideScreen movies={sideMovies} onClickMov={clickMoviesHandler} />
			</div>
		</div>
	);
}
