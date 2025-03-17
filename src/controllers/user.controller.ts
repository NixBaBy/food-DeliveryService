import { Request, Response } from "express";
import userModel from "../models/user.model";

import bcrypt, { compareSync, hashSync } from "bcrypt";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { user: email, password } = req.body;
    if (!email) {
      res.status(401).json({ message: "email ee bichnuu" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = await userModel.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);
    res.status(200).json({ message: "Successfully created user", newUser });
  } catch (error) {
    res.status(500).json({ message: "Error in signUp", error });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { user: email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "email ee oruulna uu", error: true });
      return;
    }
    console.log("email", email);
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      res
        .status(401)
        .json({ message: "burtgelgui hereglegch baina", error: true });
      return;
    }

    const isCorrect = compareSync(password, user?.password);

    if (!isCorrect) {
      res.status(401).json({ message: "password buruu baina", error: true });
      return;
    }

    res.status(200).json({ message: "Successfully created user", user });
  } catch (error) {
    res.status(500).json({ message: "Error in signUp", error: true });
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
    const { _id, password, email, role } = req.body;
    const updatedUser = await userModel.updateOne(
      { _id },
      { password, email, role }
    );
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
