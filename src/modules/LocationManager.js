const remoteURL = "http://localhost:5002";

const LocationManager = {
  getId(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(resp => resp.json());
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
  }
};

export default LocationManager;
