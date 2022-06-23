DROP DATABASE IF EXISTS employees;
CREATE DATABASE employess;

USE your_database;

CREATE TABLE department (
  -- id set to ainteger, automatic increment, and primary key
  -- name set to varchar, max size 30, not null
);

CREATE TABLE role (
  -- id set to integer, automatic increment, and primary key
  -- title set to varchar, max size 30, and not null
  -- salary set to decimal and not null
  -- department id set to integer and not null
  -- foreign key department id referencing department table on id with on delete constraint

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
