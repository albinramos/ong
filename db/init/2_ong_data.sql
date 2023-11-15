USE ong;

INSERT INTO users (name, email, password, role)
VALUES
  ('John Doe', 'john.doe@example.com', 'password123', 'user'),
  ('Alice Johnson', 'alice.johnson@example.com', 'pass456', 'user'),
  ('Michael Smith', 'michael.smith@example.com', 'securePass', 'user'),
  ('Emma Davis', 'emma.davis@example.com', 'mySecret123', 'user');
  
  SELECT * FROM users;
  
  
  INSERT INTO users (name, email, password, role, organization_name)
  VALUES
  ('VolunteerHub', 'info@volunteerhub.org', 'volunteerPass1', 'VolunteerHub Inc.', 'owner'),
  ('GlobalVolunteers', 'contact@globalvolunteers.org', 'volunteerPass2', 'GlobalVolunteers Co.', 'owner'),
  ('HelpingHands', 'admin@helpinghandsfoundation.org', 'volunteerPass3', 'HelpingHands Foundation', 'owner');
  
    SELECT * FROM users;
    
    
    INSERT INTO projects (name, description, start_date, end_date)
    VALUES
  ('Doctors for Humanity', 'Providing medical care to underserved communities.', '2023-01-01', '2023-12-31'),
  ('EcoGuardians Initiative', 'Preserving the environment through community-led projects.', '2023-02-01', '2023-11-30'),
  ('HopeBuilders Foundation', 'Building homes and futures for those in need.', '2023-03-01', '2023-10-31'),
  ('Global Health Volunteers', 'Improving healthcare access in remote areas worldwide.', '2023-04-01', '2023-09-30'),
  ('CleanSeas Organization', 'Working to eliminate plastic waste from our oceans.', '2023-05-01', '2023-08-31'),
  ('Education for All', 'Empowering communities through education initiatives.', '2023-06-01', '2023-07-31'),
  ('Tech4Good Innovators', 'Utilizing technology for positive social impact.', '2023-07-01', '2023-06-30'),
  ('GreenHarbor Solutions', 'Creating sustainable solutions for urban green spaces.', '2023-08-01', '2023-06-30'),
  ('Hunger Relief Network', 'Addressing food insecurity in local communities.', '2023-09-01', '2023-05-31'),
  ('Renewable Energy Champions', 'Promoting renewable energy adoption and awareness.', '2023-10-01', '2023-05-31'),
  ('Medical Outreach Team', 'Bringing healthcare services to remote and underserved areas.', '2023-11-01', '2023-04-30'),
  ('EmpowerYouth Foundation', 'Empowering young minds through education and mentorship.', '2023-12-01', '2023-04-30');
  
  SELECT * FROM projects;
  
  INSERT INTO users_has_projects (users_id, projects_id)
  VALUES
  ('5','1'),
  ('5','3'),
  ('6','2'),
  ('6','4'),
  ('7','5'),
  ('7','6'),
  ('1','5'),
  ('2','3'),
  ('3','2'),
  ('4','7');
     
  
  
  