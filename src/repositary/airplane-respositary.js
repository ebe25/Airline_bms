//calling the crud repo parent class and invoking its constructor with the airplane model!
import {PrismaClient} from "@prisma/client";
import RepositaryCollection from "./index.js";

const prisma = new PrismaClient();
const {CrudRepositary} = RepositaryCollection;
class AirplaneRepositary extends CrudRepositary {
  constructor() {
    super(prisma.airplane);
  }
}

export default AirplaneRepositary;
// import madge from "madge";

// madge("src/repositary/airplane-respositary.js").then((res) => {
//   console.log(res.obj('repositary/index.js'));
// });
