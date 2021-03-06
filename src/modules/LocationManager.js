const remoteURL = "http://localhost:5002";

const LocationManager = {
  async get(id) {
    const resp = await fetch(`${remoteURL}/locations/${id}`);
    return await resp.json();
  },
  async getAll() {
    const resp = await fetch(`${remoteURL}/locations`);
    return await resp.json();
  },
  async deleteLocation(id) {
    const result = await fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    });
    return await result.json();
  },
  getRandomId() {
    return fetch(`${remoteURL}/locations`)
      .then(result => result.json())
      .then(locations => {
        const randomIndex = Math.floor(Math.random() * locations.length);
        const randomLocation = locations[randomIndex];
        return randomLocation.id;
      });
  },
  update(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json());
  },
  async getWithEmployees(id) {
    const data = await fetch(`${remoteURL}/employees/${id}?_embed=locations`);
    return await data.json();
  },
};

export default LocationManager;
