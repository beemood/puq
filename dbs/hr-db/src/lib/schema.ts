/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';

export const PaginationSchema = z
  .object({
    take: PZ.Scalar.take(),
    skip: PZ.Scalar.skip(),
  })
  .partial();

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

export const DepartmentOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    departments: PZ.Scalar.bool(),
    titles: PZ.Scalar.bool(),
  })
  .partial();

export const DepartmentOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOwnSelectFieldsSchema
);

export const DepartmentDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name', 'slug', 'isActive'])
  .array();

export const TitleOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    departmentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
    department: PZ.Scalar.bool(),
    employees: PZ.Scalar.bool(),
    histories: PZ.Scalar.bool(),
  })
  .partial();

export const TitleOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOwnSelectFieldsSchema
);

export const TitleDistinctFieldsSchema = z
  .enum(['id', 'departmentId', 'name', 'slug', 'description', 'isActive'])
  .array();

export const PersonalDataOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    ein: PZ.Scalar.bool(),
    gender: PZ.Scalar.bool(),
    dob: PZ.Scalar.bool(),
    maritalStatus: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const PersonalDataOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataOwnSelectFieldsSchema
);

export const PersonalDataDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'ein', 'gender', 'dob', 'maritalStatus'])
  .array();

export const EmployeeOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    firstName: PZ.Scalar.bool(),
    middleName: PZ.Scalar.bool(),
    lastName: PZ.Scalar.bool(),
    preferedName: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
    hireDate: PZ.Scalar.bool(),
    terminationDate: PZ.Scalar.bool(),
    employmentType: PZ.Scalar.bool(),
    salary: PZ.Scalar.bool(),
    salaryHistory: PZ.Scalar.bool(),
    benefits: PZ.Scalar.bool(),
    titleHistory: PZ.Scalar.bool(),
    timeOffBalances: PZ.Scalar.bool(),
    timeOffRequests: PZ.Scalar.bool(),
    resolvedTimeOffs: PZ.Scalar.bool(),
    clockIns: PZ.Scalar.bool(),
    personalData: PZ.Scalar.bool(),
    taxData: PZ.Scalar.bool(),
    memberships: PZ.Scalar.bool(),
    managingTeams: PZ.Scalar.bool(),
    managingEmployees: PZ.Scalar.bool(),
    directManager: PZ.Scalar.bool(),
    paychecks: PZ.Scalar.bool(),
    directManagerId: PZ.Scalar.bool(),
    deductions: PZ.Scalar.bool(),
    resolvedPayrollRuns: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeOwnSelectFieldsSchema
);

export const EmployeeDistinctFieldsSchema = z
  .enum([
    'id',
    'uuid',
    'titleId',
    'firstName',
    'middleName',
    'lastName',
    'preferedName',
    'status',
    'hireDate',
    'terminationDate',
    'employmentType',
    'directManagerId',
  ])
  .array();

export const TeamOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    members: PZ.Scalar.bool(),
    managers: PZ.Scalar.bool(),
  })
  .partial();

export const TeamOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamOwnSelectFieldsSchema
);

export const TeamDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const TeamManagerOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    managerId: PZ.Scalar.bool(),
    team: PZ.Scalar.bool(),
    manager: PZ.Scalar.bool(),
  })
  .partial();

export const TeamManagerOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerOwnSelectFieldsSchema
);

export const TeamManagerDistinctFieldsSchema = z
  .enum(['id', 'teamId', 'managerId'])
  .array();

export const TeamMemberOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    memberId: PZ.Scalar.bool(),
    member: PZ.Scalar.bool(),
    team: PZ.Scalar.bool(),
  })
  .partial();

export const TeamMemberOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberOwnSelectFieldsSchema
);

export const TeamMemberDistinctFieldsSchema = z
  .enum(['id', 'teamId', 'memberId'])
  .array();

export const SalaryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    gross: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    frequency: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const SalaryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryOwnSelectFieldsSchema
);

export const SalaryDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'gross', 'startDate', 'endDate', 'frequency'])
  .array();

export const SalaryHistoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    oldSalary: PZ.Scalar.bool(),
    newSalary: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const SalaryHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistoryOwnSelectFieldsSchema
);

export const SalaryHistoryDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'createdAt', 'oldSalary', 'newSalary', 'reason'])
  .array();

export const BenefitOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    enrolments: PZ.Scalar.bool(),
  })
  .partial();

export const BenefitOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitOwnSelectFieldsSchema
);

export const BenefitDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'type'])
  .array();

export const BenefitEnrolmentOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    benefitId: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    benefit: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const BenefitEnrolmentOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentOwnSelectFieldsSchema
);

export const BenefitEnrolmentDistinctFieldsSchema = z
  .enum(['id', 'benefitId', 'employeeId', 'startDate', 'status'])
  .array();

export const TitleHistoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
  })
  .partial();

export const TitleHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistoryOwnSelectFieldsSchema
);

export const TitleHistoryDistinctFieldsSchema = z
  .enum([
    'id',
    'employeeId',
    'titleId',
    'type',
    'reason',
    'startDate',
    'endDate',
  ])
  .array();

export const TimeOffPolicyOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    accrualRate: PZ.Scalar.bool(),
    maxRollover: PZ.Scalar.bool(),
    balances: PZ.Scalar.bool(),
    requests: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffPolicyOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffPolicyOwnSelectFieldsSchema
);

export const TimeOffPolicyDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'accrualRate', 'maxRollover'])
  .array();

export const TimeOffBalanceOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    accruedHours: PZ.Scalar.bool(),
    usedHours: PZ.Scalar.bool(),
    availableHours: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
    transactions: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffBalanceOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffBalanceOwnSelectFieldsSchema
);

export const TimeOffBalanceDistinctFieldsSchema = z
  .enum([
    'id',
    'policyId',
    'employeeId',
    'accruedHours',
    'usedHours',
    'availableHours',
  ])
  .array();

export const TimeOffRequestOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    resolverId: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool(),
    resolver: PZ.Scalar.bool(),
    transactions: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffRequestOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffRequestOwnSelectFieldsSchema
);

export const TimeOffRequestDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'employeeId',
    'reason',
    'policyId',
    'resolverId',
    'status',
    'startDate',
    'endDate',
  ])
  .array();

export const TimeOffTransactionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    balanceId: PZ.Scalar.bool(),
    requestId: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    balance: PZ.Scalar.bool(),
    request: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffTransactionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionOwnSelectFieldsSchema
);

export const TimeOffTransactionDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'updatedAt',
    'type',
    'balanceId',
    'requestId',
    'amount',
  ])
  .array();

export const ClockInOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    clockIn: PZ.Scalar.bool(),
    clockOut: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const ClockInOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInOwnSelectFieldsSchema
);

export const ClockInDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'clockIn', 'clockOut'])
  .array();

export const PaycheckOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    payrollRunId: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    grossAmount: PZ.Scalar.bool(),
    netAmount: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
    earnings: PZ.Scalar.bool(),
    paycheckTaxes: PZ.Scalar.bool(),
    deductions: PZ.Scalar.bool(),
    payrollRun: PZ.Scalar.bool(),
  })
  .partial();

export const PaycheckOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckOwnSelectFieldsSchema
);

export const PaycheckDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'payrollRunId',
    'updatedAt',
    'employeeId',
    'grossAmount',
    'netAmount',
  ])
  .array();

export const EarningOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    hours: PZ.Scalar.bool(),
    rate: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    paycheck: PZ.Scalar.bool(),
  })
  .partial();

export const EarningOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningOwnSelectFieldsSchema
);

export const EarningDistinctFieldsSchema = z
  .enum(['id', 'type', 'hours', 'rate', 'amount', 'paycheckId'])
  .array();

export const PaycheckTaxOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    taxAuthority: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    paycheck: PZ.Scalar.bool(),
  })
  .partial();

export const PaycheckTaxOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxOwnSelectFieldsSchema
);

export const PaycheckTaxDistinctFieldsSchema = z
  .enum(['id', 'paycheckId', 'taxAuthority', 'amount'])
  .array();

export const DeductionPolicyOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    defaultAmount: PZ.Scalar.bool(),
    defaultPercent: PZ.Scalar.bool(),
    employeeDeductions: PZ.Scalar.bool(),
  })
  .partial();

export const DeductionPolicyOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DeductionPolicyOwnSelectFieldsSchema
);

export const DeductionPolicyDistinctFieldsSchema = z
  .enum(['id', 'name', 'type', 'defaultAmount', 'defaultPercent'])
  .array();

export const EmployeeDeductionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    employeeAmount: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool(),
    paycheckDeductions: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeDeductionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeDeductionOwnSelectFieldsSchema
);

export const EmployeeDeductionDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'policyId', 'employeeAmount'])
  .array();

export const PaycheckDeductionOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    employeeDeductionId: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    paycheck: PZ.Scalar.bool(),
    employeeDeduction: PZ.Scalar.bool(),
  })
  .partial();

export const PaycheckDeductionOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionOwnSelectFieldsSchema
);

export const PaycheckDeductionDistinctFieldsSchema = z
  .enum(['id', 'paycheckId', 'employeeDeductionId', 'amount'])
  .array();

export const EmployeeTaxDataOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    federalStatus: PZ.Scalar.bool(),
    dependentsCredit: PZ.Scalar.bool(),
    multipleJobs: PZ.Scalar.bool(),
    otherIncome: PZ.Scalar.bool(),
    deductionsAmount: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
    isExempt: PZ.Scalar.bool(),
    isNonResidentAlien: PZ.Scalar.bool(),
    stateTaxes: PZ.Scalar.bool(),
    localTaxes: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeTaxDataOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataOwnSelectFieldsSchema
);

export const EmployeeTaxDataDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'updatedAt',
    'startDate',
    'endDate',
    'employeeId',
    'federalStatus',
    'dependentsCredit',
    'multipleJobs',
    'otherIncome',
    'deductionsAmount',
    'extraWithholding',
    'isExempt',
    'isNonResidentAlien',
  ])
  .array();

export const StateTaxWithholdingOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taxDataId: PZ.Scalar.bool(),
    stateCode: PZ.Scalar.bool(),
    stateStatus: PZ.Scalar.bool(),
    allowances: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
    taxData: PZ.Scalar.bool(),
  })
  .partial();

export const StateTaxWithholdingOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingOwnSelectFieldsSchema
);

export const StateTaxWithholdingDistinctFieldsSchema = z
  .enum([
    'id',
    'taxDataId',
    'stateCode',
    'stateStatus',
    'allowances',
    'extraWithholding',
  ])
  .array();

export const LocalTaxWithholdingOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taxDataId: PZ.Scalar.bool(),
    jurisdiction: PZ.Scalar.bool(),
    localStatus: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
    taxData: PZ.Scalar.bool(),
  })
  .partial();

export const LocalTaxWithholdingOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingOwnSelectFieldsSchema
);

export const LocalTaxWithholdingDistinctFieldsSchema = z
  .enum(['id', 'taxDataId', 'jurisdiction', 'localStatus', 'extraWithholding'])
  .array();

export const PayrollRunOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    resolverId: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    payDate: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    approvedBy: PZ.Scalar.bool(),
    paychecks: PZ.Scalar.bool(),
  })
  .partial();

export const PayrollRunOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PayrollRunOwnSelectFieldsSchema
);

export const PayrollRunDistinctFieldsSchema = z
  .enum(['id', 'resolverId', 'startDate', 'endDate', 'payDate', 'status'])
  .array();

export const ContactOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
    emails: PZ.Scalar.bool(),
    phones: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
    primaryEmail: PZ.Scalar.bool(),
    primaryPhone: PZ.Scalar.bool(),
    primaryAddress: PZ.Scalar.bool(),
  })
  .partial();

export const ContactOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOwnSelectFieldsSchema
);

export const ContactDistinctFieldsSchema = z.enum(['id', 'employeeId']).array();

export const CountryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    states: PZ.Scalar.bool(),
  })
  .partial();

export const CountryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOwnSelectFieldsSchema
);

export const CountryDistinctFieldsSchema = z
  .enum(['id', 'name', 'code'])
  .array();

export const StateOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    countryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    country: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
  })
  .partial();

export const StateOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOwnSelectFieldsSchema
);

export const StateDistinctFieldsSchema = z
  .enum(['id', 'countryId', 'name', 'code'])
  .array();

export const AddressOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    stateId: PZ.Scalar.bool(),
    street: PZ.Scalar.bool(),
    zip: PZ.Scalar.bool(),
    city: PZ.Scalar.bool(),
    state: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
    primary: PZ.Scalar.bool(),
  })
  .partial();

export const AddressOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOwnSelectFieldsSchema
);

export const AddressDistinctFieldsSchema = z
  .enum(['id', 'type', 'contactId', 'stateId', 'street', 'zip', 'city'])
  .array();

export const EmailOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
    primary: PZ.Scalar.bool(),
  })
  .partial();

export const EmailOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOwnSelectFieldsSchema
);

export const EmailDistinctFieldsSchema = z
  .enum(['id', 'type', 'contactId', 'email'])
  .array();

export const PhoneOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
    primary: PZ.Scalar.bool(),
  })
  .partial();

export const PhoneOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOwnSelectFieldsSchema
);

export const PhoneDistinctFieldsSchema = z
  .enum(['id', 'type', 'contactId', 'phone'])
  .array();

export const PrimaryEmailOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    emailId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PrimaryEmailOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailOwnSelectFieldsSchema
);

export const PrimaryEmailDistinctFieldsSchema = z
  .enum(['id', 'emailId', 'contactId'])
  .array();

export const PrimaryPhoneOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    phoneId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PrimaryPhoneOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneOwnSelectFieldsSchema
);

export const PrimaryPhoneDistinctFieldsSchema = z
  .enum(['id', 'phoneId', 'contactId'])
  .array();

export const PrimaryAddressOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    addressId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    address: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PrimaryAddressOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressOwnSelectFieldsSchema
);

export const PrimaryAddressDistinctFieldsSchema = z
  .enum(['id', 'addressId', 'contactId'])
  .array();

export const DepartmentOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    isActive: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const DepartmentOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOwnWhereSchema
);

export const TitleOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    departmentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isActive: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const TitleOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOwnWhereSchema
);

export const PersonalDataOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    ein: z.string().or(PZ.StringFilterSchema),
    gender: GenderSchema,
    dob: z.string().or(PZ.DateTimeFilterSchema),
    maritalStatus: MaritalStatusSchema,
  })
  .partial();

export const PersonalDataOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataOwnWhereSchema
);

export const EmployeeOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    titleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    firstName: z.string().or(PZ.StringFilterSchema),
    middleName: z.string().or(PZ.StringFilterSchema),
    lastName: z.string().or(PZ.StringFilterSchema),
    preferedName: z.string().or(PZ.StringFilterSchema),
    status: EmployeeStatusSchema,
    hireDate: z.string().or(PZ.DateTimeFilterSchema),
    terminationDate: z.string().or(PZ.DateTimeFilterSchema),
    employmentType: EmploymentTypeSchema,
    directManagerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const EmployeeOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeOwnWhereSchema
);

export const TeamOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const TeamOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamOwnWhereSchema
);

export const TeamManagerOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    managerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const TeamManagerOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerOwnWhereSchema
);

export const TeamMemberOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    memberId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const TeamMemberOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberOwnWhereSchema
);

export const SalaryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    gross: z.coerce.number().or(PZ.NumberFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    frequency: PayFrequencySchema,
  })
  .partial();

export const SalaryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryOwnWhereSchema
);

export const SalaryHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    oldSalary: z.coerce.number().or(PZ.NumberFilterSchema),
    newSalary: z.coerce.number().or(PZ.NumberFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const SalaryHistoryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistoryOwnWhereSchema
);

export const BenefitOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    type: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const BenefitOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitOwnWhereSchema
);

export const BenefitEnrolmentOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    benefitId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    status: BenefitStatusSchema,
  })
  .partial();

export const BenefitEnrolmentOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentOwnWhereSchema
);

export const TitleHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    titleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: TitleChangeTypeSchema,
    reason: z.string().or(PZ.StringFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const TitleHistoryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistoryOwnWhereSchema
);

export const TimeOffPolicyOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    accrualRate: z.coerce.number().or(PZ.NumberFilterSchema),
    maxRollover: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const TimeOffPolicyOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffPolicyOwnWhereSchema
);

export const TimeOffBalanceOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    accruedHours: z.coerce.number().or(PZ.NumberFilterSchema),
    usedHours: z.coerce.number().or(PZ.NumberFilterSchema),
    availableHours: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const TimeOffBalanceOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffBalanceOwnWhereSchema
);

export const TimeOffRequestOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolverId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    status: RequestStatusSchema,
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const TimeOffRequestOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffRequestOwnWhereSchema
);

export const TimeOffTransactionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    type: TimeOffTransactionTypeSchema,
    balanceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const TimeOffTransactionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionOwnWhereSchema
);

export const ClockInOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    clockIn: z.string().or(PZ.DateTimeFilterSchema),
    clockOut: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const ClockInOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInOwnWhereSchema
);

export const PaycheckOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    payrollRunId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    grossAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    netAmount: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const PaycheckOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckOwnWhereSchema
);

export const EarningOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: EarningTypeSchema,
    hours: z.coerce.number().or(PZ.NumberFilterSchema),
    rate: z.coerce.number().or(PZ.NumberFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const EarningOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningOwnWhereSchema
);

export const PaycheckTaxOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxAuthority: z.string().or(PZ.StringFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const PaycheckTaxOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxOwnWhereSchema
);

export const DeductionPolicyOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    type: DeductionTypeSchema,
    defaultAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    defaultPercent: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const DeductionPolicyOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DeductionPolicyOwnWhereSchema
);

export const EmployeeDeductionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeAmount: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const EmployeeDeductionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeDeductionOwnWhereSchema
);

export const PaycheckDeductionOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeDeductionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const PaycheckDeductionOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionOwnWhereSchema
);

export const EmployeeTaxDataOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    federalStatus: TaxFilingStatusSchema,
    dependentsCredit: z.coerce.number().or(PZ.NumberFilterSchema),
    multipleJobs: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    otherIncome: z.coerce.number().or(PZ.NumberFilterSchema),
    deductionsAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    extraWithholding: z.coerce.number().or(PZ.NumberFilterSchema),
    isExempt: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    isNonResidentAlien: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const EmployeeTaxDataOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataOwnWhereSchema
);

export const StateTaxWithholdingOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxDataId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    stateCode: z.string().or(PZ.StringFilterSchema),
    stateStatus: z.string().or(PZ.StringFilterSchema),
    allowances: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    extraWithholding: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const StateTaxWithholdingOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingOwnWhereSchema
);

export const LocalTaxWithholdingOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxDataId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    jurisdiction: z.string().or(PZ.StringFilterSchema),
    localStatus: z.string().or(PZ.StringFilterSchema),
    extraWithholding: z.coerce.number().or(PZ.NumberFilterSchema),
  })
  .partial();

export const LocalTaxWithholdingOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingOwnWhereSchema
);

export const PayrollRunOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolverId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    payDate: z.string().or(PZ.DateTimeFilterSchema),
    status: PayrollStatusSchema,
  })
  .partial();

export const PayrollRunOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PayrollRunOwnWhereSchema
);

export const ContactOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ContactOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOwnWhereSchema
);

export const CountryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CountryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOwnWhereSchema
);

export const StateOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    countryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const StateOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOwnWhereSchema
);

export const AddressOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    stateId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    street: z.string().or(PZ.StringFilterSchema),
    zip: z.string().or(PZ.StringFilterSchema),
    city: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const AddressOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOwnWhereSchema
);

export const EmailOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    email: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const EmailOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOwnWhereSchema
);

export const PhoneOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phone: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const PhoneOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOwnWhereSchema
);

export const PrimaryEmailOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    emailId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const PrimaryEmailOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailOwnWhereSchema
);

export const PrimaryPhoneOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phoneId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const PrimaryPhoneOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneOwnWhereSchema
);

export const PrimaryAddressOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    addressId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const PrimaryAddressOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressOwnWhereSchema
);

export const DepartmentOwnIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool(),
    departments: PZ.Scalar.bool(),
    titles: PZ.Scalar.bool(),
  })
  .partial();

export const DepartmentOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOwnIncludeSchema
);

export const DepartmentOwnQueryOneSchema = z
  .object({
    where: DepartmentOwnWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
  })
  .partial();

export const DepartmentOwnQuerySchema = z
  .object({
    where: DepartmentOwnWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
  })
  .partial();

export const TitleOwnIncludeSchema = z
  .object({
    department: PZ.Scalar.bool(),
    employees: PZ.Scalar.bool(),
    histories: PZ.Scalar.bool(),
  })
  .partial();

export const TitleOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOwnIncludeSchema
);

export const TitleOwnQueryOneSchema = z
  .object({
    where: TitleOwnWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
  })
  .partial();

export const TitleOwnQuerySchema = z
  .object({
    where: TitleOwnWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
  })
  .partial();

export const PersonalDataOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const PersonalDataOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataOwnIncludeSchema
);

export const PersonalDataOwnQueryOneSchema = z
  .object({
    where: PersonalDataOwnWhereSchemaJson,
    distinct: PersonalDataDistinctFieldsSchema,
  })
  .partial();

export const PersonalDataOwnQuerySchema = z
  .object({
    where: PersonalDataOwnWhereSchemaJson,
    distinct: PersonalDataDistinctFieldsSchema,
  })
  .partial();

export const EmployeeOwnIncludeSchema = z
  .object({
    title: PZ.Scalar.bool(),
    salary: PZ.Scalar.bool(),
    salaryHistory: PZ.Scalar.bool(),
    benefits: PZ.Scalar.bool(),
    titleHistory: PZ.Scalar.bool(),
    timeOffBalances: PZ.Scalar.bool(),
    timeOffRequests: PZ.Scalar.bool(),
    resolvedTimeOffs: PZ.Scalar.bool(),
    clockIns: PZ.Scalar.bool(),
    personalData: PZ.Scalar.bool(),
    taxData: PZ.Scalar.bool(),
    memberships: PZ.Scalar.bool(),
    managingTeams: PZ.Scalar.bool(),
    managingEmployees: PZ.Scalar.bool(),
    directManager: PZ.Scalar.bool(),
    paychecks: PZ.Scalar.bool(),
    deductions: PZ.Scalar.bool(),
    resolvedPayrollRuns: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeOwnIncludeSchema
);

export const EmployeeOwnQueryOneSchema = z
  .object({
    where: EmployeeOwnWhereSchemaJson,
    distinct: EmployeeDistinctFieldsSchema,
  })
  .partial();

export const EmployeeOwnQuerySchema = z
  .object({
    where: EmployeeOwnWhereSchemaJson,
    distinct: EmployeeDistinctFieldsSchema,
  })
  .partial();

export const TeamOwnIncludeSchema = z
  .object({
    members: PZ.Scalar.bool(),
    managers: PZ.Scalar.bool(),
  })
  .partial();

export const TeamOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamOwnIncludeSchema
);

export const TeamOwnQueryOneSchema = z
  .object({
    where: TeamOwnWhereSchemaJson,
    distinct: TeamDistinctFieldsSchema,
  })
  .partial();

export const TeamOwnQuerySchema = z
  .object({
    where: TeamOwnWhereSchemaJson,
    distinct: TeamDistinctFieldsSchema,
  })
  .partial();

export const TeamManagerOwnIncludeSchema = z
  .object({
    team: PZ.Scalar.bool(),
    manager: PZ.Scalar.bool(),
  })
  .partial();

export const TeamManagerOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerOwnIncludeSchema
);

export const TeamManagerOwnQueryOneSchema = z
  .object({
    where: TeamManagerOwnWhereSchemaJson,
    distinct: TeamManagerDistinctFieldsSchema,
  })
  .partial();

export const TeamManagerOwnQuerySchema = z
  .object({
    where: TeamManagerOwnWhereSchemaJson,
    distinct: TeamManagerDistinctFieldsSchema,
  })
  .partial();

export const TeamMemberOwnIncludeSchema = z
  .object({
    member: PZ.Scalar.bool(),
    team: PZ.Scalar.bool(),
  })
  .partial();

export const TeamMemberOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberOwnIncludeSchema
);

export const TeamMemberOwnQueryOneSchema = z
  .object({
    where: TeamMemberOwnWhereSchemaJson,
    distinct: TeamMemberDistinctFieldsSchema,
  })
  .partial();

export const TeamMemberOwnQuerySchema = z
  .object({
    where: TeamMemberOwnWhereSchemaJson,
    distinct: TeamMemberDistinctFieldsSchema,
  })
  .partial();

export const SalaryOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const SalaryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryOwnIncludeSchema
);

export const SalaryOwnQueryOneSchema = z
  .object({
    where: SalaryOwnWhereSchemaJson,
    distinct: SalaryDistinctFieldsSchema,
  })
  .partial();

export const SalaryOwnQuerySchema = z
  .object({
    where: SalaryOwnWhereSchemaJson,
    distinct: SalaryDistinctFieldsSchema,
  })
  .partial();

export const SalaryHistoryOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const SalaryHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistoryOwnIncludeSchema
);

export const SalaryHistoryOwnQueryOneSchema = z
  .object({
    where: SalaryHistoryOwnWhereSchemaJson,
    distinct: SalaryHistoryDistinctFieldsSchema,
  })
  .partial();

export const SalaryHistoryOwnQuerySchema = z
  .object({
    where: SalaryHistoryOwnWhereSchemaJson,
    distinct: SalaryHistoryDistinctFieldsSchema,
  })
  .partial();

export const BenefitOwnIncludeSchema = z
  .object({
    enrolments: PZ.Scalar.bool(),
  })
  .partial();

export const BenefitOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitOwnIncludeSchema
);

export const BenefitOwnQueryOneSchema = z
  .object({
    where: BenefitOwnWhereSchemaJson,
    distinct: BenefitDistinctFieldsSchema,
  })
  .partial();

export const BenefitOwnQuerySchema = z
  .object({
    where: BenefitOwnWhereSchemaJson,
    distinct: BenefitDistinctFieldsSchema,
  })
  .partial();

export const BenefitEnrolmentOwnIncludeSchema = z
  .object({
    benefit: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const BenefitEnrolmentOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentOwnIncludeSchema
);

export const BenefitEnrolmentOwnQueryOneSchema = z
  .object({
    where: BenefitEnrolmentOwnWhereSchemaJson,
    distinct: BenefitEnrolmentDistinctFieldsSchema,
  })
  .partial();

export const BenefitEnrolmentOwnQuerySchema = z
  .object({
    where: BenefitEnrolmentOwnWhereSchemaJson,
    distinct: BenefitEnrolmentDistinctFieldsSchema,
  })
  .partial();

export const TitleHistoryOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
  })
  .partial();

export const TitleHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistoryOwnIncludeSchema
);

export const TitleHistoryOwnQueryOneSchema = z
  .object({
    where: TitleHistoryOwnWhereSchemaJson,
    distinct: TitleHistoryDistinctFieldsSchema,
  })
  .partial();

export const TitleHistoryOwnQuerySchema = z
  .object({
    where: TitleHistoryOwnWhereSchemaJson,
    distinct: TitleHistoryDistinctFieldsSchema,
  })
  .partial();

export const TimeOffPolicyOwnIncludeSchema = z
  .object({
    balances: PZ.Scalar.bool(),
    requests: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffPolicyOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffPolicyOwnIncludeSchema
);

export const TimeOffPolicyOwnQueryOneSchema = z
  .object({
    where: TimeOffPolicyOwnWhereSchemaJson,
    distinct: TimeOffPolicyDistinctFieldsSchema,
  })
  .partial();

export const TimeOffPolicyOwnQuerySchema = z
  .object({
    where: TimeOffPolicyOwnWhereSchemaJson,
    distinct: TimeOffPolicyDistinctFieldsSchema,
  })
  .partial();

export const TimeOffBalanceOwnIncludeSchema = z
  .object({
    policy: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
    transactions: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffBalanceOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffBalanceOwnIncludeSchema
);

export const TimeOffBalanceOwnQueryOneSchema = z
  .object({
    where: TimeOffBalanceOwnWhereSchemaJson,
    distinct: TimeOffBalanceDistinctFieldsSchema,
  })
  .partial();

export const TimeOffBalanceOwnQuerySchema = z
  .object({
    where: TimeOffBalanceOwnWhereSchemaJson,
    distinct: TimeOffBalanceDistinctFieldsSchema,
  })
  .partial();

export const TimeOffRequestOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool(),
    resolver: PZ.Scalar.bool(),
    transactions: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffRequestOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffRequestOwnIncludeSchema
);

export const TimeOffRequestOwnQueryOneSchema = z
  .object({
    where: TimeOffRequestOwnWhereSchemaJson,
    distinct: TimeOffRequestDistinctFieldsSchema,
  })
  .partial();

export const TimeOffRequestOwnQuerySchema = z
  .object({
    where: TimeOffRequestOwnWhereSchemaJson,
    distinct: TimeOffRequestDistinctFieldsSchema,
  })
  .partial();

export const TimeOffTransactionOwnIncludeSchema = z
  .object({
    balance: PZ.Scalar.bool(),
    request: PZ.Scalar.bool(),
  })
  .partial();

export const TimeOffTransactionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionOwnIncludeSchema
);

export const TimeOffTransactionOwnQueryOneSchema = z
  .object({
    where: TimeOffTransactionOwnWhereSchemaJson,
    distinct: TimeOffTransactionDistinctFieldsSchema,
  })
  .partial();

export const TimeOffTransactionOwnQuerySchema = z
  .object({
    where: TimeOffTransactionOwnWhereSchemaJson,
    distinct: TimeOffTransactionDistinctFieldsSchema,
  })
  .partial();

export const ClockInOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const ClockInOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInOwnIncludeSchema
);

export const ClockInOwnQueryOneSchema = z
  .object({
    where: ClockInOwnWhereSchemaJson,
    distinct: ClockInDistinctFieldsSchema,
  })
  .partial();

export const ClockInOwnQuerySchema = z
  .object({
    where: ClockInOwnWhereSchemaJson,
    distinct: ClockInDistinctFieldsSchema,
  })
  .partial();

export const PaycheckOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
    earnings: PZ.Scalar.bool(),
    paycheckTaxes: PZ.Scalar.bool(),
    deductions: PZ.Scalar.bool(),
    payrollRun: PZ.Scalar.bool(),
  })
  .partial();

export const PaycheckOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckOwnIncludeSchema
);

export const PaycheckOwnQueryOneSchema = z
  .object({
    where: PaycheckOwnWhereSchemaJson,
    distinct: PaycheckDistinctFieldsSchema,
  })
  .partial();

export const PaycheckOwnQuerySchema = z
  .object({
    where: PaycheckOwnWhereSchemaJson,
    distinct: PaycheckDistinctFieldsSchema,
  })
  .partial();

export const EarningOwnIncludeSchema = z
  .object({
    paycheck: PZ.Scalar.bool(),
  })
  .partial();

export const EarningOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningOwnIncludeSchema
);

export const EarningOwnQueryOneSchema = z
  .object({
    where: EarningOwnWhereSchemaJson,
    distinct: EarningDistinctFieldsSchema,
  })
  .partial();

export const EarningOwnQuerySchema = z
  .object({
    where: EarningOwnWhereSchemaJson,
    distinct: EarningDistinctFieldsSchema,
  })
  .partial();

export const PaycheckTaxOwnIncludeSchema = z
  .object({
    paycheck: PZ.Scalar.bool(),
  })
  .partial();

export const PaycheckTaxOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxOwnIncludeSchema
);

export const PaycheckTaxOwnQueryOneSchema = z
  .object({
    where: PaycheckTaxOwnWhereSchemaJson,
    distinct: PaycheckTaxDistinctFieldsSchema,
  })
  .partial();

export const PaycheckTaxOwnQuerySchema = z
  .object({
    where: PaycheckTaxOwnWhereSchemaJson,
    distinct: PaycheckTaxDistinctFieldsSchema,
  })
  .partial();

export const DeductionPolicyOwnIncludeSchema = z
  .object({
    employeeDeductions: PZ.Scalar.bool(),
  })
  .partial();

export const DeductionPolicyOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DeductionPolicyOwnIncludeSchema
);

export const DeductionPolicyOwnQueryOneSchema = z
  .object({
    where: DeductionPolicyOwnWhereSchemaJson,
    distinct: DeductionPolicyDistinctFieldsSchema,
  })
  .partial();

export const DeductionPolicyOwnQuerySchema = z
  .object({
    where: DeductionPolicyOwnWhereSchemaJson,
    distinct: DeductionPolicyDistinctFieldsSchema,
  })
  .partial();

export const EmployeeDeductionOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool(),
    paycheckDeductions: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeDeductionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeDeductionOwnIncludeSchema
);

export const EmployeeDeductionOwnQueryOneSchema = z
  .object({
    where: EmployeeDeductionOwnWhereSchemaJson,
    distinct: EmployeeDeductionDistinctFieldsSchema,
  })
  .partial();

export const EmployeeDeductionOwnQuerySchema = z
  .object({
    where: EmployeeDeductionOwnWhereSchemaJson,
    distinct: EmployeeDeductionDistinctFieldsSchema,
  })
  .partial();

export const PaycheckDeductionOwnIncludeSchema = z
  .object({
    paycheck: PZ.Scalar.bool(),
    employeeDeduction: PZ.Scalar.bool(),
  })
  .partial();

export const PaycheckDeductionOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionOwnIncludeSchema
);

export const PaycheckDeductionOwnQueryOneSchema = z
  .object({
    where: PaycheckDeductionOwnWhereSchemaJson,
    distinct: PaycheckDeductionDistinctFieldsSchema,
  })
  .partial();

export const PaycheckDeductionOwnQuerySchema = z
  .object({
    where: PaycheckDeductionOwnWhereSchemaJson,
    distinct: PaycheckDeductionDistinctFieldsSchema,
  })
  .partial();

export const EmployeeTaxDataOwnIncludeSchema = z
  .object({
    stateTaxes: PZ.Scalar.bool(),
    localTaxes: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool(),
  })
  .partial();

export const EmployeeTaxDataOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataOwnIncludeSchema
);

export const EmployeeTaxDataOwnQueryOneSchema = z
  .object({
    where: EmployeeTaxDataOwnWhereSchemaJson,
    distinct: EmployeeTaxDataDistinctFieldsSchema,
  })
  .partial();

export const EmployeeTaxDataOwnQuerySchema = z
  .object({
    where: EmployeeTaxDataOwnWhereSchemaJson,
    distinct: EmployeeTaxDataDistinctFieldsSchema,
  })
  .partial();

export const StateTaxWithholdingOwnIncludeSchema = z
  .object({
    taxData: PZ.Scalar.bool(),
  })
  .partial();

export const StateTaxWithholdingOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingOwnIncludeSchema
);

export const StateTaxWithholdingOwnQueryOneSchema = z
  .object({
    where: StateTaxWithholdingOwnWhereSchemaJson,
    distinct: StateTaxWithholdingDistinctFieldsSchema,
  })
  .partial();

export const StateTaxWithholdingOwnQuerySchema = z
  .object({
    where: StateTaxWithholdingOwnWhereSchemaJson,
    distinct: StateTaxWithholdingDistinctFieldsSchema,
  })
  .partial();

export const LocalTaxWithholdingOwnIncludeSchema = z
  .object({
    taxData: PZ.Scalar.bool(),
  })
  .partial();

export const LocalTaxWithholdingOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingOwnIncludeSchema
);

export const LocalTaxWithholdingOwnQueryOneSchema = z
  .object({
    where: LocalTaxWithholdingOwnWhereSchemaJson,
    distinct: LocalTaxWithholdingDistinctFieldsSchema,
  })
  .partial();

export const LocalTaxWithholdingOwnQuerySchema = z
  .object({
    where: LocalTaxWithholdingOwnWhereSchemaJson,
    distinct: LocalTaxWithholdingDistinctFieldsSchema,
  })
  .partial();

export const PayrollRunOwnIncludeSchema = z
  .object({
    approvedBy: PZ.Scalar.bool(),
    paychecks: PZ.Scalar.bool(),
  })
  .partial();

export const PayrollRunOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PayrollRunOwnIncludeSchema
);

export const PayrollRunOwnQueryOneSchema = z
  .object({
    where: PayrollRunOwnWhereSchemaJson,
    distinct: PayrollRunDistinctFieldsSchema,
  })
  .partial();

export const PayrollRunOwnQuerySchema = z
  .object({
    where: PayrollRunOwnWhereSchemaJson,
    distinct: PayrollRunDistinctFieldsSchema,
  })
  .partial();

export const ContactOwnIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool(),
    emails: PZ.Scalar.bool(),
    phones: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
    primaryEmail: PZ.Scalar.bool(),
    primaryPhone: PZ.Scalar.bool(),
    primaryAddress: PZ.Scalar.bool(),
  })
  .partial();

export const ContactOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOwnIncludeSchema
);

export const ContactOwnQueryOneSchema = z
  .object({
    where: ContactOwnWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
  })
  .partial();

export const ContactOwnQuerySchema = z
  .object({
    where: ContactOwnWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
  })
  .partial();

export const CountryOwnIncludeSchema = z
  .object({
    states: PZ.Scalar.bool(),
  })
  .partial();

export const CountryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOwnIncludeSchema
);

export const CountryOwnQueryOneSchema = z
  .object({
    where: CountryOwnWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
  })
  .partial();

export const CountryOwnQuerySchema = z
  .object({
    where: CountryOwnWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
  })
  .partial();

export const StateOwnIncludeSchema = z
  .object({
    country: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
  })
  .partial();

export const StateOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOwnIncludeSchema
);

export const StateOwnQueryOneSchema = z
  .object({
    where: StateOwnWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
  })
  .partial();

export const StateOwnQuerySchema = z
  .object({
    where: StateOwnWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
  })
  .partial();

export const AddressOwnIncludeSchema = z
  .object({
    state: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
    primary: PZ.Scalar.bool(),
  })
  .partial();

export const AddressOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOwnIncludeSchema
);

export const AddressOwnQueryOneSchema = z
  .object({
    where: AddressOwnWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
  })
  .partial();

export const AddressOwnQuerySchema = z
  .object({
    where: AddressOwnWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
  })
  .partial();

export const EmailOwnIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool(),
    primary: PZ.Scalar.bool(),
  })
  .partial();

export const EmailOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOwnIncludeSchema
);

export const EmailOwnQueryOneSchema = z
  .object({
    where: EmailOwnWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
  })
  .partial();

export const EmailOwnQuerySchema = z
  .object({
    where: EmailOwnWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
  })
  .partial();

export const PhoneOwnIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool(),
    primary: PZ.Scalar.bool(),
  })
  .partial();

export const PhoneOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOwnIncludeSchema
);

export const PhoneOwnQueryOneSchema = z
  .object({
    where: PhoneOwnWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
  })
  .partial();

export const PhoneOwnQuerySchema = z
  .object({
    where: PhoneOwnWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
  })
  .partial();

export const PrimaryEmailOwnIncludeSchema = z
  .object({
    email: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PrimaryEmailOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailOwnIncludeSchema
);

export const PrimaryEmailOwnQueryOneSchema = z
  .object({
    where: PrimaryEmailOwnWhereSchemaJson,
    distinct: PrimaryEmailDistinctFieldsSchema,
  })
  .partial();

export const PrimaryEmailOwnQuerySchema = z
  .object({
    where: PrimaryEmailOwnWhereSchemaJson,
    distinct: PrimaryEmailDistinctFieldsSchema,
  })
  .partial();

export const PrimaryPhoneOwnIncludeSchema = z
  .object({
    phone: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PrimaryPhoneOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneOwnIncludeSchema
);

export const PrimaryPhoneOwnQueryOneSchema = z
  .object({
    where: PrimaryPhoneOwnWhereSchemaJson,
    distinct: PrimaryPhoneDistinctFieldsSchema,
  })
  .partial();

export const PrimaryPhoneOwnQuerySchema = z
  .object({
    where: PrimaryPhoneOwnWhereSchemaJson,
    distinct: PrimaryPhoneDistinctFieldsSchema,
  })
  .partial();

export const PrimaryAddressOwnIncludeSchema = z
  .object({
    address: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PrimaryAddressOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressOwnIncludeSchema
);

export const PrimaryAddressOwnQueryOneSchema = z
  .object({
    where: PrimaryAddressOwnWhereSchemaJson,
    distinct: PrimaryAddressDistinctFieldsSchema,
  })
  .partial();

export const PrimaryAddressOwnQuerySchema = z
  .object({
    where: PrimaryAddressOwnWhereSchemaJson,
    distinct: PrimaryAddressDistinctFieldsSchema,
  })
  .partial();

export const DepartmentCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    parentId: PZ.Scalar.id().optional(),
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
    isActive: PZ.Scalar.bool().optional(),
  })
);

export const DepartmentUpdateSchema = z.object({
  parentId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  isActive: PZ.Scalar.bool().optional().optional(),
});

export const DepartmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    isActive: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const DepartmentOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOrderBySchema
);

export const DepartmentWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    isActive: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    parent: DepartmentOwnWhereSchema,
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
  PZ.jsonPreprocessor,
  DepartmentWhereSchema
);

export const DepartmentSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
    departments: PZ.Scalar.bool().or(DepartmentOwnQuerySchema),
    titles: PZ.Scalar.bool().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentSelectFieldsSchema
);

export const DepartmentOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'parentId', 'name', 'slug', 'isActive'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const DepartmentOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOmitFieldsSchema
);

export const DepartmentIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
    departments: PZ.Scalar.bool().or(DepartmentOwnQuerySchema),
    titles: PZ.Scalar.bool().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentIncludeSchema
);

export const DepartmentProjectionSchema = z.union([
  z.object({ omit: DepartmentOmitFieldsSchemaJson }),
  z.object({ select: DepartmentSelectFieldsSchemaJson }),
  z.object({ include: DepartmentIncludeSchemaJson }),
  z.object({}),
]);

export const TitleCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    departmentId: PZ.Scalar.id(),
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
    description: PZ.Scalar.description().optional(),
    isActive: PZ.Scalar.bool().optional(),
  })
);

export const TitleUpdateSchema = z.object({
  departmentId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
  isActive: PZ.Scalar.bool().optional().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TitleOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOrderBySchema
);

export const TitleWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    departmentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isActive: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    department: DepartmentOwnWhereSchema,
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

export const TitleWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleWhereSchema
);

export const TitleSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    departmentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
    department: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
    employees: PZ.Scalar.bool().or(EmployeeOwnQuerySchema),
    histories: PZ.Scalar.bool().or(TitleHistoryOwnQuerySchema),
  })
  .partial();

export const TitleSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleSelectFieldsSchema
);

export const TitleOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    departmentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isActive: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'departmentId', 'name', 'slug', 'description', 'isActive'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TitleOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOmitFieldsSchema
);

export const TitleIncludeSchema = z
  .object({
    department: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
    employees: PZ.Scalar.bool().or(EmployeeOwnQuerySchema),
    histories: PZ.Scalar.bool().or(TitleHistoryOwnQuerySchema),
  })
  .partial();

export const TitleIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleIncludeSchema
);

export const TitleProjectionSchema = z.union([
  z.object({ omit: TitleOmitFieldsSchemaJson }),
  z.object({ select: TitleSelectFieldsSchemaJson }),
  z.object({ include: TitleIncludeSchemaJson }),
  z.object({}),
]);

export const PersonalDataCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
    ein: PZ.Scalar.string(),
    gender: GenderSchema,
    dob: PZ.Scalar.datetime(),
    maritalStatus: MaritalStatusSchema,
  })
);

export const PersonalDataUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  ein: PZ.Scalar.string().optional(),
  gender: GenderSchema.optional(),
  dob: PZ.Scalar.datetime().optional(),
  maritalStatus: MaritalStatusSchema.optional(),
});

export const PersonalDataOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    ein: PZ.OrderDirectionSchema,
    dob: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PersonalDataOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataOrderBySchema
);

export const PersonalDataWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    ein: z.string().or(PZ.StringFilterSchema),
    gender: GenderSchema,
    dob: z.string().or(PZ.DateTimeFilterSchema),
    maritalStatus: MaritalStatusSchema,
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const PersonalDataWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataWhereSchema
);

export const PersonalDataSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    ein: PZ.Scalar.bool(),
    gender: PZ.Scalar.bool(),
    dob: PZ.Scalar.bool(),
    maritalStatus: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const PersonalDataSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataSelectFieldsSchema
);

export const PersonalDataOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    ein: PZ.Scalar.bool(),
    gender: PZ.Scalar.bool(),
    dob: PZ.Scalar.bool(),
    maritalStatus: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'employeeId', 'ein', 'gender', 'dob', 'maritalStatus'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PersonalDataOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataOmitFieldsSchema
);

export const PersonalDataIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const PersonalDataIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PersonalDataIncludeSchema
);

export const PersonalDataProjectionSchema = z.union([
  z.object({ omit: PersonalDataOmitFieldsSchemaJson }),
  z.object({ select: PersonalDataSelectFieldsSchemaJson }),
  z.object({ include: PersonalDataIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    titleId: PZ.Scalar.id(),
    firstName: PZ.Scalar.string(),
    middleName: PZ.Scalar.string().optional(),
    lastName: PZ.Scalar.string(),
    preferedName: PZ.Scalar.string().optional(),
    status: EmployeeStatusSchema.optional(),
    hireDate: PZ.Scalar.datetime().optional(),
    terminationDate: PZ.Scalar.datetime().optional(),
    employmentType: EmploymentTypeSchema,
    directManagerId: PZ.Scalar.id().optional(),
  })
);

export const EmployeeUpdateSchema = z.object({
  titleId: PZ.Scalar.id().optional(),
  firstName: PZ.Scalar.string().optional(),
  middleName: PZ.Scalar.string().optional().optional(),
  lastName: PZ.Scalar.string().optional(),
  preferedName: PZ.Scalar.string().optional().optional(),
  status: EmployeeStatusSchema.optional().optional(),
  hireDate: PZ.Scalar.datetime().optional().optional(),
  terminationDate: PZ.Scalar.datetime().optional().optional(),
  employmentType: EmploymentTypeSchema.optional(),
  directManagerId: PZ.Scalar.id().optional().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeOrderBySchema
);

export const EmployeeWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    titleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    firstName: z.string().or(PZ.StringFilterSchema),
    middleName: z.string().or(PZ.StringFilterSchema),
    lastName: z.string().or(PZ.StringFilterSchema),
    preferedName: z.string().or(PZ.StringFilterSchema),
    status: EmployeeStatusSchema,
    title: TitleOwnWhereSchema,
    hireDate: z.string().or(PZ.DateTimeFilterSchema),
    terminationDate: z.string().or(PZ.DateTimeFilterSchema),
    employmentType: EmploymentTypeSchema,
    salary: SalaryOwnWhereSchema,
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
    personalData: PersonalDataOwnWhereSchema,
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
    directManager: EmployeeOwnWhereSchema,
    paychecks: z
      .object({
        some: PaycheckOwnWhereSchema,
        every: PaycheckOwnWhereSchema,
        none: PaycheckOwnWhereSchema,
      })
      .partial(),
    directManagerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
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
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const EmployeeWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeWhereSchema
);

export const EmployeeSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    firstName: PZ.Scalar.bool(),
    middleName: PZ.Scalar.bool(),
    lastName: PZ.Scalar.bool(),
    preferedName: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    title: PZ.Scalar.bool().or(TitleOwnQueryOneSchema),
    hireDate: PZ.Scalar.bool(),
    terminationDate: PZ.Scalar.bool(),
    employmentType: PZ.Scalar.bool(),
    salary: PZ.Scalar.bool().or(SalaryOwnQueryOneSchema),
    salaryHistory: PZ.Scalar.bool().or(SalaryHistoryOwnQuerySchema),
    benefits: PZ.Scalar.bool().or(BenefitEnrolmentOwnQuerySchema),
    titleHistory: PZ.Scalar.bool().or(TitleHistoryOwnQuerySchema),
    timeOffBalances: PZ.Scalar.bool().or(TimeOffBalanceOwnQuerySchema),
    timeOffRequests: PZ.Scalar.bool().or(TimeOffRequestOwnQuerySchema),
    resolvedTimeOffs: PZ.Scalar.bool().or(TimeOffRequestOwnQuerySchema),
    clockIns: PZ.Scalar.bool().or(ClockInOwnQuerySchema),
    personalData: PZ.Scalar.bool().or(PersonalDataOwnQueryOneSchema),
    taxData: PZ.Scalar.bool().or(EmployeeTaxDataOwnQuerySchema),
    memberships: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    managingTeams: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
    managingEmployees: PZ.Scalar.bool().or(EmployeeOwnQuerySchema),
    directManager: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    paychecks: PZ.Scalar.bool().or(PaycheckOwnQuerySchema),
    directManagerId: PZ.Scalar.bool(),
    deductions: PZ.Scalar.bool().or(EmployeeDeductionOwnQuerySchema),
    resolvedPayrollRuns: PZ.Scalar.bool().or(PayrollRunOwnQuerySchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmployeeSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeSelectFieldsSchema
);

export const EmployeeOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    firstName: PZ.Scalar.bool(),
    middleName: PZ.Scalar.bool(),
    lastName: PZ.Scalar.bool(),
    preferedName: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    hireDate: PZ.Scalar.bool(),
    terminationDate: PZ.Scalar.bool(),
    employmentType: PZ.Scalar.bool(),
    directManagerId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'uuid',
        'titleId',
        'firstName',
        'middleName',
        'lastName',
        'preferedName',
        'status',
        'hireDate',
        'terminationDate',
        'employmentType',
        'directManagerId',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmployeeOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeOmitFieldsSchema
);

export const EmployeeIncludeSchema = z
  .object({
    title: PZ.Scalar.bool().or(TitleOwnQueryOneSchema),
    salary: PZ.Scalar.bool().or(SalaryOwnQueryOneSchema),
    salaryHistory: PZ.Scalar.bool().or(SalaryHistoryOwnQuerySchema),
    benefits: PZ.Scalar.bool().or(BenefitEnrolmentOwnQuerySchema),
    titleHistory: PZ.Scalar.bool().or(TitleHistoryOwnQuerySchema),
    timeOffBalances: PZ.Scalar.bool().or(TimeOffBalanceOwnQuerySchema),
    timeOffRequests: PZ.Scalar.bool().or(TimeOffRequestOwnQuerySchema),
    resolvedTimeOffs: PZ.Scalar.bool().or(TimeOffRequestOwnQuerySchema),
    clockIns: PZ.Scalar.bool().or(ClockInOwnQuerySchema),
    personalData: PZ.Scalar.bool().or(PersonalDataOwnQueryOneSchema),
    taxData: PZ.Scalar.bool().or(EmployeeTaxDataOwnQuerySchema),
    memberships: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    managingTeams: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
    managingEmployees: PZ.Scalar.bool().or(EmployeeOwnQuerySchema),
    directManager: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    paychecks: PZ.Scalar.bool().or(PaycheckOwnQuerySchema),
    deductions: PZ.Scalar.bool().or(EmployeeDeductionOwnQuerySchema),
    resolvedPayrollRuns: PZ.Scalar.bool().or(PayrollRunOwnQuerySchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmployeeIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeIncludeSchema
);

export const EmployeeProjectionSchema = z.union([
  z.object({ omit: EmployeeOmitFieldsSchemaJson }),
  z.object({ select: EmployeeSelectFieldsSchemaJson }),
  z.object({ include: EmployeeIncludeSchemaJson }),
  z.object({}),
]);

export const TeamCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
  })
);

export const TeamUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
});

export const TeamOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TeamOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamOrderBySchema
);

export const TeamWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
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

export const TeamWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamWhereSchema
);

export const TeamSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    members: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    managers: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
  })
  .partial();

export const TeamSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamSelectFieldsSchema
);

export const TeamOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine((value) => !['id', 'name'].every((e) => Object.hasOwn(value, e)), {
    message: 'Cannot omit all fields',
    path: ['omit'],
  });

export const TeamOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamOmitFieldsSchema
);

export const TeamIncludeSchema = z
  .object({
    members: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    managers: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
  })
  .partial();

export const TeamIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamIncludeSchema
);

export const TeamProjectionSchema = z.union([
  z.object({ omit: TeamOmitFieldsSchemaJson }),
  z.object({ select: TeamSelectFieldsSchemaJson }),
  z.object({ include: TeamIncludeSchemaJson }),
  z.object({}),
]);

export const TeamManagerCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    teamId: PZ.Scalar.id(),
    managerId: PZ.Scalar.id(),
  })
);

export const TeamManagerUpdateSchema = z.object({
  teamId: PZ.Scalar.id().optional(),
  managerId: PZ.Scalar.id().optional(),
});

export const TeamManagerOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    teamId: PZ.OrderDirectionSchema,
    managerId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TeamManagerOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerOrderBySchema
);

export const TeamManagerWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    managerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    team: TeamOwnWhereSchema,
    manager: EmployeeOwnWhereSchema,
  })
  .partial();

export const TeamManagerWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerWhereSchema
);

export const TeamManagerSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    managerId: PZ.Scalar.bool(),
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    manager: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerSelectFieldsSchema
);

export const TeamManagerOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    managerId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'teamId', 'managerId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TeamManagerOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerOmitFieldsSchema
);

export const TeamManagerIncludeSchema = z
  .object({
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    manager: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerIncludeSchema
);

export const TeamManagerProjectionSchema = z.union([
  z.object({ omit: TeamManagerOmitFieldsSchemaJson }),
  z.object({ select: TeamManagerSelectFieldsSchemaJson }),
  z.object({ include: TeamManagerIncludeSchemaJson }),
  z.object({}),
]);

export const TeamMemberCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    teamId: PZ.Scalar.id(),
    memberId: PZ.Scalar.id(),
  })
);

export const TeamMemberUpdateSchema = z.object({
  teamId: PZ.Scalar.id().optional(),
  memberId: PZ.Scalar.id().optional(),
});

export const TeamMemberOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    teamId: PZ.OrderDirectionSchema,
    memberId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TeamMemberOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberOrderBySchema
);

export const TeamMemberWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    memberId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    member: EmployeeOwnWhereSchema,
    team: TeamOwnWhereSchema,
  })
  .partial();

export const TeamMemberWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberWhereSchema
);

export const TeamMemberSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    memberId: PZ.Scalar.bool(),
    member: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberSelectFieldsSchema
);

export const TeamMemberOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    memberId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'teamId', 'memberId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TeamMemberOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberOmitFieldsSchema
);

export const TeamMemberIncludeSchema = z
  .object({
    member: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberIncludeSchema
);

export const TeamMemberProjectionSchema = z.union([
  z.object({ omit: TeamMemberOmitFieldsSchemaJson }),
  z.object({ select: TeamMemberSelectFieldsSchemaJson }),
  z.object({ include: TeamMemberIncludeSchemaJson }),
  z.object({}),
]);

export const SalaryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
    gross: PZ.Scalar.number(),
    startDate: PZ.Scalar.datetime(),
    endDate: PZ.Scalar.datetime().optional(),
    frequency: PayFrequencySchema,
  })
);

export const SalaryUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  gross: PZ.Scalar.number().optional(),
  startDate: PZ.Scalar.datetime().optional(),
  endDate: PZ.Scalar.datetime().optional().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SalaryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryOrderBySchema
);

export const SalaryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    gross: z.coerce.number().or(PZ.NumberFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    frequency: PayFrequencySchema,
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const SalaryWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryWhereSchema
);

export const SalarySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    gross: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    frequency: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalarySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalarySelectFieldsSchema
);

export const SalaryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    gross: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    frequency: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'employeeId', 'gross', 'startDate', 'endDate', 'frequency'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SalaryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryOmitFieldsSchema
);

export const SalaryIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalaryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryIncludeSchema
);

export const SalaryProjectionSchema = z.union([
  z.object({ omit: SalaryOmitFieldsSchemaJson }),
  z.object({ select: SalarySelectFieldsSchemaJson }),
  z.object({ include: SalaryIncludeSchemaJson }),
  z.object({}),
]);

export const SalaryHistoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
    oldSalary: PZ.Scalar.number(),
    newSalary: PZ.Scalar.number(),
    reason: PZ.Scalar.string().optional(),
  })
);

export const SalaryHistoryUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  oldSalary: PZ.Scalar.number().optional(),
  newSalary: PZ.Scalar.number().optional(),
  reason: PZ.Scalar.string().optional().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SalaryHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistoryOrderBySchema
);

export const SalaryHistoryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    oldSalary: z.coerce.number().or(PZ.NumberFilterSchema),
    newSalary: z.coerce.number().or(PZ.NumberFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const SalaryHistoryWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistoryWhereSchema
);

export const SalaryHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    oldSalary: PZ.Scalar.bool(),
    newSalary: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalaryHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistorySelectFieldsSchema
);

export const SalaryHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    oldSalary: PZ.Scalar.bool(),
    newSalary: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'employeeId',
        'createdAt',
        'oldSalary',
        'newSalary',
        'reason',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SalaryHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistoryOmitFieldsSchema
);

export const SalaryHistoryIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const SalaryHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SalaryHistoryIncludeSchema
);

export const SalaryHistoryProjectionSchema = z.union([
  z.object({ omit: SalaryHistoryOmitFieldsSchemaJson }),
  z.object({ select: SalaryHistorySelectFieldsSchemaJson }),
  z.object({ include: SalaryHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const BenefitCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    description: PZ.Scalar.description().optional(),
    type: PZ.Scalar.string().optional(),
  })
);

export const BenefitUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  type: PZ.Scalar.string().optional().optional(),
});

export const BenefitOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    type: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const BenefitOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitOrderBySchema
);

export const BenefitWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    type: z.string().or(PZ.StringFilterSchema),
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
  PZ.jsonPreprocessor,
  BenefitWhereSchema
);

export const BenefitSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    enrolments: PZ.Scalar.bool().or(BenefitEnrolmentOwnQuerySchema),
  })
  .partial();

export const BenefitSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitSelectFieldsSchema
);

export const BenefitOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'description', 'type'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const BenefitOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitOmitFieldsSchema
);

export const BenefitIncludeSchema = z
  .object({
    enrolments: PZ.Scalar.bool().or(BenefitEnrolmentOwnQuerySchema),
  })
  .partial();

export const BenefitIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitIncludeSchema
);

export const BenefitProjectionSchema = z.union([
  z.object({ omit: BenefitOmitFieldsSchemaJson }),
  z.object({ select: BenefitSelectFieldsSchemaJson }),
  z.object({ include: BenefitIncludeSchemaJson }),
  z.object({}),
]);

export const BenefitEnrolmentCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    benefitId: PZ.Scalar.id(),
    employeeId: PZ.Scalar.id(),
    startDate: PZ.Scalar.datetime(),
    status: BenefitStatusSchema.optional(),
  })
);

export const BenefitEnrolmentUpdateSchema = z.object({
  benefitId: PZ.Scalar.id().optional(),
  employeeId: PZ.Scalar.id().optional(),
  startDate: PZ.Scalar.datetime().optional(),
  status: BenefitStatusSchema.optional().optional(),
});

export const BenefitEnrolmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    benefitId: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const BenefitEnrolmentOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentOrderBySchema
);

export const BenefitEnrolmentWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    benefitId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    status: BenefitStatusSchema,
    benefit: BenefitOwnWhereSchema,
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const BenefitEnrolmentWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentWhereSchema
);

export const BenefitEnrolmentSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    benefitId: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    benefit: PZ.Scalar.bool().or(BenefitOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const BenefitEnrolmentSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentSelectFieldsSchema
);

export const BenefitEnrolmentOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    benefitId: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'benefitId', 'employeeId', 'startDate', 'status'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const BenefitEnrolmentOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentOmitFieldsSchema
);

export const BenefitEnrolmentIncludeSchema = z
  .object({
    benefit: PZ.Scalar.bool().or(BenefitOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const BenefitEnrolmentIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  BenefitEnrolmentIncludeSchema
);

export const BenefitEnrolmentProjectionSchema = z.union([
  z.object({ omit: BenefitEnrolmentOmitFieldsSchemaJson }),
  z.object({ select: BenefitEnrolmentSelectFieldsSchemaJson }),
  z.object({ include: BenefitEnrolmentIncludeSchemaJson }),
  z.object({}),
]);

export const TitleHistoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
    titleId: PZ.Scalar.id(),
    type: TitleChangeTypeSchema,
    reason: PZ.Scalar.string().optional(),
    startDate: PZ.Scalar.datetime(),
    endDate: PZ.Scalar.datetime().optional(),
  })
);

export const TitleHistoryUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  titleId: PZ.Scalar.id().optional(),
  type: TitleChangeTypeSchema.optional(),
  reason: PZ.Scalar.string().optional().optional(),
  startDate: PZ.Scalar.datetime().optional(),
  endDate: PZ.Scalar.datetime().optional().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TitleHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistoryOrderBySchema
);

export const TitleHistoryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    titleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: TitleChangeTypeSchema,
    reason: z.string().or(PZ.StringFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    employee: EmployeeOwnWhereSchema,
    title: TitleOwnWhereSchema,
  })
  .partial();

export const TitleHistoryWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistoryWhereSchema
);

export const TitleHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    title: PZ.Scalar.bool().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const TitleHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistorySelectFieldsSchema
);

export const TitleHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'employeeId',
        'titleId',
        'type',
        'reason',
        'startDate',
        'endDate',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TitleHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistoryOmitFieldsSchema
);

export const TitleHistoryIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    title: PZ.Scalar.bool().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const TitleHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleHistoryIncludeSchema
);

export const TitleHistoryProjectionSchema = z.union([
  z.object({ omit: TitleHistoryOmitFieldsSchemaJson }),
  z.object({ select: TitleHistorySelectFieldsSchemaJson }),
  z.object({ include: TitleHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffPolicyCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    description: PZ.Scalar.description().optional(),
    accrualRate: PZ.Scalar.number(),
    maxRollover: PZ.Scalar.number(),
  })
);

export const TimeOffPolicyUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  accrualRate: PZ.Scalar.number().optional(),
  maxRollover: PZ.Scalar.number().optional(),
});

export const TimeOffPolicyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    accrualRate: PZ.OrderDirectionSchema,
    maxRollover: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TimeOffPolicyOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffPolicyOrderBySchema
);

export const TimeOffPolicyWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    accrualRate: z.coerce.number().or(PZ.NumberFilterSchema),
    maxRollover: z.coerce.number().or(PZ.NumberFilterSchema),
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
  PZ.jsonPreprocessor,
  TimeOffPolicyWhereSchema
);

export const TimeOffPolicySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    accrualRate: PZ.Scalar.bool(),
    maxRollover: PZ.Scalar.bool(),
    balances: PZ.Scalar.bool().or(TimeOffBalanceOwnQuerySchema),
    requests: PZ.Scalar.bool().or(TimeOffRequestOwnQuerySchema),
  })
  .partial();

export const TimeOffPolicySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffPolicySelectFieldsSchema
);

export const TimeOffPolicyOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    accrualRate: PZ.Scalar.bool(),
    maxRollover: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'description', 'accrualRate', 'maxRollover'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TimeOffPolicyOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffPolicyOmitFieldsSchema
);

export const TimeOffPolicyIncludeSchema = z
  .object({
    balances: PZ.Scalar.bool().or(TimeOffBalanceOwnQuerySchema),
    requests: PZ.Scalar.bool().or(TimeOffRequestOwnQuerySchema),
  })
  .partial();

export const TimeOffPolicyIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffPolicyIncludeSchema
);

export const TimeOffPolicyProjectionSchema = z.union([
  z.object({ omit: TimeOffPolicyOmitFieldsSchemaJson }),
  z.object({ select: TimeOffPolicySelectFieldsSchemaJson }),
  z.object({ include: TimeOffPolicyIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffBalanceCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    policyId: PZ.Scalar.id(),
    employeeId: PZ.Scalar.id(),
    accruedHours: PZ.Scalar.number(),
    usedHours: PZ.Scalar.number(),
    availableHours: PZ.Scalar.number(),
  })
);

export const TimeOffBalanceUpdateSchema = z.object({
  policyId: PZ.Scalar.id().optional(),
  employeeId: PZ.Scalar.id().optional(),
  accruedHours: PZ.Scalar.number().optional(),
  usedHours: PZ.Scalar.number().optional(),
  availableHours: PZ.Scalar.number().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TimeOffBalanceOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffBalanceOrderBySchema
);

export const TimeOffBalanceWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    accruedHours: z.coerce.number().or(PZ.NumberFilterSchema),
    usedHours: z.coerce.number().or(PZ.NumberFilterSchema),
    availableHours: z.coerce.number().or(PZ.NumberFilterSchema),
    policy: TimeOffPolicyOwnWhereSchema,
    employee: EmployeeOwnWhereSchema,
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
  PZ.jsonPreprocessor,
  TimeOffBalanceWhereSchema
);

export const TimeOffBalanceSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    accruedHours: PZ.Scalar.bool(),
    usedHours: PZ.Scalar.bool(),
    availableHours: PZ.Scalar.bool(),
    policy: PZ.Scalar.bool().or(TimeOffPolicyOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    transactions: PZ.Scalar.bool().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffBalanceSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffBalanceSelectFieldsSchema
);

export const TimeOffBalanceOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    accruedHours: PZ.Scalar.bool(),
    usedHours: PZ.Scalar.bool(),
    availableHours: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'policyId',
        'employeeId',
        'accruedHours',
        'usedHours',
        'availableHours',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TimeOffBalanceOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffBalanceOmitFieldsSchema
);

export const TimeOffBalanceIncludeSchema = z
  .object({
    policy: PZ.Scalar.bool().or(TimeOffPolicyOwnQueryOneSchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    transactions: PZ.Scalar.bool().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffBalanceIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffBalanceIncludeSchema
);

export const TimeOffBalanceProjectionSchema = z.union([
  z.object({ omit: TimeOffBalanceOmitFieldsSchemaJson }),
  z.object({ select: TimeOffBalanceSelectFieldsSchemaJson }),
  z.object({ include: TimeOffBalanceIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffRequestCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
    reason: PZ.Scalar.string(),
    policyId: PZ.Scalar.id(),
    resolverId: PZ.Scalar.id().optional(),
    status: RequestStatusSchema.optional(),
    startDate: PZ.Scalar.datetime(),
    endDate: PZ.Scalar.datetime(),
  })
);

export const TimeOffRequestUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  reason: PZ.Scalar.string().optional(),
  policyId: PZ.Scalar.id().optional(),
  resolverId: PZ.Scalar.id().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  startDate: PZ.Scalar.datetime().optional(),
  endDate: PZ.Scalar.datetime().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TimeOffRequestOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffRequestOrderBySchema
);

export const TimeOffRequestWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    reason: z.string().or(PZ.StringFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolverId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    status: RequestStatusSchema,
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    employee: EmployeeOwnWhereSchema,
    policy: TimeOffPolicyOwnWhereSchema,
    resolver: EmployeeOwnWhereSchema,
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
  PZ.jsonPreprocessor,
  TimeOffRequestWhereSchema
);

export const TimeOffRequestSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    resolverId: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    policy: PZ.Scalar.bool().or(TimeOffPolicyOwnQueryOneSchema),
    resolver: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    transactions: PZ.Scalar.bool().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffRequestSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffRequestSelectFieldsSchema
);

export const TimeOffRequestOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    reason: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    resolverId: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'employeeId',
        'reason',
        'policyId',
        'resolverId',
        'status',
        'startDate',
        'endDate',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TimeOffRequestOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffRequestOmitFieldsSchema
);

export const TimeOffRequestIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    policy: PZ.Scalar.bool().or(TimeOffPolicyOwnQueryOneSchema),
    resolver: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    transactions: PZ.Scalar.bool().or(TimeOffTransactionOwnQuerySchema),
  })
  .partial();

export const TimeOffRequestIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffRequestIncludeSchema
);

export const TimeOffRequestProjectionSchema = z.union([
  z.object({ omit: TimeOffRequestOmitFieldsSchemaJson }),
  z.object({ select: TimeOffRequestSelectFieldsSchemaJson }),
  z.object({ include: TimeOffRequestIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffTransactionCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    type: TimeOffTransactionTypeSchema,
    balanceId: PZ.Scalar.id(),
    requestId: PZ.Scalar.id().optional(),
    amount: PZ.Scalar.number(),
  })
);

export const TimeOffTransactionUpdateSchema = z.object({
  type: TimeOffTransactionTypeSchema.optional(),
  balanceId: PZ.Scalar.id().optional(),
  requestId: PZ.Scalar.id().optional().optional(),
  amount: PZ.Scalar.number().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TimeOffTransactionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionOrderBySchema
);

export const TimeOffTransactionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    type: TimeOffTransactionTypeSchema,
    balanceId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    requestId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
    balance: TimeOffBalanceOwnWhereSchema,
    request: TimeOffRequestOwnWhereSchema,
  })
  .partial();

export const TimeOffTransactionWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionWhereSchema
);

export const TimeOffTransactionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    balanceId: PZ.Scalar.bool(),
    requestId: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    balance: PZ.Scalar.bool().or(TimeOffBalanceOwnQueryOneSchema),
    request: PZ.Scalar.bool().or(TimeOffRequestOwnQueryOneSchema),
  })
  .partial();

export const TimeOffTransactionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionSelectFieldsSchema
);

export const TimeOffTransactionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    balanceId: PZ.Scalar.bool(),
    requestId: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'updatedAt',
        'type',
        'balanceId',
        'requestId',
        'amount',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TimeOffTransactionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionOmitFieldsSchema
);

export const TimeOffTransactionIncludeSchema = z
  .object({
    balance: PZ.Scalar.bool().or(TimeOffBalanceOwnQueryOneSchema),
    request: PZ.Scalar.bool().or(TimeOffRequestOwnQueryOneSchema),
  })
  .partial();

export const TimeOffTransactionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TimeOffTransactionIncludeSchema
);

export const TimeOffTransactionProjectionSchema = z.union([
  z.object({ omit: TimeOffTransactionOmitFieldsSchemaJson }),
  z.object({ select: TimeOffTransactionSelectFieldsSchemaJson }),
  z.object({ include: TimeOffTransactionIncludeSchemaJson }),
  z.object({}),
]);

export const ClockInCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
    clockOut: PZ.Scalar.datetime().optional(),
  })
);

export const ClockInUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  clockOut: PZ.Scalar.datetime().optional().optional(),
});

export const ClockInOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    clockIn: PZ.OrderDirectionSchema,
    clockOut: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ClockInOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInOrderBySchema
);

export const ClockInWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    clockIn: z.string().or(PZ.DateTimeFilterSchema),
    clockOut: z.string().or(PZ.DateTimeFilterSchema),
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const ClockInWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInWhereSchema
);

export const ClockInSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    clockIn: PZ.Scalar.bool(),
    clockOut: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const ClockInSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInSelectFieldsSchema
);

export const ClockInOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    clockIn: PZ.Scalar.bool(),
    clockOut: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'employeeId', 'clockIn', 'clockOut'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ClockInOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInOmitFieldsSchema
);

export const ClockInIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const ClockInIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ClockInIncludeSchema
);

export const ClockInProjectionSchema = z.union([
  z.object({ omit: ClockInOmitFieldsSchemaJson }),
  z.object({ select: ClockInSelectFieldsSchemaJson }),
  z.object({ include: ClockInIncludeSchemaJson }),
  z.object({}),
]);

export const PaycheckCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    payrollRunId: PZ.Scalar.id(),
    employeeId: PZ.Scalar.id(),
    grossAmount: PZ.Scalar.number(),
    netAmount: PZ.Scalar.number(),
  })
);

export const PaycheckUpdateSchema = z.object({
  payrollRunId: PZ.Scalar.id().optional(),
  employeeId: PZ.Scalar.id().optional(),
  grossAmount: PZ.Scalar.number().optional(),
  netAmount: PZ.Scalar.number().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PaycheckOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckOrderBySchema
);

export const PaycheckWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    payrollRunId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    grossAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    netAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    employee: EmployeeOwnWhereSchema,
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
    payrollRun: PayrollRunOwnWhereSchema,
  })
  .partial();

export const PaycheckWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckWhereSchema
);

export const PaycheckSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    payrollRunId: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    grossAmount: PZ.Scalar.bool(),
    netAmount: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    earnings: PZ.Scalar.bool().or(EarningOwnQuerySchema),
    paycheckTaxes: PZ.Scalar.bool().or(PaycheckTaxOwnQuerySchema),
    deductions: PZ.Scalar.bool().or(PaycheckDeductionOwnQuerySchema),
    payrollRun: PZ.Scalar.bool().or(PayrollRunOwnQueryOneSchema),
  })
  .partial();

export const PaycheckSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckSelectFieldsSchema
);

export const PaycheckOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    payrollRunId: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    grossAmount: PZ.Scalar.bool(),
    netAmount: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'payrollRunId',
        'updatedAt',
        'employeeId',
        'grossAmount',
        'netAmount',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PaycheckOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckOmitFieldsSchema
);

export const PaycheckIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    earnings: PZ.Scalar.bool().or(EarningOwnQuerySchema),
    paycheckTaxes: PZ.Scalar.bool().or(PaycheckTaxOwnQuerySchema),
    deductions: PZ.Scalar.bool().or(PaycheckDeductionOwnQuerySchema),
    payrollRun: PZ.Scalar.bool().or(PayrollRunOwnQueryOneSchema),
  })
  .partial();

export const PaycheckIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckIncludeSchema
);

export const PaycheckProjectionSchema = z.union([
  z.object({ omit: PaycheckOmitFieldsSchemaJson }),
  z.object({ select: PaycheckSelectFieldsSchemaJson }),
  z.object({ include: PaycheckIncludeSchemaJson }),
  z.object({}),
]);

export const EarningCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    type: EarningTypeSchema,
    hours: PZ.Scalar.number().optional(),
    rate: PZ.Scalar.number(),
    amount: PZ.Scalar.number(),
    paycheckId: PZ.Scalar.id(),
  })
);

export const EarningUpdateSchema = z.object({
  type: EarningTypeSchema.optional(),
  hours: PZ.Scalar.number().optional().optional(),
  rate: PZ.Scalar.number().optional(),
  amount: PZ.Scalar.number().optional(),
  paycheckId: PZ.Scalar.id().optional(),
});

export const EarningOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    hours: PZ.OrderDirectionSchema,
    rate: PZ.OrderDirectionSchema,
    amount: PZ.OrderDirectionSchema,
    paycheckId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EarningOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningOrderBySchema
);

export const EarningWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: EarningTypeSchema,
    hours: z.coerce.number().or(PZ.NumberFilterSchema),
    rate: z.coerce.number().or(PZ.NumberFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    paycheck: PaycheckOwnWhereSchema,
  })
  .partial();

export const EarningWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningWhereSchema
);

export const EarningSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    hours: PZ.Scalar.bool(),
    rate: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    paycheck: PZ.Scalar.bool().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const EarningSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningSelectFieldsSchema
);

export const EarningOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    hours: PZ.Scalar.bool(),
    rate: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'type', 'hours', 'rate', 'amount', 'paycheckId'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EarningOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningOmitFieldsSchema
);

export const EarningIncludeSchema = z
  .object({
    paycheck: PZ.Scalar.bool().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const EarningIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EarningIncludeSchema
);

export const EarningProjectionSchema = z.union([
  z.object({ omit: EarningOmitFieldsSchemaJson }),
  z.object({ select: EarningSelectFieldsSchemaJson }),
  z.object({ include: EarningIncludeSchemaJson }),
  z.object({}),
]);

export const PaycheckTaxCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    paycheckId: PZ.Scalar.id(),
    taxAuthority: PZ.Scalar.string(),
    amount: PZ.Scalar.number(),
  })
);

export const PaycheckTaxUpdateSchema = z.object({
  paycheckId: PZ.Scalar.id().optional(),
  taxAuthority: PZ.Scalar.string().optional(),
  amount: PZ.Scalar.number().optional(),
});

export const PaycheckTaxOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    paycheckId: PZ.OrderDirectionSchema,
    taxAuthority: PZ.OrderDirectionSchema,
    amount: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PaycheckTaxOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxOrderBySchema
);

export const PaycheckTaxWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxAuthority: z.string().or(PZ.StringFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
    paycheck: PaycheckOwnWhereSchema,
  })
  .partial();

export const PaycheckTaxWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxWhereSchema
);

export const PaycheckTaxSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    taxAuthority: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    paycheck: PZ.Scalar.bool().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const PaycheckTaxSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxSelectFieldsSchema
);

export const PaycheckTaxOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    taxAuthority: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'paycheckId', 'taxAuthority', 'amount'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PaycheckTaxOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxOmitFieldsSchema
);

export const PaycheckTaxIncludeSchema = z
  .object({
    paycheck: PZ.Scalar.bool().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const PaycheckTaxIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckTaxIncludeSchema
);

export const PaycheckTaxProjectionSchema = z.union([
  z.object({ omit: PaycheckTaxOmitFieldsSchemaJson }),
  z.object({ select: PaycheckTaxSelectFieldsSchemaJson }),
  z.object({ include: PaycheckTaxIncludeSchemaJson }),
  z.object({}),
]);

export const DeductionPolicyCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    type: DeductionTypeSchema,
    defaultAmount: PZ.Scalar.number().optional(),
    defaultPercent: PZ.Scalar.number().optional(),
  })
);

export const DeductionPolicyUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  type: DeductionTypeSchema.optional(),
  defaultAmount: PZ.Scalar.number().optional().optional(),
  defaultPercent: PZ.Scalar.number().optional().optional(),
});

export const DeductionPolicyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    defaultAmount: PZ.OrderDirectionSchema,
    defaultPercent: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const DeductionPolicyOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DeductionPolicyOrderBySchema
);

export const DeductionPolicyWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    type: DeductionTypeSchema,
    defaultAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    defaultPercent: z.coerce.number().or(PZ.NumberFilterSchema),
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
  PZ.jsonPreprocessor,
  DeductionPolicyWhereSchema
);

export const DeductionPolicySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    defaultAmount: PZ.Scalar.bool(),
    defaultPercent: PZ.Scalar.bool(),
    employeeDeductions: PZ.Scalar.bool().or(EmployeeDeductionOwnQuerySchema),
  })
  .partial();

export const DeductionPolicySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DeductionPolicySelectFieldsSchema
);

export const DeductionPolicyOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    defaultAmount: PZ.Scalar.bool(),
    defaultPercent: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'type', 'defaultAmount', 'defaultPercent'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const DeductionPolicyOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DeductionPolicyOmitFieldsSchema
);

export const DeductionPolicyIncludeSchema = z
  .object({
    employeeDeductions: PZ.Scalar.bool().or(EmployeeDeductionOwnQuerySchema),
  })
  .partial();

export const DeductionPolicyIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DeductionPolicyIncludeSchema
);

export const DeductionPolicyProjectionSchema = z.union([
  z.object({ omit: DeductionPolicyOmitFieldsSchemaJson }),
  z.object({ select: DeductionPolicySelectFieldsSchemaJson }),
  z.object({ include: DeductionPolicyIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeDeductionCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
    policyId: PZ.Scalar.id(),
    employeeAmount: PZ.Scalar.number().optional(),
  })
);

export const EmployeeDeductionUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
  policyId: PZ.Scalar.id().optional(),
  employeeAmount: PZ.Scalar.number().optional().optional(),
});

export const EmployeeDeductionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
    policyId: PZ.OrderDirectionSchema,
    employeeAmount: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeDeductionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeDeductionOrderBySchema
);

export const EmployeeDeductionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    policyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    employee: EmployeeOwnWhereSchema,
    policy: DeductionPolicyOwnWhereSchema,
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
  PZ.jsonPreprocessor,
  EmployeeDeductionWhereSchema
);

export const EmployeeDeductionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    employeeAmount: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    policy: PZ.Scalar.bool().or(DeductionPolicyOwnQueryOneSchema),
    paycheckDeductions: PZ.Scalar.bool().or(PaycheckDeductionOwnQuerySchema),
  })
  .partial();

export const EmployeeDeductionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeDeductionSelectFieldsSchema
);

export const EmployeeDeductionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    policyId: PZ.Scalar.bool(),
    employeeAmount: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'employeeId', 'policyId', 'employeeAmount'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmployeeDeductionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeDeductionOmitFieldsSchema
);

export const EmployeeDeductionIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    policy: PZ.Scalar.bool().or(DeductionPolicyOwnQueryOneSchema),
    paycheckDeductions: PZ.Scalar.bool().or(PaycheckDeductionOwnQuerySchema),
  })
  .partial();

export const EmployeeDeductionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeDeductionIncludeSchema
);

export const EmployeeDeductionProjectionSchema = z.union([
  z.object({ omit: EmployeeDeductionOmitFieldsSchemaJson }),
  z.object({ select: EmployeeDeductionSelectFieldsSchemaJson }),
  z.object({ include: EmployeeDeductionIncludeSchemaJson }),
  z.object({}),
]);

export const PaycheckDeductionCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    paycheckId: PZ.Scalar.id(),
    employeeDeductionId: PZ.Scalar.id(),
    amount: PZ.Scalar.number(),
  })
);

export const PaycheckDeductionUpdateSchema = z.object({
  paycheckId: PZ.Scalar.id().optional(),
  employeeDeductionId: PZ.Scalar.id().optional(),
  amount: PZ.Scalar.number().optional(),
});

export const PaycheckDeductionOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    paycheckId: PZ.OrderDirectionSchema,
    employeeDeductionId: PZ.OrderDirectionSchema,
    amount: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PaycheckDeductionOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionOrderBySchema
);

export const PaycheckDeductionWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeDeductionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
    paycheck: PaycheckOwnWhereSchema,
    employeeDeduction: EmployeeDeductionOwnWhereSchema,
  })
  .partial();

export const PaycheckDeductionWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionWhereSchema
);

export const PaycheckDeductionSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    employeeDeductionId: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
    paycheck: PZ.Scalar.bool().or(PaycheckOwnQueryOneSchema),
    employeeDeduction: PZ.Scalar.bool().or(EmployeeDeductionOwnQueryOneSchema),
  })
  .partial();

export const PaycheckDeductionSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionSelectFieldsSchema
);

export const PaycheckDeductionOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    paycheckId: PZ.Scalar.bool(),
    employeeDeductionId: PZ.Scalar.bool(),
    amount: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'paycheckId', 'employeeDeductionId', 'amount'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PaycheckDeductionOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionOmitFieldsSchema
);

export const PaycheckDeductionIncludeSchema = z
  .object({
    paycheck: PZ.Scalar.bool().or(PaycheckOwnQueryOneSchema),
    employeeDeduction: PZ.Scalar.bool().or(EmployeeDeductionOwnQueryOneSchema),
  })
  .partial();

export const PaycheckDeductionIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PaycheckDeductionIncludeSchema
);

export const PaycheckDeductionProjectionSchema = z.union([
  z.object({ omit: PaycheckDeductionOmitFieldsSchemaJson }),
  z.object({ select: PaycheckDeductionSelectFieldsSchemaJson }),
  z.object({ include: PaycheckDeductionIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeTaxDataCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    startDate: PZ.Scalar.datetime(),
    endDate: PZ.Scalar.datetime().optional(),
    employeeId: PZ.Scalar.id(),
    federalStatus: TaxFilingStatusSchema.optional(),
    dependentsCredit: PZ.Scalar.number().optional(),
    multipleJobs: PZ.Scalar.bool().optional(),
    otherIncome: PZ.Scalar.number().optional(),
    deductionsAmount: PZ.Scalar.number().optional(),
    extraWithholding: PZ.Scalar.number().optional(),
    isExempt: PZ.Scalar.bool().optional(),
    isNonResidentAlien: PZ.Scalar.bool().optional(),
  })
);

export const EmployeeTaxDataUpdateSchema = z.object({
  startDate: PZ.Scalar.datetime().optional(),
  endDate: PZ.Scalar.datetime().optional().optional(),
  employeeId: PZ.Scalar.id().optional(),
  federalStatus: TaxFilingStatusSchema.optional().optional(),
  dependentsCredit: PZ.Scalar.number().optional().optional(),
  multipleJobs: PZ.Scalar.bool().optional().optional(),
  otherIncome: PZ.Scalar.number().optional().optional(),
  deductionsAmount: PZ.Scalar.number().optional().optional(),
  extraWithholding: PZ.Scalar.number().optional().optional(),
  isExempt: PZ.Scalar.bool().optional().optional(),
  isNonResidentAlien: PZ.Scalar.bool().optional().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmployeeTaxDataOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataOrderBySchema
);

export const EmployeeTaxDataWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    federalStatus: TaxFilingStatusSchema,
    dependentsCredit: z.coerce.number().or(PZ.NumberFilterSchema),
    multipleJobs: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    otherIncome: z.coerce.number().or(PZ.NumberFilterSchema),
    deductionsAmount: z.coerce.number().or(PZ.NumberFilterSchema),
    extraWithholding: z.coerce.number().or(PZ.NumberFilterSchema),
    isExempt: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    isNonResidentAlien: z.coerce.boolean().or(PZ.BooleanFilterSchema),
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
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const EmployeeTaxDataWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataWhereSchema
);

export const EmployeeTaxDataSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    federalStatus: PZ.Scalar.bool(),
    dependentsCredit: PZ.Scalar.bool(),
    multipleJobs: PZ.Scalar.bool(),
    otherIncome: PZ.Scalar.bool(),
    deductionsAmount: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
    isExempt: PZ.Scalar.bool(),
    isNonResidentAlien: PZ.Scalar.bool(),
    stateTaxes: PZ.Scalar.bool().or(StateTaxWithholdingOwnQuerySchema),
    localTaxes: PZ.Scalar.bool().or(LocalTaxWithholdingOwnQuerySchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeTaxDataSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataSelectFieldsSchema
);

export const EmployeeTaxDataOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    federalStatus: PZ.Scalar.bool(),
    dependentsCredit: PZ.Scalar.bool(),
    multipleJobs: PZ.Scalar.bool(),
    otherIncome: PZ.Scalar.bool(),
    deductionsAmount: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
    isExempt: PZ.Scalar.bool(),
    isNonResidentAlien: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'updatedAt',
        'startDate',
        'endDate',
        'employeeId',
        'federalStatus',
        'dependentsCredit',
        'multipleJobs',
        'otherIncome',
        'deductionsAmount',
        'extraWithholding',
        'isExempt',
        'isNonResidentAlien',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmployeeTaxDataOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataOmitFieldsSchema
);

export const EmployeeTaxDataIncludeSchema = z
  .object({
    stateTaxes: PZ.Scalar.bool().or(StateTaxWithholdingOwnQuerySchema),
    localTaxes: PZ.Scalar.bool().or(LocalTaxWithholdingOwnQuerySchema),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const EmployeeTaxDataIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmployeeTaxDataIncludeSchema
);

export const EmployeeTaxDataProjectionSchema = z.union([
  z.object({ omit: EmployeeTaxDataOmitFieldsSchemaJson }),
  z.object({ select: EmployeeTaxDataSelectFieldsSchemaJson }),
  z.object({ include: EmployeeTaxDataIncludeSchemaJson }),
  z.object({}),
]);

export const StateTaxWithholdingCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    taxDataId: PZ.Scalar.id(),
    stateCode: PZ.Scalar.string(),
    stateStatus: PZ.Scalar.string().optional(),
    allowances: PZ.Scalar.int().optional(),
    extraWithholding: PZ.Scalar.number().optional(),
  })
);

export const StateTaxWithholdingUpdateSchema = z.object({
  taxDataId: PZ.Scalar.id().optional(),
  stateCode: PZ.Scalar.string().optional(),
  stateStatus: PZ.Scalar.string().optional().optional(),
  allowances: PZ.Scalar.int().optional().optional(),
  extraWithholding: PZ.Scalar.number().optional().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const StateTaxWithholdingOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingOrderBySchema
);

export const StateTaxWithholdingWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxDataId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    stateCode: z.string().or(PZ.StringFilterSchema),
    stateStatus: z.string().or(PZ.StringFilterSchema),
    allowances: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    extraWithholding: z.coerce.number().or(PZ.NumberFilterSchema),
    taxData: EmployeeTaxDataOwnWhereSchema,
  })
  .partial();

export const StateTaxWithholdingWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingWhereSchema
);

export const StateTaxWithholdingSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taxDataId: PZ.Scalar.bool(),
    stateCode: PZ.Scalar.bool(),
    stateStatus: PZ.Scalar.bool(),
    allowances: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
    taxData: PZ.Scalar.bool().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const StateTaxWithholdingSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingSelectFieldsSchema
);

export const StateTaxWithholdingOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taxDataId: PZ.Scalar.bool(),
    stateCode: PZ.Scalar.bool(),
    stateStatus: PZ.Scalar.bool(),
    allowances: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'taxDataId',
        'stateCode',
        'stateStatus',
        'allowances',
        'extraWithholding',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const StateTaxWithholdingOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingOmitFieldsSchema
);

export const StateTaxWithholdingIncludeSchema = z
  .object({
    taxData: PZ.Scalar.bool().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const StateTaxWithholdingIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateTaxWithholdingIncludeSchema
);

export const StateTaxWithholdingProjectionSchema = z.union([
  z.object({ omit: StateTaxWithholdingOmitFieldsSchemaJson }),
  z.object({ select: StateTaxWithholdingSelectFieldsSchemaJson }),
  z.object({ include: StateTaxWithholdingIncludeSchemaJson }),
  z.object({}),
]);

export const LocalTaxWithholdingCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    taxDataId: PZ.Scalar.id(),
    jurisdiction: PZ.Scalar.string(),
    localStatus: PZ.Scalar.string().optional(),
    extraWithholding: PZ.Scalar.number().optional(),
  })
);

export const LocalTaxWithholdingUpdateSchema = z.object({
  taxDataId: PZ.Scalar.id().optional(),
  jurisdiction: PZ.Scalar.string().optional(),
  localStatus: PZ.Scalar.string().optional().optional(),
  extraWithholding: PZ.Scalar.number().optional().optional(),
});

export const LocalTaxWithholdingOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    taxDataId: PZ.OrderDirectionSchema,
    jurisdiction: PZ.OrderDirectionSchema,
    localStatus: PZ.OrderDirectionSchema,
    extraWithholding: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const LocalTaxWithholdingOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingOrderBySchema
);

export const LocalTaxWithholdingWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxDataId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    jurisdiction: z.string().or(PZ.StringFilterSchema),
    localStatus: z.string().or(PZ.StringFilterSchema),
    extraWithholding: z.coerce.number().or(PZ.NumberFilterSchema),
    taxData: EmployeeTaxDataOwnWhereSchema,
  })
  .partial();

export const LocalTaxWithholdingWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingWhereSchema
);

export const LocalTaxWithholdingSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taxDataId: PZ.Scalar.bool(),
    jurisdiction: PZ.Scalar.bool(),
    localStatus: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
    taxData: PZ.Scalar.bool().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const LocalTaxWithholdingSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingSelectFieldsSchema
);

export const LocalTaxWithholdingOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taxDataId: PZ.Scalar.bool(),
    jurisdiction: PZ.Scalar.bool(),
    localStatus: PZ.Scalar.bool(),
    extraWithholding: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'taxDataId',
        'jurisdiction',
        'localStatus',
        'extraWithholding',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const LocalTaxWithholdingOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingOmitFieldsSchema
);

export const LocalTaxWithholdingIncludeSchema = z
  .object({
    taxData: PZ.Scalar.bool().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const LocalTaxWithholdingIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  LocalTaxWithholdingIncludeSchema
);

export const LocalTaxWithholdingProjectionSchema = z.union([
  z.object({ omit: LocalTaxWithholdingOmitFieldsSchemaJson }),
  z.object({ select: LocalTaxWithholdingSelectFieldsSchemaJson }),
  z.object({ include: LocalTaxWithholdingIncludeSchemaJson }),
  z.object({}),
]);

export const PayrollRunCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    resolverId: PZ.Scalar.id(),
    startDate: PZ.Scalar.datetime(),
    endDate: PZ.Scalar.datetime(),
    payDate: PZ.Scalar.datetime(),
    status: PayrollStatusSchema.optional(),
  })
);

export const PayrollRunUpdateSchema = z.object({
  resolverId: PZ.Scalar.id().optional(),
  startDate: PZ.Scalar.datetime().optional(),
  endDate: PZ.Scalar.datetime().optional(),
  payDate: PZ.Scalar.datetime().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PayrollRunOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PayrollRunOrderBySchema
);

export const PayrollRunWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    resolverId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    payDate: z.string().or(PZ.DateTimeFilterSchema),
    status: PayrollStatusSchema,
    approvedBy: EmployeeOwnWhereSchema,
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
  PZ.jsonPreprocessor,
  PayrollRunWhereSchema
);

export const PayrollRunSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    resolverId: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    payDate: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    approvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    paychecks: PZ.Scalar.bool().or(PaycheckOwnQuerySchema),
  })
  .partial();

export const PayrollRunSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PayrollRunSelectFieldsSchema
);

export const PayrollRunOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    resolverId: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    payDate: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'resolverId', 'startDate', 'endDate', 'payDate', 'status'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PayrollRunOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PayrollRunOmitFieldsSchema
);

export const PayrollRunIncludeSchema = z
  .object({
    approvedBy: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    paychecks: PZ.Scalar.bool().or(PaycheckOwnQuerySchema),
  })
  .partial();

export const PayrollRunIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PayrollRunIncludeSchema
);

export const PayrollRunProjectionSchema = z.union([
  z.object({ omit: PayrollRunOmitFieldsSchemaJson }),
  z.object({ select: PayrollRunSelectFieldsSchemaJson }),
  z.object({ include: PayrollRunIncludeSchemaJson }),
  z.object({}),
]);

export const ContactCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    employeeId: PZ.Scalar.id(),
  })
);

export const ContactUpdateSchema = z.object({
  employeeId: PZ.Scalar.id().optional(),
});

export const ContactOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    employeeId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ContactOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOrderBySchema
);

export const ContactWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employee: EmployeeOwnWhereSchema,
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
    primaryEmail: PrimaryEmailOwnWhereSchema,
    primaryPhone: PrimaryPhoneOwnWhereSchema,
    primaryAddress: PrimaryAddressOwnWhereSchema,
  })
  .partial();

export const ContactWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactWhereSchema
);

export const ContactSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    emails: PZ.Scalar.bool().or(EmailOwnQuerySchema),
    phones: PZ.Scalar.bool().or(PhoneOwnQuerySchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
    primaryEmail: PZ.Scalar.bool().or(PrimaryEmailOwnQueryOneSchema),
    primaryPhone: PZ.Scalar.bool().or(PrimaryPhoneOwnQueryOneSchema),
    primaryAddress: PZ.Scalar.bool().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const ContactSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactSelectFieldsSchema
);

export const ContactOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    employeeId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'employeeId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ContactOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOmitFieldsSchema
);

export const ContactIncludeSchema = z
  .object({
    employee: PZ.Scalar.bool().or(EmployeeOwnQueryOneSchema),
    emails: PZ.Scalar.bool().or(EmailOwnQuerySchema),
    phones: PZ.Scalar.bool().or(PhoneOwnQuerySchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
    primaryEmail: PZ.Scalar.bool().or(PrimaryEmailOwnQueryOneSchema),
    primaryPhone: PZ.Scalar.bool().or(PrimaryPhoneOwnQueryOneSchema),
    primaryAddress: PZ.Scalar.bool().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const ContactIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactIncludeSchema
);

export const ContactProjectionSchema = z.union([
  z.object({ omit: ContactOmitFieldsSchemaJson }),
  z.object({ select: ContactSelectFieldsSchemaJson }),
  z.object({ include: ContactIncludeSchemaJson }),
  z.object({}),
]);

export const CountryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    code: PZ.Scalar.string(),
  })
);

export const CountryUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  code: PZ.Scalar.string().optional(),
});

export const CountryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CountryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOrderBySchema
);

export const CountryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
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
  PZ.jsonPreprocessor,
  CountryWhereSchema
);

export const CountrySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    states: PZ.Scalar.bool().or(StateOwnQuerySchema),
  })
  .partial();

export const CountrySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountrySelectFieldsSchema
);

export const CountryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'name', 'code'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CountryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOmitFieldsSchema
);

export const CountryIncludeSchema = z
  .object({
    states: PZ.Scalar.bool().or(StateOwnQuerySchema),
  })
  .partial();

export const CountryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryIncludeSchema
);

export const CountryProjectionSchema = z.union([
  z.object({ omit: CountryOmitFieldsSchemaJson }),
  z.object({ select: CountrySelectFieldsSchemaJson }),
  z.object({ include: CountryIncludeSchemaJson }),
  z.object({}),
]);

export const StateCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    countryId: PZ.Scalar.id(),
    name: PZ.Scalar.name(),
    code: PZ.Scalar.string(),
  })
);

export const StateUpdateSchema = z.object({
  countryId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name().optional(),
  code: PZ.Scalar.string().optional(),
});

export const StateOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    countryId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const StateOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOrderBySchema
);

export const StateWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    countryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    country: CountryOwnWhereSchema,
    addresses: z
      .object({
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const StateWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateWhereSchema
);

export const StateSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    countryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    country: PZ.Scalar.bool().or(CountryOwnQueryOneSchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
  })
  .partial();

export const StateSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateSelectFieldsSchema
);

export const StateOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    countryId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'countryId', 'name', 'code'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const StateOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOmitFieldsSchema
);

export const StateIncludeSchema = z
  .object({
    country: PZ.Scalar.bool().or(CountryOwnQueryOneSchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
  })
  .partial();

export const StateIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateIncludeSchema
);

export const StateProjectionSchema = z.union([
  z.object({ omit: StateOmitFieldsSchemaJson }),
  z.object({ select: StateSelectFieldsSchemaJson }),
  z.object({ include: StateIncludeSchemaJson }),
  z.object({}),
]);

export const AddressCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    type: ContactTypeSchema,
    contactId: PZ.Scalar.id(),
    stateId: PZ.Scalar.id(),
    street: PZ.Scalar.string(),
    zip: PZ.Scalar.string(),
    city: PZ.Scalar.string(),
  })
);

export const AddressUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: PZ.Scalar.id().optional(),
  stateId: PZ.Scalar.id().optional(),
  street: PZ.Scalar.string().optional(),
  zip: PZ.Scalar.string().optional(),
  city: PZ.Scalar.string().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AddressOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOrderBySchema
);

export const AddressWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    stateId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    street: z.string().or(PZ.StringFilterSchema),
    zip: z.string().or(PZ.StringFilterSchema),
    city: z.string().or(PZ.StringFilterSchema),
    state: StateOwnWhereSchema,
    contact: ContactOwnWhereSchema,
    primary: PrimaryAddressOwnWhereSchema,
  })
  .partial();

export const AddressWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressWhereSchema
);

export const AddressSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    stateId: PZ.Scalar.bool(),
    street: PZ.Scalar.bool(),
    zip: PZ.Scalar.bool(),
    city: PZ.Scalar.bool(),
    state: PZ.Scalar.bool().or(StateOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
    primary: PZ.Scalar.bool().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const AddressSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressSelectFieldsSchema
);

export const AddressOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    stateId: PZ.Scalar.bool(),
    street: PZ.Scalar.bool(),
    zip: PZ.Scalar.bool(),
    city: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'type', 'contactId', 'stateId', 'street', 'zip', 'city'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AddressOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOmitFieldsSchema
);

export const AddressIncludeSchema = z
  .object({
    state: PZ.Scalar.bool().or(StateOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
    primary: PZ.Scalar.bool().or(PrimaryAddressOwnQueryOneSchema),
  })
  .partial();

export const AddressIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressIncludeSchema
);

export const AddressProjectionSchema = z.union([
  z.object({ omit: AddressOmitFieldsSchemaJson }),
  z.object({ select: AddressSelectFieldsSchemaJson }),
  z.object({ include: AddressIncludeSchemaJson }),
  z.object({}),
]);

export const EmailCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    type: ContactTypeSchema,
    contactId: PZ.Scalar.id(),
    email: PZ.Scalar.email(),
  })
);

export const EmailUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: PZ.Scalar.id().optional(),
  email: PZ.Scalar.email().optional(),
});

export const EmailOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    email: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmailOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOrderBySchema
);

export const EmailWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    email: z.string().or(PZ.StringFilterSchema),
    contact: ContactOwnWhereSchema,
    primary: PrimaryEmailOwnWhereSchema,
  })
  .partial();

export const EmailWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailWhereSchema
);

export const EmailSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
    primary: PZ.Scalar.bool().or(PrimaryEmailOwnQueryOneSchema),
  })
  .partial();

export const EmailSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailSelectFieldsSchema
);

export const EmailOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'type', 'contactId', 'email'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmailOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOmitFieldsSchema
);

export const EmailIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
    primary: PZ.Scalar.bool().or(PrimaryEmailOwnQueryOneSchema),
  })
  .partial();

export const EmailIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailIncludeSchema
);

export const EmailProjectionSchema = z.union([
  z.object({ omit: EmailOmitFieldsSchemaJson }),
  z.object({ select: EmailSelectFieldsSchemaJson }),
  z.object({ include: EmailIncludeSchemaJson }),
  z.object({}),
]);

export const PhoneCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    type: ContactTypeSchema,
    contactId: PZ.Scalar.id(),
    phone: PZ.Scalar.string(),
  })
);

export const PhoneUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: PZ.Scalar.id().optional(),
  phone: PZ.Scalar.string().optional(),
});

export const PhoneOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    phone: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PhoneOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOrderBySchema
);

export const PhoneWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phone: z.string().or(PZ.StringFilterSchema),
    contact: ContactOwnWhereSchema,
    primary: PrimaryPhoneOwnWhereSchema,
  })
  .partial();

export const PhoneWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneWhereSchema
);

export const PhoneSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
    primary: PZ.Scalar.bool().or(PrimaryPhoneOwnQueryOneSchema),
  })
  .partial();

export const PhoneSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneSelectFieldsSchema
);

export const PhoneOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'type', 'contactId', 'phone'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PhoneOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOmitFieldsSchema
);

export const PhoneIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
    primary: PZ.Scalar.bool().or(PrimaryPhoneOwnQueryOneSchema),
  })
  .partial();

export const PhoneIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneIncludeSchema
);

export const PhoneProjectionSchema = z.union([
  z.object({ omit: PhoneOmitFieldsSchemaJson }),
  z.object({ select: PhoneSelectFieldsSchemaJson }),
  z.object({ include: PhoneIncludeSchemaJson }),
  z.object({}),
]);

export const PrimaryEmailCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    emailId: PZ.Scalar.id(),
    contactId: PZ.Scalar.id(),
  })
);

export const PrimaryEmailUpdateSchema = z.object({
  emailId: PZ.Scalar.id().optional(),
  contactId: PZ.Scalar.id().optional(),
});

export const PrimaryEmailOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    emailId: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PrimaryEmailOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailOrderBySchema
);

export const PrimaryEmailWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    emailId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    email: EmailOwnWhereSchema,
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const PrimaryEmailWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailWhereSchema
);

export const PrimaryEmailSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    emailId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool().or(EmailOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryEmailSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailSelectFieldsSchema
);

export const PrimaryEmailOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    emailId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'emailId', 'contactId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PrimaryEmailOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailOmitFieldsSchema
);

export const PrimaryEmailIncludeSchema = z
  .object({
    email: PZ.Scalar.bool().or(EmailOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryEmailIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryEmailIncludeSchema
);

export const PrimaryEmailProjectionSchema = z.union([
  z.object({ omit: PrimaryEmailOmitFieldsSchemaJson }),
  z.object({ select: PrimaryEmailSelectFieldsSchemaJson }),
  z.object({ include: PrimaryEmailIncludeSchemaJson }),
  z.object({}),
]);

export const PrimaryPhoneCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    phoneId: PZ.Scalar.id(),
    contactId: PZ.Scalar.id(),
  })
);

export const PrimaryPhoneUpdateSchema = z.object({
  phoneId: PZ.Scalar.id().optional(),
  contactId: PZ.Scalar.id().optional(),
});

export const PrimaryPhoneOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    phoneId: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PrimaryPhoneOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneOrderBySchema
);

export const PrimaryPhoneWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phoneId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phone: PhoneOwnWhereSchema,
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const PrimaryPhoneWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneWhereSchema
);

export const PrimaryPhoneSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    phoneId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool().or(PhoneOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryPhoneSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneSelectFieldsSchema
);

export const PrimaryPhoneOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    phoneId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'phoneId', 'contactId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PrimaryPhoneOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneOmitFieldsSchema
);

export const PrimaryPhoneIncludeSchema = z
  .object({
    phone: PZ.Scalar.bool().or(PhoneOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryPhoneIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryPhoneIncludeSchema
);

export const PrimaryPhoneProjectionSchema = z.union([
  z.object({ omit: PrimaryPhoneOmitFieldsSchemaJson }),
  z.object({ select: PrimaryPhoneSelectFieldsSchemaJson }),
  z.object({ include: PrimaryPhoneIncludeSchemaJson }),
  z.object({}),
]);

export const PrimaryAddressCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    addressId: PZ.Scalar.id(),
    contactId: PZ.Scalar.id(),
  })
);

export const PrimaryAddressUpdateSchema = z.object({
  addressId: PZ.Scalar.id().optional(),
  contactId: PZ.Scalar.id().optional(),
});

export const PrimaryAddressOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    addressId: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PrimaryAddressOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressOrderBySchema
);

export const PrimaryAddressWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    addressId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    address: AddressOwnWhereSchema,
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const PrimaryAddressWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressWhereSchema
);

export const PrimaryAddressSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    addressId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    address: PZ.Scalar.bool().or(AddressOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryAddressSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressSelectFieldsSchema
);

export const PrimaryAddressOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    addressId: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'addressId', 'contactId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PrimaryAddressOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressOmitFieldsSchema
);

export const PrimaryAddressIncludeSchema = z
  .object({
    address: PZ.Scalar.bool().or(AddressOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryAddressIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrimaryAddressIncludeSchema
);

export const PrimaryAddressProjectionSchema = z.union([
  z.object({ omit: PrimaryAddressOmitFieldsSchemaJson }),
  z.object({ select: PrimaryAddressSelectFieldsSchemaJson }),
  z.object({ include: PrimaryAddressIncludeSchemaJson }),
  z.object({}),
]);

export const DepartmentQueryOneSchema = z
  .object({
    where: DepartmentWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
  })
  .partial();

export const DepartmentQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: DepartmentWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
    orderBy: DepartmentOrderBySchemaJson,
  })
  .partial();

export type DepartmentCreate = z.infer<typeof DepartmentCreateSchema>;

export type DepartmentUpdate = z.infer<typeof DepartmentUpdateSchema>;

export type DepartmentOrderBy = z.infer<typeof DepartmentOrderBySchema>;

export type DepartmentOwnSelectFields = z.infer<
  typeof DepartmentOwnSelectFieldsSchema
>;

export type DepartmentOwnWhere = z.infer<typeof DepartmentOwnWhereSchema>;

export type DepartmentOwnQuery = z.infer<typeof DepartmentOwnQuerySchema>;

export type DepartmentOwnQueryOne = z.infer<typeof DepartmentOwnQueryOneSchema>;

export type DepartmentWhere = z.infer<typeof DepartmentWhereSchema>;

export type DepartmentInclude = z.infer<typeof DepartmentIncludeSchema>;

export type DepartmentQueryOne = z.infer<typeof DepartmentQueryOneSchema>;

export type DepartmentQuery = z.infer<typeof DepartmentQuerySchema>;

export type DepartmentOmitFields = z.infer<typeof DepartmentOmitFieldsSchema>;

export type DepartmentSelectFields = z.infer<
  typeof DepartmentSelectFieldsSchema
>;

export type DepartmentProjection = z.infer<typeof DepartmentProjectionSchema>;

export const TitleQueryOneSchema = z
  .object({
    where: TitleWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
  })
  .partial();

export const TitleQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TitleWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
    orderBy: TitleOrderBySchemaJson,
  })
  .partial();

export type TitleCreate = z.infer<typeof TitleCreateSchema>;

export type TitleUpdate = z.infer<typeof TitleUpdateSchema>;

export type TitleOrderBy = z.infer<typeof TitleOrderBySchema>;

export type TitleOwnSelectFields = z.infer<typeof TitleOwnSelectFieldsSchema>;

export type TitleOwnWhere = z.infer<typeof TitleOwnWhereSchema>;

export type TitleOwnQuery = z.infer<typeof TitleOwnQuerySchema>;

export type TitleOwnQueryOne = z.infer<typeof TitleOwnQueryOneSchema>;

export type TitleWhere = z.infer<typeof TitleWhereSchema>;

export type TitleInclude = z.infer<typeof TitleIncludeSchema>;

export type TitleQueryOne = z.infer<typeof TitleQueryOneSchema>;

export type TitleQuery = z.infer<typeof TitleQuerySchema>;

export type TitleOmitFields = z.infer<typeof TitleOmitFieldsSchema>;

export type TitleSelectFields = z.infer<typeof TitleSelectFieldsSchema>;

export type TitleProjection = z.infer<typeof TitleProjectionSchema>;

export const PersonalDataQueryOneSchema = z
  .object({
    where: PersonalDataWhereSchemaJson,
    distinct: PersonalDataDistinctFieldsSchema,
  })
  .partial();

export const PersonalDataQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PersonalDataWhereSchemaJson,
    distinct: PersonalDataDistinctFieldsSchema,
    orderBy: PersonalDataOrderBySchemaJson,
  })
  .partial();

export type PersonalDataCreate = z.infer<typeof PersonalDataCreateSchema>;

export type PersonalDataUpdate = z.infer<typeof PersonalDataUpdateSchema>;

export type PersonalDataOrderBy = z.infer<typeof PersonalDataOrderBySchema>;

export type PersonalDataOwnSelectFields = z.infer<
  typeof PersonalDataOwnSelectFieldsSchema
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

export type PersonalDataOmitFields = z.infer<
  typeof PersonalDataOmitFieldsSchema
>;

export type PersonalDataSelectFields = z.infer<
  typeof PersonalDataSelectFieldsSchema
>;

export type PersonalDataProjection = z.infer<
  typeof PersonalDataProjectionSchema
>;

export const EmployeeQueryOneSchema = z
  .object({
    where: EmployeeWhereSchemaJson,
    distinct: EmployeeDistinctFieldsSchema,
  })
  .partial();

export const EmployeeQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeWhereSchemaJson,
    distinct: EmployeeDistinctFieldsSchema,
    orderBy: EmployeeOrderBySchemaJson,
  })
  .partial();

export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;

export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;

export type EmployeeOrderBy = z.infer<typeof EmployeeOrderBySchema>;

export type EmployeeOwnSelectFields = z.infer<
  typeof EmployeeOwnSelectFieldsSchema
>;

export type EmployeeOwnWhere = z.infer<typeof EmployeeOwnWhereSchema>;

export type EmployeeOwnQuery = z.infer<typeof EmployeeOwnQuerySchema>;

export type EmployeeOwnQueryOne = z.infer<typeof EmployeeOwnQueryOneSchema>;

export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;

export type EmployeeInclude = z.infer<typeof EmployeeIncludeSchema>;

export type EmployeeQueryOne = z.infer<typeof EmployeeQueryOneSchema>;

export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;

export type EmployeeOmitFields = z.infer<typeof EmployeeOmitFieldsSchema>;

export type EmployeeSelectFields = z.infer<typeof EmployeeSelectFieldsSchema>;

export type EmployeeProjection = z.infer<typeof EmployeeProjectionSchema>;

export const TeamQueryOneSchema = z
  .object({
    where: TeamWhereSchemaJson,
    distinct: TeamDistinctFieldsSchema,
  })
  .partial();

export const TeamQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TeamWhereSchemaJson,
    distinct: TeamDistinctFieldsSchema,
    orderBy: TeamOrderBySchemaJson,
  })
  .partial();

export type TeamCreate = z.infer<typeof TeamCreateSchema>;

export type TeamUpdate = z.infer<typeof TeamUpdateSchema>;

export type TeamOrderBy = z.infer<typeof TeamOrderBySchema>;

export type TeamOwnSelectFields = z.infer<typeof TeamOwnSelectFieldsSchema>;

export type TeamOwnWhere = z.infer<typeof TeamOwnWhereSchema>;

export type TeamOwnQuery = z.infer<typeof TeamOwnQuerySchema>;

export type TeamOwnQueryOne = z.infer<typeof TeamOwnQueryOneSchema>;

export type TeamWhere = z.infer<typeof TeamWhereSchema>;

export type TeamInclude = z.infer<typeof TeamIncludeSchema>;

export type TeamQueryOne = z.infer<typeof TeamQueryOneSchema>;

export type TeamQuery = z.infer<typeof TeamQuerySchema>;

export type TeamOmitFields = z.infer<typeof TeamOmitFieldsSchema>;

export type TeamSelectFields = z.infer<typeof TeamSelectFieldsSchema>;

export type TeamProjection = z.infer<typeof TeamProjectionSchema>;

export const TeamManagerQueryOneSchema = z
  .object({
    where: TeamManagerWhereSchemaJson,
    distinct: TeamManagerDistinctFieldsSchema,
  })
  .partial();

export const TeamManagerQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TeamManagerWhereSchemaJson,
    distinct: TeamManagerDistinctFieldsSchema,
    orderBy: TeamManagerOrderBySchemaJson,
  })
  .partial();

export type TeamManagerCreate = z.infer<typeof TeamManagerCreateSchema>;

export type TeamManagerUpdate = z.infer<typeof TeamManagerUpdateSchema>;

export type TeamManagerOrderBy = z.infer<typeof TeamManagerOrderBySchema>;

export type TeamManagerOwnSelectFields = z.infer<
  typeof TeamManagerOwnSelectFieldsSchema
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

export type TeamManagerOmitFields = z.infer<typeof TeamManagerOmitFieldsSchema>;

export type TeamManagerSelectFields = z.infer<
  typeof TeamManagerSelectFieldsSchema
>;

export type TeamManagerProjection = z.infer<typeof TeamManagerProjectionSchema>;

export const TeamMemberQueryOneSchema = z
  .object({
    where: TeamMemberWhereSchemaJson,
    distinct: TeamMemberDistinctFieldsSchema,
  })
  .partial();

export const TeamMemberQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TeamMemberWhereSchemaJson,
    distinct: TeamMemberDistinctFieldsSchema,
    orderBy: TeamMemberOrderBySchemaJson,
  })
  .partial();

export type TeamMemberCreate = z.infer<typeof TeamMemberCreateSchema>;

export type TeamMemberUpdate = z.infer<typeof TeamMemberUpdateSchema>;

export type TeamMemberOrderBy = z.infer<typeof TeamMemberOrderBySchema>;

export type TeamMemberOwnSelectFields = z.infer<
  typeof TeamMemberOwnSelectFieldsSchema
>;

export type TeamMemberOwnWhere = z.infer<typeof TeamMemberOwnWhereSchema>;

export type TeamMemberOwnQuery = z.infer<typeof TeamMemberOwnQuerySchema>;

export type TeamMemberOwnQueryOne = z.infer<typeof TeamMemberOwnQueryOneSchema>;

export type TeamMemberWhere = z.infer<typeof TeamMemberWhereSchema>;

export type TeamMemberInclude = z.infer<typeof TeamMemberIncludeSchema>;

export type TeamMemberQueryOne = z.infer<typeof TeamMemberQueryOneSchema>;

export type TeamMemberQuery = z.infer<typeof TeamMemberQuerySchema>;

export type TeamMemberOmitFields = z.infer<typeof TeamMemberOmitFieldsSchema>;

export type TeamMemberSelectFields = z.infer<
  typeof TeamMemberSelectFieldsSchema
>;

export type TeamMemberProjection = z.infer<typeof TeamMemberProjectionSchema>;

export const SalaryQueryOneSchema = z
  .object({
    where: SalaryWhereSchemaJson,
    distinct: SalaryDistinctFieldsSchema,
  })
  .partial();

export const SalaryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: SalaryWhereSchemaJson,
    distinct: SalaryDistinctFieldsSchema,
    orderBy: SalaryOrderBySchemaJson,
  })
  .partial();

export type SalaryCreate = z.infer<typeof SalaryCreateSchema>;

export type SalaryUpdate = z.infer<typeof SalaryUpdateSchema>;

export type SalaryOrderBy = z.infer<typeof SalaryOrderBySchema>;

export type SalaryOwnSelectFields = z.infer<typeof SalaryOwnSelectFieldsSchema>;

export type SalaryOwnWhere = z.infer<typeof SalaryOwnWhereSchema>;

export type SalaryOwnQuery = z.infer<typeof SalaryOwnQuerySchema>;

export type SalaryOwnQueryOne = z.infer<typeof SalaryOwnQueryOneSchema>;

export type SalaryWhere = z.infer<typeof SalaryWhereSchema>;

export type SalaryInclude = z.infer<typeof SalaryIncludeSchema>;

export type SalaryQueryOne = z.infer<typeof SalaryQueryOneSchema>;

export type SalaryQuery = z.infer<typeof SalaryQuerySchema>;

export type SalaryOmitFields = z.infer<typeof SalaryOmitFieldsSchema>;

export type SalarySelectFields = z.infer<typeof SalarySelectFieldsSchema>;

export type SalaryProjection = z.infer<typeof SalaryProjectionSchema>;

export const SalaryHistoryQueryOneSchema = z
  .object({
    where: SalaryHistoryWhereSchemaJson,
    distinct: SalaryHistoryDistinctFieldsSchema,
  })
  .partial();

export const SalaryHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: SalaryHistoryWhereSchemaJson,
    distinct: SalaryHistoryDistinctFieldsSchema,
    orderBy: SalaryHistoryOrderBySchemaJson,
  })
  .partial();

export type SalaryHistoryCreate = z.infer<typeof SalaryHistoryCreateSchema>;

export type SalaryHistoryUpdate = z.infer<typeof SalaryHistoryUpdateSchema>;

export type SalaryHistoryOrderBy = z.infer<typeof SalaryHistoryOrderBySchema>;

export type SalaryHistoryOwnSelectFields = z.infer<
  typeof SalaryHistoryOwnSelectFieldsSchema
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

export type SalaryHistoryOmitFields = z.infer<
  typeof SalaryHistoryOmitFieldsSchema
>;

export type SalaryHistorySelectFields = z.infer<
  typeof SalaryHistorySelectFieldsSchema
>;

export type SalaryHistoryProjection = z.infer<
  typeof SalaryHistoryProjectionSchema
>;

export const BenefitQueryOneSchema = z
  .object({
    where: BenefitWhereSchemaJson,
    distinct: BenefitDistinctFieldsSchema,
  })
  .partial();

export const BenefitQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: BenefitWhereSchemaJson,
    distinct: BenefitDistinctFieldsSchema,
    orderBy: BenefitOrderBySchemaJson,
  })
  .partial();

export type BenefitCreate = z.infer<typeof BenefitCreateSchema>;

export type BenefitUpdate = z.infer<typeof BenefitUpdateSchema>;

export type BenefitOrderBy = z.infer<typeof BenefitOrderBySchema>;

export type BenefitOwnSelectFields = z.infer<
  typeof BenefitOwnSelectFieldsSchema
>;

export type BenefitOwnWhere = z.infer<typeof BenefitOwnWhereSchema>;

export type BenefitOwnQuery = z.infer<typeof BenefitOwnQuerySchema>;

export type BenefitOwnQueryOne = z.infer<typeof BenefitOwnQueryOneSchema>;

export type BenefitWhere = z.infer<typeof BenefitWhereSchema>;

export type BenefitInclude = z.infer<typeof BenefitIncludeSchema>;

export type BenefitQueryOne = z.infer<typeof BenefitQueryOneSchema>;

export type BenefitQuery = z.infer<typeof BenefitQuerySchema>;

export type BenefitOmitFields = z.infer<typeof BenefitOmitFieldsSchema>;

export type BenefitSelectFields = z.infer<typeof BenefitSelectFieldsSchema>;

export type BenefitProjection = z.infer<typeof BenefitProjectionSchema>;

export const BenefitEnrolmentQueryOneSchema = z
  .object({
    where: BenefitEnrolmentWhereSchemaJson,
    distinct: BenefitEnrolmentDistinctFieldsSchema,
  })
  .partial();

export const BenefitEnrolmentQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: BenefitEnrolmentWhereSchemaJson,
    distinct: BenefitEnrolmentDistinctFieldsSchema,
    orderBy: BenefitEnrolmentOrderBySchemaJson,
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

export type BenefitEnrolmentOwnSelectFields = z.infer<
  typeof BenefitEnrolmentOwnSelectFieldsSchema
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

export type BenefitEnrolmentOmitFields = z.infer<
  typeof BenefitEnrolmentOmitFieldsSchema
>;

export type BenefitEnrolmentSelectFields = z.infer<
  typeof BenefitEnrolmentSelectFieldsSchema
>;

export type BenefitEnrolmentProjection = z.infer<
  typeof BenefitEnrolmentProjectionSchema
>;

export const TitleHistoryQueryOneSchema = z
  .object({
    where: TitleHistoryWhereSchemaJson,
    distinct: TitleHistoryDistinctFieldsSchema,
  })
  .partial();

export const TitleHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TitleHistoryWhereSchemaJson,
    distinct: TitleHistoryDistinctFieldsSchema,
    orderBy: TitleHistoryOrderBySchemaJson,
  })
  .partial();

export type TitleHistoryCreate = z.infer<typeof TitleHistoryCreateSchema>;

export type TitleHistoryUpdate = z.infer<typeof TitleHistoryUpdateSchema>;

export type TitleHistoryOrderBy = z.infer<typeof TitleHistoryOrderBySchema>;

export type TitleHistoryOwnSelectFields = z.infer<
  typeof TitleHistoryOwnSelectFieldsSchema
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

export type TitleHistoryOmitFields = z.infer<
  typeof TitleHistoryOmitFieldsSchema
>;

export type TitleHistorySelectFields = z.infer<
  typeof TitleHistorySelectFieldsSchema
>;

export type TitleHistoryProjection = z.infer<
  typeof TitleHistoryProjectionSchema
>;

export const TimeOffPolicyQueryOneSchema = z
  .object({
    where: TimeOffPolicyWhereSchemaJson,
    distinct: TimeOffPolicyDistinctFieldsSchema,
  })
  .partial();

export const TimeOffPolicyQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TimeOffPolicyWhereSchemaJson,
    distinct: TimeOffPolicyDistinctFieldsSchema,
    orderBy: TimeOffPolicyOrderBySchemaJson,
  })
  .partial();

export type TimeOffPolicyCreate = z.infer<typeof TimeOffPolicyCreateSchema>;

export type TimeOffPolicyUpdate = z.infer<typeof TimeOffPolicyUpdateSchema>;

export type TimeOffPolicyOrderBy = z.infer<typeof TimeOffPolicyOrderBySchema>;

export type TimeOffPolicyOwnSelectFields = z.infer<
  typeof TimeOffPolicyOwnSelectFieldsSchema
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

export type TimeOffPolicyOmitFields = z.infer<
  typeof TimeOffPolicyOmitFieldsSchema
>;

export type TimeOffPolicySelectFields = z.infer<
  typeof TimeOffPolicySelectFieldsSchema
>;

export type TimeOffPolicyProjection = z.infer<
  typeof TimeOffPolicyProjectionSchema
>;

export const TimeOffBalanceQueryOneSchema = z
  .object({
    where: TimeOffBalanceWhereSchemaJson,
    distinct: TimeOffBalanceDistinctFieldsSchema,
  })
  .partial();

export const TimeOffBalanceQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TimeOffBalanceWhereSchemaJson,
    distinct: TimeOffBalanceDistinctFieldsSchema,
    orderBy: TimeOffBalanceOrderBySchemaJson,
  })
  .partial();

export type TimeOffBalanceCreate = z.infer<typeof TimeOffBalanceCreateSchema>;

export type TimeOffBalanceUpdate = z.infer<typeof TimeOffBalanceUpdateSchema>;

export type TimeOffBalanceOrderBy = z.infer<typeof TimeOffBalanceOrderBySchema>;

export type TimeOffBalanceOwnSelectFields = z.infer<
  typeof TimeOffBalanceOwnSelectFieldsSchema
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

export type TimeOffBalanceOmitFields = z.infer<
  typeof TimeOffBalanceOmitFieldsSchema
>;

export type TimeOffBalanceSelectFields = z.infer<
  typeof TimeOffBalanceSelectFieldsSchema
>;

export type TimeOffBalanceProjection = z.infer<
  typeof TimeOffBalanceProjectionSchema
>;

export const TimeOffRequestQueryOneSchema = z
  .object({
    where: TimeOffRequestWhereSchemaJson,
    distinct: TimeOffRequestDistinctFieldsSchema,
  })
  .partial();

export const TimeOffRequestQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TimeOffRequestWhereSchemaJson,
    distinct: TimeOffRequestDistinctFieldsSchema,
    orderBy: TimeOffRequestOrderBySchemaJson,
  })
  .partial();

export type TimeOffRequestCreate = z.infer<typeof TimeOffRequestCreateSchema>;

export type TimeOffRequestUpdate = z.infer<typeof TimeOffRequestUpdateSchema>;

export type TimeOffRequestOrderBy = z.infer<typeof TimeOffRequestOrderBySchema>;

export type TimeOffRequestOwnSelectFields = z.infer<
  typeof TimeOffRequestOwnSelectFieldsSchema
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

export type TimeOffRequestOmitFields = z.infer<
  typeof TimeOffRequestOmitFieldsSchema
>;

export type TimeOffRequestSelectFields = z.infer<
  typeof TimeOffRequestSelectFieldsSchema
>;

export type TimeOffRequestProjection = z.infer<
  typeof TimeOffRequestProjectionSchema
>;

export const TimeOffTransactionQueryOneSchema = z
  .object({
    where: TimeOffTransactionWhereSchemaJson,
    distinct: TimeOffTransactionDistinctFieldsSchema,
  })
  .partial();

export const TimeOffTransactionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TimeOffTransactionWhereSchemaJson,
    distinct: TimeOffTransactionDistinctFieldsSchema,
    orderBy: TimeOffTransactionOrderBySchemaJson,
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

export type TimeOffTransactionOwnSelectFields = z.infer<
  typeof TimeOffTransactionOwnSelectFieldsSchema
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

export type TimeOffTransactionOmitFields = z.infer<
  typeof TimeOffTransactionOmitFieldsSchema
>;

export type TimeOffTransactionSelectFields = z.infer<
  typeof TimeOffTransactionSelectFieldsSchema
>;

export type TimeOffTransactionProjection = z.infer<
  typeof TimeOffTransactionProjectionSchema
>;

export const ClockInQueryOneSchema = z
  .object({
    where: ClockInWhereSchemaJson,
    distinct: ClockInDistinctFieldsSchema,
  })
  .partial();

export const ClockInQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ClockInWhereSchemaJson,
    distinct: ClockInDistinctFieldsSchema,
    orderBy: ClockInOrderBySchemaJson,
  })
  .partial();

export type ClockInCreate = z.infer<typeof ClockInCreateSchema>;

export type ClockInUpdate = z.infer<typeof ClockInUpdateSchema>;

export type ClockInOrderBy = z.infer<typeof ClockInOrderBySchema>;

export type ClockInOwnSelectFields = z.infer<
  typeof ClockInOwnSelectFieldsSchema
>;

export type ClockInOwnWhere = z.infer<typeof ClockInOwnWhereSchema>;

export type ClockInOwnQuery = z.infer<typeof ClockInOwnQuerySchema>;

export type ClockInOwnQueryOne = z.infer<typeof ClockInOwnQueryOneSchema>;

export type ClockInWhere = z.infer<typeof ClockInWhereSchema>;

export type ClockInInclude = z.infer<typeof ClockInIncludeSchema>;

export type ClockInQueryOne = z.infer<typeof ClockInQueryOneSchema>;

export type ClockInQuery = z.infer<typeof ClockInQuerySchema>;

export type ClockInOmitFields = z.infer<typeof ClockInOmitFieldsSchema>;

export type ClockInSelectFields = z.infer<typeof ClockInSelectFieldsSchema>;

export type ClockInProjection = z.infer<typeof ClockInProjectionSchema>;

export const PaycheckQueryOneSchema = z
  .object({
    where: PaycheckWhereSchemaJson,
    distinct: PaycheckDistinctFieldsSchema,
  })
  .partial();

export const PaycheckQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PaycheckWhereSchemaJson,
    distinct: PaycheckDistinctFieldsSchema,
    orderBy: PaycheckOrderBySchemaJson,
  })
  .partial();

export type PaycheckCreate = z.infer<typeof PaycheckCreateSchema>;

export type PaycheckUpdate = z.infer<typeof PaycheckUpdateSchema>;

export type PaycheckOrderBy = z.infer<typeof PaycheckOrderBySchema>;

export type PaycheckOwnSelectFields = z.infer<
  typeof PaycheckOwnSelectFieldsSchema
>;

export type PaycheckOwnWhere = z.infer<typeof PaycheckOwnWhereSchema>;

export type PaycheckOwnQuery = z.infer<typeof PaycheckOwnQuerySchema>;

export type PaycheckOwnQueryOne = z.infer<typeof PaycheckOwnQueryOneSchema>;

export type PaycheckWhere = z.infer<typeof PaycheckWhereSchema>;

export type PaycheckInclude = z.infer<typeof PaycheckIncludeSchema>;

export type PaycheckQueryOne = z.infer<typeof PaycheckQueryOneSchema>;

export type PaycheckQuery = z.infer<typeof PaycheckQuerySchema>;

export type PaycheckOmitFields = z.infer<typeof PaycheckOmitFieldsSchema>;

export type PaycheckSelectFields = z.infer<typeof PaycheckSelectFieldsSchema>;

export type PaycheckProjection = z.infer<typeof PaycheckProjectionSchema>;

export const EarningQueryOneSchema = z
  .object({
    where: EarningWhereSchemaJson,
    distinct: EarningDistinctFieldsSchema,
  })
  .partial();

export const EarningQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EarningWhereSchemaJson,
    distinct: EarningDistinctFieldsSchema,
    orderBy: EarningOrderBySchemaJson,
  })
  .partial();

export type EarningCreate = z.infer<typeof EarningCreateSchema>;

export type EarningUpdate = z.infer<typeof EarningUpdateSchema>;

export type EarningOrderBy = z.infer<typeof EarningOrderBySchema>;

export type EarningOwnSelectFields = z.infer<
  typeof EarningOwnSelectFieldsSchema
>;

export type EarningOwnWhere = z.infer<typeof EarningOwnWhereSchema>;

export type EarningOwnQuery = z.infer<typeof EarningOwnQuerySchema>;

export type EarningOwnQueryOne = z.infer<typeof EarningOwnQueryOneSchema>;

export type EarningWhere = z.infer<typeof EarningWhereSchema>;

export type EarningInclude = z.infer<typeof EarningIncludeSchema>;

export type EarningQueryOne = z.infer<typeof EarningQueryOneSchema>;

export type EarningQuery = z.infer<typeof EarningQuerySchema>;

export type EarningOmitFields = z.infer<typeof EarningOmitFieldsSchema>;

export type EarningSelectFields = z.infer<typeof EarningSelectFieldsSchema>;

export type EarningProjection = z.infer<typeof EarningProjectionSchema>;

export const PaycheckTaxQueryOneSchema = z
  .object({
    where: PaycheckTaxWhereSchemaJson,
    distinct: PaycheckTaxDistinctFieldsSchema,
  })
  .partial();

export const PaycheckTaxQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PaycheckTaxWhereSchemaJson,
    distinct: PaycheckTaxDistinctFieldsSchema,
    orderBy: PaycheckTaxOrderBySchemaJson,
  })
  .partial();

export type PaycheckTaxCreate = z.infer<typeof PaycheckTaxCreateSchema>;

export type PaycheckTaxUpdate = z.infer<typeof PaycheckTaxUpdateSchema>;

export type PaycheckTaxOrderBy = z.infer<typeof PaycheckTaxOrderBySchema>;

export type PaycheckTaxOwnSelectFields = z.infer<
  typeof PaycheckTaxOwnSelectFieldsSchema
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

export type PaycheckTaxOmitFields = z.infer<typeof PaycheckTaxOmitFieldsSchema>;

export type PaycheckTaxSelectFields = z.infer<
  typeof PaycheckTaxSelectFieldsSchema
>;

export type PaycheckTaxProjection = z.infer<typeof PaycheckTaxProjectionSchema>;

export const DeductionPolicyQueryOneSchema = z
  .object({
    where: DeductionPolicyWhereSchemaJson,
    distinct: DeductionPolicyDistinctFieldsSchema,
  })
  .partial();

export const DeductionPolicyQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: DeductionPolicyWhereSchemaJson,
    distinct: DeductionPolicyDistinctFieldsSchema,
    orderBy: DeductionPolicyOrderBySchemaJson,
  })
  .partial();

export type DeductionPolicyCreate = z.infer<typeof DeductionPolicyCreateSchema>;

export type DeductionPolicyUpdate = z.infer<typeof DeductionPolicyUpdateSchema>;

export type DeductionPolicyOrderBy = z.infer<
  typeof DeductionPolicyOrderBySchema
>;

export type DeductionPolicyOwnSelectFields = z.infer<
  typeof DeductionPolicyOwnSelectFieldsSchema
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

export type DeductionPolicyOmitFields = z.infer<
  typeof DeductionPolicyOmitFieldsSchema
>;

export type DeductionPolicySelectFields = z.infer<
  typeof DeductionPolicySelectFieldsSchema
>;

export type DeductionPolicyProjection = z.infer<
  typeof DeductionPolicyProjectionSchema
>;

export const EmployeeDeductionQueryOneSchema = z
  .object({
    where: EmployeeDeductionWhereSchemaJson,
    distinct: EmployeeDeductionDistinctFieldsSchema,
  })
  .partial();

export const EmployeeDeductionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeDeductionWhereSchemaJson,
    distinct: EmployeeDeductionDistinctFieldsSchema,
    orderBy: EmployeeDeductionOrderBySchemaJson,
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

export type EmployeeDeductionOwnSelectFields = z.infer<
  typeof EmployeeDeductionOwnSelectFieldsSchema
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

export type EmployeeDeductionOmitFields = z.infer<
  typeof EmployeeDeductionOmitFieldsSchema
>;

export type EmployeeDeductionSelectFields = z.infer<
  typeof EmployeeDeductionSelectFieldsSchema
>;

export type EmployeeDeductionProjection = z.infer<
  typeof EmployeeDeductionProjectionSchema
>;

export const PaycheckDeductionQueryOneSchema = z
  .object({
    where: PaycheckDeductionWhereSchemaJson,
    distinct: PaycheckDeductionDistinctFieldsSchema,
  })
  .partial();

export const PaycheckDeductionQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PaycheckDeductionWhereSchemaJson,
    distinct: PaycheckDeductionDistinctFieldsSchema,
    orderBy: PaycheckDeductionOrderBySchemaJson,
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

export type PaycheckDeductionOwnSelectFields = z.infer<
  typeof PaycheckDeductionOwnSelectFieldsSchema
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

export type PaycheckDeductionOmitFields = z.infer<
  typeof PaycheckDeductionOmitFieldsSchema
>;

export type PaycheckDeductionSelectFields = z.infer<
  typeof PaycheckDeductionSelectFieldsSchema
>;

export type PaycheckDeductionProjection = z.infer<
  typeof PaycheckDeductionProjectionSchema
>;

export const EmployeeTaxDataQueryOneSchema = z
  .object({
    where: EmployeeTaxDataWhereSchemaJson,
    distinct: EmployeeTaxDataDistinctFieldsSchema,
  })
  .partial();

export const EmployeeTaxDataQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmployeeTaxDataWhereSchemaJson,
    distinct: EmployeeTaxDataDistinctFieldsSchema,
    orderBy: EmployeeTaxDataOrderBySchemaJson,
  })
  .partial();

export type EmployeeTaxDataCreate = z.infer<typeof EmployeeTaxDataCreateSchema>;

export type EmployeeTaxDataUpdate = z.infer<typeof EmployeeTaxDataUpdateSchema>;

export type EmployeeTaxDataOrderBy = z.infer<
  typeof EmployeeTaxDataOrderBySchema
>;

export type EmployeeTaxDataOwnSelectFields = z.infer<
  typeof EmployeeTaxDataOwnSelectFieldsSchema
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

export type EmployeeTaxDataOmitFields = z.infer<
  typeof EmployeeTaxDataOmitFieldsSchema
>;

export type EmployeeTaxDataSelectFields = z.infer<
  typeof EmployeeTaxDataSelectFieldsSchema
>;

export type EmployeeTaxDataProjection = z.infer<
  typeof EmployeeTaxDataProjectionSchema
>;

export const StateTaxWithholdingQueryOneSchema = z
  .object({
    where: StateTaxWithholdingWhereSchemaJson,
    distinct: StateTaxWithholdingDistinctFieldsSchema,
  })
  .partial();

export const StateTaxWithholdingQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: StateTaxWithholdingWhereSchemaJson,
    distinct: StateTaxWithholdingDistinctFieldsSchema,
    orderBy: StateTaxWithholdingOrderBySchemaJson,
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

export type StateTaxWithholdingOwnSelectFields = z.infer<
  typeof StateTaxWithholdingOwnSelectFieldsSchema
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

export type StateTaxWithholdingOmitFields = z.infer<
  typeof StateTaxWithholdingOmitFieldsSchema
>;

export type StateTaxWithholdingSelectFields = z.infer<
  typeof StateTaxWithholdingSelectFieldsSchema
>;

export type StateTaxWithholdingProjection = z.infer<
  typeof StateTaxWithholdingProjectionSchema
>;

export const LocalTaxWithholdingQueryOneSchema = z
  .object({
    where: LocalTaxWithholdingWhereSchemaJson,
    distinct: LocalTaxWithholdingDistinctFieldsSchema,
  })
  .partial();

export const LocalTaxWithholdingQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: LocalTaxWithholdingWhereSchemaJson,
    distinct: LocalTaxWithholdingDistinctFieldsSchema,
    orderBy: LocalTaxWithholdingOrderBySchemaJson,
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

export type LocalTaxWithholdingOwnSelectFields = z.infer<
  typeof LocalTaxWithholdingOwnSelectFieldsSchema
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

export type LocalTaxWithholdingOmitFields = z.infer<
  typeof LocalTaxWithholdingOmitFieldsSchema
>;

export type LocalTaxWithholdingSelectFields = z.infer<
  typeof LocalTaxWithholdingSelectFieldsSchema
>;

export type LocalTaxWithholdingProjection = z.infer<
  typeof LocalTaxWithholdingProjectionSchema
>;

export const PayrollRunQueryOneSchema = z
  .object({
    where: PayrollRunWhereSchemaJson,
    distinct: PayrollRunDistinctFieldsSchema,
  })
  .partial();

export const PayrollRunQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PayrollRunWhereSchemaJson,
    distinct: PayrollRunDistinctFieldsSchema,
    orderBy: PayrollRunOrderBySchemaJson,
  })
  .partial();

export type PayrollRunCreate = z.infer<typeof PayrollRunCreateSchema>;

export type PayrollRunUpdate = z.infer<typeof PayrollRunUpdateSchema>;

export type PayrollRunOrderBy = z.infer<typeof PayrollRunOrderBySchema>;

export type PayrollRunOwnSelectFields = z.infer<
  typeof PayrollRunOwnSelectFieldsSchema
>;

export type PayrollRunOwnWhere = z.infer<typeof PayrollRunOwnWhereSchema>;

export type PayrollRunOwnQuery = z.infer<typeof PayrollRunOwnQuerySchema>;

export type PayrollRunOwnQueryOne = z.infer<typeof PayrollRunOwnQueryOneSchema>;

export type PayrollRunWhere = z.infer<typeof PayrollRunWhereSchema>;

export type PayrollRunInclude = z.infer<typeof PayrollRunIncludeSchema>;

export type PayrollRunQueryOne = z.infer<typeof PayrollRunQueryOneSchema>;

export type PayrollRunQuery = z.infer<typeof PayrollRunQuerySchema>;

export type PayrollRunOmitFields = z.infer<typeof PayrollRunOmitFieldsSchema>;

export type PayrollRunSelectFields = z.infer<
  typeof PayrollRunSelectFieldsSchema
>;

export type PayrollRunProjection = z.infer<typeof PayrollRunProjectionSchema>;

export const ContactQueryOneSchema = z
  .object({
    where: ContactWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
  })
  .partial();

export const ContactQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ContactWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
    orderBy: ContactOrderBySchemaJson,
  })
  .partial();

export type ContactCreate = z.infer<typeof ContactCreateSchema>;

export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;

export type ContactOrderBy = z.infer<typeof ContactOrderBySchema>;

export type ContactOwnSelectFields = z.infer<
  typeof ContactOwnSelectFieldsSchema
>;

export type ContactOwnWhere = z.infer<typeof ContactOwnWhereSchema>;

export type ContactOwnQuery = z.infer<typeof ContactOwnQuerySchema>;

export type ContactOwnQueryOne = z.infer<typeof ContactOwnQueryOneSchema>;

export type ContactWhere = z.infer<typeof ContactWhereSchema>;

export type ContactInclude = z.infer<typeof ContactIncludeSchema>;

export type ContactQueryOne = z.infer<typeof ContactQueryOneSchema>;

export type ContactQuery = z.infer<typeof ContactQuerySchema>;

export type ContactOmitFields = z.infer<typeof ContactOmitFieldsSchema>;

export type ContactSelectFields = z.infer<typeof ContactSelectFieldsSchema>;

export type ContactProjection = z.infer<typeof ContactProjectionSchema>;

export const CountryQueryOneSchema = z
  .object({
    where: CountryWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
  })
  .partial();

export const CountryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CountryWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
    orderBy: CountryOrderBySchemaJson,
  })
  .partial();

export type CountryCreate = z.infer<typeof CountryCreateSchema>;

export type CountryUpdate = z.infer<typeof CountryUpdateSchema>;

export type CountryOrderBy = z.infer<typeof CountryOrderBySchema>;

export type CountryOwnSelectFields = z.infer<
  typeof CountryOwnSelectFieldsSchema
>;

export type CountryOwnWhere = z.infer<typeof CountryOwnWhereSchema>;

export type CountryOwnQuery = z.infer<typeof CountryOwnQuerySchema>;

export type CountryOwnQueryOne = z.infer<typeof CountryOwnQueryOneSchema>;

export type CountryWhere = z.infer<typeof CountryWhereSchema>;

export type CountryInclude = z.infer<typeof CountryIncludeSchema>;

export type CountryQueryOne = z.infer<typeof CountryQueryOneSchema>;

export type CountryQuery = z.infer<typeof CountryQuerySchema>;

export type CountryOmitFields = z.infer<typeof CountryOmitFieldsSchema>;

export type CountrySelectFields = z.infer<typeof CountrySelectFieldsSchema>;

export type CountryProjection = z.infer<typeof CountryProjectionSchema>;

export const StateQueryOneSchema = z
  .object({
    where: StateWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
  })
  .partial();

export const StateQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: StateWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
    orderBy: StateOrderBySchemaJson,
  })
  .partial();

export type StateCreate = z.infer<typeof StateCreateSchema>;

export type StateUpdate = z.infer<typeof StateUpdateSchema>;

export type StateOrderBy = z.infer<typeof StateOrderBySchema>;

export type StateOwnSelectFields = z.infer<typeof StateOwnSelectFieldsSchema>;

export type StateOwnWhere = z.infer<typeof StateOwnWhereSchema>;

export type StateOwnQuery = z.infer<typeof StateOwnQuerySchema>;

export type StateOwnQueryOne = z.infer<typeof StateOwnQueryOneSchema>;

export type StateWhere = z.infer<typeof StateWhereSchema>;

export type StateInclude = z.infer<typeof StateIncludeSchema>;

export type StateQueryOne = z.infer<typeof StateQueryOneSchema>;

export type StateQuery = z.infer<typeof StateQuerySchema>;

export type StateOmitFields = z.infer<typeof StateOmitFieldsSchema>;

export type StateSelectFields = z.infer<typeof StateSelectFieldsSchema>;

export type StateProjection = z.infer<typeof StateProjectionSchema>;

export const AddressQueryOneSchema = z
  .object({
    where: AddressWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
  })
  .partial();

export const AddressQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AddressWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
    orderBy: AddressOrderBySchemaJson,
  })
  .partial();

export type AddressCreate = z.infer<typeof AddressCreateSchema>;

export type AddressUpdate = z.infer<typeof AddressUpdateSchema>;

export type AddressOrderBy = z.infer<typeof AddressOrderBySchema>;

export type AddressOwnSelectFields = z.infer<
  typeof AddressOwnSelectFieldsSchema
>;

export type AddressOwnWhere = z.infer<typeof AddressOwnWhereSchema>;

export type AddressOwnQuery = z.infer<typeof AddressOwnQuerySchema>;

export type AddressOwnQueryOne = z.infer<typeof AddressOwnQueryOneSchema>;

export type AddressWhere = z.infer<typeof AddressWhereSchema>;

export type AddressInclude = z.infer<typeof AddressIncludeSchema>;

export type AddressQueryOne = z.infer<typeof AddressQueryOneSchema>;

export type AddressQuery = z.infer<typeof AddressQuerySchema>;

export type AddressOmitFields = z.infer<typeof AddressOmitFieldsSchema>;

export type AddressSelectFields = z.infer<typeof AddressSelectFieldsSchema>;

export type AddressProjection = z.infer<typeof AddressProjectionSchema>;

export const EmailQueryOneSchema = z
  .object({
    where: EmailWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
  })
  .partial();

export const EmailQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmailWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
    orderBy: EmailOrderBySchemaJson,
  })
  .partial();

export type EmailCreate = z.infer<typeof EmailCreateSchema>;

export type EmailUpdate = z.infer<typeof EmailUpdateSchema>;

export type EmailOrderBy = z.infer<typeof EmailOrderBySchema>;

export type EmailOwnSelectFields = z.infer<typeof EmailOwnSelectFieldsSchema>;

export type EmailOwnWhere = z.infer<typeof EmailOwnWhereSchema>;

export type EmailOwnQuery = z.infer<typeof EmailOwnQuerySchema>;

export type EmailOwnQueryOne = z.infer<typeof EmailOwnQueryOneSchema>;

export type EmailWhere = z.infer<typeof EmailWhereSchema>;

export type EmailInclude = z.infer<typeof EmailIncludeSchema>;

export type EmailQueryOne = z.infer<typeof EmailQueryOneSchema>;

export type EmailQuery = z.infer<typeof EmailQuerySchema>;

export type EmailOmitFields = z.infer<typeof EmailOmitFieldsSchema>;

export type EmailSelectFields = z.infer<typeof EmailSelectFieldsSchema>;

export type EmailProjection = z.infer<typeof EmailProjectionSchema>;

export const PhoneQueryOneSchema = z
  .object({
    where: PhoneWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
  })
  .partial();

export const PhoneQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PhoneWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
    orderBy: PhoneOrderBySchemaJson,
  })
  .partial();

export type PhoneCreate = z.infer<typeof PhoneCreateSchema>;

export type PhoneUpdate = z.infer<typeof PhoneUpdateSchema>;

export type PhoneOrderBy = z.infer<typeof PhoneOrderBySchema>;

export type PhoneOwnSelectFields = z.infer<typeof PhoneOwnSelectFieldsSchema>;

export type PhoneOwnWhere = z.infer<typeof PhoneOwnWhereSchema>;

export type PhoneOwnQuery = z.infer<typeof PhoneOwnQuerySchema>;

export type PhoneOwnQueryOne = z.infer<typeof PhoneOwnQueryOneSchema>;

export type PhoneWhere = z.infer<typeof PhoneWhereSchema>;

export type PhoneInclude = z.infer<typeof PhoneIncludeSchema>;

export type PhoneQueryOne = z.infer<typeof PhoneQueryOneSchema>;

export type PhoneQuery = z.infer<typeof PhoneQuerySchema>;

export type PhoneOmitFields = z.infer<typeof PhoneOmitFieldsSchema>;

export type PhoneSelectFields = z.infer<typeof PhoneSelectFieldsSchema>;

export type PhoneProjection = z.infer<typeof PhoneProjectionSchema>;

export const PrimaryEmailQueryOneSchema = z
  .object({
    where: PrimaryEmailWhereSchemaJson,
    distinct: PrimaryEmailDistinctFieldsSchema,
  })
  .partial();

export const PrimaryEmailQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PrimaryEmailWhereSchemaJson,
    distinct: PrimaryEmailDistinctFieldsSchema,
    orderBy: PrimaryEmailOrderBySchemaJson,
  })
  .partial();

export type PrimaryEmailCreate = z.infer<typeof PrimaryEmailCreateSchema>;

export type PrimaryEmailUpdate = z.infer<typeof PrimaryEmailUpdateSchema>;

export type PrimaryEmailOrderBy = z.infer<typeof PrimaryEmailOrderBySchema>;

export type PrimaryEmailOwnSelectFields = z.infer<
  typeof PrimaryEmailOwnSelectFieldsSchema
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

export type PrimaryEmailOmitFields = z.infer<
  typeof PrimaryEmailOmitFieldsSchema
>;

export type PrimaryEmailSelectFields = z.infer<
  typeof PrimaryEmailSelectFieldsSchema
>;

export type PrimaryEmailProjection = z.infer<
  typeof PrimaryEmailProjectionSchema
>;

export const PrimaryPhoneQueryOneSchema = z
  .object({
    where: PrimaryPhoneWhereSchemaJson,
    distinct: PrimaryPhoneDistinctFieldsSchema,
  })
  .partial();

export const PrimaryPhoneQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PrimaryPhoneWhereSchemaJson,
    distinct: PrimaryPhoneDistinctFieldsSchema,
    orderBy: PrimaryPhoneOrderBySchemaJson,
  })
  .partial();

export type PrimaryPhoneCreate = z.infer<typeof PrimaryPhoneCreateSchema>;

export type PrimaryPhoneUpdate = z.infer<typeof PrimaryPhoneUpdateSchema>;

export type PrimaryPhoneOrderBy = z.infer<typeof PrimaryPhoneOrderBySchema>;

export type PrimaryPhoneOwnSelectFields = z.infer<
  typeof PrimaryPhoneOwnSelectFieldsSchema
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

export type PrimaryPhoneOmitFields = z.infer<
  typeof PrimaryPhoneOmitFieldsSchema
>;

export type PrimaryPhoneSelectFields = z.infer<
  typeof PrimaryPhoneSelectFieldsSchema
>;

export type PrimaryPhoneProjection = z.infer<
  typeof PrimaryPhoneProjectionSchema
>;

export const PrimaryAddressQueryOneSchema = z
  .object({
    where: PrimaryAddressWhereSchemaJson,
    distinct: PrimaryAddressDistinctFieldsSchema,
  })
  .partial();

export const PrimaryAddressQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PrimaryAddressWhereSchemaJson,
    distinct: PrimaryAddressDistinctFieldsSchema,
    orderBy: PrimaryAddressOrderBySchemaJson,
  })
  .partial();

export type PrimaryAddressCreate = z.infer<typeof PrimaryAddressCreateSchema>;

export type PrimaryAddressUpdate = z.infer<typeof PrimaryAddressUpdateSchema>;

export type PrimaryAddressOrderBy = z.infer<typeof PrimaryAddressOrderBySchema>;

export type PrimaryAddressOwnSelectFields = z.infer<
  typeof PrimaryAddressOwnSelectFieldsSchema
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

export type PrimaryAddressOmitFields = z.infer<
  typeof PrimaryAddressOmitFieldsSchema
>;

export type PrimaryAddressSelectFields = z.infer<
  typeof PrimaryAddressSelectFieldsSchema
>;

export type PrimaryAddressProjection = z.infer<
  typeof PrimaryAddressProjectionSchema
>;
