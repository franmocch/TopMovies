import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../UI/Button/Button';

export default function NavShowMore(props) {
	const navigate = useNavigate();

	const navigateHandler = () => {
		props.visibilityHidden();
		navigate('/more', { state: { query: props.query } });
		props.inputRef.current.inputInitialValue();
	};
	return (
		<Button
			accionOnClick={navigateHandler}
			text='Show more...'
			hl='hl-yellow'
		/>
	);
}
