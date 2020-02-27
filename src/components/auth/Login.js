import React, { useState } from "react";
import RememberMe from "./CheckBox";

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
    // the push("/") says when the user logs in, redirect to the home page.
    sessionStorage.setItem("credentials", JSON.stringify(credentials));
    props.history.push("/");
  };


  const RememberMe = () => {
    const [checkBoxes, setCheckBoxes] = useState( {checked: ""} );
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = event => {
    const stateToChange = { ...checkBoxes };
    stateToChange[event.target.id] = event.target.checked;
    setCheckBoxes(stateToChange);
  };
  };
  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email address</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
        <label>Remember Me</label>
        <input
          type="checkbox"
          onChange={handleCheckBoxChange}
          checked=""
          disabled={isChecked}
          onClick={}
        ></input>
      </fieldset>
    </form>
  );
};

export default Login;
