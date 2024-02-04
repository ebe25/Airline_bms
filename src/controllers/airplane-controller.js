import ServicesLayersCollection from "../services/index.js";

const airplaneService = new ServicesLayersCollection.AirplaneService();

export async function createAirplane(req, res) {
  try {
    const airplane = await airplaneService.create(req.body);
    return res.status(201).json({
      data: airplane,
      message: "Airplane create succesfully",
      success: true,
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      message: "airplane creation failed controller",
      success: false,
      err: {error},
    });
  }
}
