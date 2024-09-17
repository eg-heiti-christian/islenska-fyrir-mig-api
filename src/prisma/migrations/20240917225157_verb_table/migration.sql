-- CreateTable
CREATE TABLE "Verb" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "singularFirstPerson" TEXT NOT NULL,
    "singularSecondPerson" TEXT NOT NULL,
    "singularThirdPerson" TEXT NOT NULL,
    "pluralFirstPerson" TEXT NOT NULL,
    "pluralSecondPerson" TEXT NOT NULL,
    "pluralThirdPerson" TEXT NOT NULL
);
