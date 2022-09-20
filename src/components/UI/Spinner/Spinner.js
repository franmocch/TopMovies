import React from 'react';
import Card from '../Card/Card';
import { BeatLoader } from 'react-spinners';

export default function Spinner() {
	return (
		<Card fixed={true}>
			<BeatLoader color='#f0f0f0' size={10} />
		</Card>
	);
}
