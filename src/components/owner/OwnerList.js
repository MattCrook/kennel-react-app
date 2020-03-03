import React, { useState, useEffect } from "react";
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

const OwnerList = props => {
  const [owners, setOwners] = useState([]);

  const removeOwner = async id => {
    try {
      OwnerManager.delete(id);
      const ownersFromAPI = await OwnerManager.getAll();
      setOwners(ownersFromAPI);
    } catch (error) {
      console.log(error);
    }
  };


  const getOwnerWithAnimal = async () => {
    try {
      const ownerAnimalsData = await OwnerManager.getWithAnimals();
        setOwners(ownerAnimalsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOwnerWithAnimal();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/owners/new");
          }}
        >
          Add Owner
        </button>
      </section>
      <div className="container-cards">
        {owners.map(owner => (
          <OwnerCard
            key={owner.id}
            owner={owner}
            removeOwner={removeOwner}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default OwnerList;
