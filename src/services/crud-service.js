class CrudService {
  constructor(repositary) {
    this.repositary = repositary;
  }
  async getAll() {
    try {
      const response = await this.repositary.getAll();
      return response;
    } catch (error) {
      console.log("Something Wrong with CrudService");
      throw {error};
    }
  }

  async get(modelId) {
    try {
      const response = await this.repositary.get(modelId);
      return response;
    } catch (error) {
      console.log("Something Wrong with CrudService");
      throw {error};
    }
  }

  async create(data) {
    try {
      const response = await this.repositary.create(data);
      return response;
    } catch (error) {
      console.log("Something Wrong with CrudService");
      throw {error};
    }
  }
  async destroy(modelId) {
    try {
      const response = await this.repositary.destroy(modelId);
      return response;
    } catch (error) {
      console.log("Something Wrong with CrudService");
      throw {error};
    }
  }

  async update(modelId, data) {
    try {
      const response = await this.repositary.update(modelId, data);
      return response;
    } catch (error) {
      console.log("Something Wrong with CrudService");
      throw {error};
    }
  }
}
export default CrudService;
