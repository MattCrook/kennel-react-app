import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationEditForm = props => {
  const [location, setLocation] = useState({
    city: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...location };
    stateToChange[event.target.id] = event.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = event => {
    event.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      city: location.city,
      address: location.address,
    };

    // once done, we redirect user to animal list
    LocationManager.update(editedLocation).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    LocationManager.get(props.match.params.locationId).then(location => {
      setLocation(location);
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
              id="city"
              value={location.city}
            />
            <label htmlFor="city">City</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={location.address}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading} // disabled will always take boolean value, isLoading infers that it is a boolean.
              onClick={updateExistingLocation}
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

export default LocationEditForm;
