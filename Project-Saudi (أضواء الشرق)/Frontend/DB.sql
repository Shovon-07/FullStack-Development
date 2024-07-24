-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 12, 2024 at 09:30 AM
-- Server version: 10.6.18-MariaDB
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aljubair_Project_Preview`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Al jubair shovon', '01767692422', 'Horogram, munsipara, Rajshahi court-6201, Rajpara, Rajshahi', '2024-05-15 12:15:58', '2024-05-15 12:15:58'),
(2, 'Asikur rahman', '01824580580', 'Rajabari, Rajshahi', '2024-05-17 05:23:26', '2024-05-17 05:23:26'),
(3, 'Abdullah Mahdee', '017000000', 'Horogram, munsipara, Rajshahi court-6201, Rajpara, Rajshahi', '2024-05-17 09:16:44', '2024-05-17 09:16:44'),
(4, 'Jony', '017000000', 'Naugon, Rajshaih', '2024-05-17 09:19:40', '2024-05-17 09:19:40'),
(5, 'Sifat', '0170', 'Rajshai', '2024-05-27 21:09:47', '2024-05-27 21:09:47'),
(6, 'Shuvo', '01422', 'Rajshai', '2024-05-27 21:38:20', '2024-05-27 21:38:20'),
(7, 'Abu said', '013222', 'Rajshai', '2024-05-27 21:42:52', '2024-05-27 21:42:52'),
(8, 'Saheb ali', '01200', 'Rajshai', '2024-05-27 21:45:09', '2024-05-27 21:45:09'),
(9, 'Sabbir hossan sohan', '015000', 'Rajshai', '2024-05-27 21:49:22', '2024-05-27 21:49:22'),
(10, 'Sadman shakib', '01300', 'Dhaka', '2024-05-27 22:02:41', '2024-05-27 22:02:41'),
(11, 'Emon', '013', 'Rajshai', '2024-05-27 22:06:23', '2024-05-27 22:06:23');

-- --------------------------------------------------------

--
-- Table structure for table `deducts`
--

CREATE TABLE `deducts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `material_id` bigint(20) UNSIGNED NOT NULL,
  `deduct` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deducts`
--

INSERT INTO `deducts` (`id`, `material_id`, `deduct`, `created_at`, `updated_at`) VALUES
(1, 8, 10.00, '2024-05-27 20:56:16', '2024-05-27 20:56:16');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `dress_type` varchar(255) NOT NULL,
  `button_type` varchar(255) NOT NULL,
  `neck_type` varchar(255) NOT NULL,
  `pocket_type` varchar(255) NOT NULL,
  `hand_type` varchar(255) NOT NULL,
  `material_id` bigint(20) UNSIGNED NOT NULL,
  `material_id_2` bigint(20) UNSIGNED DEFAULT NULL,
  `material_id_3` bigint(20) UNSIGNED DEFAULT NULL,
  `material_id_4` bigint(20) UNSIGNED DEFAULT NULL,
  `chest_length` int(11) NOT NULL,
  `sleeve_length` int(11) NOT NULL,
  `neck_length` int(11) NOT NULL,
  `cuff_length` int(11) NOT NULL,
  `hand_length` int(11) NOT NULL,
  `shoulder_length` int(11) NOT NULL,
  `dress_length` int(11) NOT NULL,
  `material_length` varchar(255) NOT NULL,
  `material_length_2` varchar(255) DEFAULT NULL,
  `material_length_3` varchar(255) DEFAULT NULL,
  `material_length_4` varchar(255) DEFAULT NULL,
  `sale_price` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `vat` varchar(255) NOT NULL,
  `payable` varchar(255) NOT NULL,
  `advance` varchar(255) NOT NULL,
  `due` varchar(255) NOT NULL,
  `deadline_date` varchar(255) NOT NULL,
  `collection` varchar(255) NOT NULL DEFAULT '0',
  `net_outstanding` varchar(255) NOT NULL DEFAULT '0',
  `delivery_date` varchar(255) DEFAULT NULL,
  `shop_phone` varchar(255) DEFAULT NULL,
  `note` longtext DEFAULT NULL,
  `status` enum('pending','cancel','complete','delivery') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `customer_id`, `image`, `dress_type`, `button_type`, `neck_type`, `pocket_type`, `hand_type`, `material_id`, `material_id_2`, `material_id_3`, `material_id_4`, `chest_length`, `sleeve_length`, `neck_length`, `cuff_length`, `hand_length`, `shoulder_length`, `dress_length`, `material_length`, `material_length_2`, `material_length_3`, `material_length_4`, `sale_price`, `quantity`, `total`, `discount`, `vat`, `payable`, `advance`, `due`, `deadline_date`, `collection`, `net_outstanding`, `delivery_date`, `shop_phone`, `note`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Al jubair shovon_a8c0e49176a66f3d9fdc08e4e2900b20.png', 'Structure', 'Button Triangle', 'Royal', 'Pointed Triangle', 'Standard Cuffed', 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, '5.00', '3.00', '10.00', '0.00', '0', 1, '750.00', '112.50', '127.50', '765.00', '700.00', '65.00', '2024-05-18', '65.00', '0', '2024-05-16', '0558180520', '', 'delivery', '2024-05-15 12:15:58', '2024-05-16 11:32:28'),
(2, 2, 'Asikur rahman_c94b0c36d0dadab0dd288043a88456ee.png', 'Emarati', '', '', '', '', 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, '5.00', '5.00', '0.00', '0.00', '0', 1, '600.00', '60.00', '108.00', '648.00', '600.00', '48.00', '2024-05-20', '48.00', '0', '2024-05-17', '0558180520', 'asiks product', 'delivery', '2024-05-17 05:23:26', '2024-05-17 09:17:50'),
(3, 3, 'Abdullah Mahdee_ffc757a8381b434c16d30ea4c9af1df7.png', 'Kuwaiti', '', '', '', '', 2, 3, 4, 1, 5, 5, 5, 5, 5, 5, 5, '5.00', '5.00', '5.00', '0.00', '0', 1, '540.00', '108.00', '43.20', '475.20', '100.00', '375.20', '2024-05-20', '0', '0', NULL, '0558180520', 'abdulla\'s product', 'complete', '2024-05-17 09:16:44', '2024-05-17 09:17:25'),
(4, 4, 'Jony_781481fe4b4d70aba85111d0a5d3fae4.png', 'Structure', 'Button Square', 'French', 'Pointed', 'Standard Cuffed', 2, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, '2.00', '5.00', '0.00', '0.00', '0', 2, '1500.00', '300.00', '120.00', '1320.00', '0', '320.00', '2024-05-21', '0', '0', NULL, '0558180520', '', 'pending', '2024-05-17 09:19:41', '2024-05-28 03:54:12'),
(5, 5, 'Sifat_93496b83910d9f2b718818fc1b56a187.png', 'Structure', 'Button Square', 'Closed Royal', 'Square', 'Standard', 6, 11, 8, 1, 1, 1, 1, 1, 1, 1, 1, '20.00', '10.00', '12.00', '0.00', '0', 1, '500.00', '50.00', '90.00', '540.00', '200.00', '340.00', '2024-05-30', '0', '0', NULL, 'xxxxxxxxxxxx', 'sifats product', 'pending', '2024-05-27 21:09:47', '2024-05-27 21:09:47'),
(6, 6, 'Shuvo_d6b6eb8fb0d7bcd4fa7b2a6518e5fc72.png', 'Kuwaiti', '', '', '', '', 3, 6, 1, 1, 2, 2, 2, 2, 2, 2, 2, '2.00', '3.00', '0.00', '0.00', '0', 2, '600.00', '60.00', '108.00', '648.00', '0.00', '648.00', '2024-05-17', '0', '0', NULL, 'xxxxxxxxxxxx', '', 'pending', '2024-05-27 21:38:20', '2024-05-27 21:38:20'),
(7, 7, 'Abu said_b44eed7ce8bd58d81071f02cce34eb6c.png', 'Emarati', '', '', '', '', 4, 7, 9, 1, 2, 2, 2, 2, 2, 2, 2, '2.00', '2.00', '2.00', '0.00', '0', 1, '520.00', '156.00', '36.40', '400.40', '0.00', '400.40', '2024-05-30', '0', '0', NULL, 'xxxxxxxxxxxx', '', 'pending', '2024-05-27 21:42:52', '2024-05-27 21:42:52'),
(8, 8, 'Saheb ali_5b89545990cf63169b8ceb56a95ee24b.png', 'Emarati', '', '', '', '', 10, 14, 12, 1, 3, 3, 3, 3, 3, 3, 3, '10.00', '50.00', '5.00', '0.00', '0', 1, '700.00', '70.00', '189.00', '819.00', '100.00', '719.00', '2024-05-30', '0', '0', NULL, 'xxxxxxxxxxxx', 'saheb ali\'s', 'pending', '2024-05-27 21:45:09', '2024-05-27 21:45:09'),
(9, 9, 'Sabbir hossan sohan_54c5e3260dfd32c07241b03b8906f85a.png', 'Kuwaiti', '', '', '', '', 14, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, '10.00', '5.00', '0.00', '0.00', '0', 2, '600.00', '60.00', '0.00', '540.00', '100.00', '440.00', '2024-05-30', '0', '0', NULL, 'xxxxxxxxxxxx', '', 'pending', '2024-05-27 21:49:22', '2024-05-27 21:49:22'),
(10, 10, 'Sadman shakib_594bf1b576181a9cb21ce8bacacfce66.png', 'Qatari', '', '', '', '', 14, 13, 1, 1, 2, 2, 2, 2, 2, 2, 2, '5.00', '4.00', '0.00', '0.00', '0', 2, '1400.00', '140.00', '252.00', '1512.00', '0.00', '1512.00', '2024-05-31', '0', '0', NULL, '0558180520', 'Sadman\'s products', 'pending', '2024-05-27 22:02:41', '2024-05-27 22:02:41'),
(11, 11, 'Emon_aa78c1f3eb9458afe2960f919f4472f8.png', 'Qatari', '', '', '', '', 13, 13, 9, 1, 1, 1, 1, 1, 1, 1, 1, '5.00', '5.00', '5.00', '0.00', '0', 1, '500.00', '5.00', '49.50', '544.50', '0.00', '544.50', '2024-05-24', '0', '0', NULL, 'xxxxxxxxxxxx', '', 'pending', '2024-05-27 22:06:23', '2024-05-27 22:06:23');

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double(8,2) NOT NULL,
  `stock` double(8,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`id`, `name`, `price`, `stock`, `created_at`, `updated_at`) VALUES
(1, 'No material', 0.00, 0.00, '2024-05-01 05:16:02', '2024-06-12 03:28:46'),
(2, 'Silk', 560.00, 400.00, '2024-05-15 12:13:53', '2024-06-02 00:28:15'),
(3, 'Silk cotton', 340.00, 5.00, '2024-05-15 12:14:12', '2024-05-27 21:38:20'),
(4, 'Fiber', 840.00, 13.00, '2024-05-15 12:14:34', '2024-05-27 21:52:55'),
(5, 'Cotton', 400.00, 50.00, '2024-05-17 09:21:08', '2024-05-17 09:21:08'),
(6, 'China', 360.00, 77.00, '2024-05-27 20:55:05', '2024-05-27 21:38:20'),
(7, 'Indian', 250.00, 198.00, '2024-05-27 20:55:18', '2024-05-27 21:42:52'),
(8, 'Qatan', 440.00, 578.00, '2024-05-27 20:55:56', '2024-05-27 21:09:47'),
(9, 'Grameen', 200.00, 293.00, '2024-05-27 20:56:39', '2024-05-27 22:06:23'),
(10, 'Korean', 700.00, 90.00, '2024-05-27 20:56:52', '2024-05-27 21:45:09'),
(11, 'Japaneese', 600.00, 190.00, '2024-05-27 20:57:11', '2024-05-27 21:09:47'),
(12, 'Arabian', 860.00, 295.00, '2024-05-27 20:57:26', '2024-05-27 21:45:09'),
(13, 'Pakistani', 150.00, 186.00, '2024-05-27 20:58:29', '2024-05-27 22:06:23'),
(14, 'African', 650.00, 235.00, '2024-05-27 20:59:06', '2024-05-27 22:02:41');

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
(3, '2024_04_03_090609_create_images_table', 2),
(96, '2019_12_14_000001_create_personal_access_tokens_table', 3),
(97, '2024_04_03_083146_create_users_table', 3),
(98, '2024_04_05_193157_create_materials_table', 3),
(99, '2024_04_05_193949_create_stocks_table', 3),
(100, '2024_04_05_194008_create_deducts_table', 3),
(101, '2024_04_06_062556_create_customers_table', 3),
(102, '2024_04_06_095331_create_invoices_table', 3);

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
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `material_id` bigint(20) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `stock` double(8,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`id`, `material_id`, `price`, `stock`, `created_at`, `updated_at`) VALUES
(1, 2, 550.00, 10.00, '2024-05-15 12:13:53', '2024-05-15 12:13:53'),
(2, 3, 340.00, 20.00, '2024-05-15 12:14:12', '2024-05-15 12:14:12'),
(3, 4, 840.00, 30.00, '2024-05-15 12:14:34', '2024-05-15 12:14:34'),
(4, 2, 550.00, 200.00, '2024-05-17 09:20:40', '2024-05-17 09:20:40'),
(5, 5, 400.00, 50.00, '2024-05-17 09:21:08', '2024-05-17 09:21:08'),
(6, 6, 360.00, 100.00, '2024-05-27 20:55:05', '2024-05-27 20:55:05'),
(7, 7, 250.00, 200.00, '2024-05-27 20:55:18', '2024-05-27 20:55:18'),
(8, 8, 450.00, 200.00, '2024-05-27 20:55:56', '2024-05-27 20:55:56'),
(9, 8, 540.00, 400.00, '2024-05-27 20:56:10', '2024-05-27 20:56:10'),
(10, 9, 200.00, 300.00, '2024-05-27 20:56:39', '2024-05-27 20:56:39'),
(11, 10, 700.00, 100.00, '2024-05-27 20:56:52', '2024-05-27 20:56:52'),
(12, 11, 600.00, 200.00, '2024-05-27 20:57:11', '2024-05-27 20:57:11'),
(13, 12, 860.00, 300.00, '2024-05-27 20:57:26', '2024-05-27 20:57:26'),
(14, 13, 150.00, 200.00, '2024-05-27 20:58:29', '2024-05-27 20:58:29'),
(15, 14, 650.00, 300.00, '2024-05-27 20:59:06', '2024-05-27 20:59:06'),
(16, 2, 560.00, 198.00, '2024-06-02 00:28:15', '2024-06-02 00:28:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Otp` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deducts`
--
ALTER TABLE `deducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deducts_material_id_foreign` (`material_id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_customer_id_foreign` (`customer_id`),
  ADD KEY `invoices_material_id_foreign` (`material_id`),
  ADD KEY `invoices_material_id_2_foreign` (`material_id_2`),
  ADD KEY `invoices_material_id_3_foreign` (`material_id_3`),
  ADD KEY `invoices_material_id_4_foreign` (`material_id_4`);

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `materials_name_unique` (`name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stocks_material_id_foreign` (`material_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `deducts`
--
ALTER TABLE `deducts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `deducts`
--
ALTER TABLE `deducts`
  ADD CONSTRAINT `deducts_material_id_foreign` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_material_id_2_foreign` FOREIGN KEY (`material_id_2`) REFERENCES `materials` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_material_id_3_foreign` FOREIGN KEY (`material_id_3`) REFERENCES `materials` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_material_id_4_foreign` FOREIGN KEY (`material_id_4`) REFERENCES `materials` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_material_id_foreign` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_material_id_foreign` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
