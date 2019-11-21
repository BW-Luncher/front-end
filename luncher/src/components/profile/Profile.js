/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import { SchoolContext } from "../../contexts/SchoolContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Profile = () => {
  const { schools, setSchools } = useContext(SchoolContext);
  const [item, setItem] = useState([
    {
      school: "",
      role: "",
      address: "",
      email: "",
      funds_needed: "",
      goal: ""
    }
  ]);

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/schools/", item)
      .then(res => {
        console.log(res.data);
        // setSchools(res.data);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="school"
        placeholder="school"
        onChange={handleChange}
        value={item.school}
      />

      <input
        type="text"
        name="role"
        placeholder="role"
        onChange={handleChange}
        value={item.role}
      />

      <input
        type="text"
        name="address"
        placeholder="address"
        onChange={handleChange}
        value={item.address}
      />

      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={item.email}
      />

      <input
        type="number"
        name="funds_needed"
        placeholder="funds_needed"
        onChange={handleChange}
        value={item.funds_needed}
      />

      <input
        type="number"
        name="goal"
        placeholder="goal"
        onChange={handleChange}
        value={item.goal}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Profile;
