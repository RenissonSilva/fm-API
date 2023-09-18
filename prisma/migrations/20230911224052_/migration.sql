/*
  Warnings:

  - You are about to drop the `DuelistsCardsRanks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ranks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `DuelistsCardsRanks` DROP FOREIGN KEY `DuelistsCardsRanks_cardId_fkey`;

-- DropForeignKey
ALTER TABLE `DuelistsCardsRanks` DROP FOREIGN KEY `DuelistsCardsRanks_duelistCardId_fkey`;

-- DropForeignKey
ALTER TABLE `DuelistsCardsRanks` DROP FOREIGN KEY `DuelistsCardsRanks_rankId_fkey`;

-- AlterTable
ALTER TABLE `DuelistsCards` ADD COLUMN `ranks` JSON NULL;

-- DropTable
DROP TABLE `DuelistsCardsRanks`;

-- DropTable
DROP TABLE `Ranks`;
