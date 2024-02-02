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

/**
 * req.query.params=> {arrivalairportId, departureAirportId, minPrice, maxPrice}
 * Write the crud for it
 *  
   GET all flights with the above given filters 
 */
export async function getAllFlights(req, res) {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flights,
      message: "Fetched all flights successfully ",
      sucess: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Not able to retrieve flights, controller layer",
      success: false,
      err: {error},
    });
  }
}
