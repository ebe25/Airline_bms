import ServicesLayersCollection from "../services/index.js";

const airportService = new ServicesLayersCollection.AirportService();

/**
 * POST /airport
 * req.body => {}
 */

async function createAirport(req, res) {
  if (req.body.airports) {
    try {
      const airport = await airportService.createMultipleAirports(
        req.body.airports
      );
      return res.status(201).json({
        data: airport,
        success: true,
        message: "success created airports",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        message: "Not able to create airports, controller layer",
        success: false,
        err: error,
      });
    }
  }

  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "success created airport",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to create airport, controller layer",
      success: false,
      err: error,
    });
  }
}

async function destoryAirport(req, res) {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "airport deleted successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to delete airport, controller layer",
      success: false,
      err: error,
    });
  }
}

async function updateAirport(req, res) {
  try {
    const updatedAirport = await airportService.updateAirport(
      req.params.id,
      req.body
    );
    return res.json({
      data: updatedAirport,
      sucess: true,
      message: "airport updated successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to update airport, controller layer",
      success: false,
      err: error,
    });
  }
}
async function getAllAirports(req, res) {
  try {
    const response = await airportService.getAllAirports(req.query);
    return res.json({
      data: response,
      sucess: true,
      message: "airports retrieved successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to getAll airports, controller layer",
      success: false,
      err: error,
    });
  }
}

async function getAirport(req, res) {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.json({
      data: airport,
      sucess: true,
      message: "airport fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Not able to get airport with id, controller layer",
      success: false,
      err: error,
    });
  }
}

export {
  createAirport,
  destoryAirport,
  updateAirport,
  getAllAirports,
  getAirport,
};
