const remoteURL = "http://localhost:3000";

export default {
  getId(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(resp => resp.json());
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/owners`);
    return await resp.json();
  }
};
