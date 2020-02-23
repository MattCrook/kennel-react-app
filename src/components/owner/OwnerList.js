import React, { useState, useEffect } from "react";
import OwnersManager from "../../modules/OwnersManager";
import OwnersCard from "./OwnersCard";

const OwnerList = () => {
  //the initial state is an empty array
  const [owners, setOwners] = useState([]);
  const getOwners = async () => {
    const OwnersFromAPI = await OwnersManager.getAll();
    setOwners(OwnersFromAPI);
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {owners.map(owner => (
        <OwnerCard />
      ))}
    </div>
  );
};

export default OwnerList;

/*
The function argument to useEffect tells React to call the getAnimals() function
(that will fetch data from our API).
The empty array argument tells React to call the function
 on the first render of the component.
*/
