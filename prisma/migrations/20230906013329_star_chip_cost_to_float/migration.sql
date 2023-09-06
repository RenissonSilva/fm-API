/*
  Warnings:

  - You are about to alter the column `star_chip_cost` on the `Card` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Card` MODIFY `star_chip_cost` DOUBLE NULL;
