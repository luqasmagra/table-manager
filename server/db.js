import mongoose from "mongoose";

const URI = `mongodb+srv://luqasmagra:luqasmagra@cluster0.uvqqo65.mongodb.net/table-manager`;

export async function connectDb() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(URI);
    console.log(`🚀 Connected to ${conn.connection.name} mondoDb !`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
