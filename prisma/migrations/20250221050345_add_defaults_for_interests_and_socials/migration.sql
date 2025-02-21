/*
  Warnings:

  - Made the column `interests` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `socials` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "interests" SET NOT NULL,
ALTER COLUMN "interests" SET DEFAULT '[]',
ALTER COLUMN "socials" SET NOT NULL,
ALTER COLUMN "socials" SET DEFAULT '{}';
