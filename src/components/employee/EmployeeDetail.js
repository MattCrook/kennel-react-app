import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    favoriteBreed: ""
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    EmployeeManager.get(props.employeeId).then(employee => {
      setEmployee({
        name: employee.name,
        role: employee.role,
        favoriteBreed: employee.favoriteBreed
      });
      setIsLoading(false);
    });
  }, [props.employeeId]);

  const handleDelete = () => {
    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./profile.jpeg")} alt="Profile Picture" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{employee.name}</span>
        </h3>
        <p>Role: {employee.role}</p>
        <p>Favorite Breed: {employee.favoriteBreed}</p>
        <picture>
          <img src={require("./download.jpeg")} alt="Favorite Dog" />
        </picture>
        <button 
          type="button" 
          disabled={isLoading} 
          onClick={handleDelete}>
          Fire Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetail;
