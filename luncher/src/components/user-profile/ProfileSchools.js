/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SchoolContext } from "../../contexts/SchoolContext";
import { SchoolList } from "../schools/school.styles";

const EditSchools = () => {
  const { schools } = useContext(SchoolContext);

  return (
    <div>
      <h2>Edit Your School List: </h2>

      <SchoolList>
        {schools.map((el, i) => (
          <Link to={`/update-school/${el.id}`}>{schools[i].school}</Link>
        ))}
      </SchoolList>
    </div>
  );
};

export default EditSchools;
