INSERT INTO habits (habit_name, frequency, user_id)
VALUES ('Sleep', 3, 2);

INSERT INTO habits (user_id, habit_name, frequency)
VALUES
(1, 'Sleep', 3),
(2, 'Water', 2),
(3, 'Exercise', 2);
INSERT INTO users (username, email, password, habit_id)
VALUES
('JohnDoe', 'johndoe@gmail.com', '$2y$10$nrcLfGLJ2ZcwhsAu/qrUQOyoPmycazmiiJOkVATEprECVW/b1OlwC', 1),
('JaneDoe', 'janedoe@gmail.com', '$2y$10$Z17QToHQIJV8uCK3VH0pIu/MZgsZPmIUVyvXXAjMmng/w24qXcpH.', 2),
('DummyName', 'dummy@gmail.com', '$2y$10$4fMJ4nxJ8L39sho2wAcfWONlgZO9icT4m7lZ7JnCX9mDVBCzrm0wK', 3);
