import mongoose, { Schema } from "mongoose";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

type userSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orderedFoods: string[];
};

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
    orderedFoods: { type: [Schema.ObjectId], ref: "foodOrder" },
  },
  { timestamps: true }
);

export default mongoose.model<userSchemaType>("user", userSchema);
