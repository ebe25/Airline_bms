import ServicesCollection from "../services/index.js";

const cityService = new ServicesCollection.CityService();
const cityController = {};

/**
 * POST : /cities
 * req-body {name: "Delhi"}
 */
cityController.create = async (req, res) => {
  console.log(req.body);
  try {
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

cityController.destroy = async () => {
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
      message: "Not able to create city, controller layer",
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
      message: "Not able to create city, controller layer",
      success: false,
      err: error,
    });
  }
};

/**
 * GET /city/:id
 */
cityController.get = async (res, req) => {
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
      message: "Not able to create city, controller layer",
      success: false,
      err: error,
    });
  }
};

export default cityController;
