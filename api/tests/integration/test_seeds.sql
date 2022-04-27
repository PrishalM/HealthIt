TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (user_name, email, password, habit_id) 
VALUES
('Test Author 1', 'test@one.com', 'testPassword', 1),
('Test Author 2', 'test@two.com', 'testPassword', 2);


   id serial PRIMARY KEY,
    user_id INT NOT NULL,
    habit_name habit NOT NULL,
    frequency int NOT NULL,
    frequency_count int

INSERT INTO books (user_id, habit_name, frequency, frequency_count) 
VALUES
(
    1,
    'Test Habit 1', 
    10, 
    2
),
(
    2,
    'Test Habit 2', 
    20, 
    10
),
(
   1,
    'Test Habit 3', 
    1000, 
    500
);
