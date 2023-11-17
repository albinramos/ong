import { Router } from "express";
import cors from "cors";

import usersHasProjectsViewController from "../controllers/usersHasProjects/usersHasProjectsViewController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/create", isAuthenticated, (req,res)=>{
    usersHasProjectsViewController.
    createUserHasProject(req,res);
});

export default router;