
import bcrypt from "bcrypt";
import userModel from "../../models/userModel.js";

const login = async(req,res) => {
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({where:{email:email}});
        if(!user){
            throw new Error("credenciales incorrectas");
        }
        const hash = user.password;

        if(await bcrypt.compare(password,hash)){
            req.session.user_id = user.id
            req.session.user_role = user.role;
        }    
    }
    catch(e){
        const errorUri = encodeURIComponent("credenciales incorrectas");
        return res.redirect("/login?error="+errorUri);
    }
    
    res.redirect("/projects");
}

const loginForm = (req,res) => {
    const errorMessage = req.query.error
    res.render("auth/login",{error:errorMessage});
}

const register = async(req,res) => {
    const {name,email,password,role,passwordConfirm} = req.body;
    if(!name || !email || !password || !role || !passwordConfirm){
        const errorUri = encodeURIComponent("Todos los campos son obligatorios");
        return res.redirect("/register?error=" + errorUri);
    }
    if(role === "owner" && organization_name === null){
        const errorUri = encodeURIComponent("Organization name is required");
        return res.redirect("/register?error=" + errorUri);
    }

    if(password !== passwordConfirm){
        const errorUri = encodeURIComponent("Las contraseñas no coinciden");
        return res.redirect("/register?error=" + errorUri);
    }

    try{
        const existingUser = await userModel.findOne({
            where:{
                email:email
            }
        });

        if(existingUser){
            console.log("oldUser:",existingUser);
            const errorUri = encodeURIComponent("El usuario ya existe");
            return res.redirect("/register?error=" + errorUri);
        }
        const hash = await bcrypt.hash(password,10);
        console.log(hash);
        const newUser = await userModel.create({
            name:name,
            email:email,
            password:hash,
            role:role,
            organization_name:organization_name
        });
        req.session.user = newUser.id;
        req.session.role = newUser.role;
        res.redirect("/login");
    }
    catch(e){
        const errorUri= encodeURIComponent(e.message);
        return res.redirect("/register?error=" + errorUri);
    }    
}

const registerForm = (req,res) => {
    const errorMessage = req.query.error;
    res.render("auth/register", {error:errorMessage});
}

const logout = (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
}

export default{
    login,
    loginForm,
    logout,
    register,
    registerForm,
}

