-- This file will contain the code that will be used in SequalTabs

DROP TABLE IF EXISTS posts; -- DROP TABLE allows you to delete a table from the database. By specifying "IF" the code can run without causing an error if there is indeed no table to drop.
DROP TABLE IF EXISTS users;
-- the order of the above code does matter! Because the posts table references the users table, it would give an error if it was in any other order

create table users ( --creates a new table in database
    id serial primary key,
    email varchar(100),
    hash varchar(250) 
);

create table if not exists posts( 
    id serial primary key,
    users_id int references users(id),
    content varchar(250),
    created_at date
);