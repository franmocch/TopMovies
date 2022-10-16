import React from 'react';
import { MovieContextProvider } from './components/context/movie-context';
import styles from './App.module.css';
import Nav from './components/Layout/Nav/Nav';
import MainPage from './components/Layout/MainPage/MainPage';

export default function App() {
	return (
		<div className={styles['container']}>
			<MovieContextProvider>
				<Nav />
				<MainPage />
			</MovieContextProvider>
		</div>
	);
}
