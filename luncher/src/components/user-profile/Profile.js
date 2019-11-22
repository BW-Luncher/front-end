/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";
import { SchoolContext } from "../../contexts/SchoolContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import ProfileSchools from "./ProfileSchools";

const Profile = props => {
  const { schools, setSchools } = useContext(SchoolContext);
  const [item, setItem] = useState({
    school: "",
    school_insignia: "",
    address: "",
    email: "",
    funds_needed: "",
    goal: ""
  });

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/schools", item)
      .then(res => {
        setSchools([...schools, res.data]);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome User</h1>
        <h2>Create a School Profile</h2>

        <input
          className="input-row"
          type="text"
          name="school"
          placeholder="Enter your name of your School"
          onChange={handleChange}
          value={item.school}
        />

        <input
          className="input-row"
          type="text"
          name="school_insignia"
          placeholder="Enter URL for picture of school"
          onChange={handleChange}
          value={item.school_insignia}
        />

        <input
          className="input-row"
          type="text"
          name="address"
          placeholder="Enter your school's address"
          onChange={handleChange}
          value={item.address}
        />

        <input
          className="input-row"
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={handleChange}
          value={item.email}
        />

        <input
          className="input-row"
          type="number"
          name="funds_needed"
          placeholder="Enter the amount of funds your trying to raise"
          onChange={handleChange}
          value={item.funds_needed}
        />

        <input
          className="input-row"
          type="number"
          name="goal"
          placeholder="Enter your school's fundraiser goal"
          onChange={handleChange}
          value={item.goal}
        />
        <button name="submit" type="submit" value="submit">
          submit
        </button>
        <button name="reset" type="reset" value="Reset">
          reset
        </button>
      </form>
      <Route component={ProfileSchools} />
    </div>
  );
};

export default Profile;
