// repositary layer contains all the db/model-based interation

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

class AirportRepositary {
  async createAirport(data) {
    try {
      const airport = await prisma.airport.create({
        data: {
          name: data.name,
          address: data.address,
          cityId: data.cityId,
        },
      });
      console.log("Airport created!");
      return airport;
    } catch (error) {
      throw {error: error.message};
    }
  }

  async deleteAirport(airport_id) {
    try {
      const Airport = await prisma.airport.delete({
        where: {
          id: airport_id,
        },
      });
      console.log("Airport deleted!");
      return Airport;
    } catch (error) {
      console.log("repositary delete method error", error);
      throw {error};
    }
  }

  async createMultipleAirports(data) {
    try {
      const airports = await prisma.airport.createMany({
        data: data,
     
      });
      return airports;
    } catch (error) {
      console.log("something wrong in the repositary layer", error);
      throw {error};
    }
  }

  async getAirport(airport_id) {
    try {
      const airport = await prisma.airport.findUnique({
        where: {
          id: airport_id,
        },
      });
      console.log(airport_id, "Airport is-", airport);
      return airport;
    } catch (error) {
      console.log("error");
      throw {error};
    }
  }

  async updateAirport(airport_id, data) {
    try {
      const updatedAirport = await prisma.airport.update({
        where: {
          id: airport_id,
        },
        data: data,
      });
      console.log("Airport updated!");
      console.dir(updatedAirport);

      return updatedAirport;
    } catch (error) {
      console.log("Repositary layer error with update-airport method", error);
      throw {error};
    }
  }

  async getAllAirports(name) {
    try {
      if (name) {
        const paginatedAirports = await prisma.airport.findMany({
          where: {
            name: {
              startsWith: name,
              mode: "insensitive",
            },
          },
        });
        return paginatedAirports;
      }
      const airports = await prisma.airport.findMany();
      return airports;
    } catch (error) {
      console.log("Repositary layer error with getAllAirport method", error);
      throw {error};
    }
  }
}

export default AirportRepositary;
