/*
  Warnings:

  - You are about to alter the column `taxrate` on the `PriceLevel` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,4)`.

*/
-- AlterTable
ALTER TABLE "public"."PriceLevel" ALTER COLUMN "taxrate" SET DATA TYPE DECIMAL(10,4);
