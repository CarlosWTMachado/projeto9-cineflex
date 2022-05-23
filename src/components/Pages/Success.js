import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

export default function Success (props) {
	const location = useLocation();
	const {movieTitle, movieDate, movieWeekday, assentos, userName, userCpf} = location.state;
    return (
        <>
            <PageTitle>
                <p>Pedido feito com sucesso!</p>
            </PageTitle>
            <InfoBlock>
                <p>Filme e sessão</p>
                <p>{movieTitle}</p>
                <p>{movieDate} {movieWeekday}</p>
            </InfoBlock>
            <InfoBlock>
                <p>Ingressos</p>
                <p>Assento(s) {assentos}</p>
            </InfoBlock>
            <InfoBlock>
                <p>Comprador</p>
                <p>Nome: {userName}</p>
                <p>CPF: {userCpf}</p>
            </InfoBlock>
        </>

    );
}

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
	p {
		font-weight: bolder;
		font-family: 'Roboto', sans-serif;
		font-size: 24px;
		color: black;
	}
`;