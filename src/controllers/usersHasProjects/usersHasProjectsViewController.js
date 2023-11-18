import usersHasProjectsController from "./usersHasProjectsController.js";

const createUserHasProjectForm = (req,res)=>{
    const error = req.query.error;
    res.render("users_has_projects/create",{error});
}

const createUserHasProject = async (req, res) => {
try {
        const { projects_id, users_id } = req.body;
        const [error, model] = await usersHasProjectsController.create(projects_id, users_id);
        
        if (error) {
            console.log(error,model);

            const uriError = encodeURIComponent(error);
            return res.redirect(`//new?error=${uriError}`);
        }
        res.json(model);
    } catch (e) {
        console.error(e);
        res.status(500).send("Error interno del servidor");
    }
};


export default{
    createUserHasProject,
    createUserHasProjectForm
};