import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationDetail from "../location/LocationDetail";

const LocationWithEmployees = props => {
  const [employee, setEmployee] = useState({});
  const [storeLocation, setStoreLocation] = useState([]);

  useEffect(() => {
    LocationManager.getWithEmployees(props.match.params.locationId)
    .then(
      resultFromAPI => {
        setEmployee(resultFromAPI);
        setStoreLocation(resultFromAPI.locations);
      }
    );
  }, []);
  return (
    <div className="card">
      <h3>Employee: {employee.name}</h3>
      <p>Role: {employee.role}</p>
      <p>Favorite Breed: {employee.favoriteBreed}</p>
      {storeLocation.map(store => (
        <LocationDetail key={store.id} store={store} {...props} />
      ))}
    </div>
  );
};

export default LocationWithEmployees;
