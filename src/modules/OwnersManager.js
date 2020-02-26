const remoteURL = "http://localhost:5002";

const OwnerManager = {
  getId(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(resp => resp.json());
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/owners`);
    return await resp.json();
  },
  async delete(id) {
    const result = await fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    });
    return await result.json();
  }
};

export default OwnerManager;
