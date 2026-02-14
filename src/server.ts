import app from "./app";
import prisma from "./config/database";
import { startReminderJob } from "./jobs/reminderJob";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  try {
    // Connect database
    await prisma.$connect();
    console.log("Database connected successfully");

    // Start cron jobs
    startReminderJob();
  } catch (error) {
    console.error("Startup error:", error);
  }
}

main();

// Export app for Vercel
export default app;
