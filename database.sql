CREATE DATABASE datingApp;

--set extention
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL
 );


-- table profiles
 CREATE TABLE profiles(
    user_id VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
 );


-- table user_images
 CREATE TABLE user_images(
    user_id VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
	UNIQUE(user_id)
 );


-- table todoItems
 CREATE TABLE todoItems(
    todo_id SERRIAL,
    user_id UUID,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (todo_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
 );

-- table prompts
 CREATE TABLE prompts(
    prompts_id SERIAL,
    user_id UUID,
    place VARCHAR(255) NOT NULL,
	dating VARCHAR(255) NOT NULL,
	relationship VARCHAR(255) NOT NULL,
	trait VARCHAR(255) NOT NULL,
    PRIMARY KEY (prompts_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
 );
 

 --insert fake users

 INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly123@gmail.com')

 --insert fake users

 INSERT INTO todoItems (user_id, description) values ('cb56588b-7976-412e-b4c8-68fadd51b9f3', 'hello world')

