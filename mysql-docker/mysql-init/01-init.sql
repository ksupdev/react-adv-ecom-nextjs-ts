-- Grant privileges to access from any host
-- Replace 'myuser' and 'mypassword' with your preferred username and password
CREATE USER IF NOT EXISTS 'myuser'@'%' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'%';

-- Grant privileges to access from localhost specifically
CREATE USER IF NOT EXISTS 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'localhost';

-- Grant privileges to access from host machine (where Docker is running)
CREATE USER IF NOT EXISTS 'myuser'@'host.docker.internal' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'host.docker.internal';

-- Apply the changes
FLUSH PRIVILEGES;