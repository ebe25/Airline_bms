import express from "express";
import PORT from "./config/serverConfig.js";

const setUpAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
};

setUpAndStartServer();