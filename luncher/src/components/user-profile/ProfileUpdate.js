/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { SchoolContext } from "../../contexts/SchoolContext";

const ProfileUpdate = props => {
  const { schools } = useContext(SchoolContext);
  const [education, setEducation] = useState();

  const [item, setItem] = useState({
    school: "",
    school_insignia: "",
    address: "",
    email: "",
    funds_needed: 0,
    goal: 0
  });

  // const resetForm = () => ({
  //   school: "",
  //   school_insignia: "",
  //   address: "",
  //   email: "",
  //   funds_needed: 0,
  //   goal: 0
  // });

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const deleteItem = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/schools/${props.match.params.id}`)
      .then(res => {
        console.log(res);
        props.history.push("/");
      })
      .catch(err => console.log(err, err.response));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/schools/${props.match.params.id}`, item)
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

  useEffect(() => {
    const school = schools.find(
      items => `${items.id}` === props.match.params.id
    );
    if (school) setEducation(school);
  }, [schools, props.match.params.id]);

  if (!education) {
    return <h2>loading</h2>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Edit or Delete School</h1>

        <input
          className="input-row"
          type="text"
          name="school"
          placeholder={education.school}
          onChange={handleChange}
          value={`${item.school}`}
        />

        <input
          className="input-row"
          type="text"
          name="school_insignia"
          placeholder={education.address}
          onChange={handleChange}
          value={item.school_insignia}
        />

        <input
          className="input-row"
          type="text"
          name="address"
          placeholder={education.address}
          onChange={handleChange}
          value={item.address}
        />

        <input
          className="input-row"
          type="email"
          name="email"
          placeholder={education.address}
          onChange={handleChange}
          value={item.email}
        />

        <input
          className="input-row"
          type="number"
          name="funds_needed"
          placeholder={education.address}
          onChange={handleChange}
          value={item.funds_needed}
        />

        <input
          className="input-row"
          type="number"
          name="goal"
          placeholder={education.address}
          onChange={handleChange}
          value={item.goal}
        />

        <button onClick={handleSubmit} type="submit">
          Save
        </button>

        <button onClick={deleteItem} type="submit">
          Delete
        </button>

        <button type="reset" value="Reset">
          Reset
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
