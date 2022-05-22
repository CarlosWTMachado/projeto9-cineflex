import Title from "../Title";
import Day from "./Day";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Footer from "../../Footer/Footer";

export default function Sessions () {
	const {idFilme} = useParams();
	const [sessions, setSessions] = useState(null);

	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
		promise.then(response => setSessions(response.data))
		.catch(console.log(error => console.log(error)));
	}, [idFilme]);
	if (sessions === null) return (<></>);
    else
	return(
		<>
			<Title text="Selecione o horário"/>

			<DaySessions>{
                sessions.days.map(day => (
                    <Day {...day} /> 
                ))
            }
            </DaySessions>

			<Footer {...sessions}/>
		</>
	);
}

const DaySessions = styled.div`
	margin-left: 30px;
	font-family: Roboto, sans-serif;
`;