const remoteURL = "http://localhost:3000";

const AnimalManager = {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(resp => resp.json());
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/animals`);
    return await resp.json();
  },
  async delete(id) {
    const result = await fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    });
    return await result.json();
  }
};

export default AnimalManager;
