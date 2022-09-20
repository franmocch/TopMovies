import React from 'react';

import styles from './App.module.css';
import Nav from './components/Layout/Nav/Nav';
import DownSection from './components/Layout/DownSection/DownSection';
import MainPage from './components/Layout/MainPage/MainPage';

export default function App() {
	return (
		<div className={styles['container']}>
			<Nav />
			<MainPage />
		</div>
	);
}
