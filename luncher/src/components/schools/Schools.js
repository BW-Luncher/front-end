/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SchoolCard from "./SchoolCard";

const DivContainerStyle = styled.div``;

const SchoolsStyleDiv = {
  display: "grid",
  gridGap: ".5rem",
  gridTemplateColumns: "repeat(auto-fill, 400px)",
  fontSize: "15px",
  margin: " auto",
  justifyContent: "center",
  width: "90%"
};

const Schools = () => {
  const [school, setSchool] = useState([]);

  useEffect(() => {
    axios
      .get("https://lambdaluncher.herokuapp.com/api/schools")
      .then(res => {
        setSchool(res.data);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  }, []);
  return (
    <DivContainerStyle>
      <div style={SchoolsStyleDiv}>
        {school.map((schools, { id }) => (
          <SchoolCard key={id} {...schools} />
        ))}
      </div>
    </DivContainerStyle>
  );
};

export default Schools;
