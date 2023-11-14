import projectsController from "./projectsController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, projects] = await projectsController.getAll(q);
    res.render("projects/list",{error,projects});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,project] = await projectsController.getById(id);
    res.render("projects/show",{error,project,session:req.session});
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("projects/new",{error});
}

const create = (req,res) =>{
    const {name, description, initial_date, end_date} = req.body;
    const [error,user] = projectsControllerController.create(name, description, initial_date, end_date);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/projects/new?error=${uriError}`)
    }
    res.redirect("/projects");
}

const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,user] = await userController.getById(id);
    if(error){
        res.redirect("/projects");
    }
    res.render("projects/edit",{error:errorMessage,project});
}

const update = (req,res) =>{
    const id = req.params.id;
    console.log("params id",id)
    const {name, description, initial_date, end_date} = req.body;
    const [error,project] = projectsController.update(name, description, initial_date, end_date);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/projects/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/projects/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,user] = projectsController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/projects?error=${uriError}`)
    }
    res.redirect("/projects");
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