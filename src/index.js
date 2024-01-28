import express from "express";
import PORT from "./config/serverConfig.js";
import ApiRoutes from "./routes/index.js";

const setUpAndStartServer = async () => {
  const app = express();
  //makes the res, req objects accesiable
  app.use(express.json());
  //allows all data type of body to be passed to the request
  app.use(express.urlencoded({extended: true}));
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
};

setUpAndStartServer();
