import projectsController from "./projectsController.js";

 const getAllProjects = async (req,res) =>{
    //console.log(req.session);
    const errorMessage = req.query.error;
    // Obtener el parámetro de búsqueda de la consulta
    const q = req.query.q;
    const [error, projects] = await projectsController.getAllProjects();
    projectsController.getAllProjects();
    // Verificar el rol del usuario y establecer variables booleanas
    const isUser = req.session.user.role === 'user' ? true : false
    const isOwner = req.session.user.role === 'owner' ? true : false
    // Renderizar la página de la lista de proyectos con la información obtenida
    res.render("projects/list", { error, projects, userId: req.session.user.id, isUser: isUser, isOwner: isOwner });
}

const createForm = (req,res)=>{
    const error = req.query.error;
    const isUser = req.session.user.role === 'user' ? true : false
    const isOwner = req.session.user.role === 'owner' ? true : false
    res.render("projects/create",{error, userId: req.session.user.id, isUser: isUser, isOwner: isOwner });
}

const createProject = async (req, res) => {
    const { name, description, start_date, end_date } = req.body;
    console.log("Request Body:", req.body);
    // Cambia de req.session.users_id a req.session.user.id
    const users_id = req.session.user.id;
    //console.log("Request:", req.session);
    const [error, project] = await projectsController.createProject(name, description, start_date, end_date, users_id);
    //console.log("Error:", error);
    //console.log("Projects:", project);
    if (error) {
        const uriError = encodeURIComponent(error);
        console.log("Redirecting with error:", error);
        return res.redirect(`/projects/congratulations?error=${uriError}`);
    }
    res.redirect("/projects/congratulations");
};

const congratulations = (req, res)=>{
    const error = req.query.error;
    const isUser = req.session.user.role === 'user' ? true : false
    const isOwner = req.session.user.role === 'owner' ? true : false
    res.render("projects/congratulations", { error, userId: req.session.user.id, isUser: isUser, isOwner: isOwner });
}


// Exportar todas las funciones como un objeto

export default{
    getAllProjects,
    createProject,
    createForm,
    congratulations
};