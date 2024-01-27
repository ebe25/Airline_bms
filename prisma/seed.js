import {PrismaClient} from "@prisma/client";
import {randEmail, randFirstName} from "@ngneat/falso";
const prisma = new PrismaClient();

async function main() {
  const mockData = Array.from({length: 10}).map(() => ({
    email: randEmail(),
    name: randFirstName(),
  }));

  
  console.log("Seeding users");

  for (const user of mockData) {
    await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
      }
    });
  }

  console.log("Seeding completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
