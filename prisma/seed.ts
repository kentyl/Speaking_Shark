import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
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
        email: "ad_test@mail.ru",
        password: hashSync("11111111", 10),
        role: "ADMIN",
      },
    ],
  });
  await prisma.set_cards.create({});
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
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
