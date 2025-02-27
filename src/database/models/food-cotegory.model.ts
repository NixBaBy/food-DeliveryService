import mongoose, { Schema } from "mongoose";

type FoodCategorySchemaType = {
  categoryName: string;
};

const FoodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<FoodCategorySchemaType>(
  "FoodCategory",
  FoodCategorySchema
);
