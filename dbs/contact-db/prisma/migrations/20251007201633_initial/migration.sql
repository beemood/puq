-- CreateEnum
CREATE TYPE "public"."ContactType" AS ENUM ('WORK', 'HOME');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "public"."Industry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT DEFAULT 'No description',

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Org" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrgIndustry" (
    "id" SERIAL NOT NULL,
    "orgId" INTEGER NOT NULL,
    "industryId" INTEGER NOT NULL,

    CONSTRAINT "OrgIndustry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Occupation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT DEFAULT 'No description',

    CONSTRAINT "Occupation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Agent" (
    "id" SERIAL NOT NULL,
    "orgId" INTEGER,
    "occupationId" INTEGER,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "gender" "public"."Gender",
    "slug" TEXT NOT NULL,
    "note" TEXT,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "agentId" INTEGER NOT NULL,
    "type" "public"."ContactType" NOT NULL,
    "order" INTEGER DEFAULT 0,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."State" (
    "id" SERIAL NOT NULL,
    "countryId" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."City" (
    "id" SERIAL NOT NULL,
    "stateId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "order" INTEGER,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Email" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "order" INTEGER,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Phone" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "order" INTEGER,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Website" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Industry_name_key" ON "public"."Industry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_slug_key" ON "public"."Industry"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Org_name_key" ON "public"."Org"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Org_slug_key" ON "public"."Org"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "OrgIndustry_orgId_industryId_key" ON "public"."OrgIndustry"("orgId", "industryId");

-- CreateIndex
CREATE UNIQUE INDEX "Occupation_name_key" ON "public"."Occupation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Occupation_slug_key" ON "public"."Occupation"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_slug_key" ON "public"."Agent"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_uuid_key" ON "public"."Contact"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_agentId_order_key" ON "public"."Contact"("agentId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "State_state_key" ON "public"."State"("state");

-- CreateIndex
CREATE UNIQUE INDEX "State_code_key" ON "public"."State"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "public"."Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "public"."Country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "City_stateId_name_key" ON "public"."City"("stateId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Address_contactId_cityId_street_key" ON "public"."Address"("contactId", "cityId", "street");

-- CreateIndex
CREATE UNIQUE INDEX "Email_contactId_email_key" ON "public"."Email"("contactId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_contactId_phone_key" ON "public"."Phone"("contactId", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "Website_contactId_url_key" ON "public"."Website"("contactId", "url");

-- AddForeignKey
ALTER TABLE "public"."OrgIndustry" ADD CONSTRAINT "OrgIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "public"."Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrgIndustry" ADD CONSTRAINT "OrgIndustry_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Org"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES "public"."Occupation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "public"."Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."State" ADD CONSTRAINT "State_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Email" ADD CONSTRAINT "Email_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Phone" ADD CONSTRAINT "Phone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Website" ADD CONSTRAINT "Website_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
