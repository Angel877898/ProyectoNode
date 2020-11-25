-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2020 at 04:18 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empleados`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `telefono` varchar(13) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `contrasena` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `nombre`, `apellidos`, `telefono`, `correo`, `direccion`, `contrasena`) VALUES
(1, 'Manuel', 'Castillo', '4421759865', 'manuel@mail.com', 'Ignacio Zaragoza, Col. Rancho Largo', '123456'),
(2, 'Angel', 'Hernandez', '4426581548', 'angel@mail.com', 'Ignacio Zaragoza, Col. Rancho Largo', '123456'),
(3, 'Moisés', 'Pérez', '4429995564', 'moises@mail.com', 'Ignacio Zaragoza, Col. Rancho Largo', '123456');


INSERT INTO `empleados` (`id`, `nombre`, `apellidos`, `telefono`, `correo`, `direccion`) VALUES
(1, '\r\njuan', 'Perez', '4433221100', 'juan@emp.com', 'Ocampo 1'),
(2, 'Pedro', 'Sanchez', '3344221100', 'pedro@emp.com', 'lazaro 1'),
(3, 'Marco', 'Rois', '6655443322', 'marco@emp.com', 'Alemania 3'),
(4, 'Cristian', 'Rolando', '7777777777', 'cr7@emp.com', 'Portugal 7'),
(5, 'Lio', 'Messi', '1010101010', 'lio@emp.com', 'pechofrio 10'),
(6, 'Lukita', 'Modric', '1210101010', 'lm10@emp.com', 'Croacia 10'),
(7, 'Antonio', 'Kruz', '8888888888', 'toni@emp.com', 'Alemania 8'),
(8, 'Manu', 'Pingacorta', '7755332266', 'manu@emp.com', 'Edomex 10'),
(9, 'Angel', 'Carano', '4455668822', 'angel@emp.com', 'Rio verde 10'),
(10, 'Sergio', 'Ramos', '4444444444', 'sergio@emp.com', 'España 4'),
(11, 'Vinicius', 'Junior', '2121212121', 'vini@emp.com', 'Brasil 21'),
(12, 'Rodrygo', 'Goes', '1212121212', 'rodry@emp.com', 'Brasil 12'),
(13, 'Paulo', 'Dybala', '2101010102', 'dyb@gmail.com', 'Argentina 10'),
(14, 'Moises', 'ElChidote', '4432111588', 'moy@emp.com', 'Michoacan 7'),
(15, 'Karim', 'Benzema', '9999999999', 'karim@emp.com', 'Francia 9'),
(16, 'Kylian', 'Mbappe', '1010101018', 'kyliam@emp.com', 'Francia 10'),
(17, 'Harry', 'Kane', '1091091091', 'harry@emp.com', 'Inglaterra 9'),
(18, 'Carlos', 'Casemiro', '1414141414', 'case@emp.com', 'Brasil 14'),
(19, 'Dani', 'Carvajal', '2222222222', 'dani@emp.com', 'España 2'),
(20, 'Tibo', 'Curtua', '1111111111', 'tibo@emp.com', 'Belgica 1');

-- --------------------------------------------------------

--
-- Table structure for table `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `telefono` varchar(13) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `direccion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellidos`, `telefono`, `correo`, `direccion`) VALUES
(1, 'Manuel', 'Castillo', '7122352271', 'jmanuel@mail.com', 'Ignacio Zaragoza');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
