/**
 * Collection of all the services objects
 */

import CityService from "./city-service.js";
import AirportService from "./airport-service.js";
import FlightService from "./flight-service.js";
import CrudService from "./crud-service.js";
import AirplaneService from "./airplane-service.js";
export const BasicServicesCollection = {
  CrudService,
};
const ServicesLayersCollection = {
  CityService,
  AirportService,
  FlightService,
  AirplaneService,
};
export default ServicesLayersCollection;
