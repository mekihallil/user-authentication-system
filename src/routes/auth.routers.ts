import express from "express";
import { login } from "../controller/login.controller.js";
import { logout } from "../controller/logout.controller.js";
import { register } from "../controller/register.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
