import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const ContactTypeSchema = z.enum([
  'RESIDENCE_ADDRESS',
  'WORK',
  'EMERGENCY',
  'OTHER',
]);

export const GenderSchema = z.enum(['MALE', 'FEMALE', 'OTHER']);

export const MaritalStatusSchema = z.enum(['SINGLE', 'MARRIED']);

export const TaxFilingStatusSchema = z.enum([
  'SINGLE',
  'MARRIED_FILING_JOINTLY',
  'MARRIED_FILING_SEPARATELY',
  'HEAD_OF_HOUSEHOLD',
  'QUALIFYING_WIDOW',
]);

export const DeductionTypeSchema = z.enum([
  'STATUTORY_PRE_TAX',
  'NON_STATUTORY_PRE_TAX',
  'POST_TAX',
  'GARNISHMENT',
]);

export const EmployeeStatusSchema = z.enum([
  'INCOMMING',
  'ACTIVE',
  'INACTIVE',
  'LEFT',
  'TERMINATED',
]);

export const EmploymentTypeSchema = z.enum([
  'FULL_TIME',
  'PART_TIME',
  'CONTRACTOR',
  'INTERN',
]);

export const PayFrequencySchema = z.enum([
  'ANNUAL',
  'MONTHLY',
  'BI_WEEKLY',
  'WEEKLY',
  'HOURLY',
]);

export const TitleChangeTypeSchema = z.enum(['PROMOTION', 'TRANSFER', 'OTHER']);

export const RequestStatusSchema = z.enum([
  'PENDING',
  'APPROVED',
  'REJECTED',
  'CANCELED',
]);

export const BenefitStatusSchema = z.enum([
  'ACTIVE',
  'PENDING',
  'AWAITING_EOI',
  'WAIVED',
  'ENROLLED',
]);

export const PayrollStatusSchema = z.enum([
  'DRAFT',
  'CALCULATED',
  'APPROVED',
  'PAID',
  'CLOSED',
]);

export const TimeOffTransactionTypeSchema = z.enum([
  'ACCRUAL',
  'USED_REQUEST',
  'ROLLOVER',
  'ADJUSTMENT',
  'OTHER',
]);

export const EarningTypeSchema = z.enum([
  'REGULAR',
  'BONUS',
  'OVERTIME',
  'OTHER',
]);

export const DepartmentOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    isActive: z.boolean(),
    parent: z.boolean(),
    departments: z.boolean(),
    titles: z.boolean(),
  })
  .partial();

export const TitleOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    departmentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    isActive: z.boolean(),
    department: z.boolean(),
    employees: z.boolean(),
    histories: z.boolean(),
  })
  .partial();

export const PersonalDataOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    ein: z.boolean(),
    gender: z.boolean(),
    dob: z.boolean(),
    maritalStatus: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const EmployeeOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    titleId: z.boolean(),
    firstName: z.boolean(),
    middleName: z.boolean(),
    lastName: z.boolean(),
    preferedName: z.boolean(),
    status: z.boolean(),
    title: z.boolean(),
    hireDate: z.boolean(),
    terminationDate: z.boolean(),
    employmentType: z.boolean(),
    salary: z.boolean(),
    salaryHistory: z.boolean(),
    benefits: z.boolean(),
    titleHistory: z.boolean(),
    timeOffBalances: z.boolean(),
    timeOffRequests: z.boolean(),
    resolvedTimeOffs: z.boolean(),
    clockIns: z.boolean(),
    personalData: z.boolean(),
    taxData: z.boolean(),
    memberships: z.boolean(),
    managingTeams: z.boolean(),
    managingEmployees: z.boolean(),
    directManager: z.boolean(),
    paychecks: z.boolean(),
    directManagerId: z.boolean(),
    deductions: z.boolean(),
    resolvedPayrollRuns: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const TeamOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    members: z.boolean(),
    managers: z.boolean(),
  })
  .partial();

export const TeamManagerOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    managerId: z.boolean(),
    team: z.boolean(),
    manager: z.boolean(),
  })
  .partial();

export const TeamMemberOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    memberId: z.boolean(),
    member: z.boolean(),
    team: z.boolean(),
  })
  .partial();

export const SalaryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    gross: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    frequency: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const SalaryHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    createdAt: z.boolean(),
    oldSalary: z.boolean(),
    newSalary: z.boolean(),
    reason: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const BenefitOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    type: z.boolean(),
    enrolments: z.boolean(),
  })
  .partial();

export const BenefitEnrolmentOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    benefitId: z.boolean(),
    employeeId: z.boolean(),
    startDate: z.boolean(),
    status: z.boolean(),
    benefit: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const TitleHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    titleId: z.boolean(),
    type: z.boolean(),
    reason: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    employee: z.boolean(),
    title: z.boolean(),
  })
  .partial();

export const TimeOffPolicyOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    accrualRate: z.boolean(),
    maxRollover: z.boolean(),
    balances: z.boolean(),
    requests: z.boolean(),
  })
  .partial();

export const TimeOffBalanceOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    policyId: z.boolean(),
    employeeId: z.boolean(),
    accruedHours: z.boolean(),
    usedHours: z.boolean(),
    availableHours: z.boolean(),
    policy: z.boolean(),
    employee: z.boolean(),
    transactions: z.boolean(),
  })
  .partial();

export const TimeOffRequestOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    employeeId: z.boolean(),
    reason: z.boolean(),
    policyId: z.boolean(),
    resolverId: z.boolean(),
    status: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    employee: z.boolean(),
    policy: z.boolean(),
    resolver: z.boolean(),
    transactions: z.boolean(),
  })
  .partial();

export const TimeOffTransactionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    type: z.boolean(),
    balanceId: z.boolean(),
    requestId: z.boolean(),
    amount: z.boolean(),
    balance: z.boolean(),
    request: z.boolean(),
  })
  .partial();

export const ClockInOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    clockIn: z.boolean(),
    clockOut: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const PaycheckOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    payrollRunId: z.boolean(),
    updatedAt: z.boolean(),
    employeeId: z.boolean(),
    grossAmount: z.boolean(),
    netAmount: z.boolean(),
    employee: z.boolean(),
    earnings: z.boolean(),
    paycheckTaxes: z.boolean(),
    deductions: z.boolean(),
    payrollRun: z.boolean(),
  })
  .partial();

export const EarningOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    hours: z.boolean(),
    rate: z.boolean(),
    amount: z.boolean(),
    paycheckId: z.boolean(),
    paycheck: z.boolean(),
  })
  .partial();

export const PaycheckTaxOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    taxAuthority: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean(),
  })
  .partial();

export const DeductionPolicyOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    type: z.boolean(),
    defaultAmount: z.boolean(),
    defaultPercent: z.boolean(),
    employeeDeductions: z.boolean(),
  })
  .partial();

export const EmployeeDeductionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    policyId: z.boolean(),
    employeeAmount: z.boolean(),
    employee: z.boolean(),
    policy: z.boolean(),
    paycheckDeductions: z.boolean(),
  })
  .partial();

export const PaycheckDeductionOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    employeeDeductionId: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean(),
    employeeDeduction: z.boolean(),
  })
  .partial();

export const EmployeeTaxDataOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    employeeId: z.boolean(),
    federalStatus: z.boolean(),
    dependentsCredit: z.boolean(),
    multipleJobs: z.boolean(),
    otherIncome: z.boolean(),
    deductionsAmount: z.boolean(),
    extraWithholding: z.boolean(),
    isExempt: z.boolean(),
    isNonResidentAlien: z.boolean(),
    stateTaxes: z.boolean(),
    localTaxes: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const StateTaxWithholdingOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    taxDataId: z.boolean(),
    stateCode: z.boolean(),
    stateStatus: z.boolean(),
    allowances: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: z.boolean(),
  })
  .partial();

export const LocalTaxWithholdingOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    taxDataId: z.boolean(),
    jurisdiction: z.boolean(),
    localStatus: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: z.boolean(),
  })
  .partial();

export const PayrollRunOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    resolverId: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    payDate: z.boolean(),
    status: z.boolean(),
    approvedBy: z.boolean(),
    paychecks: z.boolean(),
  })
  .partial();

export const ContactOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    employee: z.boolean(),
    emails: z.boolean(),
    phones: z.boolean(),
    addresses: z.boolean(),
    primaryEmail: z.boolean(),
    primaryPhone: z.boolean(),
    primaryAddress: z.boolean(),
  })
  .partial();

export const CountryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean(),
  })
  .partial();

export const StateOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    country: z.boolean(),
    addresses: z.boolean(),
  })
  .partial();

export const AddressOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    stateId: z.boolean(),
    street: z.boolean(),
    zip: z.boolean(),
    city: z.boolean(),
    state: z.boolean(),
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const EmailOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const PhoneOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const PrimaryEmailOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    emailId: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryPhoneOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    phoneId: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryAddressOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    addressId: z.boolean(),
    contactId: z.boolean(),
    address: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const DepartmentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    isActive: PZ.BooleanFilterSchema,
  })
  .partial();

export const TitleOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    departmentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isActive: PZ.BooleanFilterSchema,
  })
  .partial();

export const PersonalDataOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    ein: PZ.StringFilterSchema,
    gender: GenderSchema,
    dob: PZ.DateTimeFilterSchema,
    maritalStatus: MaritalStatusSchema,
  })
  .partial();

export const EmployeeOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    titleId: PZ.IntegerFilterSchema,
    firstName: PZ.StringFilterSchema,
    middleName: PZ.StringFilterSchema,
    lastName: PZ.StringFilterSchema,
    preferedName: PZ.StringFilterSchema,
    status: EmployeeStatusSchema,
    hireDate: PZ.DateTimeFilterSchema,
    terminationDate: PZ.DateTimeFilterSchema,
    employmentType: EmploymentTypeSchema,
    directManagerId: PZ.IntegerFilterSchema,
  })
  .partial();

export const TeamOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const TeamManagerOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
    managerId: PZ.IntegerFilterSchema,
  })
  .partial();

export const TeamMemberOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
    memberId: PZ.IntegerFilterSchema,
  })
  .partial();

export const SalaryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    gross: PZ.NumberFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    frequency: PayFrequencySchema,
  })
  .partial();

export const SalaryHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    oldSalary: PZ.NumberFilterSchema,
    newSalary: PZ.NumberFilterSchema,
    reason: PZ.StringFilterSchema,
  })
  .partial();

export const BenefitOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    type: PZ.StringFilterSchema,
  })
  .partial();

export const BenefitEnrolmentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    benefitId: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    status: BenefitStatusSchema,
  })
  .partial();

export const TitleHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    titleId: PZ.IntegerFilterSchema,
    type: TitleChangeTypeSchema,
    reason: PZ.StringFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
  })
  .partial();

export const TimeOffPolicyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    accrualRate: PZ.NumberFilterSchema,
    maxRollover: PZ.NumberFilterSchema,
  })
  .partial();

export const TimeOffBalanceOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    accruedHours: PZ.NumberFilterSchema,
    usedHours: PZ.NumberFilterSchema,
    availableHours: PZ.NumberFilterSchema,
  })
  .partial();

export const TimeOffRequestOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    reason: PZ.StringFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    resolverId: PZ.IntegerFilterSchema,
    status: RequestStatusSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
  })
  .partial();

export const TimeOffTransactionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    type: TimeOffTransactionTypeSchema,
    balanceId: PZ.IntegerFilterSchema,
    requestId: PZ.IntegerFilterSchema,
    amount: PZ.NumberFilterSchema,
  })
  .partial();

export const ClockInOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    clockIn: PZ.DateTimeFilterSchema,
    clockOut: PZ.DateTimeFilterSchema,
  })
  .partial();

export const PaycheckOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    payrollRunId: PZ.IntegerFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    grossAmount: PZ.NumberFilterSchema,
    netAmount: PZ.NumberFilterSchema,
  })
  .partial();

export const EarningOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: EarningTypeSchema,
    hours: PZ.NumberFilterSchema,
    rate: PZ.NumberFilterSchema,
    amount: PZ.NumberFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PaycheckTaxOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
    taxAuthority: PZ.StringFilterSchema,
    amount: PZ.NumberFilterSchema,
  })
  .partial();

export const DeductionPolicyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    type: DeductionTypeSchema,
    defaultAmount: PZ.NumberFilterSchema,
    defaultPercent: PZ.NumberFilterSchema,
  })
  .partial();

export const EmployeeDeductionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    employeeAmount: PZ.NumberFilterSchema,
  })
  .partial();

export const PaycheckDeductionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
    employeeDeductionId: PZ.IntegerFilterSchema,
    amount: PZ.NumberFilterSchema,
  })
  .partial();

export const EmployeeTaxDataOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    federalStatus: TaxFilingStatusSchema,
    dependentsCredit: PZ.NumberFilterSchema,
    multipleJobs: PZ.BooleanFilterSchema,
    otherIncome: PZ.NumberFilterSchema,
    deductionsAmount: PZ.NumberFilterSchema,
    extraWithholding: PZ.NumberFilterSchema,
    isExempt: PZ.BooleanFilterSchema,
    isNonResidentAlien: PZ.BooleanFilterSchema,
  })
  .partial();

export const StateTaxWithholdingOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    taxDataId: PZ.IntegerFilterSchema,
    stateCode: PZ.StringFilterSchema,
    stateStatus: PZ.StringFilterSchema,
    allowances: PZ.IntegerFilterSchema,
    extraWithholding: PZ.NumberFilterSchema,
  })
  .partial();

export const LocalTaxWithholdingOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    taxDataId: PZ.IntegerFilterSchema,
    jurisdiction: PZ.StringFilterSchema,
    localStatus: PZ.StringFilterSchema,
    extraWithholding: PZ.NumberFilterSchema,
  })
  .partial();

export const PayrollRunOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    resolverId: PZ.IntegerFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    payDate: PZ.DateTimeFilterSchema,
    status: PayrollStatusSchema,
  })
  .partial();

export const ContactOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
  })
  .partial();

export const CountryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

export const StateOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    countryId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

export const AddressOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    stateId: PZ.IntegerFilterSchema,
    street: PZ.StringFilterSchema,
    zip: PZ.StringFilterSchema,
    city: PZ.StringFilterSchema,
  })
  .partial();

export const EmailOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    email: PZ.StringFilterSchema,
  })
  .partial();

export const PhoneOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    phone: PZ.StringFilterSchema,
  })
  .partial();

export const PrimaryEmailOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    emailId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PrimaryPhoneOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    phoneId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PrimaryAddressOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    addressId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
  })
  .partial();

export const DepartmentOwnQueryOneSchema = z
  .object({
    where: DepartmentOwnWhereSchema,
    select: DepartmentOwnProjectionSchema,
    omit: DepartmentOwnProjectionSchema,
  })
  .partial();

export const DepartmentOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: DepartmentOwnWhereSchema,
    select: DepartmentOwnProjectionSchema,
    omit: DepartmentOwnProjectionSchema,
  })
  .partial();

export const TitleOwnQueryOneSchema = z
  .object({
    where: TitleOwnWhereSchema,
    select: TitleOwnProjectionSchema,
    omit: TitleOwnProjectionSchema,
  })
  .partial();

export const TitleOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TitleOwnWhereSchema,
    select: TitleOwnProjectionSchema,
    omit: TitleOwnProjectionSchema,
  })
  .partial();

export const PersonalDataOwnQueryOneSchema = z
  .object({
    where: PersonalDataOwnWhereSchema,
    select: PersonalDataOwnProjectionSchema,
    omit: PersonalDataOwnProjectionSchema,
  })
  .partial();

export const PersonalDataOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PersonalDataOwnWhereSchema,
    select: PersonalDataOwnProjectionSchema,
    omit: PersonalDataOwnProjectionSchema,
  })
  .partial();

export const EmployeeOwnQueryOneSchema = z
  .object({
    where: EmployeeOwnWhereSchema,
    select: EmployeeOwnProjectionSchema,
    omit: EmployeeOwnProjectionSchema,
  })
  .partial();

export const EmployeeOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeOwnWhereSchema,
    select: EmployeeOwnProjectionSchema,
    omit: EmployeeOwnProjectionSchema,
  })
  .partial();

export const TeamOwnQueryOneSchema = z
  .object({
    where: TeamOwnWhereSchema,
    select: TeamOwnProjectionSchema,
    omit: TeamOwnProjectionSchema,
  })
  .partial();

export const TeamOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TeamOwnWhereSchema,
    select: TeamOwnProjectionSchema,
    omit: TeamOwnProjectionSchema,
  })
  .partial();

export const TeamManagerOwnQueryOneSchema = z
  .object({
    where: TeamManagerOwnWhereSchema,
    select: TeamManagerOwnProjectionSchema,
    omit: TeamManagerOwnProjectionSchema,
  })
  .partial();

export const TeamManagerOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TeamManagerOwnWhereSchema,
    select: TeamManagerOwnProjectionSchema,
    omit: TeamManagerOwnProjectionSchema,
  })
  .partial();

export const TeamMemberOwnQueryOneSchema = z
  .object({
    where: TeamMemberOwnWhereSchema,
    select: TeamMemberOwnProjectionSchema,
    omit: TeamMemberOwnProjectionSchema,
  })
  .partial();

export const TeamMemberOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TeamMemberOwnWhereSchema,
    select: TeamMemberOwnProjectionSchema,
    omit: TeamMemberOwnProjectionSchema,
  })
  .partial();

export const SalaryOwnQueryOneSchema = z
  .object({
    where: SalaryOwnWhereSchema,
    select: SalaryOwnProjectionSchema,
    omit: SalaryOwnProjectionSchema,
  })
  .partial();

export const SalaryOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SalaryOwnWhereSchema,
    select: SalaryOwnProjectionSchema,
    omit: SalaryOwnProjectionSchema,
  })
  .partial();

export const SalaryHistoryOwnQueryOneSchema = z
  .object({
    where: SalaryHistoryOwnWhereSchema,
    select: SalaryHistoryOwnProjectionSchema,
    omit: SalaryHistoryOwnProjectionSchema,
  })
  .partial();

export const SalaryHistoryOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SalaryHistoryOwnWhereSchema,
    select: SalaryHistoryOwnProjectionSchema,
    omit: SalaryHistoryOwnProjectionSchema,
  })
  .partial();

export const BenefitOwnQueryOneSchema = z
  .object({
    where: BenefitOwnWhereSchema,
    select: BenefitOwnProjectionSchema,
    omit: BenefitOwnProjectionSchema,
  })
  .partial();

export const BenefitOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: BenefitOwnWhereSchema,
    select: BenefitOwnProjectionSchema,
    omit: BenefitOwnProjectionSchema,
  })
  .partial();

export const BenefitEnrolmentOwnQueryOneSchema = z
  .object({
    where: BenefitEnrolmentOwnWhereSchema,
    select: BenefitEnrolmentOwnProjectionSchema,
    omit: BenefitEnrolmentOwnProjectionSchema,
  })
  .partial();

export const BenefitEnrolmentOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: BenefitEnrolmentOwnWhereSchema,
    select: BenefitEnrolmentOwnProjectionSchema,
    omit: BenefitEnrolmentOwnProjectionSchema,
  })
  .partial();

export const TitleHistoryOwnQueryOneSchema = z
  .object({
    where: TitleHistoryOwnWhereSchema,
    select: TitleHistoryOwnProjectionSchema,
    omit: TitleHistoryOwnProjectionSchema,
  })
  .partial();

export const TitleHistoryOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TitleHistoryOwnWhereSchema,
    select: TitleHistoryOwnProjectionSchema,
    omit: TitleHistoryOwnProjectionSchema,
  })
  .partial();

export const TimeOffPolicyOwnQueryOneSchema = z
  .object({
    where: TimeOffPolicyOwnWhereSchema,
    select: TimeOffPolicyOwnProjectionSchema,
    omit: TimeOffPolicyOwnProjectionSchema,
  })
  .partial();

export const TimeOffPolicyOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffPolicyOwnWhereSchema,
    select: TimeOffPolicyOwnProjectionSchema,
    omit: TimeOffPolicyOwnProjectionSchema,
  })
  .partial();

export const TimeOffBalanceOwnQueryOneSchema = z
  .object({
    where: TimeOffBalanceOwnWhereSchema,
    select: TimeOffBalanceOwnProjectionSchema,
    omit: TimeOffBalanceOwnProjectionSchema,
  })
  .partial();

export const TimeOffBalanceOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffBalanceOwnWhereSchema,
    select: TimeOffBalanceOwnProjectionSchema,
    omit: TimeOffBalanceOwnProjectionSchema,
  })
  .partial();

export const TimeOffRequestOwnQueryOneSchema = z
  .object({
    where: TimeOffRequestOwnWhereSchema,
    select: TimeOffRequestOwnProjectionSchema,
    omit: TimeOffRequestOwnProjectionSchema,
  })
  .partial();

export const TimeOffRequestOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffRequestOwnWhereSchema,
    select: TimeOffRequestOwnProjectionSchema,
    omit: TimeOffRequestOwnProjectionSchema,
  })
  .partial();

export const TimeOffTransactionOwnQueryOneSchema = z
  .object({
    where: TimeOffTransactionOwnWhereSchema,
    select: TimeOffTransactionOwnProjectionSchema,
    omit: TimeOffTransactionOwnProjectionSchema,
  })
  .partial();

export const TimeOffTransactionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffTransactionOwnWhereSchema,
    select: TimeOffTransactionOwnProjectionSchema,
    omit: TimeOffTransactionOwnProjectionSchema,
  })
  .partial();

export const ClockInOwnQueryOneSchema = z
  .object({
    where: ClockInOwnWhereSchema,
    select: ClockInOwnProjectionSchema,
    omit: ClockInOwnProjectionSchema,
  })
  .partial();

export const ClockInOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ClockInOwnWhereSchema,
    select: ClockInOwnProjectionSchema,
    omit: ClockInOwnProjectionSchema,
  })
  .partial();

export const PaycheckOwnQueryOneSchema = z
  .object({
    where: PaycheckOwnWhereSchema,
    select: PaycheckOwnProjectionSchema,
    omit: PaycheckOwnProjectionSchema,
  })
  .partial();

export const PaycheckOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PaycheckOwnWhereSchema,
    select: PaycheckOwnProjectionSchema,
    omit: PaycheckOwnProjectionSchema,
  })
  .partial();

export const EarningOwnQueryOneSchema = z
  .object({
    where: EarningOwnWhereSchema,
    select: EarningOwnProjectionSchema,
    omit: EarningOwnProjectionSchema,
  })
  .partial();

export const EarningOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EarningOwnWhereSchema,
    select: EarningOwnProjectionSchema,
    omit: EarningOwnProjectionSchema,
  })
  .partial();

export const PaycheckTaxOwnQueryOneSchema = z
  .object({
    where: PaycheckTaxOwnWhereSchema,
    select: PaycheckTaxOwnProjectionSchema,
    omit: PaycheckTaxOwnProjectionSchema,
  })
  .partial();

export const PaycheckTaxOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PaycheckTaxOwnWhereSchema,
    select: PaycheckTaxOwnProjectionSchema,
    omit: PaycheckTaxOwnProjectionSchema,
  })
  .partial();

export const DeductionPolicyOwnQueryOneSchema = z
  .object({
    where: DeductionPolicyOwnWhereSchema,
    select: DeductionPolicyOwnProjectionSchema,
    omit: DeductionPolicyOwnProjectionSchema,
  })
  .partial();

export const DeductionPolicyOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: DeductionPolicyOwnWhereSchema,
    select: DeductionPolicyOwnProjectionSchema,
    omit: DeductionPolicyOwnProjectionSchema,
  })
  .partial();

export const EmployeeDeductionOwnQueryOneSchema = z
  .object({
    where: EmployeeDeductionOwnWhereSchema,
    select: EmployeeDeductionOwnProjectionSchema,
    omit: EmployeeDeductionOwnProjectionSchema,
  })
  .partial();

export const EmployeeDeductionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeDeductionOwnWhereSchema,
    select: EmployeeDeductionOwnProjectionSchema,
    omit: EmployeeDeductionOwnProjectionSchema,
  })
  .partial();

export const PaycheckDeductionOwnQueryOneSchema = z
  .object({
    where: PaycheckDeductionOwnWhereSchema,
    select: PaycheckDeductionOwnProjectionSchema,
    omit: PaycheckDeductionOwnProjectionSchema,
  })
  .partial();

export const PaycheckDeductionOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PaycheckDeductionOwnWhereSchema,
    select: PaycheckDeductionOwnProjectionSchema,
    omit: PaycheckDeductionOwnProjectionSchema,
  })
  .partial();

export const EmployeeTaxDataOwnQueryOneSchema = z
  .object({
    where: EmployeeTaxDataOwnWhereSchema,
    select: EmployeeTaxDataOwnProjectionSchema,
    omit: EmployeeTaxDataOwnProjectionSchema,
  })
  .partial();

export const EmployeeTaxDataOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeTaxDataOwnWhereSchema,
    select: EmployeeTaxDataOwnProjectionSchema,
    omit: EmployeeTaxDataOwnProjectionSchema,
  })
  .partial();

export const StateTaxWithholdingOwnQueryOneSchema = z
  .object({
    where: StateTaxWithholdingOwnWhereSchema,
    select: StateTaxWithholdingOwnProjectionSchema,
    omit: StateTaxWithholdingOwnProjectionSchema,
  })
  .partial();

export const StateTaxWithholdingOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: StateTaxWithholdingOwnWhereSchema,
    select: StateTaxWithholdingOwnProjectionSchema,
    omit: StateTaxWithholdingOwnProjectionSchema,
  })
  .partial();

export const LocalTaxWithholdingOwnQueryOneSchema = z
  .object({
    where: LocalTaxWithholdingOwnWhereSchema,
    select: LocalTaxWithholdingOwnProjectionSchema,
    omit: LocalTaxWithholdingOwnProjectionSchema,
  })
  .partial();

export const LocalTaxWithholdingOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: LocalTaxWithholdingOwnWhereSchema,
    select: LocalTaxWithholdingOwnProjectionSchema,
    omit: LocalTaxWithholdingOwnProjectionSchema,
  })
  .partial();

export const PayrollRunOwnQueryOneSchema = z
  .object({
    where: PayrollRunOwnWhereSchema,
    select: PayrollRunOwnProjectionSchema,
    omit: PayrollRunOwnProjectionSchema,
  })
  .partial();

export const PayrollRunOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PayrollRunOwnWhereSchema,
    select: PayrollRunOwnProjectionSchema,
    omit: PayrollRunOwnProjectionSchema,
  })
  .partial();

export const ContactOwnQueryOneSchema = z
  .object({
    where: ContactOwnWhereSchema,
    select: ContactOwnProjectionSchema,
    omit: ContactOwnProjectionSchema,
  })
  .partial();

export const ContactOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ContactOwnWhereSchema,
    select: ContactOwnProjectionSchema,
    omit: ContactOwnProjectionSchema,
  })
  .partial();

export const CountryOwnQueryOneSchema = z
  .object({
    where: CountryOwnWhereSchema,
    select: CountryOwnProjectionSchema,
    omit: CountryOwnProjectionSchema,
  })
  .partial();

export const CountryOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: CountryOwnWhereSchema,
    select: CountryOwnProjectionSchema,
    omit: CountryOwnProjectionSchema,
  })
  .partial();

export const StateOwnQueryOneSchema = z
  .object({
    where: StateOwnWhereSchema,
    select: StateOwnProjectionSchema,
    omit: StateOwnProjectionSchema,
  })
  .partial();

export const StateOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: StateOwnWhereSchema,
    select: StateOwnProjectionSchema,
    omit: StateOwnProjectionSchema,
  })
  .partial();

export const AddressOwnQueryOneSchema = z
  .object({
    where: AddressOwnWhereSchema,
    select: AddressOwnProjectionSchema,
    omit: AddressOwnProjectionSchema,
  })
  .partial();

export const AddressOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: AddressOwnWhereSchema,
    select: AddressOwnProjectionSchema,
    omit: AddressOwnProjectionSchema,
  })
  .partial();

export const EmailOwnQueryOneSchema = z
  .object({
    where: EmailOwnWhereSchema,
    select: EmailOwnProjectionSchema,
    omit: EmailOwnProjectionSchema,
  })
  .partial();

export const EmailOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmailOwnWhereSchema,
    select: EmailOwnProjectionSchema,
    omit: EmailOwnProjectionSchema,
  })
  .partial();

export const PhoneOwnQueryOneSchema = z
  .object({
    where: PhoneOwnWhereSchema,
    select: PhoneOwnProjectionSchema,
    omit: PhoneOwnProjectionSchema,
  })
  .partial();

export const PhoneOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PhoneOwnWhereSchema,
    select: PhoneOwnProjectionSchema,
    omit: PhoneOwnProjectionSchema,
  })
  .partial();

export const PrimaryEmailOwnQueryOneSchema = z
  .object({
    where: PrimaryEmailOwnWhereSchema,
    select: PrimaryEmailOwnProjectionSchema,
    omit: PrimaryEmailOwnProjectionSchema,
  })
  .partial();

export const PrimaryEmailOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PrimaryEmailOwnWhereSchema,
    select: PrimaryEmailOwnProjectionSchema,
    omit: PrimaryEmailOwnProjectionSchema,
  })
  .partial();

export const PrimaryPhoneOwnQueryOneSchema = z
  .object({
    where: PrimaryPhoneOwnWhereSchema,
    select: PrimaryPhoneOwnProjectionSchema,
    omit: PrimaryPhoneOwnProjectionSchema,
  })
  .partial();

export const PrimaryPhoneOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PrimaryPhoneOwnWhereSchema,
    select: PrimaryPhoneOwnProjectionSchema,
    omit: PrimaryPhoneOwnProjectionSchema,
  })
  .partial();

export const PrimaryAddressOwnQueryOneSchema = z
  .object({
    where: PrimaryAddressOwnWhereSchema,
    select: PrimaryAddressOwnProjectionSchema,
    omit: PrimaryAddressOwnProjectionSchema,
  })
  .partial();

export const PrimaryAddressOwnQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PrimaryAddressOwnWhereSchema,
    select: PrimaryAddressOwnProjectionSchema,
    omit: PrimaryAddressOwnProjectionSchema,
  })
  .partial();

export const DepartmentCreateSchema = z
  .object({
    parentId: z.int().optional(),
    name: z.string(),
    slug: z.string().optional(),
    isActive: z.boolean().optional(),
  })
  .transform((value) => {
    if (value.slug == undefined && value.name != undefined) {
      return {
        ...value,
        slug: slugify(value.name),
      };
    }
    return value;
  });

export const DepartmentUpdateSchema = z
  .object({
    parentId: z.int().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    isActive: z.boolean().optional().optional(),
  })
  .transform((value) => {
    if (value.slug == undefined && value.name != undefined) {
      return {
        ...value,
        slug: slugify(value.name),
      };
    }
    return value;
  });

export const DepartmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    isActive: PZ.OrderDirectionSchema,
  })
  .partial();

export const DepartmentWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    isActive: PZ.BooleanFilterSchema,
    parent: z
      .object({
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      })
      .partial(),
    departments: z
      .object({
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      })
      .partial(),
    titles: z
      .object({
        some: TitleOwnWhereSchema,
        every: TitleOwnWhereSchema,
        none: TitleOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const DepartmentProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    isActive: z.boolean(),
    parent: DepartmentOwnQueryOneSchema,
    departments: DepartmentOwnQuerySchema,
    titles: TitleOwnQuerySchema,
  })
  .partial();

export const DepartmentQueryOneSchema = z
  .object({
    where: DepartmentWhereSchema,
    select: DepartmentProjectionSchema,
    omit: DepartmentProjectionSchema,
  })
  .partial();

export const DepartmentQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: DepartmentWhereSchema,
    select: DepartmentProjectionSchema,
    omit: DepartmentProjectionSchema,
  })
  .partial();

export const TitleCreateSchema = z
  .object({
    departmentId: z.int(),
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    isActive: z.boolean().optional(),
  })
  .transform((value) => {
    if (value.slug == undefined && value.name != undefined) {
      return {
        ...value,
        slug: slugify(value.name),
      };
    }
    return value;
  });

export const TitleUpdateSchema = z
  .object({
    departmentId: z.int().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
    isActive: z.boolean().optional().optional(),
  })
  .transform((value) => {
    if (value.slug == undefined && value.name != undefined) {
      return {
        ...value,
        slug: slugify(value.name),
      };
    }
    return value;
  });

export const TitleOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    departmentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    isActive: PZ.OrderDirectionSchema,
  })
  .partial();

export const TitleWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    departmentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isActive: PZ.BooleanFilterSchema,
    department: z
      .object({
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      })
      .partial(),
    employees: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    histories: z
      .object({
        some: TitleHistoryOwnWhereSchema,
        every: TitleHistoryOwnWhereSchema,
        none: TitleHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TitleProjectionSchema = z
  .object({
    id: z.boolean(),
    departmentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    isActive: z.boolean(),
    department: DepartmentOwnQueryOneSchema,
    employees: EmployeeOwnQuerySchema,
    histories: TitleHistoryOwnQuerySchema,
  })
  .partial();

export const TitleQueryOneSchema = z
  .object({
    where: TitleWhereSchema,
    select: TitleProjectionSchema,
    omit: TitleProjectionSchema,
  })
  .partial();

export const TitleQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TitleWhereSchema,
    select: TitleProjectionSchema,
    omit: TitleProjectionSchema,
  })
  .partial();

export const PersonalDataCreateSchema = z.object({
  employeeId: z.int(),
  ein: z.string(),
  gender: GenderSchema,
  dob: z.iso.datetime(),
  maritalStatus: MaritalStatusSchema,
});

export const PersonalDataUpdateSchema = z.object({
  employeeId: z.int().optional(),
  ein: z.string().optional(),
  gender: GenderSchema.optional(),
  dob: z.iso.datetime().optional(),
  maritalStatus: MaritalStatusSchema.optional(),
});

export const PersonalDataOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    ein: PZ.OrderDirectionSchema,
    dob: PZ.OrderDirectionSchema,
  })
  .partial();

export const PersonalDataWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    ein: PZ.StringFilterSchema,
    gender: GenderSchema,
    dob: PZ.DateTimeFilterSchema,
    maritalStatus: MaritalStatusSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PersonalDataProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    ein: z.boolean(),
    gender: z.boolean(),
    dob: z.boolean(),
    maritalStatus: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const PersonalDataQueryOneSchema = z
  .object({
    where: PersonalDataWhereSchema,
    select: PersonalDataProjectionSchema,
    omit: PersonalDataProjectionSchema,
  })
  .partial();

export const PersonalDataQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PersonalDataWhereSchema,
    select: PersonalDataProjectionSchema,
    omit: PersonalDataProjectionSchema,
  })
  .partial();

export const EmployeeCreateSchema = z.object({
  titleId: z.int(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  preferedName: z.string().optional(),
  status: EmployeeStatusSchema.optional(),
  hireDate: z.iso.datetime().optional(),
  terminationDate: z.iso.datetime().optional(),
  employmentType: EmploymentTypeSchema,
  directManagerId: z.int().optional(),
});

export const EmployeeUpdateSchema = z.object({
  titleId: z.int().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional().optional(),
  lastName: z.string().optional(),
  preferedName: z.string().optional().optional(),
  status: EmployeeStatusSchema.optional().optional(),
  hireDate: z.iso.datetime().optional().optional(),
  terminationDate: z.iso.datetime().optional().optional(),
  employmentType: EmploymentTypeSchema.optional(),
  directManagerId: z.int().optional().optional(),
});

export const EmployeeOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    titleId: PZ.OrderDirectionSchema,
    firstName: PZ.OrderDirectionSchema,
    middleName: PZ.OrderDirectionSchema,
    lastName: PZ.OrderDirectionSchema,
    preferedName: PZ.OrderDirectionSchema,
    hireDate: PZ.OrderDirectionSchema,
    terminationDate: PZ.OrderDirectionSchema,
    directManagerId: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    titleId: PZ.IntegerFilterSchema,
    firstName: PZ.StringFilterSchema,
    middleName: PZ.StringFilterSchema,
    lastName: PZ.StringFilterSchema,
    preferedName: PZ.StringFilterSchema,
    status: EmployeeStatusSchema,
    title: z
      .object({
        some: TitleOwnWhereSchema,
        every: TitleOwnWhereSchema,
        none: TitleOwnWhereSchema,
      })
      .partial(),
    hireDate: PZ.DateTimeFilterSchema,
    terminationDate: PZ.DateTimeFilterSchema,
    employmentType: EmploymentTypeSchema,
    salary: z
      .object({
        some: SalaryOwnWhereSchema,
        every: SalaryOwnWhereSchema,
        none: SalaryOwnWhereSchema,
      })
      .partial(),
    salaryHistory: z
      .object({
        some: SalaryHistoryOwnWhereSchema,
        every: SalaryHistoryOwnWhereSchema,
        none: SalaryHistoryOwnWhereSchema,
      })
      .partial(),
    benefits: z
      .object({
        some: BenefitEnrolmentOwnWhereSchema,
        every: BenefitEnrolmentOwnWhereSchema,
        none: BenefitEnrolmentOwnWhereSchema,
      })
      .partial(),
    titleHistory: z
      .object({
        some: TitleHistoryOwnWhereSchema,
        every: TitleHistoryOwnWhereSchema,
        none: TitleHistoryOwnWhereSchema,
      })
      .partial(),
    timeOffBalances: z
      .object({
        some: TimeOffBalanceOwnWhereSchema,
        every: TimeOffBalanceOwnWhereSchema,
        none: TimeOffBalanceOwnWhereSchema,
      })
      .partial(),
    timeOffRequests: z
      .object({
        some: TimeOffRequestOwnWhereSchema,
        every: TimeOffRequestOwnWhereSchema,
        none: TimeOffRequestOwnWhereSchema,
      })
      .partial(),
    resolvedTimeOffs: z
      .object({
        some: TimeOffRequestOwnWhereSchema,
        every: TimeOffRequestOwnWhereSchema,
        none: TimeOffRequestOwnWhereSchema,
      })
      .partial(),
    clockIns: z
      .object({
        some: ClockInOwnWhereSchema,
        every: ClockInOwnWhereSchema,
        none: ClockInOwnWhereSchema,
      })
      .partial(),
    personalData: z
      .object({
        some: PersonalDataOwnWhereSchema,
        every: PersonalDataOwnWhereSchema,
        none: PersonalDataOwnWhereSchema,
      })
      .partial(),
    taxData: z
      .object({
        some: EmployeeTaxDataOwnWhereSchema,
        every: EmployeeTaxDataOwnWhereSchema,
        none: EmployeeTaxDataOwnWhereSchema,
      })
      .partial(),
    memberships: z
      .object({
        some: TeamMemberOwnWhereSchema,
        every: TeamMemberOwnWhereSchema,
        none: TeamMemberOwnWhereSchema,
      })
      .partial(),
    managingTeams: z
      .object({
        some: TeamManagerOwnWhereSchema,
        every: TeamManagerOwnWhereSchema,
        none: TeamManagerOwnWhereSchema,
      })
      .partial(),
    managingEmployees: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    directManager: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    paychecks: z
      .object({
        some: PaycheckOwnWhereSchema,
        every: PaycheckOwnWhereSchema,
        none: PaycheckOwnWhereSchema,
      })
      .partial(),
    directManagerId: PZ.IntegerFilterSchema,
    deductions: z
      .object({
        some: EmployeeDeductionOwnWhereSchema,
        every: EmployeeDeductionOwnWhereSchema,
        none: EmployeeDeductionOwnWhereSchema,
      })
      .partial(),
    resolvedPayrollRuns: z
      .object({
        some: PayrollRunOwnWhereSchema,
        every: PayrollRunOwnWhereSchema,
        none: PayrollRunOwnWhereSchema,
      })
      .partial(),
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    titleId: z.boolean(),
    firstName: z.boolean(),
    middleName: z.boolean(),
    lastName: z.boolean(),
    preferedName: z.boolean(),
    status: z.boolean(),
    title: TitleOwnQueryOneSchema,
    hireDate: z.boolean(),
    terminationDate: z.boolean(),
    employmentType: z.boolean(),
    salary: SalaryOwnQueryOneSchema,
    salaryHistory: SalaryHistoryOwnQuerySchema,
    benefits: BenefitEnrolmentOwnQuerySchema,
    titleHistory: TitleHistoryOwnQuerySchema,
    timeOffBalances: TimeOffBalanceOwnQuerySchema,
    timeOffRequests: TimeOffRequestOwnQuerySchema,
    resolvedTimeOffs: TimeOffRequestOwnQuerySchema,
    clockIns: ClockInOwnQuerySchema,
    personalData: PersonalDataOwnQueryOneSchema,
    taxData: EmployeeTaxDataOwnQuerySchema,
    memberships: TeamMemberOwnQuerySchema,
    managingTeams: TeamManagerOwnQuerySchema,
    managingEmployees: EmployeeOwnQuerySchema,
    directManager: EmployeeOwnQueryOneSchema,
    paychecks: PaycheckOwnQuerySchema,
    directManagerId: z.boolean(),
    deductions: EmployeeDeductionOwnQuerySchema,
    resolvedPayrollRuns: PayrollRunOwnQuerySchema,
    contact: ContactOwnQueryOneSchema,
  })
  .partial();

export const EmployeeQueryOneSchema = z
  .object({
    where: EmployeeWhereSchema,
    select: EmployeeProjectionSchema,
    omit: EmployeeProjectionSchema,
  })
  .partial();

export const EmployeeQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeWhereSchema,
    select: EmployeeProjectionSchema,
    omit: EmployeeProjectionSchema,
  })
  .partial();

export const TeamCreateSchema = z.object({
  name: z.string(),
});

export const TeamUpdateSchema = z.object({
  name: z.string().optional(),
});

export const TeamOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const TeamWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    members: z
      .object({
        some: TeamMemberOwnWhereSchema,
        every: TeamMemberOwnWhereSchema,
        none: TeamMemberOwnWhereSchema,
      })
      .partial(),
    managers: z
      .object({
        some: TeamManagerOwnWhereSchema,
        every: TeamManagerOwnWhereSchema,
        none: TeamManagerOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TeamProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    members: TeamMemberOwnQuerySchema,
    managers: TeamManagerOwnQuerySchema,
  })
  .partial();

export const TeamQueryOneSchema = z
  .object({
    where: TeamWhereSchema,
    select: TeamProjectionSchema,
    omit: TeamProjectionSchema,
  })
  .partial();

export const TeamQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TeamWhereSchema,
    select: TeamProjectionSchema,
    omit: TeamProjectionSchema,
  })
  .partial();

export const TeamManagerCreateSchema = z.object({
  teamId: z.int(),
  managerId: z.int(),
});

export const TeamManagerUpdateSchema = z.object({
  teamId: z.int().optional(),
  managerId: z.int().optional(),
});

export const TeamManagerOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    teamId: PZ.OrderDirectionSchema,
    managerId: PZ.OrderDirectionSchema,
  })
  .partial();

export const TeamManagerWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
    managerId: PZ.IntegerFilterSchema,
    team: z
      .object({
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      })
      .partial(),
    manager: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TeamManagerProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    managerId: z.boolean(),
    team: TeamOwnQueryOneSchema,
    manager: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const TeamManagerQueryOneSchema = z
  .object({
    where: TeamManagerWhereSchema,
    select: TeamManagerProjectionSchema,
    omit: TeamManagerProjectionSchema,
  })
  .partial();

export const TeamManagerQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TeamManagerWhereSchema,
    select: TeamManagerProjectionSchema,
    omit: TeamManagerProjectionSchema,
  })
  .partial();

export const TeamMemberCreateSchema = z.object({
  teamId: z.int(),
  memberId: z.int(),
});

export const TeamMemberUpdateSchema = z.object({
  teamId: z.int().optional(),
  memberId: z.int().optional(),
});

export const TeamMemberOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    teamId: PZ.OrderDirectionSchema,
    memberId: PZ.OrderDirectionSchema,
  })
  .partial();

export const TeamMemberWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
    memberId: PZ.IntegerFilterSchema,
    member: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    team: z
      .object({
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TeamMemberProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    memberId: z.boolean(),
    member: EmployeeOwnQueryOneSchema,
    team: TeamOwnQueryOneSchema,
  })
  .partial();

export const TeamMemberQueryOneSchema = z
  .object({
    where: TeamMemberWhereSchema,
    select: TeamMemberProjectionSchema,
    omit: TeamMemberProjectionSchema,
  })
  .partial();

export const TeamMemberQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TeamMemberWhereSchema,
    select: TeamMemberProjectionSchema,
    omit: TeamMemberProjectionSchema,
  })
  .partial();

export const SalaryCreateSchema = z.object({
  employeeId: z.int(),
  gross: z.number(),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime().optional(),
  frequency: PayFrequencySchema,
});

export const SalaryUpdateSchema = z.object({
  employeeId: z.int().optional(),
  gross: z.number().optional(),
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional().optional(),
  frequency: PayFrequencySchema.optional(),
});

export const SalaryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    gross: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
  })
  .partial();

export const SalaryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    gross: PZ.NumberFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    frequency: PayFrequencySchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const SalaryProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    gross: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    frequency: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const SalaryQueryOneSchema = z
  .object({
    where: SalaryWhereSchema,
    select: SalaryProjectionSchema,
    omit: SalaryProjectionSchema,
  })
  .partial();

export const SalaryQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SalaryWhereSchema,
    select: SalaryProjectionSchema,
    omit: SalaryProjectionSchema,
  })
  .partial();

export const SalaryHistoryCreateSchema = z.object({
  employeeId: z.int(),
  oldSalary: z.number(),
  newSalary: z.number(),
  reason: z.string().optional(),
});

export const SalaryHistoryUpdateSchema = z.object({
  employeeId: z.int().optional(),
  oldSalary: z.number().optional(),
  newSalary: z.number().optional(),
  reason: z.string().optional().optional(),
});

export const SalaryHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    oldSalary: PZ.OrderDirectionSchema,
    newSalary: PZ.OrderDirectionSchema,
    reason: PZ.OrderDirectionSchema,
  })
  .partial();

export const SalaryHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    oldSalary: PZ.NumberFilterSchema,
    newSalary: PZ.NumberFilterSchema,
    reason: PZ.StringFilterSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const SalaryHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    createdAt: z.boolean(),
    oldSalary: z.boolean(),
    newSalary: z.boolean(),
    reason: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const SalaryHistoryQueryOneSchema = z
  .object({
    where: SalaryHistoryWhereSchema,
    select: SalaryHistoryProjectionSchema,
    omit: SalaryHistoryProjectionSchema,
  })
  .partial();

export const SalaryHistoryQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: SalaryHistoryWhereSchema,
    select: SalaryHistoryProjectionSchema,
    omit: SalaryHistoryProjectionSchema,
  })
  .partial();

export const BenefitCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  type: z.string().optional(),
});

export const BenefitUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional().optional(),
  type: z.string().optional().optional(),
});

export const BenefitOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    type: PZ.OrderDirectionSchema,
  })
  .partial();

export const BenefitWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    type: PZ.StringFilterSchema,
    enrolments: z
      .object({
        some: BenefitEnrolmentOwnWhereSchema,
        every: BenefitEnrolmentOwnWhereSchema,
        none: BenefitEnrolmentOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const BenefitProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    type: z.boolean(),
    enrolments: BenefitEnrolmentOwnQuerySchema,
  })
  .partial();

export const BenefitQueryOneSchema = z
  .object({
    where: BenefitWhereSchema,
    select: BenefitProjectionSchema,
    omit: BenefitProjectionSchema,
  })
  .partial();

export const BenefitQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: BenefitWhereSchema,
    select: BenefitProjectionSchema,
    omit: BenefitProjectionSchema,
  })
  .partial();

export const BenefitEnrolmentCreateSchema = z.object({
  benefitId: z.int(),
  employeeId: z.int(),
  startDate: z.iso.datetime(),
  status: BenefitStatusSchema.optional(),
});

export const BenefitEnrolmentUpdateSchema = z.object({
  benefitId: z.int().optional(),
  employeeId: z.int().optional(),
  startDate: z.iso.datetime().optional(),
  status: BenefitStatusSchema.optional().optional(),
});

export const BenefitEnrolmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    benefitId: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
  })
  .partial();

export const BenefitEnrolmentWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    benefitId: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    status: BenefitStatusSchema,
    benefit: z
      .object({
        some: BenefitOwnWhereSchema,
        every: BenefitOwnWhereSchema,
        none: BenefitOwnWhereSchema,
      })
      .partial(),
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const BenefitEnrolmentProjectionSchema = z
  .object({
    id: z.boolean(),
    benefitId: z.boolean(),
    employeeId: z.boolean(),
    startDate: z.boolean(),
    status: z.boolean(),
    benefit: BenefitOwnQueryOneSchema,
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const BenefitEnrolmentQueryOneSchema = z
  .object({
    where: BenefitEnrolmentWhereSchema,
    select: BenefitEnrolmentProjectionSchema,
    omit: BenefitEnrolmentProjectionSchema,
  })
  .partial();

export const BenefitEnrolmentQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: BenefitEnrolmentWhereSchema,
    select: BenefitEnrolmentProjectionSchema,
    omit: BenefitEnrolmentProjectionSchema,
  })
  .partial();

export const TitleHistoryCreateSchema = z.object({
  employeeId: z.int(),
  titleId: z.int(),
  type: TitleChangeTypeSchema,
  reason: z.string().optional(),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime().optional(),
});

export const TitleHistoryUpdateSchema = z.object({
  employeeId: z.int().optional(),
  titleId: z.int().optional(),
  type: TitleChangeTypeSchema.optional(),
  reason: z.string().optional().optional(),
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional().optional(),
});

export const TitleHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    titleId: PZ.OrderDirectionSchema,
    reason: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
  })
  .partial();

export const TitleHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    titleId: PZ.IntegerFilterSchema,
    type: TitleChangeTypeSchema,
    reason: PZ.StringFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    title: z
      .object({
        some: TitleOwnWhereSchema,
        every: TitleOwnWhereSchema,
        none: TitleOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TitleHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    titleId: z.boolean(),
    type: z.boolean(),
    reason: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
    title: TitleOwnQueryOneSchema,
  })
  .partial();

export const TitleHistoryQueryOneSchema = z
  .object({
    where: TitleHistoryWhereSchema,
    select: TitleHistoryProjectionSchema,
    omit: TitleHistoryProjectionSchema,
  })
  .partial();

export const TitleHistoryQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TitleHistoryWhereSchema,
    select: TitleHistoryProjectionSchema,
    omit: TitleHistoryProjectionSchema,
  })
  .partial();

export const TimeOffPolicyCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  accrualRate: z.number(),
  maxRollover: z.number(),
});

export const TimeOffPolicyUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional().optional(),
  accrualRate: z.number().optional(),
  maxRollover: z.number().optional(),
});

export const TimeOffPolicyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    accrualRate: PZ.OrderDirectionSchema,
    maxRollover: PZ.OrderDirectionSchema,
  })
  .partial();

export const TimeOffPolicyWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    accrualRate: PZ.NumberFilterSchema,
    maxRollover: PZ.NumberFilterSchema,
    balances: z
      .object({
        some: TimeOffBalanceOwnWhereSchema,
        every: TimeOffBalanceOwnWhereSchema,
        none: TimeOffBalanceOwnWhereSchema,
      })
      .partial(),
    requests: z
      .object({
        some: TimeOffRequestOwnWhereSchema,
        every: TimeOffRequestOwnWhereSchema,
        none: TimeOffRequestOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TimeOffPolicyProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    accrualRate: z.boolean(),
    maxRollover: z.boolean(),
    balances: TimeOffBalanceOwnQuerySchema,
    requests: TimeOffRequestOwnQuerySchema,
  })
  .partial();

export const TimeOffPolicyQueryOneSchema = z
  .object({
    where: TimeOffPolicyWhereSchema,
    select: TimeOffPolicyProjectionSchema,
    omit: TimeOffPolicyProjectionSchema,
  })
  .partial();

export const TimeOffPolicyQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffPolicyWhereSchema,
    select: TimeOffPolicyProjectionSchema,
    omit: TimeOffPolicyProjectionSchema,
  })
  .partial();

export const TimeOffBalanceCreateSchema = z.object({
  policyId: z.int(),
  employeeId: z.int(),
  accruedHours: z.number(),
  usedHours: z.number(),
  availableHours: z.number(),
});

export const TimeOffBalanceUpdateSchema = z.object({
  policyId: z.int().optional(),
  employeeId: z.int().optional(),
  accruedHours: z.number().optional(),
  usedHours: z.number().optional(),
  availableHours: z.number().optional(),
});

export const TimeOffBalanceOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    policyId: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    accruedHours: PZ.OrderDirectionSchema,
    usedHours: PZ.OrderDirectionSchema,
    availableHours: PZ.OrderDirectionSchema,
  })
  .partial();

export const TimeOffBalanceWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    accruedHours: PZ.NumberFilterSchema,
    usedHours: PZ.NumberFilterSchema,
    availableHours: PZ.NumberFilterSchema,
    policy: z
      .object({
        some: TimeOffPolicyOwnWhereSchema,
        every: TimeOffPolicyOwnWhereSchema,
        none: TimeOffPolicyOwnWhereSchema,
      })
      .partial(),
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    transactions: z
      .object({
        some: TimeOffTransactionOwnWhereSchema,
        every: TimeOffTransactionOwnWhereSchema,
        none: TimeOffTransactionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TimeOffBalanceProjectionSchema = z
  .object({
    id: z.boolean(),
    policyId: z.boolean(),
    employeeId: z.boolean(),
    accruedHours: z.boolean(),
    usedHours: z.boolean(),
    availableHours: z.boolean(),
    policy: TimeOffPolicyOwnQueryOneSchema,
    employee: EmployeeOwnQueryOneSchema,
    transactions: TimeOffTransactionOwnQuerySchema,
  })
  .partial();

export const TimeOffBalanceQueryOneSchema = z
  .object({
    where: TimeOffBalanceWhereSchema,
    select: TimeOffBalanceProjectionSchema,
    omit: TimeOffBalanceProjectionSchema,
  })
  .partial();

export const TimeOffBalanceQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffBalanceWhereSchema,
    select: TimeOffBalanceProjectionSchema,
    omit: TimeOffBalanceProjectionSchema,
  })
  .partial();

export const TimeOffRequestCreateSchema = z.object({
  employeeId: z.int(),
  reason: z.string(),
  policyId: z.int(),
  resolverId: z.int().optional(),
  status: RequestStatusSchema.optional(),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime(),
});

export const TimeOffRequestUpdateSchema = z.object({
  employeeId: z.int().optional(),
  reason: z.string().optional(),
  policyId: z.int().optional(),
  resolverId: z.int().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional(),
});

export const TimeOffRequestOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    reason: PZ.OrderDirectionSchema,
    policyId: PZ.OrderDirectionSchema,
    resolverId: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
  })
  .partial();

export const TimeOffRequestWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    reason: PZ.StringFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    resolverId: PZ.IntegerFilterSchema,
    status: RequestStatusSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    policy: z
      .object({
        some: TimeOffPolicyOwnWhereSchema,
        every: TimeOffPolicyOwnWhereSchema,
        none: TimeOffPolicyOwnWhereSchema,
      })
      .partial(),
    resolver: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    transactions: z
      .object({
        some: TimeOffTransactionOwnWhereSchema,
        every: TimeOffTransactionOwnWhereSchema,
        none: TimeOffTransactionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TimeOffRequestProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    employeeId: z.boolean(),
    reason: z.boolean(),
    policyId: z.boolean(),
    resolverId: z.boolean(),
    status: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
    policy: TimeOffPolicyOwnQueryOneSchema,
    resolver: EmployeeOwnQueryOneSchema,
    transactions: TimeOffTransactionOwnQuerySchema,
  })
  .partial();

export const TimeOffRequestQueryOneSchema = z
  .object({
    where: TimeOffRequestWhereSchema,
    select: TimeOffRequestProjectionSchema,
    omit: TimeOffRequestProjectionSchema,
  })
  .partial();

export const TimeOffRequestQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffRequestWhereSchema,
    select: TimeOffRequestProjectionSchema,
    omit: TimeOffRequestProjectionSchema,
  })
  .partial();

export const TimeOffTransactionCreateSchema = z.object({
  type: TimeOffTransactionTypeSchema,
  balanceId: z.int(),
  requestId: z.int().optional(),
  amount: z.number(),
});

export const TimeOffTransactionUpdateSchema = z.object({
  type: TimeOffTransactionTypeSchema.optional(),
  balanceId: z.int().optional(),
  requestId: z.int().optional().optional(),
  amount: z.number().optional(),
});

export const TimeOffTransactionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    balanceId: PZ.OrderDirectionSchema,
    requestId: PZ.OrderDirectionSchema,
    amount: PZ.OrderDirectionSchema,
  })
  .partial();

export const TimeOffTransactionWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    type: TimeOffTransactionTypeSchema,
    balanceId: PZ.IntegerFilterSchema,
    requestId: PZ.IntegerFilterSchema,
    amount: PZ.NumberFilterSchema,
    balance: z
      .object({
        some: TimeOffBalanceOwnWhereSchema,
        every: TimeOffBalanceOwnWhereSchema,
        none: TimeOffBalanceOwnWhereSchema,
      })
      .partial(),
    request: z
      .object({
        some: TimeOffRequestOwnWhereSchema,
        every: TimeOffRequestOwnWhereSchema,
        none: TimeOffRequestOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TimeOffTransactionProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    type: z.boolean(),
    balanceId: z.boolean(),
    requestId: z.boolean(),
    amount: z.boolean(),
    balance: TimeOffBalanceOwnQueryOneSchema,
    request: TimeOffRequestOwnQueryOneSchema,
  })
  .partial();

export const TimeOffTransactionQueryOneSchema = z
  .object({
    where: TimeOffTransactionWhereSchema,
    select: TimeOffTransactionProjectionSchema,
    omit: TimeOffTransactionProjectionSchema,
  })
  .partial();

export const TimeOffTransactionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: TimeOffTransactionWhereSchema,
    select: TimeOffTransactionProjectionSchema,
    omit: TimeOffTransactionProjectionSchema,
  })
  .partial();

export const ClockInCreateSchema = z.object({
  employeeId: z.int(),
  clockOut: z.iso.datetime().optional(),
});

export const ClockInUpdateSchema = z.object({
  employeeId: z.int().optional(),
  clockOut: z.iso.datetime().optional().optional(),
});

export const ClockInOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    clockIn: PZ.OrderDirectionSchema,
    clockOut: PZ.OrderDirectionSchema,
  })
  .partial();

export const ClockInWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    clockIn: PZ.DateTimeFilterSchema,
    clockOut: PZ.DateTimeFilterSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ClockInProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    clockIn: z.boolean(),
    clockOut: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const ClockInQueryOneSchema = z
  .object({
    where: ClockInWhereSchema,
    select: ClockInProjectionSchema,
    omit: ClockInProjectionSchema,
  })
  .partial();

export const ClockInQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ClockInWhereSchema,
    select: ClockInProjectionSchema,
    omit: ClockInProjectionSchema,
  })
  .partial();

export const PaycheckCreateSchema = z.object({
  payrollRunId: z.int(),
  employeeId: z.int(),
  grossAmount: z.number(),
  netAmount: z.number(),
});

export const PaycheckUpdateSchema = z.object({
  payrollRunId: z.int().optional(),
  employeeId: z.int().optional(),
  grossAmount: z.number().optional(),
  netAmount: z.number().optional(),
});

export const PaycheckOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    payrollRunId: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    grossAmount: PZ.OrderDirectionSchema,
    netAmount: PZ.OrderDirectionSchema,
  })
  .partial();

export const PaycheckWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    payrollRunId: PZ.IntegerFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    grossAmount: PZ.NumberFilterSchema,
    netAmount: PZ.NumberFilterSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    earnings: z
      .object({
        some: EarningOwnWhereSchema,
        every: EarningOwnWhereSchema,
        none: EarningOwnWhereSchema,
      })
      .partial(),
    paycheckTaxes: z
      .object({
        some: PaycheckTaxOwnWhereSchema,
        every: PaycheckTaxOwnWhereSchema,
        none: PaycheckTaxOwnWhereSchema,
      })
      .partial(),
    deductions: z
      .object({
        some: PaycheckDeductionOwnWhereSchema,
        every: PaycheckDeductionOwnWhereSchema,
        none: PaycheckDeductionOwnWhereSchema,
      })
      .partial(),
    payrollRun: z
      .object({
        some: PayrollRunOwnWhereSchema,
        every: PayrollRunOwnWhereSchema,
        none: PayrollRunOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PaycheckProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    payrollRunId: z.boolean(),
    updatedAt: z.boolean(),
    employeeId: z.boolean(),
    grossAmount: z.boolean(),
    netAmount: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
    earnings: EarningOwnQuerySchema,
    paycheckTaxes: PaycheckTaxOwnQuerySchema,
    deductions: PaycheckDeductionOwnQuerySchema,
    payrollRun: PayrollRunOwnQueryOneSchema,
  })
  .partial();

export const PaycheckQueryOneSchema = z
  .object({
    where: PaycheckWhereSchema,
    select: PaycheckProjectionSchema,
    omit: PaycheckProjectionSchema,
  })
  .partial();

export const PaycheckQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PaycheckWhereSchema,
    select: PaycheckProjectionSchema,
    omit: PaycheckProjectionSchema,
  })
  .partial();

export const EarningCreateSchema = z.object({
  type: EarningTypeSchema,
  hours: z.number().optional(),
  rate: z.number(),
  amount: z.number(),
  paycheckId: z.int(),
});

export const EarningUpdateSchema = z.object({
  type: EarningTypeSchema.optional(),
  hours: z.number().optional().optional(),
  rate: z.number().optional(),
  amount: z.number().optional(),
  paycheckId: z.int().optional(),
});

export const EarningOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    hours: PZ.OrderDirectionSchema,
    rate: PZ.OrderDirectionSchema,
    amount: PZ.OrderDirectionSchema,
    paycheckId: PZ.OrderDirectionSchema,
  })
  .partial();

export const EarningWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: EarningTypeSchema,
    hours: PZ.NumberFilterSchema,
    rate: PZ.NumberFilterSchema,
    amount: PZ.NumberFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
    paycheck: z
      .object({
        some: PaycheckOwnWhereSchema,
        every: PaycheckOwnWhereSchema,
        none: PaycheckOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EarningProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    hours: z.boolean(),
    rate: z.boolean(),
    amount: z.boolean(),
    paycheckId: z.boolean(),
    paycheck: PaycheckOwnQueryOneSchema,
  })
  .partial();

export const EarningQueryOneSchema = z
  .object({
    where: EarningWhereSchema,
    select: EarningProjectionSchema,
    omit: EarningProjectionSchema,
  })
  .partial();

export const EarningQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EarningWhereSchema,
    select: EarningProjectionSchema,
    omit: EarningProjectionSchema,
  })
  .partial();

export const PaycheckTaxCreateSchema = z.object({
  paycheckId: z.int(),
  taxAuthority: z.string(),
  amount: z.number(),
});

export const PaycheckTaxUpdateSchema = z.object({
  paycheckId: z.int().optional(),
  taxAuthority: z.string().optional(),
  amount: z.number().optional(),
});

export const PaycheckTaxOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    paycheckId: PZ.OrderDirectionSchema,
    taxAuthority: PZ.OrderDirectionSchema,
    amount: PZ.OrderDirectionSchema,
  })
  .partial();

export const PaycheckTaxWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
    taxAuthority: PZ.StringFilterSchema,
    amount: PZ.NumberFilterSchema,
    paycheck: z
      .object({
        some: PaycheckOwnWhereSchema,
        every: PaycheckOwnWhereSchema,
        none: PaycheckOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PaycheckTaxProjectionSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    taxAuthority: z.boolean(),
    amount: z.boolean(),
    paycheck: PaycheckOwnQueryOneSchema,
  })
  .partial();

export const PaycheckTaxQueryOneSchema = z
  .object({
    where: PaycheckTaxWhereSchema,
    select: PaycheckTaxProjectionSchema,
    omit: PaycheckTaxProjectionSchema,
  })
  .partial();

export const PaycheckTaxQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PaycheckTaxWhereSchema,
    select: PaycheckTaxProjectionSchema,
    omit: PaycheckTaxProjectionSchema,
  })
  .partial();

export const DeductionPolicyCreateSchema = z.object({
  name: z.string(),
  type: DeductionTypeSchema,
  defaultAmount: z.number().optional(),
  defaultPercent: z.number().optional(),
});

export const DeductionPolicyUpdateSchema = z.object({
  name: z.string().optional(),
  type: DeductionTypeSchema.optional(),
  defaultAmount: z.number().optional().optional(),
  defaultPercent: z.number().optional().optional(),
});

export const DeductionPolicyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    defaultAmount: PZ.OrderDirectionSchema,
    defaultPercent: PZ.OrderDirectionSchema,
  })
  .partial();

export const DeductionPolicyWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    type: DeductionTypeSchema,
    defaultAmount: PZ.NumberFilterSchema,
    defaultPercent: PZ.NumberFilterSchema,
    employeeDeductions: z
      .object({
        some: EmployeeDeductionOwnWhereSchema,
        every: EmployeeDeductionOwnWhereSchema,
        none: EmployeeDeductionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const DeductionPolicyProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    type: z.boolean(),
    defaultAmount: z.boolean(),
    defaultPercent: z.boolean(),
    employeeDeductions: EmployeeDeductionOwnQuerySchema,
  })
  .partial();

export const DeductionPolicyQueryOneSchema = z
  .object({
    where: DeductionPolicyWhereSchema,
    select: DeductionPolicyProjectionSchema,
    omit: DeductionPolicyProjectionSchema,
  })
  .partial();

export const DeductionPolicyQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: DeductionPolicyWhereSchema,
    select: DeductionPolicyProjectionSchema,
    omit: DeductionPolicyProjectionSchema,
  })
  .partial();

export const EmployeeDeductionCreateSchema = z.object({
  employeeId: z.int(),
  policyId: z.int(),
  employeeAmount: z.number().optional(),
});

export const EmployeeDeductionUpdateSchema = z.object({
  employeeId: z.int().optional(),
  policyId: z.int().optional(),
  employeeAmount: z.number().optional().optional(),
});

export const EmployeeDeductionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    policyId: PZ.OrderDirectionSchema,
    employeeAmount: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeDeductionWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    employeeAmount: PZ.NumberFilterSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    policy: z
      .object({
        some: DeductionPolicyOwnWhereSchema,
        every: DeductionPolicyOwnWhereSchema,
        none: DeductionPolicyOwnWhereSchema,
      })
      .partial(),
    paycheckDeductions: z
      .object({
        some: PaycheckDeductionOwnWhereSchema,
        every: PaycheckDeductionOwnWhereSchema,
        none: PaycheckDeductionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeDeductionProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    policyId: z.boolean(),
    employeeAmount: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
    policy: DeductionPolicyOwnQueryOneSchema,
    paycheckDeductions: PaycheckDeductionOwnQuerySchema,
  })
  .partial();

export const EmployeeDeductionQueryOneSchema = z
  .object({
    where: EmployeeDeductionWhereSchema,
    select: EmployeeDeductionProjectionSchema,
    omit: EmployeeDeductionProjectionSchema,
  })
  .partial();

export const EmployeeDeductionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeDeductionWhereSchema,
    select: EmployeeDeductionProjectionSchema,
    omit: EmployeeDeductionProjectionSchema,
  })
  .partial();

export const PaycheckDeductionCreateSchema = z.object({
  paycheckId: z.int(),
  employeeDeductionId: z.int(),
  amount: z.number(),
});

export const PaycheckDeductionUpdateSchema = z.object({
  paycheckId: z.int().optional(),
  employeeDeductionId: z.int().optional(),
  amount: z.number().optional(),
});

export const PaycheckDeductionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    paycheckId: PZ.OrderDirectionSchema,
    employeeDeductionId: PZ.OrderDirectionSchema,
    amount: PZ.OrderDirectionSchema,
  })
  .partial();

export const PaycheckDeductionWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
    employeeDeductionId: PZ.IntegerFilterSchema,
    amount: PZ.NumberFilterSchema,
    paycheck: z
      .object({
        some: PaycheckOwnWhereSchema,
        every: PaycheckOwnWhereSchema,
        none: PaycheckOwnWhereSchema,
      })
      .partial(),
    employeeDeduction: z
      .object({
        some: EmployeeDeductionOwnWhereSchema,
        every: EmployeeDeductionOwnWhereSchema,
        none: EmployeeDeductionOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PaycheckDeductionProjectionSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    employeeDeductionId: z.boolean(),
    amount: z.boolean(),
    paycheck: PaycheckOwnQueryOneSchema,
    employeeDeduction: EmployeeDeductionOwnQueryOneSchema,
  })
  .partial();

export const PaycheckDeductionQueryOneSchema = z
  .object({
    where: PaycheckDeductionWhereSchema,
    select: PaycheckDeductionProjectionSchema,
    omit: PaycheckDeductionProjectionSchema,
  })
  .partial();

export const PaycheckDeductionQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PaycheckDeductionWhereSchema,
    select: PaycheckDeductionProjectionSchema,
    omit: PaycheckDeductionProjectionSchema,
  })
  .partial();

export const EmployeeTaxDataCreateSchema = z.object({
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime().optional(),
  employeeId: z.int(),
  federalStatus: TaxFilingStatusSchema.optional(),
  dependentsCredit: z.number().optional(),
  multipleJobs: z.boolean().optional(),
  otherIncome: z.number().optional(),
  deductionsAmount: z.number().optional(),
  extraWithholding: z.number().optional(),
  isExempt: z.boolean().optional(),
  isNonResidentAlien: z.boolean().optional(),
});

export const EmployeeTaxDataUpdateSchema = z.object({
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional().optional(),
  employeeId: z.int().optional(),
  federalStatus: TaxFilingStatusSchema.optional().optional(),
  dependentsCredit: z.number().optional().optional(),
  multipleJobs: z.boolean().optional().optional(),
  otherIncome: z.number().optional().optional(),
  deductionsAmount: z.number().optional().optional(),
  extraWithholding: z.number().optional().optional(),
  isExempt: z.boolean().optional().optional(),
  isNonResidentAlien: z.boolean().optional().optional(),
});

export const EmployeeTaxDataOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    dependentsCredit: PZ.OrderDirectionSchema,
    multipleJobs: PZ.OrderDirectionSchema,
    otherIncome: PZ.OrderDirectionSchema,
    deductionsAmount: PZ.OrderDirectionSchema,
    extraWithholding: PZ.OrderDirectionSchema,
    isExempt: PZ.OrderDirectionSchema,
    isNonResidentAlien: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmployeeTaxDataWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    federalStatus: TaxFilingStatusSchema,
    dependentsCredit: PZ.NumberFilterSchema,
    multipleJobs: PZ.BooleanFilterSchema,
    otherIncome: PZ.NumberFilterSchema,
    deductionsAmount: PZ.NumberFilterSchema,
    extraWithholding: PZ.NumberFilterSchema,
    isExempt: PZ.BooleanFilterSchema,
    isNonResidentAlien: PZ.BooleanFilterSchema,
    stateTaxes: z
      .object({
        some: StateTaxWithholdingOwnWhereSchema,
        every: StateTaxWithholdingOwnWhereSchema,
        none: StateTaxWithholdingOwnWhereSchema,
      })
      .partial(),
    localTaxes: z
      .object({
        some: LocalTaxWithholdingOwnWhereSchema,
        every: LocalTaxWithholdingOwnWhereSchema,
        none: LocalTaxWithholdingOwnWhereSchema,
      })
      .partial(),
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmployeeTaxDataProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    employeeId: z.boolean(),
    federalStatus: z.boolean(),
    dependentsCredit: z.boolean(),
    multipleJobs: z.boolean(),
    otherIncome: z.boolean(),
    deductionsAmount: z.boolean(),
    extraWithholding: z.boolean(),
    isExempt: z.boolean(),
    isNonResidentAlien: z.boolean(),
    stateTaxes: StateTaxWithholdingOwnQuerySchema,
    localTaxes: LocalTaxWithholdingOwnQuerySchema,
    employee: EmployeeOwnQueryOneSchema,
  })
  .partial();

export const EmployeeTaxDataQueryOneSchema = z
  .object({
    where: EmployeeTaxDataWhereSchema,
    select: EmployeeTaxDataProjectionSchema,
    omit: EmployeeTaxDataProjectionSchema,
  })
  .partial();

export const EmployeeTaxDataQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmployeeTaxDataWhereSchema,
    select: EmployeeTaxDataProjectionSchema,
    omit: EmployeeTaxDataProjectionSchema,
  })
  .partial();

export const StateTaxWithholdingCreateSchema = z.object({
  taxDataId: z.int(),
  stateCode: z.string(),
  stateStatus: z.string().optional(),
  allowances: z.int().optional(),
  extraWithholding: z.number().optional(),
});

export const StateTaxWithholdingUpdateSchema = z.object({
  taxDataId: z.int().optional(),
  stateCode: z.string().optional(),
  stateStatus: z.string().optional().optional(),
  allowances: z.int().optional().optional(),
  extraWithholding: z.number().optional().optional(),
});

export const StateTaxWithholdingOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    taxDataId: PZ.OrderDirectionSchema,
    stateCode: PZ.OrderDirectionSchema,
    stateStatus: PZ.OrderDirectionSchema,
    allowances: PZ.OrderDirectionSchema,
    extraWithholding: PZ.OrderDirectionSchema,
  })
  .partial();

export const StateTaxWithholdingWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    taxDataId: PZ.IntegerFilterSchema,
    stateCode: PZ.StringFilterSchema,
    stateStatus: PZ.StringFilterSchema,
    allowances: PZ.IntegerFilterSchema,
    extraWithholding: PZ.NumberFilterSchema,
    taxData: z
      .object({
        some: EmployeeTaxDataOwnWhereSchema,
        every: EmployeeTaxDataOwnWhereSchema,
        none: EmployeeTaxDataOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const StateTaxWithholdingProjectionSchema = z
  .object({
    id: z.boolean(),
    taxDataId: z.boolean(),
    stateCode: z.boolean(),
    stateStatus: z.boolean(),
    allowances: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: EmployeeTaxDataOwnQueryOneSchema,
  })
  .partial();

export const StateTaxWithholdingQueryOneSchema = z
  .object({
    where: StateTaxWithholdingWhereSchema,
    select: StateTaxWithholdingProjectionSchema,
    omit: StateTaxWithholdingProjectionSchema,
  })
  .partial();

export const StateTaxWithholdingQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: StateTaxWithholdingWhereSchema,
    select: StateTaxWithholdingProjectionSchema,
    omit: StateTaxWithholdingProjectionSchema,
  })
  .partial();

export const LocalTaxWithholdingCreateSchema = z.object({
  taxDataId: z.int(),
  jurisdiction: z.string(),
  localStatus: z.string().optional(),
  extraWithholding: z.number().optional(),
});

export const LocalTaxWithholdingUpdateSchema = z.object({
  taxDataId: z.int().optional(),
  jurisdiction: z.string().optional(),
  localStatus: z.string().optional().optional(),
  extraWithholding: z.number().optional().optional(),
});

export const LocalTaxWithholdingOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    taxDataId: PZ.OrderDirectionSchema,
    jurisdiction: PZ.OrderDirectionSchema,
    localStatus: PZ.OrderDirectionSchema,
    extraWithholding: PZ.OrderDirectionSchema,
  })
  .partial();

export const LocalTaxWithholdingWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    taxDataId: PZ.IntegerFilterSchema,
    jurisdiction: PZ.StringFilterSchema,
    localStatus: PZ.StringFilterSchema,
    extraWithholding: PZ.NumberFilterSchema,
    taxData: z
      .object({
        some: EmployeeTaxDataOwnWhereSchema,
        every: EmployeeTaxDataOwnWhereSchema,
        none: EmployeeTaxDataOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const LocalTaxWithholdingProjectionSchema = z
  .object({
    id: z.boolean(),
    taxDataId: z.boolean(),
    jurisdiction: z.boolean(),
    localStatus: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: EmployeeTaxDataOwnQueryOneSchema,
  })
  .partial();

export const LocalTaxWithholdingQueryOneSchema = z
  .object({
    where: LocalTaxWithholdingWhereSchema,
    select: LocalTaxWithholdingProjectionSchema,
    omit: LocalTaxWithholdingProjectionSchema,
  })
  .partial();

export const LocalTaxWithholdingQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: LocalTaxWithholdingWhereSchema,
    select: LocalTaxWithholdingProjectionSchema,
    omit: LocalTaxWithholdingProjectionSchema,
  })
  .partial();

export const PayrollRunCreateSchema = z.object({
  resolverId: z.int(),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime(),
  payDate: z.iso.datetime(),
  status: PayrollStatusSchema.optional(),
});

export const PayrollRunUpdateSchema = z.object({
  resolverId: z.int().optional(),
  startDate: z.iso.datetime().optional(),
  endDate: z.iso.datetime().optional(),
  payDate: z.iso.datetime().optional(),
  status: PayrollStatusSchema.optional().optional(),
});

export const PayrollRunOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    resolverId: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
    payDate: PZ.OrderDirectionSchema,
  })
  .partial();

export const PayrollRunWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    resolverId: PZ.IntegerFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    payDate: PZ.DateTimeFilterSchema,
    status: PayrollStatusSchema,
    approvedBy: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    paychecks: z
      .object({
        some: PaycheckOwnWhereSchema,
        every: PaycheckOwnWhereSchema,
        none: PaycheckOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PayrollRunProjectionSchema = z
  .object({
    id: z.boolean(),
    resolverId: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    payDate: z.boolean(),
    status: z.boolean(),
    approvedBy: EmployeeOwnQueryOneSchema,
    paychecks: PaycheckOwnQuerySchema,
  })
  .partial();

export const PayrollRunQueryOneSchema = z
  .object({
    where: PayrollRunWhereSchema,
    select: PayrollRunProjectionSchema,
    omit: PayrollRunProjectionSchema,
  })
  .partial();

export const PayrollRunQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PayrollRunWhereSchema,
    select: PayrollRunProjectionSchema,
    omit: PayrollRunProjectionSchema,
  })
  .partial();

export const ContactCreateSchema = z.object({
  employeeId: z.int(),
});

export const ContactUpdateSchema = z.object({
  employeeId: z.int().optional(),
});

export const ContactOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
  })
  .partial();

export const ContactWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    employee: z
      .object({
        some: EmployeeOwnWhereSchema,
        every: EmployeeOwnWhereSchema,
        none: EmployeeOwnWhereSchema,
      })
      .partial(),
    emails: z
      .object({
        some: EmailOwnWhereSchema,
        every: EmailOwnWhereSchema,
        none: EmailOwnWhereSchema,
      })
      .partial(),
    phones: z
      .object({
        some: PhoneOwnWhereSchema,
        every: PhoneOwnWhereSchema,
        none: PhoneOwnWhereSchema,
      })
      .partial(),
    addresses: z
      .object({
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      })
      .partial(),
    primaryEmail: z
      .object({
        some: PrimaryEmailOwnWhereSchema,
        every: PrimaryEmailOwnWhereSchema,
        none: PrimaryEmailOwnWhereSchema,
      })
      .partial(),
    primaryPhone: z
      .object({
        some: PrimaryPhoneOwnWhereSchema,
        every: PrimaryPhoneOwnWhereSchema,
        none: PrimaryPhoneOwnWhereSchema,
      })
      .partial(),
    primaryAddress: z
      .object({
        some: PrimaryAddressOwnWhereSchema,
        every: PrimaryAddressOwnWhereSchema,
        none: PrimaryAddressOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ContactProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    employee: EmployeeOwnQueryOneSchema,
    emails: EmailOwnQuerySchema,
    phones: PhoneOwnQuerySchema,
    addresses: AddressOwnQuerySchema,
    primaryEmail: PrimaryEmailOwnQueryOneSchema,
    primaryPhone: PrimaryPhoneOwnQueryOneSchema,
    primaryAddress: PrimaryAddressOwnQueryOneSchema,
  })
  .partial();

export const ContactQueryOneSchema = z
  .object({
    where: ContactWhereSchema,
    select: ContactProjectionSchema,
    omit: ContactProjectionSchema,
  })
  .partial();

export const ContactQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: ContactWhereSchema,
    select: ContactProjectionSchema,
    omit: ContactProjectionSchema,
  })
  .partial();

export const CountryCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const CountryUpdateSchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
});

export const CountryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial();

export const CountryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    states: z
      .object({
        some: StateOwnWhereSchema,
        every: StateOwnWhereSchema,
        none: StateOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CountryProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: StateOwnQuerySchema,
  })
  .partial();

export const CountryQueryOneSchema = z
  .object({
    where: CountryWhereSchema,
    select: CountryProjectionSchema,
    omit: CountryProjectionSchema,
  })
  .partial();

export const CountryQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: CountryWhereSchema,
    select: CountryProjectionSchema,
    omit: CountryProjectionSchema,
  })
  .partial();

export const StateCreateSchema = z.object({
  countryId: z.int(),
  name: z.string(),
  code: z.string(),
});

export const StateUpdateSchema = z.object({
  countryId: z.int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
});

export const StateOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    countryId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial();

export const StateWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    countryId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    country: z
      .object({
        some: CountryOwnWhereSchema,
        every: CountryOwnWhereSchema,
        none: CountryOwnWhereSchema,
      })
      .partial(),
    addresses: z
      .object({
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const StateProjectionSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    country: CountryOwnQueryOneSchema,
    addresses: AddressOwnQuerySchema,
  })
  .partial();

export const StateQueryOneSchema = z
  .object({
    where: StateWhereSchema,
    select: StateProjectionSchema,
    omit: StateProjectionSchema,
  })
  .partial();

export const StateQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: StateWhereSchema,
    select: StateProjectionSchema,
    omit: StateProjectionSchema,
  })
  .partial();

export const AddressCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: z.int(),
  stateId: z.int(),
  street: z.string(),
  zip: z.string(),
  city: z.string(),
});

export const AddressUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: z.int().optional(),
  stateId: z.int().optional(),
  street: z.string().optional(),
  zip: z.string().optional(),
  city: z.string().optional(),
});

export const AddressOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    stateId: PZ.OrderDirectionSchema,
    street: PZ.OrderDirectionSchema,
    zip: PZ.OrderDirectionSchema,
    city: PZ.OrderDirectionSchema,
  })
  .partial();

export const AddressWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    stateId: PZ.IntegerFilterSchema,
    street: PZ.StringFilterSchema,
    zip: PZ.StringFilterSchema,
    city: PZ.StringFilterSchema,
    state: z
      .object({
        some: StateOwnWhereSchema,
        every: StateOwnWhereSchema,
        none: StateOwnWhereSchema,
      })
      .partial(),
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
    primary: z
      .object({
        some: PrimaryAddressOwnWhereSchema,
        every: PrimaryAddressOwnWhereSchema,
        none: PrimaryAddressOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AddressProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    stateId: z.boolean(),
    street: z.boolean(),
    zip: z.boolean(),
    city: z.boolean(),
    state: StateOwnQueryOneSchema,
    contact: ContactOwnQueryOneSchema,
    primary: PrimaryAddressOwnQueryOneSchema,
  })
  .partial();

export const AddressQueryOneSchema = z
  .object({
    where: AddressWhereSchema,
    select: AddressProjectionSchema,
    omit: AddressProjectionSchema,
  })
  .partial();

export const AddressQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: AddressWhereSchema,
    select: AddressProjectionSchema,
    omit: AddressProjectionSchema,
  })
  .partial();

export const EmailCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: z.int(),
  email: z.string(),
});

export const EmailUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: z.int().optional(),
  email: z.string().optional(),
});

export const EmailOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    email: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmailWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    email: PZ.StringFilterSchema,
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
    primary: z
      .object({
        some: PrimaryEmailOwnWhereSchema,
        every: PrimaryEmailOwnWhereSchema,
        none: PrimaryEmailOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmailProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: ContactOwnQueryOneSchema,
    primary: PrimaryEmailOwnQueryOneSchema,
  })
  .partial();

export const EmailQueryOneSchema = z
  .object({
    where: EmailWhereSchema,
    select: EmailProjectionSchema,
    omit: EmailProjectionSchema,
  })
  .partial();

export const EmailQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: EmailWhereSchema,
    select: EmailProjectionSchema,
    omit: EmailProjectionSchema,
  })
  .partial();

export const PhoneCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: z.int(),
  phone: z.string(),
});

export const PhoneUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: z.int().optional(),
  phone: z.string().optional(),
});

export const PhoneOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    phone: PZ.OrderDirectionSchema,
  })
  .partial();

export const PhoneWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    phone: PZ.StringFilterSchema,
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
    primary: z
      .object({
        some: PrimaryPhoneOwnWhereSchema,
        every: PrimaryPhoneOwnWhereSchema,
        none: PrimaryPhoneOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PhoneProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: ContactOwnQueryOneSchema,
    primary: PrimaryPhoneOwnQueryOneSchema,
  })
  .partial();

export const PhoneQueryOneSchema = z
  .object({
    where: PhoneWhereSchema,
    select: PhoneProjectionSchema,
    omit: PhoneProjectionSchema,
  })
  .partial();

export const PhoneQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PhoneWhereSchema,
    select: PhoneProjectionSchema,
    omit: PhoneProjectionSchema,
  })
  .partial();

export const PrimaryEmailCreateSchema = z.object({
  emailId: z.int(),
  contactId: z.int(),
});

export const PrimaryEmailUpdateSchema = z.object({
  emailId: z.int().optional(),
  contactId: z.int().optional(),
});

export const PrimaryEmailOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    emailId: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
  })
  .partial();

export const PrimaryEmailWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    emailId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    email: z
      .object({
        some: EmailOwnWhereSchema,
        every: EmailOwnWhereSchema,
        none: EmailOwnWhereSchema,
      })
      .partial(),
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PrimaryEmailProjectionSchema = z
  .object({
    id: z.boolean(),
    emailId: z.boolean(),
    contactId: z.boolean(),
    email: EmailOwnQueryOneSchema,
    contact: ContactOwnQueryOneSchema,
  })
  .partial();

export const PrimaryEmailQueryOneSchema = z
  .object({
    where: PrimaryEmailWhereSchema,
    select: PrimaryEmailProjectionSchema,
    omit: PrimaryEmailProjectionSchema,
  })
  .partial();

export const PrimaryEmailQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PrimaryEmailWhereSchema,
    select: PrimaryEmailProjectionSchema,
    omit: PrimaryEmailProjectionSchema,
  })
  .partial();

export const PrimaryPhoneCreateSchema = z.object({
  phoneId: z.int(),
  contactId: z.int(),
});

export const PrimaryPhoneUpdateSchema = z.object({
  phoneId: z.int().optional(),
  contactId: z.int().optional(),
});

export const PrimaryPhoneOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    phoneId: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
  })
  .partial();

export const PrimaryPhoneWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    phoneId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    phone: z
      .object({
        some: PhoneOwnWhereSchema,
        every: PhoneOwnWhereSchema,
        none: PhoneOwnWhereSchema,
      })
      .partial(),
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PrimaryPhoneProjectionSchema = z
  .object({
    id: z.boolean(),
    phoneId: z.boolean(),
    contactId: z.boolean(),
    phone: PhoneOwnQueryOneSchema,
    contact: ContactOwnQueryOneSchema,
  })
  .partial();

export const PrimaryPhoneQueryOneSchema = z
  .object({
    where: PrimaryPhoneWhereSchema,
    select: PrimaryPhoneProjectionSchema,
    omit: PrimaryPhoneProjectionSchema,
  })
  .partial();

export const PrimaryPhoneQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PrimaryPhoneWhereSchema,
    select: PrimaryPhoneProjectionSchema,
    omit: PrimaryPhoneProjectionSchema,
  })
  .partial();

export const PrimaryAddressCreateSchema = z.object({
  addressId: z.int(),
  contactId: z.int(),
});

export const PrimaryAddressUpdateSchema = z.object({
  addressId: z.int().optional(),
  contactId: z.int().optional(),
});

export const PrimaryAddressOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    addressId: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
  })
  .partial();

export const PrimaryAddressWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    addressId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    address: z
      .object({
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      })
      .partial(),
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PrimaryAddressProjectionSchema = z
  .object({
    id: z.boolean(),
    addressId: z.boolean(),
    contactId: z.boolean(),
    address: AddressOwnQueryOneSchema,
    contact: ContactOwnQueryOneSchema,
  })
  .partial();

export const PrimaryAddressQueryOneSchema = z
  .object({
    where: PrimaryAddressWhereSchema,
    select: PrimaryAddressProjectionSchema,
    omit: PrimaryAddressProjectionSchema,
  })
  .partial();

export const PrimaryAddressQuerySchema = z
  .object({
    take: z.int().min(1).default(20),
    skip: z.int().min(0).default(0),
    where: PrimaryAddressWhereSchema,
    select: PrimaryAddressProjectionSchema,
    omit: PrimaryAddressProjectionSchema,
  })
  .partial();

export type DepartmentCreate = z.infer<typeof DepartmentCreateSchema>;

export type DepartmentUpdate = z.infer<typeof DepartmentUpdateSchema>;

export type DepartmentOrderBy = z.infer<typeof DepartmentOrderBySchema>;

export type DepartmentOwnProjection = z.infer<
  typeof DepartmentOwnProjectionSchema
>;

export type DepartmentOwnWhere = z.infer<typeof DepartmentOwnWhereSchema>;

export type DepartmentOwnQuery = z.infer<typeof DepartmentOwnQuerySchema>;

export type DepartmentOwnQueryOne = z.infer<typeof DepartmentOwnQueryOneSchema>;

export type DepartmentWhere = z.infer<typeof DepartmentWhereSchema>;

export type DepartmentQueryOne = z.infer<typeof DepartmentQueryOneSchema>;

export type DepartmentQuery = z.infer<typeof DepartmentQuerySchema>;

export type DepartmentProjection = z.infer<typeof DepartmentProjectionSchema>;

export type TitleCreate = z.infer<typeof TitleCreateSchema>;

export type TitleUpdate = z.infer<typeof TitleUpdateSchema>;

export type TitleOrderBy = z.infer<typeof TitleOrderBySchema>;

export type TitleOwnProjection = z.infer<typeof TitleOwnProjectionSchema>;

export type TitleOwnWhere = z.infer<typeof TitleOwnWhereSchema>;

export type TitleOwnQuery = z.infer<typeof TitleOwnQuerySchema>;

export type TitleOwnQueryOne = z.infer<typeof TitleOwnQueryOneSchema>;

export type TitleWhere = z.infer<typeof TitleWhereSchema>;

export type TitleQueryOne = z.infer<typeof TitleQueryOneSchema>;

export type TitleQuery = z.infer<typeof TitleQuerySchema>;

export type TitleProjection = z.infer<typeof TitleProjectionSchema>;

export type PersonalDataCreate = z.infer<typeof PersonalDataCreateSchema>;

export type PersonalDataUpdate = z.infer<typeof PersonalDataUpdateSchema>;

export type PersonalDataOrderBy = z.infer<typeof PersonalDataOrderBySchema>;

export type PersonalDataOwnProjection = z.infer<
  typeof PersonalDataOwnProjectionSchema
>;

export type PersonalDataOwnWhere = z.infer<typeof PersonalDataOwnWhereSchema>;

export type PersonalDataOwnQuery = z.infer<typeof PersonalDataOwnQuerySchema>;

export type PersonalDataOwnQueryOne = z.infer<
  typeof PersonalDataOwnQueryOneSchema
>;

export type PersonalDataWhere = z.infer<typeof PersonalDataWhereSchema>;

export type PersonalDataQueryOne = z.infer<typeof PersonalDataQueryOneSchema>;

export type PersonalDataQuery = z.infer<typeof PersonalDataQuerySchema>;

export type PersonalDataProjection = z.infer<
  typeof PersonalDataProjectionSchema
>;

export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;

export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;

export type EmployeeOrderBy = z.infer<typeof EmployeeOrderBySchema>;

export type EmployeeOwnProjection = z.infer<typeof EmployeeOwnProjectionSchema>;

export type EmployeeOwnWhere = z.infer<typeof EmployeeOwnWhereSchema>;

export type EmployeeOwnQuery = z.infer<typeof EmployeeOwnQuerySchema>;

export type EmployeeOwnQueryOne = z.infer<typeof EmployeeOwnQueryOneSchema>;

export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;

export type EmployeeQueryOne = z.infer<typeof EmployeeQueryOneSchema>;

export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;

export type EmployeeProjection = z.infer<typeof EmployeeProjectionSchema>;

export type TeamCreate = z.infer<typeof TeamCreateSchema>;

export type TeamUpdate = z.infer<typeof TeamUpdateSchema>;

export type TeamOrderBy = z.infer<typeof TeamOrderBySchema>;

export type TeamOwnProjection = z.infer<typeof TeamOwnProjectionSchema>;

export type TeamOwnWhere = z.infer<typeof TeamOwnWhereSchema>;

export type TeamOwnQuery = z.infer<typeof TeamOwnQuerySchema>;

export type TeamOwnQueryOne = z.infer<typeof TeamOwnQueryOneSchema>;

export type TeamWhere = z.infer<typeof TeamWhereSchema>;

export type TeamQueryOne = z.infer<typeof TeamQueryOneSchema>;

export type TeamQuery = z.infer<typeof TeamQuerySchema>;

export type TeamProjection = z.infer<typeof TeamProjectionSchema>;

export type TeamManagerCreate = z.infer<typeof TeamManagerCreateSchema>;

export type TeamManagerUpdate = z.infer<typeof TeamManagerUpdateSchema>;

export type TeamManagerOrderBy = z.infer<typeof TeamManagerOrderBySchema>;

export type TeamManagerOwnProjection = z.infer<
  typeof TeamManagerOwnProjectionSchema
>;

export type TeamManagerOwnWhere = z.infer<typeof TeamManagerOwnWhereSchema>;

export type TeamManagerOwnQuery = z.infer<typeof TeamManagerOwnQuerySchema>;

export type TeamManagerOwnQueryOne = z.infer<
  typeof TeamManagerOwnQueryOneSchema
>;

export type TeamManagerWhere = z.infer<typeof TeamManagerWhereSchema>;

export type TeamManagerQueryOne = z.infer<typeof TeamManagerQueryOneSchema>;

export type TeamManagerQuery = z.infer<typeof TeamManagerQuerySchema>;

export type TeamManagerProjection = z.infer<typeof TeamManagerProjectionSchema>;

export type TeamMemberCreate = z.infer<typeof TeamMemberCreateSchema>;

export type TeamMemberUpdate = z.infer<typeof TeamMemberUpdateSchema>;

export type TeamMemberOrderBy = z.infer<typeof TeamMemberOrderBySchema>;

export type TeamMemberOwnProjection = z.infer<
  typeof TeamMemberOwnProjectionSchema
>;

export type TeamMemberOwnWhere = z.infer<typeof TeamMemberOwnWhereSchema>;

export type TeamMemberOwnQuery = z.infer<typeof TeamMemberOwnQuerySchema>;

export type TeamMemberOwnQueryOne = z.infer<typeof TeamMemberOwnQueryOneSchema>;

export type TeamMemberWhere = z.infer<typeof TeamMemberWhereSchema>;

export type TeamMemberQueryOne = z.infer<typeof TeamMemberQueryOneSchema>;

export type TeamMemberQuery = z.infer<typeof TeamMemberQuerySchema>;

export type TeamMemberProjection = z.infer<typeof TeamMemberProjectionSchema>;

export type SalaryCreate = z.infer<typeof SalaryCreateSchema>;

export type SalaryUpdate = z.infer<typeof SalaryUpdateSchema>;

export type SalaryOrderBy = z.infer<typeof SalaryOrderBySchema>;

export type SalaryOwnProjection = z.infer<typeof SalaryOwnProjectionSchema>;

export type SalaryOwnWhere = z.infer<typeof SalaryOwnWhereSchema>;

export type SalaryOwnQuery = z.infer<typeof SalaryOwnQuerySchema>;

export type SalaryOwnQueryOne = z.infer<typeof SalaryOwnQueryOneSchema>;

export type SalaryWhere = z.infer<typeof SalaryWhereSchema>;

export type SalaryQueryOne = z.infer<typeof SalaryQueryOneSchema>;

export type SalaryQuery = z.infer<typeof SalaryQuerySchema>;

export type SalaryProjection = z.infer<typeof SalaryProjectionSchema>;

export type SalaryHistoryCreate = z.infer<typeof SalaryHistoryCreateSchema>;

export type SalaryHistoryUpdate = z.infer<typeof SalaryHistoryUpdateSchema>;

export type SalaryHistoryOrderBy = z.infer<typeof SalaryHistoryOrderBySchema>;

export type SalaryHistoryOwnProjection = z.infer<
  typeof SalaryHistoryOwnProjectionSchema
>;

export type SalaryHistoryOwnWhere = z.infer<typeof SalaryHistoryOwnWhereSchema>;

export type SalaryHistoryOwnQuery = z.infer<typeof SalaryHistoryOwnQuerySchema>;

export type SalaryHistoryOwnQueryOne = z.infer<
  typeof SalaryHistoryOwnQueryOneSchema
>;

export type SalaryHistoryWhere = z.infer<typeof SalaryHistoryWhereSchema>;

export type SalaryHistoryQueryOne = z.infer<typeof SalaryHistoryQueryOneSchema>;

export type SalaryHistoryQuery = z.infer<typeof SalaryHistoryQuerySchema>;

export type SalaryHistoryProjection = z.infer<
  typeof SalaryHistoryProjectionSchema
>;

export type BenefitCreate = z.infer<typeof BenefitCreateSchema>;

export type BenefitUpdate = z.infer<typeof BenefitUpdateSchema>;

export type BenefitOrderBy = z.infer<typeof BenefitOrderBySchema>;

export type BenefitOwnProjection = z.infer<typeof BenefitOwnProjectionSchema>;

export type BenefitOwnWhere = z.infer<typeof BenefitOwnWhereSchema>;

export type BenefitOwnQuery = z.infer<typeof BenefitOwnQuerySchema>;

export type BenefitOwnQueryOne = z.infer<typeof BenefitOwnQueryOneSchema>;

export type BenefitWhere = z.infer<typeof BenefitWhereSchema>;

export type BenefitQueryOne = z.infer<typeof BenefitQueryOneSchema>;

export type BenefitQuery = z.infer<typeof BenefitQuerySchema>;

export type BenefitProjection = z.infer<typeof BenefitProjectionSchema>;

export type BenefitEnrolmentCreate = z.infer<
  typeof BenefitEnrolmentCreateSchema
>;

export type BenefitEnrolmentUpdate = z.infer<
  typeof BenefitEnrolmentUpdateSchema
>;

export type BenefitEnrolmentOrderBy = z.infer<
  typeof BenefitEnrolmentOrderBySchema
>;

export type BenefitEnrolmentOwnProjection = z.infer<
  typeof BenefitEnrolmentOwnProjectionSchema
>;

export type BenefitEnrolmentOwnWhere = z.infer<
  typeof BenefitEnrolmentOwnWhereSchema
>;

export type BenefitEnrolmentOwnQuery = z.infer<
  typeof BenefitEnrolmentOwnQuerySchema
>;

export type BenefitEnrolmentOwnQueryOne = z.infer<
  typeof BenefitEnrolmentOwnQueryOneSchema
>;

export type BenefitEnrolmentWhere = z.infer<typeof BenefitEnrolmentWhereSchema>;

export type BenefitEnrolmentQueryOne = z.infer<
  typeof BenefitEnrolmentQueryOneSchema
>;

export type BenefitEnrolmentQuery = z.infer<typeof BenefitEnrolmentQuerySchema>;

export type BenefitEnrolmentProjection = z.infer<
  typeof BenefitEnrolmentProjectionSchema
>;

export type TitleHistoryCreate = z.infer<typeof TitleHistoryCreateSchema>;

export type TitleHistoryUpdate = z.infer<typeof TitleHistoryUpdateSchema>;

export type TitleHistoryOrderBy = z.infer<typeof TitleHistoryOrderBySchema>;

export type TitleHistoryOwnProjection = z.infer<
  typeof TitleHistoryOwnProjectionSchema
>;

export type TitleHistoryOwnWhere = z.infer<typeof TitleHistoryOwnWhereSchema>;

export type TitleHistoryOwnQuery = z.infer<typeof TitleHistoryOwnQuerySchema>;

export type TitleHistoryOwnQueryOne = z.infer<
  typeof TitleHistoryOwnQueryOneSchema
>;

export type TitleHistoryWhere = z.infer<typeof TitleHistoryWhereSchema>;

export type TitleHistoryQueryOne = z.infer<typeof TitleHistoryQueryOneSchema>;

export type TitleHistoryQuery = z.infer<typeof TitleHistoryQuerySchema>;

export type TitleHistoryProjection = z.infer<
  typeof TitleHistoryProjectionSchema
>;

export type TimeOffPolicyCreate = z.infer<typeof TimeOffPolicyCreateSchema>;

export type TimeOffPolicyUpdate = z.infer<typeof TimeOffPolicyUpdateSchema>;

export type TimeOffPolicyOrderBy = z.infer<typeof TimeOffPolicyOrderBySchema>;

export type TimeOffPolicyOwnProjection = z.infer<
  typeof TimeOffPolicyOwnProjectionSchema
>;

export type TimeOffPolicyOwnWhere = z.infer<typeof TimeOffPolicyOwnWhereSchema>;

export type TimeOffPolicyOwnQuery = z.infer<typeof TimeOffPolicyOwnQuerySchema>;

export type TimeOffPolicyOwnQueryOne = z.infer<
  typeof TimeOffPolicyOwnQueryOneSchema
>;

export type TimeOffPolicyWhere = z.infer<typeof TimeOffPolicyWhereSchema>;

export type TimeOffPolicyQueryOne = z.infer<typeof TimeOffPolicyQueryOneSchema>;

export type TimeOffPolicyQuery = z.infer<typeof TimeOffPolicyQuerySchema>;

export type TimeOffPolicyProjection = z.infer<
  typeof TimeOffPolicyProjectionSchema
>;

export type TimeOffBalanceCreate = z.infer<typeof TimeOffBalanceCreateSchema>;

export type TimeOffBalanceUpdate = z.infer<typeof TimeOffBalanceUpdateSchema>;

export type TimeOffBalanceOrderBy = z.infer<typeof TimeOffBalanceOrderBySchema>;

export type TimeOffBalanceOwnProjection = z.infer<
  typeof TimeOffBalanceOwnProjectionSchema
>;

export type TimeOffBalanceOwnWhere = z.infer<
  typeof TimeOffBalanceOwnWhereSchema
>;

export type TimeOffBalanceOwnQuery = z.infer<
  typeof TimeOffBalanceOwnQuerySchema
>;

export type TimeOffBalanceOwnQueryOne = z.infer<
  typeof TimeOffBalanceOwnQueryOneSchema
>;

export type TimeOffBalanceWhere = z.infer<typeof TimeOffBalanceWhereSchema>;

export type TimeOffBalanceQueryOne = z.infer<
  typeof TimeOffBalanceQueryOneSchema
>;

export type TimeOffBalanceQuery = z.infer<typeof TimeOffBalanceQuerySchema>;

export type TimeOffBalanceProjection = z.infer<
  typeof TimeOffBalanceProjectionSchema
>;

export type TimeOffRequestCreate = z.infer<typeof TimeOffRequestCreateSchema>;

export type TimeOffRequestUpdate = z.infer<typeof TimeOffRequestUpdateSchema>;

export type TimeOffRequestOrderBy = z.infer<typeof TimeOffRequestOrderBySchema>;

export type TimeOffRequestOwnProjection = z.infer<
  typeof TimeOffRequestOwnProjectionSchema
>;

export type TimeOffRequestOwnWhere = z.infer<
  typeof TimeOffRequestOwnWhereSchema
>;

export type TimeOffRequestOwnQuery = z.infer<
  typeof TimeOffRequestOwnQuerySchema
>;

export type TimeOffRequestOwnQueryOne = z.infer<
  typeof TimeOffRequestOwnQueryOneSchema
>;

export type TimeOffRequestWhere = z.infer<typeof TimeOffRequestWhereSchema>;

export type TimeOffRequestQueryOne = z.infer<
  typeof TimeOffRequestQueryOneSchema
>;

export type TimeOffRequestQuery = z.infer<typeof TimeOffRequestQuerySchema>;

export type TimeOffRequestProjection = z.infer<
  typeof TimeOffRequestProjectionSchema
>;

export type TimeOffTransactionCreate = z.infer<
  typeof TimeOffTransactionCreateSchema
>;

export type TimeOffTransactionUpdate = z.infer<
  typeof TimeOffTransactionUpdateSchema
>;

export type TimeOffTransactionOrderBy = z.infer<
  typeof TimeOffTransactionOrderBySchema
>;

export type TimeOffTransactionOwnProjection = z.infer<
  typeof TimeOffTransactionOwnProjectionSchema
>;

export type TimeOffTransactionOwnWhere = z.infer<
  typeof TimeOffTransactionOwnWhereSchema
>;

export type TimeOffTransactionOwnQuery = z.infer<
  typeof TimeOffTransactionOwnQuerySchema
>;

export type TimeOffTransactionOwnQueryOne = z.infer<
  typeof TimeOffTransactionOwnQueryOneSchema
>;

export type TimeOffTransactionWhere = z.infer<
  typeof TimeOffTransactionWhereSchema
>;

export type TimeOffTransactionQueryOne = z.infer<
  typeof TimeOffTransactionQueryOneSchema
>;

export type TimeOffTransactionQuery = z.infer<
  typeof TimeOffTransactionQuerySchema
>;

export type TimeOffTransactionProjection = z.infer<
  typeof TimeOffTransactionProjectionSchema
>;

export type ClockInCreate = z.infer<typeof ClockInCreateSchema>;

export type ClockInUpdate = z.infer<typeof ClockInUpdateSchema>;

export type ClockInOrderBy = z.infer<typeof ClockInOrderBySchema>;

export type ClockInOwnProjection = z.infer<typeof ClockInOwnProjectionSchema>;

export type ClockInOwnWhere = z.infer<typeof ClockInOwnWhereSchema>;

export type ClockInOwnQuery = z.infer<typeof ClockInOwnQuerySchema>;

export type ClockInOwnQueryOne = z.infer<typeof ClockInOwnQueryOneSchema>;

export type ClockInWhere = z.infer<typeof ClockInWhereSchema>;

export type ClockInQueryOne = z.infer<typeof ClockInQueryOneSchema>;

export type ClockInQuery = z.infer<typeof ClockInQuerySchema>;

export type ClockInProjection = z.infer<typeof ClockInProjectionSchema>;

export type PaycheckCreate = z.infer<typeof PaycheckCreateSchema>;

export type PaycheckUpdate = z.infer<typeof PaycheckUpdateSchema>;

export type PaycheckOrderBy = z.infer<typeof PaycheckOrderBySchema>;

export type PaycheckOwnProjection = z.infer<typeof PaycheckOwnProjectionSchema>;

export type PaycheckOwnWhere = z.infer<typeof PaycheckOwnWhereSchema>;

export type PaycheckOwnQuery = z.infer<typeof PaycheckOwnQuerySchema>;

export type PaycheckOwnQueryOne = z.infer<typeof PaycheckOwnQueryOneSchema>;

export type PaycheckWhere = z.infer<typeof PaycheckWhereSchema>;

export type PaycheckQueryOne = z.infer<typeof PaycheckQueryOneSchema>;

export type PaycheckQuery = z.infer<typeof PaycheckQuerySchema>;

export type PaycheckProjection = z.infer<typeof PaycheckProjectionSchema>;

export type EarningCreate = z.infer<typeof EarningCreateSchema>;

export type EarningUpdate = z.infer<typeof EarningUpdateSchema>;

export type EarningOrderBy = z.infer<typeof EarningOrderBySchema>;

export type EarningOwnProjection = z.infer<typeof EarningOwnProjectionSchema>;

export type EarningOwnWhere = z.infer<typeof EarningOwnWhereSchema>;

export type EarningOwnQuery = z.infer<typeof EarningOwnQuerySchema>;

export type EarningOwnQueryOne = z.infer<typeof EarningOwnQueryOneSchema>;

export type EarningWhere = z.infer<typeof EarningWhereSchema>;

export type EarningQueryOne = z.infer<typeof EarningQueryOneSchema>;

export type EarningQuery = z.infer<typeof EarningQuerySchema>;

export type EarningProjection = z.infer<typeof EarningProjectionSchema>;

export type PaycheckTaxCreate = z.infer<typeof PaycheckTaxCreateSchema>;

export type PaycheckTaxUpdate = z.infer<typeof PaycheckTaxUpdateSchema>;

export type PaycheckTaxOrderBy = z.infer<typeof PaycheckTaxOrderBySchema>;

export type PaycheckTaxOwnProjection = z.infer<
  typeof PaycheckTaxOwnProjectionSchema
>;

export type PaycheckTaxOwnWhere = z.infer<typeof PaycheckTaxOwnWhereSchema>;

export type PaycheckTaxOwnQuery = z.infer<typeof PaycheckTaxOwnQuerySchema>;

export type PaycheckTaxOwnQueryOne = z.infer<
  typeof PaycheckTaxOwnQueryOneSchema
>;

export type PaycheckTaxWhere = z.infer<typeof PaycheckTaxWhereSchema>;

export type PaycheckTaxQueryOne = z.infer<typeof PaycheckTaxQueryOneSchema>;

export type PaycheckTaxQuery = z.infer<typeof PaycheckTaxQuerySchema>;

export type PaycheckTaxProjection = z.infer<typeof PaycheckTaxProjectionSchema>;

export type DeductionPolicyCreate = z.infer<typeof DeductionPolicyCreateSchema>;

export type DeductionPolicyUpdate = z.infer<typeof DeductionPolicyUpdateSchema>;

export type DeductionPolicyOrderBy = z.infer<
  typeof DeductionPolicyOrderBySchema
>;

export type DeductionPolicyOwnProjection = z.infer<
  typeof DeductionPolicyOwnProjectionSchema
>;

export type DeductionPolicyOwnWhere = z.infer<
  typeof DeductionPolicyOwnWhereSchema
>;

export type DeductionPolicyOwnQuery = z.infer<
  typeof DeductionPolicyOwnQuerySchema
>;

export type DeductionPolicyOwnQueryOne = z.infer<
  typeof DeductionPolicyOwnQueryOneSchema
>;

export type DeductionPolicyWhere = z.infer<typeof DeductionPolicyWhereSchema>;

export type DeductionPolicyQueryOne = z.infer<
  typeof DeductionPolicyQueryOneSchema
>;

export type DeductionPolicyQuery = z.infer<typeof DeductionPolicyQuerySchema>;

export type DeductionPolicyProjection = z.infer<
  typeof DeductionPolicyProjectionSchema
>;

export type EmployeeDeductionCreate = z.infer<
  typeof EmployeeDeductionCreateSchema
>;

export type EmployeeDeductionUpdate = z.infer<
  typeof EmployeeDeductionUpdateSchema
>;

export type EmployeeDeductionOrderBy = z.infer<
  typeof EmployeeDeductionOrderBySchema
>;

export type EmployeeDeductionOwnProjection = z.infer<
  typeof EmployeeDeductionOwnProjectionSchema
>;

export type EmployeeDeductionOwnWhere = z.infer<
  typeof EmployeeDeductionOwnWhereSchema
>;

export type EmployeeDeductionOwnQuery = z.infer<
  typeof EmployeeDeductionOwnQuerySchema
>;

export type EmployeeDeductionOwnQueryOne = z.infer<
  typeof EmployeeDeductionOwnQueryOneSchema
>;

export type EmployeeDeductionWhere = z.infer<
  typeof EmployeeDeductionWhereSchema
>;

export type EmployeeDeductionQueryOne = z.infer<
  typeof EmployeeDeductionQueryOneSchema
>;

export type EmployeeDeductionQuery = z.infer<
  typeof EmployeeDeductionQuerySchema
>;

export type EmployeeDeductionProjection = z.infer<
  typeof EmployeeDeductionProjectionSchema
>;

export type PaycheckDeductionCreate = z.infer<
  typeof PaycheckDeductionCreateSchema
>;

export type PaycheckDeductionUpdate = z.infer<
  typeof PaycheckDeductionUpdateSchema
>;

export type PaycheckDeductionOrderBy = z.infer<
  typeof PaycheckDeductionOrderBySchema
>;

export type PaycheckDeductionOwnProjection = z.infer<
  typeof PaycheckDeductionOwnProjectionSchema
>;

export type PaycheckDeductionOwnWhere = z.infer<
  typeof PaycheckDeductionOwnWhereSchema
>;

export type PaycheckDeductionOwnQuery = z.infer<
  typeof PaycheckDeductionOwnQuerySchema
>;

export type PaycheckDeductionOwnQueryOne = z.infer<
  typeof PaycheckDeductionOwnQueryOneSchema
>;

export type PaycheckDeductionWhere = z.infer<
  typeof PaycheckDeductionWhereSchema
>;

export type PaycheckDeductionQueryOne = z.infer<
  typeof PaycheckDeductionQueryOneSchema
>;

export type PaycheckDeductionQuery = z.infer<
  typeof PaycheckDeductionQuerySchema
>;

export type PaycheckDeductionProjection = z.infer<
  typeof PaycheckDeductionProjectionSchema
>;

export type EmployeeTaxDataCreate = z.infer<typeof EmployeeTaxDataCreateSchema>;

export type EmployeeTaxDataUpdate = z.infer<typeof EmployeeTaxDataUpdateSchema>;

export type EmployeeTaxDataOrderBy = z.infer<
  typeof EmployeeTaxDataOrderBySchema
>;

export type EmployeeTaxDataOwnProjection = z.infer<
  typeof EmployeeTaxDataOwnProjectionSchema
>;

export type EmployeeTaxDataOwnWhere = z.infer<
  typeof EmployeeTaxDataOwnWhereSchema
>;

export type EmployeeTaxDataOwnQuery = z.infer<
  typeof EmployeeTaxDataOwnQuerySchema
>;

export type EmployeeTaxDataOwnQueryOne = z.infer<
  typeof EmployeeTaxDataOwnQueryOneSchema
>;

export type EmployeeTaxDataWhere = z.infer<typeof EmployeeTaxDataWhereSchema>;

export type EmployeeTaxDataQueryOne = z.infer<
  typeof EmployeeTaxDataQueryOneSchema
>;

export type EmployeeTaxDataQuery = z.infer<typeof EmployeeTaxDataQuerySchema>;

export type EmployeeTaxDataProjection = z.infer<
  typeof EmployeeTaxDataProjectionSchema
>;

export type StateTaxWithholdingCreate = z.infer<
  typeof StateTaxWithholdingCreateSchema
>;

export type StateTaxWithholdingUpdate = z.infer<
  typeof StateTaxWithholdingUpdateSchema
>;

export type StateTaxWithholdingOrderBy = z.infer<
  typeof StateTaxWithholdingOrderBySchema
>;

export type StateTaxWithholdingOwnProjection = z.infer<
  typeof StateTaxWithholdingOwnProjectionSchema
>;

export type StateTaxWithholdingOwnWhere = z.infer<
  typeof StateTaxWithholdingOwnWhereSchema
>;

export type StateTaxWithholdingOwnQuery = z.infer<
  typeof StateTaxWithholdingOwnQuerySchema
>;

export type StateTaxWithholdingOwnQueryOne = z.infer<
  typeof StateTaxWithholdingOwnQueryOneSchema
>;

export type StateTaxWithholdingWhere = z.infer<
  typeof StateTaxWithholdingWhereSchema
>;

export type StateTaxWithholdingQueryOne = z.infer<
  typeof StateTaxWithholdingQueryOneSchema
>;

export type StateTaxWithholdingQuery = z.infer<
  typeof StateTaxWithholdingQuerySchema
>;

export type StateTaxWithholdingProjection = z.infer<
  typeof StateTaxWithholdingProjectionSchema
>;

export type LocalTaxWithholdingCreate = z.infer<
  typeof LocalTaxWithholdingCreateSchema
>;

export type LocalTaxWithholdingUpdate = z.infer<
  typeof LocalTaxWithholdingUpdateSchema
>;

export type LocalTaxWithholdingOrderBy = z.infer<
  typeof LocalTaxWithholdingOrderBySchema
>;

export type LocalTaxWithholdingOwnProjection = z.infer<
  typeof LocalTaxWithholdingOwnProjectionSchema
>;

export type LocalTaxWithholdingOwnWhere = z.infer<
  typeof LocalTaxWithholdingOwnWhereSchema
>;

export type LocalTaxWithholdingOwnQuery = z.infer<
  typeof LocalTaxWithholdingOwnQuerySchema
>;

export type LocalTaxWithholdingOwnQueryOne = z.infer<
  typeof LocalTaxWithholdingOwnQueryOneSchema
>;

export type LocalTaxWithholdingWhere = z.infer<
  typeof LocalTaxWithholdingWhereSchema
>;

export type LocalTaxWithholdingQueryOne = z.infer<
  typeof LocalTaxWithholdingQueryOneSchema
>;

export type LocalTaxWithholdingQuery = z.infer<
  typeof LocalTaxWithholdingQuerySchema
>;

export type LocalTaxWithholdingProjection = z.infer<
  typeof LocalTaxWithholdingProjectionSchema
>;

export type PayrollRunCreate = z.infer<typeof PayrollRunCreateSchema>;

export type PayrollRunUpdate = z.infer<typeof PayrollRunUpdateSchema>;

export type PayrollRunOrderBy = z.infer<typeof PayrollRunOrderBySchema>;

export type PayrollRunOwnProjection = z.infer<
  typeof PayrollRunOwnProjectionSchema
>;

export type PayrollRunOwnWhere = z.infer<typeof PayrollRunOwnWhereSchema>;

export type PayrollRunOwnQuery = z.infer<typeof PayrollRunOwnQuerySchema>;

export type PayrollRunOwnQueryOne = z.infer<typeof PayrollRunOwnQueryOneSchema>;

export type PayrollRunWhere = z.infer<typeof PayrollRunWhereSchema>;

export type PayrollRunQueryOne = z.infer<typeof PayrollRunQueryOneSchema>;

export type PayrollRunQuery = z.infer<typeof PayrollRunQuerySchema>;

export type PayrollRunProjection = z.infer<typeof PayrollRunProjectionSchema>;

export type ContactCreate = z.infer<typeof ContactCreateSchema>;

export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;

export type ContactOrderBy = z.infer<typeof ContactOrderBySchema>;

export type ContactOwnProjection = z.infer<typeof ContactOwnProjectionSchema>;

export type ContactOwnWhere = z.infer<typeof ContactOwnWhereSchema>;

export type ContactOwnQuery = z.infer<typeof ContactOwnQuerySchema>;

export type ContactOwnQueryOne = z.infer<typeof ContactOwnQueryOneSchema>;

export type ContactWhere = z.infer<typeof ContactWhereSchema>;

export type ContactQueryOne = z.infer<typeof ContactQueryOneSchema>;

export type ContactQuery = z.infer<typeof ContactQuerySchema>;

export type ContactProjection = z.infer<typeof ContactProjectionSchema>;

export type CountryCreate = z.infer<typeof CountryCreateSchema>;

export type CountryUpdate = z.infer<typeof CountryUpdateSchema>;

export type CountryOrderBy = z.infer<typeof CountryOrderBySchema>;

export type CountryOwnProjection = z.infer<typeof CountryOwnProjectionSchema>;

export type CountryOwnWhere = z.infer<typeof CountryOwnWhereSchema>;

export type CountryOwnQuery = z.infer<typeof CountryOwnQuerySchema>;

export type CountryOwnQueryOne = z.infer<typeof CountryOwnQueryOneSchema>;

export type CountryWhere = z.infer<typeof CountryWhereSchema>;

export type CountryQueryOne = z.infer<typeof CountryQueryOneSchema>;

export type CountryQuery = z.infer<typeof CountryQuerySchema>;

export type CountryProjection = z.infer<typeof CountryProjectionSchema>;

export type StateCreate = z.infer<typeof StateCreateSchema>;

export type StateUpdate = z.infer<typeof StateUpdateSchema>;

export type StateOrderBy = z.infer<typeof StateOrderBySchema>;

export type StateOwnProjection = z.infer<typeof StateOwnProjectionSchema>;

export type StateOwnWhere = z.infer<typeof StateOwnWhereSchema>;

export type StateOwnQuery = z.infer<typeof StateOwnQuerySchema>;

export type StateOwnQueryOne = z.infer<typeof StateOwnQueryOneSchema>;

export type StateWhere = z.infer<typeof StateWhereSchema>;

export type StateQueryOne = z.infer<typeof StateQueryOneSchema>;

export type StateQuery = z.infer<typeof StateQuerySchema>;

export type StateProjection = z.infer<typeof StateProjectionSchema>;

export type AddressCreate = z.infer<typeof AddressCreateSchema>;

export type AddressUpdate = z.infer<typeof AddressUpdateSchema>;

export type AddressOrderBy = z.infer<typeof AddressOrderBySchema>;

export type AddressOwnProjection = z.infer<typeof AddressOwnProjectionSchema>;

export type AddressOwnWhere = z.infer<typeof AddressOwnWhereSchema>;

export type AddressOwnQuery = z.infer<typeof AddressOwnQuerySchema>;

export type AddressOwnQueryOne = z.infer<typeof AddressOwnQueryOneSchema>;

export type AddressWhere = z.infer<typeof AddressWhereSchema>;

export type AddressQueryOne = z.infer<typeof AddressQueryOneSchema>;

export type AddressQuery = z.infer<typeof AddressQuerySchema>;

export type AddressProjection = z.infer<typeof AddressProjectionSchema>;

export type EmailCreate = z.infer<typeof EmailCreateSchema>;

export type EmailUpdate = z.infer<typeof EmailUpdateSchema>;

export type EmailOrderBy = z.infer<typeof EmailOrderBySchema>;

export type EmailOwnProjection = z.infer<typeof EmailOwnProjectionSchema>;

export type EmailOwnWhere = z.infer<typeof EmailOwnWhereSchema>;

export type EmailOwnQuery = z.infer<typeof EmailOwnQuerySchema>;

export type EmailOwnQueryOne = z.infer<typeof EmailOwnQueryOneSchema>;

export type EmailWhere = z.infer<typeof EmailWhereSchema>;

export type EmailQueryOne = z.infer<typeof EmailQueryOneSchema>;

export type EmailQuery = z.infer<typeof EmailQuerySchema>;

export type EmailProjection = z.infer<typeof EmailProjectionSchema>;

export type PhoneCreate = z.infer<typeof PhoneCreateSchema>;

export type PhoneUpdate = z.infer<typeof PhoneUpdateSchema>;

export type PhoneOrderBy = z.infer<typeof PhoneOrderBySchema>;

export type PhoneOwnProjection = z.infer<typeof PhoneOwnProjectionSchema>;

export type PhoneOwnWhere = z.infer<typeof PhoneOwnWhereSchema>;

export type PhoneOwnQuery = z.infer<typeof PhoneOwnQuerySchema>;

export type PhoneOwnQueryOne = z.infer<typeof PhoneOwnQueryOneSchema>;

export type PhoneWhere = z.infer<typeof PhoneWhereSchema>;

export type PhoneQueryOne = z.infer<typeof PhoneQueryOneSchema>;

export type PhoneQuery = z.infer<typeof PhoneQuerySchema>;

export type PhoneProjection = z.infer<typeof PhoneProjectionSchema>;

export type PrimaryEmailCreate = z.infer<typeof PrimaryEmailCreateSchema>;

export type PrimaryEmailUpdate = z.infer<typeof PrimaryEmailUpdateSchema>;

export type PrimaryEmailOrderBy = z.infer<typeof PrimaryEmailOrderBySchema>;

export type PrimaryEmailOwnProjection = z.infer<
  typeof PrimaryEmailOwnProjectionSchema
>;

export type PrimaryEmailOwnWhere = z.infer<typeof PrimaryEmailOwnWhereSchema>;

export type PrimaryEmailOwnQuery = z.infer<typeof PrimaryEmailOwnQuerySchema>;

export type PrimaryEmailOwnQueryOne = z.infer<
  typeof PrimaryEmailOwnQueryOneSchema
>;

export type PrimaryEmailWhere = z.infer<typeof PrimaryEmailWhereSchema>;

export type PrimaryEmailQueryOne = z.infer<typeof PrimaryEmailQueryOneSchema>;

export type PrimaryEmailQuery = z.infer<typeof PrimaryEmailQuerySchema>;

export type PrimaryEmailProjection = z.infer<
  typeof PrimaryEmailProjectionSchema
>;

export type PrimaryPhoneCreate = z.infer<typeof PrimaryPhoneCreateSchema>;

export type PrimaryPhoneUpdate = z.infer<typeof PrimaryPhoneUpdateSchema>;

export type PrimaryPhoneOrderBy = z.infer<typeof PrimaryPhoneOrderBySchema>;

export type PrimaryPhoneOwnProjection = z.infer<
  typeof PrimaryPhoneOwnProjectionSchema
>;

export type PrimaryPhoneOwnWhere = z.infer<typeof PrimaryPhoneOwnWhereSchema>;

export type PrimaryPhoneOwnQuery = z.infer<typeof PrimaryPhoneOwnQuerySchema>;

export type PrimaryPhoneOwnQueryOne = z.infer<
  typeof PrimaryPhoneOwnQueryOneSchema
>;

export type PrimaryPhoneWhere = z.infer<typeof PrimaryPhoneWhereSchema>;

export type PrimaryPhoneQueryOne = z.infer<typeof PrimaryPhoneQueryOneSchema>;

export type PrimaryPhoneQuery = z.infer<typeof PrimaryPhoneQuerySchema>;

export type PrimaryPhoneProjection = z.infer<
  typeof PrimaryPhoneProjectionSchema
>;

export type PrimaryAddressCreate = z.infer<typeof PrimaryAddressCreateSchema>;

export type PrimaryAddressUpdate = z.infer<typeof PrimaryAddressUpdateSchema>;

export type PrimaryAddressOrderBy = z.infer<typeof PrimaryAddressOrderBySchema>;

export type PrimaryAddressOwnProjection = z.infer<
  typeof PrimaryAddressOwnProjectionSchema
>;

export type PrimaryAddressOwnWhere = z.infer<
  typeof PrimaryAddressOwnWhereSchema
>;

export type PrimaryAddressOwnQuery = z.infer<
  typeof PrimaryAddressOwnQuerySchema
>;

export type PrimaryAddressOwnQueryOne = z.infer<
  typeof PrimaryAddressOwnQueryOneSchema
>;

export type PrimaryAddressWhere = z.infer<typeof PrimaryAddressWhereSchema>;

export type PrimaryAddressQueryOne = z.infer<
  typeof PrimaryAddressQueryOneSchema
>;

export type PrimaryAddressQuery = z.infer<typeof PrimaryAddressQuerySchema>;

export type PrimaryAddressProjection = z.infer<
  typeof PrimaryAddressProjectionSchema
>;
