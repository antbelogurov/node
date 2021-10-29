DROP TABLE IF EXISTS `user`;

 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `coin` int(3) DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES (1,'alex','Test',33,'test@ua',4,'2020-04-27 19:22:38'),(2,'ivan','Ivanov',22,'iv@ua',8,'2020-04-27 19:22:38'),(3,'petr','Petr',15,'petr@ru',12,'2020-04-27 19:22:38'),(4,'alex','Aliev',27,'al@em',56,'2020-04-27 19:22:38'),(5,'berg','Bro',46,'bg@eq',43,'2020-04-27 19:22:38');

UNLOCK TABLES;

