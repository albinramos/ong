import { Router } from "express";
import authRouter from "./authRouter.js";
import projectsRouter from "./projectsRouter.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = Router();

router.use("/", authRouter);

router.get("/", (req,res) => {
    res.render("home");
})

router.use("/projects",isAuthenticated, projectsRouter);

export default router;