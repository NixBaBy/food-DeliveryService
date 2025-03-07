import express from "express";
import {
  getFoodOrder,
  // getFoodOrderByUserId,
  postFoodOrder,
  putFoodOrder,
} from "../controllers/foodOrder.controller";

const foodOrderRoute = express.Router();

foodOrderRoute.get("/", getFoodOrder);
// foodOrderRoute.get("/:userId", getFoodOrderByUserId);
foodOrderRoute.post("/", postFoodOrder);
foodOrderRoute.put("/", putFoodOrder);

export default foodOrderRoute;
