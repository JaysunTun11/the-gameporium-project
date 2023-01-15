CREATE DATABASE users;


-- run this command before creating table with uuid 
--create extension if not exists "uuid-ossp";

--copy paste this into console
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--after do "    select * from users;   " in postgres console to see if your database exists

--then submit a user on the register page to see if a console

-- the do "    select * from users;   " to see if your database has ur entry

--USEFUL LINKS 
-- skip to 22 to see steps https://www.youtube.com/watch?v=7UQBMb8ZpuE&t=1520s&ab_channel=TheStoicProgrammers
-- Failed authentication https://stackoverflow.com/questions/55038942/fatal-password-authentication-failed-for-user-postgres-postgresql-11-with-pg

INSERT INTO users (user_name, user_email, user_password) VALUES ('Jason', 'tonjason@gmail.com', 'Sanic1234')
