import express from "express";
import {
  deleteUser,
  getUser,
  putUser,
  signIn,
  signUp,
} from "../controllers/user.controller";

const userRoute = express.Router();

userRoute.post("/sign-up", signUp);
userRoute.post("/sign-in", signIn);
userRoute.get("/refresh", getUser);
userRoute.put("/sign-up", putUser);
userRoute.delete("/sign-up", deleteUser);

export default userRoute;
