import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";

// can also destructure props to ({animal})...
// props is an object..is the animal object
// has the key of animal on it

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3 className="card-petname">
          Name: {props.animal.name}
        </h3>
        <p>Breed: {props.animal.breed}</p>
        <button
          type="button"
          onClick={() => props.deleteAnimal(props.animal.id)}
        >
          Discharge
        </button>
        <Link
          to={`/animals/${props.animal.id}/edit`}
          type="button"
          onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}
        >
          <button>Edit</button>
        </Link>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;
