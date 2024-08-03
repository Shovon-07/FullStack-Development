-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 03, 2024 at 03:44 PM
-- Server version: 10.6.18-MariaDB
-- PHP Version: 8.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mollapro_molla_pro`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_auths`
--

CREATE TABLE `admin_auths` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Otp` varchar(6) NOT NULL,
  `Access_Token` varchar(255) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_auths`
--

INSERT INTO `admin_auths` (`id`, `Name`, `Email`, `Password`, `Otp`, `Access_Token`, `Created_at`, `Updated_at`) VALUES
(1, 'Molla properties', 'mollaproperties@gmail.com', '__Molla', '0', '0', '2024-07-24 22:46:03', '2024-07-24 22:46:03');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Blog_video` longtext NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `Blog_video`, `Created_at`, `Updated_at`) VALUES
(1, 'https://www.youtube.com/embed/EkEr-D-ISes?si=wlGa8mxGWpZJ8rss', '2024-07-20 09:03:40', '2024-07-20 09:03:40'),
(2, 'https://www.youtube.com/embed/xsIJTLq3EAY?si=RBHl9NEISAxusirV', '2024-07-20 09:03:40', '2024-07-20 09:03:40'),
(3, 'https://www.youtube.com/embed/1z5cMT5rtqU?si=rALzZLHyRnPfGP5C', '2024-07-20 09:04:20', '2024-07-20 09:04:20'),
(4, 'https://www.youtube.com/embed/JthLK5Mgl-s?si=Mz1Bp0GXT9ADqCfi', '2024-07-20 09:04:20', '2024-07-20 09:04:20');

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Gallery_img` longtext NOT NULL,
  `Project_id` bigint(20) UNSIGNED NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `Gallery_img`, `Project_id`, `Created_at`, `Updated_at`) VALUES
(73, 'Gallery/0_1722666313_1242267399.jpg', 33, '2024-08-03 06:25:13', '2024-08-03 06:25:13'),
(74, 'Gallery/1_1722666313_1349342219.jpg', 33, '2024-08-03 06:25:13', '2024-08-03 06:25:13'),
(75, 'Gallery/2_1722666313_1539220204.jpg', 33, '2024-08-03 06:25:13', '2024-08-03 06:25:13'),
(76, 'Gallery/3_1722666313_527355558.jpg', 33, '2024-08-03 06:25:13', '2024-08-03 06:25:13');

-- --------------------------------------------------------

--
-- Table structure for table `honorable_clients`
--

CREATE TABLE `honorable_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `HonorableClientName` varchar(255) NOT NULL,
  `HonorableClient_img` longtext NOT NULL,
  `Project_id` bigint(20) UNSIGNED NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `honorable_clients`
--

INSERT INTO `honorable_clients` (`id`, `HonorableClientName`, `HonorableClient_img`, `Project_id`, `Created_at`, `Updated_at`) VALUES
(6, 'Al jubair shovon', 'HonorableClient/1722656572_1613998750.jpg', 33, '2024-08-02 21:42:52', '2024-08-02 21:42:52');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2024_07_15_144952_create_projects_table', 1),
(3, '2024_07_16_125007_create_plots_table', 1),
(4, '2024_07_16_135135_create_galleries_table', 1),
(5, '2024_07_16_164622_create_honorable_clients_table', 1),
(6, '2024_07_17_015043_create_news_and_events_table', 1),
(7, '2024_07_17_032605_create_blogs_table', 1),
(8, '2024_07_17_035731_create_owners_table', 1),
(9, '2024_07_25_040739_create_admin_auths_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `news_and_events`
--

CREATE TABLE `news_and_events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `News_img` longtext NOT NULL,
  `Project_id` bigint(20) UNSIGNED NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_and_events`
--

INSERT INTO `news_and_events` (`id`, `News_img`, `Project_id`, `Created_at`, `Updated_at`) VALUES
(3, 'News/1722659949_1807090880.png', 33, '2024-08-02 22:39:09', '2024-08-02 22:39:09');

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Owner_name` varchar(255) NOT NULL,
  `Owner_rank` varchar(255) NOT NULL,
  `Owner_facebook_link` varchar(255) NOT NULL,
  `Owner_img` longtext NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `owners`
--

INSERT INTO `owners` (`id`, `Owner_name`, `Owner_rank`, `Owner_facebook_link`, `Owner_img`, `Created_at`, `Updated_at`) VALUES
(1, 'Abdus Samad Molla', 'Chairman', 'https://www.facebook.com/faisal.mahmud.7393264', 'Owners/user.png', '2024-07-20 09:15:14', '2024-07-20 09:15:14'),
(2, 'Farhad Hossain', 'Director', 'https://www.facebook.com/forhad.rony.31?mibextid=ZbWKwL', 'Owners/Director.jpg', '2024-07-20 09:15:14', '2024-07-20 09:15:14'),
(3, 'Faisal Mahmud', 'Assistant Director', 'https://www.facebook.com/faisal.mahmud.7393264', 'Owners/Faisal_mahmud.jpg', '2024-07-20 09:15:48', '2024-07-20 09:15:48');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plots`
--

CREATE TABLE `plots` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Plot` varchar(255) NOT NULL,
  `Project_id` bigint(20) UNSIGNED NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plots`
--

INSERT INTO `plots` (`id`, `Plot`, `Project_id`, `Created_at`, `Updated_at`) VALUES
(12, '45*36 = 2.25 কাঠা', 33, '2024-08-01 08:21:12', '2024-08-03 06:37:15'),
(13, '45*32 = 2 কাঠা', 33, '2024-08-01 08:21:12', '2024-08-03 06:37:15'),
(14, '45*29 = 1.75 কাঠা', 33, '2024-08-01 08:21:12', '2024-08-03 06:37:15'),
(15, '40*30 = 1.65 কাঠা', 33, '2024-08-01 08:21:12', '2024-08-03 06:37:15'),
(16, '36*30 = 1.45 কাঠা', 33, '2024-08-01 08:21:12', '2024-08-03 06:37:15');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Project_name` varchar(255) NOT NULL,
  `Developer` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Land_area` varchar(255) NOT NULL,
  `Total_plot` varchar(255) NOT NULL,
  `Contact_no` varchar(255) NOT NULL,
  `Features` longtext NOT NULL,
  `Project_map` longtext NOT NULL,
  `Image` longtext NOT NULL,
  `Status` enum('Ongoing','Completed','Upcoming') NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `Title`, `Project_name`, `Developer`, `Location`, `Land_area`, `Total_plot`, `Contact_no`, `Features`, `Project_map`, `Image`, `Status`, `Created_at`, `Updated_at`) VALUES
(33, 'রাজশাহীতে সুলভ মুল্যে জমি বিক্রয় হ্ইবে', 'মোল্লা আবাসিক-৩', 'Molla properties', 'Dangipara, Paba, Rajshahi', '17 decimal (sotok)', '5', '01788300918', '★আস সালামু আলাইকুম। \r\n\r\n🏠মোল্লা আবাসিক-৩🏠 \r\n\r\n🔴  যারা সিটির পাশে একটু কম দামে জমি চাচ্ছিলেন তারা এই প্রজেক্ট টি দেখতে পারেন। \r\n\r\n🎯 ঠিকানা: ডাংগীপাড়া,  হলিক্রস স্কুল অ্যান্ড কলেজ পার হয়ে আব্দুর রাজ্জাক বিন ইউসুফ এর জামিয়া সালাফিয়া মাদরাসা সংলগ্ন । \r\n\r\n➡️যা আম চত্বর থেকে তিন কিলো উত্তর-পূর্বে।\r\n\r\n🔴 এখানে দেড়, দুই এবং শোয়া দুই কাঠার প্লট পাবেন।\r\n🔴 জমির ধরন ভিটা, জমির কাগজ একদম ঝামেলা মুক্ত। \r\n🎯 যোগাযোগ \r\n \r\n01829674216  ( ফরহাদ) \r\n01788300918 (ফায়সাল)', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd', 'Projects/1722510231_436991751.png', 'Ongoing', '2024-08-01 08:14:23', '2024-08-02 05:34:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_auths`
--
ALTER TABLE `admin_auths`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_auths_email_unique` (`Email`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `galleries_project_id_foreign` (`Project_id`);

--
-- Indexes for table `honorable_clients`
--
ALTER TABLE `honorable_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `honorable_clients_project_id_foreign` (`Project_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_and_events`
--
ALTER TABLE `news_and_events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_and_events_project_id_foreign` (`Project_id`);

--
-- Indexes for table `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `plots`
--
ALTER TABLE `plots`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plots_project_id_foreign` (`Project_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_auths`
--
ALTER TABLE `admin_auths`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `honorable_clients`
--
ALTER TABLE `honorable_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `news_and_events`
--
ALTER TABLE `news_and_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `owners`
--
ALTER TABLE `owners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plots`
--
ALTER TABLE `plots`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `galleries`
--
ALTER TABLE `galleries`
  ADD CONSTRAINT `galleries_project_id_foreign` FOREIGN KEY (`Project_id`) REFERENCES `projects` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `honorable_clients`
--
ALTER TABLE `honorable_clients`
  ADD CONSTRAINT `honorable_clients_project_id_foreign` FOREIGN KEY (`Project_id`) REFERENCES `projects` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `news_and_events`
--
ALTER TABLE `news_and_events`
  ADD CONSTRAINT `news_and_events_project_id_foreign` FOREIGN KEY (`Project_id`) REFERENCES `projects` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `plots`
--
ALTER TABLE `plots`
  ADD CONSTRAINT `plots_project_id_foreign` FOREIGN KEY (`Project_id`) REFERENCES `projects` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
