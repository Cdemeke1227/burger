-- SELECT * FROM burgers;
/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database burgers and specify it for use.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT,
burger_name 	VARCHAR(30) NOT NULL,
devoured        BOOLEAN DEFAULT false,
PRIMARY 		KEY (id)
);
