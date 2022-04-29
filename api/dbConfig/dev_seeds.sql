INSERT INTO habits (habit_name, frequency, user_id)
VALUES ('Exercise', 3, 1), ('Water', 3, 1), ('Sleep', 3, 1), ('Sleep', 3, 2), ('Exercise', 3, 2), ('Sleep', 3, 3);

INSERT INTO users (username, email, password, habit_id)
VALUES
('Diren', 'Diren@gmail.com', '$2y$10$nrcLfGLJ2ZcwhsAu/qrUQOyoPmycazmiiJOkVATEprECVW/b1OlwC', 1),
('Doreen', 'Doreen@gmail.com', '$2y$10$Z17QToHQIJV8uCK3VH0pIu/MZgsZPmIUVyvXXAjMmng/w24qXcpH.', 2),
('Prishal', 'Prishal@gmail.com', '$2y$10$4fMJ4nxJ8L39sho2wAcfWONlgZO9icT4m7lZ7JnCX9mDVBCzrm0wK', 3);
