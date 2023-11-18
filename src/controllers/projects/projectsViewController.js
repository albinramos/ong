import projectsController from "./projectsController.js";

 const getAllProjects = async (req,res) =>{
    //console.log(req.session);
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, projects] = await projectsController.getAllProjects();
    projectsController.getAllProjects();
    const isUser = req.session.user.role === 'user' ? true : false
    const isOwner = req.session.user.role === 'owner' ? true : false
    res.render("projects/list", { error, projects, userId: req.session.user.id, isUser: isUser, isOwner: isOwner });
}

const createForm = (req,res)=>{
    const error = req.query.error;
    const isUser = req.session.user.role === 'user' ? true : false
    const isOwner = req.session.user.role === 'owner' ? true : false
    res.render("projects/create",{error, userId: req.session.user.id, isUser: isUser, isOwner: isOwner });
}

const createProject = async (req, res) => {
    try {
        const { name, description, start_date, end_date, users_id } = req.body;
        const [error, project] = await projectsController.createProject(users_id, name, description, start_date, end_date);
        
        if (error) {
            const uriError = encodeURIComponent(error);
            //console.log("holaaaaaa");
            return res.redirect(`/projects/new?error=${uriError}`);
        }
        res.redirect("projects/congratulations");

    } catch (e) {
        // Manejo de errores
        console.error(e);
        res.status(500).send("Error interno del servidorrrrrrrr");
    }
};

const congratulations = (req, res)=>{
    const error = req.query.error;
    res.render("parking/congratulations",{error:error});
}




export default{
    getAllProjects,
    createProject,
    createForm,
    congratulations
};