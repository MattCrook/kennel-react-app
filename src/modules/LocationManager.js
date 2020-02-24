const remoteURL = "http://localhost:3000";

export default {
  getId(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(resp => resp.json());
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/locations`);
    return await resp.json();
  }
};
