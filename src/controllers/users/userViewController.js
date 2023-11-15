import userController from "./userController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, users] = await userController.getAll();
    res.render("users/list",{error,users});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,user] = await userController.getById(id);
    res.render("users/show",{error,user,session:req.session});
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("users/new",{error});
}

const create = (req,res) =>{
    const {name, email, password, role, organization_name} = req.body;
    const [error,user] = userController.create(name, email, password, role, organization_name);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/users/new?error=${uriError}`)
    }
    res.redirect("/users");
}

const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,user] = await userController.getById(id);
    if(error){
        res.redirect("/users");
    }
    res.render("users/edit",{error:errorMessage,user});
}

const update = (req,res) =>{
    const id = req.params.id;
    console.log("params id",id)
    const {name, email, password, role, organization_name} = req.body;
    const [error,user] = userController.update(name, email, password, role, organization_name);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/users/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/users/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,user] = userController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/users?error=${uriError}`)
    }
    res.redirect("/users");
}

export default{
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
};