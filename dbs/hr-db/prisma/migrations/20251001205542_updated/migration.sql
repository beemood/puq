-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('SINGLE', 'MARRIED');

-- CreateEnum
CREATE TYPE "public"."EmployeeStatus" AS ENUM ('INCOMMING', 'ACTIVE', 'INACTIVE', 'ON_LEAVE', 'TERMINATED');

-- CreateEnum
CREATE TYPE "public"."EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACTOR', 'INTERN');

-- CreateEnum
CREATE TYPE "public"."PayFrequency" AS ENUM ('ANNUAL', 'MONTHLY', 'BI_WEEKLY', 'WEEKLY', 'HOURLY');

-- CreateEnum
CREATE TYPE "public"."ContactType" AS ENUM ('WORK', 'HOME', 'PERSONAL', 'EMERGENCY');

-- CreateEnum
CREATE TYPE "public"."PositionChangeType" AS ENUM ('PROMOTION', 'TRANSFER');

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
CREATE TABLE "public"."Position" (
    "id" SERIAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employee" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "positionId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "preferedName" TEXT,
    "fullName" TEXT NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "public"."EmployeeStatus" NOT NULL DEFAULT 'INCOMMING',

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PersonalInfo" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "maritalStatus" "public"."MaritalStatus",
    "nationality" TEXT,
    "ssnLast4" TEXT,
    "note" TEXT,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "public"."Compensation" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "salary" DECIMAL(10,2) NOT NULL,
    "payFrequency" "public"."PayFrequency" NOT NULL,
    "isHourly" BOOLEAN NOT NULL,
    "lastReviewDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Compensation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CompensationHistory" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "changeDate" TIMESTAMP(3) NOT NULL,
    "oldSalary" DECIMAL(10,2) NOT NULL,
    "newSalary" DECIMAL(10,2) NOT NULL,
    "reason" TEXT,

    CONSTRAINT "CompensationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Email" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "type" "public"."ContactType",
    "email" TEXT NOT NULL,
    "order" SERIAL NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Phone" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "type" "public"."ContactType",
    "phone" TEXT NOT NULL,
    "order" SERIAL NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Benefit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BenefitEnrolment" (
    "id" SERIAL NOT NULL,
    "benefitId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "status" "public"."BenefitStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "BenefitEnrolment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PositionHistory" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "positionId" INTEGER NOT NULL,
    "type" "public"."PositionChangeType" NOT NULL,
    "justification" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "PositionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffPolicy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "timeOffType" "public"."TimeOffType" NOT NULL,
    "accrualRate" DECIMAL(4,2) NOT NULL,
    "maxRollover" DECIMAL(5,2) NOT NULL,
    "policyDetails" TEXT,

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
    "approverId" INTEGER,
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimeOffRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffTransaction" (
    "id" SERIAL NOT NULL,
    "timeOffBalanceId" INTEGER NOT NULL,
    "requestId" INTEGER,
    "amount" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "TimeOffTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReviewCycle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewCycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PerformanceReview" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "reviewerId" INTEGER NOT NULL,
    "cycleId" INTEGER NOT NULL,
    "reviewDate" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER,
    "summary" TEXT,
    "goals" TEXT,

    CONSTRAINT "PerformanceReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "public"."Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_slug_key" ON "public"."Department"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Position_name_key" ON "public"."Position"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Position_slug_key" ON "public"."Position"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_uuid_key" ON "public"."Employee"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_fullName_key" ON "public"."Employee"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_slug_key" ON "public"."Employee"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_employeeId_key" ON "public"."PersonalInfo"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "public"."Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Compensation_employeeId_key" ON "public"."Compensation"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_employeeId_key" ON "public"."Contact"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Email_contactId_email_key" ON "public"."Email"("contactId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_contactId_phone_key" ON "public"."Phone"("contactId", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "Benefit_name_key" ON "public"."Benefit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BenefitEnrolment_benefitId_employeeId_key" ON "public"."BenefitEnrolment"("benefitId", "employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "PositionHistory_employeeId_startDate_key" ON "public"."PositionHistory"("employeeId", "startDate");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffPolicy_name_key" ON "public"."TimeOffPolicy"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffBalance_employeeId_policyId_key" ON "public"."TimeOffBalance"("employeeId", "policyId");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffTransaction_requestId_key" ON "public"."TimeOffTransaction"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "ReviewCycle_name_key" ON "public"."ReviewCycle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PerformanceReview_employeeId_cycleId_key" ON "public"."PerformanceReview"("employeeId", "cycleId");

-- AddForeignKey
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Position" ADD CONSTRAINT "Position_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "public"."Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PersonalInfo" ADD CONSTRAINT "PersonalInfo_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Team" ADD CONSTRAINT "Team_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamMember" ADD CONSTRAINT "TeamMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamMember" ADD CONSTRAINT "TeamMember_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Compensation" ADD CONSTRAINT "Compensation_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CompensationHistory" ADD CONSTRAINT "CompensationHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Email" ADD CONSTRAINT "Email_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Phone" ADD CONSTRAINT "Phone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BenefitEnrolment" ADD CONSTRAINT "BenefitEnrolment_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "public"."Benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BenefitEnrolment" ADD CONSTRAINT "BenefitEnrolment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PositionHistory" ADD CONSTRAINT "PositionHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PositionHistory" ADD CONSTRAINT "PositionHistory_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "public"."Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffBalance" ADD CONSTRAINT "TimeOffBalance_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "public"."TimeOffPolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffBalance" ADD CONSTRAINT "TimeOffBalance_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffRequest" ADD CONSTRAINT "TimeOffRequest_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffRequest" ADD CONSTRAINT "TimeOffRequest_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "public"."TimeOffPolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffRequest" ADD CONSTRAINT "TimeOffRequest_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffTransaction" ADD CONSTRAINT "TimeOffTransaction_timeOffBalanceId_fkey" FOREIGN KEY ("timeOffBalanceId") REFERENCES "public"."TimeOffBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TimeOffTransaction" ADD CONSTRAINT "TimeOffTransaction_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "public"."TimeOffRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PerformanceReview" ADD CONSTRAINT "PerformanceReview_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PerformanceReview" ADD CONSTRAINT "PerformanceReview_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PerformanceReview" ADD CONSTRAINT "PerformanceReview_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "public"."ReviewCycle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
