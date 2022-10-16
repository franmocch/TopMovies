import React from 'react';
import BKIcon from './../../../../components/UI/BMIcon/BMIcon';
import Movie from '../../../UI/Movie/Movie';
import Card from '../../../UI/Card/Card';
import notFound from '../../../../assets/preocupation.gif';

export default function FoundMovie(props) {
	const {
		img = notFound,
		title = 'Not found movie...',
		year = '😅',
		type = 'try with other title'
	} = props.movie;

	return (
		<Card fixed={props.fixed} highlight={props.highlight}>
			<Movie title={title} img={img} onClick={props.onClick}> 
				<h4>{year}</h4>
				<h4> {type}</h4>
			</Movie>
			{!props.NotFound && <BKIcon onMovie={props.movie} onSize='1.8' />}
		</Card>
	);
}
