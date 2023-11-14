import { Router } from "express";

import projectsViewController from "../controllers/projects/projectsViewController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    projectsViewController.getAll(req,res);
});

router.get("/new",projectsViewController.createForm);

router.get("/:id",(req,res)=>{
    projectsViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    projectsViewController.create(req,res);
});

router.get("/:id/delete",(req,res)=>{
    projectsViewController.remove(req,res);
});

export default router;