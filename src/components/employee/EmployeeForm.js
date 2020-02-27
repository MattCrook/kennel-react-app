import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    favoriteBreed: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (
      employee.name === "" ||
      employee.role === "" ||
      employee.favoriteBreed === ""
    ) {
      window.alert("Please input an employee name, role, and favorite breed");
    } else {
      setIsLoading(true);
      EmployeeManager.post(employee).then(() =>
        props.history.push("/employees")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="employeeName">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="role"
              placeholder="Role"
            />
            <label htmlFor="role">Role</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="favoriteBreed"
              placeholder="Favorite Breed"
            />
            <label htmlFor="favoriteBreed">Favorite Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
              >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm;
