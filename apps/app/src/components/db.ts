import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function checkDbConnection() {
  try {
    // Try a simple query to test the connection (e.g., counting records in a table)
    const count = await prisma.user.count(); // Replace 'yourModel' with an actual model from your schema
    console.log("Database connection successful!");
    console.log("Record count:", count);
  } catch (error: any) {
    console.error("Error connecting to the database:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}
