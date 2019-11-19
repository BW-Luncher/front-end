import React from "react";

const SchoolCard = ({
  school,
  email,
  address,
  funds_needed,
  funds_given,
  goal
}) => {
  return (
    <div>
      <h1>School Name: {school}</h1>
      <h2>Email: {email}</h2>
      <p>Address: {address}</p>
      <p>Funds Needed: {funds_needed}</p>
      <p>Funds Given: {funds_given}</p>
      <p>School's Goal: {goal}</p>
    </div>
  );
};

export default SchoolCard;
