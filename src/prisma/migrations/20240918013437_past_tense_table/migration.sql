-- CreateTable
CREATE TABLE "VerbPastTense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "verbId" INTEGER NOT NULL,
    "singularFirstPerson" TEXT NOT NULL,
    "singularSecondPerson" TEXT NOT NULL,
    "singularThirdPerson" TEXT NOT NULL,
    "pluralFirstPerson" TEXT NOT NULL,
    "pluralSecondPerson" TEXT NOT NULL,
    "pluralThirdPerson" TEXT NOT NULL,
    CONSTRAINT "VerbPastTense_verbId_fkey" FOREIGN KEY ("verbId") REFERENCES "Verb" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "VerbPastTense_verbId_key" ON "VerbPastTense"("verbId");
