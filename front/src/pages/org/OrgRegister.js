import React from "react";
import "./orgReg.css";
export const OrgRegister = () => {
  return (
    <form className="orgReg__form">
      <h1>Sign Up</h1>
      <div className="orgReg__flex">
        <fieldset className="flex1">
          <legend>
            <span className="number">1</span>Your basic info
          </legend>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="orReg__input"
          />
          <label for="mail">Email:</label>
          <input
            type="email"
            id="mail"
            name="user_email"
            className="orReg__input"
          />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="user_password"
            className="orReg__input"
          />
        </fieldset>
        <fieldset className="flex2">
          <legend>
            <span className="number">2</span>Your basic info
          </legend>
          <label for="name">Phone:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="orReg__input"
          />
          <label for="mail">Registration Number:</label>
          <input
            type="email"
            id="mail"
            name="user_email"
            className="orReg__input"
          />

          <label for="password">Info:</label>
          <input
            type="password"
            id="password"
            name="user_password"
            className="orReg__input"
          />
        </fieldset>
      </div>

      <fieldset>
        <legend>
          <span className="number">3</span>Your profile
        </legend>
        <label for="bio">About:</label>
        <textarea
          id="bio"
          name="user_bio"
          className="orgReg__textarea"
        ></textarea>
      </fieldset>
      <fieldset>
        <label for="job">Activity field:</label>
        <select id="job" name="user_job" className="orgReg__select">
          <option value="">Select...</option>
          <option value="Medical">Medical</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
          <option value="Others"> Others</option>
        </select>
        <br />
        <label>Address:</label>
        <input type="text" placeholder=" Country" />
        <input type="text" placeholder="Region" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Street" />
      </fieldset>
      <button type="submit" className="orgReg__button">
        Sign Up
      </button>
    </form>
  );
};
