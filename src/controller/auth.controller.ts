import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { User } from "../models/user.js";

export const routerGetController = (req: Request, res: Response) => {
  res.send("<h1>User Auth Api</h1>");
};
export const routerPostController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ message: "User already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User registerd successfully", user });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
