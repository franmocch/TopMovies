import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Carrousel from './Carrousel/Carrousel';
import ShowMore from './ShowMore/ShowMore';

export default function MainPage() {
	return (
		<Routes>
			<Route path='/main' element={<Carrousel />} />
			<Route path='/more' element={<ShowMore />} />
			<Route path='*' element={<Navigate to='/main' replace />} />
		</Routes>
	);
}
