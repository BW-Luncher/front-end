import React, { useState } from "react";
import schoolInformation from "../../data/data";
import SchoolCard from "./SchoolCard";
// import axios from 'axios';

const Movie = () => {
  const [school] = useState(schoolInformation);

  //   useEffect(() => {
  //        axios
  //         .get(`http://localhost:6600/api/schools`)
  //         .then(response => {
  //         //   setMovie(response.data);
  //         console.log(response)
  //         })
  //         .catch(error => {
  //           console.error("Data not returned", error.response);
  //         });

  //   },[]);

  return (
    <div>
      {school.map((schools, { id }) => (
        <SchoolCard key={id} {...schools} />
      ))}
    </div>
  );
};

export default Movie;
