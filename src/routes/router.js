import { Router } from "express";
import authRouter from "./authRouter.js";
import usersHasProjectsRouter from "./usersHasProjectsRouter.js";
import projectsRouter from "./projectsRouter.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = Router();

router.use("/", authRouter);

router.get("/", (req,res) => {
    const isUser = req.session.user.role === 'user' ? true : false
    const isOwner = req.session.user.role === 'owner' ? true : false
    res.render("home",{userId: req.session.user.id, isUser: isUser, isOwner: isOwner});
})

router.use("/users_has_projects", isAuthenticated, usersHasProjectsRouter);

router.use("/users_has_projects/create", usersHasProjectsRouter);

router.use("/projects",isAuthenticated, projectsRouter);

router.use("/projects/create",projectsRouter);

router.use("/projects/congratulations",projectsRouter);

export default router;