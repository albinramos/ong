import { Router } from "express";

import projectsViewController from "../controllers/projects/projectsViewController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/list",(req,res)=>{
    projectsViewController.getAllProjects(req,res);
});

router.post("/list",(req,res)=>{
    projectsViewController.getAllProjects(req,res);
});

router.get("/create",projectsViewController.createForm);

router.post("/create", isAuthenticated, (req,res)=>{
    projectsViewController.createProject(req,res);
});

router.get("/congratulations",isAuthenticated,(req,res)=>{
    projectsViewController.congratulations(req,res);
});

export default router;