import React, { useState, useEffect } from "react";
import axios from "axios";
// import schoolInformation from "../../data/data";
import SchoolCard from "./SchoolCard";

const SchoolsStyleDiv = {
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(auto-fill, 390px)",
  fontSize: "15px",
  margin: " auto",
  justifyContent: "center",
  width: "90%"
};

const Schools = () => {
  const [school, setSchool] = useState([]);

  useEffect(() => {
    axios
      .get("http://lambdaluncher.herokuapp.com/api/schools")
      .then(res => {
        setSchool(res.data);
        // eslint-disable-next-line no-console
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err, err.response);
      });
  }, []);

  return (
    <div style={SchoolsStyleDiv}>
      {school.map((schools, { id }) => (
        <SchoolCard key={id} {...schools} />
      ))}
    </div>
  );
};

export default Schools;
