
USE burgers_DB;
DROP TABLE if EXISTS burgers;
CREATE TABLE burgers
(
id Integer AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT false,
PRIMARY KEY (id)
);