DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    user_id int NOT NULL
    name ENUM ('Water', 'Exercise', 'Sleep') NOT NULL,
    frequency int NOT NULL,
    frequency_count int,
);

