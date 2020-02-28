import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
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
      id: props.match.params.animalId, //how we are going to get the animal id that is passed into the url
      name: animal.name,
      breed: animal.breed
    };

    // once done, we redirect user to animal list
    AnimalManager.update(editedAnimal).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId).then(animal => {
      setAnimal(animal);
      setIsLoading(false);
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
