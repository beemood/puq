/*
  Warnings:

  - A unique constraint covering the columns `[contactId,cityId,street]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Agent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Industry` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Org` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Industry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Org` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Agent" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Industry" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Org" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Address_contactId_cityId_street_key" ON "public"."Address"("contactId", "cityId", "street");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_slug_key" ON "public"."Agent"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_slug_key" ON "public"."Industry"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Org_slug_key" ON "public"."Org"("slug");
