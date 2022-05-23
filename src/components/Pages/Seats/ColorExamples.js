import React from 'react';
import styled from 'styled-components';

export default function ColorExamples () {
    return (
		<>
			<Examples>
				<div className='selected example'></div>
				<div className='available example'></div>
				<div className='unavailable example'></div>
			</Examples>
			<Info>
				<p>Selecionado</p>
				<p>Disponível</p>
				<p>Indisponível</p>
			</Info>
		</>
    );
}

const Examples = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
	
	.example{
		width: 25px;
		height: 25px;

		box-sizing: border-box;
		border-radius: 17px;
	}

	.selected {
		background: #8DD7CF;
		border: 1px solid #1AAE9E;
	}
	
	.available {
		background: #C3CFD9;
		border: 1px solid #7B8B99;
	}
	
	.unavailable {
		background: #FBE192;
		border: 1px solid #F7C52B;
	}
`;

const Info = styled.div`
	margin-top: 2px;
    margin-bottom: 50px;
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

	p{
		font-size: 13px;
    	font-family: Roboto, sans-serif;
		color: #4E5A65;
	}
`;