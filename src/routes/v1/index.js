import express from "express";
import {
  createCity,
  destroyCity,
  updateCity,
  getAllCity,
  getCity,
  getAllAirportsForCity,
} from "../../controllers/city-controller.js";
import {
  createAirport,
  destoryAirport,
  updateAirport,
  getAllAirports,
  getAirport,
} from "../../controllers/airport-controller.js";
const ApiV1Router = express.Router();

/**city */
ApiV1Router.post("/city", createCity);
ApiV1Router.get("/city/:id", getCity);
ApiV1Router.get("/city", getAllCity);
ApiV1Router.get("/city/airports/:id", getAllAirportsForCity);
ApiV1Router.patch("/city/:id", updateCity);
ApiV1Router.delete("/city/:id", destroyCity);

/**airport */
ApiV1Router.post("/airport", createAirport);
ApiV1Router.get("/airport/:id", getAirport);
ApiV1Router.get("/airport", getAllAirports);
ApiV1Router.patch("/airport/:id", updateAirport);
ApiV1Router.delete("/airport/:id", destoryAirport);

export default ApiV1Router;
