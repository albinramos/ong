import jwt from "jsonwebtoken";
//import adminModel from "../models/adminModel.js";
//import userModel from "../models/userModel.js";

const isAuthenticated = (req,res,next) => 
{
    if(req.session.user){
        next();
    }
    else{
        res.redirect("/login");
    }
}

export  {
    isAuthenticated
};