import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
class FlightRepositary {
  #createFilter(data) {
    let filter = {};
    if (data.minPrice) {
      Object.assign(filter, {price: {gte: Number(data.minPrice)}});
    }
    if (data.maxPrice) {
      Object.assign(filter, {price: {lte: Number(data.maxPrice)}});
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        price: {gte: Number(data.minPrice), lte: Number(data.maxPrice)},
      });
    }
    if (data.arrival_airportId) {
      filter.arrival_airportId = Number(data.arrival_airportId);
    }
    if (data.departure_airportId) {
      filter.departure_airportId = Number(data.departure_airportId);
    }
    return filter;
  }

  /**create flights */
  async createFlight(data) {
    try {
      const flight = await prisma.flight.create({
        data: data,
      });
      return flight;
    } catch (error) {
      console.log("flight repositary layer error", error);
      throw {error};
    }
  }

  /**get flight */
  async getFlight(id) {
    try {
      const flight = await prisma.flight.findUnique({
        where: {
          id: id,
        },
      });
      return flight;
    } catch (error) {
      console.log("flight repositary layer error", error);
      throw {error};
    }
  }

  /**  /api/v1/flights?minPrice=40000&dep_airport_id=7
        filter {
        where: {
          price: {
            lte: 2500,
          },
          arrival_airportId: 14,
          departure_airportId: 20,
        } */
  async getAllFlightsData(filter) {
    try {
      const filterObj = this.#createFilter(filter);
      if (filterObj) {
        const flightsData = await prisma.flight.findMany({
          where: filterObj,
        });
        return flightsData;
      }
      const flightsData = await prisma.flight.findMany();
      return flightsData;
    } catch (error) {
      console.log("flight repositary layer error", error);
      throw {error};
    }
  }
}
export default FlightRepositary;
