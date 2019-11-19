import React, { useState, useEffect } from "react";
import axios from "axios";
import schoolInformation from "../../data/data";
import SchoolCard from "./SchoolCard";

const Movie = () => {
  const [school] = useState(schoolInformation);

  useEffect(() => {
    axios
      .get(`https://lambdaluncher.herokuapp.com/api/schools`)
      .then(res => {
        // setSchool(response.data);
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(
          `ERROR: *** ${err.response.data.message} *** ${err.response.statusText} ***`,
          err.response
        );
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
