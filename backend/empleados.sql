-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2020 a las 22:35:00
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contrasena` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`id`, `nombre`, `apellido`, `correo`, `contrasena`) VALUES
(1, 'Manuel', 'Castillo', 'manuel@mail.com', '123456'),
(2, 'Angel', 'Hernandez', 'angel@mail.com', '123456'),
(3, 'Moisés', 'Pérez', 'moises@mail.com', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `telefono` varchar(13) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `direccion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

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

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
