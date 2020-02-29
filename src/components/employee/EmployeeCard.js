import React from "react";
import { Link, useHistory } from "react-router-dom";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="employee-name">{props.employee.name}</span>
        </h3>
        <p>Position: {props.employee.role}</p>
        <p>Favorite breed: {props.employee.favoriteBreed}</p>
        <button
          type="button"
          onClick={() => props.fireEmployee(props.employee.name)}
        >
          Fire
        </button>
        <Link to={`/employees/${props.employee.id}`}>
          <button
          // type="button"
          // onClick={() => {
          //   props.history.push(`/employees/${props.employee.id}/details`);
          // }}
          >
            Details
          </button>
        </Link>
        {/* <Link to={`/employees/${props.employee.id}/details`}>
          <button
            type="button"
            onClick={() => {
              props.history.push(`/employees/${props.employee.id}`);
            }}
          >
            Info
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default EmployeeCard;
