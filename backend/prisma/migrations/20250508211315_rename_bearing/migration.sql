/*
  Warnings:

  - You are about to drop the column `B__width` on the `bearing` table. All the data in the column will be lost.
  - Added the required column `b__width` to the `bearing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bearing" DROP COLUMN "B__width",
ADD COLUMN     "b__width" DOUBLE PRECISION NOT NULL;
