import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  getOneFood,
  putFood,
} from "../controllers/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/", getFood);
foodRoute.get("/:_id", getOneFood);
foodRoute.put("/", putFood);
foodRoute.delete("/", deleteFood);

export default foodRoute;
