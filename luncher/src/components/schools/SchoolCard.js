import React from 'react';
import styled from 'styled-components';

const SchoolCard = ({ id, school, email, address, funds_needed, funds_given, goal, school_insignia }) => {
	const Card = styled.div`
		justify-content: center;
		align-items: center;
		border: solid 2px black;
		border-radius: 10px;
		margin: 40px 10px;
		font-size: 1.0rem;
		background-color: #fffff5;
		opacity: 88%;
		box-shadow: 5px 10px 2px #2d2b2b;
	`;

	const DivContainer = styled.div`margin: 20px;`;

	const ButtonLinkContainer = styled.div`margin: 10px 0;`;

	const ButtonLink = styled.button`
		margin: 20px 0;
		text-decoration: none;
		border: 1px solid black;
		padding: 10px;
		color: black;
		margin-top: 20px;
    border-radius: 2px;
    font-size: 15px;
	`;

	return (
		<div className="pop-out">
			<Card>
				<DivContainer classname="single-team" key={id}>
					<img src={`${school_insignia}`} alt={`${school}`} />
					<h1>{school}</h1>
					<p>
						<i className="fas fa-envelope-square" /> Email: {email}
					</p>
					<p>
						<i class="fas fa-map-pin" /> Address: {address}
					</p>
					<p>Funds Needed: {funds_needed}</p>
					{/*<p>Funds Given: {funds_given}</p>
          <p>School's Goal: {goal}</p>*/}
					<ButtonLinkContainer>
						<ButtonLink>Donate</ButtonLink>
					</ButtonLinkContainer>
				</DivContainer>
			</Card>
		</div>
	);
};

export default SchoolCard;
