import React, { useState } from 'react';
import styles from './BMIcon.module.css';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import toBookmark, {
	isAMovieBookmarked
} from '../../../components/context/Bookmark/Bookmark';

export default function BMIcon(props) {
	const { onMovie: movie, onRemove, onSize, onAbsolute } = props;
	const INITIAL_STATE = isAMovieBookmarked(movie);
	const [markedIcon, setMarkedIcon] = useState(INITIAL_STATE);

	const classContainer = `${styles['container']} ${
		onAbsolute ? styles['on-absolute'] : ''
	}`;
	const classBookmarkFill = `${styles['bookmarked']} ${
		onAbsolute ? styles['bgabsolute'] : styles['bgregular']
	}`;
	const classNoBookmark = `${
		onAbsolute ? styles[''] : styles['no-bookmarked']
	}`;

	const setMarkedIconHandler = () => {
		const isMarked = isAMovieBookmarked(movie);
		setMarkedIcon(isMarked);
	};

	const onClickHandler = () => {
		toBookmark(movie);
		setMarkedIconHandler();
		onRemove && onRemove();
	};

	const BookmarkFill = () => {
		return (
			<div className={classBookmarkFill}>
				<BsBookmarkFill
					className={onSize === '1.5' ? styles['_1-5_rem'] : styles['_1-8_rem']}
				/>
			</div>
		);
	};
	const Bookmark = () => {
		return (
			<div className={classNoBookmark}>
				<BsBookmark className={styles['to-bookmark']} />
			</div>
		);
	};

	return (
		<div className={classContainer} onClick={onClickHandler}>
			{markedIcon ? <BookmarkFill /> : <Bookmark />}
		</div>
	);
}
