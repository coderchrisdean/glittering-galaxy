DROP DATABASE IF EXISTS tech_db;
USE tech_db;

-- CREATE TABLE users (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   username VARCHAR(30) NOT NULL UNIQUE,
--   email VARCHAR(100) NOT NULL UNIQUE,
--   password VARCHAR(60) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- CREATE TABLE posts (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   title VARCHAR(100) NOT NULL,
--   content TEXT NOT NULL,
--   user_id INT NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES users (id)
-- );
