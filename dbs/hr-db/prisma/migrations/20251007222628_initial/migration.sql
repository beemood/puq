-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('SINGLE', 'MARRIED');

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PENDING', 'PAID', 'DELAYED');

-- CreateEnum
CREATE TYPE "public"."PaymentType" AS ENUM ('HANDED_CHECK', 'HANDED_CACHE', 'MAILED_CHECK', 'MAILED_CACHE', 'DIRECT_DEPOSIT', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."EmployeeStatus" AS ENUM ('INCOMMING', 'ACTIVE', 'INACTIVE', 'LEFT', 'TERMINATED');

-- CreateEnum
CREATE TYPE "public"."EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACTOR', 'INTERN');

-- CreateEnum
CREATE TYPE "public"."PayFrequency" AS ENUM ('ANNUAL', 'MONTHLY', 'BI_WEEKLY', 'WEEKLY', 'HOURLY');

-- CreateEnum
CREATE TYPE "public"."TitleChangeType" AS ENUM ('PROMOTION', 'TRANSFER');

-- CreateEnum
CREATE TYPE "public"."TimeOffType" AS ENUM ('VACATION', 'SICK', 'PERSONAL', 'BEREAVEMENT');

-- CreateEnum
CREATE TYPE "public"."RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELED');

-- CreateEnum
CREATE TYPE "public"."BenefitStatus" AS ENUM ('ACTIVE', 'PENDING', 'AWAITING_EOI', 'WAIVED', 'ENROLLED');

-- CreateTable
CREATE TABLE "public"."Department" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Title" (
    "id" SERIAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT DEFAULT 'No Description',

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employee" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "titleId" INTEGER NOT NULL,
    "status" "public"."EmployeeStatus" NOT NULL DEFAULT 'INCOMMING',

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Team" (
    "id" SERIAL NOT NULL,
    "managerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TeamMember" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Salary" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "salary" DECIMAL(10,2) NOT NULL,
    "frequency" "public"."PayFrequency" NOT NULL,
    "lastReviewDate" TIMESTAMP(3),

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SalaryHistory" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "changeDate" TIMESTAMP(3) NOT NULL,
    "oldSalary" DECIMAL(10,2) NOT NULL,
    "newSalary" DECIMAL(10,2) NOT NULL,
    "reason" TEXT,

    CONSTRAINT "SalaryHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Benefit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT 'No Description',
    "type" TEXT,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BenefitEnrolment" (
    "id" SERIAL NOT NULL,
    "bid" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "status" "public"."BenefitStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "BenefitEnrolment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TitleHistory" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "titleId" INTEGER NOT NULL,
    "type" "public"."TitleChangeType" NOT NULL,
    "reason" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "TitleHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffPolicy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."TimeOffType" NOT NULL,
    "accrualRate" DECIMAL(4,2) NOT NULL,
    "maxRollover" DECIMAL(5,2) NOT NULL,
    "description" TEXT DEFAULT 'No description',

    CONSTRAINT "TimeOffPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffBalance" (
    "id" SERIAL NOT NULL,
    "policyId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "accruedHours" DECIMAL(5,2) NOT NULL,
    "usedHours" DECIMAL(5,2) NOT NULL,
    "availableHours" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "TimeOffBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffRequest" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "policyId" INTEGER NOT NULL,
    "resolverId" INTEGER,
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimeOffRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffTransaction" (
    "id" SERIAL NOT NULL,
    "balanceId" INTEGER NOT NULL,
    "requestId" INTEGER,
    "amount" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "TimeOffTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClockIn" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "paymentId" INTEGER,
    "clockIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clockOut" TIMESTAMP(3),

    CONSTRAINT "ClockIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Payment" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "resolverId" INTEGER NOT NULL,
    "type" "public"."PaymentType" NOT NULL,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "public"."Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_slug_key" ON "public"."Department"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Title_name_key" ON "public"."Title"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Title_slug_key" ON "public"."Title"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_uuid_key" ON "public"."Employee"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "public"."Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Salary_employeeId_key" ON "public"."Salary"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Benefit_name_key" ON "public"."Benefit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BenefitEnrolment_bid_employeeId_key" ON "public"."BenefitEnrolment"("bid", "employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "TitleHistory_employeeId_startDate_key" ON "public"."TitleHistory"("employeeId", "startDate");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffPolicy_name_key" ON "public"."TimeOffPolicy"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffBalance_employeeId_policyId_key" ON "public"."TimeOffBalance"("employeeId", "policyId");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffTransaction_requestId_key" ON "public"."TimeOffTransaction"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "ClockIn_employeeId_clockIn_key" ON "public"."ClockIn"("employeeId", "clockIn");

-- AddForeignKey
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Title" ADD CONSTRAINT "Title_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "public"."Title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Team" ADD CONSTRAINT "Team_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamMember" ADD CONSTRAINT "TeamMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamMember" ADD CONSTRAINT "TeamMember_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Salary" ADD CONSTRAINT "Salary_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SalaryHistory" ADD CONSTRAINT "SalaryHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BenefitEnrolment" ADD CONSTRAINT "BenefitEnrolment_bid_fkey" FOREIGN KEY ("bid") REFERENCES "public"."Benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BenefitEnrolment" ADD CONSTRAINT "BenefitEnrolment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TitleHistory" ADD CONSTRAINT "TitleHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TitleHistory" ADD CONSTRAINT "TitleHistory_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "public"."Title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffBalance" ADD CONSTRAINT "TimeOffBalance_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "public"."TimeOffPolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffBalance" ADD CONSTRAINT "TimeOffBalance_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffRequest" ADD CONSTRAINT "TimeOffRequest_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffRequest" ADD CONSTRAINT "TimeOffRequest_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "public"."TimeOffPolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffRequest" ADD CONSTRAINT "TimeOffRequest_resolverId_fkey" FOREIGN KEY ("resolverId") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffTransaction" ADD CONSTRAINT "TimeOffTransaction_balanceId_fkey" FOREIGN KEY ("balanceId") REFERENCES "public"."TimeOffBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffTransaction" ADD CONSTRAINT "TimeOffTransaction_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "public"."TimeOffRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClockIn" ADD CONSTRAINT "ClockIn_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClockIn" ADD CONSTRAINT "ClockIn_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "public"."Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_resolverId_fkey" FOREIGN KEY ("resolverId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
