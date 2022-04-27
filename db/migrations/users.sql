DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY, 
    username VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    habit_id INT
)
