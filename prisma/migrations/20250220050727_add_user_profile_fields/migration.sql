-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "full_name" VARCHAR(150),
ADD COLUMN     "interests" JSONB,
ADD COLUMN     "mobile_number" VARCHAR(20),
ADD COLUMN     "socials" JSONB;
