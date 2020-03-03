import React from "react";
import { Link } from "react-router-dom";
import "./Owner.css";
const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-ownername">Name: {props.owner.name}</h3>
        <p className="card-animal-name">
          Dog in Kennel:{" "}
          <strong>
            {props.owner.animals.map(animal => (
              <li>{animal.name}</li>
            ))}
          </strong>
        </p>
        <button type="button" onClick={() => props.removeOwner(props.owner.id)}>
          Remove Owner
        </button>
        <Link
          to={`/owners/${props.owner.id}/edit`}
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          <button>Edit</button>
        </Link>
        <Link to={`/owners/${props.owner.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerCard;
