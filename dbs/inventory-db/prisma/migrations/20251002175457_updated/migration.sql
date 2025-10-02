/*
  Warnings:

  - A unique constraint covering the columns `[name,slug]` on the table `PriceLevel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `PriceLevel` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."PriceLevel_name_key";

-- AlterTable
ALTER TABLE "public"."PriceLevel" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PriceLevel_name_slug_key" ON "public"."PriceLevel"("name", "slug");
