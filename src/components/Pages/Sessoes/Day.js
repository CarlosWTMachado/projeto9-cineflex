import Session from "./Session";
import React from 'react';
import styled from 'styled-components';

export default function Day ({weekday, date, showtimes}) {    
    return (
        <div>
            <div>
                <Weekday>{weekday} - {date}</Weekday>
            </div>
            <DaySessions>{
                    showtimes.map(showtime => (
                        <Session {...showtime}/>
                    ))
                }
            </DaySessions>
        </div>

    );
}

const DaySessions = styled.div`
	margin-top: 30px;
	margin-bottom: 30px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px;
`;

const Weekday = styled.p`
	font-family: Roboto, sans-serif;
	font-size: 20px;
	letter-spacing: 0.02em;
	color: #293845;
`;