import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [location, setLocation] = useState({ city: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.get(props.locationId).then(location => {
      setLocation({
        city: location.city,
        address: location.address
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.deleteLocation(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
      <picture>
          <img src={require("./nashville.jpeg")} alt="Nashville Skyline" />
        </picture>
        <h3>
          City:  <span style={{ color: "darklategrey" }}>{location.city}</span>
          </h3>
        <p className="card-address">Address: {location.address}</p>
        <button
          type="button"
          disabled={isLoading}
          onClick={handleDelete}>
          Close This Location
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;
