const remoteURL = "http://localhost:5002";

const AnimalManager = {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(resp => resp.json());
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/animals`);
    return await resp.json();
  }
};

export default AnimalManager;
