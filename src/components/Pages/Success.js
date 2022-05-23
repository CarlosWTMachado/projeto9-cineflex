import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Success (props) {
	const location = useLocation();
	const {movieTitle, movieDate, movieWeekday, assentos, userName, userCpf} = location.state;
	let navigate = useNavigate();
    return (
        <>
            <PageTitle>
                <p>Pedido feito com sucesso!</p>
            </PageTitle>
            <InfoBlock>
                <p className='bolder'>Filme e sessão</p>
                <p>{movieTitle}</p>
                <p>{movieDate} {movieWeekday}</p>
            </InfoBlock>
            <InfoBlock>
                <p className='bolder'>Ingressos</p>
				{ assentos.map(seat => (<p>Assento {seat}</p>))}
            </InfoBlock>
            <InfoBlock>
                <p className='bolder'>Comprador</p>
                <p>Nome: {userName}</p>
                <p>CPF: {userCpf}</p>
            </InfoBlock>
            <Home type='button' onClick={() => navigate("/")}>Voltar para Home</Home>
        </>

    );
}

const Home = styled.button`
	margin-left: 75px;
	width: 225px;
	height: 42px;

	background: #E8833A;
	border-radius: 3px;
`;

const PageTitle = styled.div`
	margin-top: 100px;
	margin-bottom: 30px;
	margin-left: 45px;
	p {
		font-family: 'Roboto',sans-serif;
		font-size: 24px;
		font-weight: bolder;
		color: #247A6B;
	}
`;

const InfoBlock = styled.div`
	margin-left: 30px;
	margin-bottom: 100px;
	.bolder{
		font-weight: bolder;
	}
	p {
		font-family: 'Roboto', sans-serif;
		font-size: 24px;
		color: black;
	}
`;