import cochesModel from "../../models/userModel.js";
import {Op} from "sequelize";


const getAll = async(q=null) => {
    const options = {};

    if(q) {
        options.where = { name:{ [Op.like]: `%${q}%` },}
    }
    try{
        const users = await userModel.findAll(options);
        return [null, users];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const user = await userModel.findByPk(id);
        return [null, user];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (name, email, password, role, organization_name) => {
    if (name === undefined || email === undefined || password === undefined || role === undefined) {
        const error = "name, email, password y role deben ser definidos";
        return [error, null];
    }
    try{
        const coche = await userModel.create({name, email, password, role, organization_name});
        return [null,user];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(name, email, password, role, organization_name) => {
    
    if(id == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (name === undefined || email === undefined || password === undefined || role === undefined) {
        const error = "name, email, password y role deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const user= await userModel.findByPk(id);
        user.name = name;
        user.email = email;
        user.password = password;
        user.role = role;
        return [null,user];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const user = await userModel.findByPk(id);
        if(!user){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,user];
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