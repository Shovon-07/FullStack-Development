-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 16, 2025 at 10:33 PM
-- Server version: 10.6.18-MariaDB
-- PHP Version: 8.3.22

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
  `Image` varchar(255) DEFAULT NULL,
  `Access_Token` varchar(255) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_auths`
--

INSERT INTO `admin_auths` (`id`, `Name`, `Email`, `Password`, `Otp`, `Image`, `Access_Token`, `Created_at`, `Updated_at`) VALUES
(1, 'Molla properties', 'mollaproperties@gmail.com', '__Molla', '0', 'Utility/1723612318_1158549299.png', '0', '2024-08-08 05:50:52', '2024-10-25 08:03:34'),
(2, 'Al Jubair Shovon', 'aljubairshovon@gmail.com', '__shovon', '0', 'Utility/1734850644_989382813.png', '0', '2024-08-08 07:30:13', '2025-01-08 05:41:28'),
(7, 'Shuvo', 'ariyanislamshuvo854@gmail.com', 'Shuvo$6565', '0', 'Utility/dummy-user-profile.png', '0', '2024-08-17 02:56:46', '2024-08-17 02:56:46');

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
(76, 'Gallery/3_1722666313_527355558.jpg', 33, '2024-08-03 06:25:13', '2024-08-03 06:25:13'),
(163, 'Gallery/0_1724841370_308470912.jpg', 68, '2024-08-28 10:36:16', '2024-08-28 10:36:16'),
(164, 'Gallery/0_1724841698_552242863.jpg', 68, '2024-08-28 10:41:43', '2024-08-28 10:41:43'),
(165, 'Gallery/1_1724841700_351954322.jpg', 68, '2024-08-28 10:41:43', '2024-08-28 10:41:43'),
(166, 'Gallery/2_1724841700_1104730736.jpg', 68, '2024-08-28 10:41:43', '2024-08-28 10:41:43'),
(167, 'Gallery/0_1731936730_2000727445.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(168, 'Gallery/1_1731936735_430168064.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(169, 'Gallery/2_1731936741_1031144018.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(170, 'Gallery/3_1731936746_978751112.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(171, 'Gallery/4_1731936751_359022648.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(172, 'Gallery/5_1731936756_1247997536.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(173, 'Gallery/6_1731936761_2075358212.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(174, 'Gallery/7_1731936766_1115591472.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(175, 'Gallery/8_1731936771_1907885705.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(176, 'Gallery/9_1731936776_1814034991.jpeg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(177, 'Gallery/10_1731936779_480647628.jpeg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(178, 'Gallery/11_1731936779_2002052680.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(179, 'Gallery/12_1731936782_1326815247.jpg', 33, '2024-11-18 13:33:08', '2024-11-18 13:33:08'),
(207, 'Gallery/0_1740019314_1849081854.jpg', 70, '2025-02-20 02:41:57', '2025-02-20 02:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `home_contents`
--

CREATE TABLE `home_contents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `BannerTitle` varchar(255) NOT NULL,
  `BannerMoto` varchar(255) NOT NULL,
  `BannerImage` longtext NOT NULL,
  `Map` longtext NOT NULL,
  `OurVission` longtext NOT NULL,
  `OurMission` longtext NOT NULL,
  `InvestWithUs` longtext NOT NULL,
  `AboutUsTxt` longtext NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_contents`
--

INSERT INTO `home_contents` (`id`, `BannerTitle`, `BannerMoto`, `BannerImage`, `Map`, `OurVission`, `OurMission`, `InvestWithUs`, `AboutUsTxt`, `Created_at`, `Updated_at`) VALUES
(1, 'মোল্লা প্রপার্টিস', 'আমরা দিচ্ছি সর্বোচ্চ সুযোগ সুবিধা সহ রেডি প্লট', 'Utility/1724841167_610509438.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd', '<p><strong>বাসস্থান&nbsp; মানুষের একটি মৌলিক অধিকার।</strong></p><p>মোল্লা প্রপার্টিস চেষ্টা করছে প্রত্যেকের চাহিদা অনুযায়ী তাদের বসবাস যোগ্য আবাসনের ব্যবস্থা করার।<br></p>', '<p>বসবাসের জন্য উপযুক্ত&nbsp; সুন্দর&nbsp; পরিবেশ তৈরি করতে মোল্লা প্রপার্টিস বদ্ধপরিকর।&nbsp;</p>', '<p>ইসলামি বিনিয়োগ&nbsp; পদ্ধতিতে আমাদের সাথে বিনিয়োগ করতে পারেন।</p><p>বিনিয়োগকারি চাইলে&nbsp;</p><p>১.মুদারাবা</p><p>২. মুশারাকা</p><p>৩.মুশাবাহা</p><p>এই তিন পদ্ধতিতেই বিনিয়োগ করতে পারেন।&nbsp;</p><br>', '<ul><li><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Welcome to&nbsp;<a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a>, Your Trusted Partner in Land Investment</strong></li></ul><p><span style=\"font-size: 18px;\">At <a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a>, we are dedicated to helping you secure your future through smart and reliable land investments. With years of experience in the real estate industry, we specialize in offering premium residential and commercial plots in prime locations that promise both immediate value and long-term growth.</span><br></p>\r\n<p><br></p><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Our Mission</strong><br><span style=\"font-size: 18px;\">Our mission is to make land ownership accessible, straightforward, and rewarding. We believe that owning a piece of land is not just an investment in property, but an investment in your future, offering stability, potential, and peace of mind. We are committed to providing our clients with the best plots that meet their specific needs, whether for building a dream home, starting a business, or securing a stable investment.</span></p>\r\n<p><br></p><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Why Choose Us?</strong></p><ul><li><span style=\"font-size: 18px;\"><strong>* Prime Locations:</strong> We carefully select plots in strategic locations that offer high appreciation potential, ensuring your investment grows over time.</span></li><li><span style=\"font-size: 18px;\"><strong>* Transparent Transactions:</strong> We pride ourselves on our transparency. Every transaction is conducted with the utmost integrity, ensuring that our clients have complete confidence in their investment.</span></li><li><span style=\"font-size: 18px;\"><strong>* Expert Guidance:</strong> Our team of real estate professionals is here to guide you through every step of the purchasing process, from site visits to final documentation.</span></li><li><span style=\"font-size: 18px;\"><strong>* Customer-Centric Approach:</strong> Your satisfaction is our top priority. We work closely with you to understand your goals and provide personalized solutions that align with your vision.</span></li><li><br></li></ul><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Our Values</strong></p><ul><li><span style=\"font-size: 18px;\"><strong>* Integrity:</strong> We operate with honesty and transparency, ensuring every transaction is clear and straightforward.</span></li><li><span style=\"font-size: 18px;\"><strong>* Excellence:</strong> We are committed to delivering the highest quality of service, from the plots we offer to the customer support we provide.</span></li><li><span style=\"font-size: 18px;\"><strong>* Innovation:</strong> We continuously explore new opportunities and strategies to provide our clients with the best investment options in the market.</span></li><li><span style=\"font-size: 18px;\"><br></span></li></ul><p><span style=\"font-size: 18px;\"><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Our Commitment to You</strong></span><span style=\"font-size: 18px;\"><br>At <a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a>, we are more than just a plot-selling company. We are your partners in growth, dedicated to helping you achieve your dreams through secure and profitable land investments. We understand that purchasing land is a significant decision, and we are here to ensure that your experience is smooth, informed, and rewarding.</span></p><p><br></p><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Join Us</strong></p><p><span style=\"font-size: 18px;\">Whether you\'re a first-time buyer or an experienced investor, <span style=\"color: rgb(109, 158, 235);\"><a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a></span> is here to help you navigate the world of real estate with confidence. Let us help you find the perfect plot that meets your needs and secures your future.</span></p>', '2024-08-09 14:02:05', '2024-08-28 04:32:51');

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
(52, 'মো. ফেরদৌস আলম', 'HonorableClient/1724869290_1790242974.jpg', 68, '2024-08-28 12:21:30', '2024-08-28 12:21:30'),
(53, 'মো. রাশেদুল ইসলাম', 'HonorableClient/1724869341_925946676.png', 68, '2024-08-28 12:22:21', '2024-08-28 12:22:21'),
(54, 'জিয়াউর রহমান', 'HonorableClient/1724869404_39864873.jpg', 68, '2024-08-28 12:23:24', '2024-08-28 12:23:24'),
(55, 'মো. বেদারুল ইসলাম', 'HonorableClient/1724869532_1853097127.jpg', 68, '2024-08-28 12:25:32', '2024-08-28 12:25:32'),
(56, 'মোঃ জহির উদ্দিন', 'HonorableClient/1724869611_1050873391.jpg', 68, '2024-08-28 12:26:51', '2024-08-28 12:26:51'),
(58, 'মো: নাজমুল হাসান', 'HonorableClient/1731937256_635465184.jpg', 33, '2024-11-18 07:40:56', '2024-11-18 07:40:56'),
(59, 'আব্দুল আওয়াল', 'HonorableClient/1731937465_78659226.jpg', 33, '2024-11-18 07:44:25', '2024-11-18 07:44:25'),
(60, 'মাওলানা মোহাম্মদ একরামুল হক', 'HonorableClient/1731990340_1846044923.jpg', 33, '2024-11-18 22:25:41', '2024-11-18 22:25:41'),
(61, 'মো: মনিরুল ইসলাম', 'HonorableClient/1731990525_125918755.jpg', 33, '2024-11-18 22:28:45', '2024-11-18 22:28:45'),
(62, 'মো: তারিক হাসান', 'HonorableClient/1731990709_1786645828.jpg', 33, '2024-11-18 22:31:49', '2024-11-18 22:31:49');

-- --------------------------------------------------------

--
-- Table structure for table `mail_for_dbs`
--

CREATE TABLE `mail_for_dbs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Subject` longtext NOT NULL,
  `Message` longtext NOT NULL,
  `Status` varchar(255) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mail_for_dbs`
--

INSERT INTO `mail_for_dbs` (`id`, `Name`, `Email`, `Subject`, `Message`, `Status`, `Created_at`, `Updated_at`) VALUES
(10, 'Al jubair shovon', 'aljubairshovon@gmail.com', 'Final check', '<p><span style=\"color: rgb(67, 67, 67); font-size: 30px;\"><strong>This is final check <em>email</em><br></strong></span></p>', '0', '2024-08-10 09:51:59', '2024-10-25 08:04:32'),
(11, 'Asikur rahman', 'asikur@gmail.com', 'I\'ll buy plot', '<p><span style=\"font-size: 24px;\">আমি রাজশাহী<strong> ্আমচত্তরের</strong> ্আশেপাশে ্একটি প্লট নিতে চা্ই। ভালোা পজিশনে ্একটাা প্লট সাজেষ্ট করুন।</span></p><p><span style=\"font-size: 24px;\"><br></span></p><p style=\"text-align: justify;\"><strong style=\"font-size: 24px;\"><em>× রাস্তার ধারে হতে হবে।</em></strong></p><p style=\"text-align: justify;\"><strong style=\"font-size: 24px;\"><em>× যাতায়াত ববস্থাা ভালোা হতে হবে</em></strong></p>', '0', '2024-08-13 07:22:40', '2024-08-13 08:00:54'),
(12, 'Al jubair shovon', 'aljubairshovon@gmail.com', 'I\'ll buy plot', '<p>তাড়াতাড়ি প্লট দেন। নাহলে....&nbsp;</p>', '0', '2024-08-13 08:39:04', '2025-01-07 23:39:56'),
(13, 'Sobuj', 'abuayubs@gmail.com', 'job', '<p>I am Sobuj from Rajshahi.&nbsp; I search a agro base or real estate&nbsp; job, I complete Masters from rajshahi college.&nbsp; Also experienced Aman cold store, Ha-meem group.&nbsp;</p>', '0', '2024-08-28 12:09:48', '2025-01-07 23:41:49'),
(14, 'Shovon', 'aljubairshovon@gmail.com', 'Test', '<p>Hi dear</p>', '0', '2025-01-07 23:42:30', '2025-01-07 23:47:21'),
(15, 'dfd', 'df@gmail.ccom', 'dfd', '<p>dfd</p>', '0', '2025-01-07 23:47:05', '2025-01-07 23:47:17');

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
(16, '36*30 = 1.45 কাঠা', 33, '2024-08-01 08:21:12', '2024-08-03 06:37:15'),
(116, '৫০×৩৬=২.৫ কাঠা কর্নার প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(117, '৩০×৪৮=২ কাঠা দক্ষিণমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(118, '৩২×৪৮=২.২৫ কাঠা দক্ষিণমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(119, '২৮×৪৭=১.৮৫ কাঠা দক্ষিণমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(120, '৩৮×৩৮= ২ কাঠা কর্নার  প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(121, '৩৮×২৯= ১.৬৫ কাঠা উত্তরমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(122, '৩৮×২৯=১.৬৫ কাঠা  উত্তরমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(123, '৩৯×৩১=১.৭৫ কাঠা  উত্তরমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(124, '৪২×৩৬=২.১৬ কাঠা কর্নার প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(125, '৩৬×৩৩=১.৬৫ কাঠা দক্ষিণমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(126, '৩৬×৩৩=১.৬৫ কাঠা দক্ষিণমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(127, '৩৬×৩০=১.৫ কাঠা দক্ষিণমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(128, '৪০×৪৫=২.৫ কাঠা কর্নার  প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(129, '৪০×৪৫=২.৫ কাঠা উত্তরমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(130, '২৭×৩৮= ১.৪৫ কাঠা উত্তরমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(131, '৪০×৪০ =২.২৫ কাঠা কর্নার প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(132, '৪০×৩৩=১.৯ কাঠা দক্ষিণমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(133, '৫৩×৪২= ৩ কাঠা কর্নার প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(134, '৫০×৩৩=২.২৫ কাঠা  উত্তরমুখি প্লট', 68, '2024-08-28 04:22:43', '2024-08-28 04:22:43'),
(135, '45*40=2.50 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02'),
(136, '43*28=1.67 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02'),
(137, '44*36=2.25 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02'),
(138, '45*40=2.50 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02'),
(139, '45*40=2.50 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02'),
(140, '43*38=2.25 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02'),
(141, '54*33=2.50 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02'),
(142, '54*২৮=1.80 কাঠা', 70, '2025-02-19 20:36:02', '2025-02-19 20:36:02');

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
(33, 'রাজশাহীতে সুলভ মুল্যে জমি বিক্রয় হ্ইবে', 'মোল্লা আবাসিক-৩', 'Molla properties', 'Dangipara, Paba, Rajshahi', '17 decimal (sotok)', '5', '01788300918', '<p>★আস সালামু আলাইকুম। \r\n\r\n🏠<strong><a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\">মোল্লা আবাসিক-৩</a></strong>🏠 \r\n\r\n🔴  যারা সিটির পাশে একটু কম দামে জমি চাচ্ছিলেন তারা এই প্রজেক্ট টি দেখতে পারেন। </p><p><br></p><p>\r\n\r\n🎯 ঠিকানা: ডাংগীপাড়া,  হলিক্রস স্কুল অ্যান্ড কলেজ পার হয়ে আব্দুর রাজ্জাক বিন ইউসুফ এর জামিয়া সালাফিয়া মাদরাসা সংলগ্ন । \r\n\r\n➡️যা আম চত্বর থেকে তিন কিলো উত্তর-পূর্বে।\r\n\r\n🔴 এখানে দেড়, দুই এবং শোয়া দুই কাঠার প্লট পাবেন।\r\n🔴 জমির ধরন ভিটা, জমির কাগজ একদম ঝামেলা মুক্ত। </p><p><br></p><p>\r\n🎯যোগাযোগ: <strong>01829674216</strong>  ( ফরহাদ) \r\n<strong>01788300918</strong> (ফায়সাল)&nbsp;&nbsp;</p>', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd', 'Projects/1723528542_1796057787.jpg', 'Completed', '2024-08-01 08:14:23', '2025-02-19 20:27:26'),
(68, 'ইসলামি পরিবেশে বসবাসের জন্য উপযুক্ত এবং সুন্দর একটি লোকেশন', 'মোল্লা আবাসিক -২ (লেকভিউ)', 'মোল্লা প্রপার্টিস', 'ডাংগীপাড়া, পবা,রাজশাহী', '৫০ কাঠা', '১৯', '01788300918', '<p>🏡🏠মোল্লা হাউজিং 🏠🏡</p><p>_____সবুজে শান্তির নীড়</p><p><br></p><p>&nbsp;📯📯গ্রীন সিটি ক্লিন সিটি খ্যাত, রাজশাহী সিটি  কর্পোরেশন ১৭ নং ওয়ার্ডের উত্তর পাশে  ডাংগীপাড়ায় সবুজঘেরা পরিবেশ প্লট আকারে জমি বিক্রয় চলিতেছে।</p><p><br></p><p>★ আমচত্তর থেকে ২ কি. মি উত্তর-পূর্বে হলিক্রস স্কুল অ্যান্ড কলেজ পার হয়ে  ডাংগীপাড়ায়, শায়েখ আব্দুর রাজ্জাক বিন ইউসুফের মাদরাসার পশ্চিম পাশে  ৫০ কাঠা জমির উপরে আমাদের এই প্রজেক্ট টি।</p><p><br></p><p>★এখানে ১.৫ কাঠা  থেকে ৩ কাঠা পরিমাণের প্লট  ৭ লাখ থেকে ৮ লাখ টাকা কাঠায় পাওয়া যাবে।&nbsp;</p><p><br></p><p>★প্লটগুলো অধিকাংশ  উত্তর এবং দক্ষিণমুখি।</p><p>★ অত্র এলাকার মধ্যে সবচেয়ে উঁচু যায়গা।&nbsp;</p><p>★মটি ভরাট করা হয়নি, প্রয়োজনও হবে না।</p><p><br></p><p>★ পিচ ঢালাই ৩০ ফিট রাস্তার সাথে প্লটের রাস্তা ১২ ফিট চওড়া।&nbsp;</p><p><br></p><p>যোগাযোগ 📞📞</p><p><br></p><p>01829674216</p><p>01788300918</p>', 'https://maps.app.goo.gl/ZivT5iFMjJn36mAd9', 'Projects/1723557953_1996923243.jpg', 'Completed', '2024-08-13 08:05:53', '2024-08-13 08:05:53'),
(70, 'রাজশাহী শহরের সন্নিকটে সবচেয়ে কম দামে রেডি প্লট।', 'A. Samad City', 'মোল্লা প্রপার্টিস', 'ডাংগীপাড়া, পবা,রাজশাহী', '১০০ কাঠা', '৫০', '01788300918', '<p>আস সালামু আলাইকুম&nbsp;</p><p><br></p><p>🛑রাজশাহীর আম চত্বর থেকে 2.5 কিলোর মধ্যে সর্বনিম্ন দামে প্লট বিক্রয় চলছে</p><p>মোল্লা আবাসিকে।&nbsp;</p><p>&nbsp;<br></p><p>প্রজেক্ট  🏠  A Samad City  🏠</p><p><br></p><p>🔴এখানে প্লটের পরিমাপ ১.৫ থেকে ৩ কাঠা</p><p>🔴জমির ধরন ভিটা।</p><p>🔴জমির কাগজ আপডেট&nbsp;</p><p><br></p><p>✅ C. S থেকে R. S পর্যন্ত ধারাবাহিক বিবরণ</p><p>✅ S. A ও R. S খতিয়ান একই মালিকের&nbsp;</p><p>✅  পৈতৃক সম্পত্তি&nbsp;</p><p><br></p><p>🔴প্লটের নিকটেই আব্দুর রাজ্জাক বিন ইউসুফ সাহেবের মাদরাসা   আল জামিয়া আস সালাফিয়া।</p><p>এবং&nbsp;</p><p>🔴রাজশাহীর প্রসিদ্ধ হলিক্রস স্কুল অ্যান্ড কলেজ।&nbsp;</p><p><br></p><p>&nbsp;<br></p><p>🔴যোগাযোগ ব্যাবস্থার উন্নতির সাথে সাথে এলাকাটি আবাসনের জন্য উপযুক্ত হয়ে উঠেছে।</p><p><br></p><p>➡️ডাংগীপাড়া এলাকা কেন্দ্রক বেশকিছু আবাসন প্রকল্প চলমান।</p><p><br></p><p><br></p><p>🔴আমাদের প্লটগুলো সরকারি ২৫ রাস্তার সাথেই&nbsp;</p><p>🔴 প্লটের  রাস্তা ১৪ ফিট এবং ১২&nbsp;</p><p>&nbsp;&nbsp;<br></p><p><br></p><p>&nbsp;যারা স্বল্প বিনিয়োগে বসবাস যোগ্য যায়গা খুঁজছেন তারা ভিজিট করতে পারেন&nbsp;</p><p><br></p><p>https://molla-properties.com</p><p><br></p><p>&nbsp;অথবা সরাসরি যোগাযোগ করুন&nbsp;&nbsp;</p><p><br></p><p>&nbsp;01829674216&nbsp; &nbsp;</p><p>&nbsp;01788300918</p><p><br></p><p>ফায়সাল মাহমুদ&nbsp;</p><p>সহকারি পরিচালক&nbsp;</p><p>মোল্লা প্রপার্টিজ</p>', 'https://maps.app.goo.gl/ydaxBGBwjPUU8sdd9', 'Projects/1740018105_1236033504.jpg', 'Ongoing', '2025-02-19 20:21:45', '2025-02-19 20:21:45');

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
-- Indexes for table `home_contents`
--
ALTER TABLE `home_contents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `honorable_clients`
--
ALTER TABLE `honorable_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `honorable_clients_project_id_foreign` (`Project_id`);

--
-- Indexes for table `mail_for_dbs`
--
ALTER TABLE `mail_for_dbs`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=208;

--
-- AUTO_INCREMENT for table `home_contents`
--
ALTER TABLE `home_contents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `honorable_clients`
--
ALTER TABLE `honorable_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `mail_for_dbs`
--
ALTER TABLE `mail_for_dbs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `news_and_events`
--
ALTER TABLE `news_and_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

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
