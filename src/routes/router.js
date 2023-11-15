import { Router } from "express";
import authRouter from "./authRouter.js";
import projectsRouter from "./projectsRouter.js";
const router = Router();

router.use("/", authRouter);

router.get("/", (req,res) => {
    res.render("home");
})

router.use("/", projectsRouter);

export default router;