import React from 'react';
import styled from 'styled-components';

export default function Success ({title, date, name}) {
    return (
        <>
            <PageTitle>
                <p>Pedido feito com sucesso!</p>
            </PageTitle>
            <InfoBlock>
                <p>Filme e sessão</p>
                <p>{title}</p>
                <p>{date} {name}</p>
            </InfoBlock>
            <InfoBlock>
                <p>Ingressos</p>
                <p>Assento(s) {}</p>
            </InfoBlock>
            <InfoBlock>
                <p>Comprador</p>
                <p>Nome: {}</p>
                <p>CPF: {}</p>
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