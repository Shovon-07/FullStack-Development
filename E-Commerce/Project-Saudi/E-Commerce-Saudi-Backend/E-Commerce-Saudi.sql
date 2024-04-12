-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 12, 2024 at 06:45 AM
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
(11, 'Said', '02232', 'Nauga, Rajshahi court-6201, Nauga, Rajshahi', '2024-04-09 04:13:21', '2024-04-09 04:13:21'),
(12, 'Saheb ador', '0155512', 'Baneswer Bazar, Rajshahi', '2024-04-11 04:37:20', '2024-04-11 04:37:20'),
(13, 'Asikur rahman', '01921', 'Rajabari bazar, Rajabair post, Rajabari', '2024-04-11 04:56:37', '2024-04-11 04:56:37'),
(14, 'Jony babu', '01314', 'Nauga, Rajshahi, Bangladesh', '2024-04-11 08:26:40', '2024-04-11 08:26:40'),
(17, 'Said', '0529', 'Nauga, Rajshahi, Bangladesh', '2024-04-11 08:38:13', '2024-04-11 08:38:13'),
(18, 'Saheb ador', '0123', 'Baneswar bazar, Rajshahi', '2024-04-11 08:49:06', '2024-04-11 08:49:06'),
(19, 'Jony babu', '0129', 'Nauga, Rajshahi, Bangladesh', '2024-04-11 09:33:53', '2024-04-11 09:33:53');

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
(1, 7, 20, '2024-04-07 23:43:46', '2024-04-07 23:43:46'),
(2, 8, 1, '2024-04-11 04:30:13', '2024-04-11 04:30:13'),
(3, 8, 2, '2024-04-11 11:31:54', '2024-04-11 11:31:54'),
(4, 8, 20, '2024-04-11 11:32:02', '2024-04-11 11:32:02'),
(5, 10, 10, '2024-04-11 19:32:23', '2024-04-11 19:32:23'),
(6, 10, 1, '2024-04-11 19:41:24', '2024-04-11 19:41:24');

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
(18, 8, 'Al jubair shovon_8185204967347795235d3671a4c5151b.png', 'Button Triangle', 'French', 'Pointed Triangle', 'Standard Cuffed', 7, 34, 25, 10, 12, 30, 34, 44, 20, 200, '4000', '1200', '560', '3360', '2500', '860', '2024-04-13', '0', '0', NULL, '', '', 'complete', '2024-04-11 04:45:17', '2024-04-11 22:36:00'),
(19, 13, 'Asikur rahman_85e33d20baaac72e022b93c7b0a1dd28.png', 'Button Curved', 'Royal', 'Standard Curved', 'Standard Chart', 6, 1, 5, 2, 6, 3, 7, 4, 10, 300, '3000', '300', '1080', '3780', '1000', '2780', '2024-04-13', '0', '0', NULL, '', '', 'pending', '2024-04-11 04:56:37', '2024-04-11 17:19:07'),
(26, 17, 'Said_fe283f23c0582b6882b11484f8c22a00.png', 'Zipper Cuved', 'Opened', 'Standard Curved', 'Standard', 4, 2, 5, 2, 666, 1, 7, 444, 100, 3, '300', '60', '24', '264', '100', '164', '2024-04-25', '0', '0', NULL, '', '', 'pending', '2024-04-11 08:47:41', '2024-04-12 01:35:40'),
(28, 18, 'Saheb ador_6783fc61bb5b790354dc9396a8c2dad9.png', 'Zipper Cuved', 'Single Button', '', 'Standard', 2, 111, 555, 222, 666, 333, 777, 444, 55, 3, '165', '33', '52.8', '184.8', '100', '84.8', '2024-04-19', '3', '81.8', '2024-04-13', '', '', 'delivery', '2024-04-11 08:49:37', '2024-04-11 22:18:49'),
(33, 19, 'Jony babu_2ed689ffb28f80b10b0a6af2f031a2c3.png', 'Button Curved', 'Single Button', 'Curved', 'Cuffed Chart', 2, 1, 1, 222, 666, 4, 777, 4, 300, 77, '23100', '2310', '1039.5', '21829.5', '5600', '16229.5', '2024-04-17', '16229.5', '0', '2024-04-12', '', '', 'delivery', '2024-04-11 09:33:53', '2024-04-11 21:45:04');

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
(1, 'Silk', '20', 36, '2024-04-05 22:13:31', '2024-04-11 19:30:22'),
(2, 'Woven Cotton', '2', 1035, '2024-04-05 16:26:31', '2024-04-11 21:35:44'),
(3, 'Tweed Suiting Fabrics', '100', 146, '2024-04-05 16:27:09', '2024-04-07 23:59:21'),
(4, 'Fabrics', '23', 5750, '2024-04-05 16:50:54', '2024-04-11 19:35:09'),
(5, 'Cotton', '1', 251, '2024-04-05 18:49:22', '2024-04-11 04:39:01'),
(6, 'Texture', '11', 1067352982, '2024-04-06 16:42:35', '2024-04-11 04:56:37'),
(7, 'Silk Cotton', '200', 81, '2024-04-07 23:34:42', '2024-04-11 04:45:17'),
(8, 'Fabrics Cottton', '200', 278, '2024-04-11 04:29:22', '2024-04-11 11:32:02'),
(9, 'Fiber', '100', 200, '2024-04-11 19:20:22', '2024-04-11 19:20:22'),
(10, 'Fiber Cottton', '2', 110, '2024-04-11 19:26:43', '2024-04-11 19:41:39'),
(11, 'Suiting Fabrics', '200', 40, '2024-04-11 22:04:22', '2024-04-11 22:04:22'),
(12, 'Silk Cotton', '300', 20, '2024-04-11 22:09:31', '2024-04-11 22:09:31'),
(13, 'Silk Cotton', '300', 20, '2024-04-11 22:11:15', '2024-04-11 22:11:15'),
(14, 'Texture cotton', '2', 3, '2024-04-11 22:15:59', '2024-04-11 22:15:59'),
(15, 'Woven texture', '2', 40, '2024-04-11 22:17:27', '2024-04-11 22:17:27');

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
(3, 7, '1', 1, '2024-04-07 23:36:15', '2024-04-07 23:36:15'),
(4, 8, '199', 300, '2024-04-11 04:29:22', '2024-04-11 04:29:22'),
(5, 8, '100', 1, '2024-04-11 04:30:03', '2024-04-11 04:30:03'),
(6, 9, '100', 200, '2024-04-11 19:20:22', '2024-04-11 19:20:22'),
(7, 10, '10', 100, '2024-04-11 19:26:43', '2024-04-11 19:26:43'),
(8, 1, '5', 10, '2024-04-11 19:30:22', '2024-04-11 19:30:22'),
(9, 10, '5', 20, '2024-04-11 19:31:31', '2024-04-11 19:31:31'),
(10, 10, '1', 1, '2024-04-11 19:41:11', '2024-04-11 19:41:11'),
(11, 11, '200', 40, '2024-04-11 22:04:22', '2024-04-11 22:04:22'),
(12, 12, '300', 20, '2024-04-11 22:09:31', '2024-04-11 22:09:31'),
(13, 13, '300', 20, '2024-04-11 22:11:15', '2024-04-11 22:11:15'),
(14, 14, '2', 3, '2024-04-11 22:15:59', '2024-04-11 22:15:59'),
(15, 15, '2', 40, '2024-04-11 22:17:27', '2024-04-11 22:17:27');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `deducts`
--
ALTER TABLE `deducts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
