-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type_id" INTEGER,
    "card_type_id" INTEGER NOT NULL,
    "main_guardian_type_id" INTEGER,
    "secondary_guardian_type_id" INTEGER,
    "level" INTEGER,
    "atk" INTEGER,
    "def" INTEGER,
    "password" TEXT,
    "star_chip_cost" INTEGER,
    "fmr_number" INTEGER NOT NULL,
    CONSTRAINT "Card_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_card_type_id_fkey" FOREIGN KEY ("card_type_id") REFERENCES "CardType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Card_main_guardian_type_id_fkey" FOREIGN KEY ("main_guardian_type_id") REFERENCES "GuardianStars" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_secondary_guardian_type_id_fkey" FOREIGN KEY ("secondary_guardian_type_id") REFERENCES "GuardianStars" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Card" ("atk", "card_type_id", "def", "fmr_number", "id", "level", "main_guardian_type_id", "name", "password", "secondary_guardian_type_id", "star_chip_cost", "type_id") SELECT "atk", "card_type_id", "def", "fmr_number", "id", "level", "main_guardian_type_id", "name", "password", "secondary_guardian_type_id", "star_chip_cost", "type_id" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
