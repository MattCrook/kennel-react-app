import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
        // if we have a spotlight ID, then we will render, if we don't, then it ignores the render.
        // if && is not there, it will technically still work. However, you get a error iin console bc
        // it will pass an animalId of zero. In which there is no 0, and the value of 0 in JS is falsy. Where as 
        // the && will look for a truthy value. 
      }
    </>
  );
};

export default Home;
