-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 10, 2024 at 07:28 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `E-Commerce-Saudi`
--

-- --------------------------------------------------------

--
-- Table structure for table `captured_imgs`
--

CREATE TABLE `captured_imgs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ButtonName` varchar(255) NOT NULL,
  `NeckName` varchar(255) NOT NULL,
  `PocketName` varchar(255) NOT NULL,
  `HandName` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(8, 'Al jubair shovon', '01767692422', 'Charkhutar mor, Rajshahi court-6201, Kashiadanga, Rajshahi', '2024-04-09 03:55:08', '2024-04-09 03:55:08'),
(9, 'Asikur rahman', '010123123', 'Rajabari, Rajshahi court-6201, Rajabari, Rajshahi', '2024-04-09 04:03:03', '2024-04-09 04:03:03'),
(10, 'Jony babu', '01122', 'Nauga, Rajshahi court-6201, Nauga, Rajshahi', '2024-04-09 04:05:57', '2024-04-09 04:05:57'),
(11, 'Said', '02232', 'Nauga, Rajshahi court-6201, Nauga, Rajshahi', '2024-04-09 04:13:21', '2024-04-09 04:13:21');

-- --------------------------------------------------------

--
-- Table structure for table `deducts`
--

CREATE TABLE `deducts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `material_id` bigint(20) UNSIGNED NOT NULL,
  `deduct` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deducts`
--

INSERT INTO `deducts` (`id`, `material_id`, `deduct`, `created_at`, `updated_at`) VALUES
(1, 7, 20, '2024-04-07 23:43:46', '2024-04-07 23:43:46');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `button_type` varchar(255) NOT NULL,
  `neck_type` varchar(255) NOT NULL,
  `pocket_type` varchar(255) NOT NULL,
  `hand_type` varchar(255) NOT NULL,
  `material_id` bigint(20) UNSIGNED NOT NULL,
  `chest_length` int(11) NOT NULL,
  `sleeve_length` int(11) NOT NULL,
  `neck_length` int(11) NOT NULL,
  `cuff_length` int(11) NOT NULL,
  `hand_length` int(11) NOT NULL,
  `shoulder_length` int(11) NOT NULL,
  `dress_length` int(11) NOT NULL,
  `material_length` int(11) NOT NULL,
  `sale_price` int(11) NOT NULL,
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
  `inqueries_number` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `status` enum('pending','cancel','complete','delivery') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `customer_id`, `image`, `button_type`, `neck_type`, `pocket_type`, `hand_type`, `material_id`, `chest_length`, `sleeve_length`, `neck_length`, `cuff_length`, `hand_length`, `shoulder_length`, `dress_length`, `material_length`, `sale_price`, `total`, `discount`, `vat`, `payable`, `advance`, `due`, `deadline_date`, `collection`, `net_outstanding`, `delivery_date`, `inqueries_number`, `note`, `status`, `created_at`, `updated_at`) VALUES
(13, 8, 'Captured_9d6cec56e6279730279edb93413909ab.png', 'Button Triangle', 'French', 'Pointed Triangle', 'Standard Cuffed', 1, 1, 5, 2, 6, 3, 7, 4, 100, 40, '4000', '1200', '1120', '3920', '500', '3420', '2024-04-12', '0', '0', NULL, '8', '9', 'pending', '2024-04-09 03:55:08', '2024-04-09 03:55:08'),
(14, 9, 'Captured_638407cd84723ebc77c18b95275a5b25.png', 'Zipper Triangle', 'Royal', 'Standard Curved', 'Cuffed Chart', 5, 1, 5, 2, 6, 3, 7, 4, 50, 4, '200', '40', '64', '224', '30', '194', '2024-04-14', '0', '0', NULL, '8', '9', 'pending', '2024-04-09 04:03:03', '2024-04-09 04:03:03'),
(15, 10, 'Captured_bd3dc47ae9e95e3ef7bb5d4608b30a23.png', 'Button Curved', 'Closed Royal', 'Pointed', 'Cuffed Chart', 6, 1, 5, 2, 6, 3, 7, 4, 80, 4, '320', '64', '102.4', '358.4', '300', '58.4', '2024-04-22', '0', '0', NULL, '8', '9', 'pending', '2024-04-09 04:05:57', '2024-04-09 04:05:57'),
(16, 11, 'Captured_ad5730f0e3cbc631b3d8b900175e9dd5.png', 'Hidden Curved', 'Opened', '', 'Standard', 2, 1, 5, 2, 6, 3, 7, 4, 10, 4, '40', '8', '1.28', '33.28', '20', '13.28', '2024-04-22', '0', '0', NULL, '8', '9', 'pending', '2024-04-09 04:13:21', '2024-04-09 04:13:21');

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`id`, `name`, `price`, `stock`, `created_at`, `updated_at`) VALUES
(1, 'Silk', '20', 1026, '2024-04-05 22:13:31', '2024-04-09 03:55:08'),
(2, 'Woven Cotton', '2', 10, '2024-04-05 16:26:31', '2024-04-09 04:13:21'),
(3, 'Tweed Suiting Fabrics', '100', 146, '2024-04-05 16:27:09', '2024-04-07 23:59:21'),
(4, 'Fabrics', '23', 5650, '2024-04-05 16:50:54', '2024-04-07 12:35:33'),
(5, 'Cotton', '1', 1, '2024-04-05 18:49:22', '2024-04-06 22:41:56'),
(6, 'Texture', '11', 1067352752, '2024-04-06 16:42:35', '2024-04-09 04:05:57'),
(7, 'Silk Cotton', '200', 101, '2024-04-07 23:34:42', '2024-04-07 23:43:46');

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
(10, '2019_12_14_000001_create_personal_access_tokens_table', 3),
(11, '2024_04_03_083146_create_users_table', 3),
(12, '2024_04_05_193157_create_materials_table', 3),
(13, '2024_04_05_193949_create_stocks_table', 3),
(14, '2024_04_05_194008_create_deducts_table', 3),
(15, '2024_04_06_062556_create_customers_table', 3),
(16, '2024_04_06_095331_create_invoices_table', 3),
(17, '2024_04_07_060428_create_captured_imgs_table', 3);

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
  `price` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`id`, `material_id`, `price`, `stock`, `created_at`, `updated_at`) VALUES
(1, 7, '300', 100, '2024-04-07 23:34:42', '2024-04-07 23:34:42'),
(2, 7, '1', 20, '2024-04-07 23:35:16', '2024-04-07 23:35:16'),
(3, 7, '1', 1, '2024-04-07 23:36:15', '2024-04-07 23:36:15');

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
-- Indexes for table `captured_imgs`
--
ALTER TABLE `captured_imgs`
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `invoices_material_id_foreign` (`material_id`);

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `captured_imgs`
--
ALTER TABLE `captured_imgs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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