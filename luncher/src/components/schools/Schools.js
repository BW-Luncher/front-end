import React, { useState, useEffect } from "react";
import axios from "axios";
import schoolInformation from "../../data/data";
import SchoolCard from "./SchoolCard";

const Schools = () => {
  const [school] = useState(schoolInformation);

  useEffect(() => {
    axios
      // .get("https://reqres.in/api/users")
      .get("https://lambdaluncher.herokuapp.com/api/schools")
      .then(res => {
        // setSchool(response.data);
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err, err.response);

        // console.log(err.response);
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

export default Schools;
