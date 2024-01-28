import express from "express";
import cityController from "../../controllers/city-controller.js";

const ApiV1Router = express.Router();
ApiV1Router.post("/city", cityController.create);
ApiV1Router.get("/city/:id", cityController.get);
ApiV1Router.get("/city", cityController.getAll);
ApiV1Router.patch("/city/:id", cityController.update);
ApiV1Router.delete("/city/:id", cityController.destroy);

export default ApiV1Router;
