-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 10, 2024 at 10:10 PM
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
  `Image` varchar(255) DEFAULT NULL,
  `Access_Token` varchar(255) NOT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_auths`
--

INSERT INTO `admin_auths` (`id`, `Name`, `Email`, `Password`, `Otp`, `Image`, `Access_Token`, `Created_at`, `Updated_at`) VALUES
(1, 'Molla properties', 'mollaproperties@gmail.com', '__Molla', '0', 'Utility/1723210676_19933053.png', '0', '2024-08-08 05:50:52', '2024-08-09 07:37:56'),
(2, 'Al jubair shovon', 'shovon@me.com', '__shovon', '0', 'Utility/1723125132_753107759.jpg', '0', '2024-08-08 07:30:13', '2024-08-08 07:52:12');

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
(1, 'মোল্লা প্রপার্টিস', 'আমরা দিচ্ছি সর্বোচ্চ সুযোগ সুবিধা সহ রেডি প্লট', 'Utility/1723287543_1563361454.jpg', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd', '<p><strong>জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের</strong>। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার <strong><u>পনেরো- আনা</u></strong> মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। </p><p><br></p><p>জীবরঙ্গভূমিতে <strong>মানুষ</strong> এসে দেখা দেয় <strong><u>দুই শূন্য হাতে মুঠো বেঁধে।</u></strong>\r\n   \r\n   মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে।\r\n\r\nমানুষকে দেখতে হল খুব ছোটো, কিন্তু সেটা একটা কৌশল মাত্র। </p><p><br></p><p><strong><em style=\"background-color: rgb(7, 55, 99); color: rgb(255, 255, 255); font-size: 30px;\">এবারকার জীবযাত্রার পালায় বিপুলতাকে করা হল বহুলতায় পরিণত। মহাকায় <u>জন্তু</u> ছিল প্রকাণ্ড একলা, মানুষ হল দূরপ্রসারিত অনেক।</em></strong></p>', '<p><strong>জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের</strong>। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার <strong style=\"background-color: rgb(67, 67, 67); color: rgb(255, 255, 255);\"><u style=\"background-color: rgb(7, 55, 99); color: rgb(255, 255, 255);\">পনেরো- আনা</u></strong> মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে।</p><p><br></p><p><strong><em>এবারকার জীবযাত্রার পালায় বিপুলতাকে করা হল বহুলতায় পরিণত। মহাকায় <u>জন্তু</u> ছিল প্রকাণ্ড একলা, মানুষ হল দূরপ্রসারিত অনেক।</em></strong></p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong><span style=\"color: rgb(56, 118, 29);\">Suspendisse</span> <span style=\"background-color: rgb(7, 55, 99); color: rgb(255, 255, 255);\">malesuada lacus ex</span>,</strong> sit amet blandit leo <strong><em><u>lobortis eget</u></em></strong>.</p><p><br></p><ul style=\"list-style-type: circle;\"><li>number 1</li></ul><ol style=\"list-style-type: upper-alpha;\"><li>number 2</li><li>number 3</li><br></ol><br><br><br><br>', '<ul><li><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Welcome to&nbsp;<a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a>, Your Trusted Partner in Land Investment</strong></li></ul><p><span style=\"font-size: 18px;\">At <a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a>, we are dedicated to helping you secure your future through smart and reliable land investments. With years of experience in the real estate industry, we specialize in offering premium residential and commercial plots in prime locations that promise both immediate value and long-term growth.</span><br></p>\r\n<p><br></p><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Our Mission</strong><br><span style=\"font-size: 18px;\">Our mission is to make land ownership accessible, straightforward, and rewarding. We believe that owning a piece of land is not just an investment in property, but an investment in your future, offering stability, potential, and peace of mind. We are committed to providing our clients with the best plots that meet their specific needs, whether for building a dream home, starting a business, or securing a stable investment.</span></p>\r\n<p><br></p><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Why Choose Us?</strong></p><ul><li><span style=\"font-size: 18px;\"><strong>* Prime Locations:</strong> We carefully select plots in strategic locations that offer high appreciation potential, ensuring your investment grows over time.</span></li><li><span style=\"font-size: 18px;\"><strong>* Transparent Transactions:</strong> We pride ourselves on our transparency. Every transaction is conducted with the utmost integrity, ensuring that our clients have complete confidence in their investment.</span></li><li><span style=\"font-size: 18px;\"><strong>* Expert Guidance:</strong> Our team of real estate professionals is here to guide you through every step of the purchasing process, from site visits to final documentation.</span></li><li><span style=\"font-size: 18px;\"><strong>* Customer-Centric Approach:</strong> Your satisfaction is our top priority. We work closely with you to understand your goals and provide personalized solutions that align with your vision.</span></li><li><br></li></ul><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Our Values</strong></p><ul><li><span style=\"font-size: 18px;\"><strong>* Integrity:</strong> We operate with honesty and transparency, ensuring every transaction is clear and straightforward.</span></li><li><span style=\"font-size: 18px;\"><strong>* Excellence:</strong> We are committed to delivering the highest quality of service, from the plots we offer to the customer support we provide.</span></li><li><span style=\"font-size: 18px;\"><strong>* Innovation:</strong> We continuously explore new opportunities and strategies to provide our clients with the best investment options in the market.</span></li><li><span style=\"font-size: 18px;\"><br></span></li></ul><p><span style=\"font-size: 18px;\"><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Our Commitment to You</strong></span><span style=\"font-size: 18px;\"><br>At <a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a>, we are more than just a plot-selling company. We are your partners in growth, dedicated to helping you achieve your dreams through secure and profitable land investments. We understand that purchasing land is a significant decision, and we are here to ensure that your experience is smooth, informed, and rewarding.</span></p><p><br></p><p><strong style=\"color: rgb(255, 123, 0); font-size: 24px;\">Join Us</strong></p><p><span style=\"font-size: 18px;\">Whether you\'re a first-time buyer or an experienced investor, <span style=\"color: rgb(109, 158, 235);\"><a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\" style=\"color: rgb(109, 158, 235);\">Molla properties</a></span> is here to help you navigate the world of real estate with confidence. Let us help you find the perfect plot that meets your needs and secures your future.</span></p>', '2024-08-09 14:02:05', '2024-08-10 09:48:16');

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
(10, 'Al jubair shovon', 'aljubairshovon@gmail.com', 'Final check', '<p><span style=\"color: rgb(67, 67, 67); font-size: 30px;\"><strong>This is final check <em>email</em><br></strong></span></p>', '1', '2024-08-10 09:51:59', '2024-08-10 09:51:59');

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
(33, 'রাজশাহীতে সুলভ মুল্যে জমি বিক্রয় হ্ইবে', 'মোল্লা আবাসিক-৩', 'Molla properties', 'Dangipara, Paba, Rajshahi', '17 decimal (sotok)', '5', '01788300918', '<p>★আস সালামু আলাইকুম। \r\n\r\n🏠<strong><a href=\"https://www.facebook.com/profile.php?id=100093853449456&amp;mibextid=ZbWKwL\" target=\"_blank\">মোল্লা আবাসিক-৩</a></strong>🏠 \r\n\r\n🔴  যারা সিটির পাশে একটু কম দামে জমি চাচ্ছিলেন তারা এই প্রজেক্ট টি দেখতে পারেন। </p><p><br></p><p>\r\n\r\n🎯 ঠিকানা: ডাংগীপাড়া,  হলিক্রস স্কুল অ্যান্ড কলেজ পার হয়ে আব্দুর রাজ্জাক বিন ইউসুফ এর জামিয়া সালাফিয়া মাদরাসা সংলগ্ন । \r\n\r\n➡️যা আম চত্বর থেকে তিন কিলো উত্তর-পূর্বে।\r\n\r\n🔴 এখানে দেড়, দুই এবং শোয়া দুই কাঠার প্লট পাবেন।\r\n🔴 জমির ধরন ভিটা, জমির কাগজ একদম ঝামেলা মুক্ত। </p><p><br></p><p>\r\n🎯যোগাযোগ: <strong>01829674216</strong>  ( ফরহাদ) \r\n<strong>01788300918</strong> (ফায়সাল)&nbsp;&nbsp;</p>', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd', 'Projects/1722510231_436991751.png', 'Ongoing', '2024-08-01 08:14:23', '2024-08-09 20:09:43'),
(62, 'জমি শেষ হয়েগেছে। বিক্রি বন্ধ', 'Molla properties 4', 'Al jubair shovon', 'Al jubair shovon', 'Al jubair shovon', 'Al jubair shovon', 'Al jubair shovon', '<ul style=\"margin: 0px; padding: 0px; box-sizing: border-box; color: rgb(255, 255, 255); font-family: Rubik, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(46, 46, 46); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"margin: 0px; padding: 0px; box-sizing: border-box; list-style: none;\"><span style=\"margin: 0px; padding: 0px; box-sizing: border-box; font-size: 18px;\"><strong style=\"margin: 0px; padding: 0px; box-sizing: border-box;\">* Prime Locations:</strong><span>&nbsp;</span>We carefully select plots in strategic locations that offer high appreciation potential, ensuring your investment grows over time.</span></li><li style=\"margin: 0px; padding: 0px; box-sizing: border-box; list-style: none;\"><span style=\"margin: 0px; padding: 0px; box-sizing: border-box; font-size: 18px;\"><strong style=\"margin: 0px; padding: 0px; box-sizing: border-box;\">* Transparent Transactions:</strong><span>&nbsp;</span>We pride ourselves on our transparency. Every transaction is conducted with the utmost integrity, ensuring that our clients have complete confidence in their investment.</span></li><li style=\"margin: 0px; padding: 0px; box-sizing: border-box; list-style: none;\"><span style=\"margin: 0px; padding: 0px; box-sizing: border-box; font-size: 18px;\"><strong style=\"margin: 0px; padding: 0px; box-sizing: border-box;\">* Expert Guidance:</strong><span>&nbsp;</span>Our team of real estate professionals is here to guide you through every step of the purchasing process, from site visits to final documentation.</span></li><li style=\"margin: 0px; padding: 0px; box-sizing: border-box; list-style: none;\"><span style=\"margin: 0px; padding: 0px; box-sizing: border-box; font-size: 18px;\"><strong style=\"margin: 0px; padding: 0px; box-sizing: border-box;\">* Customer-Centric Approach:</strong><span>&nbsp;</span>Your satisfaction is our top priority. We work closely with you to understand your goals and provide personalized solutions that align with your vision.</span></li></ul>', 'Al jubair shovon', 'Projects/1723305029_1201359124.png', 'Ongoing', '2024-08-10 09:50:09', '2024-08-10 09:50:29');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=163;

--
-- AUTO_INCREMENT for table `home_contents`
--
ALTER TABLE `home_contents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `honorable_clients`
--
ALTER TABLE `honorable_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `mail_for_dbs`
--
ALTER TABLE `mail_for_dbs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

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
