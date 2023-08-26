-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type_id" INTEGER,
    "card_type_id" INTEGER NOT NULL,
    "main_guardian_type_id" INTEGER,
    "secondary_guardian_type_id" INTEGER,
    "level" INTEGER,
    "atk" INTEGER,
    "def" INTEGER,
    "password" INTEGER,
    "star_chip_cost" INTEGER,
    "fmr_number" INTEGER NOT NULL,
    CONSTRAINT "Card_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_card_type_id_fkey" FOREIGN KEY ("card_type_id") REFERENCES "CardType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Card_main_guardian_type_id_fkey" FOREIGN KEY ("main_guardian_type_id") REFERENCES "GuardianStars" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_secondary_guardian_type_id_fkey" FOREIGN KEY ("secondary_guardian_type_id") REFERENCES "GuardianStars" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CardType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "GuardianStars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "strongAgainst" TEXT NOT NULL,
    "weakAgainst" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
