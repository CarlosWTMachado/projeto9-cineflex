import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

export default function Movie ({id, posterURL, title}) {
    return (
        <Link to={`/sessoes/${id}`}>
            <MovieImage>
                <img src={posterURL} alt={title} height={193} width={129}/>
            </MovieImage>
        </Link>

    );

}

const MovieImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 145px;
	height: 209px;
	left: 30px;
	top: 177px;
	background-color: #FFFFFF;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
`;