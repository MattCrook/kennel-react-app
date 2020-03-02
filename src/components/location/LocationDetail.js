import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [storeLocation, setStoreLocation] = useState({ city: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.get(props.locationId).then(storeLocation => {
      setStoreLocation({
        city: storeLocation.city,
        address: storeLocation.address
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
          City: <span style={{ color: "darklategrey" }}>{storeLocation.city}</span>
        </h3>
        <p className="card-address">Address: {storeLocation.address}</p>
        <button
          type="button"
          onClick={() => {
            props.history.push(`/locations/${props.locationId}/employee`);
          }}
        >
          Employees at this Location
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close This Location
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;
