export default function transformMovie(movie) {
	return {
		id: movie.imdbID,
		title: movie.Title,
		img: movie.Poster,
		type: movie.Type,
		released: movie.Released,
		awards: movie.Awards,
		director: movie.Director,
		genre: movie.Genre,
		actors: movie.Actors,
		score: movie.imdbRating,
		desc: movie.Plot,
		runtime: movie.Runtime
	};
}
