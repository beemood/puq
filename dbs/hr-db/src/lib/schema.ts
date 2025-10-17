/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const takeSchema = z.coerce.number().int().min(1).default(20).optional();
export const skipSchema = z.coerce.number().int().min(0).default(0).optional();
export const PaginationSchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
  })
  .partial();

export const nameSchema = z.string().min(2).max(30);
export const descriptionSchema = z.string().max(1000);
export const currencySchema = z.coerce.number().positive();
export const positiveIntegerSchema = z.coerce.number().int().positive();
export const emailSchema = z.email();
export const dateSchema = z.iso.datetime();
export const slugSchema = z.string().regex(/^[a-z-]{2,}$/);

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

export const DepartmentOwnSelectFieldsSchema = z
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

export const DepartmentOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DepartmentOwnSelectFieldsSchema
);

export const DepartmentDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name', 'slug', 'isActive'])
  .array();

export const TitleOwnSelectFieldsSchema = z
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

export const TitleOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TitleOwnSelectFieldsSchema
);

export const TitleDistinctFieldsSchema = z
  .enum(['id', 'departmentId', 'name', 'slug', 'description', 'isActive'])
  .array();

export const PersonalDataOwnSelectFieldsSchema = z
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

export const PersonalDataOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataOwnSelectFieldsSchema
);

export const PersonalDataDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'ein', 'gender', 'dob', 'maritalStatus'])
  .array();

export const EmployeeOwnSelectFieldsSchema = z
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

export const EmployeeOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
    id: z.boolean(),
    name: z.boolean(),
    members: z.boolean(),
    managers: z.boolean(),
  })
  .partial();

export const TeamOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnSelectFieldsSchema
);

export const TeamDistinctFieldsSchema = z.enum(['id', 'name']).array();

export const TeamManagerOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    managerId: z.boolean(),
    team: z.boolean(),
    manager: z.boolean(),
  })
  .partial();

export const TeamManagerOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerOwnSelectFieldsSchema
);

export const TeamManagerDistinctFieldsSchema = z
  .enum(['id', 'teamId', 'managerId'])
  .array();

export const TeamMemberOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    memberId: z.boolean(),
    member: z.boolean(),
    team: z.boolean(),
  })
  .partial();

export const TeamMemberOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberOwnSelectFieldsSchema
);

export const TeamMemberDistinctFieldsSchema = z
  .enum(['id', 'teamId', 'memberId'])
  .array();

export const SalaryOwnSelectFieldsSchema = z
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

export const SalaryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SalaryOwnSelectFieldsSchema
);

export const SalaryDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'gross', 'startDate', 'endDate', 'frequency'])
  .array();

export const SalaryHistoryOwnSelectFieldsSchema = z
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

export const SalaryHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistoryOwnSelectFieldsSchema
);

export const SalaryHistoryDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'createdAt', 'oldSalary', 'newSalary', 'reason'])
  .array();

export const BenefitOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    type: z.boolean(),
    enrolments: z.boolean(),
  })
  .partial();

export const BenefitOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  BenefitOwnSelectFieldsSchema
);

export const BenefitDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'type'])
  .array();

export const BenefitEnrolmentOwnSelectFieldsSchema = z
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

export const BenefitEnrolmentOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentOwnSelectFieldsSchema
);

export const BenefitEnrolmentDistinctFieldsSchema = z
  .enum(['id', 'benefitId', 'employeeId', 'startDate', 'status'])
  .array();

export const TitleHistoryOwnSelectFieldsSchema = z
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

export const TitleHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    accrualRate: z.boolean(),
    maxRollover: z.boolean(),
    balances: z.boolean(),
    requests: z.boolean(),
  })
  .partial();

export const TimeOffPolicyOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicyOwnSelectFieldsSchema
);

export const TimeOffPolicyDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'accrualRate', 'maxRollover'])
  .array();

export const TimeOffBalanceOwnSelectFieldsSchema = z
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

export const TimeOffBalanceOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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

export const TimeOffRequestOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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

export const TimeOffTransactionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
    id: z.boolean(),
    employeeId: z.boolean(),
    clockIn: z.boolean(),
    clockOut: z.boolean(),
    employee: z.boolean(),
  })
  .partial();

export const ClockInOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ClockInOwnSelectFieldsSchema
);

export const ClockInDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'clockIn', 'clockOut'])
  .array();

export const PaycheckOwnSelectFieldsSchema = z
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

export const PaycheckOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
    id: z.boolean(),
    type: z.boolean(),
    hours: z.boolean(),
    rate: z.boolean(),
    amount: z.boolean(),
    paycheckId: z.boolean(),
    paycheck: z.boolean(),
  })
  .partial();

export const EarningOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EarningOwnSelectFieldsSchema
);

export const EarningDistinctFieldsSchema = z
  .enum(['id', 'type', 'hours', 'rate', 'amount', 'paycheckId'])
  .array();

export const PaycheckTaxOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    taxAuthority: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean(),
  })
  .partial();

export const PaycheckTaxOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxOwnSelectFieldsSchema
);

export const PaycheckTaxDistinctFieldsSchema = z
  .enum(['id', 'paycheckId', 'taxAuthority', 'amount'])
  .array();

export const DeductionPolicyOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    type: z.boolean(),
    defaultAmount: z.boolean(),
    defaultPercent: z.boolean(),
    employeeDeductions: z.boolean(),
  })
  .partial();

export const DeductionPolicyOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicyOwnSelectFieldsSchema
);

export const DeductionPolicyDistinctFieldsSchema = z
  .enum(['id', 'name', 'type', 'defaultAmount', 'defaultPercent'])
  .array();

export const EmployeeDeductionOwnSelectFieldsSchema = z
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

export const EmployeeDeductionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionOwnSelectFieldsSchema
);

export const EmployeeDeductionDistinctFieldsSchema = z
  .enum(['id', 'employeeId', 'policyId', 'employeeAmount'])
  .array();

export const PaycheckDeductionOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    employeeDeductionId: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean(),
    employeeDeduction: z.boolean(),
  })
  .partial();

export const PaycheckDeductionOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionOwnSelectFieldsSchema
);

export const PaycheckDeductionDistinctFieldsSchema = z
  .enum(['id', 'paycheckId', 'employeeDeductionId', 'amount'])
  .array();

export const EmployeeTaxDataOwnSelectFieldsSchema = z
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

export const EmployeeTaxDataOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
    id: z.boolean(),
    taxDataId: z.boolean(),
    stateCode: z.boolean(),
    stateStatus: z.boolean(),
    allowances: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: z.boolean(),
  })
  .partial();

export const StateTaxWithholdingOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
    id: z.boolean(),
    taxDataId: z.boolean(),
    jurisdiction: z.boolean(),
    localStatus: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: z.boolean(),
  })
  .partial();

export const LocalTaxWithholdingOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingOwnSelectFieldsSchema
);

export const LocalTaxWithholdingDistinctFieldsSchema = z
  .enum(['id', 'taxDataId', 'jurisdiction', 'localStatus', 'extraWithholding'])
  .array();

export const PayrollRunOwnSelectFieldsSchema = z
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

export const PayrollRunOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunOwnSelectFieldsSchema
);

export const PayrollRunDistinctFieldsSchema = z
  .enum(['id', 'resolverId', 'startDate', 'endDate', 'payDate', 'status'])
  .array();

export const ContactOwnSelectFieldsSchema = z
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

export const ContactOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ContactOwnSelectFieldsSchema
);

export const ContactDistinctFieldsSchema = z.enum(['id', 'employeeId']).array();

export const CountryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean(),
  })
  .partial();

export const CountryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CountryOwnSelectFieldsSchema
);

export const CountryDistinctFieldsSchema = z
  .enum(['id', 'name', 'code'])
  .array();

export const StateOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    country: z.boolean(),
    addresses: z.boolean(),
  })
  .partial();

export const StateOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StateOwnSelectFieldsSchema
);

export const StateDistinctFieldsSchema = z
  .enum(['id', 'countryId', 'name', 'code'])
  .array();

export const AddressOwnSelectFieldsSchema = z
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

export const AddressOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AddressOwnSelectFieldsSchema
);

export const AddressDistinctFieldsSchema = z
  .enum(['id', 'type', 'contactId', 'stateId', 'street', 'zip', 'city'])
  .array();

export const EmailOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const EmailOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmailOwnSelectFieldsSchema
);

export const EmailDistinctFieldsSchema = z
  .enum(['id', 'type', 'contactId', 'email'])
  .array();

export const PhoneOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: z.boolean(),
    primary: z.boolean(),
  })
  .partial();

export const PhoneOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PhoneOwnSelectFieldsSchema
);

export const PhoneDistinctFieldsSchema = z
  .enum(['id', 'type', 'contactId', 'phone'])
  .array();

export const PrimaryEmailOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    emailId: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryEmailOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailOwnSelectFieldsSchema
);

export const PrimaryEmailDistinctFieldsSchema = z
  .enum(['id', 'emailId', 'contactId'])
  .array();

export const PrimaryPhoneOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    phoneId: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryPhoneOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneOwnSelectFieldsSchema
);

export const PrimaryPhoneDistinctFieldsSchema = z
  .enum(['id', 'phoneId', 'contactId'])
  .array();

export const PrimaryAddressOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    addressId: z.boolean(),
    contactId: z.boolean(),
    address: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PrimaryAddressOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
  EmployeeOwnWhereSchema
);

export const TeamOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const TeamOwnWhereSchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
  PayrollRunOwnWhereSchema
);

export const ContactOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ContactOwnWhereSchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
    distinct: PrimaryAddressDistinctFieldsSchema,
  })
  .partial();

export const PrimaryAddressOwnQuerySchema = z
  .object({
    where: PrimaryAddressOwnWhereSchemaJson,
    distinct: PrimaryAddressDistinctFieldsSchema,
  })
  .partial();

export const DepartmentCreateSchema = z
  .object({
    parentId: z.coerce.number().int().optional(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    isActive: z.boolean().optional(),
  })
  .transform(slugTransformer('name'));

export const DepartmentUpdateSchema = z
  .object({
    parentId: z.coerce.number().int().optional().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
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
  jsonParser,
  DepartmentWhereSchema
);

export const DepartmentSelectFieldsSchema = z
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

export const DepartmentSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DepartmentSelectFieldsSchema
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

export const DepartmentProjectionSchema = z
  .union([
    z
      .object({
        omit: DepartmentSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: DepartmentSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: DepartmentIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TitleCreateSchema = z
  .object({
    departmentId: z.coerce.number().int(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
    isActive: z.boolean().optional(),
  })
  .transform(slugTransformer('name'));

export const TitleUpdateSchema = z
  .object({
    departmentId: z.coerce.number().int().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
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

export const TitleWhereSchemaJson = z.preprocess(jsonParser, TitleWhereSchema);

export const TitleSelectFieldsSchema = z
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

export const TitleSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TitleSelectFieldsSchema
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

export const TitleProjectionSchema = z
  .union([
    z
      .object({
        omit: TitleSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TitleSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TitleIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PersonalDataCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  ein: z.string(),
  gender: GenderSchema,
  dob: dateSchema.clone(),
  maritalStatus: MaritalStatusSchema,
});

export const PersonalDataUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  ein: z.string().optional(),
  gender: GenderSchema.optional(),
  dob: dateSchema.clone().optional(),
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
  jsonParser,
  PersonalDataWhereSchema
);

export const PersonalDataSelectFieldsSchema = z
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

export const PersonalDataSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PersonalDataSelectFieldsSchema
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

export const PersonalDataProjectionSchema = z
  .union([
    z
      .object({
        omit: PersonalDataSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PersonalDataSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PersonalDataIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const EmployeeCreateSchema = z.object({
  titleId: z.coerce.number().int(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  preferedName: z.string().optional(),
  status: EmployeeStatusSchema.optional(),
  hireDate: dateSchema.clone().optional(),
  terminationDate: dateSchema.clone().optional(),
  employmentType: EmploymentTypeSchema,
  directManagerId: z.coerce.number().int().optional(),
});

export const EmployeeUpdateSchema = z.object({
  titleId: z.coerce.number().int().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional().optional(),
  lastName: z.string().optional(),
  preferedName: z.string().optional().optional(),
  status: EmployeeStatusSchema.optional().optional(),
  hireDate: dateSchema.clone().optional().optional(),
  terminationDate: dateSchema.clone().optional().optional(),
  employmentType: EmploymentTypeSchema.optional(),
  directManagerId: z.coerce.number().int().optional().optional(),
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
  jsonParser,
  EmployeeWhereSchema
);

export const EmployeeSelectFieldsSchema = z
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

export const EmployeeSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeSelectFieldsSchema
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

export const EmployeeProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: EmployeeSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: EmployeeIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TeamCreateSchema = z.object({
  name: nameSchema.clone(),
});

export const TeamUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
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

export const TeamWhereSchemaJson = z.preprocess(jsonParser, TeamWhereSchema);

export const TeamSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    members: z.boolean().or(TeamMemberOwnQuerySchema),
    managers: z.boolean().or(TeamManagerOwnQuerySchema),
  })
  .partial();

export const TeamSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamSelectFieldsSchema
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

export const TeamProjectionSchema = z
  .union([
    z
      .object({
        omit: TeamSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TeamSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TeamIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TeamManagerCreateSchema = z.object({
  teamId: z.coerce.number().int(),
  managerId: z.coerce.number().int(),
});

export const TeamManagerUpdateSchema = z.object({
  teamId: z.coerce.number().int().optional(),
  managerId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    managerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    team: TeamOwnWhereSchema,
    manager: EmployeeOwnWhereSchema,
  })
  .partial();

export const TeamManagerWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerWhereSchema
);

export const TeamManagerSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    managerId: z.boolean(),
    team: z.boolean().or(TeamOwnQueryOneSchema),
    manager: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerSelectFieldsSchema
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

export const TeamManagerProjectionSchema = z
  .union([
    z
      .object({
        omit: TeamManagerSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TeamManagerSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TeamManagerIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TeamMemberCreateSchema = z.object({
  teamId: z.coerce.number().int(),
  memberId: z.coerce.number().int(),
});

export const TeamMemberUpdateSchema = z.object({
  teamId: z.coerce.number().int().optional(),
  memberId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    memberId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    member: EmployeeOwnWhereSchema,
    team: TeamOwnWhereSchema,
  })
  .partial();

export const TeamMemberWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberWhereSchema
);

export const TeamMemberSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    memberId: z.boolean(),
    member: z.boolean().or(EmployeeOwnQueryOneSchema),
    team: z.boolean().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberSelectFieldsSchema
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

export const TeamMemberProjectionSchema = z
  .union([
    z
      .object({
        omit: TeamMemberSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TeamMemberSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TeamMemberIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const SalaryCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  gross: z.coerce.number(),
  startDate: dateSchema.clone(),
  endDate: dateSchema.clone().optional(),
  frequency: PayFrequencySchema,
});

export const SalaryUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  gross: z.coerce.number().optional(),
  startDate: dateSchema.clone().optional(),
  endDate: dateSchema.clone().optional().optional(),
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
  jsonParser,
  SalaryWhereSchema
);

export const SalarySelectFieldsSchema = z
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

export const SalarySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SalarySelectFieldsSchema
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

export const SalaryProjectionSchema = z
  .union([
    z
      .object({
        omit: SalarySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: SalarySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: SalaryIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const SalaryHistoryCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  oldSalary: z.coerce.number(),
  newSalary: z.coerce.number(),
  reason: z.string().optional(),
});

export const SalaryHistoryUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  oldSalary: z.coerce.number().optional(),
  newSalary: z.coerce.number().optional(),
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
  jsonParser,
  SalaryHistoryWhereSchema
);

export const SalaryHistorySelectFieldsSchema = z
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

export const SalaryHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SalaryHistorySelectFieldsSchema
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

export const SalaryHistoryProjectionSchema = z
  .union([
    z
      .object({
        omit: SalaryHistorySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: SalaryHistorySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: SalaryHistoryIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const BenefitCreateSchema = z.object({
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  type: z.string().optional(),
});

export const BenefitUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
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
  jsonParser,
  BenefitWhereSchema
);

export const BenefitSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    type: z.boolean(),
    enrolments: z.boolean().or(BenefitEnrolmentOwnQuerySchema),
  })
  .partial();

export const BenefitSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  BenefitSelectFieldsSchema
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

export const BenefitProjectionSchema = z
  .union([
    z
      .object({
        omit: BenefitSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: BenefitSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: BenefitIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const BenefitEnrolmentCreateSchema = z.object({
  benefitId: z.coerce.number().int(),
  employeeId: z.coerce.number().int(),
  startDate: dateSchema.clone(),
  status: BenefitStatusSchema.optional(),
});

export const BenefitEnrolmentUpdateSchema = z.object({
  benefitId: z.coerce.number().int().optional(),
  employeeId: z.coerce.number().int().optional(),
  startDate: dateSchema.clone().optional(),
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
  jsonParser,
  BenefitEnrolmentWhereSchema
);

export const BenefitEnrolmentSelectFieldsSchema = z
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

export const BenefitEnrolmentSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  BenefitEnrolmentSelectFieldsSchema
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

export const BenefitEnrolmentProjectionSchema = z
  .union([
    z
      .object({
        omit: BenefitEnrolmentSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: BenefitEnrolmentSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: BenefitEnrolmentIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TitleHistoryCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  titleId: z.coerce.number().int(),
  type: TitleChangeTypeSchema,
  reason: z.string().optional(),
  startDate: dateSchema.clone(),
  endDate: dateSchema.clone().optional(),
});

export const TitleHistoryUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  titleId: z.coerce.number().int().optional(),
  type: TitleChangeTypeSchema.optional(),
  reason: z.string().optional().optional(),
  startDate: dateSchema.clone().optional(),
  endDate: dateSchema.clone().optional().optional(),
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
  jsonParser,
  TitleHistoryWhereSchema
);

export const TitleHistorySelectFieldsSchema = z
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

export const TitleHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TitleHistorySelectFieldsSchema
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

export const TitleHistoryProjectionSchema = z
  .union([
    z
      .object({
        omit: TitleHistorySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TitleHistorySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TitleHistoryIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TimeOffPolicyCreateSchema = z.object({
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  accrualRate: z.coerce.number(),
  maxRollover: z.coerce.number(),
});

export const TimeOffPolicyUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
  accrualRate: z.coerce.number().optional(),
  maxRollover: z.coerce.number().optional(),
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
  jsonParser,
  TimeOffPolicyWhereSchema
);

export const TimeOffPolicySelectFieldsSchema = z
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

export const TimeOffPolicySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TimeOffPolicySelectFieldsSchema
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

export const TimeOffPolicyProjectionSchema = z
  .union([
    z
      .object({
        omit: TimeOffPolicySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TimeOffPolicySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TimeOffPolicyIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TimeOffBalanceCreateSchema = z.object({
  policyId: z.coerce.number().int(),
  employeeId: z.coerce.number().int(),
  accruedHours: z.coerce.number(),
  usedHours: z.coerce.number(),
  availableHours: z.coerce.number(),
});

export const TimeOffBalanceUpdateSchema = z.object({
  policyId: z.coerce.number().int().optional(),
  employeeId: z.coerce.number().int().optional(),
  accruedHours: z.coerce.number().optional(),
  usedHours: z.coerce.number().optional(),
  availableHours: z.coerce.number().optional(),
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
  jsonParser,
  TimeOffBalanceWhereSchema
);

export const TimeOffBalanceSelectFieldsSchema = z
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

export const TimeOffBalanceSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TimeOffBalanceSelectFieldsSchema
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

export const TimeOffBalanceProjectionSchema = z
  .union([
    z
      .object({
        omit: TimeOffBalanceSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TimeOffBalanceSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TimeOffBalanceIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TimeOffRequestCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  reason: z.string(),
  policyId: z.coerce.number().int(),
  resolverId: z.coerce.number().int().optional(),
  status: RequestStatusSchema.optional(),
  startDate: dateSchema.clone(),
  endDate: dateSchema.clone(),
});

export const TimeOffRequestUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  reason: z.string().optional(),
  policyId: z.coerce.number().int().optional(),
  resolverId: z.coerce.number().int().optional().optional(),
  status: RequestStatusSchema.optional().optional(),
  startDate: dateSchema.clone().optional(),
  endDate: dateSchema.clone().optional(),
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
  jsonParser,
  TimeOffRequestWhereSchema
);

export const TimeOffRequestSelectFieldsSchema = z
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

export const TimeOffRequestSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TimeOffRequestSelectFieldsSchema
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

export const TimeOffRequestProjectionSchema = z
  .union([
    z
      .object({
        omit: TimeOffRequestSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TimeOffRequestSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TimeOffRequestIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const TimeOffTransactionCreateSchema = z.object({
  type: TimeOffTransactionTypeSchema,
  balanceId: z.coerce.number().int(),
  requestId: z.coerce.number().int().optional(),
  amount: z.coerce.number(),
});

export const TimeOffTransactionUpdateSchema = z.object({
  type: TimeOffTransactionTypeSchema.optional(),
  balanceId: z.coerce.number().int().optional(),
  requestId: z.coerce.number().int().optional().optional(),
  amount: z.coerce.number().optional(),
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
  jsonParser,
  TimeOffTransactionWhereSchema
);

export const TimeOffTransactionSelectFieldsSchema = z
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

export const TimeOffTransactionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TimeOffTransactionSelectFieldsSchema
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

export const TimeOffTransactionProjectionSchema = z
  .union([
    z
      .object({
        omit: TimeOffTransactionSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: TimeOffTransactionSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: TimeOffTransactionIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const ClockInCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  clockOut: dateSchema.clone().optional(),
});

export const ClockInUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  clockOut: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    clockIn: z.string().or(PZ.DateTimeFilterSchema),
    clockOut: z.string().or(PZ.DateTimeFilterSchema),
    employee: EmployeeOwnWhereSchema,
  })
  .partial();

export const ClockInWhereSchemaJson = z.preprocess(
  jsonParser,
  ClockInWhereSchema
);

export const ClockInSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    employeeId: z.boolean(),
    clockIn: z.boolean(),
    clockOut: z.boolean(),
    employee: z.boolean().or(EmployeeOwnQueryOneSchema),
  })
  .partial();

export const ClockInSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ClockInSelectFieldsSchema
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

export const ClockInProjectionSchema = z
  .union([
    z
      .object({
        omit: ClockInSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: ClockInSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: ClockInIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PaycheckCreateSchema = z.object({
  payrollRunId: z.coerce.number().int(),
  employeeId: z.coerce.number().int(),
  grossAmount: z.coerce.number(),
  netAmount: z.coerce.number(),
});

export const PaycheckUpdateSchema = z.object({
  payrollRunId: z.coerce.number().int().optional(),
  employeeId: z.coerce.number().int().optional(),
  grossAmount: z.coerce.number().optional(),
  netAmount: z.coerce.number().optional(),
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
  jsonParser,
  PaycheckWhereSchema
);

export const PaycheckSelectFieldsSchema = z
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

export const PaycheckSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PaycheckSelectFieldsSchema
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

export const PaycheckProjectionSchema = z
  .union([
    z
      .object({
        omit: PaycheckSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PaycheckSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PaycheckIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const EarningCreateSchema = z.object({
  type: EarningTypeSchema,
  hours: z.coerce.number().optional(),
  rate: z.coerce.number(),
  amount: z.coerce.number(),
  paycheckId: z.coerce.number().int(),
});

export const EarningUpdateSchema = z.object({
  type: EarningTypeSchema.optional(),
  hours: z.coerce.number().optional().optional(),
  rate: z.coerce.number().optional(),
  amount: z.coerce.number().optional(),
  paycheckId: z.coerce.number().int().optional(),
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
  jsonParser,
  EarningWhereSchema
);

export const EarningSelectFieldsSchema = z
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

export const EarningSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EarningSelectFieldsSchema
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

export const EarningProjectionSchema = z
  .union([
    z
      .object({
        omit: EarningSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: EarningSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: EarningIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PaycheckTaxCreateSchema = z.object({
  paycheckId: z.coerce.number().int(),
  taxAuthority: z.string(),
  amount: z.coerce.number(),
});

export const PaycheckTaxUpdateSchema = z.object({
  paycheckId: z.coerce.number().int().optional(),
  taxAuthority: z.string().optional(),
  amount: z.coerce.number().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxAuthority: z.string().or(PZ.StringFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
    paycheck: PaycheckOwnWhereSchema,
  })
  .partial();

export const PaycheckTaxWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxWhereSchema
);

export const PaycheckTaxSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    taxAuthority: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
  })
  .partial();

export const PaycheckTaxSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PaycheckTaxSelectFieldsSchema
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

export const PaycheckTaxProjectionSchema = z
  .union([
    z
      .object({
        omit: PaycheckTaxSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PaycheckTaxSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PaycheckTaxIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const DeductionPolicyCreateSchema = z.object({
  name: nameSchema.clone(),
  type: DeductionTypeSchema,
  defaultAmount: z.coerce.number().optional(),
  defaultPercent: z.coerce.number().optional(),
});

export const DeductionPolicyUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  type: DeductionTypeSchema.optional(),
  defaultAmount: z.coerce.number().optional().optional(),
  defaultPercent: z.coerce.number().optional().optional(),
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
  jsonParser,
  DeductionPolicyWhereSchema
);

export const DeductionPolicySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    type: z.boolean(),
    defaultAmount: z.boolean(),
    defaultPercent: z.boolean(),
    employeeDeductions: z.boolean().or(EmployeeDeductionOwnQuerySchema),
  })
  .partial();

export const DeductionPolicySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DeductionPolicySelectFieldsSchema
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

export const DeductionPolicyProjectionSchema = z
  .union([
    z
      .object({
        omit: DeductionPolicySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: DeductionPolicySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: DeductionPolicyIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const EmployeeDeductionCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
  policyId: z.coerce.number().int(),
  employeeAmount: z.coerce.number().optional(),
});

export const EmployeeDeductionUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
  policyId: z.coerce.number().int().optional(),
  employeeAmount: z.coerce.number().optional().optional(),
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
  jsonParser,
  EmployeeDeductionWhereSchema
);

export const EmployeeDeductionSelectFieldsSchema = z
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

export const EmployeeDeductionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeDeductionSelectFieldsSchema
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

export const EmployeeDeductionProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeDeductionSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: EmployeeDeductionSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: EmployeeDeductionIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PaycheckDeductionCreateSchema = z.object({
  paycheckId: z.coerce.number().int(),
  employeeDeductionId: z.coerce.number().int(),
  amount: z.coerce.number(),
});

export const PaycheckDeductionUpdateSchema = z.object({
  paycheckId: z.coerce.number().int().optional(),
  employeeDeductionId: z.coerce.number().int().optional(),
  amount: z.coerce.number().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    paycheckId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    employeeDeductionId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    amount: z.coerce.number().or(PZ.NumberFilterSchema),
    paycheck: PaycheckOwnWhereSchema,
    employeeDeduction: EmployeeDeductionOwnWhereSchema,
  })
  .partial();

export const PaycheckDeductionWhereSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionWhereSchema
);

export const PaycheckDeductionSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    paycheckId: z.boolean(),
    employeeDeductionId: z.boolean(),
    amount: z.boolean(),
    paycheck: z.boolean().or(PaycheckOwnQueryOneSchema),
    employeeDeduction: z.boolean().or(EmployeeDeductionOwnQueryOneSchema),
  })
  .partial();

export const PaycheckDeductionSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PaycheckDeductionSelectFieldsSchema
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

export const PaycheckDeductionProjectionSchema = z
  .union([
    z
      .object({
        omit: PaycheckDeductionSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PaycheckDeductionSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PaycheckDeductionIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const EmployeeTaxDataCreateSchema = z.object({
  startDate: dateSchema.clone(),
  endDate: dateSchema.clone().optional(),
  employeeId: z.coerce.number().int(),
  federalStatus: TaxFilingStatusSchema.optional(),
  dependentsCredit: z.coerce.number().optional(),
  multipleJobs: z.boolean().optional(),
  otherIncome: z.coerce.number().optional(),
  deductionsAmount: z.coerce.number().optional(),
  extraWithholding: z.coerce.number().optional(),
  isExempt: z.boolean().optional(),
  isNonResidentAlien: z.boolean().optional(),
});

export const EmployeeTaxDataUpdateSchema = z.object({
  startDate: dateSchema.clone().optional(),
  endDate: dateSchema.clone().optional().optional(),
  employeeId: z.coerce.number().int().optional(),
  federalStatus: TaxFilingStatusSchema.optional().optional(),
  dependentsCredit: z.coerce.number().optional().optional(),
  multipleJobs: z.boolean().optional().optional(),
  otherIncome: z.coerce.number().optional().optional(),
  deductionsAmount: z.coerce.number().optional().optional(),
  extraWithholding: z.coerce.number().optional().optional(),
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
  jsonParser,
  EmployeeTaxDataWhereSchema
);

export const EmployeeTaxDataSelectFieldsSchema = z
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

export const EmployeeTaxDataSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmployeeTaxDataSelectFieldsSchema
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

export const EmployeeTaxDataProjectionSchema = z
  .union([
    z
      .object({
        omit: EmployeeTaxDataSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: EmployeeTaxDataSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: EmployeeTaxDataIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const StateTaxWithholdingCreateSchema = z.object({
  taxDataId: z.coerce.number().int(),
  stateCode: z.string(),
  stateStatus: z.string().optional(),
  allowances: z.coerce.number().int().optional(),
  extraWithholding: z.coerce.number().optional(),
});

export const StateTaxWithholdingUpdateSchema = z.object({
  taxDataId: z.coerce.number().int().optional(),
  stateCode: z.string().optional(),
  stateStatus: z.string().optional().optional(),
  allowances: z.coerce.number().int().optional().optional(),
  extraWithholding: z.coerce.number().optional().optional(),
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
  jsonParser,
  StateTaxWithholdingWhereSchema
);

export const StateTaxWithholdingSelectFieldsSchema = z
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

export const StateTaxWithholdingSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StateTaxWithholdingSelectFieldsSchema
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

export const StateTaxWithholdingProjectionSchema = z
  .union([
    z
      .object({
        omit: StateTaxWithholdingSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: StateTaxWithholdingSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: StateTaxWithholdingIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const LocalTaxWithholdingCreateSchema = z.object({
  taxDataId: z.coerce.number().int(),
  jurisdiction: z.string(),
  localStatus: z.string().optional(),
  extraWithholding: z.coerce.number().optional(),
});

export const LocalTaxWithholdingUpdateSchema = z.object({
  taxDataId: z.coerce.number().int().optional(),
  jurisdiction: z.string().optional(),
  localStatus: z.string().optional().optional(),
  extraWithholding: z.coerce.number().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taxDataId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    jurisdiction: z.string().or(PZ.StringFilterSchema),
    localStatus: z.string().or(PZ.StringFilterSchema),
    extraWithholding: z.coerce.number().or(PZ.NumberFilterSchema),
    taxData: EmployeeTaxDataOwnWhereSchema,
  })
  .partial();

export const LocalTaxWithholdingWhereSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingWhereSchema
);

export const LocalTaxWithholdingSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    taxDataId: z.boolean(),
    jurisdiction: z.boolean(),
    localStatus: z.boolean(),
    extraWithholding: z.boolean(),
    taxData: z.boolean().or(EmployeeTaxDataOwnQueryOneSchema),
  })
  .partial();

export const LocalTaxWithholdingSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  LocalTaxWithholdingSelectFieldsSchema
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

export const LocalTaxWithholdingProjectionSchema = z
  .union([
    z
      .object({
        omit: LocalTaxWithholdingSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: LocalTaxWithholdingSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: LocalTaxWithholdingIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PayrollRunCreateSchema = z.object({
  resolverId: z.coerce.number().int(),
  startDate: dateSchema.clone(),
  endDate: dateSchema.clone(),
  payDate: dateSchema.clone(),
  status: PayrollStatusSchema.optional(),
});

export const PayrollRunUpdateSchema = z.object({
  resolverId: z.coerce.number().int().optional(),
  startDate: dateSchema.clone().optional(),
  endDate: dateSchema.clone().optional(),
  payDate: dateSchema.clone().optional(),
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
  jsonParser,
  PayrollRunWhereSchema
);

export const PayrollRunSelectFieldsSchema = z
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

export const PayrollRunSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PayrollRunSelectFieldsSchema
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

export const PayrollRunProjectionSchema = z
  .union([
    z
      .object({
        omit: PayrollRunSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PayrollRunSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PayrollRunIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const ContactCreateSchema = z.object({
  employeeId: z.coerce.number().int(),
});

export const ContactUpdateSchema = z.object({
  employeeId: z.coerce.number().int().optional(),
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
  jsonParser,
  ContactWhereSchema
);

export const ContactSelectFieldsSchema = z
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

export const ContactSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ContactSelectFieldsSchema
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

export const ContactProjectionSchema = z
  .union([
    z
      .object({
        omit: ContactSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: ContactSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: ContactIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const CountryCreateSchema = z.object({
  name: nameSchema.clone(),
  code: z.string(),
});

export const CountryUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
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
  jsonParser,
  CountryWhereSchema
);

export const CountrySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean().or(StateOwnQuerySchema),
  })
  .partial();

export const CountrySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CountrySelectFieldsSchema
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

export const CountryProjectionSchema = z
  .union([
    z
      .object({
        omit: CountrySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: CountrySelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: CountryIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const StateCreateSchema = z.object({
  countryId: z.coerce.number().int(),
  name: nameSchema.clone(),
  code: z.string(),
});

export const StateUpdateSchema = z.object({
  countryId: z.coerce.number().int().optional(),
  name: nameSchema.clone().optional(),
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

export const StateWhereSchemaJson = z.preprocess(jsonParser, StateWhereSchema);

export const StateSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    country: z.boolean().or(CountryOwnQueryOneSchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
  })
  .partial();

export const StateSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StateSelectFieldsSchema
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

export const StateProjectionSchema = z
  .union([
    z
      .object({
        omit: StateSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: StateSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: StateIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const AddressCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: z.coerce.number().int(),
  stateId: z.coerce.number().int(),
  street: z.string(),
  zip: z.string(),
  city: z.string(),
});

export const AddressUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: z.coerce.number().int().optional(),
  stateId: z.coerce.number().int().optional(),
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
  jsonParser,
  AddressWhereSchema
);

export const AddressSelectFieldsSchema = z
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

export const AddressSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AddressSelectFieldsSchema
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

export const AddressProjectionSchema = z
  .union([
    z
      .object({
        omit: AddressSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: AddressSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: AddressIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const EmailCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: z.coerce.number().int(),
  email: emailSchema.clone(),
});

export const EmailUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: z.coerce.number().int().optional(),
  email: emailSchema.clone().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    email: z.string().or(PZ.StringFilterSchema),
    contact: ContactOwnWhereSchema,
    primary: PrimaryEmailOwnWhereSchema,
  })
  .partial();

export const EmailWhereSchemaJson = z.preprocess(jsonParser, EmailWhereSchema);

export const EmailSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryEmailOwnQueryOneSchema),
  })
  .partial();

export const EmailSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmailSelectFieldsSchema
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

export const EmailProjectionSchema = z
  .union([
    z
      .object({
        omit: EmailSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: EmailSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: EmailIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PhoneCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: z.coerce.number().int(),
  phone: z.string(),
});

export const PhoneUpdateSchema = z.object({
  type: ContactTypeSchema.optional(),
  contactId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phone: z.string().or(PZ.StringFilterSchema),
    contact: ContactOwnWhereSchema,
    primary: PrimaryPhoneOwnWhereSchema,
  })
  .partial();

export const PhoneWhereSchemaJson = z.preprocess(jsonParser, PhoneWhereSchema);

export const PhoneSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    type: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
    primary: z.boolean().or(PrimaryPhoneOwnQueryOneSchema),
  })
  .partial();

export const PhoneSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PhoneSelectFieldsSchema
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

export const PhoneProjectionSchema = z
  .union([
    z
      .object({
        omit: PhoneSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PhoneSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PhoneIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PrimaryEmailCreateSchema = z.object({
  emailId: z.coerce.number().int(),
  contactId: z.coerce.number().int(),
});

export const PrimaryEmailUpdateSchema = z.object({
  emailId: z.coerce.number().int().optional(),
  contactId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    emailId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    email: EmailOwnWhereSchema,
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const PrimaryEmailWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailWhereSchema
);

export const PrimaryEmailSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    emailId: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean().or(EmailOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryEmailSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PrimaryEmailSelectFieldsSchema
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

export const PrimaryEmailProjectionSchema = z
  .union([
    z
      .object({
        omit: PrimaryEmailSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PrimaryEmailSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PrimaryEmailIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PrimaryPhoneCreateSchema = z.object({
  phoneId: z.coerce.number().int(),
  contactId: z.coerce.number().int(),
});

export const PrimaryPhoneUpdateSchema = z.object({
  phoneId: z.coerce.number().int().optional(),
  contactId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phoneId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phone: PhoneOwnWhereSchema,
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const PrimaryPhoneWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneWhereSchema
);

export const PrimaryPhoneSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    phoneId: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean().or(PhoneOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryPhoneSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PrimaryPhoneSelectFieldsSchema
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

export const PrimaryPhoneProjectionSchema = z
  .union([
    z
      .object({
        omit: PrimaryPhoneSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PrimaryPhoneSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PrimaryPhoneIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

export const PrimaryAddressCreateSchema = z.object({
  addressId: z.coerce.number().int(),
  contactId: z.coerce.number().int(),
});

export const PrimaryAddressUpdateSchema = z.object({
  addressId: z.coerce.number().int().optional(),
  contactId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    addressId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    address: AddressOwnWhereSchema,
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const PrimaryAddressWhereSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressWhereSchema
);

export const PrimaryAddressSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    addressId: z.boolean(),
    contactId: z.boolean(),
    address: z.boolean().or(AddressOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PrimaryAddressSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PrimaryAddressSelectFieldsSchema
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

export const PrimaryAddressProjectionSchema = z
  .union([
    z
      .object({
        omit: PrimaryAddressSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        select: PrimaryAddressSelectFieldsSchemaJson,
      })
      .partial(),
    z
      .object({
        include: PrimaryAddressIncludeSchemaJson,
      })
      .partial(),
  ])
  .optional();

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

export type PrimaryAddressSelectFields = z.infer<
  typeof PrimaryAddressSelectFieldsSchema
>;

export type PrimaryAddressProjection = z.infer<
  typeof PrimaryAddressProjectionSchema
>;
