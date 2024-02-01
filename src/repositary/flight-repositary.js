import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
class FlightRepositary {
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
}
export default FlightRepositary;
