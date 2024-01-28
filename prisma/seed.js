import {PrismaClient} from "@prisma/client";
import {
  randAddress,
  randAirport,
  randAirportCode,
  randAirportName,
  randCity,
  randEmail,
  randFirstName,
  randFullAddress,
} from "@ngneat/falso";
const prisma = new PrismaClient();

async function main() {
  const mockCities = Array.from({length: 5}).map(() => ({
    name: randCity(),
  }));

  const mockAirports = Array.from({length: 5}).map(() => ({
    name: randAirportName(),
    address: randAddress(),
    cityId: randAirportCode(),
  }));

  console.log("Seeding");
  // for (const city of mockCities) {
  //   await prisma.city.create({
  //     data: {
  //       name: city.name,
  //     },
  //   });
  // }

  // await prisma.airport.create({
  //   data: {
  //     name: randAirportName(),
  //     address: randFullAddress(),
  //     cityId: 1,
  //   },
  // });
//   await prisma.airport.create({
//     data: {
//       name: randAirportName(),
//       address: randFullAddress(),
//       cityId: 2,
//     },
//   });
//   await prisma.airport.create({
//     data: {
//       name: randAirportName(),
//       address: randFullAddress(),
//       cityId: 3,
//     },
//   });
// }
}

console.log("Seeding completed");

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
