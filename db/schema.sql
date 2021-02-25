/*Creates or drops and recreates database if exists */
DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

/* Creates table for burgers */
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0
);


