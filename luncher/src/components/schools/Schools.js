import React, { useState } from "react";
import schoolInformation from "../../data/data";
import SchoolCard from "./SchoolCard";
// import axios from 'axios';

const Schools = () => {
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
    <div style={SchoolsStyleDiv}>
      {school.map((schools, { id }) => (
        <SchoolCard key={id} {...schools} />
      ))}
    </div>
  );
};

// put schools that need donation into grid pattern
const SchoolsStyleDiv = {
  display: 'grid',
  
  gridGap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, 390px)',
  fontSize: '15px',
  margin: ' auto',
  justifyContent: 'center',
  width: '90%'
}

export default Schools;
