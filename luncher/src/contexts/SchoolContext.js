/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SchoolContext = createContext();

export const SchoolContextProvider = props => {
  const { children } = props;
  const [schools, setSchools] = useState([]);
  const [render, setRender] = useState(false);
  schools.sort((a, b) => {
    return b.id - a.id;
  });

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
  }, [render]);

  return (
    <SchoolContext.Provider value={{ schools, setSchools, render, setRender }}>
      {children}
    </SchoolContext.Provider>
  );
};
