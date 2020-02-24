const remoteURL = "http://localhost:3000";

export default {
  getId(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(resp => resp.json());
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/employees`);
    return await resp.json();
  }
};
