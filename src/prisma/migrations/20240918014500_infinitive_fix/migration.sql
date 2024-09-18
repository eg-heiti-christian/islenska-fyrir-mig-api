/*
  Warnings:

  - You are about to drop the column `nominative` on the `Verb` table. All the data in the column will be lost.
  - Added the required column `infinitive` to the `Verb` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Verb" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "infinitive" TEXT NOT NULL
);
INSERT INTO "new_Verb" ("id") SELECT "id" FROM "Verb";
DROP TABLE "Verb";
ALTER TABLE "new_Verb" RENAME TO "Verb";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
