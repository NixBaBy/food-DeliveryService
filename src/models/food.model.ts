import mongoose, { Schema } from "mongoose";

type FoodSchemaType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: Schema.Types.ObjectId;
};

const FoodSchema = new Schema(
  {
    foodName: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<FoodSchemaType>("Food", FoodSchema);
