import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

const LocationList = () => {
  //the initial state is an empty array
  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    try {
      const locationsFromAPI = await LocationManager.getAll();
      setLocations(locationsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };
  //get locations from api on components first render
  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="container-cards">
      {locations.map(location => (
        <LocationCard key={location.id} location={location} 
        />
      ))}
    </div>
  );
};

export default LocationList;
