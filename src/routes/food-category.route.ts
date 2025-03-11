import express from "express";
import {
  createFoodCategory,
  deleteCagegory,
  getCagegory,
  putCagegory,
} from "../controllers/food-category.controller";

const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getCagegory);
categoryRoute.put("/:_id", putCagegory);
categoryRoute.delete("/:_id", deleteCagegory);
export default categoryRoute;
