import express from "express";
import { login } from "../controller/login.controller.js";
import { logout } from "../controller/logout.controller.js";
import { register } from "../controller/register.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", logout);

export default router;

// i build user register and login the next part is the admin register,delete users and login
