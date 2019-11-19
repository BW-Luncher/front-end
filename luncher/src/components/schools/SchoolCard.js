import React from 'react';
import styled from 'styled-components';


const SchoolCard = ({ id, school, email, address, funds_needed, funds_given, goal }) => {

	// added styled components
	const Card = styled.div`
		justify-content: center;
		align-items: center;
		border: solid 2px black;
		border-radius: 10px;
		margin: 20px 10px; 
		font-size: .8rem;
	`;

	const DivContainer = styled.div`margin: 20px;`;

	const ButtonLinkContainer = styled.div`margin: 10px 0;`;

	const ButtonLink = styled.button`
    margin: 20px 0; 
    text-decoration: 
    none; border: 1px 
    solid black; 
    padding: 5px; 
    color: black; 
    margin-top: 20px;
    border-radius: 2px;
	`;
	//----

	return (
		<Card>
			<DivContainer key={id}>
				<h1>{school}</h1>
				<h3>Email: {email}</h3>
				<p>Address: {address}</p>
				<p>Funds Needed: {funds_needed}</p>
				<p>Funds Given: {funds_given}</p>
				<p>School's Goal: {goal}</p>
				<ButtonLinkContainer>
					<ButtonLink>Donate</ButtonLink>
				</ButtonLinkContainer>
			</DivContainer>
		</Card>
	);
};

export default SchoolCard;
