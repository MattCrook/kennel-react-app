import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import AnimalCard from "./AnimalCard";

const AnimalList = (props) => {
  //the initial state is an empty array
  // current animals and a way to set those animals
  // animals is an array we just pulled out of state. ... passed and used line 37.
  // if the array is empty, only runs on first render of the page.
  // however, if there is anything in the array, it runs every time there is a change to the array.

  const [animals, setAnimals] = useState([]);

  const getAnimals = async () => {
    try {
      const animalsFromAPI = await AnimalManager.getAll();
      setAnimals(animalsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAnimal = async (id) => {
    try {
      AnimalManager.delete(id);
      const animalsFromAPI = await AnimalManager.getAll();
      setAnimals(animalsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  // got the animals from the API on the component's first render
  // useEffect is us telling react after the component is mounted i want to run this code. (getAnimals)
  //useEffect  accepts two arguments( a function, and an array)
  useEffect(() => {
    getAnimals();
  }, []);


  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  // animals is an empty array until we call useEffect...and will populate the array with getAnimals

  return (
    <>
    <section className="section-content">
    <button type="button"
        className="btn"
        onClick={() => {props.history.push("/animals/new")}}>
        Admit Animal
    </button>
  </section>
    <div className="container-cards">
      {animals.map(animal => (
        <AnimalCard
          key={animal.id}
          animal={animal} // this is a prop ... in this case it is an object
          deleteAnimal={deleteAnimal}
        />
      ))}
    </div>
    </>
  );
};

export default AnimalList;

/*
The function argument to useEffect tells React to call the getAnimals() function 
(that will fetch data from our API). 
The empty array argument tells React to call the function
 on the first render of the component.
*/
/*
order of operations:
top of Component
return : empty array [animals]
inside useEffect
calls getAnimals
about to call setAnimals
state changes, so causes a re render
goes back to return and returns based on current state of what we have in the array
*/
