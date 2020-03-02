import React, { useState } from "react";
const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);

  // Update state whenever an input field is edited
  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  // if checked log the user in using local storage. If not, use session storage.
  // setIsChecked returns boolean, event.target has a "checked" attr...so passing it in.
  const handleCheckBoxChange = event => {
    setIsChecked(event.target.checked);
  };

  const handleLogin = e => {
    e.preventDefault();
    props.setUser();
    props.history.push("/");

    // the push("/") says when the user logs in, redirect to the home page.
    if (isChecked === true) {
      localStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    } else {
      sessionStorage.setItem("credentials", JSON.stringify(credentials));
      props.history.push("/");
    }
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
        <input type="checkbox" onChange={handleCheckBoxChange}></input>
      </fieldset>
    </form>
  );
};

export default Login;
