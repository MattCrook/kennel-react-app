import React from "react";
import { Link } from "react-router-dom";
import "./location.css"
const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>City: {props.location.city}</h3>
        <p className="card-address">Address: {props.location.address}</p>
        <button
          type="button"
          onClick={() => props.closeLocation(props.location.id)}>
          Close This Location
        </button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};
export default LocationCard;
