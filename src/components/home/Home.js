import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";
import LocationSpotlight from "../location/LocationSpotlight";
import LocationManager from "../../modules/LocationManager";
import "../location/LocationSpotlight";
const Home = () => {
  const [spotlightAnimalId, setSpotlightAnimalId] = useState(0);
  const [spotlightLocationId, setSpotlightLocationId] = useState(0);

  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId().then(setSpotlightAnimalId);
  };
  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  const refreshSpotlightLocation = () => {
    LocationManager.getRandomId().then(setSpotlightLocationId);
  };
  useEffect(() => {
    refreshSpotlightLocation();
  }, []);

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h3>Animal Spotlight</h3>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {spotlightAnimalId && <AnimalSpotlight animalId={spotlightAnimalId} />
      // if we have a spotlight ID, then we will render, if we don't, then it ignores the render.
      // if && is not there, it will technically still work. However, you get a error iin console bc
      // it will pass an animalId of zero. In which there is no 0, and the value of 0 in JS is falsy. Where as
      // the && will look for a truthy value.
      }
      <h1>Visit One of Our Many Locations:</h1>
      <button onClick={refreshSpotlightLocation}>Reload &#x27f3;</button>
      {spotlightLocationId && (
        <LocationSpotlight locationId={spotlightLocationId} />
      )}
    </>
  );
};

export default Home;
