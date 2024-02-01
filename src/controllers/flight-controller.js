import ServicesLayersCollection from "../services/index.js";

const flightService = new ServicesLayersCollection.FlightService();

export async function createFlight(req, res) {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      message: "Successfully flight created!",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Not able to create flight, controller layer",
      success: false,
      err: error,
    });
  }
}

export async function getFlight(req, res) {
  console.log({req: req.params});
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(201).json({
      data: flight,
      message: "Successfully flight created!",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Not able to retrieve flight, controller layer",
      success: false,
      err: {error},
    });
  }
}
