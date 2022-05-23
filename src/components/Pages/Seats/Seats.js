import Title from "../Title";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Seat from './Seat';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import FooterSeat from "./FooterSeat";


export default function Seats () {
	const {idSessao} = useParams(); 
    const [sessions, setSessions] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');

    useEffect (()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => setSessions(response.data))
		.catch(console.log(error => console.log(error)));
    }, [idSessao])
    let navigate = useNavigate();

    function handleSeats (id) {
        if (selectedSeats.includes(id)) {
            let newSelectedSeat = selectedSeats.filter(seat => seat !== id);
            setSelectedSeats([...newSelectedSeat]);
        } else { 
            setSelectedSeats([...selectedSeats, id]);
        }
    }
	if (sessions === null) return (<></>);
    else
	return(
		<>
			<Title text="Selecione o(s) assento(s)"/>
			<section className='seats'>
                    <AllSeats>{
                            sessions.seats.map(seat => (
                                <Seat {...seat} handleSeats={handleSeats}/>
                            ))
                        }
                    </AllSeats>
                </section>
                <Examples>
                    <div className='selected-example'></div>
                    <div className='available-example'></div>
                    <div className='unavailable-example'></div>
                </Examples>
                <Info>
                    <p>Selecionado</p>
                    <p>Disponível</p>
                    <p>Indisponível</p>
                </Info>
                <Data>
                    <div className='customer-name'>
                        <p>Nome do comprador:</p>
			            <input className='customer-input' value={name} onChange={input => (setName(input.target.value))} placeholder="Digite seu nome..." />
                    </div>
                    <div className='customer-cpf'>
                        <p>CPF:</p>
			            <input className='customer-input' value={cpf} onChange={input => (setCPF(input.target.value))} placeholder="Digite seu CPF..." />
                    </div>
                    <section className='finish'>
                        <button type='button' className='finish-seat'>Reservar assento(s)</button>
                    </section>
                </Data>
			<FooterSeat {...sessions}/>
		</>
	);
}

const AllSeats = styled.div`
	margin-left: 24px;
	margin-right: 24px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 7px;
`;

const Examples = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;

	.selected-example {
		width: 25px;
		height: 25px;
		left: 78px;
		top: 377px;
		
		background: #8DD7CF;
		border: 1px solid #1AAE9E;
		box-sizing: border-box;
		border-radius: 17px;
	}
	
	.available-example {
		width: 24px;
		height: 24px;
		left: 178px;
		top: 377px;
		
		background: #C3CFD9;
		border: 1px solid #7B8B99;
		box-sizing: border-box;
		border-radius: 17px;
	}
	
	.unavailable-example {
		width: 24px;
		height: 24px;
		left: 271px;
		top: 377px;
		
		background: #FBE192;
		border: 1px solid #F7C52B;
		box-sizing: border-box;
		border-radius: 17px;
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

const Data = styled.div`
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