/**
 * Service talks to corresponding repositary, that does some manipulations
 * with the data from the repo
 * and returns the data to the controller layer.
 * All the bussinees realted logic for the db is manipualted here only
 */
import RepositaryCollection from "../repositary/index.js";

const cityRepositary = new RepositaryCollection.CityRepositary();
class CityService {
  async createCity(data) {
    try {
      const response = await cityRepositary.createCity(data);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }

  async createMultipleCities(data) {
    try {
      const response = await cityRepositary.createMultipleCities(data);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }

  async deleteCity(city_id) {
    try {
      const response = await cityRepositary.deleteCity(city_id);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }

  async updateCity(city_id, data) {
    try {
      const response = await cityRepositary.updateCity(city_id, data);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }

  async getCity(city_id) {
    try {
      const response = await cityRepositary.getCity(Number(city_id));
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }
  async getAllCities(filter) {
    try {
      const cities = await cityRepositary.getAllCities({name: filter.name});
      return cities;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }
}

export default CityService;
