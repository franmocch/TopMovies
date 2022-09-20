import React from 'react';
import Card from '../../../UI/Card/Card';
import Movie from '../../../UI/Movie/Movie';
import DogGif from '../../../../assets/perro.gif';

const NotAMarked = {
	img: DogGif,
	title: 'Nothing to show',
	desc: ' Maybe you have too much  free time...'
};

export default function NotAMarkedMovie() {
	return (
		<Card fixed={true}>
			<Movie img={NotAMarked.img} title={NotAMarked.title}>
				<p>{NotAMarked.desc}</p>
			</Movie>
		</Card>
	);
}
