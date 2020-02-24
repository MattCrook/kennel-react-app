import React from "react";


const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="employee-name">{props.employee.name}</span>
        </h3>
        <p>Position: {props.employee.role}</p>
        <p>Favorite breed: {props.employee.favoriteBreed}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
