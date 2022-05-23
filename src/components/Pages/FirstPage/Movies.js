import Movie from './Movie';

import React from 'react';
import styled from 'styled-components';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Movies () {
	const [movies, setMovies] = useState([]);
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        console.log(promise);
        promise.then(response => setMovies(response.data))
		.catch(error => console.log(error));
    }, []);
	return(
		<MoviesSection>
			{
				movies.map(movie => (
					<Movie {...movie}/>
				))
			}
		</MoviesSection>
	);
}

const MoviesSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;