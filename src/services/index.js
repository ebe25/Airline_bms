/**
 * Collection of all the services objects
 */

import CityService from "./city-service.js";
import AirportService from "./airport-service.js";
import FlightService from "./flight-service.js";
import CrudService from "./crud-service.js";

export const BasicServicesCollection = {
  CrudService,
};
export const ServicesLayersCollection = {
  CityService,
  AirportService,
  FlightService,
};
