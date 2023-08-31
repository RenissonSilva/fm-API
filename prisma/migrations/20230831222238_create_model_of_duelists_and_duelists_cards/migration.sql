-- CreateTable
CREATE TABLE "Duelists" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DuelistsCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rank" TEXT NOT NULL,
    "rankType" TEXT NOT NULL,
    "dropChance" REAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "duelistId" INTEGER NOT NULL,
    CONSTRAINT "DuelistsCards_duelistId_fkey" FOREIGN KEY ("duelistId") REFERENCES "Duelists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DuelistsCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
