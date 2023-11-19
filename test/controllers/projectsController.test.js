import { createProject } from '../../src/controllers/projects/projectsController.js';
import db from "../../src/config/sequelize.js";
import projectModel from '../../src/models/projectModel.js';

describe('Test de projectsController', () => {
  let projectId = 0;

  beforeAll(async () => {
      await db;
  });

  test('Create new project if you are an organization', async () => {
    const name = 'TestCreate';
    const description = 'TestCreate';
    const start_date = new Date();
    const end_date = new Date();
    const users_id = 1;

    const [error, project] = await createProject(name, description, start_date, end_date, users_id);

    console.log(project);
    projectId = project._id;

    expect(error).toBeNull();
    expect(project).not.toBeNull();
    expect(project._id).not.toBeNull();
    expect(project.name).toEqual(name);
    expect(project.description).toEqual(description);
    expect(project.start_date).toEqual(start_date);
    expect(project.end_date).toEqual(end_date);
  });
});