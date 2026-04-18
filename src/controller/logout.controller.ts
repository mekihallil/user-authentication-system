import type { Request, Response } from "express";

export const logout = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Logout successful",
  });
};
