import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { User } from "../models/user.models.js";
type ReqBody = {
  email: string;
  password: string;
};

export const logout = async (req: Request<{}, {}, ReqBody>, res: Response) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser && (await bcrypt.compare(password, existUser.password))) {
      res.status(200).json({ message: "Logout successfully", token: "" });
    }
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
