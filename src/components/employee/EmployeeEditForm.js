import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";
import LocationManager from "../../modules/LocationManager";

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    favoriteBreed: ""
  });
  const [storeLocations, setStoreLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...employee };
    stateToChange[event.target.id] = event.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = event => {
    event.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId, //how we are going to get the animal id that is passed into the url
      name: employee.name,
      role: employee.role,
      favoriteBreed: employee.favoriteBreed
    };

    // once done, we redirect user to animal list
    EmployeeManager.update(editedEmployee).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId).then(employee => {
      LocationManager.getAll().then(storeLocations => {
        setEmployee(employee);
        setStoreLocations(storeLocations);
        setIsLoading(false);
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
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="role"
              value={employee.role}
            />
            <label htmlFor="role">Employee role</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={employee.favoriteBreed}
            />
            <label htmlFor="breed">Favorite Breed</label>
            <label htmlFor="location">Select Store Location</label>
            <select
              className="form-control"
              id="locationId"
              value={employee.locationId}
              onChange={handleFieldChange}
            >
              {storeLocations.map(storeLocation => (
                <option key={storeLocation.id} value={storeLocation.id}>
                  {storeLocation.city}, {storeLocation.address}
                </option>
              ))}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading} // disabled will always take boolean value, isLoading infers that it is a boolean.
              onClick={updateExistingEmployee}
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

export default EmployeeEditForm;
