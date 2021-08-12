CREATE DATABASE datingApp;

--set extention
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age VARCHAR(30),
    gender VARCHAR(6),
    country VARCHAR(30),
    city VARCHAR(30)
);

-- table user_images
CREATE TABLE user_images(
   image_id uuid PRIMARY KEY DEFAULT
   uuid_generate_v4(),
   user_id uuid,
   url VARCHAR(255) NOT NULL
);

-- table prompts
 CREATE TABLE prompts(
   prompts_id uuid PRIMARY KEY DEFAULT
   uuid_generate_v4(),
   user_id uuid,
   prompts1 VARCHAR(255),
   prompts2 VARCHAR(255),
   Prompts3 VARCHAR(255),
   FOREIGN KEY (user_id) REFERENCES users(user_id)
 );

 -- table coaches
CREATE TABLE coaches(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_id uuid,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    birth DATE,
    gender VARCHAR(6),
    about VARCHAR(500),
    social_links VARCHAR(255),
    personal_website VARCHAR(255),
    areas VARCHAR(50),
    city VARCHAR(30),
    country VARCHAR(30),
    speciaty text[]
);
 
-- table coaches_images
CREATE TABLE coach_images(
   image_id uuid PRIMARY KEY DEFAULT
   uuid_generate_v4(),
   coach_id uuid,
   url VARCHAR(255) NOT NULL
);

 --insert fake users

 INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly123@gmail.com')

 --insert fake users

 INSERT INTO todoItems (user_id, description) values ('cb56588b-7976-412e-b4c8-68fadd51b9f3', 'hello world')

