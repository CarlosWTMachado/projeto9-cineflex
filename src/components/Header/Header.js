import React from 'react';
import styled from 'styled-components';

export default function Header () {
	return (
		<header>
			<HeaderContainer>
				<p className="app-title">CINEFLEX</p>
			</HeaderContainer>
		</header>
	);
}

const HeaderContainer = styled.div`
	top: 0;
	position: fixed;
	width: 100vw;
	height: 67px;
	background-color:#C3CFD9;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		color: #E8833A;
		font-size: 34px;
    	font-family: Roboto, sans-serif;
	}
`;