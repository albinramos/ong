import usersHasProjectsModel from "../../models/usersHasProjectsModel.js";
import {Op} from "sequelize";


const create = async (projects_id, users_id) => {
     if (projects_id === undefined || users_id === undefined ) {
        const error = " projects_id deben ser definidos";
        console.log("error");
        return [error, null];
    }
    try {
       
        
        const model = await usersHasProjectsModel.create({
            users_id,
            projects_id
        });

        return [null, model];
    } catch (e) {
        return [e.message, null];
    }

};

export {
    create
};

export default {
    create
};