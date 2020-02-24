import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

import AnimalCard from "./animal/AnimalCard";
//import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationCard from "./location/LocationCard";
// import LocationList from "./location/LocationList";

import EmployeeCard from "./employee/EmployeeCard";
// import EmployeeList from "./employee/EmployeeList";

import OwnerCard from "./owner/OwnerCard";
// import OwnerList from "./owner/OwnerList";


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
          return <AnimalCard />;
        }}
      />
            <Route
      path="/employees"
      render={props => {
        return <EmployeeCard />;
      }}
      />
      <Route
      path="/owners"
      render={props => {
        return <OwnerCard />
      }}
      />
      <Route
      path="/locations"
      render={props => {
        return <LocationCard />
      }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
