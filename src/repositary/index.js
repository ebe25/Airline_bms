/**
 * this file contains all the repositaries that can be used in the project
 */
import CityRepositary from "./city-repositary.js";
import AirportRepositary from "./airport-repositary.js";
import FlightRepositary from "./flight-repositary.js";
import CrudRepositary from "./crud-repositary.js";
import AirplaneRepositary from "./airplane-respositary.js";
const RepositaryCollection = {
  CityRepositary,
  AirportRepositary,
  FlightRepositary,
  CrudRepositary,
  AirplaneRepositary
};

export default RepositaryCollection;

// import madge from "madge";
// Object.assign(RepositaryCollection, AirplaneRepositary);

// madge("./src/repositary/index.js").then((res) => {
//   console.log(res.depends('repositary/index.js'));
// });