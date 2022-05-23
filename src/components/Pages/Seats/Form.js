import React from 'react';
import styled from 'styled-components';

export default function Seat ({doSubmit, form, handleForm}) {
	return (
		<Data onSubmit={doSubmit}>
			<div className='customer-name'>
				<label for='name'>Nome do comprador:</label>
				<input className='customer-input' id='name' name='name' value={form.name} onChange={handleForm} placeholder="Digite seu nome..." required/>
			</div>
			<div className='customer-cpf'>
				<label for='cpf'>CPF do comprador:</label>
				<input className='customer-input' id='cpf' name='cpf' value={form.cpf} onChange={handleForm} placeholder="Digite seu CPF..." required/>
			</div>
			<section className='finish'>
				<button type='submit' className='finish-seat'>Reservar assento(s)</button>
			</section>
		</Data>
    );
}

const Data = styled.form`
	.customer-name {
		margin-left: 20px;
		font-family: 'Roboto', sans-serif;
	}

	.customer-cpf {
		margin-top: 10px;
		margin-left: 20px;
		font-family: 'Roboto', sans-serif;
	}

	.customer-input {
		width: 327px;
		height: 51px;
		
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		box-sizing: border-box;
		border-radius: 3px;
	}

	.finish {
		margin-left: 75px;
		margin-top: 60px;
	}

	.finish-seat {
		width: 225px;
		height: 42px;
		
		background: #E8833A;
		border-radius: 3px;

		font-family: 'Roboto', sans-serif;
		color: white;
	}
`;