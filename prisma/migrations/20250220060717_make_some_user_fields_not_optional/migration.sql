/*
  Warnings:

  - Made the column `bio` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `full_name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mobile_number` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "bio" SET NOT NULL,
ALTER COLUMN "full_name" SET NOT NULL,
ALTER COLUMN "mobile_number" SET NOT NULL;
