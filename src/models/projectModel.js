import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const projectModel = sequelize.define("projects",
{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    name : {
        type: DataTypes.STRING,
        allowNull:false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false,

    },
    start_date: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull:false,
    }
})

export default projectModel;