import foodModel from "../models/food.model";
import { Request, Response } from "express";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModel.create({
      foodName: foodData.foodName,
      price: foodData.foodPrice,
      image:
        "https://res.cloudinary.com/dhvtog3m2/image/upload/v1741750194/55bc133b8044d28cf937929f2e9f99ce_mu4jcd.png",
      ingredients: foodData.Ingredients,
      category: foodData.category,
    });
    res.status(200).json({ message: "Successfully created category", newFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in createFood", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const newFood = await foodModel.find().populate("category");
    res.status(200).json({ message: "Successfully created category", newFood });
  } catch (error) {
    res.status(500).json({ message: "error in getFood", error });
  }
};

export const getOneFood = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const newFood = await foodModel.find({ _id });
    res.status(200).json({ message: "Successfully get food", newFood });
  } catch (error) {
    res.status(500).json({ message: "error in getFood", error });
  }
};

export const putFood = async (req: Request, res: Response) => {
  try {
    const { foodName, price, ingredients, category } = req.body;
    console.log(req.body);
    const { _id } = req.params;
    console.log(_id);
    const newFood = await foodModel.updateOne(
      { _id },
      { foodName, price, ingredients, category }
    );
    // const newFood = await foodModel.updateMany(
    //   { _id },
    //   { $set: { foodName, price, ingredients, category } }
    // );
    console.log("new food", newFood);
    res.status(200).json({ message: "Successfully created category", newFood });
  } catch (error) {
    res.status(500).json({ message: "error in putFood", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const newFood = await foodModel.deleteOne({ _id });
    res.status(200).json({ message: "Successfully created category", newFood });
  } catch (error) {
    res.status(500).json({ message: "error in deleteFood", error });
  }
};
