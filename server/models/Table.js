import mongoose from "mongoose";

const TableSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prize: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Table", TableSchema);
