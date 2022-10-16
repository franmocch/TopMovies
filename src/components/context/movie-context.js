import React, { useState } from 'react';

const MovieContext = React.createContext({
	displayMovie: false,
	setDisplayMovie: () => {},
	setInitialState: () => {}
});
export default MovieContext;

const INITIAL_STATE = {
	displayMovie: false,
	movieId: null
};
export const MovieContextProvider = props => {
	const [displayMovie, setDisplayMovie] = useState(INITIAL_STATE);

	const setDisplayMovieHandler = id => {
		setDisplayMovie({ movieId: id, display: true });
	};
	const setInitialState = () => {
		setDisplayMovie(INITIAL_STATE);
	};

	return (
		<MovieContext.Provider
			value={{
				setDisplayMovie: setDisplayMovieHandler,
				displayMovie: displayMovie,
				setInitialState: setInitialState
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};
