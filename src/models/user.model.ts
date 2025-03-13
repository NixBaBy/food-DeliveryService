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
  isVerified: { type: Boolean; default: false };
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
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<userSchemaType>("user", userSchema);
