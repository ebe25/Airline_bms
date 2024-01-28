/**
 * Service talks to corresponding repositary, that does some manipulations
 * with the data from the repo
 * and returns the data to the controller layer.
 */
import RepositaryCollection from "../repositary/index.js";

const cityRepositary = new RepositaryCollection.CityRepositary();
class CityService {
  async createCity(data) {
    try {
      const response = cityRepositary.createCity(data);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }

  async deleteCity(city_id) {
    try {
      const response = cityRepositary.deleteCity(city_id);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }

  async updateCity(city_id, data) {
    try {
      const response = cityRepositary.updateCity(city_id, data);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }

  async getCity(city_id) {
    try {
      const response = cityRepositary.getCity(city_id);
      return response;
    } catch (error) {
      console.log("Error with service layer");
      throw {error};
    }
  }
  async getAllCities(){
    try {
      const response = cityRepositary.getAllCities();
      return response;
    } catch (error) {
      
    }
  }
}

export default CityService;
