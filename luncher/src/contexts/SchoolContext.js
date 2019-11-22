/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SchoolContext = createContext();

export const SchoolContextProvider = props => {
  const { children } = props;
  const [schools, setSchools] = useState([]);
  // schools.sort((a, b) => a - b);
  schools.sort((a, b) => {
    return b.id - a.id;
  });
  console.log(schools);

  useEffect(() => {
    axios
      .get("https://lambdaluncher.herokuapp.com/api/schools")
      .then(res => {
        // console.log(res);
        setSchools(res.data);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  }, []);

  return (
    <SchoolContext.Provider value={{ schools, setSchools }}>
      {children}
    </SchoolContext.Provider>
  );
};
