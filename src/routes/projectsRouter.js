import { Router } from "express";

import projectsViewController from "../controllers/projects/projectsViewController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/list",(req,res)=>{
    projectsViewController.getAll(req,res);
});



export default router;