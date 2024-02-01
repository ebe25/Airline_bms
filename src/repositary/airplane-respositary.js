import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

class AirplaneRepositary {
  async getAirplane(id) {
    try {
      const airplane = await prisma.airplane.findUnique({
        where: {
          id: id,
        },
      });
      return airplane;
    } catch (error) {
      console.log(error);
      throw {error};
    }
  }
}
export default AirplaneRepositary;
