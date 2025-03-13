import { Request, Response } from "express";
import userModel from "../models/user.model";

export const signUp = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    console.log(userData);
    const newUser = await userModel.create({
      email: userData.user,
      password: userData.password,
    });
    res.status(200).json({ message: "Successfully created user", newUser });
  } catch (error) {
    res.status(500).json({ message: "error in signUp", error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const getUser = await userModel.find();
    res.status(200).json({ message: "Successfully find user", getUser });
  } catch (error) {
    res.status(500).json({ message: "error in getUser", error });
  }
};

export const putUser = async (req: Request, res: Response) => {
  try {
    const { _id, password } = req.body;
    const updatedUser = await userModel.updateOne({ _id }, { password });
    res
      .status(200)
      .json({ message: "Successfully updated password", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "error in putUser", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const deleteUser = await userModel.deleteOne({ _id });
    res.status(200).json({ message: "Successfully deleted User", deleteUser });
  } catch (error) {
    res.status(500).json({ message: "error in deleteUser", error });
  }
};
