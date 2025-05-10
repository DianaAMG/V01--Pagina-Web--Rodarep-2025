/*
  Warnings:

  - You are about to drop the column `message` on the `bearing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bearing" DROP COLUMN "message";

-- AlterTable
ALTER TABLE "user_contact" ADD COLUMN     "message" TEXT;
