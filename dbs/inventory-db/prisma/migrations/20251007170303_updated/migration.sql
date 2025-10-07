/*
  Warnings:

  - You are about to alter the column `price` on the `Price` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `cost` on the `Price` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `supplierCost` on the `Supplier` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "public"."Price" ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "cost" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "public"."Supplier" ALTER COLUMN "supplierCost" SET DATA TYPE DECIMAL(10,2);
