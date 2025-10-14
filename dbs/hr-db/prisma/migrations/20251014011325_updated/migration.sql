-- CreateEnum
CREATE TYPE "public"."ContactType" AS ENUM ('RESIDENCE_ADDRESS', 'WORK', 'EMERGENCY', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('SINGLE', 'MARRIED');

-- CreateEnum
CREATE TYPE "public"."TaxFilingStatus" AS ENUM ('SINGLE', 'MARRIED_FILING_JOINTLY', 'MARRIED_FILING_SEPARATELY', 'HEAD_OF_HOUSEHOLD', 'QUALIFYING_WIDOW');

-- CreateEnum
CREATE TYPE "public"."DeductionType" AS ENUM ('STATUTORY_PRE_TAX', 'NON_STATUTORY_PRE_TAX', 'POST_TAX', 'GARNISHMENT');

-- CreateEnum
CREATE TYPE "public"."EmployeeStatus" AS ENUM ('INCOMMING', 'ACTIVE', 'INACTIVE', 'LEFT', 'TERMINATED');

-- CreateEnum
CREATE TYPE "public"."EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACTOR', 'INTERN');

-- CreateEnum
CREATE TYPE "public"."PayFrequency" AS ENUM ('ANNUAL', 'MONTHLY', 'BI_WEEKLY', 'WEEKLY', 'HOURLY');

-- CreateEnum
CREATE TYPE "public"."TitleChangeType" AS ENUM ('PROMOTION', 'TRANSFER', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELED');

-- CreateEnum
CREATE TYPE "public"."BenefitStatus" AS ENUM ('ACTIVE', 'PENDING', 'AWAITING_EOI', 'WAIVED', 'ENROLLED');

-- CreateEnum
CREATE TYPE "public"."PayrollStatus" AS ENUM ('DRAFT', 'CALCULATED', 'APPROVED', 'PAID', 'CLOSED');

-- CreateEnum
CREATE TYPE "public"."TimeOffTransactionType" AS ENUM ('ACCRUAL', 'USED_REQUEST', 'ROLLOVER', 'ADJUSTMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."EarningType" AS ENUM ('REGULAR', 'BONUS', 'OVERTIME', 'OTHER');

-- CreateTable
CREATE TABLE "public"."Department" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Title" (
    "id" SERIAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT DEFAULT 'No Description',
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PersonalData" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "ein" TEXT NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "dob" DATE NOT NULL,
    "maritalStatus" "public"."MaritalStatus" NOT NULL,

    CONSTRAINT "PersonalData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employee" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "titleId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "preferedName" TEXT,
    "status" "public"."EmployeeStatus" NOT NULL DEFAULT 'INCOMMING',
    "hireDate" TIMESTAMP(3),
    "terminationDate" TIMESTAMP(3),
    "employmentType" "public"."EmploymentType" NOT NULL,
    "directManagerId" INTEGER,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TeamManager" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "managerId" INTEGER NOT NULL,

    CONSTRAINT "TeamManager_pkey" PRIMARY KEY ("id")
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
    "gross" DECIMAL(10,2) NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "frequency" "public"."PayFrequency" NOT NULL,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SalaryHistory" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "benefitId" INTEGER NOT NULL,
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
    "description" TEXT DEFAULT 'No description',
    "accrualRate" DECIMAL(8,2) NOT NULL,
    "maxRollover" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "TimeOffPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffBalance" (
    "id" SERIAL NOT NULL,
    "policyId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "accruedHours" DECIMAL(8,2) NOT NULL,
    "usedHours" DECIMAL(8,2) NOT NULL,
    "availableHours" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "TimeOffBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffRequest" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employeeId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "policyId" INTEGER NOT NULL,
    "resolverId" INTEGER,
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,

    CONSTRAINT "TimeOffRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TimeOffTransaction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "public"."TimeOffTransactionType" NOT NULL,
    "balanceId" INTEGER NOT NULL,
    "requestId" INTEGER,
    "amount" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "TimeOffTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClockIn" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "clockIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clockOut" TIMESTAMP(3),

    CONSTRAINT "ClockIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Paycheck" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payrollRunId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "grossAmount" DECIMAL(10,2) NOT NULL,
    "netAmount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Paycheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Earning" (
    "id" SERIAL NOT NULL,
    "type" "public"."EarningType" NOT NULL,
    "hours" DECIMAL(65,30),
    "rate" DECIMAL(65,30) NOT NULL,
    "amount" DECIMAL(20,2) NOT NULL,
    "paycheckId" INTEGER NOT NULL,

    CONSTRAINT "Earning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaycheckTax" (
    "id" SERIAL NOT NULL,
    "paycheckId" INTEGER NOT NULL,
    "taxAuthority" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "PaycheckTax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DeductionPolicy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."DeductionType" NOT NULL,
    "defaultAmount" DECIMAL(10,2),
    "defaultPercent" DECIMAL(65,30),

    CONSTRAINT "DeductionPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmployeeDeduction" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "policyId" INTEGER NOT NULL,
    "employeeAmount" DECIMAL(10,2),

    CONSTRAINT "EmployeeDeduction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaycheckDeduction" (
    "id" SERIAL NOT NULL,
    "paycheckId" INTEGER NOT NULL,
    "employeeDeductionId" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "PaycheckDeduction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmployeeTaxData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "employeeId" INTEGER NOT NULL,
    "federalStatus" "public"."TaxFilingStatus" NOT NULL DEFAULT 'SINGLE',
    "dependentsCredit" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "multipleJobs" BOOLEAN NOT NULL DEFAULT false,
    "otherIncome" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "deductionsAmount" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "extraWithholding" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "isExempt" BOOLEAN NOT NULL DEFAULT false,
    "isNonResidentAlien" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EmployeeTaxData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StateTaxWithholding" (
    "id" SERIAL NOT NULL,
    "taxDataId" INTEGER NOT NULL,
    "stateCode" TEXT NOT NULL,
    "stateStatus" TEXT,
    "allowances" INTEGER NOT NULL DEFAULT 0,
    "extraWithholding" DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    CONSTRAINT "StateTaxWithholding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LocalTaxWithholding" (
    "id" SERIAL NOT NULL,
    "taxDataId" INTEGER NOT NULL,
    "jurisdiction" TEXT NOT NULL,
    "localStatus" TEXT,
    "extraWithholding" DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    CONSTRAINT "LocalTaxWithholding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PayrollRun" (
    "id" SERIAL NOT NULL,
    "resolverId" INTEGER NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "payDate" DATE NOT NULL,
    "status" "public"."PayrollStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "PayrollRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."State" (
    "id" SERIAL NOT NULL,
    "countryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" SERIAL NOT NULL,
    "type" "public"."ContactType" NOT NULL,
    "contactId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Email" (
    "id" SERIAL NOT NULL,
    "type" "public"."ContactType" NOT NULL,
    "contactId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Phone" (
    "id" SERIAL NOT NULL,
    "type" "public"."ContactType" NOT NULL,
    "contactId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PrimaryEmail" (
    "id" SERIAL NOT NULL,
    "emailId" INTEGER NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "PrimaryEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PrimaryPhone" (
    "id" SERIAL NOT NULL,
    "phoneId" INTEGER NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "PrimaryPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PrimaryAddress" (
    "id" SERIAL NOT NULL,
    "addressId" INTEGER NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "PrimaryAddress_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "PersonalData_employeeId_key" ON "public"."PersonalData"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_uuid_key" ON "public"."Employee"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "public"."Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TeamManager_teamId_managerId_key" ON "public"."TeamManager"("teamId", "managerId");

-- CreateIndex
CREATE UNIQUE INDEX "Salary_employeeId_key" ON "public"."Salary"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Benefit_name_key" ON "public"."Benefit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BenefitEnrolment_benefitId_employeeId_key" ON "public"."BenefitEnrolment"("benefitId", "employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "TitleHistory_employeeId_startDate_key" ON "public"."TitleHistory"("employeeId", "startDate");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffPolicy_name_key" ON "public"."TimeOffPolicy"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TimeOffBalance_employeeId_policyId_key" ON "public"."TimeOffBalance"("employeeId", "policyId");

-- CreateIndex
CREATE UNIQUE INDEX "ClockIn_employeeId_clockIn_key" ON "public"."ClockIn"("employeeId", "clockIn");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeTaxData_employeeId_createdAt_key" ON "public"."EmployeeTaxData"("employeeId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "StateTaxWithholding_taxDataId_stateCode_key" ON "public"."StateTaxWithholding"("taxDataId", "stateCode");

-- CreateIndex
CREATE UNIQUE INDEX "LocalTaxWithholding_taxDataId_jurisdiction_key" ON "public"."LocalTaxWithholding"("taxDataId", "jurisdiction");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_employeeId_key" ON "public"."Contact"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "State_countryId_name_key" ON "public"."State"("countryId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Address_contactId_street_city_stateId_zip_key" ON "public"."Address"("contactId", "street", "city", "stateId", "zip");

-- CreateIndex
CREATE UNIQUE INDEX "Email_contactId_email_key" ON "public"."Email"("contactId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_contactId_phone_key" ON "public"."Phone"("contactId", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryEmail_emailId_key" ON "public"."PrimaryEmail"("emailId");

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryEmail_contactId_key" ON "public"."PrimaryEmail"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryPhone_phoneId_key" ON "public"."PrimaryPhone"("phoneId");

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryPhone_contactId_key" ON "public"."PrimaryPhone"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryAddress_addressId_key" ON "public"."PrimaryAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryAddress_contactId_key" ON "public"."PrimaryAddress"("contactId");

-- AddForeignKey
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Title" ADD CONSTRAINT "Title_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PersonalData" ADD CONSTRAINT "PersonalData_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "public"."Title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_directManagerId_fkey" FOREIGN KEY ("directManagerId") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamManager" ADD CONSTRAINT "TeamManager_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamManager" ADD CONSTRAINT "TeamManager_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamMember" ADD CONSTRAINT "TeamMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamMember" ADD CONSTRAINT "TeamMember_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Salary" ADD CONSTRAINT "Salary_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SalaryHistory" ADD CONSTRAINT "SalaryHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BenefitEnrolment" ADD CONSTRAINT "BenefitEnrolment_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "public"."Benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "public"."Paycheck" ADD CONSTRAINT "Paycheck_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Paycheck" ADD CONSTRAINT "Paycheck_payrollRunId_fkey" FOREIGN KEY ("payrollRunId") REFERENCES "public"."PayrollRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Earning" ADD CONSTRAINT "Earning_paycheckId_fkey" FOREIGN KEY ("paycheckId") REFERENCES "public"."Paycheck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaycheckTax" ADD CONSTRAINT "PaycheckTax_paycheckId_fkey" FOREIGN KEY ("paycheckId") REFERENCES "public"."Paycheck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeDeduction" ADD CONSTRAINT "EmployeeDeduction_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeDeduction" ADD CONSTRAINT "EmployeeDeduction_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "public"."DeductionPolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaycheckDeduction" ADD CONSTRAINT "PaycheckDeduction_paycheckId_fkey" FOREIGN KEY ("paycheckId") REFERENCES "public"."Paycheck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaycheckDeduction" ADD CONSTRAINT "PaycheckDeduction_employeeDeductionId_fkey" FOREIGN KEY ("employeeDeductionId") REFERENCES "public"."EmployeeDeduction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmployeeTaxData" ADD CONSTRAINT "EmployeeTaxData_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StateTaxWithholding" ADD CONSTRAINT "StateTaxWithholding_taxDataId_fkey" FOREIGN KEY ("taxDataId") REFERENCES "public"."EmployeeTaxData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LocalTaxWithholding" ADD CONSTRAINT "LocalTaxWithholding_taxDataId_fkey" FOREIGN KEY ("taxDataId") REFERENCES "public"."EmployeeTaxData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PayrollRun" ADD CONSTRAINT "PayrollRun_resolverId_fkey" FOREIGN KEY ("resolverId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."State" ADD CONSTRAINT "State_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "public"."State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Email" ADD CONSTRAINT "Email_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Phone" ADD CONSTRAINT "Phone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrimaryEmail" ADD CONSTRAINT "PrimaryEmail_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "public"."Email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrimaryEmail" ADD CONSTRAINT "PrimaryEmail_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrimaryPhone" ADD CONSTRAINT "PrimaryPhone_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "public"."Phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrimaryPhone" ADD CONSTRAINT "PrimaryPhone_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrimaryAddress" ADD CONSTRAINT "PrimaryAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrimaryAddress" ADD CONSTRAINT "PrimaryAddress_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
