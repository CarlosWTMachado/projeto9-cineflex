import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

export default function Seat ({name, id, isAvailable, handleSelected}) {
	let isClicked = false;
	
	function validBackground(){
		if(isAvailable){
			if(isClicked) return "#8DD7CF";
			else return "#C3CFD9";
		}else return "#FBE192";
	}

	function validBorder(){
		if(isAvailable){
			if(isClicked) return "#1AAE9E";
			else return "#808F9D";
		}else return "#F7C52B";
	}

	const [background, setBackground] = useState(validBackground);
	const [border, setBorder] = useState(validBorder);

	return (
		<SeatSection 
			background={background}
			border={border} 
			onClick={() => {
				if(isAvailable){
					isClicked = handleSelected(id);
					setBackground(validBackground);
					setBorder(validBorder);
				}else
					alert("Esse assento não está disponível");
			}}
		>
			<p>{name}</p>
		</SeatSection>
    );
}

const SeatSection = styled.div`
	margin-bottom: 10px;
	background: ${(props) => props.background};
	border: 1px solid ${(props) => props.border};
	box-sizing: border-box;
	border-radius: 12px;
	p{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		font-size: 11px;
		color: #000000;
	}
`;