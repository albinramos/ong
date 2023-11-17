import { Router } from "express";
import authRouter from "./authRouter.js";
import usersHasProjectsRouter from "./usersHasProjectsRouter.js";
import projectsRouter from "./projectsRouter.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = Router();

router.use("/", authRouter);

router.get("/", (req,res) => {
    res.render("home");
})

router.use("/users_has_projects", isAuthenticated, usersHasProjectsRouter);

router.use("/users_has_projects/create", usersHasProjectsRouter);

router.use("/projects",isAuthenticated, projectsRouter);

router.use("/projects/create",projectsRouter);

//console.log(router.stack);

export default router;