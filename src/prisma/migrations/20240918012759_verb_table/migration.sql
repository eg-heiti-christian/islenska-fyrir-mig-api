/*
  Warnings:

  - You are about to drop the column `pluralFirstPerson` on the `Verb` table. All the data in the column will be lost.
  - You are about to drop the column `pluralSecondPerson` on the `Verb` table. All the data in the column will be lost.
  - You are about to drop the column `pluralThirdPerson` on the `Verb` table. All the data in the column will be lost.
  - You are about to drop the column `singularFirstPerson` on the `Verb` table. All the data in the column will be lost.
  - You are about to drop the column `singularSecondPerson` on the `Verb` table. All the data in the column will be lost.
  - You are about to drop the column `singularThirdPerson` on the `Verb` table. All the data in the column will be lost.
  - Added the required column `nominative` to the `Verb` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "VerbPresentTense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "verbId" INTEGER NOT NULL,
    "singularFirstPerson" TEXT NOT NULL,
    "singularSecondPerson" TEXT NOT NULL,
    "singularThirdPerson" TEXT NOT NULL,
    "pluralFirstPerson" TEXT NOT NULL,
    "pluralSecondPerson" TEXT NOT NULL,
    "pluralThirdPerson" TEXT NOT NULL,
    CONSTRAINT "VerbPresentTense_verbId_fkey" FOREIGN KEY ("verbId") REFERENCES "Verb" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Verb" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nominative" TEXT NOT NULL
);
INSERT INTO "new_Verb" ("id") SELECT "id" FROM "Verb";
DROP TABLE "Verb";
ALTER TABLE "new_Verb" RENAME TO "Verb";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "VerbPresentTense_verbId_key" ON "VerbPresentTense"("verbId");
