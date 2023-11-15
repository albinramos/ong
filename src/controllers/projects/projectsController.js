import projectModel from "../../models/projectModel.js";
import {Op} from "sequelize";


const getAll = async() => {
    try{
        const projects = await projectModel.findAll();
        console.log("projects:", projects);
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
const create = async (name, description, start_date, end_date) => {
    if (name === undefined || description === undefined || start_date === undefined || end_date === undefined) {
        const error = "name, description, start_date, end_date deben ser definidos";
        return [error, null];
    }
    try{
        const project = await userModel.create({name, description, start_date, end_date});
        return [null,project];
    }
    catch(e){
        return [e.message, null];
    }
}

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
    getAll,
    getById,
    create,
    update,
    remove
};



export default {
    getAll,
    getById,
    create,
    update,
    remove
};