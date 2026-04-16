import express from "express";
import { loginUser } from "../controller/login.controller.js";
import { registerUser } from "../controller/register.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
