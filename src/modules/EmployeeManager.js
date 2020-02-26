const remoteURL = "http://localhost:5002";

const EmployeeManager = {
  async get(id) {
    const resp = await fetch(`${remoteURL}/employees/${id}`);
    return await resp.json();
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/employees`);
    return await resp.json();
  },
  async delete(id) {
    const result = await fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    });
    return await result.json();
  }
};

export default EmployeeManager;
