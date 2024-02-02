import RepositaryCollection from "../repositary/index.js";
import {compareTime} from "../utils/helper.js";
class FlightService {
  constructor() {
    this.flightRepositary = new RepositaryCollection.FlightRepositary();
    this.airplaneRepositary = new RepositaryCollection.AirplaneRepositary();
  }

  /**
   * req.body=> {
   *    flight_number: "BA 222"
   *    price: 2500
   *    arrival_time "10/09/2024"
   *    arrival_airport_id 18
   *    departure_time "11/09/2024"
   *    departure_airportId  21
   *    airplane_id  10
   *    total_seats => find from airplane
   * }
   *
   *        -- add a check as the time (arrival)> (departure)
   */

  async createFlight(data) {
    try {
      if (!compareTime(data.arrival_time, data.departure_time)) {
        throw {error: "Arrival time cannot be less then departure time!"};
      }
      const airplane = await this.airplaneRepositary.getAirplane(
        Number(data.airplane_id)
      );
      const flight = await this.flightRepositary.createFlight({
        ...data,
        price: Number(data.price),
        airplane_id: Number(data.airplane_id),
        arrival_airportId: Number(data.arrival_airportId),
        departure_airportId: Number(data.departure_airportId),
        total_seats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something wrong with service layer");
      throw {error};
    }
  }

  async getFlight(id) {
    try {
      const flight = await this.flightRepositary.getFlight(Number(id));
      return flight;
    } catch (error) {
      console.log("Something wrong with service layer");
      throw {error};
    }
  }

  async getAllFlights(data) {
    try {
      const flights = this.flightRepositary.getAllFlightsData(data);
      return flights;
    } catch (error) {
      console.log("something is wrong with serive layer");
      throw {error};
    }
  }
}
export default FlightService;
