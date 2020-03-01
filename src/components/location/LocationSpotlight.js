import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationSpotlight.css";

const LocationSpotlight = props => {
  const [location, setLocation] = useState({ city: "", address: "" });

  useEffect(() => {
    LocationManager.get(props.locationId).then(location => {
      setLocation({
        city: location.city,
        address: location.address
      });
    });
  }, [props.locationId]);

  return (
    <div className="location-spotlight">
      <img src={require("./nashville.jpeg")} alt="Nashville" />
      <div>
        <h3>{location.city}</h3>
        <p>{location.address}</p>
      </div>
    </div>
  );
};

export default LocationSpotlight;
