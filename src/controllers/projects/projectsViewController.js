import projectsController from "./projectsController.js";

 const getAllProjects = async (req,res) =>{
    //console.log(req.session);
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, projects] = await projectsController.getAllProjects();
    projectsController.getAllProjects();
    res.render("projects/list",{error,projects});
    //res.json(projects);
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("projects/create",{error});
}

const createProject = async (req, res) => {
    try {
        const { name, description, start_date, end_date } = req.body;
        const [error, project] = await projectsController.create(name, description, start_date, end_date);
        
        if (error) {
            const uriError = encodeURIComponent(error);
            return res.redirect(`/projects/new?error=${uriError}`);
        }
        
        res.redirect("projects/create");
    } catch (e) {
        // Manejo de errores
        console.error(e);
        res.status(500).send("Error interno del servidor");
    }
};


export default{
    getAllProjects,
    createProject,
    createForm
};