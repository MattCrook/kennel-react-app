import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./AnimalForm.css";

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...animal };
    stateToChange[event.target.id] = event.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = event => {
    event.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId, //how we are going to get the animal id that is passed into the url.
      name: animal.name,
      breed: animal.breed,
      employeeId: parseInt(animal.employeeId) // parseInt() is for parsing (like in json server) to turn string into integer
    };

    // once done, we redirect user to animal list
    AnimalManager.update(editedAnimal).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId).then(animal => {
      EmployeeManager.getAll().then(employees => {
        setAnimal(animal);
        setEmployees(employees);
        setIsLoading(false); // very important we do setIsLoadiing AFTER we get ALL the data back. After we set the state.
      });
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            <select
              className="form-control"
              id="employeeId"
              value={animal.employeeId}
              onChange={handleFieldChange}
            >
              {employees.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading} // disabled will always take boolean value, isLoading infers that it is a boolean.
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalEditForm;
