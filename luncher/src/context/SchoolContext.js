/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SchoolContext = createContext();

export const SchoolContextProvider = props => {
  const { children } = props;
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
    <SchoolContext.Provider value={[school]}>{children}</SchoolContext.Provider>
  );
};
