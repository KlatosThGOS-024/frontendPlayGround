import { PrismaClient } from "@prisma/client";

const databaseConnection = async () => {
  try {
    const prisma = new PrismaClient();
    await prisma.$connect();
    console.log("Database connected");
    return prisma;
  } catch (error: any) {
    console.error("Database connection failed:", error.message);
    throw new Error("Database connection failed");
  }
};
export default databaseConnection;
