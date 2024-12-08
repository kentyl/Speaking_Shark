import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { card, collections, categories } from "./constants";

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

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.collection.createMany({
    data: collections,
  });

  await prisma.card.createMany({
    data: card,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "card" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "collection" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "category" RESTART IDENTITY CASCADE`;
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
