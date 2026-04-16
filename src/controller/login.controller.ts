import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { User } from "../models/user.models.js";
import { generateToken } from "../utils/generateToken.js";

type loginBody = {
  email: string;
  password: string;
};

export const loginUser = async (
  req: Request<{}, {}, loginBody>,
  res: Response,
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id.toString()),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
