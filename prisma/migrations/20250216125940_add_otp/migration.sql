/*
  Warnings:

  - You are about to drop the column `verificationToken` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verificationTokenExpires` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_verificationToken_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "verificationToken",
DROP COLUMN "verificationTokenExpires",
ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpires" TIMESTAMP(3);
