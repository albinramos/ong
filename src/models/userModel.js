import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const userModel = sequelize.define("users",
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
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,

    },
    role: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull:false,
    },
    organization_name: {
        type: DataTypes.STRING,
        unique:true,
    }
})

export default userModel;