import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  putFood,
} from "../controllers/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/", getFood);
foodRoute.put("/", putFood);
foodRoute.delete("/", deleteFood);

export default foodRoute;
