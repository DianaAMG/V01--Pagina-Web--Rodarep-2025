/*
  Warnings:

  - Made the column `code` on table `bearing` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `bearing` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `user_contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `user_contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `user_contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `user_contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bearing" ALTER COLUMN "code" SET NOT NULL,
ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_contact" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL;
