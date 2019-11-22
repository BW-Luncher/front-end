/* eslint-disable no-console */
import React, { useContext } from "react";
import { SchoolContext } from "../../contexts/SchoolContext";
import { SchoolsStyleDiv, DivContainer } from "./school.styles";
import SchoolCard from "./SchoolCard";

const SchoolList = () => {
  const { schools } = useContext(SchoolContext);

  return (
    <DivContainer>
      <div style={SchoolsStyleDiv}>
        {schools.map((school, { id }) => (
          <SchoolCard key={id} {...school} />
        ))}
      </div>
    </DivContainer>
  );
};

export default SchoolList;
