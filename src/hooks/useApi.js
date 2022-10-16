import { useState, useCallback } from 'react';

export default function useApi() {
	const [error, setError] = useState(null);

	const setErrorHandler = () => {
		setError(null);
	};

	const sendRequest = useCallback(async (requestConfig, applyData) => {
		try {
			const type = requestConfig.type === 'search' ? 's=' : 'i=';

			const apiUrl = `http://www.omdbapi.com/?${type}${requestConfig.query}&apikey=8c005ce0`;

			const response = await fetch(apiUrl);
			if (!response) {
				throw new Error('Request failed!');
			}
			const data = await response.json();

			if (data.Error) {
				throw new Error('Not found movie');
			}

			applyData(data);
		} catch (error) {
			setError(error);
		}
	}, []);

	return { error, sendRequest, setErrorHandler };
}
