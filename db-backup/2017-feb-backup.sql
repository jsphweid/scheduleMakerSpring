-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: scheduleMakerSpring
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authorities`
--

DROP TABLE IF EXISTS `authorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authorities` (
  `username` varchar(50) NOT NULL,
  `authority` varchar(50) NOT NULL,
  KEY `fk_authorities_users` (`username`),
  CONSTRAINT `fk_authorities_users` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authorities`
--

LOCK TABLES `authorities` WRITE;
/*!40000 ALTER TABLE `authorities` DISABLE KEYS */;
INSERT INTO `authorities` VALUES ('joseph','ROLE_ADMIN'),('joseph','ROLE_USER'),('clayton','ROLE_ADMIN'),('clayton','ROLE_USER'),('demo','ROLE_ADMIN'),('demo','ROLE_USER');
/*!40000 ALTER TABLE `authorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dayPrediction`
--

DROP TABLE IF EXISTS `dayPrediction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dayPrediction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `belongsTo` varchar(255) NOT NULL,
  `hour00` int(11) NOT NULL,
  `hour01` int(11) NOT NULL,
  `hour02` int(11) NOT NULL,
  `hour03` int(11) NOT NULL,
  `hour04` int(11) NOT NULL,
  `hour05` int(11) NOT NULL,
  `hour06` int(11) NOT NULL,
  `hour07` int(11) NOT NULL,
  `hour08` int(11) NOT NULL,
  `hour09` int(11) NOT NULL,
  `hour10` int(11) NOT NULL,
  `hour11` int(11) NOT NULL,
  `hour12` int(11) NOT NULL,
  `hour13` int(11) NOT NULL,
  `hour14` int(11) NOT NULL,
  `hour15` int(11) NOT NULL,
  `hour16` int(11) NOT NULL,
  `hour17` int(11) NOT NULL,
  `hour18` int(11) NOT NULL,
  `hour19` int(11) NOT NULL,
  `hour20` int(11) NOT NULL,
  `hour21` int(11) NOT NULL,
  `hour22` int(11) NOT NULL,
  `hour23` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dayPrediction`
--

LOCK TABLES `dayPrediction` WRITE;
/*!40000 ALTER TABLE `dayPrediction` DISABLE KEYS */;
INSERT INTO `dayPrediction` VALUES (1,'joseph',0,0,0,0,0,104,129,156,123,123,113,106,119,149,162,160,136,110,56,30,12,12,0,0,'mon-thu'),(2,'joseph',0,0,0,0,0,33,68,148,249,230,156,155,143,277,298,297,290,278,215,162,122,104,75,50,'Winter Friday'),(3,'demo',0,0,0,0,0,21,37,109,151,113,88,83,83,113,139,175,143,100,63,58,41,37,0,0,'mon-thu'),(4,'demo',0,0,0,0,34,46,112,214,230,202,164,132,104,109,240,266,221,167,132,105,64,44,0,0,'fri');
/*!40000 ALTER TABLE `dayPrediction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `belongsTo` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `hourlyWage` float NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `maxHours` float NOT NULL,
  `minHours` float NOT NULL,
  `score` float NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (3,'clayton','Teddy',6,'Roosevelt',29,4,10),(4,'joseph','Gerhardt',25,'Gage',20,10,30),(5,'joseph','Saskia',20,'Heinrich',40,0,30),(6,'joseph','Arabella',20,'Welter',40,0,30),(7,'joseph','Alphonso',13,'Sokolsky',40,0,29),(8,'joseph','Moss',13,'Grosse',40,0,27),(9,'joseph','Jerrold',13,'Hudnall',40,0,27),(10,'joseph','Oscar',13,'Rowbottom',40,0,27),(11,'joseph','Mathias',13,'Reis',40,0,25),(12,'joseph','Scot',13,'Horn',40,0,25),(13,'joseph','Chester',13,'Ewart',40,0,25),(14,'joseph','Ezekiel',13,'Webster',40,0,23),(15,'joseph','Silvester',10,'Stein',40,0,26),(16,'joseph','Bret',9.5,'Schreier',40,0,25),(17,'joseph','Ward',10,'Blumstein',10,0,25),(18,'joseph','Alexis',9,'Messerli',40,0,23),(19,'joseph','Julie',8,'Kunkel',40,0,17),(20,'joseph','Marcus',8.5,'Roydon',40,0,22),(21,'joseph','Tzila',9,'Bates',40,0,23),(22,'joseph','Margareta',9,'Hurst',40,0,21),(23,'joseph','Clive',8.5,'Bowman',40,0,21),(24,'joseph','Linus',9,'Dittmar',40,0,25),(25,'joseph','Gerold',8.5,'Adler',40,0,17),(26,'joseph','Kelley',8.5,'Cartwright',40,0,18),(27,'joseph','Therese',8.5,'Jeffries',40,0,22),(28,'joseph','Tabitha',8,'Pierce',40,0,18),(30,'joseph','Kerri',8,'Ericson',40,0,20),(31,'joseph','Rachel',8,'Devine',40,0,20),(32,'joseph','Brittany',8,'Horn',40,0,18),(33,'joseph','Shmuel',8,'Prescott',40,0,18),(34,'joseph','Kristine',8,'Turner',40,0,17),(35,'joseph','Yisra\'el',8,'Sauvage',40,0,20),(36,'joseph','Patience',8,'Mandelbaum',40,0,17),(37,'joseph','Vale',8,'Trent',40,0,20),(38,'joseph','Jeffrey',8,'House',40,0,15),(39,'joseph','Lital',8,'Rosenfeld',40,0,18),(40,'joseph','Ronda',7.5,'Kappel',40,0,15),(41,'joseph','Rex',8,'Oberst',40,0,20),(44,'joseph','Adi',7.5,'Rose',40,0,12),(45,'demo','Gerhardt',25,'Gage',40,0,30),(46,'demo','Saskia',20,'Heinrich',40,0,30),(47,'demo','Arabella',20,'Welter',40,0,30),(48,'demo','Alphonso',15,'Sokolsky',40,0,29),(49,'demo','Moss',13,'Grosse',40,0,27),(50,'demo','Jerrold',13,'Hudnall',40,0,27),(51,'demo','Oscar',13,'Rowbottom',40,0,27),(52,'demo','Mathias',13,'Reis',40,0,26),(53,'demo','Scot',13,'Horn',40,0,24),(54,'demo','Chester',13,'Ewart',40,0,24),(55,'demo','Ezekiel',13,'Webster',40,0,24),(56,'demo','Silvester',11,'Stein',40,0,22),(57,'demo','Bret',11,'Schreier',40,0,22),(58,'demo','Ward',10,'Blumstein',40,0,22),(59,'demo','Alexis',10,'Messerli',40,0,22),(60,'demo','Julie',10,'Kunkel',40,0,20),(61,'demo','Marcus',9,'Roydon',40,0,20),(62,'demo','Tzila',9,'Bates',10,0,19),(63,'demo','Margareta',9,'Hurst',20,0,18),(64,'demo','Clive',9,'Bowman',20,0,18),(65,'demo','Linus',8.5,'Dittmar',40,0,18),(66,'demo','Gerold',8.5,'Adler',40,0,18),(67,'demo','Kelley',8.5,'Cartwright',40,0,18),(68,'demo','Therese',8.5,'Jeffries',40,0,17),(69,'demo','Tabitha',8,'Pierce',40,0,15),(70,'demo','Kerri',8,'Ericson',40,0,15),(71,'demo','Rachel',8,'Devine',40,0,15),(72,'demo','Brittany',7.5,'Horn',40,0,15),(73,'demo','Shmuel',7.5,'Prescott',40,0,13),(74,'demo','Kristine',7.5,'Turner',40,0,13),(75,'demo','Yisra\'el',7.5,'Sauvage',10,0,12),(76,'demo','Patience',7.5,'Mandelbaum',40,0,12),(77,'demo','Vale',7.5,'Trent',40,0,11),(78,'demo','Jeffrey',7.5,'House',40,0,11),(79,'demo','Lital',7.5,'Rosenfeld',40,0,11),(80,'demo','Ronda',7.5,'Kappel',40,0,11),(81,'demo','Rex',7.5,'Oberst',40,0,10),(82,'demo','Adi',7.5,'Rose',40,0,10);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_position`
--

DROP TABLE IF EXISTS `employee_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee_position` (
  `employee_id` int(11) NOT NULL,
  `position_id` int(11) NOT NULL,
  PRIMARY KEY (`employee_id`,`position_id`),
  KEY `FKD6A2879A27BE6F1` (`position_id`),
  KEY `FKD6A2879A5BB93CD1` (`employee_id`),
  CONSTRAINT `FKD6A2879A27BE6F1` FOREIGN KEY (`position_id`) REFERENCES `position` (`position_id`),
  CONSTRAINT `FKD6A2879A5BB93CD1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_position`
--

LOCK TABLES `employee_position` WRITE;
/*!40000 ALTER TABLE `employee_position` DISABLE KEYS */;
INSERT INTO `employee_position` VALUES (4,1),(5,1),(7,1),(8,1),(9,1),(10,1),(11,1),(13,1),(14,1),(15,1),(16,1),(17,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(32,1),(33,1),(37,1),(3,2),(4,3),(5,3),(7,3),(8,3),(9,3),(10,3),(11,3),(12,3),(13,3),(14,3),(15,3),(16,3),(17,3),(18,3),(20,3),(21,3),(22,3),(23,3),(24,3),(25,3),(26,3),(27,3),(31,3),(37,3),(4,4),(5,4),(7,4),(8,4),(9,4),(10,4),(11,4),(12,4),(13,4),(14,4),(15,4),(16,4),(17,4),(18,4),(20,4),(21,4),(22,4),(23,4),(24,4),(25,4),(26,4),(32,4),(33,4),(34,4),(37,4);
/*!40000 ALTER TABLE `employee_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `position` (
  `position_id` int(11) NOT NULL AUTO_INCREMENT,
  `belongsTo` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`position_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES (1,'joseph','roll'),(2,'clayton','clayton thinking'),(3,'joseph','ovens'),(4,'joseph','21+');
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `belongsTo` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `weekPrediction_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`schedule_id`),
  KEY `FKD666929780B2EF91` (`weekPrediction_id`),
  CONSTRAINT `FKD666929780B2EF91` FOREIGN KEY (`weekPrediction_id`) REFERENCES `weekPrediction` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,'joseph','Shakes Current',2),(2,'clayton','clayton\'s first schedule',NULL),(3,'demo','Current',5);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift`
--

DROP TABLE IF EXISTS `shift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shift` (
  `shift_id` int(11) NOT NULL AUTO_INCREMENT,
  `belongsTo` varchar(255) NOT NULL,
  `dayId` int(11) NOT NULL,
  `endHour` int(11) NOT NULL,
  `endMinutes` int(11) NOT NULL,
  `startHour` int(11) NOT NULL,
  `startMinutes` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`shift_id`),
  KEY `FK6856C825BB93CD1` (`employee_id`),
  KEY `FK6856C82BEFF4831` (`schedule_id`),
  CONSTRAINT `FK6856C825BB93CD1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `FK6856C82BEFF4831` FOREIGN KEY (`schedule_id`) REFERENCES `schedule` (`schedule_id`)
) ENGINE=InnoDB AUTO_INCREMENT=314 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift`
--

LOCK TABLES `shift` WRITE;
/*!40000 ALTER TABLE `shift` DISABLE KEYS */;
INSERT INTO `shift` VALUES (4,'clayton',0,0,0,4,15,3,2),(5,'clayton',0,17,0,9,0,3,2),(9,'joseph',2,13,0,10,0,18,1),(10,'joseph',4,16,15,9,0,18,1),(11,'joseph',5,0,0,16,15,18,1),(12,'joseph',6,0,0,16,15,18,1),(13,'joseph',1,12,30,9,0,6,1),(14,'joseph',3,19,30,17,0,6,1),(15,'joseph',4,14,0,11,0,6,1),(16,'joseph',5,20,30,16,15,6,1),(17,'joseph',1,17,0,9,0,16,1),(18,'joseph',3,17,0,9,0,16,1),(19,'joseph',4,20,30,16,15,16,1),(20,'joseph',5,16,15,10,0,16,1),(21,'joseph',6,16,15,9,0,16,1),(22,'joseph',0,17,0,9,0,32,1),(23,'joseph',2,17,0,9,0,32,1),(24,'joseph',3,17,0,9,0,32,1),(25,'joseph',4,16,15,9,0,32,1),(26,'joseph',5,16,15,9,0,32,1),(27,'joseph',1,22,0,17,0,13,1),(28,'joseph',2,22,0,17,0,13,1),(29,'joseph',3,22,0,17,0,13,1),(30,'joseph',5,21,0,16,15,13,1),(31,'joseph',0,0,0,17,0,23,1),(32,'joseph',2,17,0,10,0,23,1),(33,'joseph',5,16,15,10,0,23,1),(34,'joseph',6,16,15,10,0,23,1),(35,'joseph',4,23,0,16,15,14,1),(36,'joseph',4,13,0,11,30,4,1),(37,'joseph',4,19,0,17,0,4,1),(41,'joseph',5,13,0,11,30,4,1),(43,'joseph',5,19,0,17,0,4,1),(49,'joseph',1,17,0,10,0,25,1),(50,'joseph',3,13,0,10,0,25,1),(51,'joseph',5,16,15,10,0,25,1),(52,'joseph',6,16,15,10,0,25,1),(53,'joseph',3,0,30,17,0,38,1),(54,'joseph',5,1,0,16,15,38,1),(55,'joseph',3,20,0,17,0,9,1),(56,'joseph',4,16,15,11,0,9,1),(58,'joseph',4,21,0,16,15,9,1),(60,'joseph',6,19,0,16,15,9,1),(61,'joseph',0,13,0,10,0,19,1),(62,'joseph',2,13,0,10,0,19,1),(63,'joseph',4,16,15,12,0,19,1),(64,'joseph',0,17,0,9,0,26,1),(65,'joseph',1,17,0,9,0,26,1),(66,'joseph',3,17,0,9,0,26,1),(67,'joseph',4,16,15,9,0,26,1),(68,'joseph',6,16,15,10,45,26,1),(69,'joseph',4,1,0,16,15,30,1),(70,'joseph',6,0,0,16,15,30,1),(71,'joseph',0,17,0,10,0,34,1),(72,'joseph',2,17,0,10,0,34,1),(73,'joseph',5,16,15,9,0,34,1),(74,'joseph',6,16,15,10,0,34,1),(75,'joseph',0,0,0,17,0,24,1),(76,'joseph',2,0,0,17,0,24,1),(77,'joseph',4,1,0,16,15,24,1),(78,'joseph',5,1,0,16,15,24,1),(79,'joseph',6,0,0,16,15,24,1),(80,'joseph',4,1,0,16,15,39,1),(81,'joseph',0,23,0,17,0,20,1),(82,'joseph',1,23,0,17,0,20,1),(83,'joseph',2,23,0,17,0,20,1),(84,'joseph',3,23,0,17,0,20,1),(85,'joseph',4,1,0,16,15,20,1),(86,'joseph',1,17,0,10,0,22,1),(87,'joseph',2,17,0,10,0,22,1),(88,'joseph',3,17,0,10,0,22,1),(89,'joseph',4,16,15,10,0,22,1),(90,'joseph',5,1,0,16,15,22,1),(91,'joseph',0,17,0,10,0,11,1),(92,'joseph',2,13,0,9,0,11,1),(93,'joseph',5,16,15,11,0,11,1),(94,'joseph',0,19,0,16,15,8,1),(95,'joseph',1,19,0,16,15,8,1),(96,'joseph',1,20,0,16,0,10,1),(97,'joseph',6,20,0,16,15,10,1),(98,'joseph',3,17,0,10,0,10,1),(99,'joseph',3,23,0,16,15,36,1),(100,'joseph',4,0,0,17,0,36,1),(101,'joseph',0,0,0,17,0,31,1),(102,'joseph',4,1,0,16,15,31,1),(103,'joseph',6,16,15,10,0,31,1),(104,'joseph',0,0,0,17,0,41,1),(105,'joseph',2,0,0,17,0,41,1),(106,'joseph',4,1,0,16,15,41,1),(107,'joseph',6,0,0,16,15,41,1),(108,'joseph',0,0,0,17,0,40,1),(109,'joseph',1,0,0,17,0,40,1),(110,'joseph',5,1,0,16,15,40,1),(111,'joseph',4,20,0,16,15,5,1),(112,'joseph',2,20,0,16,15,12,1),(113,'joseph',3,20,0,16,0,12,1),(114,'joseph',1,17,0,10,0,33,1),(115,'joseph',6,16,15,9,0,12,1),(116,'joseph',1,0,0,17,0,15,1),(117,'joseph',2,0,0,17,0,15,1),(118,'joseph',3,0,0,17,0,15,1),(119,'joseph',5,1,0,16,15,15,1),(120,'joseph',5,1,0,16,15,28,1),(121,'joseph',6,0,0,16,15,28,1),(122,'joseph',0,17,0,10,45,27,1),(123,'joseph',2,17,0,11,0,27,1),(124,'joseph',4,16,15,11,0,27,1),(125,'joseph',5,16,15,11,0,27,1),(126,'joseph',5,20,0,16,15,27,1),(127,'joseph',0,17,0,10,0,21,1),(128,'joseph',1,17,0,10,0,21,1),(129,'joseph',3,17,0,10,0,21,1),(130,'joseph',4,16,15,10,0,21,1),(131,'joseph',1,0,0,17,0,37,1),(132,'joseph',5,1,0,16,15,37,1),(133,'joseph',6,0,0,16,15,37,1),(134,'joseph',5,20,0,16,15,17,1),(135,'joseph',0,0,0,17,0,35,1),(136,'joseph',2,0,0,17,0,35,1),(137,'joseph',4,1,0,16,15,35,1),(160,'joseph',2,0,0,17,0,44,1),(161,'joseph',3,0,0,17,0,44,1),(162,'joseph',4,1,0,16,15,44,1),(246,'joseph',1,20,0,10,0,17,1),(248,'demo',2,13,0,10,0,59,3),(249,'demo',4,16,15,9,0,59,3),(250,'demo',5,0,0,16,15,59,3),(251,'demo',6,0,0,16,15,59,3),(252,'demo',1,12,30,9,0,47,3),(253,'demo',3,19,30,17,0,47,3),(254,'demo',4,14,0,11,0,47,3),(255,'demo',5,20,30,16,15,47,3),(256,'demo',1,17,0,9,0,57,3),(257,'demo',3,17,0,9,0,57,3),(258,'demo',4,20,30,16,15,57,3),(259,'demo',5,16,15,10,0,57,3),(260,'demo',6,16,15,9,0,57,3),(261,'demo',0,17,0,9,0,73,3),(262,'demo',2,17,0,9,0,73,3),(263,'demo',3,17,0,9,0,73,3),(264,'demo',4,16,15,9,0,73,3),(265,'demo',5,16,15,9,0,73,3),(266,'demo',1,22,0,17,0,54,3),(267,'demo',2,22,0,17,0,54,3),(268,'demo',3,22,0,17,0,54,3),(269,'demo',5,21,0,16,15,54,3),(270,'demo',0,0,0,17,0,64,3),(271,'demo',2,17,0,10,0,64,3),(272,'demo',5,16,15,10,0,64,3),(273,'demo',6,16,15,10,0,64,3),(274,'demo',4,23,0,16,15,55,3),(275,'demo',4,13,0,11,30,45,3),(276,'demo',4,19,0,17,0,45,3),(277,'demo',5,13,0,11,30,45,3),(278,'demo',5,19,0,17,0,45,3),(279,'demo',1,17,0,10,0,67,3),(280,'demo',3,13,0,10,0,67,3),(281,'demo',5,16,15,10,0,67,3),(282,'demo',6,16,15,10,0,67,3),(283,'demo',3,0,30,17,0,79,3),(284,'demo',5,1,0,16,15,79,3),(285,'demo',3,20,0,17,0,50,3),(286,'demo',4,16,15,11,0,50,3),(287,'demo',4,21,0,16,15,50,3),(288,'demo',6,19,0,16,15,50,3),(289,'demo',0,13,0,10,0,60,3),(290,'demo',2,13,0,10,0,60,3),(291,'demo',4,16,15,12,0,60,3),(292,'demo',0,17,0,9,0,67,3),(293,'demo',1,17,0,9,0,67,3),(294,'demo',3,17,0,9,0,67,3),(295,'demo',4,16,15,9,0,67,3),(296,'demo',6,16,15,10,45,67,3),(297,'demo',4,1,0,16,15,71,3),(298,'demo',6,0,0,16,15,71,3),(299,'demo',0,17,0,10,0,75,3),(300,'demo',2,17,0,10,0,75,3),(301,'demo',5,16,15,9,0,75,3),(302,'demo',6,16,15,10,0,75,3),(303,'demo',0,0,0,17,0,65,3),(304,'demo',2,0,0,17,0,65,3),(305,'demo',4,1,0,16,15,65,3),(306,'demo',5,1,0,16,15,65,3),(307,'demo',6,0,0,16,15,65,3),(308,'demo',4,1,0,16,15,80,3),(309,'demo',0,23,0,17,0,61,3),(310,'demo',1,23,0,17,0,61,3),(311,'demo',2,23,0,17,0,61,3),(312,'demo',3,23,0,17,0,61,3),(313,'demo',4,1,0,16,15,61,3);
/*!40000 ALTER TABLE `shift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('clayton','$2a$10$qxQPFPWMcaSlKAyjGqeBde2ksy3RXPi7abBLhn9dRwJshjIf22QFC',1),('demo','$2a$10$qxQPFPWMcaSlKAyjGqeBde2ksy3RXPi7abBLhn9dRwJshjIf22QFC',1),('joseph','$2a$10$qxQPFPWMcaSlKAyjGqeBde2ksy3RXPi7abBLhn9dRwJshjIf22QFC',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekPrediction`
--

DROP TABLE IF EXISTS `weekPrediction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weekPrediction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `belongsTo` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `day0Id` int(11) DEFAULT NULL,
  `day1Id` int(11) DEFAULT NULL,
  `day2Id` int(11) DEFAULT NULL,
  `day3Id` int(11) DEFAULT NULL,
  `day4Id` int(11) DEFAULT NULL,
  `day5Id` int(11) DEFAULT NULL,
  `day6Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK188023A3678FA03` (`day0Id`),
  KEY `FK188023A3678FDC4` (`day1Id`),
  KEY `FK188023A36790185` (`day2Id`),
  KEY `FK188023A36790546` (`day3Id`),
  KEY `FK188023A36790907` (`day4Id`),
  KEY `FK188023A36790CC8` (`day5Id`),
  KEY `FK188023A36791089` (`day6Id`),
  CONSTRAINT `FK188023A3678FA03` FOREIGN KEY (`day0Id`) REFERENCES `dayPrediction` (`id`),
  CONSTRAINT `FK188023A3678FDC4` FOREIGN KEY (`day1Id`) REFERENCES `dayPrediction` (`id`),
  CONSTRAINT `FK188023A36790185` FOREIGN KEY (`day2Id`) REFERENCES `dayPrediction` (`id`),
  CONSTRAINT `FK188023A36790546` FOREIGN KEY (`day3Id`) REFERENCES `dayPrediction` (`id`),
  CONSTRAINT `FK188023A36790907` FOREIGN KEY (`day4Id`) REFERENCES `dayPrediction` (`id`),
  CONSTRAINT `FK188023A36790CC8` FOREIGN KEY (`day5Id`) REFERENCES `dayPrediction` (`id`),
  CONSTRAINT `FK188023A36791089` FOREIGN KEY (`day6Id`) REFERENCES `dayPrediction` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekPrediction`
--

LOCK TABLES `weekPrediction` WRITE;
/*!40000 ALTER TABLE `weekPrediction` DISABLE KEYS */;
INSERT INTO `weekPrediction` VALUES (1,'joseph','Fall 2016',1,1,2,1,2,1,1),(2,'joseph','Winter 2017',1,1,1,1,2,2,1),(5,'demo','Winter 2017',3,3,3,3,4,4,3);
/*!40000 ALTER TABLE `weekPrediction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'scheduleMakerSpring'
--

--
-- Dumping routines for database 'scheduleMakerSpring'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-09 15:07:13
