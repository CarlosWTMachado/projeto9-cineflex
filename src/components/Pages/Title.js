import React from 'react';
import styled from 'styled-components';

export default function Title ({text}) {
	return(
		<PageTitle>
			<p>{text}</p>
		</PageTitle>
	);
}

const PageTitle = styled.div`
	display: flex;
	margin-top: 100px;
	margin-bottom: 30px;
	align-items: center;
    justify-content: center;

	p{
		font-size: 24px;
    	font-family: Roboto, sans-serif;
	}
`;