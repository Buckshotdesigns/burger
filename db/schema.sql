CREATE DATABASE burgers_DB;
USE burgers_DB;

CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT FALSE,
PRIMARY KEY (id)
);