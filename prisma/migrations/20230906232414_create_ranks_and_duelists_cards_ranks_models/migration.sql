-- CreateTable
CREATE TABLE `Ranks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DuelistsCardsRanks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `duelistCardId` INTEGER NOT NULL,
    `rankId` INTEGER NOT NULL,
    `cardId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DuelistsCardsRanks` ADD CONSTRAINT `DuelistsCardsRanks_duelistCardId_fkey` FOREIGN KEY (`duelistCardId`) REFERENCES `DuelistsCards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DuelistsCardsRanks` ADD CONSTRAINT `DuelistsCardsRanks_rankId_fkey` FOREIGN KEY (`rankId`) REFERENCES `Ranks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DuelistsCardsRanks` ADD CONSTRAINT `DuelistsCardsRanks_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
