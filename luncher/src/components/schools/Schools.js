import React, { useState, useEffect } from "react";
import axios from "axios";
import schoolInformation from "../../data/data";
import SchoolCard from "./SchoolCard";

const Movie = () => {
  const [school] = useState(schoolInformation);

  useEffect(() => {
    axios
      .get(`http://lambdaluncher.herokuapp.com/api/schools`)
      .then(response => {
        // setSchool(response.data);
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error("ERROR:", error.response.data);
      });
  }, []);

  return (
    <div>
      {school.map((schools, { id }) => (
        <SchoolCard key={id} {...schools} />
      ))}
    </div>
  );
};

export default Movie;
