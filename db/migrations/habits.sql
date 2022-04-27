DROP TABLE IF EXISTS habits;

CREATE TYPE habit AS ENUM ('Water', 'Exercise', 'Sleep');

CREATE TABLE habits (
    id serial PRIMARY KEY,
    user_id INT,
    habit_name habit NOT NULL,
    frequency int NOT NULL,
    frequency_count int
);
