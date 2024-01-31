import RepositaryCollection from "../repositary/index.js";
class AirportService {
  constructor() {
    this.airportRepositary = new RepositaryCollection.AirportRepositary();
  }
  async createAirport(data) {
    console.log(data);
    try {
      const airport = await this.airportRepositary.createAirport({
        ...data,
        cityId: Number(data.cityId),
      });
      return airport;
    } catch (error) {
      console.log("error with service layer");
      throw {error};
    }
  }

  async createMultipleAirports(data) {
    try {
      const airports = await this.airportRepositary.createMultipleAirports(
        data
      );
      return airports;
    } catch (error) {
      console.log("error with service layer");
      throw {error};
    }
  }

  async deleteAirport(id) {
    try {
      const response = await this.airportRepositary.deleteAirport(Number(id));
      return response;
    } catch (error) {
      console.log("error with service layer");
      throw {error};
    }
  }

  async updateAirport(id, data) {
    try {
      const response = await this.airportRepositary.updateAirport(
        Number(id),
        data
      );
      return response;
    } catch (error) {
      console.log("error with service layer");
      throw {error};
    }
  }

  async getAirport(id) {
    try {
      const airport = this.airportRepositary.getAirport(Number(id));
      return airport;
    } catch (error) {
      console.log("error with service layer");
      throw {error};
    }
  }

  async getAllAirports({name}) {
    try {
      const airports = this.airportRepositary.getAllAirports(name);
      return airports;
    } catch (error) {
      console.log("error with service layer");
      throw {error};
    }
  }
}
export default AirportService;
