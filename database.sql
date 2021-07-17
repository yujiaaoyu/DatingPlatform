CREATE DATABASE datingApp;

--set extention
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
 );

 CREATE TABLE profiles(
    user_id VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
 );


 CREATE TABLE user_images(
    user_id VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
	UNIQUE(user_id)
 );
 

 --insert fake users

 INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly123@gmail.com')

