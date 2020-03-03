import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import AnimalCard from "../animal/AnimalCard";

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    EmployeeManager.getWithAnimals(props.match.params.employeeId).then(
      APIResult => {
        console.log(APIResult);
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      }
    );
  }, []);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      <p>Is Responsible For The Following Animal(s):</p>
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} {...props} />
      ))}
    </div>
  );
};

export default EmployeeWithAnimals;
