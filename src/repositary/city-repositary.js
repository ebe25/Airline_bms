// repositary layer contains all the db/model-based interation

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

class CityRepositary {
  async createCity({name}) {
    try {
      const city = await prisma.city.create({
        data: {
          name: name,
        },
      });
      console.log("City created!");
      return city;
    } catch (error) {
      throw {error: error.message};
    }
  }

  async deleteCity(city_id) {
    try {
      const city = await prisma.city.delete({
        where: {
          id: city_id,
        },
      });
      console.log("city deleted!");
      return true;
    } catch (error) {
      console.log("repositary delete method error", error);
      throw {error};
    }
  }

  async getCity(city_id) {
    try {
      const city = await prisma.city.findUnique({
        where: {
          id: city_id,
        },
      });
      console.log(city_id, "city is-", city);
      return city;
    } catch (error) {
      console.log("error");
      throw {error};
    }
  }

  async updateCity(city_id, data) {
    try {
      const city = await prisma.city.update({
        where: {
          id: city_id,
        },
        data: data,
      });
      console.log("city updated!");
      const updatedCity = await prisma.city.findUnique({
        where: {
          id: city_id,
        },
      });
      console.dir(updatedCity);
      return updatedCity;
    } catch (error) {
      console.log("Repositary layer error with updateCuity method", error);
      throw {error};
    }
  }

  async getAllCities() {
    try {
      const response = await prisma.city.findMany();
      return response;
    } catch (error) {
      console.log("Repositary layer error with getAllCity method", error);
      throw {error};
    }
  }
}

export default CityRepositary;
