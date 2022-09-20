import React, { useState } from 'react';
import styles from './BMIcon.module.css';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import toBookmark, {
	isAMovieBookmarked
} from '../../../components/context/Bookmark/Bookmark';

export default function BMIcon(props) {
	const { onMovie: movie, onRemove, onSize } = props;
	const INITIAL_STATE = movie && isAMovieBookmarked(movie);
	const [markedIcon, setMarkedIcon] = useState(INITIAL_STATE);

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
			<div className={styles.containerBookmarkFill}>
				<BsBookmarkFill
					className={
						onSize === '1.5'
							? styles['bookmarkFill_1-5_rem']
							: styles['bookmarkFill_1-8_rem']
					}
				/>
			</div>
		);
	};
	const Bookmark = () => {
		return (
			<div className={styles.containerBookmark}>
				<BsBookmark className={styles.bookmark} />
			</div>
		);
	};
	return (
		<div className={styles.container} onClick={onClickHandler}>
			{markedIcon ? <BookmarkFill /> : <Bookmark />}
		</div>
	);
}
