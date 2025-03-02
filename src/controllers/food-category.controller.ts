import { Request, Response } from "express";
import foodCotegoryModel from "../models/food-cotegory.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCotegoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "error in createfoodcategory", error });
  }
};

export const getCagegory = async (req: Request, res: Response) => {
  try {
    const getCagegory = await foodCotegoryModel.find();
    res.status(200).json({ message: "finded", getCagegory });
  } catch (error) {
    res.status(500).json({ message: "error in createFoodCategory get", error });
  }
};

export const putCagegory = async (req: Request, res: Response) => {
  try {
    const { _id, categoryName } = req.body;
    await foodCotegoryModel.updateOne({ _id }, { categoryName });
    res.status(200).json({ message: "updated" });
  } catch (error) {
    res.status(500).json({ message: "error in createFoodCategory put", error });
  }
};

export const deleteCagegory = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await foodCotegoryModel.deleteOne({ _id });
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in createFoodCategory delete", error });
  }
};
