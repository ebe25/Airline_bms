import {PrismaClient} from "@prisma/client";
import {
  randAddress,
  randAirportCode,
  randAirportName,
  randFlightNumber,
  randNumber,
} from "@ngneat/falso";
const prisma = new PrismaClient();

async function main() {
  // const mockCities = Array.from({length: 5}).map(() => ({
  //   name: randCity(),
  // }));

  const mockAirports = Array.from({length: 5}).map(() => ({
    name: randAirportName(),
    address: randAddress(),
    cityId: randAirportCode(),
  }));

  const mockAirplanes = Array.from({length: 5}).map(() => ({
    model_number: randNumber.toString(),
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

  // await prisma.airport.create({
  //   data: {
  //     name: randAirportName(),
  //     cityId: 10,
  //   },
  // });
  await prisma.airplanes.createMany({
    data: [
      {model_number: "Airbus A320", capacity: 1200},
      {model_number: "Boeing 747", capacity: 1500},
      {model_number: "Airbus A330"},
    ],
    skipDuplicates: true,
  });
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
