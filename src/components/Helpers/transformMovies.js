export default function transformMovies(Movies, Action) {
	const loadedMovies = [];

	for (const movie of Movies) {
		loadedMovies.push({
			id: movie.imdbID,
			title: movie.Title,
			img: movie.Poster,
			type: movie.Type,
			year: movie.Year
		});
	}
	Action([...loadedMovies]);
}
