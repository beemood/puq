/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();

export const PaginationSchema = z
  .object({
    take: takeSchema,
    skip: skipSchema,
  })
  .partial();

export function jsonParser<T>(value: T) {
  if (typeof value === 'string') {
    return JSON.parse(value);
  }
  return value;
}

export function slugTransformer(key: string) {
  return (value: any) => {
    if (value.slug == undefined && value[key] != undefined) {
      return {
        ...value,
        slug: value[key] ? slugify(value[key].toString()) : null,
      };
    }
    return value;
  };
}

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

export const DepartmentOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  DepartmentOwnProjectionSchema
);

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

export const TitleOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TitleOwnProjectionSchema
);

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

export const PersonalDataOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataOwnProjectionSchema
);

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

export const EmployeeOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnProjectionSchema
);

export const TeamOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    members: z.boolean(),
    managers: z.boolean(),
  })
  .partial();

export const TeamOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnProjectionSchema
);

export const TeamManagerOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    managerId: z.boolean(),
    team: z.boolean(),
    manager: z.boolean(),
  })
  .partial();

export const TeamManagerOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerOwnProjectionSchema
);

export const TeamMemberOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    memberId: z.boolean(),
    member: z.boolean(),
    team: z.boolean(),
  })
  .partial();

export const TeamMemberOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberOwnProjectionSchema
);

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

export const SalaryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SalaryOwnProjectionSchema
);

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

export const SalaryHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryOwnProjectionSchema
);

export const BenefitOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    type: z.boolean(),
    enrolments: z.boolean(),
  })
  .partial();

export const BenefitOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  BenefitOwnProjectionSchema
);

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

export const BenefitEnrolmentOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentOwnProjectionSchema
);

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

export const TitleHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TitleHistoryOwnProjectionSchema
);

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

export const TimeOffPolicyOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyOwnProjectionSchema
);

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

export const TimeOffBalanceOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceOwnProjectionSchema
);

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

export const TimeOffRequestOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestOwnProjectionSchema
);

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

export const TimeOffTransactionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionOwnProjectionSchema
);

export const ClockInOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    clockIn: z.boolean(),
    clockOut: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const ClockInOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ClockInOwnProjectionSchema
);

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

export const PaycheckOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PaycheckOwnProjectionSchema
);

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

export const EarningOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EarningOwnProjectionSchema
);

export const PaycheckTaxOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    taxAuthority: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean(),
  })
  .partial();

export const PaycheckTaxOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxOwnProjectionSchema
);

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

export const DeductionPolicyOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyOwnProjectionSchema
);

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

export const EmployeeDeductionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionOwnProjectionSchema
);

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

export const PaycheckDeductionOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionOwnProjectionSchema
);

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

export const EmployeeTaxDataOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataOwnProjectionSchema
);

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

export const StateTaxWithholdingOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingOwnProjectionSchema
);

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

export const LocalTaxWithholdingOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingOwnProjectionSchema
);

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

export const PayrollRunOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunOwnProjectionSchema
);

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

export const ContactOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ContactOwnProjectionSchema
);

export const CountryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean(),
  })
  .partial();

export const CountryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CountryOwnProjectionSchema
);

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

export const StateOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  StateOwnProjectionSchema
);

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

export const AddressOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AddressOwnProjectionSchema
);

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

export const EmailOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmailOwnProjectionSchema
);

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

export const PhoneOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PhoneOwnProjectionSchema
);

export const PrimaryEmailOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    emailId: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryEmailOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailOwnProjectionSchema
);

export const PrimaryPhoneOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    phoneId: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryPhoneOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneOwnProjectionSchema
);

export const PrimaryAddressOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    addressId: z.boolean(),
    contactId: z.boolean(),
    address: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryAddressOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressOwnProjectionSchema
);

export const DepartmentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    isActive: PZ.BooleanFilterSchema,
  })
  .partial();

export const DepartmentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  DepartmentOwnWhereSchema
);

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

export const TitleOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TitleOwnWhereSchema
);

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

export const PersonalDataOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataOwnWhereSchema
);

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

export const EmployeeOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnWhereSchema
);

export const TeamOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const TeamOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnWhereSchema
);

export const TeamManagerOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
    managerId: PZ.IntegerFilterSchema,
  })
  .partial();

export const TeamManagerOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerOwnWhereSchema
);

export const TeamMemberOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
    memberId: PZ.IntegerFilterSchema,
  })
  .partial();

export const TeamMemberOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberOwnWhereSchema
);

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

export const SalaryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SalaryOwnWhereSchema
);

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

export const SalaryHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryOwnWhereSchema
);

export const BenefitOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    type: PZ.StringFilterSchema,
  })
  .partial();

export const BenefitOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  BenefitOwnWhereSchema
);

export const BenefitEnrolmentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    benefitId: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    status: BenefitStatusSchema,
  })
  .partial();

export const BenefitEnrolmentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentOwnWhereSchema
);

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

export const TitleHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TitleHistoryOwnWhereSchema
);

export const TimeOffPolicyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    accrualRate: PZ.NumberFilterSchema,
    maxRollover: PZ.NumberFilterSchema,
  })
  .partial();

export const TimeOffPolicyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyOwnWhereSchema
);

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

export const TimeOffBalanceOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceOwnWhereSchema
);

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

export const TimeOffRequestOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestOwnWhereSchema
);

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

export const TimeOffTransactionOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionOwnWhereSchema
);

export const ClockInOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    clockIn: PZ.DateTimeFilterSchema,
    clockOut: PZ.DateTimeFilterSchema,
  })
  .partial();

export const ClockInOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ClockInOwnWhereSchema
);

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

export const PaycheckOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckOwnWhereSchema
);

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

export const EarningOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EarningOwnWhereSchema
);

export const PaycheckTaxOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
    taxAuthority: PZ.StringFilterSchema,
    amount: PZ.NumberFilterSchema,
  })
  .partial();

export const PaycheckTaxOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxOwnWhereSchema
);

export const DeductionPolicyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    type: DeductionTypeSchema,
    defaultAmount: PZ.NumberFilterSchema,
    defaultPercent: PZ.NumberFilterSchema,
  })
  .partial();

export const DeductionPolicyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyOwnWhereSchema
);

export const EmployeeDeductionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
    policyId: PZ.IntegerFilterSchema,
    employeeAmount: PZ.NumberFilterSchema,
  })
  .partial();

export const EmployeeDeductionOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionOwnWhereSchema
);

export const PaycheckDeductionOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    paycheckId: PZ.IntegerFilterSchema,
    employeeDeductionId: PZ.IntegerFilterSchema,
    amount: PZ.NumberFilterSchema,
  })
  .partial();

export const PaycheckDeductionOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionOwnWhereSchema
);

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

export const EmployeeTaxDataOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataOwnWhereSchema
);

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

export const StateTaxWithholdingOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingOwnWhereSchema
);

export const LocalTaxWithholdingOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    taxDataId: PZ.IntegerFilterSchema,
    jurisdiction: PZ.StringFilterSchema,
    localStatus: PZ.StringFilterSchema,
    extraWithholding: PZ.NumberFilterSchema,
  })
  .partial();

export const LocalTaxWithholdingOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingOwnWhereSchema
);

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

export const PayrollRunOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunOwnWhereSchema
);

export const ContactOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    employeeId: PZ.IntegerFilterSchema,
  })
  .partial();

export const ContactOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ContactOwnWhereSchema
);

export const CountryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

export const CountryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CountryOwnWhereSchema
);

export const StateOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    countryId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

export const StateOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StateOwnWhereSchema
);

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

export const AddressOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AddressOwnWhereSchema
);

export const EmailOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    email: PZ.StringFilterSchema,
  })
  .partial();

export const EmailOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmailOwnWhereSchema
);

export const PhoneOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    contactId: PZ.IntegerFilterSchema,
    phone: PZ.StringFilterSchema,
  })
  .partial();

export const PhoneOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PhoneOwnWhereSchema
);

export const PrimaryEmailOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    emailId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PrimaryEmailOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailOwnWhereSchema
);

export const PrimaryPhoneOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    phoneId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PrimaryPhoneOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneOwnWhereSchema
);

export const PrimaryAddressOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    addressId: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PrimaryAddressOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressOwnWhereSchema
);

export const DepartmentOwnIncludeSchema = z
  .object({
    parent: z.boolean(),
    departments: z.boolean(),
    titles: z.boolean(),
  })
  .partial();

export const DepartmentOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  DepartmentOwnIncludeSchema
);

export const DepartmentOwnQueryOneSchema = z
  .object({
    where: DepartmentOwnWhereSchemaJson,
    select: DepartmentOwnProjectionSchemaJson,
    omit: DepartmentOwnProjectionSchemaJson,
    include: DepartmentOwnIncludeSchemaJson,
  })
  .partial();

export const DepartmentOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DepartmentOwnWhereSchemaJson,
    select: DepartmentOwnProjectionSchemaJson,
    omit: DepartmentOwnProjectionSchemaJson,
    include: DepartmentOwnIncludeSchemaJson,
  })
  .partial();

export const TitleOwnIncludeSchema = z
  .object({
    department: z.boolean(),
    employees: z.boolean(),
    histories: z.boolean(),
  })
  .partial();

export const TitleOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TitleOwnIncludeSchema
);

export const TitleOwnQueryOneSchema = z
  .object({
    where: TitleOwnWhereSchemaJson,
    select: TitleOwnProjectionSchemaJson,
    omit: TitleOwnProjectionSchemaJson,
    include: TitleOwnIncludeSchemaJson,
  })
  .partial();

export const TitleOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TitleOwnWhereSchemaJson,
    select: TitleOwnProjectionSchemaJson,
    omit: TitleOwnProjectionSchemaJson,
    include: TitleOwnIncludeSchemaJson,
  })
  .partial();

export const PersonalDataOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
  })
  .partial();

export const PersonalDataOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataOwnIncludeSchema
);

export const PersonalDataOwnQueryOneSchema = z
  .object({
    where: PersonalDataOwnWhereSchemaJson,
    select: PersonalDataOwnProjectionSchemaJson,
    omit: PersonalDataOwnProjectionSchemaJson,
    include: PersonalDataOwnIncludeSchemaJson,
  })
  .partial();

export const PersonalDataOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PersonalDataOwnWhereSchemaJson,
    select: PersonalDataOwnProjectionSchemaJson,
    omit: PersonalDataOwnProjectionSchemaJson,
    include: PersonalDataOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeOwnIncludeSchema = z
  .object({
    title: z.boolean(),
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
    deductions: z.boolean(),
    resolvedPayrollRuns: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const EmployeeOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeOwnIncludeSchema
);

export const EmployeeOwnQueryOneSchema = z
  .object({
    where: EmployeeOwnWhereSchemaJson,
    select: EmployeeOwnProjectionSchemaJson,
    omit: EmployeeOwnProjectionSchemaJson,
    include: EmployeeOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeOwnWhereSchemaJson,
    select: EmployeeOwnProjectionSchemaJson,
    omit: EmployeeOwnProjectionSchemaJson,
    include: EmployeeOwnIncludeSchemaJson,
  })
  .partial();

export const TeamOwnIncludeSchema = z
  .object({
    members: z.boolean(),
    managers: z.boolean(),
  })
  .partial();

export const TeamOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnIncludeSchema
);

export const TeamOwnQueryOneSchema = z
  .object({
    where: TeamOwnWhereSchemaJson,
    select: TeamOwnProjectionSchemaJson,
    omit: TeamOwnProjectionSchemaJson,
    include: TeamOwnIncludeSchemaJson,
  })
  .partial();

export const TeamOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamOwnWhereSchemaJson,
    select: TeamOwnProjectionSchemaJson,
    omit: TeamOwnProjectionSchemaJson,
    include: TeamOwnIncludeSchemaJson,
  })
  .partial();

export const TeamManagerOwnIncludeSchema = z
  .object({
    team: z.boolean(),
    manager: z.boolean(),
  })
  .partial();

export const TeamManagerOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerOwnIncludeSchema
);

export const TeamManagerOwnQueryOneSchema = z
  .object({
    where: TeamManagerOwnWhereSchemaJson,
    select: TeamManagerOwnProjectionSchemaJson,
    omit: TeamManagerOwnProjectionSchemaJson,
    include: TeamManagerOwnIncludeSchemaJson,
  })
  .partial();

export const TeamManagerOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamManagerOwnWhereSchemaJson,
    select: TeamManagerOwnProjectionSchemaJson,
    omit: TeamManagerOwnProjectionSchemaJson,
    include: TeamManagerOwnIncludeSchemaJson,
  })
  .partial();

export const TeamMemberOwnIncludeSchema = z
  .object({
    member: z.boolean(),
    team: z.boolean(),
  })
  .partial();

export const TeamMemberOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberOwnIncludeSchema
);

export const TeamMemberOwnQueryOneSchema = z
  .object({
    where: TeamMemberOwnWhereSchemaJson,
    select: TeamMemberOwnProjectionSchemaJson,
    omit: TeamMemberOwnProjectionSchemaJson,
    include: TeamMemberOwnIncludeSchemaJson,
  })
  .partial();

export const TeamMemberOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamMemberOwnWhereSchemaJson,
    select: TeamMemberOwnProjectionSchemaJson,
    omit: TeamMemberOwnProjectionSchemaJson,
    include: TeamMemberOwnIncludeSchemaJson,
  })
  .partial();

export const SalaryOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
  })
  .partial();

export const SalaryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  SalaryOwnIncludeSchema
);

export const SalaryOwnQueryOneSchema = z
  .object({
    where: SalaryOwnWhereSchemaJson,
    select: SalaryOwnProjectionSchemaJson,
    omit: SalaryOwnProjectionSchemaJson,
    include: SalaryOwnIncludeSchemaJson,
  })
  .partial();

export const SalaryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SalaryOwnWhereSchemaJson,
    select: SalaryOwnProjectionSchemaJson,
    omit: SalaryOwnProjectionSchemaJson,
    include: SalaryOwnIncludeSchemaJson,
  })
  .partial();

export const SalaryHistoryOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
  })
  .partial();

export const SalaryHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryOwnIncludeSchema
);

export const SalaryHistoryOwnQueryOneSchema = z
  .object({
    where: SalaryHistoryOwnWhereSchemaJson,
    select: SalaryHistoryOwnProjectionSchemaJson,
    omit: SalaryHistoryOwnProjectionSchemaJson,
    include: SalaryHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const SalaryHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SalaryHistoryOwnWhereSchemaJson,
    select: SalaryHistoryOwnProjectionSchemaJson,
    omit: SalaryHistoryOwnProjectionSchemaJson,
    include: SalaryHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const BenefitOwnIncludeSchema = z
  .object({
    enrolments: z.boolean(),
  })
  .partial();

export const BenefitOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  BenefitOwnIncludeSchema
);

export const BenefitOwnQueryOneSchema = z
  .object({
    where: BenefitOwnWhereSchemaJson,
    select: BenefitOwnProjectionSchemaJson,
    omit: BenefitOwnProjectionSchemaJson,
    include: BenefitOwnIncludeSchemaJson,
  })
  .partial();

export const BenefitOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: BenefitOwnWhereSchemaJson,
    select: BenefitOwnProjectionSchemaJson,
    omit: BenefitOwnProjectionSchemaJson,
    include: BenefitOwnIncludeSchemaJson,
  })
  .partial();

export const BenefitEnrolmentOwnIncludeSchema = z
  .object({
    benefit: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const BenefitEnrolmentOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentOwnIncludeSchema
);

export const BenefitEnrolmentOwnQueryOneSchema = z
  .object({
    where: BenefitEnrolmentOwnWhereSchemaJson,
    select: BenefitEnrolmentOwnProjectionSchemaJson,
    omit: BenefitEnrolmentOwnProjectionSchemaJson,
    include: BenefitEnrolmentOwnIncludeSchemaJson,
  })
  .partial();

export const BenefitEnrolmentOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: BenefitEnrolmentOwnWhereSchemaJson,
    select: BenefitEnrolmentOwnProjectionSchemaJson,
    omit: BenefitEnrolmentOwnProjectionSchemaJson,
    include: BenefitEnrolmentOwnIncludeSchemaJson,
  })
  .partial();

export const TitleHistoryOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
    title: z.boolean(),
  })
  .partial();

export const TitleHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TitleHistoryOwnIncludeSchema
);

export const TitleHistoryOwnQueryOneSchema = z
  .object({
    where: TitleHistoryOwnWhereSchemaJson,
    select: TitleHistoryOwnProjectionSchemaJson,
    omit: TitleHistoryOwnProjectionSchemaJson,
    include: TitleHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const TitleHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TitleHistoryOwnWhereSchemaJson,
    select: TitleHistoryOwnProjectionSchemaJson,
    omit: TitleHistoryOwnProjectionSchemaJson,
    include: TitleHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffPolicyOwnIncludeSchema = z
  .object({
    balances: z.boolean(),
    requests: z.boolean(),
  })
  .partial();

export const TimeOffPolicyOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyOwnIncludeSchema
);

export const TimeOffPolicyOwnQueryOneSchema = z
  .object({
    where: TimeOffPolicyOwnWhereSchemaJson,
    select: TimeOffPolicyOwnProjectionSchemaJson,
    omit: TimeOffPolicyOwnProjectionSchemaJson,
    include: TimeOffPolicyOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffPolicyOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffPolicyOwnWhereSchemaJson,
    select: TimeOffPolicyOwnProjectionSchemaJson,
    omit: TimeOffPolicyOwnProjectionSchemaJson,
    include: TimeOffPolicyOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffBalanceOwnIncludeSchema = z
  .object({
    policy: z.boolean(),
    employee: z.boolean(),
    transactions: z.boolean(),
  })
  .partial();

export const TimeOffBalanceOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceOwnIncludeSchema
);

export const TimeOffBalanceOwnQueryOneSchema = z
  .object({
    where: TimeOffBalanceOwnWhereSchemaJson,
    select: TimeOffBalanceOwnProjectionSchemaJson,
    omit: TimeOffBalanceOwnProjectionSchemaJson,
    include: TimeOffBalanceOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffBalanceOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffBalanceOwnWhereSchemaJson,
    select: TimeOffBalanceOwnProjectionSchemaJson,
    omit: TimeOffBalanceOwnProjectionSchemaJson,
    include: TimeOffBalanceOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffRequestOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
    policy: z.boolean(),
    resolver: z.boolean(),
    transactions: z.boolean(),
  })
  .partial();

export const TimeOffRequestOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestOwnIncludeSchema
);

export const TimeOffRequestOwnQueryOneSchema = z
  .object({
    where: TimeOffRequestOwnWhereSchemaJson,
    select: TimeOffRequestOwnProjectionSchemaJson,
    omit: TimeOffRequestOwnProjectionSchemaJson,
    include: TimeOffRequestOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffRequestOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffRequestOwnWhereSchemaJson,
    select: TimeOffRequestOwnProjectionSchemaJson,
    omit: TimeOffRequestOwnProjectionSchemaJson,
    include: TimeOffRequestOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffTransactionOwnIncludeSchema = z
  .object({
    balance: z.boolean(),
    request: z.boolean(),
  })
  .partial();

export const TimeOffTransactionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionOwnIncludeSchema
);

export const TimeOffTransactionOwnQueryOneSchema = z
  .object({
    where: TimeOffTransactionOwnWhereSchemaJson,
    select: TimeOffTransactionOwnProjectionSchemaJson,
    omit: TimeOffTransactionOwnProjectionSchemaJson,
    include: TimeOffTransactionOwnIncludeSchemaJson,
  })
  .partial();

export const TimeOffTransactionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffTransactionOwnWhereSchemaJson,
    select: TimeOffTransactionOwnProjectionSchemaJson,
    omit: TimeOffTransactionOwnProjectionSchemaJson,
    include: TimeOffTransactionOwnIncludeSchemaJson,
  })
  .partial();

export const ClockInOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
  })
  .partial();

export const ClockInOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ClockInOwnIncludeSchema
);

export const ClockInOwnQueryOneSchema = z
  .object({
    where: ClockInOwnWhereSchemaJson,
    select: ClockInOwnProjectionSchemaJson,
    omit: ClockInOwnProjectionSchemaJson,
    include: ClockInOwnIncludeSchemaJson,
  })
  .partial();

export const ClockInOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ClockInOwnWhereSchemaJson,
    select: ClockInOwnProjectionSchemaJson,
    omit: ClockInOwnProjectionSchemaJson,
    include: ClockInOwnIncludeSchemaJson,
  })
  .partial();

export const PaycheckOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
    earnings: z.boolean(),
    paycheckTaxes: z.boolean(),
    deductions: z.boolean(),
    payrollRun: z.boolean(),
  })
  .partial();

export const PaycheckOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PaycheckOwnIncludeSchema
);

export const PaycheckOwnQueryOneSchema = z
  .object({
    where: PaycheckOwnWhereSchemaJson,
    select: PaycheckOwnProjectionSchemaJson,
    omit: PaycheckOwnProjectionSchemaJson,
    include: PaycheckOwnIncludeSchemaJson,
  })
  .partial();

export const PaycheckOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PaycheckOwnWhereSchemaJson,
    select: PaycheckOwnProjectionSchemaJson,
    omit: PaycheckOwnProjectionSchemaJson,
    include: PaycheckOwnIncludeSchemaJson,
  })
  .partial();

export const EarningOwnIncludeSchema = z
  .object({
    paycheck: z.boolean(),
  })
  .partial();

export const EarningOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EarningOwnIncludeSchema
);

export const EarningOwnQueryOneSchema = z
  .object({
    where: EarningOwnWhereSchemaJson,
    select: EarningOwnProjectionSchemaJson,
    omit: EarningOwnProjectionSchemaJson,
    include: EarningOwnIncludeSchemaJson,
  })
  .partial();

export const EarningOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EarningOwnWhereSchemaJson,
    select: EarningOwnProjectionSchemaJson,
    omit: EarningOwnProjectionSchemaJson,
    include: EarningOwnIncludeSchemaJson,
  })
  .partial();

export const PaycheckTaxOwnIncludeSchema = z
  .object({
    paycheck: z.boolean(),
  })
  .partial();

export const PaycheckTaxOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxOwnIncludeSchema
);

export const PaycheckTaxOwnQueryOneSchema = z
  .object({
    where: PaycheckTaxOwnWhereSchemaJson,
    select: PaycheckTaxOwnProjectionSchemaJson,
    omit: PaycheckTaxOwnProjectionSchemaJson,
    include: PaycheckTaxOwnIncludeSchemaJson,
  })
  .partial();

export const PaycheckTaxOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PaycheckTaxOwnWhereSchemaJson,
    select: PaycheckTaxOwnProjectionSchemaJson,
    omit: PaycheckTaxOwnProjectionSchemaJson,
    include: PaycheckTaxOwnIncludeSchemaJson,
  })
  .partial();

export const DeductionPolicyOwnIncludeSchema = z
  .object({
    employeeDeductions: z.boolean(),
  })
  .partial();

export const DeductionPolicyOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyOwnIncludeSchema
);

export const DeductionPolicyOwnQueryOneSchema = z
  .object({
    where: DeductionPolicyOwnWhereSchemaJson,
    select: DeductionPolicyOwnProjectionSchemaJson,
    omit: DeductionPolicyOwnProjectionSchemaJson,
    include: DeductionPolicyOwnIncludeSchemaJson,
  })
  .partial();

export const DeductionPolicyOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DeductionPolicyOwnWhereSchemaJson,
    select: DeductionPolicyOwnProjectionSchemaJson,
    omit: DeductionPolicyOwnProjectionSchemaJson,
    include: DeductionPolicyOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeDeductionOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
    policy: z.boolean(),
    paycheckDeductions: z.boolean(),
  })
  .partial();

export const EmployeeDeductionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionOwnIncludeSchema
);

export const EmployeeDeductionOwnQueryOneSchema = z
  .object({
    where: EmployeeDeductionOwnWhereSchemaJson,
    select: EmployeeDeductionOwnProjectionSchemaJson,
    omit: EmployeeDeductionOwnProjectionSchemaJson,
    include: EmployeeDeductionOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeDeductionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeDeductionOwnWhereSchemaJson,
    select: EmployeeDeductionOwnProjectionSchemaJson,
    omit: EmployeeDeductionOwnProjectionSchemaJson,
    include: EmployeeDeductionOwnIncludeSchemaJson,
  })
  .partial();

export const PaycheckDeductionOwnIncludeSchema = z
  .object({
    paycheck: z.boolean(),
    employeeDeduction: z.boolean(),
  })
  .partial();

export const PaycheckDeductionOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionOwnIncludeSchema
);

export const PaycheckDeductionOwnQueryOneSchema = z
  .object({
    where: PaycheckDeductionOwnWhereSchemaJson,
    select: PaycheckDeductionOwnProjectionSchemaJson,
    omit: PaycheckDeductionOwnProjectionSchemaJson,
    include: PaycheckDeductionOwnIncludeSchemaJson,
  })
  .partial();

export const PaycheckDeductionOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PaycheckDeductionOwnWhereSchemaJson,
    select: PaycheckDeductionOwnProjectionSchemaJson,
    omit: PaycheckDeductionOwnProjectionSchemaJson,
    include: PaycheckDeductionOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeTaxDataOwnIncludeSchema = z
  .object({
    stateTaxes: z.boolean(),
    localTaxes: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const EmployeeTaxDataOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataOwnIncludeSchema
);

export const EmployeeTaxDataOwnQueryOneSchema = z
  .object({
    where: EmployeeTaxDataOwnWhereSchemaJson,
    select: EmployeeTaxDataOwnProjectionSchemaJson,
    omit: EmployeeTaxDataOwnProjectionSchemaJson,
    include: EmployeeTaxDataOwnIncludeSchemaJson,
  })
  .partial();

export const EmployeeTaxDataOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeTaxDataOwnWhereSchemaJson,
    select: EmployeeTaxDataOwnProjectionSchemaJson,
    omit: EmployeeTaxDataOwnProjectionSchemaJson,
    include: EmployeeTaxDataOwnIncludeSchemaJson,
  })
  .partial();

export const StateTaxWithholdingOwnIncludeSchema = z
  .object({
    taxData: z.boolean(),
  })
  .partial();

export const StateTaxWithholdingOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingOwnIncludeSchema
);

export const StateTaxWithholdingOwnQueryOneSchema = z
  .object({
    where: StateTaxWithholdingOwnWhereSchemaJson,
    select: StateTaxWithholdingOwnProjectionSchemaJson,
    omit: StateTaxWithholdingOwnProjectionSchemaJson,
    include: StateTaxWithholdingOwnIncludeSchemaJson,
  })
  .partial();

export const StateTaxWithholdingOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StateTaxWithholdingOwnWhereSchemaJson,
    select: StateTaxWithholdingOwnProjectionSchemaJson,
    omit: StateTaxWithholdingOwnProjectionSchemaJson,
    include: StateTaxWithholdingOwnIncludeSchemaJson,
  })
  .partial();

export const LocalTaxWithholdingOwnIncludeSchema = z
  .object({
    taxData: z.boolean(),
  })
  .partial();

export const LocalTaxWithholdingOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingOwnIncludeSchema
);

export const LocalTaxWithholdingOwnQueryOneSchema = z
  .object({
    where: LocalTaxWithholdingOwnWhereSchemaJson,
    select: LocalTaxWithholdingOwnProjectionSchemaJson,
    omit: LocalTaxWithholdingOwnProjectionSchemaJson,
    include: LocalTaxWithholdingOwnIncludeSchemaJson,
  })
  .partial();

export const LocalTaxWithholdingOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: LocalTaxWithholdingOwnWhereSchemaJson,
    select: LocalTaxWithholdingOwnProjectionSchemaJson,
    omit: LocalTaxWithholdingOwnProjectionSchemaJson,
    include: LocalTaxWithholdingOwnIncludeSchemaJson,
  })
  .partial();

export const PayrollRunOwnIncludeSchema = z
  .object({
    approvedBy: z.boolean(),
    paychecks: z.boolean(),
  })
  .partial();

export const PayrollRunOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunOwnIncludeSchema
);

export const PayrollRunOwnQueryOneSchema = z
  .object({
    where: PayrollRunOwnWhereSchemaJson,
    select: PayrollRunOwnProjectionSchemaJson,
    omit: PayrollRunOwnProjectionSchemaJson,
    include: PayrollRunOwnIncludeSchemaJson,
  })
  .partial();

export const PayrollRunOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PayrollRunOwnWhereSchemaJson,
    select: PayrollRunOwnProjectionSchemaJson,
    omit: PayrollRunOwnProjectionSchemaJson,
    include: PayrollRunOwnIncludeSchemaJson,
  })
  .partial();

export const ContactOwnIncludeSchema = z
  .object({
    employee: z.boolean(),
    emails: z.boolean(),
    phones: z.boolean(),
    addresses: z.boolean(),
    primaryEmail: z.boolean(),
    primaryPhone: z.boolean(),
    primaryAddress: z.boolean(),
  })
  .partial();

export const ContactOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ContactOwnIncludeSchema
);

export const ContactOwnQueryOneSchema = z
  .object({
    where: ContactOwnWhereSchemaJson,
    select: ContactOwnProjectionSchemaJson,
    omit: ContactOwnProjectionSchemaJson,
    include: ContactOwnIncludeSchemaJson,
  })
  .partial();

export const ContactOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ContactOwnWhereSchemaJson,
    select: ContactOwnProjectionSchemaJson,
    omit: ContactOwnProjectionSchemaJson,
    include: ContactOwnIncludeSchemaJson,
  })
  .partial();

export const CountryOwnIncludeSchema = z
  .object({
    states: z.boolean(),
  })
  .partial();

export const CountryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  CountryOwnIncludeSchema
);

export const CountryOwnQueryOneSchema = z
  .object({
    where: CountryOwnWhereSchemaJson,
    select: CountryOwnProjectionSchemaJson,
    omit: CountryOwnProjectionSchemaJson,
    include: CountryOwnIncludeSchemaJson,
  })
  .partial();

export const CountryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CountryOwnWhereSchemaJson,
    select: CountryOwnProjectionSchemaJson,
    omit: CountryOwnProjectionSchemaJson,
    include: CountryOwnIncludeSchemaJson,
  })
  .partial();

export const StateOwnIncludeSchema = z
  .object({
    country: z.boolean(),
    addresses: z.boolean(),
  })
  .partial();

export const StateOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  StateOwnIncludeSchema
);

export const StateOwnQueryOneSchema = z
  .object({
    where: StateOwnWhereSchemaJson,
    select: StateOwnProjectionSchemaJson,
    omit: StateOwnProjectionSchemaJson,
    include: StateOwnIncludeSchemaJson,
  })
  .partial();

export const StateOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StateOwnWhereSchemaJson,
    select: StateOwnProjectionSchemaJson,
    omit: StateOwnProjectionSchemaJson,
    include: StateOwnIncludeSchemaJson,
  })
  .partial();

export const AddressOwnIncludeSchema = z
  .object({
    state: z.boolean(),
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const AddressOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AddressOwnIncludeSchema
);

export const AddressOwnQueryOneSchema = z
  .object({
    where: AddressOwnWhereSchemaJson,
    select: AddressOwnProjectionSchemaJson,
    omit: AddressOwnProjectionSchemaJson,
    include: AddressOwnIncludeSchemaJson,
  })
  .partial();

export const AddressOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AddressOwnWhereSchemaJson,
    select: AddressOwnProjectionSchemaJson,
    omit: AddressOwnProjectionSchemaJson,
    include: AddressOwnIncludeSchemaJson,
  })
  .partial();

export const EmailOwnIncludeSchema = z
  .object({
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const EmailOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmailOwnIncludeSchema
);

export const EmailOwnQueryOneSchema = z
  .object({
    where: EmailOwnWhereSchemaJson,
    select: EmailOwnProjectionSchemaJson,
    omit: EmailOwnProjectionSchemaJson,
    include: EmailOwnIncludeSchemaJson,
  })
  .partial();

export const EmailOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmailOwnWhereSchemaJson,
    select: EmailOwnProjectionSchemaJson,
    omit: EmailOwnProjectionSchemaJson,
    include: EmailOwnIncludeSchemaJson,
  })
  .partial();

export const PhoneOwnIncludeSchema = z
  .object({
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const PhoneOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PhoneOwnIncludeSchema
);

export const PhoneOwnQueryOneSchema = z
  .object({
    where: PhoneOwnWhereSchemaJson,
    select: PhoneOwnProjectionSchemaJson,
    omit: PhoneOwnProjectionSchemaJson,
    include: PhoneOwnIncludeSchemaJson,
  })
  .partial();

export const PhoneOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PhoneOwnWhereSchemaJson,
    select: PhoneOwnProjectionSchemaJson,
    omit: PhoneOwnProjectionSchemaJson,
    include: PhoneOwnIncludeSchemaJson,
  })
  .partial();

export const PrimaryEmailOwnIncludeSchema = z
  .object({
    email: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryEmailOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailOwnIncludeSchema
);

export const PrimaryEmailOwnQueryOneSchema = z
  .object({
    where: PrimaryEmailOwnWhereSchemaJson,
    select: PrimaryEmailOwnProjectionSchemaJson,
    omit: PrimaryEmailOwnProjectionSchemaJson,
    include: PrimaryEmailOwnIncludeSchemaJson,
  })
  .partial();

export const PrimaryEmailOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PrimaryEmailOwnWhereSchemaJson,
    select: PrimaryEmailOwnProjectionSchemaJson,
    omit: PrimaryEmailOwnProjectionSchemaJson,
    include: PrimaryEmailOwnIncludeSchemaJson,
  })
  .partial();

export const PrimaryPhoneOwnIncludeSchema = z
  .object({
    phone: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryPhoneOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneOwnIncludeSchema
);

export const PrimaryPhoneOwnQueryOneSchema = z
  .object({
    where: PrimaryPhoneOwnWhereSchemaJson,
    select: PrimaryPhoneOwnProjectionSchemaJson,
    omit: PrimaryPhoneOwnProjectionSchemaJson,
    include: PrimaryPhoneOwnIncludeSchemaJson,
  })
  .partial();

export const PrimaryPhoneOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PrimaryPhoneOwnWhereSchemaJson,
    select: PrimaryPhoneOwnProjectionSchemaJson,
    omit: PrimaryPhoneOwnProjectionSchemaJson,
    include: PrimaryPhoneOwnIncludeSchemaJson,
  })
  .partial();

export const PrimaryAddressOwnIncludeSchema = z
  .object({
    address: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryAddressOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressOwnIncludeSchema
);

export const PrimaryAddressOwnQueryOneSchema = z
  .object({
    where: PrimaryAddressOwnWhereSchemaJson,
    select: PrimaryAddressOwnProjectionSchemaJson,
    omit: PrimaryAddressOwnProjectionSchemaJson,
    include: PrimaryAddressOwnIncludeSchemaJson,
  })
  .partial();

export const PrimaryAddressOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PrimaryAddressOwnWhereSchemaJson,
    select: PrimaryAddressOwnProjectionSchemaJson,
    omit: PrimaryAddressOwnProjectionSchemaJson,
    include: PrimaryAddressOwnIncludeSchemaJson,
  })
  .partial();

export const DepartmentCreateSchema = z
  .object({
    parentId: z.int().optional(),
    name: z.string(),
    slug: z.string().optional(),
    isActive: z.boolean().optional(),
  })
  .transform(slugTransformer('name'));

export const DepartmentUpdateSchema = z
  .object({
    parentId: z.int().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    isActive: z.boolean().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const DepartmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    isActive: PZ.OrderDirectionSchema,
  })
  .partial();

export const DepartmentOrderBySchemaJson = z.preprocess(
  jsonParser,
  DepartmentOrderBySchema
);

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

export const DepartmentWhereSchemaJson = z.preprocess(
  jsonParser,
  DepartmentWhereSchema
);

export const DepartmentProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    isActive: z.boolean(),
    parent: z.boolean().or(DepartmentOwnQueryOneSchema),
    departments: z.boolean().or(DepartmentOwnQuerySchema),
    titles: z.boolean().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentProjectionSchemaJson = z.preprocess(
  jsonParser,
  DepartmentProjectionSchema
);

export const DepartmentIncludeSchema = z
  .object({
    parent: z.boolean().or(DepartmentOwnQueryOneSchema),
    departments: z.boolean().or(DepartmentOwnQuerySchema),
    titles: z.boolean().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentIncludeSchemaJson = z.preprocess(
  jsonParser,
  DepartmentIncludeSchema
);

export const TitleCreateSchema = z
  .object({
    departmentId: z.int(),
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    isActive: z.boolean().optional(),
  })
  .transform(slugTransformer('name'));

export const TitleUpdateSchema = z
  .object({
    departmentId: z.int().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
    isActive: z.boolean().optional().optional(),
  })
  .transform(slugTransformer('name'));

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

export const TitleOrderBySchemaJson = z.preprocess(
  jsonParser,
  TitleOrderBySchema
);

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

export const TitleWhereSchemaJson = z.preprocess(jsonParser, TitleWhereSchema);

export const TitleProjectionSchema = z
  .object({
    id: z.boolean(),
    departmentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    isActive: z.boolean(),
    department: z.boolean().or(DepartmentOwnQueryOneSchema),
    employees: z.boolean().or(EmployeeOwnQuerySchema),
    histories: z.boolean().or(TitleHistoryOwnQuerySchema),
  })
  .partial();

export const TitleProjectionSchemaJson = z.preprocess(
  jsonParser,
  TitleProjectionSchema
);

export const TitleIncludeSchema = z
  .object({
    department: z.boolean().or(DepartmentOwnQueryOneSchema),
    employees: z.boolean().or(EmployeeOwnQuerySchema),
    histories: z.boolean().or(TitleHistoryOwnQuerySchema),
  })
  .partial();

export const TitleIncludeSchemaJson = z.preprocess(
  jsonParser,
  TitleIncludeSchema
);

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

export const PersonalDataOrderBySchemaJson = z.preprocess(
  jsonParser,
  PersonalDataOrderBySchema
);

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

export const PersonalDataWhereSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataWhereSchema
);

export const PersonalDataProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    ein: z.boolean(),
    gender: z.boolean(),
    dob: z.boolean(),
    maritalStatus: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const PersonalDataProjectionSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataProjectionSchema
);

export const PersonalDataIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const PersonalDataIncludeSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataIncludeSchema
);

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

export const EmployeeOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeOrderBySchema
);

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

export const EmployeeWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeWhereSchema
);

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
    title: z.boolean().or(TitleOwnQueryOneSchema),
    hireDate: z.boolean(),
    terminationDate: z.boolean(),
    employmentType: z.boolean(),
    salary: z.boolean().or(SalaryOwnQueryOneSchema),
    salaryHistory: z.boolean().or(SalaryHistoryOwnQuerySchema),
    benefits: z.boolean().or(BenefitEnrolmentOwnQuerySchema),
    titleHistory: z.boolean().or(TitleHistoryOwnQuerySchema),
    timeOffBalances: z.boolean().or(TimeOffBalanceOwnQuerySchema),
    timeOffRequests: z.boolean().or(TimeOffRequestOwnQuerySchema),
    resolvedTimeOffs: z.boolean().or(TimeOffRequestOwnQuerySchema),
    clockIns: z.boolean().or(ClockInOwnQuerySchema),
    personalData: z.boolean().or(PersonalDataOwnQueryOneSchema),
    taxData: z.boolean().or(EmployeeTaxDataOwnQuerySchema),
    memberships: z.boolean().or(TeamMemberOwnQuerySchema),
    managingTeams: z.boolean().or(TeamManagerOwnQuerySchema),
    managingEmployees: z.boolean().or(EmployeeOwnQuerySchema),
    directManager: z.boolean().or(EmployeeOwnQueryOneSchema),
    paychecks: z.boolean().or(PaycheckOwnQuerySchema),
    directManagerId: z.boolean(),
    deductions: z.boolean().or(EmployeeDeductionOwnQuerySchema),
    resolvedPayrollRuns: z.boolean().or(PayrollRunOwnQuerySchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmployeeProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeProjectionSchema
);

export const EmployeeIncludeSchema = z
  .object({
    title: z.boolean().or(TitleOwnQueryOneSchema),
    salary: z.boolean().or(SalaryOwnQueryOneSchema),
    salaryHistory: z.boolean().or(SalaryHistoryOwnQuerySchema),
    benefits: z.boolean().or(BenefitEnrolmentOwnQuerySchema),
    titleHistory: z.boolean().or(TitleHistoryOwnQuerySchema),
    timeOffBalances: z.boolean().or(TimeOffBalanceOwnQuerySchema),
    timeOffRequests: z.boolean().or(TimeOffRequestOwnQuerySchema),
    resolvedTimeOffs: z.boolean().or(TimeOffRequestOwnQuerySchema),
    clockIns: z.boolean().or(ClockInOwnQuerySchema),
    personalData: z.boolean().or(PersonalDataOwnQueryOneSchema),
    taxData: z.boolean().or(EmployeeTaxDataOwnQuerySchema),
    memberships: z.boolean().or(TeamMemberOwnQuerySchema),
    managingTeams: z.boolean().or(TeamManagerOwnQuerySchema),
    managingEmployees: z.boolean().or(EmployeeOwnQuerySchema),
    directManager: z.boolean().or(EmployeeOwnQueryOneSchema),
    paychecks: z.boolean().or(PaycheckOwnQuerySchema),
    deductions: z.boolean().or(EmployeeDeductionOwnQuerySchema),
    resolvedPayrollRuns: z.boolean().or(PayrollRunOwnQuerySchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmployeeIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeIncludeSchema
);

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

export const TeamOrderBySchemaJson = z.preprocess(
  jsonParser,
  TeamOrderBySchema
);

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

export const TeamWhereSchemaJson = z.preprocess(jsonParser, TeamWhereSchema);

export const TeamProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    members: z.boolean().or(TeamMemberOwnQuerySchema),
    managers: z.boolean().or(TeamManagerOwnQuerySchema),
  })
  .partial();

export const TeamProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamProjectionSchema
);

export const TeamIncludeSchema = z
  .object({
    members: z.boolean().or(TeamMemberOwnQuerySchema),
    managers: z.boolean().or(TeamManagerOwnQuerySchema),
  })
  .partial();

export const TeamIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamIncludeSchema
);

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

export const TeamManagerOrderBySchemaJson = z.preprocess(
  jsonParser,
  TeamManagerOrderBySchema
);

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

export const TeamManagerWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerWhereSchema
);

export const TeamManagerProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    managerId: z.boolean(),
    team: z.boolean().or(TeamOwnQueryOneSchema),
    manager: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerProjectionSchema
);

export const TeamManagerIncludeSchema = z
  .object({
    team: z.boolean().or(TeamOwnQueryOneSchema),
    manager: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerIncludeSchema
);

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

export const TeamMemberOrderBySchemaJson = z.preprocess(
  jsonParser,
  TeamMemberOrderBySchema
);

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

export const TeamMemberWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberWhereSchema
);

export const TeamMemberProjectionSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    memberId: z.boolean(),
    member: z.boolean().or(EmployeeOwnQueryOneSchema),
    team: z.boolean().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberProjectionSchema
);

export const TeamMemberIncludeSchema = z
  .object({
    member: z.boolean().or(EmployeeOwnQueryOneSchema),
    team: z.boolean().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberIncludeSchema
);

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

export const SalaryOrderBySchemaJson = z.preprocess(
  jsonParser,
  SalaryOrderBySchema
);

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

export const SalaryWhereSchemaJson = z.preprocess(
  jsonParser,
  SalaryWhereSchema
);

export const SalaryProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    gross: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    frequency: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalaryProjectionSchemaJson = z.preprocess(
  jsonParser,
  SalaryProjectionSchema
);

export const SalaryIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalaryIncludeSchemaJson = z.preprocess(
  jsonParser,
  SalaryIncludeSchema
);

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

export const SalaryHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryOrderBySchema
);

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

export const SalaryHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryWhereSchema
);

export const SalaryHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    createdAt: z.boolean(),
    oldSalary: z.boolean(),
    newSalary: z.boolean(),
    reason: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalaryHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryProjectionSchema
);

export const SalaryHistoryIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalaryHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryIncludeSchema
);

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

export const BenefitOrderBySchemaJson = z.preprocess(
  jsonParser,
  BenefitOrderBySchema
);

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

export const BenefitWhereSchemaJson = z.preprocess(
  jsonParser,
  BenefitWhereSchema
);

export const BenefitProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    type: z.boolean(),
    enrolments: z.boolean().or(BenefitEnrolmentOwnQuerySchema),
  })
  .partial();

export const BenefitProjectionSchemaJson = z.preprocess(
  jsonParser,
  BenefitProjectionSchema
);

export const BenefitIncludeSchema = z
  .object({
    enrolments: z.boolean().or(BenefitEnrolmentOwnQuerySchema),
  })
  .partial();

export const BenefitIncludeSchemaJson = z.preprocess(
  jsonParser,
  BenefitIncludeSchema
);

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

export const BenefitEnrolmentOrderBySchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentOrderBySchema
);

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

export const BenefitEnrolmentWhereSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentWhereSchema
);

export const BenefitEnrolmentProjectionSchema = z
  .object({
    id: z.boolean(),
    benefitId: z.boolean(),
    employeeId: z.boolean(),
    startDate: z.boolean(),
    status: z.boolean(),
    benefit: z.boolean().or(BenefitOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const BenefitEnrolmentProjectionSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentProjectionSchema
);

export const BenefitEnrolmentIncludeSchema = z
  .object({
    benefit: z.boolean().or(BenefitOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const BenefitEnrolmentIncludeSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentIncludeSchema
);

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

export const TitleHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  TitleHistoryOrderBySchema
);

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

export const TitleHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  TitleHistoryWhereSchema
);

export const TitleHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    titleId: z.boolean(),
    type: z.boolean(),
    reason: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    title: z.boolean().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const TitleHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  TitleHistoryProjectionSchema
);

export const TitleHistoryIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    title: z.boolean().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const TitleHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  TitleHistoryIncludeSchema
);

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

export const TimeOffPolicyOrderBySchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyOrderBySchema
);

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

export const TimeOffPolicyWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyWhereSchema
);

export const TimeOffPolicyProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    accrualRate: z.boolean(),
    maxRollover: z.boolean(),
    balances: z.boolean().or(TimeOffBalanceOwnQuerySchema),
    requests: z.boolean().or(TimeOffRequestOwnQuerySchema),
  })
  .partial();

export const TimeOffPolicyProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyProjectionSchema
);

export const TimeOffPolicyIncludeSchema = z
  .object({
    balances: z.boolean().or(TimeOffBalanceOwnQuerySchema),
    requests: z.boolean().or(TimeOffRequestOwnQuerySchema),
  })
  .partial();

export const TimeOffPolicyIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyIncludeSchema
);

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

export const TimeOffBalanceOrderBySchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceOrderBySchema
);

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

export const TimeOffBalanceWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceWhereSchema
);

export const TimeOffBalanceProjectionSchema = z
  .object({
    id: z.boolean(),
    policyId: z.boolean(),
    employeeId: z.boolean(),
    accruedHours: z.boolean(),
    usedHours: z.boolean(),
    availableHours: z.boolean(),
    policy: z.boolean().or(TimeOffPolicyOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    transactions: z.boolean().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffBalanceProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceProjectionSchema
);

export const TimeOffBalanceIncludeSchema = z
  .object({
    policy: z.boolean().or(TimeOffPolicyOwnQueryOneSchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    transactions: z.boolean().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffBalanceIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceIncludeSchema
);

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

export const TimeOffRequestOrderBySchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestOrderBySchema
);

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

export const TimeOffRequestWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestWhereSchema
);

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
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    policy: z.boolean().or(TimeOffPolicyOwnQueryOneSchema),
    resolver: z.boolean().or(EmployeeOwnQueryOneSchema),
    transactions: z.boolean().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffRequestProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestProjectionSchema
);

export const TimeOffRequestIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    policy: z.boolean().or(TimeOffPolicyOwnQueryOneSchema),
    resolver: z.boolean().or(EmployeeOwnQueryOneSchema),
    transactions: z.boolean().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffRequestIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestIncludeSchema
);

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

export const TimeOffTransactionOrderBySchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionOrderBySchema
);

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

export const TimeOffTransactionWhereSchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionWhereSchema
);

export const TimeOffTransactionProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    type: z.boolean(),
    balanceId: z.boolean(),
    requestId: z.boolean(),
    amount: z.boolean(),
    balance: z.boolean().or(TimeOffBalanceOwnQueryOneSchema),
    request: z.boolean().or(TimeOffRequestOwnQueryOneSchema),
  })
  .partial();

export const TimeOffTransactionProjectionSchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionProjectionSchema
);

export const TimeOffTransactionIncludeSchema = z
  .object({
    balance: z.boolean().or(TimeOffBalanceOwnQueryOneSchema),
    request: z.boolean().or(TimeOffRequestOwnQueryOneSchema),
  })
  .partial();

export const TimeOffTransactionIncludeSchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionIncludeSchema
);

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

export const ClockInOrderBySchemaJson = z.preprocess(
  jsonParser,
  ClockInOrderBySchema
);

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

export const ClockInWhereSchemaJson = z.preprocess(
  jsonParser,
  ClockInWhereSchema
);

export const ClockInProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    clockIn: z.boolean(),
    clockOut: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const ClockInProjectionSchemaJson = z.preprocess(
  jsonParser,
  ClockInProjectionSchema
);

export const ClockInIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const ClockInIncludeSchemaJson = z.preprocess(
  jsonParser,
  ClockInIncludeSchema
);

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

export const PaycheckOrderBySchemaJson = z.preprocess(
  jsonParser,
  PaycheckOrderBySchema
);

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

export const PaycheckWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckWhereSchema
);

export const PaycheckProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    payrollRunId: z.boolean(),
    updatedAt: z.boolean(),
    employeeId: z.boolean(),
    grossAmount: z.boolean(),
    netAmount: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    earnings: z.boolean().or(EarningOwnQuerySchema),
    paycheckTaxes: z.boolean().or(PaycheckTaxOwnQuerySchema),
    deductions: z.boolean().or(PaycheckDeductionOwnQuerySchema),
    payrollRun: z.boolean().or(PayrollRunOwnQueryOneSchema),
  })
  .partial();

export const PaycheckProjectionSchemaJson = z.preprocess(
  jsonParser,
  PaycheckProjectionSchema
);

export const PaycheckIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    earnings: z.boolean().or(EarningOwnQuerySchema),
    paycheckTaxes: z.boolean().or(PaycheckTaxOwnQuerySchema),
    deductions: z.boolean().or(PaycheckDeductionOwnQuerySchema),
    payrollRun: z.boolean().or(PayrollRunOwnQueryOneSchema),
  })
  .partial();

export const PaycheckIncludeSchemaJson = z.preprocess(
  jsonParser,
  PaycheckIncludeSchema
);

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

export const EarningOrderBySchemaJson = z.preprocess(
  jsonParser,
  EarningOrderBySchema
);

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

export const EarningWhereSchemaJson = z.preprocess(
  jsonParser,
  EarningWhereSchema
);

export const EarningProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    hours: z.boolean(),
    rate: z.boolean(),
    amount: z.boolean(),
    paycheckId: z.boolean(),
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const EarningProjectionSchemaJson = z.preprocess(
  jsonParser,
  EarningProjectionSchema
);

export const EarningIncludeSchema = z
  .object({
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const EarningIncludeSchemaJson = z.preprocess(
  jsonParser,
  EarningIncludeSchema
);

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

export const PaycheckTaxOrderBySchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxOrderBySchema
);

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

export const PaycheckTaxWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxWhereSchema
);

export const PaycheckTaxProjectionSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    taxAuthority: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const PaycheckTaxProjectionSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxProjectionSchema
);

export const PaycheckTaxIncludeSchema = z
  .object({
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const PaycheckTaxIncludeSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxIncludeSchema
);

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

export const DeductionPolicyOrderBySchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyOrderBySchema
);

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

export const DeductionPolicyWhereSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyWhereSchema
);

export const DeductionPolicyProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    type: z.boolean(),
    defaultAmount: z.boolean(),
    defaultPercent: z.boolean(),
    employeeDeductions: z.boolean().or(EmployeeDeductionOwnQuerySchema),
  })
  .partial();

export const DeductionPolicyProjectionSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyProjectionSchema
);

export const DeductionPolicyIncludeSchema = z
  .object({
    employeeDeductions: z.boolean().or(EmployeeDeductionOwnQuerySchema),
  })
  .partial();

export const DeductionPolicyIncludeSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyIncludeSchema
);

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

export const EmployeeDeductionOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionOrderBySchema
);

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

export const EmployeeDeductionWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionWhereSchema
);

export const EmployeeDeductionProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    policyId: z.boolean(),
    employeeAmount: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    policy: z.boolean().or(DeductionPolicyOwnQueryOneSchema),
    paycheckDeductions: z.boolean().or(PaycheckDeductionOwnQuerySchema),
  })
  .partial();

export const EmployeeDeductionProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionProjectionSchema
);

export const EmployeeDeductionIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    policy: z.boolean().or(DeductionPolicyOwnQueryOneSchema),
    paycheckDeductions: z.boolean().or(PaycheckDeductionOwnQuerySchema),
  })
  .partial();

export const EmployeeDeductionIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionIncludeSchema
);

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

export const PaycheckDeductionOrderBySchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionOrderBySchema
);

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

export const PaycheckDeductionWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionWhereSchema
);

export const PaycheckDeductionProjectionSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    employeeDeductionId: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
    employeeDeduction: z.boolean().or(EmployeeDeductionOwnQueryOneSchema),
  })
  .partial();

export const PaycheckDeductionProjectionSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionProjectionSchema
);

export const PaycheckDeductionIncludeSchema = z
  .object({
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
    employeeDeduction: z.boolean().or(EmployeeDeductionOwnQueryOneSchema),
  })
  .partial();

export const PaycheckDeductionIncludeSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionIncludeSchema
);

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

export const EmployeeTaxDataOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataOrderBySchema
);

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

export const EmployeeTaxDataWhereSchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataWhereSchema
);

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
    stateTaxes: z.boolean().or(StateTaxWithholdingOwnQuerySchema),
    localTaxes: z.boolean().or(LocalTaxWithholdingOwnQuerySchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeTaxDataProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataProjectionSchema
);

export const EmployeeTaxDataIncludeSchema = z
  .object({
    stateTaxes: z.boolean().or(StateTaxWithholdingOwnQuerySchema),
    localTaxes: z.boolean().or(LocalTaxWithholdingOwnQuerySchema),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeTaxDataIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataIncludeSchema
);

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

export const StateTaxWithholdingOrderBySchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingOrderBySchema
);

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

export const StateTaxWithholdingWhereSchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingWhereSchema
);

export const StateTaxWithholdingProjectionSchema = z
  .object({
    id: z.boolean(),
    taxDataId: z.boolean(),
    stateCode: z.boolean(),
    stateStatus: z.boolean(),
    allowances: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: z.boolean().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const StateTaxWithholdingProjectionSchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingProjectionSchema
);

export const StateTaxWithholdingIncludeSchema = z
  .object({
    taxData: z.boolean().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const StateTaxWithholdingIncludeSchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingIncludeSchema
);

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

export const LocalTaxWithholdingOrderBySchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingOrderBySchema
);

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

export const LocalTaxWithholdingWhereSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingWhereSchema
);

export const LocalTaxWithholdingProjectionSchema = z
  .object({
    id: z.boolean(),
    taxDataId: z.boolean(),
    jurisdiction: z.boolean(),
    localStatus: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: z.boolean().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const LocalTaxWithholdingProjectionSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingProjectionSchema
);

export const LocalTaxWithholdingIncludeSchema = z
  .object({
    taxData: z.boolean().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const LocalTaxWithholdingIncludeSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingIncludeSchema
);

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

export const PayrollRunOrderBySchemaJson = z.preprocess(
  jsonParser,
  PayrollRunOrderBySchema
);

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

export const PayrollRunWhereSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunWhereSchema
);

export const PayrollRunProjectionSchema = z
  .object({
    id: z.boolean(),
    resolverId: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    payDate: z.boolean(),
    status: z.boolean(),
    approvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    paychecks: z.boolean().or(PaycheckOwnQuerySchema),
  })
  .partial();

export const PayrollRunProjectionSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunProjectionSchema
);

export const PayrollRunIncludeSchema = z
  .object({
    approvedBy: z.boolean().or(EmployeeOwnQueryOneSchema),
    paychecks: z.boolean().or(PaycheckOwnQuerySchema),
  })
  .partial();

export const PayrollRunIncludeSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunIncludeSchema
);

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

export const ContactOrderBySchemaJson = z.preprocess(
  jsonParser,
  ContactOrderBySchema
);

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

export const ContactWhereSchemaJson = z.preprocess(
  jsonParser,
  ContactWhereSchema
);

export const ContactProjectionSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    emails: z.boolean().or(EmailOwnQuerySchema),
    phones: z.boolean().or(PhoneOwnQuerySchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
    primaryEmail: z.boolean().or(PrimaryEmailOwnQueryOneSchema),
    primaryPhone: z.boolean().or(PrimaryPhoneOwnQueryOneSchema),
    primaryAddress: z.boolean().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const ContactProjectionSchemaJson = z.preprocess(
  jsonParser,
  ContactProjectionSchema
);

export const ContactIncludeSchema = z
  .object({
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
    emails: z.boolean().or(EmailOwnQuerySchema),
    phones: z.boolean().or(PhoneOwnQuerySchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
    primaryEmail: z.boolean().or(PrimaryEmailOwnQueryOneSchema),
    primaryPhone: z.boolean().or(PrimaryPhoneOwnQueryOneSchema),
    primaryAddress: z.boolean().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const ContactIncludeSchemaJson = z.preprocess(
  jsonParser,
  ContactIncludeSchema
);

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

export const CountryOrderBySchemaJson = z.preprocess(
  jsonParser,
  CountryOrderBySchema
);

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

export const CountryWhereSchemaJson = z.preprocess(
  jsonParser,
  CountryWhereSchema
);

export const CountryProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean().or(StateOwnQuerySchema),
  })
  .partial();

export const CountryProjectionSchemaJson = z.preprocess(
  jsonParser,
  CountryProjectionSchema
);

export const CountryIncludeSchema = z
  .object({
    states: z.boolean().or(StateOwnQuerySchema),
  })
  .partial();

export const CountryIncludeSchemaJson = z.preprocess(
  jsonParser,
  CountryIncludeSchema
);

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

export const StateOrderBySchemaJson = z.preprocess(
  jsonParser,
  StateOrderBySchema
);

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

export const StateWhereSchemaJson = z.preprocess(jsonParser, StateWhereSchema);

export const StateProjectionSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    country: z.boolean().or(CountryOwnQueryOneSchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
  })
  .partial();

export const StateProjectionSchemaJson = z.preprocess(
  jsonParser,
  StateProjectionSchema
);

export const StateIncludeSchema = z
  .object({
    country: z.boolean().or(CountryOwnQueryOneSchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
  })
  .partial();

export const StateIncludeSchemaJson = z.preprocess(
  jsonParser,
  StateIncludeSchema
);

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

export const AddressOrderBySchemaJson = z.preprocess(
  jsonParser,
  AddressOrderBySchema
);

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

export const AddressWhereSchemaJson = z.preprocess(
  jsonParser,
  AddressWhereSchema
);

export const AddressProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    stateId: z.boolean(),
    street: z.boolean(),
    zip: z.boolean(),
    city: z.boolean(),
    state: z.boolean().or(StateOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const AddressProjectionSchemaJson = z.preprocess(
  jsonParser,
  AddressProjectionSchema
);

export const AddressIncludeSchema = z
  .object({
    state: z.boolean().or(StateOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const AddressIncludeSchemaJson = z.preprocess(
  jsonParser,
  AddressIncludeSchema
);

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

export const EmailOrderBySchemaJson = z.preprocess(
  jsonParser,
  EmailOrderBySchema
);

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

export const EmailWhereSchemaJson = z.preprocess(jsonParser, EmailWhereSchema);

export const EmailProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryEmailOwnQueryOneSchema),
  })
  .partial();

export const EmailProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmailProjectionSchema
);

export const EmailIncludeSchema = z
  .object({
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryEmailOwnQueryOneSchema),
  })
  .partial();

export const EmailIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmailIncludeSchema
);

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

export const PhoneOrderBySchemaJson = z.preprocess(
  jsonParser,
  PhoneOrderBySchema
);

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

export const PhoneWhereSchemaJson = z.preprocess(jsonParser, PhoneWhereSchema);

export const PhoneProjectionSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryPhoneOwnQueryOneSchema),
  })
  .partial();

export const PhoneProjectionSchemaJson = z.preprocess(
  jsonParser,
  PhoneProjectionSchema
);

export const PhoneIncludeSchema = z
  .object({
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryPhoneOwnQueryOneSchema),
  })
  .partial();

export const PhoneIncludeSchemaJson = z.preprocess(
  jsonParser,
  PhoneIncludeSchema
);

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

export const PrimaryEmailOrderBySchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailOrderBySchema
);

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

export const PrimaryEmailWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailWhereSchema
);

export const PrimaryEmailProjectionSchema = z
  .object({
    id: z.boolean(),
    emailId: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean().or(EmailOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryEmailProjectionSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailProjectionSchema
);

export const PrimaryEmailIncludeSchema = z
  .object({
    email: z.boolean().or(EmailOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryEmailIncludeSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailIncludeSchema
);

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

export const PrimaryPhoneOrderBySchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneOrderBySchema
);

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

export const PrimaryPhoneWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneWhereSchema
);

export const PrimaryPhoneProjectionSchema = z
  .object({
    id: z.boolean(),
    phoneId: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean().or(PhoneOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryPhoneProjectionSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneProjectionSchema
);

export const PrimaryPhoneIncludeSchema = z
  .object({
    phone: z.boolean().or(PhoneOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryPhoneIncludeSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneIncludeSchema
);

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

export const PrimaryAddressOrderBySchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressOrderBySchema
);

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

export const PrimaryAddressWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressWhereSchema
);

export const PrimaryAddressProjectionSchema = z
  .object({
    id: z.boolean(),
    addressId: z.boolean(),
    contactId: z.boolean(),
    address: z.boolean().or(AddressOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryAddressProjectionSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressProjectionSchema
);

export const PrimaryAddressIncludeSchema = z
  .object({
    address: z.boolean().or(AddressOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryAddressIncludeSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressIncludeSchema
);

export const DepartmentQueryOneSchema = z
  .object({
    where: DepartmentWhereSchemaJson,
    select: DepartmentProjectionSchemaJson,
    omit: DepartmentProjectionSchemaJson,
    include: DepartmentIncludeSchemaJson,
  })
  .partial();

export const DepartmentQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DepartmentWhereSchemaJson,
    select: DepartmentProjectionSchemaJson,
    omit: DepartmentProjectionSchemaJson,
    include: DepartmentIncludeSchemaJson,
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

export type DepartmentInclude = z.infer<typeof DepartmentIncludeSchema>;

export type DepartmentQueryOne = z.infer<typeof DepartmentQueryOneSchema>;

export type DepartmentQuery = z.infer<typeof DepartmentQuerySchema>;

export type DepartmentProjection = z.infer<typeof DepartmentProjectionSchema>;

export const TitleQueryOneSchema = z
  .object({
    where: TitleWhereSchemaJson,
    select: TitleProjectionSchemaJson,
    omit: TitleProjectionSchemaJson,
    include: TitleIncludeSchemaJson,
  })
  .partial();

export const TitleQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TitleWhereSchemaJson,
    select: TitleProjectionSchemaJson,
    omit: TitleProjectionSchemaJson,
    include: TitleIncludeSchemaJson,
  })
  .partial();

export type TitleCreate = z.infer<typeof TitleCreateSchema>;

export type TitleUpdate = z.infer<typeof TitleUpdateSchema>;

export type TitleOrderBy = z.infer<typeof TitleOrderBySchema>;

export type TitleOwnProjection = z.infer<typeof TitleOwnProjectionSchema>;

export type TitleOwnWhere = z.infer<typeof TitleOwnWhereSchema>;

export type TitleOwnQuery = z.infer<typeof TitleOwnQuerySchema>;

export type TitleOwnQueryOne = z.infer<typeof TitleOwnQueryOneSchema>;

export type TitleWhere = z.infer<typeof TitleWhereSchema>;

export type TitleInclude = z.infer<typeof TitleIncludeSchema>;

export type TitleQueryOne = z.infer<typeof TitleQueryOneSchema>;

export type TitleQuery = z.infer<typeof TitleQuerySchema>;

export type TitleProjection = z.infer<typeof TitleProjectionSchema>;

export const PersonalDataQueryOneSchema = z
  .object({
    where: PersonalDataWhereSchemaJson,
    select: PersonalDataProjectionSchemaJson,
    omit: PersonalDataProjectionSchemaJson,
    include: PersonalDataIncludeSchemaJson,
  })
  .partial();

export const PersonalDataQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PersonalDataWhereSchemaJson,
    select: PersonalDataProjectionSchemaJson,
    omit: PersonalDataProjectionSchemaJson,
    include: PersonalDataIncludeSchemaJson,
  })
  .partial();

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

export type PersonalDataInclude = z.infer<typeof PersonalDataIncludeSchema>;

export type PersonalDataQueryOne = z.infer<typeof PersonalDataQueryOneSchema>;

export type PersonalDataQuery = z.infer<typeof PersonalDataQuerySchema>;

export type PersonalDataProjection = z.infer<
  typeof PersonalDataProjectionSchema
>;

export const EmployeeQueryOneSchema = z
  .object({
    where: EmployeeWhereSchemaJson,
    select: EmployeeProjectionSchemaJson,
    omit: EmployeeProjectionSchemaJson,
    include: EmployeeIncludeSchemaJson,
  })
  .partial();

export const EmployeeQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeWhereSchemaJson,
    select: EmployeeProjectionSchemaJson,
    omit: EmployeeProjectionSchemaJson,
    include: EmployeeIncludeSchemaJson,
  })
  .partial();

export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;

export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;

export type EmployeeOrderBy = z.infer<typeof EmployeeOrderBySchema>;

export type EmployeeOwnProjection = z.infer<typeof EmployeeOwnProjectionSchema>;

export type EmployeeOwnWhere = z.infer<typeof EmployeeOwnWhereSchema>;

export type EmployeeOwnQuery = z.infer<typeof EmployeeOwnQuerySchema>;

export type EmployeeOwnQueryOne = z.infer<typeof EmployeeOwnQueryOneSchema>;

export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;

export type EmployeeInclude = z.infer<typeof EmployeeIncludeSchema>;

export type EmployeeQueryOne = z.infer<typeof EmployeeQueryOneSchema>;

export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;

export type EmployeeProjection = z.infer<typeof EmployeeProjectionSchema>;

export const TeamQueryOneSchema = z
  .object({
    where: TeamWhereSchemaJson,
    select: TeamProjectionSchemaJson,
    omit: TeamProjectionSchemaJson,
    include: TeamIncludeSchemaJson,
  })
  .partial();

export const TeamQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamWhereSchemaJson,
    select: TeamProjectionSchemaJson,
    omit: TeamProjectionSchemaJson,
    include: TeamIncludeSchemaJson,
  })
  .partial();

export type TeamCreate = z.infer<typeof TeamCreateSchema>;

export type TeamUpdate = z.infer<typeof TeamUpdateSchema>;

export type TeamOrderBy = z.infer<typeof TeamOrderBySchema>;

export type TeamOwnProjection = z.infer<typeof TeamOwnProjectionSchema>;

export type TeamOwnWhere = z.infer<typeof TeamOwnWhereSchema>;

export type TeamOwnQuery = z.infer<typeof TeamOwnQuerySchema>;

export type TeamOwnQueryOne = z.infer<typeof TeamOwnQueryOneSchema>;

export type TeamWhere = z.infer<typeof TeamWhereSchema>;

export type TeamInclude = z.infer<typeof TeamIncludeSchema>;

export type TeamQueryOne = z.infer<typeof TeamQueryOneSchema>;

export type TeamQuery = z.infer<typeof TeamQuerySchema>;

export type TeamProjection = z.infer<typeof TeamProjectionSchema>;

export const TeamManagerQueryOneSchema = z
  .object({
    where: TeamManagerWhereSchemaJson,
    select: TeamManagerProjectionSchemaJson,
    omit: TeamManagerProjectionSchemaJson,
    include: TeamManagerIncludeSchemaJson,
  })
  .partial();

export const TeamManagerQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamManagerWhereSchemaJson,
    select: TeamManagerProjectionSchemaJson,
    omit: TeamManagerProjectionSchemaJson,
    include: TeamManagerIncludeSchemaJson,
  })
  .partial();

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

export type TeamManagerInclude = z.infer<typeof TeamManagerIncludeSchema>;

export type TeamManagerQueryOne = z.infer<typeof TeamManagerQueryOneSchema>;

export type TeamManagerQuery = z.infer<typeof TeamManagerQuerySchema>;

export type TeamManagerProjection = z.infer<typeof TeamManagerProjectionSchema>;

export const TeamMemberQueryOneSchema = z
  .object({
    where: TeamMemberWhereSchemaJson,
    select: TeamMemberProjectionSchemaJson,
    omit: TeamMemberProjectionSchemaJson,
    include: TeamMemberIncludeSchemaJson,
  })
  .partial();

export const TeamMemberQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamMemberWhereSchemaJson,
    select: TeamMemberProjectionSchemaJson,
    omit: TeamMemberProjectionSchemaJson,
    include: TeamMemberIncludeSchemaJson,
  })
  .partial();

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

export type TeamMemberInclude = z.infer<typeof TeamMemberIncludeSchema>;

export type TeamMemberQueryOne = z.infer<typeof TeamMemberQueryOneSchema>;

export type TeamMemberQuery = z.infer<typeof TeamMemberQuerySchema>;

export type TeamMemberProjection = z.infer<typeof TeamMemberProjectionSchema>;

export const SalaryQueryOneSchema = z
  .object({
    where: SalaryWhereSchemaJson,
    select: SalaryProjectionSchemaJson,
    omit: SalaryProjectionSchemaJson,
    include: SalaryIncludeSchemaJson,
  })
  .partial();

export const SalaryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SalaryWhereSchemaJson,
    select: SalaryProjectionSchemaJson,
    omit: SalaryProjectionSchemaJson,
    include: SalaryIncludeSchemaJson,
  })
  .partial();

export type SalaryCreate = z.infer<typeof SalaryCreateSchema>;

export type SalaryUpdate = z.infer<typeof SalaryUpdateSchema>;

export type SalaryOrderBy = z.infer<typeof SalaryOrderBySchema>;

export type SalaryOwnProjection = z.infer<typeof SalaryOwnProjectionSchema>;

export type SalaryOwnWhere = z.infer<typeof SalaryOwnWhereSchema>;

export type SalaryOwnQuery = z.infer<typeof SalaryOwnQuerySchema>;

export type SalaryOwnQueryOne = z.infer<typeof SalaryOwnQueryOneSchema>;

export type SalaryWhere = z.infer<typeof SalaryWhereSchema>;

export type SalaryInclude = z.infer<typeof SalaryIncludeSchema>;

export type SalaryQueryOne = z.infer<typeof SalaryQueryOneSchema>;

export type SalaryQuery = z.infer<typeof SalaryQuerySchema>;

export type SalaryProjection = z.infer<typeof SalaryProjectionSchema>;

export const SalaryHistoryQueryOneSchema = z
  .object({
    where: SalaryHistoryWhereSchemaJson,
    select: SalaryHistoryProjectionSchemaJson,
    omit: SalaryHistoryProjectionSchemaJson,
    include: SalaryHistoryIncludeSchemaJson,
  })
  .partial();

export const SalaryHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SalaryHistoryWhereSchemaJson,
    select: SalaryHistoryProjectionSchemaJson,
    omit: SalaryHistoryProjectionSchemaJson,
    include: SalaryHistoryIncludeSchemaJson,
  })
  .partial();

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

export type SalaryHistoryInclude = z.infer<typeof SalaryHistoryIncludeSchema>;

export type SalaryHistoryQueryOne = z.infer<typeof SalaryHistoryQueryOneSchema>;

export type SalaryHistoryQuery = z.infer<typeof SalaryHistoryQuerySchema>;

export type SalaryHistoryProjection = z.infer<
  typeof SalaryHistoryProjectionSchema
>;

export const BenefitQueryOneSchema = z
  .object({
    where: BenefitWhereSchemaJson,
    select: BenefitProjectionSchemaJson,
    omit: BenefitProjectionSchemaJson,
    include: BenefitIncludeSchemaJson,
  })
  .partial();

export const BenefitQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: BenefitWhereSchemaJson,
    select: BenefitProjectionSchemaJson,
    omit: BenefitProjectionSchemaJson,
    include: BenefitIncludeSchemaJson,
  })
  .partial();

export type BenefitCreate = z.infer<typeof BenefitCreateSchema>;

export type BenefitUpdate = z.infer<typeof BenefitUpdateSchema>;

export type BenefitOrderBy = z.infer<typeof BenefitOrderBySchema>;

export type BenefitOwnProjection = z.infer<typeof BenefitOwnProjectionSchema>;

export type BenefitOwnWhere = z.infer<typeof BenefitOwnWhereSchema>;

export type BenefitOwnQuery = z.infer<typeof BenefitOwnQuerySchema>;

export type BenefitOwnQueryOne = z.infer<typeof BenefitOwnQueryOneSchema>;

export type BenefitWhere = z.infer<typeof BenefitWhereSchema>;

export type BenefitInclude = z.infer<typeof BenefitIncludeSchema>;

export type BenefitQueryOne = z.infer<typeof BenefitQueryOneSchema>;

export type BenefitQuery = z.infer<typeof BenefitQuerySchema>;

export type BenefitProjection = z.infer<typeof BenefitProjectionSchema>;

export const BenefitEnrolmentQueryOneSchema = z
  .object({
    where: BenefitEnrolmentWhereSchemaJson,
    select: BenefitEnrolmentProjectionSchemaJson,
    omit: BenefitEnrolmentProjectionSchemaJson,
    include: BenefitEnrolmentIncludeSchemaJson,
  })
  .partial();

export const BenefitEnrolmentQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: BenefitEnrolmentWhereSchemaJson,
    select: BenefitEnrolmentProjectionSchemaJson,
    omit: BenefitEnrolmentProjectionSchemaJson,
    include: BenefitEnrolmentIncludeSchemaJson,
  })
  .partial();

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

export type BenefitEnrolmentInclude = z.infer<
  typeof BenefitEnrolmentIncludeSchema
>;

export type BenefitEnrolmentQueryOne = z.infer<
  typeof BenefitEnrolmentQueryOneSchema
>;

export type BenefitEnrolmentQuery = z.infer<typeof BenefitEnrolmentQuerySchema>;

export type BenefitEnrolmentProjection = z.infer<
  typeof BenefitEnrolmentProjectionSchema
>;

export const TitleHistoryQueryOneSchema = z
  .object({
    where: TitleHistoryWhereSchemaJson,
    select: TitleHistoryProjectionSchemaJson,
    omit: TitleHistoryProjectionSchemaJson,
    include: TitleHistoryIncludeSchemaJson,
  })
  .partial();

export const TitleHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TitleHistoryWhereSchemaJson,
    select: TitleHistoryProjectionSchemaJson,
    omit: TitleHistoryProjectionSchemaJson,
    include: TitleHistoryIncludeSchemaJson,
  })
  .partial();

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

export type TitleHistoryInclude = z.infer<typeof TitleHistoryIncludeSchema>;

export type TitleHistoryQueryOne = z.infer<typeof TitleHistoryQueryOneSchema>;

export type TitleHistoryQuery = z.infer<typeof TitleHistoryQuerySchema>;

export type TitleHistoryProjection = z.infer<
  typeof TitleHistoryProjectionSchema
>;

export const TimeOffPolicyQueryOneSchema = z
  .object({
    where: TimeOffPolicyWhereSchemaJson,
    select: TimeOffPolicyProjectionSchemaJson,
    omit: TimeOffPolicyProjectionSchemaJson,
    include: TimeOffPolicyIncludeSchemaJson,
  })
  .partial();

export const TimeOffPolicyQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffPolicyWhereSchemaJson,
    select: TimeOffPolicyProjectionSchemaJson,
    omit: TimeOffPolicyProjectionSchemaJson,
    include: TimeOffPolicyIncludeSchemaJson,
  })
  .partial();

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

export type TimeOffPolicyInclude = z.infer<typeof TimeOffPolicyIncludeSchema>;

export type TimeOffPolicyQueryOne = z.infer<typeof TimeOffPolicyQueryOneSchema>;

export type TimeOffPolicyQuery = z.infer<typeof TimeOffPolicyQuerySchema>;

export type TimeOffPolicyProjection = z.infer<
  typeof TimeOffPolicyProjectionSchema
>;

export const TimeOffBalanceQueryOneSchema = z
  .object({
    where: TimeOffBalanceWhereSchemaJson,
    select: TimeOffBalanceProjectionSchemaJson,
    omit: TimeOffBalanceProjectionSchemaJson,
    include: TimeOffBalanceIncludeSchemaJson,
  })
  .partial();

export const TimeOffBalanceQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffBalanceWhereSchemaJson,
    select: TimeOffBalanceProjectionSchemaJson,
    omit: TimeOffBalanceProjectionSchemaJson,
    include: TimeOffBalanceIncludeSchemaJson,
  })
  .partial();

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

export type TimeOffBalanceInclude = z.infer<typeof TimeOffBalanceIncludeSchema>;

export type TimeOffBalanceQueryOne = z.infer<
  typeof TimeOffBalanceQueryOneSchema
>;

export type TimeOffBalanceQuery = z.infer<typeof TimeOffBalanceQuerySchema>;

export type TimeOffBalanceProjection = z.infer<
  typeof TimeOffBalanceProjectionSchema
>;

export const TimeOffRequestQueryOneSchema = z
  .object({
    where: TimeOffRequestWhereSchemaJson,
    select: TimeOffRequestProjectionSchemaJson,
    omit: TimeOffRequestProjectionSchemaJson,
    include: TimeOffRequestIncludeSchemaJson,
  })
  .partial();

export const TimeOffRequestQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffRequestWhereSchemaJson,
    select: TimeOffRequestProjectionSchemaJson,
    omit: TimeOffRequestProjectionSchemaJson,
    include: TimeOffRequestIncludeSchemaJson,
  })
  .partial();

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

export type TimeOffRequestInclude = z.infer<typeof TimeOffRequestIncludeSchema>;

export type TimeOffRequestQueryOne = z.infer<
  typeof TimeOffRequestQueryOneSchema
>;

export type TimeOffRequestQuery = z.infer<typeof TimeOffRequestQuerySchema>;

export type TimeOffRequestProjection = z.infer<
  typeof TimeOffRequestProjectionSchema
>;

export const TimeOffTransactionQueryOneSchema = z
  .object({
    where: TimeOffTransactionWhereSchemaJson,
    select: TimeOffTransactionProjectionSchemaJson,
    omit: TimeOffTransactionProjectionSchemaJson,
    include: TimeOffTransactionIncludeSchemaJson,
  })
  .partial();

export const TimeOffTransactionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TimeOffTransactionWhereSchemaJson,
    select: TimeOffTransactionProjectionSchemaJson,
    omit: TimeOffTransactionProjectionSchemaJson,
    include: TimeOffTransactionIncludeSchemaJson,
  })
  .partial();

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

export type TimeOffTransactionInclude = z.infer<
  typeof TimeOffTransactionIncludeSchema
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

export const ClockInQueryOneSchema = z
  .object({
    where: ClockInWhereSchemaJson,
    select: ClockInProjectionSchemaJson,
    omit: ClockInProjectionSchemaJson,
    include: ClockInIncludeSchemaJson,
  })
  .partial();

export const ClockInQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ClockInWhereSchemaJson,
    select: ClockInProjectionSchemaJson,
    omit: ClockInProjectionSchemaJson,
    include: ClockInIncludeSchemaJson,
  })
  .partial();

export type ClockInCreate = z.infer<typeof ClockInCreateSchema>;

export type ClockInUpdate = z.infer<typeof ClockInUpdateSchema>;

export type ClockInOrderBy = z.infer<typeof ClockInOrderBySchema>;

export type ClockInOwnProjection = z.infer<typeof ClockInOwnProjectionSchema>;

export type ClockInOwnWhere = z.infer<typeof ClockInOwnWhereSchema>;

export type ClockInOwnQuery = z.infer<typeof ClockInOwnQuerySchema>;

export type ClockInOwnQueryOne = z.infer<typeof ClockInOwnQueryOneSchema>;

export type ClockInWhere = z.infer<typeof ClockInWhereSchema>;

export type ClockInInclude = z.infer<typeof ClockInIncludeSchema>;

export type ClockInQueryOne = z.infer<typeof ClockInQueryOneSchema>;

export type ClockInQuery = z.infer<typeof ClockInQuerySchema>;

export type ClockInProjection = z.infer<typeof ClockInProjectionSchema>;

export const PaycheckQueryOneSchema = z
  .object({
    where: PaycheckWhereSchemaJson,
    select: PaycheckProjectionSchemaJson,
    omit: PaycheckProjectionSchemaJson,
    include: PaycheckIncludeSchemaJson,
  })
  .partial();

export const PaycheckQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PaycheckWhereSchemaJson,
    select: PaycheckProjectionSchemaJson,
    omit: PaycheckProjectionSchemaJson,
    include: PaycheckIncludeSchemaJson,
  })
  .partial();

export type PaycheckCreate = z.infer<typeof PaycheckCreateSchema>;

export type PaycheckUpdate = z.infer<typeof PaycheckUpdateSchema>;

export type PaycheckOrderBy = z.infer<typeof PaycheckOrderBySchema>;

export type PaycheckOwnProjection = z.infer<typeof PaycheckOwnProjectionSchema>;

export type PaycheckOwnWhere = z.infer<typeof PaycheckOwnWhereSchema>;

export type PaycheckOwnQuery = z.infer<typeof PaycheckOwnQuerySchema>;

export type PaycheckOwnQueryOne = z.infer<typeof PaycheckOwnQueryOneSchema>;

export type PaycheckWhere = z.infer<typeof PaycheckWhereSchema>;

export type PaycheckInclude = z.infer<typeof PaycheckIncludeSchema>;

export type PaycheckQueryOne = z.infer<typeof PaycheckQueryOneSchema>;

export type PaycheckQuery = z.infer<typeof PaycheckQuerySchema>;

export type PaycheckProjection = z.infer<typeof PaycheckProjectionSchema>;

export const EarningQueryOneSchema = z
  .object({
    where: EarningWhereSchemaJson,
    select: EarningProjectionSchemaJson,
    omit: EarningProjectionSchemaJson,
    include: EarningIncludeSchemaJson,
  })
  .partial();

export const EarningQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EarningWhereSchemaJson,
    select: EarningProjectionSchemaJson,
    omit: EarningProjectionSchemaJson,
    include: EarningIncludeSchemaJson,
  })
  .partial();

export type EarningCreate = z.infer<typeof EarningCreateSchema>;

export type EarningUpdate = z.infer<typeof EarningUpdateSchema>;

export type EarningOrderBy = z.infer<typeof EarningOrderBySchema>;

export type EarningOwnProjection = z.infer<typeof EarningOwnProjectionSchema>;

export type EarningOwnWhere = z.infer<typeof EarningOwnWhereSchema>;

export type EarningOwnQuery = z.infer<typeof EarningOwnQuerySchema>;

export type EarningOwnQueryOne = z.infer<typeof EarningOwnQueryOneSchema>;

export type EarningWhere = z.infer<typeof EarningWhereSchema>;

export type EarningInclude = z.infer<typeof EarningIncludeSchema>;

export type EarningQueryOne = z.infer<typeof EarningQueryOneSchema>;

export type EarningQuery = z.infer<typeof EarningQuerySchema>;

export type EarningProjection = z.infer<typeof EarningProjectionSchema>;

export const PaycheckTaxQueryOneSchema = z
  .object({
    where: PaycheckTaxWhereSchemaJson,
    select: PaycheckTaxProjectionSchemaJson,
    omit: PaycheckTaxProjectionSchemaJson,
    include: PaycheckTaxIncludeSchemaJson,
  })
  .partial();

export const PaycheckTaxQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PaycheckTaxWhereSchemaJson,
    select: PaycheckTaxProjectionSchemaJson,
    omit: PaycheckTaxProjectionSchemaJson,
    include: PaycheckTaxIncludeSchemaJson,
  })
  .partial();

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

export type PaycheckTaxInclude = z.infer<typeof PaycheckTaxIncludeSchema>;

export type PaycheckTaxQueryOne = z.infer<typeof PaycheckTaxQueryOneSchema>;

export type PaycheckTaxQuery = z.infer<typeof PaycheckTaxQuerySchema>;

export type PaycheckTaxProjection = z.infer<typeof PaycheckTaxProjectionSchema>;

export const DeductionPolicyQueryOneSchema = z
  .object({
    where: DeductionPolicyWhereSchemaJson,
    select: DeductionPolicyProjectionSchemaJson,
    omit: DeductionPolicyProjectionSchemaJson,
    include: DeductionPolicyIncludeSchemaJson,
  })
  .partial();

export const DeductionPolicyQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DeductionPolicyWhereSchemaJson,
    select: DeductionPolicyProjectionSchemaJson,
    omit: DeductionPolicyProjectionSchemaJson,
    include: DeductionPolicyIncludeSchemaJson,
  })
  .partial();

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

export type DeductionPolicyInclude = z.infer<
  typeof DeductionPolicyIncludeSchema
>;

export type DeductionPolicyQueryOne = z.infer<
  typeof DeductionPolicyQueryOneSchema
>;

export type DeductionPolicyQuery = z.infer<typeof DeductionPolicyQuerySchema>;

export type DeductionPolicyProjection = z.infer<
  typeof DeductionPolicyProjectionSchema
>;

export const EmployeeDeductionQueryOneSchema = z
  .object({
    where: EmployeeDeductionWhereSchemaJson,
    select: EmployeeDeductionProjectionSchemaJson,
    omit: EmployeeDeductionProjectionSchemaJson,
    include: EmployeeDeductionIncludeSchemaJson,
  })
  .partial();

export const EmployeeDeductionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeDeductionWhereSchemaJson,
    select: EmployeeDeductionProjectionSchemaJson,
    omit: EmployeeDeductionProjectionSchemaJson,
    include: EmployeeDeductionIncludeSchemaJson,
  })
  .partial();

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

export type EmployeeDeductionInclude = z.infer<
  typeof EmployeeDeductionIncludeSchema
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

export const PaycheckDeductionQueryOneSchema = z
  .object({
    where: PaycheckDeductionWhereSchemaJson,
    select: PaycheckDeductionProjectionSchemaJson,
    omit: PaycheckDeductionProjectionSchemaJson,
    include: PaycheckDeductionIncludeSchemaJson,
  })
  .partial();

export const PaycheckDeductionQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PaycheckDeductionWhereSchemaJson,
    select: PaycheckDeductionProjectionSchemaJson,
    omit: PaycheckDeductionProjectionSchemaJson,
    include: PaycheckDeductionIncludeSchemaJson,
  })
  .partial();

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

export type PaycheckDeductionInclude = z.infer<
  typeof PaycheckDeductionIncludeSchema
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

export const EmployeeTaxDataQueryOneSchema = z
  .object({
    where: EmployeeTaxDataWhereSchemaJson,
    select: EmployeeTaxDataProjectionSchemaJson,
    omit: EmployeeTaxDataProjectionSchemaJson,
    include: EmployeeTaxDataIncludeSchemaJson,
  })
  .partial();

export const EmployeeTaxDataQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmployeeTaxDataWhereSchemaJson,
    select: EmployeeTaxDataProjectionSchemaJson,
    omit: EmployeeTaxDataProjectionSchemaJson,
    include: EmployeeTaxDataIncludeSchemaJson,
  })
  .partial();

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

export type EmployeeTaxDataInclude = z.infer<
  typeof EmployeeTaxDataIncludeSchema
>;

export type EmployeeTaxDataQueryOne = z.infer<
  typeof EmployeeTaxDataQueryOneSchema
>;

export type EmployeeTaxDataQuery = z.infer<typeof EmployeeTaxDataQuerySchema>;

export type EmployeeTaxDataProjection = z.infer<
  typeof EmployeeTaxDataProjectionSchema
>;

export const StateTaxWithholdingQueryOneSchema = z
  .object({
    where: StateTaxWithholdingWhereSchemaJson,
    select: StateTaxWithholdingProjectionSchemaJson,
    omit: StateTaxWithholdingProjectionSchemaJson,
    include: StateTaxWithholdingIncludeSchemaJson,
  })
  .partial();

export const StateTaxWithholdingQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StateTaxWithholdingWhereSchemaJson,
    select: StateTaxWithholdingProjectionSchemaJson,
    omit: StateTaxWithholdingProjectionSchemaJson,
    include: StateTaxWithholdingIncludeSchemaJson,
  })
  .partial();

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

export type StateTaxWithholdingInclude = z.infer<
  typeof StateTaxWithholdingIncludeSchema
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

export const LocalTaxWithholdingQueryOneSchema = z
  .object({
    where: LocalTaxWithholdingWhereSchemaJson,
    select: LocalTaxWithholdingProjectionSchemaJson,
    omit: LocalTaxWithholdingProjectionSchemaJson,
    include: LocalTaxWithholdingIncludeSchemaJson,
  })
  .partial();

export const LocalTaxWithholdingQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: LocalTaxWithholdingWhereSchemaJson,
    select: LocalTaxWithholdingProjectionSchemaJson,
    omit: LocalTaxWithholdingProjectionSchemaJson,
    include: LocalTaxWithholdingIncludeSchemaJson,
  })
  .partial();

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

export type LocalTaxWithholdingInclude = z.infer<
  typeof LocalTaxWithholdingIncludeSchema
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

export const PayrollRunQueryOneSchema = z
  .object({
    where: PayrollRunWhereSchemaJson,
    select: PayrollRunProjectionSchemaJson,
    omit: PayrollRunProjectionSchemaJson,
    include: PayrollRunIncludeSchemaJson,
  })
  .partial();

export const PayrollRunQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PayrollRunWhereSchemaJson,
    select: PayrollRunProjectionSchemaJson,
    omit: PayrollRunProjectionSchemaJson,
    include: PayrollRunIncludeSchemaJson,
  })
  .partial();

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

export type PayrollRunInclude = z.infer<typeof PayrollRunIncludeSchema>;

export type PayrollRunQueryOne = z.infer<typeof PayrollRunQueryOneSchema>;

export type PayrollRunQuery = z.infer<typeof PayrollRunQuerySchema>;

export type PayrollRunProjection = z.infer<typeof PayrollRunProjectionSchema>;

export const ContactQueryOneSchema = z
  .object({
    where: ContactWhereSchemaJson,
    select: ContactProjectionSchemaJson,
    omit: ContactProjectionSchemaJson,
    include: ContactIncludeSchemaJson,
  })
  .partial();

export const ContactQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ContactWhereSchemaJson,
    select: ContactProjectionSchemaJson,
    omit: ContactProjectionSchemaJson,
    include: ContactIncludeSchemaJson,
  })
  .partial();

export type ContactCreate = z.infer<typeof ContactCreateSchema>;

export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;

export type ContactOrderBy = z.infer<typeof ContactOrderBySchema>;

export type ContactOwnProjection = z.infer<typeof ContactOwnProjectionSchema>;

export type ContactOwnWhere = z.infer<typeof ContactOwnWhereSchema>;

export type ContactOwnQuery = z.infer<typeof ContactOwnQuerySchema>;

export type ContactOwnQueryOne = z.infer<typeof ContactOwnQueryOneSchema>;

export type ContactWhere = z.infer<typeof ContactWhereSchema>;

export type ContactInclude = z.infer<typeof ContactIncludeSchema>;

export type ContactQueryOne = z.infer<typeof ContactQueryOneSchema>;

export type ContactQuery = z.infer<typeof ContactQuerySchema>;

export type ContactProjection = z.infer<typeof ContactProjectionSchema>;

export const CountryQueryOneSchema = z
  .object({
    where: CountryWhereSchemaJson,
    select: CountryProjectionSchemaJson,
    omit: CountryProjectionSchemaJson,
    include: CountryIncludeSchemaJson,
  })
  .partial();

export const CountryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CountryWhereSchemaJson,
    select: CountryProjectionSchemaJson,
    omit: CountryProjectionSchemaJson,
    include: CountryIncludeSchemaJson,
  })
  .partial();

export type CountryCreate = z.infer<typeof CountryCreateSchema>;

export type CountryUpdate = z.infer<typeof CountryUpdateSchema>;

export type CountryOrderBy = z.infer<typeof CountryOrderBySchema>;

export type CountryOwnProjection = z.infer<typeof CountryOwnProjectionSchema>;

export type CountryOwnWhere = z.infer<typeof CountryOwnWhereSchema>;

export type CountryOwnQuery = z.infer<typeof CountryOwnQuerySchema>;

export type CountryOwnQueryOne = z.infer<typeof CountryOwnQueryOneSchema>;

export type CountryWhere = z.infer<typeof CountryWhereSchema>;

export type CountryInclude = z.infer<typeof CountryIncludeSchema>;

export type CountryQueryOne = z.infer<typeof CountryQueryOneSchema>;

export type CountryQuery = z.infer<typeof CountryQuerySchema>;

export type CountryProjection = z.infer<typeof CountryProjectionSchema>;

export const StateQueryOneSchema = z
  .object({
    where: StateWhereSchemaJson,
    select: StateProjectionSchemaJson,
    omit: StateProjectionSchemaJson,
    include: StateIncludeSchemaJson,
  })
  .partial();

export const StateQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StateWhereSchemaJson,
    select: StateProjectionSchemaJson,
    omit: StateProjectionSchemaJson,
    include: StateIncludeSchemaJson,
  })
  .partial();

export type StateCreate = z.infer<typeof StateCreateSchema>;

export type StateUpdate = z.infer<typeof StateUpdateSchema>;

export type StateOrderBy = z.infer<typeof StateOrderBySchema>;

export type StateOwnProjection = z.infer<typeof StateOwnProjectionSchema>;

export type StateOwnWhere = z.infer<typeof StateOwnWhereSchema>;

export type StateOwnQuery = z.infer<typeof StateOwnQuerySchema>;

export type StateOwnQueryOne = z.infer<typeof StateOwnQueryOneSchema>;

export type StateWhere = z.infer<typeof StateWhereSchema>;

export type StateInclude = z.infer<typeof StateIncludeSchema>;

export type StateQueryOne = z.infer<typeof StateQueryOneSchema>;

export type StateQuery = z.infer<typeof StateQuerySchema>;

export type StateProjection = z.infer<typeof StateProjectionSchema>;

export const AddressQueryOneSchema = z
  .object({
    where: AddressWhereSchemaJson,
    select: AddressProjectionSchemaJson,
    omit: AddressProjectionSchemaJson,
    include: AddressIncludeSchemaJson,
  })
  .partial();

export const AddressQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AddressWhereSchemaJson,
    select: AddressProjectionSchemaJson,
    omit: AddressProjectionSchemaJson,
    include: AddressIncludeSchemaJson,
  })
  .partial();

export type AddressCreate = z.infer<typeof AddressCreateSchema>;

export type AddressUpdate = z.infer<typeof AddressUpdateSchema>;

export type AddressOrderBy = z.infer<typeof AddressOrderBySchema>;

export type AddressOwnProjection = z.infer<typeof AddressOwnProjectionSchema>;

export type AddressOwnWhere = z.infer<typeof AddressOwnWhereSchema>;

export type AddressOwnQuery = z.infer<typeof AddressOwnQuerySchema>;

export type AddressOwnQueryOne = z.infer<typeof AddressOwnQueryOneSchema>;

export type AddressWhere = z.infer<typeof AddressWhereSchema>;

export type AddressInclude = z.infer<typeof AddressIncludeSchema>;

export type AddressQueryOne = z.infer<typeof AddressQueryOneSchema>;

export type AddressQuery = z.infer<typeof AddressQuerySchema>;

export type AddressProjection = z.infer<typeof AddressProjectionSchema>;

export const EmailQueryOneSchema = z
  .object({
    where: EmailWhereSchemaJson,
    select: EmailProjectionSchemaJson,
    omit: EmailProjectionSchemaJson,
    include: EmailIncludeSchemaJson,
  })
  .partial();

export const EmailQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmailWhereSchemaJson,
    select: EmailProjectionSchemaJson,
    omit: EmailProjectionSchemaJson,
    include: EmailIncludeSchemaJson,
  })
  .partial();

export type EmailCreate = z.infer<typeof EmailCreateSchema>;

export type EmailUpdate = z.infer<typeof EmailUpdateSchema>;

export type EmailOrderBy = z.infer<typeof EmailOrderBySchema>;

export type EmailOwnProjection = z.infer<typeof EmailOwnProjectionSchema>;

export type EmailOwnWhere = z.infer<typeof EmailOwnWhereSchema>;

export type EmailOwnQuery = z.infer<typeof EmailOwnQuerySchema>;

export type EmailOwnQueryOne = z.infer<typeof EmailOwnQueryOneSchema>;

export type EmailWhere = z.infer<typeof EmailWhereSchema>;

export type EmailInclude = z.infer<typeof EmailIncludeSchema>;

export type EmailQueryOne = z.infer<typeof EmailQueryOneSchema>;

export type EmailQuery = z.infer<typeof EmailQuerySchema>;

export type EmailProjection = z.infer<typeof EmailProjectionSchema>;

export const PhoneQueryOneSchema = z
  .object({
    where: PhoneWhereSchemaJson,
    select: PhoneProjectionSchemaJson,
    omit: PhoneProjectionSchemaJson,
    include: PhoneIncludeSchemaJson,
  })
  .partial();

export const PhoneQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PhoneWhereSchemaJson,
    select: PhoneProjectionSchemaJson,
    omit: PhoneProjectionSchemaJson,
    include: PhoneIncludeSchemaJson,
  })
  .partial();

export type PhoneCreate = z.infer<typeof PhoneCreateSchema>;

export type PhoneUpdate = z.infer<typeof PhoneUpdateSchema>;

export type PhoneOrderBy = z.infer<typeof PhoneOrderBySchema>;

export type PhoneOwnProjection = z.infer<typeof PhoneOwnProjectionSchema>;

export type PhoneOwnWhere = z.infer<typeof PhoneOwnWhereSchema>;

export type PhoneOwnQuery = z.infer<typeof PhoneOwnQuerySchema>;

export type PhoneOwnQueryOne = z.infer<typeof PhoneOwnQueryOneSchema>;

export type PhoneWhere = z.infer<typeof PhoneWhereSchema>;

export type PhoneInclude = z.infer<typeof PhoneIncludeSchema>;

export type PhoneQueryOne = z.infer<typeof PhoneQueryOneSchema>;

export type PhoneQuery = z.infer<typeof PhoneQuerySchema>;

export type PhoneProjection = z.infer<typeof PhoneProjectionSchema>;

export const PrimaryEmailQueryOneSchema = z
  .object({
    where: PrimaryEmailWhereSchemaJson,
    select: PrimaryEmailProjectionSchemaJson,
    omit: PrimaryEmailProjectionSchemaJson,
    include: PrimaryEmailIncludeSchemaJson,
  })
  .partial();

export const PrimaryEmailQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PrimaryEmailWhereSchemaJson,
    select: PrimaryEmailProjectionSchemaJson,
    omit: PrimaryEmailProjectionSchemaJson,
    include: PrimaryEmailIncludeSchemaJson,
  })
  .partial();

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

export type PrimaryEmailInclude = z.infer<typeof PrimaryEmailIncludeSchema>;

export type PrimaryEmailQueryOne = z.infer<typeof PrimaryEmailQueryOneSchema>;

export type PrimaryEmailQuery = z.infer<typeof PrimaryEmailQuerySchema>;

export type PrimaryEmailProjection = z.infer<
  typeof PrimaryEmailProjectionSchema
>;

export const PrimaryPhoneQueryOneSchema = z
  .object({
    where: PrimaryPhoneWhereSchemaJson,
    select: PrimaryPhoneProjectionSchemaJson,
    omit: PrimaryPhoneProjectionSchemaJson,
    include: PrimaryPhoneIncludeSchemaJson,
  })
  .partial();

export const PrimaryPhoneQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PrimaryPhoneWhereSchemaJson,
    select: PrimaryPhoneProjectionSchemaJson,
    omit: PrimaryPhoneProjectionSchemaJson,
    include: PrimaryPhoneIncludeSchemaJson,
  })
  .partial();

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

export type PrimaryPhoneInclude = z.infer<typeof PrimaryPhoneIncludeSchema>;

export type PrimaryPhoneQueryOne = z.infer<typeof PrimaryPhoneQueryOneSchema>;

export type PrimaryPhoneQuery = z.infer<typeof PrimaryPhoneQuerySchema>;

export type PrimaryPhoneProjection = z.infer<
  typeof PrimaryPhoneProjectionSchema
>;

export const PrimaryAddressQueryOneSchema = z
  .object({
    where: PrimaryAddressWhereSchemaJson,
    select: PrimaryAddressProjectionSchemaJson,
    omit: PrimaryAddressProjectionSchemaJson,
    include: PrimaryAddressIncludeSchemaJson,
  })
  .partial();

export const PrimaryAddressQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PrimaryAddressWhereSchemaJson,
    select: PrimaryAddressProjectionSchemaJson,
    omit: PrimaryAddressProjectionSchemaJson,
    include: PrimaryAddressIncludeSchemaJson,
  })
  .partial();

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

export type PrimaryAddressInclude = z.infer<typeof PrimaryAddressIncludeSchema>;

export type PrimaryAddressQueryOne = z.infer<
  typeof PrimaryAddressQueryOneSchema
>;

export type PrimaryAddressQuery = z.infer<typeof PrimaryAddressQuerySchema>;

export type PrimaryAddressProjection = z.infer<
  typeof PrimaryAddressProjectionSchema
>;
