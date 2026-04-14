import express from "express";
import {
  routerGetController,
  routerPostController,
} from "../controller/auth.controller.js";

const router = express.Router();

router.get("/", routerGetController);
router.post("/register", routerPostController);

export default router;
