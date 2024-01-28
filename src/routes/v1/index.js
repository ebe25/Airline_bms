import express from "express";
import cityController from "../../controllers/city-controller.js";

const ApiV1Router = express.Router();
ApiV1Router.post("/city", cityController.create, {conten});

export default ApiV1Router;