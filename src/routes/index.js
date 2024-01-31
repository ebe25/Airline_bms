import express from "express";
import ApiV1Router from "./v1/index.js";

const ApiRoutes = express.Router();
ApiRoutes.use("/v1", ApiV1Router);
export default ApiRoutes;
