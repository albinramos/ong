import { Router } from "express";

import usersViewController from "../controllers/users/userController.js";
import {isAuthenticated,isAdmin} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated, (req,res)=>{
    usersViewController.getAll(req,res);
});

router.get("/new",usersViewController.createForm);

router.get("/:id",isAuthenticated,(req,res)=>{
    usersViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    usersViewController.create(req,res);
});

router.get("/:id/edit",usersViewController.updateForm);

router.post("/:id",(req,res)=>{
    usersViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    usersViewController.remove(req,res);
});

export default router;