import express from "express";
import cityController from "../../controllers/city-controller.js";
import {
  create,
  destory,
  update,
  getAll,
  get,
} from "../../controllers/airport-controller.js";
const ApiV1Router = express.Router();

/**city */
ApiV1Router.post("/city", cityController.create);
ApiV1Router.get("/city/:id", cityController.get);
ApiV1Router.get("/city", cityController.getAll);
ApiV1Router.patch("/city/:id", cityController.update);
ApiV1Router.delete("/city/:id", cityController.destroy);

/**airport */
ApiV1Router.post("/airport", create);
ApiV1Router.get("/airport/:id", get);
ApiV1Router.get("/airport", getAll);
ApiV1Router.patch("/airport/:id", update);
ApiV1Router.delete("/airport/:id", destory);

export default ApiV1Router;
