import { Request, Response } from "express";
import foodOrderModel from "../models/foodOrder.model";

export const postFoodOrder = async (req: Request, res: Response) => {
  try {
    const postFoodOrder = req.body;
    const newFoodOrder = await foodOrderModel.create(postFoodOrder);
    res
      .status(200)
      .json({ message: "Successfully created foodOrder", newFoodOrder });
  } catch (error) {
    res.status(500).json({ message: "error in foodOrder", error });
  }
};

export const getFoodOrder = async (req: Request, res: Response) => {
  try {
    const getFoodOrder = await foodOrderModel.find();
    res
      .status(200)
      .json({ message: "Successfully find FoodOrder", getFoodOrder });
  } catch (error) {
    res.status(500).json({ message: "error in getFoodOrder", error });
  }
};

// export const getFoodOrderByUserId = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { userId } = req.params;
//     const foodOrders = await foodOrderModel.find({ userId });

//     if (!foodOrders || foodOrders.length === 0) {
//       return res.status(404).json({ message: "No food orders found for this user" });
//     }

//     return res.status(200).json({ message: "Successfully found food orders", foodOrders });
//   } catch (error) {
//     return res.status(500).json({ message: "Error in getFoodOrder", error });
//   }
// };

export const putFoodOrder = async (req: Request, res: Response) => {
  try {
    const { _id, totalPrice, status } = req.body;
    const updatedFoodOrder = await foodOrderModel.updateOne(
      { _id },
      { totalPrice, status }
    );
    res
      .status(200)
      .json({ message: "Successfully updated foodOrder", updatedFoodOrder });
  } catch (error) {
    res.status(500).json({ message: "error in putfoodOrder", error });
  }
};

// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const { _id } = req.body;
//     const deleteUser = await userModel.deleteOne({ _id });
//     res.status(200).json({ message: "Successfully deleted User", deleteUser });
//   } catch (error) {
//     res.status(500).json({ message: "error in deleteUser", error });
//   }
// };
