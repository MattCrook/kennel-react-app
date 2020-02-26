import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
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
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container-cards">
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          fireEmployee={fireEmployee}
        />
      ))}
    </div>
  );
};

export default EmployeeList;

/*
The function argument to useEffect tells React to call the getEmployees() function 
(that will fetch data from our API). 
The empty array argument tells React to call the function
 on the first render of the component.
*/
