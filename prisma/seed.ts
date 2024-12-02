import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { card } from "./constants";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "test@mail.ru",
        password: hashSync("11111111", 10),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "adtest@mail.ru",
        password: hashSync("11111111", 10),
        role: "ADMIN",
      },
    ],
  });

  await prisma.card.createMany({
    data: card,
  });

  const collection1 = await prisma.collection.create({
    data: {
      name: "1 theme",
      card: {
        connect: card.slice(0, 15),
      },
    },
  });

  const collection2 = await prisma.collection.create({
    data: {
      name: "2 theme",
      card: {
        connect: card.slice(15, 18),
      },
    },
  });

  const collection3 = await prisma.collection.create({
    data: {
      name: "3 theme",
      card: {
        connect: card.slice(18, 21),
      },
    },
  });

  await prisma.collection.createMany({
    data: [collection1, collection2, collection3],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "card" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "collection" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
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
