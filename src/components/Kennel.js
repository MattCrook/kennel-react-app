import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () =>
    sessionStorage.getItem("credentials") !== null ||
    localStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    localStorage.setItem("credentials", JSON.stringify(user));

    setHasUser(isAuthenticated());
  };

  // When a user logs in, we should remove the login link and display a logout link.
  // When a user logs out, they should be directed to the home page.

  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
    setHasUser(isAuthenticated());
  };

  //------------------
  //pass `clearUser()` as props to the **`<NavBar>`** component

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} setUser={setUser}/>
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;

// I need to move the state of the user to a common parent component. I can then pass the state of user as props to
// <ApplicationViews> and <Navbar>. Based on the props of the user, I can show different components.
// Also, the <Kennel> is the only place that can change the user state so I need a function to updateUser.
