import projectModel from "../../models/projectModel.js";
import {Op} from "sequelize";


const getAllProjects = async() => {
    try{
        const projects = await projectModel.findAll();
        //console.log("projects:", projects);
        return [null, projects];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const project = await projectModel.findByPk(id);
        return [null, project];
    }
    catch (e) {
        return [e.message, null];
    }
}
const createProject = async (name, description, start_date, end_date, users_id) => {
    if (name === undefined || description === undefined || start_date === undefined || end_date === undefined || users_id === undefined) {
        const error = "name, description, start_date, end_date, users_id deben ser definidos";
        return [error, null];
    }
    try {
        const projects = await projectModel.create({
            users_id,
            name,
            description,
            start_date,
            end_date,
        });

        return [null, projects];

    } catch (e) {
        return [e.message, null];
    }
};

const update = async(name, description, start_date, end_date) => {
    
    if(id == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (name === undefined || description === undefined || start_date === undefined || end_date === undefined) {
        const error = "name, description, start_date, end_date deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const user= await projectModel.findByPk(id);
        user.name = name;
        user.description = description;
        user.start_date = start_date;
        user.end_date = end_date;
        return [null,project];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const user = await projectModel.findByPk(id);
        if(!user){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,project];
    }
    catch (e) {
        return [e.message,null];
    }
}

export {
    getAllProjects,
    getById,
    createProject,
    update,
    remove
};



export default {
    getAllProjects,
    getById,
    createProject,
    update,
    remove
};