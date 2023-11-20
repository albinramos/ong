import { Router } from "express";
import userViewController from "../controllers/users/userController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";


const router = Router();


router.get("/",isAuthenticated, (req,res)=>{
    userViewController.getAll(req,res);
});

export default router;