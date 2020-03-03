import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

const LocationList = (props) => {
  //the initial state is an empty array
  const [storeLocations, setStoreLocations] = useState([]);

  const getLocations = async () => {
    try {
      const locationsFromAPI = await LocationManager.getAll();
      setStoreLocations(locationsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };
  //get locations from api on components first render

  const closeLocation = async id => {
    try {
      LocationManager.deleteLocation(id);
      const locationsFromAPI = await LocationManager.getAll();
      setStoreLocations(locationsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocations();
  }, []);
  return (
    <div className="container-cards">
      {storeLocations.map(storeLocation => (
        <LocationCard
          key={storeLocation.id}
          storeLocation={storeLocation}
          closeLocation={closeLocation}
          {...props}
        />
      ))}
    </div>
  );
};

export default LocationList;
