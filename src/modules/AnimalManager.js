const remoteURL = "http://localhost:5002";

const AnimalManager = {
  async get(id) {
    const resp = await fetch(`${remoteURL}/animals/${id}`);
    return await resp.json();
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/animals`);
    return await resp.json();
  },
  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    });
  },
  async post(newAnimal) {
    const data = await fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    });
    return await data.json();
  },
  getRandomId() {
    return fetch(`${remoteURL}/animals`)
      .then(result => result.json())
      .then(animals => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        const randomAnimal = animals[randomIndex];
        return randomAnimal.id;
      });
  }
};

export default AnimalManager;
