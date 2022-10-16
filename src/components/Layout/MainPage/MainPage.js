import React, { Fragment, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Carrousel from './Carrousel/Carrousel';
import MovieInfo from './MovieInfo/MovieInfo';
import ShowMore from './ShowMore/ShowMore';
import MovieContext from '../../context/movie-context';

export default function MainPage() {
	const ctx = useContext(MovieContext);

	return (
		<Fragment>
			<Routes>
				<Route path='/main' element={<Carrousel />} />
				<Route path='/more' element={<ShowMore />} />
				<Route path='*' element={<Navigate to='/main' replace />} />
			</Routes>
			{ctx.displayMovie.display && <MovieInfo />}
		</Fragment>
	);
}
