DROP DATABASE IF EXISTS employees;
CREATE DATABASE employess;

USE employees;

CREATE TABLE department (
  -- id set to ainteger, automatic increment, and primary key
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
  -- name set to varchar, max size 30, not null
);

CREATE TABLE role (
  -- id set to integer, automatic increment, and primary key
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY
  -- title set to varchar, max size 30, and not null
  role_title VARCHAR(30) NOT NULL
  -- salary set to decimal and not null
  salary FLOAT NOT NULL
  -- department id set to integer and not null
  department_id INT NOT NULL
  -- foreign key department id referencing department table on id with on delete constraint
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  -- id set to integer with automatic increment and primary key constraints
  id INT
  AUTO_INCREMENT PRIMARY KEY
  -- first name set to var char, max size 30, and not null contraint
  first_name VARCHAR(30) NOT NULL
  -- last name set to var char, max size 30, and not null
  last_name VARCHAR(30) NOT NULL
  -- role id set to integer and not null
  role_id INT NOT NULL
  -- manager id set to integer
  manager_id INT
  -- foreign key on role id referencing role table on id with on delete constraint
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
  -- foreign key on manager id referencing employee table on id with on delete constraint
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
