const remoteURL = "http://localhost:5002";

const OwnerManager = {
  async get(id) {
    const resp = await fetch(`${remoteURL}/owners/${id}`);
    return await resp.json();
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
  },
  async post(newOwner) {
    const data = await fetch(`${remoteURL}/owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    });
    return await data.json();
}
};

export default OwnerManager;
