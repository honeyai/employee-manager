-- INSERT INTO your_table_for_departments
INSERT INTO departments(id, department_name)
VALUES (1, "Human Resources"),
(2, "Accounting"),
(3, "Customer Service"),
(4, "Marketing and Sales"),
(5, "General Management")
-- INSERT INTO your_table_for_roles
INSERT INTO role(role_title, salary, department_id)
VALUES ("Talent Manager", 45453, 1),
("Investor", 56489, 2),
("Support Specialist", 28398, 3),
("Creative Director", 658790, 4),
("HR Coordinator", 52107, 1),
("Diversity Officer", 34258, 1),
("Broker", 99646, 2),
("Appraiser", 342658, 2)
("Contact Center Representative", 45398, 3),
("Social Media Customer Care Associate", 45640, 3),
("Marketing Manager", 528790, 4),
("Product Marketing Manager", 62394, 4),
("Coordinator", 72623, 5)
("Director", 54785, 5),
-- INSERT INTO your_table_for_employees
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("Samantha", "Knoles", 4, 5),
("John", "Huln", 2),
("Rija", "Patel", 1),
("Hwasang", "Kim", 5),
("Filipe", "Garcia", 3, 5),
("Soledad", "Brillo", 3)