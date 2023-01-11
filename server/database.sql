CREATE DATABASE users;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);


CREATE TABLE t_list(
    user_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('Jason', 'tonjason@gmail.com', 'Sanic1234')