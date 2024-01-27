import express from "express";
import PORT from "./config/serverConfig.js";

import CityRepositary from "./repositary/city-repositary.js";

const setUpAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  const repo = new CityRepositary();

  const updateData = {
    name: "Patch name",
  };
  repo.updateCity({city_id: "clrwgatcy00009qwkv5glmcs3"}, updateData);

  app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
};

setUpAndStartServer();
