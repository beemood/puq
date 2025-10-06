/*
  Warnings:

  - You are about to drop the column `unitId` on the `AttributeValue` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[attributeId,variantId]` on the table `AttributeValue` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `attributeId` to the `AttributeValue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."AttributeValue" DROP CONSTRAINT "AttributeValue_unitId_fkey";

-- AlterTable
ALTER TABLE "public"."AttributeValue" DROP COLUMN "unitId",
ADD COLUMN     "attributeId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AttributeValue_attributeId_variantId_key" ON "public"."AttributeValue"("attributeId", "variantId");

-- AddForeignKey
ALTER TABLE "public"."AttributeValue" ADD CONSTRAINT "AttributeValue_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "public"."Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
