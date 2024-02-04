import {BasicServicesCollection} from "./index.js";
import RepositaryCollection from "../repositary/index.js";
import CrudService from "./crud-service.js";
// const {CrudService} = BasicServicesCollection;
/**send in the instance for crudService to invoke its constructor */

class AirplaneService extends CrudService {
  constructor() {
    const airplaneRepositary = new RepositaryCollection.AirplaneRepositary();
    super(airplaneRepositary);
  }
}
export default AirplaneService;
