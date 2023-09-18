/*
  Warnings:

  - The primary key for the `DuelistsCards` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rank` on the `DuelistsCards` table. All the data in the column will be lost.
  - You are about to drop the column `rankType` on the `DuelistsCards` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `DuelistsCards` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `ranks` to the `DuelistsCards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DuelistsCards` DROP PRIMARY KEY,
    DROP COLUMN `rank`,
    DROP COLUMN `rankType`,
    ADD COLUMN `ranks` JSON NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
