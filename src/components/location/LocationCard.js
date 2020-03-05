import React from "react";
import { Link } from "react-router-dom";
import "./location.css";
const LocationCard = props => {
  // console.log("storeLocation", props.storeLocation);
  // console.log("props", props);

  return (
    <div className="location-card">
      <div className="location-card-content">
        <h3>City: {props.storeLocation.city}</h3>
        <p className="card-address">Address: {props.storeLocation.address}</p>
        <button
          type="button"
          onClick={() => props.closeLocation(props.storeLocation.id)}
        >
          Close This Location
        </button>
        <Link
          to={`/locations/${props.storeLocation.id}/edit`}
          type="button"
          onClick={() =>
            props.history.push(`/locations/${props.storeLocation.id}/edit`)
          }
        >
          <button>Edit</button>
        </Link>
        <Link to={`/locations/${props.storeLocation.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};
export default LocationCard;
