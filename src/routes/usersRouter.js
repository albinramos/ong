import { Router } from "express";

import userViewController from "../controllers/users/userController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";


const router = Router();


router.get("/",isAuthenticated, (req,res)=>{
    userViewController.getAll(req,res);
});

router.get("/new",userViewController.createForm);

router.get("/:id",isAuthenticated,(req,res)=>{
    userViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    userViewController.create(req,res);
});

router.get("/:id/edit",userViewController.updateForm);

router.post("/:id",(req,res)=>{
    userViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    userViewController.remove(req,res);
});

export default router;