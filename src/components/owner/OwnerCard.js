import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-ownername">Name: {props.owner.name}</h3>
        <p className="card-phonenumber">Phone Number: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.removeOwner(props.owner.id)}>Remove Owner</button>
      </div>
    </div>
  );
};

export default OwnerCard;
