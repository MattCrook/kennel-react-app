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


const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
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
          hasUser ? (
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
          if (hasUser) {
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
          if (hasUser) {
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
          hasUser ? (
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
          if (hasUser) {
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
          if (hasUser) {
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
          hasUser ? (
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
          if (hasUser) {
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
          if (hasUser) {
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
          if (hasUser) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/new"
        render={props => {
          if (hasUser) {
            return <AnimalForm {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
      <Route
        path="/employees/new"
        render={props =>
          hasUser ? <EmployeeForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/owners/new"
        render={props =>
          hasUser ? <OwnerForm {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        exact
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />

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
