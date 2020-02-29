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
  },

  async post(newEmployee) {
    const data = await fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    });
    return await data.json();
  },
  // We can use json-server relationships to include related child information with one call.
  //This is done with embed

  async getWithAnimals(id) {
    const data = await fetch(`${remoteURL}/employees/${id}?_embed=animals`);
    return await data.json();
  }
};

export default EmployeeManager;
