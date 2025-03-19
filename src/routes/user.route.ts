import express from "express";
import {
  deleteUser,
  forgetPassword,
  getUser,
  putUser,
  resetPassword,
  signIn,
  signUp,
} from "../controllers/user.controller";

const userRoute = express.Router();

userRoute.post("/sign-up", signUp);
userRoute.post("/sign-in", signIn);
userRoute.post("/reset-password-request", forgetPassword);
userRoute.post("/reset-password", resetPassword);
userRoute.get("/refresh", getUser);
userRoute.put("/sign-up", putUser);
userRoute.delete("/sign-up", deleteUser);

export default userRoute;
