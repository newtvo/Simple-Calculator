CREATE USER 'username1'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username1'@'localhost' WITH GRANT OPTION;
CREATE USER 'username1'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username1'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
