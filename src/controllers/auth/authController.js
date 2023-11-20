
import bcrypt from "bcrypt";
import userModel from "../../models/userModel.js";

const login = async(req,res) => {
    // Obtener datos del body de la solicitud (email y contraseña)
    const {email,password} = req.body;
    try{
        // Buscar al usuario en la base de datos por su dirección de correo electrónico
        const user = await userModel.findOne({where:{email:email}});
         // Verificar si el usuario existe
        if(!user){
            throw new Error("credenciales incorrectas");
        }
        // Obtener el hash de la contraseña almacenada en la base de datos
        const hash = user.password;

        // Comparar la contraseña proporcionada con el hash almacenado
        if(await bcrypt.compare(password,hash)){
            req.session.user = {id:user.id, role:user.role}
        } else {
            throw new Error("Contraseña errónea")
        }   
    }
    catch(e){
        // Redirigir a la página de inicio de sesión con un mensaje de error en caso de problemas
        const errorUri = encodeURIComponent("credenciales incorrectas");
        return res.redirect("/login?error="+errorUri);
    }
    
    res.redirect("/projects/list");
}

// Función para renderizar el formulario de inicio de sesión
const loginForm = (req,res) => {
    const errorMessage = req.query.error;
    res.render("auth/login",{error:errorMessage, userId: null, isUser: false, isOwner: false });
}

const register = async(req,res) => {
    const {name,email,password,role,organization_name,passwordConfirm} = req.body;
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
        // Verificar si el usuario ya existe en la base de datos
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
        // Hashear la contraseña antes de almacenarla en la base de datos
        const hash = await bcrypt.hash(password,10);
        console.log(hash);
        // Crear un nuevo usuario en la base de datos
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
    // Función para renderizar el formulario de registro
    const registerForm = (req,res) => {
    const errorMessage = req.query.error;
    res.render("auth/register", {error:errorMessage, userId: null, isUser: false, isOwner: false});
}

    const logout = (req,res)=>{
    // Destruir la sesión del usuario al cerrar sesión
    req.session.destroy();
    res.redirect("/");
}

export default{
    login,
    loginForm,
    logout,
    register,
    registerForm,
}

