import { Model, model, Schema } from "mongoose";
import type { IUser } from "../interface/user.interface.js";

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true },
);
export const User: Model<IUser> = model<IUser>("User", userSchema);
