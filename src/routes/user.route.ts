import express from "express";
import {
  deleteUser,
  getUser,
  putUser,
  signUp,
} from "../controllers/user.controller";

const userRoute = express.Router();

userRoute.post("/", signUp);
userRoute.get("/", getUser);
userRoute.put("/", putUser);
userRoute.delete("/", deleteUser);

export default userRoute;
