CREATE DATABASE Popcorn; 

create table movie(
	id int primary key auto_increment,
    title varchar(80),
    ratings decimal(2,1),
    duration int
);
INSERT INTO movie(title,ratings,duration)
VALUES
('Inception', 8.8, 148),
('Interstellar', 8.6, 169),
('The Dark Knight', 9.0, 152),
('Pulp Fiction', 8.9, 154),
('The Matrix', 8.7, 136),
('Fight Club', 8.8, 139),
('Forrest Gump', 8.8, 142),
('The Shawshank Redemption', 9.3, 144),
('The Godfather', 9.2, 175),
('The Lord of the Rings: The Return of the King', 9.0, 201),
('The Lord of the Rings: The Fellowship of the Ring', 8.8, 178),
('The Lord of the Rings: The Two Towers', 8.7, 179),
('Avengers: Endgame', 8.4, 181),
('Spider-Man: No Way Home', 8.3, 148),
('Joker', 8.4, 122),
('Parasite', 8.6, 132),
('The Lion King', 8.5, 88),
('Gladiator', 8.5, 155),
('Titanic', 7.8, 195),
('The Social Network', 7.7, 120);

SELECT * FROM movie;
drop table movie;

create table popcorn_users(
	username varchar(80),
    userpassword varchar(90)
);
insert into popcorn_users (username, userpassword) values("asd","asd");
