import ServicesCollection from "../services/index.js";

const cityService = new ServicesCollection.CityService();
const cityController = {};

/**
 * POST : /cities
 * req-body {name: "Delhi"} or req-body  [{name: "delhi"}, {name:"agra"}]
 */
cityController.create = async (req, res) => {
  console.log(req.body.cities)
  try {
    if (req.body) {
      try {
        const mutlipleCities = await cityService.createMultipleCities(
          req.body.cities
        );
        return res.status(201).json({
          data: mutlipleCities,
          message: "multiple cities created",
          success: true,
          err: {},
        });
      } catch (error) {
        return res.status(500).json({
          data: {},
          message: "Not able to create city(multiple), controller layer",
          success: false,
          err: error,
        });
      }
    }
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      message: "City created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to create city, controller layer",
      success: false,
      err: error,
    });
  }
};

/** DELETE /city/:id */

cityController.destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      message: "City deleted successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to delete city, controller layer",
      success: false,
      err: error,
    });
  }
};

/** PATCH /city/:id
 *  req-body {name: "city", id: "CUID"}
 */
cityController.update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      message: "City updated successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to update city, controller layer",
      success: false,
      err: error,
    });
  }
};

/***
 * GET ALL /city
 */
cityController.getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    if (cities.length === 0) {
      return res.status(404).json({
        data: cities,
        message: "No city with given name found",
        success: false,
        err: {},
      });
    }
    return res.status(200).json({
      data: cities,
      success: true,
      message: "All cities successfully retrieved",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to get-all city, controller layer",
      success: false,
      err: error,
    });
  }
};

/**
 * GET /city/:id
 */
cityController.get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      message: "City successfully retrieved",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to retrieve city, controller layer",
      success: false,
      err: error,
    });
  }
};

export default cityController;
