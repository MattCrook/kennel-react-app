import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dan.svg")} alt="" /> */}
        </picture>
        <h3>
          Name: <span className="employee-name">Dan</span>
        </h3>
        <p>Position: React team</p>
        <p>Favorite breed: Golden Retriever</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
