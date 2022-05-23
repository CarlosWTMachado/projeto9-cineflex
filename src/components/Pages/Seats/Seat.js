import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

export default function Seat ({name, id, handleSeats}) {
    
    const [selectedSeat, setSelectedSeat] = useState(false);

    return (

        <SeatSection>
                <p>{name}</p>
        </SeatSection>

    );
}

const SeatSection = styled.div`
	margin-bottom: 10px;
	background: #C3CFD9;
	border: 1px solid #808F9D;
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