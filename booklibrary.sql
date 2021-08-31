-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2021 at 07:13 AM
-- Server version: 8.0.19
-- PHP Version: 7.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booklibrary`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `author`, `image`, `created_at`) VALUES
(8, '7 Habits of Highly Effective People', 'Stephen Covey', 'Habits.jpg', '2021-08-30 15:27:40'),
(9, 'Four Hour Workweek', 'Tim Ferris', '4Hour.jpg', '2021-08-30 15:28:31'),
(11, 'How to be fine', 'Jolenta Greenberg', 'befine.jpg', '2021-08-30 15:38:10'),
(12, 'Subtle Art of not giving a F*ck', 'Mark Manson', 'Subtle.jpg', '2021-08-30 15:40:48'),
(13, 'Rich Dad Poor Dad', 'Robert Kiyosaki', 'rich.png', '2021-08-30 15:41:42'),
(14, 'Tribe Of Mentors', 'Tim Ferris', 'Tribe.png', '2021-08-30 15:43:12'),
(15, 'How to Love Yourself', 'Megan Watterson', 'love.jpg', '2021-08-30 15:45:07'),
(16, 'Year of Yes', 'Shonda Rhimes', 'year.jpg', '2021-08-30 15:47:19'),
(17, 'The Power of Now', 'Eckhart Tolle', 'power-now.jpg', '2021-08-30 15:48:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
