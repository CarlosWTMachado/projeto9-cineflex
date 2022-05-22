import React from 'react';
import styled from 'styled-components';


export default function Footer ({posterURL, title}) {
    return (
        <FooterSection>
            <FooterThumbnail>
                <img className='thumbnail' src={posterURL} alt={title} width={48} height={72}/>
            </FooterThumbnail>
			<Title>{title}</Title>
        </FooterSection>

    );
}

const FooterSection = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	bottom: 0;
    padding-top: 15px;
    width: 100vw;
    height: 117px;
    background-color: #9EADBA;
`;

const FooterThumbnail = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 89px;
	background-color:#FFFFFF;
	margin-left: 20px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 2px;
`;

const Title = styled.p`
	font-family: Roboto, sans-serif;
	font-size: 26px;
	color: #293845;
	margin-left: 15px;
`;