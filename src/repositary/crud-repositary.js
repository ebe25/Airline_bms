class CrudRepositary {
  //incoming prisma model from base class
  constructor(model) {
    this.model = model;
  }
  async getAll() {
    try {
      const response = await this.model.findMany();
      return response;
    } catch (error) {
      console.log("CRUD repo error!!", error);
      throw {error};
    }
  }

  async get(modelId) {
    try {
      const response = await this.model.findUnique({
        where: {
          id: modelId,
        },
      });
      return response;
    } catch (error) {
      console.log("CRUD repo error!!", error);
      throw {error};
    }
  }

  async create(data) {
    try {
      const response = await this.model.create({
        data: data,
      });
      return response;
    } catch (error) {
      console.log("CRUD repo error!!", error);
      throw {error};
    }
  }
  async destroy(modelId) {
    try {
      const response = await this.model.delete({
        where: {
          id: modelId,
        },
      });
      return response;
    } catch (error) {
      console.log("CRUD repo error!!", error);
      throw {error};
    }
  }

  async update(modelId, data) {
    try {
      const response = await this.model.update({
        where: {
          id: modelId,
          data: data,
        },
      });
      return response;
    } catch (error) {
      console.log("CRUD repo error!!", error);
      throw {error};
    }
  }
}
export default CrudRepositary;
