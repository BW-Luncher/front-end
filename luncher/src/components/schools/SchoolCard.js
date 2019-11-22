import React from "react";
import {
  Card,
  DivContainer,
  ButtonLinkContainer,
  ButtonLink
} from "./school.styles";

const SchoolCard = ({
  id,
  school,
  email,
  address,
  funds_needed,
  goal,
  school_insignia
}) => {
  return (
    <div className="pop-out">
      <Card>
        <DivContainer key={id}>
          <h1>{school}</h1>
          <img src={`${school_insignia}`} alt={`${school}`} />
          <p>
            <i className="fas fa-envelope-square" /> Email: {email}
          </p>
          <p>
            <i className="fas fa-map-pin" /> Address: {address}
          </p>
          <p>Funds Needed: {funds_needed}</p>

          <p>School's Goal: {goal}</p>
          <ButtonLinkContainer>
            <ButtonLink>Donate</ButtonLink>
          </ButtonLinkContainer>
        </DivContainer>
      </Card>
    </div>
  );
};

export default SchoolCard;
