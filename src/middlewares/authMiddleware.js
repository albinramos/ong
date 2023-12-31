import jwt from "jsonwebtoken";

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