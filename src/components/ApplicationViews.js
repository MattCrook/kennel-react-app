import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
// import AnimalCard from "./animal/AnimalCard";
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/" // whenever the path or route is just "/" render the home component.
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalList {...props} />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList {...props} />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList {...props} />;
        }}
      />
      <Route
        path="/locations"
        render={props => {
          return <LocationList {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
