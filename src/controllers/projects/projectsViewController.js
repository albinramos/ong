import projectsController from "./projectsController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, projects] = await projectsController.getAll();
    projectsController.getAll(q);
    res.render("projects/list",{error,projects});
    //res.json(projects);
}


export default{
    getAll
};