import React from "react";
import { render } from "@testing-library/react";
import AnimalCard from "../components/animal/AnimalCard";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

// test takes 2 args, a string and a callback function that the test is going to call.
test("renders the AnimalCard component with edit button, name, breed, discharge", () => {
  const history = createMemoryHistory();
  const props = {
    animal: { id: 1, name: "Lucy", breed: "wheaton terrior" },
    history: [],
    deleteAnimal: () => {}
  };
  // animalCard is object. render is returning that object. getByText/ debug are methods on that object
  const animalCard = render(
    <Router history={history}>
      <AnimalCard {...props} />
    </Router>
  );

  const editButton = animalCard.getByText(/Edit/i); // getByText takes regex
  const nameTag = animalCard.getByText(/Name: Lucy/);
  const breedTag = animalCard.getByText(/Breed: wheaton terrior/);
  // expect is called assertion/ expectation
  expect(editButton).toBeInTheDocument();
  expect(breedTag).toBeInTheDocument();
  expect(nameTag).toBeInTheDocument();
//   console.log(animalCard.debug());
});
