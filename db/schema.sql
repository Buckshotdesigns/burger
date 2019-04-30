
USE burgers_DB;
DROP TABLE if EXISTS burger;
CREATE TABLE burger
(
id Integer AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT false,
PRIMARY KEY (id)
);