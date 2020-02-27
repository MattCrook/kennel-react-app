import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const fireEmployee = async id => {
    try {
      EmployeeManager.delete(id);
      const employeesFromAPI = await EmployeeManager.getAll();
      setEmployees(employeesFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const getEmployees = async () => {
    try {
      const employeesFromAPI = await EmployeeManager.getAll();
      setEmployees(employeesFromAPI);
    } catch (error) {
      console.log(error);
      window.alert("Employee not found");
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          Add Employee
        </button>
      </section>
      <div className="container-cards">
        {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            fireEmployee={fireEmployee}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;

/*
The function argument to useEffect tells React to call the getEmployees() function 
(that will fetch data from our API). 
The empty array argument tells React to call the function
 on the first render of the component.
*/
