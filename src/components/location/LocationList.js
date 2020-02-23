import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

const LocationList = () => {
  //the initial state is an empty array
  const getLocations = async () => {
    const [locations, setlocations] = useState([]);
    const locationsFromAPI = await LocationManager.getAll();
    setLocations(locationsFromAPI);
  };
  //get locations from api on components first render
  useEffect(() => {
      getLocations();
  }, []);

  return (
      <div className="container-cards">
          {locations.map(location => {
              <LocationCard />
          })}
      </div>
  );
};
