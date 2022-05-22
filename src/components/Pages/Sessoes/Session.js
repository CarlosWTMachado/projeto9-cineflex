import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

export default function Session ({id, name}) {
    return (

        <Link to={`/seats/${id}`}>
            <SessionSection>
                <p className="session-time">{name}</p>
            </SessionSection>
        </Link>
    );
}

const SessionSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 83px;
	height: 43px;
	background: #E8833A;
	border-radius: 3px;
	p{
		font-size: 18px;
    	font-family: Roboto, sans-serif;
		color: #FFFFFF;
	}
`;
