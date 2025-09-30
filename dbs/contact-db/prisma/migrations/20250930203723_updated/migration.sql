-- CreateEnum
CREATE TYPE "public"."ContactType" AS ENUM ('WORK', 'HOME', 'PRIMARY');

-- CreateTable
CREATE TABLE "public"."Industry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Org" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,

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
CREATE TABLE "public"."Agent" (
    "id" SERIAL NOT NULL,
    "orgId" INTEGER,
    "firstName" TEXT,
    "middleName" TEXT,
    "lastName" TEXT,
    "occupation" TEXT,
    "gender" TEXT,
    "phoneNumber" TEXT,
    "note" TEXT,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "agentId" INTEGER NOT NULL,
    "uuid" TEXT NOT NULL,
    "order" INTEGER,
    "type" "public"."ContactType" NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Email" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "order" INTEGER,
    "email" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Phone" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "order" INTEGER,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "order" INTEGER,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Website" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "order" INTEGER,
    "url" TEXT NOT NULL,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Industry_name_key" ON "public"."Industry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Org_name_key" ON "public"."Org"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OrgIndustry_orgId_industryId_key" ON "public"."OrgIndustry"("orgId", "industryId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_uuid_key" ON "public"."Contact"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Email_email_key" ON "public"."Email"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_phone_key" ON "public"."Phone"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Website_url_key" ON "public"."Website"("url");

-- AddForeignKey
ALTER TABLE "public"."OrgIndustry" ADD CONSTRAINT "OrgIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "public"."Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrgIndustry" ADD CONSTRAINT "OrgIndustry_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Agent" ADD CONSTRAINT "Agent_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Org"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "public"."Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Email" ADD CONSTRAINT "Email_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Phone" ADD CONSTRAINT "Phone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Website" ADD CONSTRAINT "Website_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
