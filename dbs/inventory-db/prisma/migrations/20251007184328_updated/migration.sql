/*
  Warnings:

  - The values [PERCENT,FIXED_AMOUNT,BOGO] on the enum `DiscountType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `maxUses` on the `Discount` table. All the data in the column will be lost.
  - You are about to alter the column `value` on the `Discount` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - A unique constraint covering the columns `[discountId,productId,variantId,storeId,priceLevelId,categoryId]` on the table `DiscountTarget` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `valueType` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."DiscountValueType" AS ENUM ('PERCENT', 'FIXED');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."DiscountType_new" AS ENUM ('SIMPLE', 'VOLUME', 'FREE_SHIPPING', 'ORDER_TOTAL');
ALTER TABLE "public"."Discount" ALTER COLUMN "type" TYPE "public"."DiscountType_new" USING ("type"::text::"public"."DiscountType_new");
ALTER TYPE "public"."DiscountType" RENAME TO "DiscountType_old";
ALTER TYPE "public"."DiscountType_new" RENAME TO "DiscountType";
DROP TYPE "public"."DiscountType_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."Discount" DROP COLUMN "maxUses",
ADD COLUMN     "maxOrderTotal" DECIMAL(10,2),
ADD COLUMN     "maxQuantity" INTEGER,
ADD COLUMN     "minOrderTotal" DECIMAL(10,2),
ADD COLUMN     "usageCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "usageLimit" INTEGER,
ADD COLUMN     "valueType" "public"."DiscountValueType" NOT NULL,
ALTER COLUMN "value" DROP NOT NULL,
ALTER COLUMN "value" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."DiscountTarget" ADD COLUMN     "categoryId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "DiscountTarget_discountId_productId_variantId_storeId_price_key" ON "public"."DiscountTarget"("discountId", "productId", "variantId", "storeId", "priceLevelId", "categoryId");

-- AddForeignKey
ALTER TABLE "public"."DiscountTarget" ADD CONSTRAINT "DiscountTarget_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
