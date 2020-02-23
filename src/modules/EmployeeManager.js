const remoteURL = "http://localhost:5002";

export default {
  getId(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(resp => resp.json());
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/employees`);
    return await resp.json();
  }
};
