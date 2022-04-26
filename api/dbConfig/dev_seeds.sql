INSERT INTO habits (habit_name, frequency, user_id)
VALUES ('Sleep', 3, 2);

INSERT INTO habits (user_id, habit_name, frequency)
VALUES
(1, 'Sleep', 3),
(2, 'Water', 2),
(3, 'Exercise', 2);
INSERT INTO users (user_name, email, password, habit_id)
VALUES
('JohnDoe', 'johndoe@gmail.com', 'jdoe', 1),
('JaneDoe', 'janedoe@gmail.com', 'jjdoe', 2),
('DummyName', 'dummy@gmail.com', 'dummy', 3);
