import mongoose, { Schema } from "mongoose";

type FoodSchemaType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: Schema.Types.ObjectId;
};

const FoodSchema = new Schema(
  {
    foodName: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      rel: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<FoodSchemaType>("Food", FoodSchema);
