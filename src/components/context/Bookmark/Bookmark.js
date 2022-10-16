export default function toBookmark(movie) {
	const bookmarked = JSON.parse(localStorage.getItem('Bookmarked'));

	const hasMovie = bookmarked && bookmarked.some(el => el.id === movie.id);

	if (!bookmarked) {
		localStorage.setItem('Bookmarked', JSON.stringify([movie]));
	} else {
		if (hasMovie) {
			const toSave = bookmarked.filter(el => el.id !== movie.id);
			localStorage.setItem('Bookmarked', JSON.stringify([...toSave]));
		} else {
			const toSave = [movie, ...bookmarked];
			localStorage.setItem('Bookmarked', JSON.stringify([...toSave]));
		}
	}
}

export function isAMovieBookmarked(movie) {
	const bookmarked = JSON.parse(localStorage.getItem('Bookmarked'));

	const isBookmarked = bookmarked
		? bookmarked.some(el => el.id === movie.id)
		: false;

	return isBookmarked;
}

export function getMovies() {
	const movArray = JSON.parse(localStorage.getItem('Bookmarked'));
	return movArray ? movArray : [];
}
export function removeMovies() {
	localStorage.removeItem('Bookmarked');
}
