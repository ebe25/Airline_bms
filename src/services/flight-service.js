import RepositaryCollection from "../repositary/index.js";

class FlightService {
  constructor() {
    this.flightRepositary = new RepositaryCollection.FlightRepositary();
    this.airplaneRepositary = new RepositaryCollection.AirplaneRepositary();
  }

  /**
   * {
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
   */
  async createFlight(data) {
    try {
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
      const flight = await this.flightRepositary.getFlight(id);
      return flight;
    } catch (error) {
      console.log("Something wrong with service layer");
      throw {error};
    }
  }
}
export default FlightService;
