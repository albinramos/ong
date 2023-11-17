import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const UsersHasProjectsModel = sequelize.define('users_projects', {
  users_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  projects_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

export default UsersHasProjectsModel;