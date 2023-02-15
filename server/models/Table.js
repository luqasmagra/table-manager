import mongoose from "mongoose";

const TableSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prize: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Table", TableSchema);
