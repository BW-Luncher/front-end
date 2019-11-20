import React from "react";
import {
  DivContainer,
  Card,
  ButtonLinkContainer,
  ButtonLink
} from "./school.styles";

const SchoolCard = ({
  id,
  school,
  email,
  address,
  funds_needed,
  funds_given,
  goal,
  school_insignia
}) => (
  <Card>
    <DivContainer key={id}>
      <h1>{school}</h1>
      <img src={`${school_insignia}`} alt={`${school}`} />
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

export default SchoolCard;
