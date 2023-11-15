import { Router } from "express";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/", authRouter);

router.get("/", (req,res) => {
    res.render("home");
})

export default router;