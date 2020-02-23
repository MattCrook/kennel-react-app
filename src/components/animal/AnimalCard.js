import React from "react";

// can also destructure props to ({animal})...

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.id}</span>
        </h3>
        <p>{props.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
