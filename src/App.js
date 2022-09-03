import React, { Fragment } from 'react';
import Nav from './components/Layout/Nav/Nav';
import Carrousel from './components/Layout/MainScreen/Carrousel';
import DownScreen from './components/Layout/DownScreen/DownScreen';

export default function App() {
	return (
		<Fragment>
			<Nav />
			<Carrousel />
			<DownScreen />
		</Fragment>
	);
}
