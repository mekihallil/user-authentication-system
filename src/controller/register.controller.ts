import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { User } from "../models/user.models.js";
import { generateToken } from "../utils/generateToken.js";

type ReqBody = {
  name: string;
  email: string;
  password: string;
};
export const register = async (
  req: Request<{}, {}, ReqBody>,
  res: Response,
) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ message: "User already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id.toString()),
    });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
