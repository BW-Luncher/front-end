/* eslint-disable no-console */
import React, { useContext } from "react";
import { SchoolContext } from "../../context/SchoolContext";
import { SchoolsStyleDiv, DivContainer } from "./school.styles";
import SchoolCard from "./SchoolCard";

const SchoolList = () => {
  const [school] = useContext(SchoolContext);
  return (
    <DivContainer>
      <div style={SchoolsStyleDiv}>
        {school.map((schools, { id }) => (
          <SchoolCard key={id} {...schools} />
        ))}
      </div>
    </DivContainer>
  );
};

export default SchoolList;
