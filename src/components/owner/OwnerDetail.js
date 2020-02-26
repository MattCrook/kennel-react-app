import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";

import "./OwnerDetail.css";

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ phoneNumber: "", name: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    OwnerManager.get(props.ownerId).then(owner => {
      setOwner({
        phoneNumber: owner.phoneNumber,
        name: owner.name
      });
      setIsLoading(false);
    });
  }, [props.ownerId]);

  const handleDelete = () => {
    setIsLoading(true);
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./lol.jpeg")} alt="Keep America Great" />
        </picture>
        <h3>
          Phone Number:{" "}
          <span style={{ color: "darklategrey" }}>{owner.phoneNumber}</span>
        </h3>
        <p className="card-address">Name: {owner.name}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove This Owner
        </button>
      </div>
    </div>
  );
};

export default OwnerDetail;
