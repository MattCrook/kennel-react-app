import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>City: {props.location.city}</h3>
        <p className="card-address">Address: {props.location.address}</p>
      </div>
    </div>
  );
};
export default LocationCard;
