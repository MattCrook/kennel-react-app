import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerForm from "./owner/OwnerForm";
import Login from "./auth/Login";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import AnimalEditForm from "./animal//EditAnimalForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import OwnerEditForm from "./owner/EditOwnerForm";
import LocationEditForm from "./location/LocationEditForm";

const ApplicationViews = () => {
  const isAuthenticated = () =>
    sessionStorage.getItem("credentials") !== null ||
    localStorage.getItem("credentials") !== null;
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
        exact
        path="/animals"
        render={props =>
          isAuthenticated() ? (
            <AnimalList {...props} />
          ) : (
            <Redirect to="/login" component={Login} />
          )
        }
      />
      <Route
        exact
        path="/animals/:animalId(\d+)" // says everything you pass in to animalId should be a digit. (/d+) is a Regex...
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          if (isAuthenticated()) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" component={Login} />;
          }
        }}
      />
      <Route
        exact
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      {/* // Route has props on it, and props has history on it, so to access
      history we use the spread operator. */}
      <Route
        exact
        path="/employees"
        render={props =>
          isAuthenticated() ? (
            <EmployeeList {...props} />
          ) : (
            <Redirect to="/login" component={Login} />
          )
        }
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" component={Login} />;
          }
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners"
        render={props =>
          isAuthenticated() ? (
            <OwnerList {...props} />
          ) : (
            <Redirect to="/login" component={Login} />
          )
        }
      />
      <Route
        exact
        path="/owners/:ownerId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <OwnerDetail
                ownerId={parseInt(props.match.params.ownerId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" component={Login} />;
          }
        }}
      />
      <Route
        exact
        path="/owners/:ownerId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList {...props} />;
        }}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={props => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/new"
        render={props => {
          if (isAuthenticated) {
            return <AnimalForm {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
      <Route
        path="/employees/new"
        render={props =>
          isAuthenticated() ? (
            <EmployeeForm {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        path="/owners/new"
        render={props =>
          isAuthenticated() ? (
            <OwnerForm {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route exact path="/login" component={Login} />
      <Route
        path="/employees/:employeeId(\d+)/details"
        render={props => {
          return <EmployeeWithAnimals {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
