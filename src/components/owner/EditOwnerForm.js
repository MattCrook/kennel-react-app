import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

const OwnerEditForm = props => {
  const [owner, setOwner] = useState({
    phoneNumber: "",
    name: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...owner };
    stateToChange[event.target.id] = event.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = event => {
    event.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedOwner = {
      id: props.match.params.ownerId, //how we are going to get the animal id that is passed into the url
      phoneNumber: owner.phoneNumber,
      name: owner.name
    };

    // once done, we redirect user to animal list
    OwnerManager.update(editedOwner).then(() =>
      props.history.push("/owners")
    );
  };

  useEffect(() => {
    OwnerManager.get(props.match.params.ownerId).then(owner => {
      setOwner(owner);
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
              id="number"
              value={owner.phoneNumber}
            />
            <label htmlFor="number">Owner Phone Number</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={owner.name}
            />
            <label htmlFor="name">Owner Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading} // disabled will always take boolean value, isLoading infers that it is a boolean.
              onClick={updateExistingOwner}
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

export default OwnerEditForm;
