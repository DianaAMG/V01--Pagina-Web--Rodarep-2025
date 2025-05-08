/*
  Warnings:

  - The primary key for the `bearing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `bearing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `user_contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `user_contact` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "bearing" DROP CONSTRAINT "bearing_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "bearing_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user_contact" DROP CONSTRAINT "user_contact_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "user_contact_pkey" PRIMARY KEY ("id");
