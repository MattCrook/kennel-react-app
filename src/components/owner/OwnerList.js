import React, { useState, useEffect } from "react";
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = async () => {
    try {
      const OwnersFromAPI = await OwnerManager.getAll();
      setOwners(OwnersFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const removeOwner = async id => {
    try {
      OwnerManager.delete(id);
      const ownersFromAPI = OwnerManager.getAll();
      setOwners(ownersFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div className="container-cards">
      {owners.map(owner => (
        <OwnerCard key={owner.id} owner={owner} removeOwner={removeOwner} />
      ))}
    </div>
  );
};

export default OwnerList;
