/*
  Warnings:

  - You are about to drop the column `warrantyId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `orgId` on the `Supplier` table. All the data in the column will be lost.
  - You are about to drop the column `warrantyId` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `durationDays` on the `WarrantyPolicy` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `PriceLevel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `PriceLevel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `Supplier` will be added. If there are existing duplicate values, this will fail.
  - The required column `uuid` was added to the `Supplier` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `duration` to the `WarrantyPolicy` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TimeUnit" AS ENUM ('SECOND', 'MINUTE', 'HOUR', 'DAY', 'MONTH', 'YEAR', 'DECADE');

-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_warrantyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Variant" DROP CONSTRAINT "Variant_warrantyId_fkey";

-- DropIndex
DROP INDEX "public"."PriceLevel_name_slug_key";

-- DropIndex
DROP INDEX "public"."Supplier_orgId_key";

-- AlterTable
ALTER TABLE "public"."Currency" ADD COLUMN     "symbol" TEXT;

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "warrantyId";

-- AlterTable
ALTER TABLE "public"."Supplier" DROP COLUMN "orgId",
ADD COLUMN     "uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Variant" DROP COLUMN "warrantyId";

-- AlterTable
ALTER TABLE "public"."WarrantyPolicy" DROP COLUMN "durationDays",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "durationUnit" "public"."TimeUnit" NOT NULL DEFAULT 'YEAR';

-- CreateTable
CREATE TABLE "public"."ProductWarranty" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER,
    "variantId" INTEGER,
    "policyId" INTEGER NOT NULL,

    CONSTRAINT "ProductWarranty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PriceLevel_name_key" ON "public"."PriceLevel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PriceLevel_slug_key" ON "public"."PriceLevel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_uuid_key" ON "public"."Supplier"("uuid");

-- AddForeignKey
ALTER TABLE "public"."ProductWarranty" ADD CONSTRAINT "ProductWarranty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductWarranty" ADD CONSTRAINT "ProductWarranty_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "public"."Variant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductWarranty" ADD CONSTRAINT "ProductWarranty_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "public"."WarrantyPolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
