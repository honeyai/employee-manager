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
  -- first name set to var char, max size 30, and not null contraint
  -- last name set to var char, max size 30, and not null
  -- role id set to integer and not null
  -- manager id set to integer
  -- foreign key on role id referencing role table on id with on delete constraint
  -- foreign key on manager id referencing employee table on id with on delete constraint

);
