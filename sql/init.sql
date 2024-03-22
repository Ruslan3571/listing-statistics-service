CREATE DATABASE IF NOT EXISTS statistics;

USE statistics;

CREATE TABLE IF NOT EXISTS statistics.openingActions (
  id INT(11) NOT NULL AUTO_INCREMENT COMMENT 'ID запису',
  autoId INT(11) NOT NULL COMMENT 'ID лістингу',
  typeId TINYINT(1) NOT NULL COMMENT 'тип відкриття: 1 - лістинг, 2 - телефон',
  addDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() COMMENT 'дата здійснення дії',
  PRIMARY KEY (id),
  INDEX idx_autoId (autoId),
  INDEX idx_autoId_typeId (autoId, typeId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT 'дії відкриття лістингів, телефонів тощо' COLLATE=utf8mb3_general_ci;

CREATE USER 'statistics-service'@'%' IDENTIFIED BY 'strong@#$pass';
GRANT ALL PRIVILEGES ON statistics.* TO 'statistics-service'@'%';
FLUSH PRIVILEGES;
