import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

import Title from "../Title";
import Seat from './Seat';
import FooterSeat from "./FooterSeat";
import ColorExamples from "./ColorExamples";
import Form from "./Form";

export default function Seats () {
	const {idSessao} = useParams(); 
	const [sessions, setSessions] = useState(null);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [form, setForm] = useState({
		name: '',
		cpf: '',
	});
	let navigate = useNavigate();

	useEffect (()=> {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
		promise.then(response => setSessions(response.data))
		.catch(error => console.log(error));
	}, [idSessao]);

	function handleSelected (id) {
		if (selectedSeats.includes(id)) {
			let newSelectedSeat = selectedSeats.filter(seat => seat !== id);
			setSelectedSeats([...newSelectedSeat]);
			return false;
		} else { 
			setSelectedSeats([...selectedSeats, id]);
			return true;
		}
	}

	function handleForm (e) {
		setForm({...form, [e.target.name]: e.target.value,});
	}

	function doSubmit (event) {
		event.preventDefault();
		console.log(form.name);
		console.log(form.cpf);
		console.log(selectedSeats);
		const promisse = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {ids: selectedSeats, name: form.name, cpf: form.cpf});
        promisse.then(() => navigate('/sucesso'))
		.catch(error => console.log(error));
	}
	if (sessions === null) return (<></>);
	else
	return(
		<>
			<Title text="Selecione o(s) assento(s)"/>
			<div className='seats'>
				<AllSeats>
					{
						sessions.seats.map(seat => (
							<Seat {...seat} handleSelected={handleSelected}/>
						))
					}
				</AllSeats>
			</div>
			<ColorExamples/>
			<Form doSubmit={doSubmit} form={form} handleForm={handleForm}/>
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