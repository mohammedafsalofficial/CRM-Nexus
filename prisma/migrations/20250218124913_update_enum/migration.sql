-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'USER';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
