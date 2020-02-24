import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import AnimalCard from "./AnimalCard";

const AnimalList = () => {
  //the initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const deleteAnimal = async (id) => {
    try {
      AnimalManager.delete(id);
      const animalsFromAPI = await AnimalManager.getAll();
      setAnimals(animalsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnimals = async () => {
    try {
      const animalsFromAPI = await AnimalManager.getAll();
      setAnimals(animalsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };
  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={deleteAnimal}
        />
      ))}
    </div>
  );
};

export default AnimalList;

/*
The function argument to useEffect tells React to call the getAnimals() function 
(that will fetch data from our API). 
The empty array argument tells React to call the function
 on the first render of the component.
*/
