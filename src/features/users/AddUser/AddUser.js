import React from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "../usersSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    // read form data
    // creating a mock form object
    // todo: read form data
    // we need to access the form data
    const formData = { 
    name: "nadeem", 
    email: "a@b.com", 
    phone: "2342322" };
    dispatch(addUserAsync(formData));
    console.log(formData)
  };
  return (
    <>
      <h2>Add user</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="nameInput" />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="phoneInput" />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddUser;
