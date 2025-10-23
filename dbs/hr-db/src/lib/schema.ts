import z from "zod";

export const _int = z.coerce.number().int();

export const _str = z.string();

export const _num = z.coerce.number();

export const _bool = z.coerce.boolean();

export const _date = z.iso.datetime();

export const _shortText = z.string().max(30);

export const _longText = z.string().max(2000);

export const _id = z.coerce.number().int().min(1);

export const _currency = z.coerce.number().min(0);

export const _positiveInt = z.coerce.number().int().min(0);

export const _name = z.string().min(3).max(30);

export const _slug = z
  .string()
  .min(3)
  .max(30)
  .regex(/[0-9a-z-]{0,30}/, {
    error: "Slug must contain only lowercase letters, numbers, and dash.",
  });

export const _description = z.string().max(1000);

export const _email = z.string().max(1000);

export const _phone = z
  .string()
  .regex(/^[0-9]{3} [0-9]{3} [0-9]{2}-[0-9]{2}$/, {
    error: "Invalid phone format",
  });

export const _url = z.url();

export const _password = z
  .string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: "must contain at least one upper-case letter" })
  .regex(/[a-z]{1,}/, { error: "must contain at least one lower-case letter" })
  .regex(/[0-9]{1,}/, { error: "must contain at least one number" })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
    error: "must contain at least one special character",
  });

export const _select = z.coerce.boolean().optional();

export const _direction = z.enum(["asc", "desc"]).optional();

export const _orderByCount = z.object({ _count: _direction }).optional();

export const _take = _int.min(1).default(20).optional();

export const _skip = _int.min(0).optional();

export const _json = z.preprocess((value) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value;
}, z.any());

export const _jsonPreprocessor = (value: unknown) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
};

export const _0_boolFilter = z.object({
  equals: _bool.optional(),
});

export const _1_boolFilter = z.object({
  equals: _bool.optional(),
  not: _bool.or(_0_boolFilter).optional(),
});

export const _boolFilter = _bool.or(_1_boolFilter);

export const _0_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
});

export const _1_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
  not: _0_intFilter.optional(),
});

export const _intFilter = _int.or(_1_intFilter);

export const _0_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
});

export const _1_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
  not: _0_numFilter.optional(),
});

export const _numFilter = _num.or(_1_numFilter);

export const _0_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
});

export const _1_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
  not: _0_dateFilter.optional(),
});

export const _dateFilter = _date.or(_1_dateFilter);

export const _strMode = z.enum(["default", "insensitive"]);

export const _0_strFilter = z.object({
  contains: _str.optional(),
  endsWith: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  startsWith: _str.optional(),
  in: _str.array().optional(),
  notIn: _str.array().optional(),
  mode: _strMode.optional(),
});

export const _1_strFilter = z.object({
  contains: _str.optional(),
  endsWith: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  startsWith: _str.optional(),
  in: _str.array().optional(),
  notIn: _str.array().optional(),
  mode: _strMode.optional(),
  not: _str.or(_0_strFilter).optional(),
});

export const _strFilter = _str.or(_1_strFilter);

export const _jsonFilter = z.object({
  path: _str.array().optional(),
  array_contains: _str.optional(),
  array_ends_with: _str.optional(),
  array_starts_with: _str.optional(),
  equals: _str.optional(),
  gt: _str.optional(),
  gte: _str.optional(),
  lt: _str.optional(),
  lte: _str.optional(),
  mode: _strMode,
  string_contains: _str.optional(),
  string_ends_with: _str.optional(),
  string_starts_with: _str.optional(),
  not: _str.optional(),
});

export const _strArrayFilter = z.object({
  equals: _str.array().optional(),
  has: _str.optional(),
  hasEvery: _str.array().optional(),
  hasSome: _str.array().optional(),
  isEmpty: _bool.optional(),
});

export const _numArrayFilter = z.object({
  equals: _num.array().optional(),
  has: _num.optional(),
  hasEvery: _num.array().optional(),
  hasSome: _num.array().optional(),
  isEmpty: _bool.optional(),
});

export const _intArrayFilter = z.object({
  equals: _int.array().optional(),
  has: _int.optional(),
  hasEvery: _int.array().optional(),
  hasSome: _int.array().optional(),
  isEmpty: _bool.optional(),
});

export const _dateArrayFilter = z.object({
  equals: _date.array().optional(),
  has: _date.optional(),
  hasEvery: _date.array().optional(),
  hasSome: _date.array().optional(),
  isEmpty: _bool.optional(),
});

export const ContactTypeSchema = z.enum([
  "RESIDENCE_ADDRESS",
  "WORK",
  "EMERGENCY",
  "OTHER",
]);

export const __ContactTypeFilterSchema = z.object({
  equals: ContactTypeSchema.optional(),
  in: ContactTypeSchema.array().optional(),
  notIn: ContactTypeSchema.array().optional(),
});
export const ContactTypeFilterSchema = z.object({
  equals: ContactTypeSchema.optional(),
  in: ContactTypeSchema.array().optional(),
  notIn: ContactTypeSchema.array().optional(),
  not: ContactTypeSchema.or(__ContactTypeFilterSchema).optional(),
});

export const ContactTypeArrayFilterSchema = z.object({
  equals: ContactTypeSchema.array().optional(),
  has: ContactTypeSchema.optional(),
  hasEvery: ContactTypeSchema.array().optional(),
  hasSome: ContactTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const GenderSchema = z.enum(["MALE", "FEMALE", "OTHER"]);

export const __GenderFilterSchema = z.object({
  equals: GenderSchema.optional(),
  in: GenderSchema.array().optional(),
  notIn: GenderSchema.array().optional(),
});
export const GenderFilterSchema = z.object({
  equals: GenderSchema.optional(),
  in: GenderSchema.array().optional(),
  notIn: GenderSchema.array().optional(),
  not: GenderSchema.or(__GenderFilterSchema).optional(),
});

export const GenderArrayFilterSchema = z.object({
  equals: GenderSchema.array().optional(),
  has: GenderSchema.optional(),
  hasEvery: GenderSchema.array().optional(),
  hasSome: GenderSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const MaritalStatusSchema = z.enum(["SINGLE", "MARRIED"]);

export const __MaritalStatusFilterSchema = z.object({
  equals: MaritalStatusSchema.optional(),
  in: MaritalStatusSchema.array().optional(),
  notIn: MaritalStatusSchema.array().optional(),
});
export const MaritalStatusFilterSchema = z.object({
  equals: MaritalStatusSchema.optional(),
  in: MaritalStatusSchema.array().optional(),
  notIn: MaritalStatusSchema.array().optional(),
  not: MaritalStatusSchema.or(__MaritalStatusFilterSchema).optional(),
});

export const MaritalStatusArrayFilterSchema = z.object({
  equals: MaritalStatusSchema.array().optional(),
  has: MaritalStatusSchema.optional(),
  hasEvery: MaritalStatusSchema.array().optional(),
  hasSome: MaritalStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const TaxFilingStatusSchema = z.enum([
  "SINGLE",
  "MARRIED_FILING_JOINTLY",
  "MARRIED_FILING_SEPARATELY",
  "HEAD_OF_HOUSEHOLD",
  "QUALIFYING_WIDOW",
]);

export const __TaxFilingStatusFilterSchema = z.object({
  equals: TaxFilingStatusSchema.optional(),
  in: TaxFilingStatusSchema.array().optional(),
  notIn: TaxFilingStatusSchema.array().optional(),
});
export const TaxFilingStatusFilterSchema = z.object({
  equals: TaxFilingStatusSchema.optional(),
  in: TaxFilingStatusSchema.array().optional(),
  notIn: TaxFilingStatusSchema.array().optional(),
  not: TaxFilingStatusSchema.or(__TaxFilingStatusFilterSchema).optional(),
});

export const TaxFilingStatusArrayFilterSchema = z.object({
  equals: TaxFilingStatusSchema.array().optional(),
  has: TaxFilingStatusSchema.optional(),
  hasEvery: TaxFilingStatusSchema.array().optional(),
  hasSome: TaxFilingStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const DeductionTypeSchema = z.enum([
  "STATUTORY_PRE_TAX",
  "NON_STATUTORY_PRE_TAX",
  "POST_TAX",
  "GARNISHMENT",
]);

export const __DeductionTypeFilterSchema = z.object({
  equals: DeductionTypeSchema.optional(),
  in: DeductionTypeSchema.array().optional(),
  notIn: DeductionTypeSchema.array().optional(),
});
export const DeductionTypeFilterSchema = z.object({
  equals: DeductionTypeSchema.optional(),
  in: DeductionTypeSchema.array().optional(),
  notIn: DeductionTypeSchema.array().optional(),
  not: DeductionTypeSchema.or(__DeductionTypeFilterSchema).optional(),
});

export const DeductionTypeArrayFilterSchema = z.object({
  equals: DeductionTypeSchema.array().optional(),
  has: DeductionTypeSchema.optional(),
  hasEvery: DeductionTypeSchema.array().optional(),
  hasSome: DeductionTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const EmployeeStatusSchema = z.enum([
  "INCOMMING",
  "ACTIVE",
  "INACTIVE",
  "LEFT",
  "TERMINATED",
]);

export const __EmployeeStatusFilterSchema = z.object({
  equals: EmployeeStatusSchema.optional(),
  in: EmployeeStatusSchema.array().optional(),
  notIn: EmployeeStatusSchema.array().optional(),
});
export const EmployeeStatusFilterSchema = z.object({
  equals: EmployeeStatusSchema.optional(),
  in: EmployeeStatusSchema.array().optional(),
  notIn: EmployeeStatusSchema.array().optional(),
  not: EmployeeStatusSchema.or(__EmployeeStatusFilterSchema).optional(),
});

export const EmployeeStatusArrayFilterSchema = z.object({
  equals: EmployeeStatusSchema.array().optional(),
  has: EmployeeStatusSchema.optional(),
  hasEvery: EmployeeStatusSchema.array().optional(),
  hasSome: EmployeeStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const EmploymentTypeSchema = z.enum([
  "FULL_TIME",
  "PART_TIME",
  "CONTRACTOR",
  "INTERN",
]);

export const __EmploymentTypeFilterSchema = z.object({
  equals: EmploymentTypeSchema.optional(),
  in: EmploymentTypeSchema.array().optional(),
  notIn: EmploymentTypeSchema.array().optional(),
});
export const EmploymentTypeFilterSchema = z.object({
  equals: EmploymentTypeSchema.optional(),
  in: EmploymentTypeSchema.array().optional(),
  notIn: EmploymentTypeSchema.array().optional(),
  not: EmploymentTypeSchema.or(__EmploymentTypeFilterSchema).optional(),
});

export const EmploymentTypeArrayFilterSchema = z.object({
  equals: EmploymentTypeSchema.array().optional(),
  has: EmploymentTypeSchema.optional(),
  hasEvery: EmploymentTypeSchema.array().optional(),
  hasSome: EmploymentTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const PayFrequencySchema = z.enum([
  "ANNUAL",
  "MONTHLY",
  "BI_WEEKLY",
  "WEEKLY",
  "HOURLY",
]);

export const __PayFrequencyFilterSchema = z.object({
  equals: PayFrequencySchema.optional(),
  in: PayFrequencySchema.array().optional(),
  notIn: PayFrequencySchema.array().optional(),
});
export const PayFrequencyFilterSchema = z.object({
  equals: PayFrequencySchema.optional(),
  in: PayFrequencySchema.array().optional(),
  notIn: PayFrequencySchema.array().optional(),
  not: PayFrequencySchema.or(__PayFrequencyFilterSchema).optional(),
});

export const PayFrequencyArrayFilterSchema = z.object({
  equals: PayFrequencySchema.array().optional(),
  has: PayFrequencySchema.optional(),
  hasEvery: PayFrequencySchema.array().optional(),
  hasSome: PayFrequencySchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const TitleChangeTypeSchema = z.enum(["PROMOTION", "TRANSFER", "OTHER"]);

export const __TitleChangeTypeFilterSchema = z.object({
  equals: TitleChangeTypeSchema.optional(),
  in: TitleChangeTypeSchema.array().optional(),
  notIn: TitleChangeTypeSchema.array().optional(),
});
export const TitleChangeTypeFilterSchema = z.object({
  equals: TitleChangeTypeSchema.optional(),
  in: TitleChangeTypeSchema.array().optional(),
  notIn: TitleChangeTypeSchema.array().optional(),
  not: TitleChangeTypeSchema.or(__TitleChangeTypeFilterSchema).optional(),
});

export const TitleChangeTypeArrayFilterSchema = z.object({
  equals: TitleChangeTypeSchema.array().optional(),
  has: TitleChangeTypeSchema.optional(),
  hasEvery: TitleChangeTypeSchema.array().optional(),
  hasSome: TitleChangeTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const RequestStatusSchema = z.enum([
  "PENDING",
  "APPROVED",
  "REJECTED",
  "CANCELED",
]);

export const __RequestStatusFilterSchema = z.object({
  equals: RequestStatusSchema.optional(),
  in: RequestStatusSchema.array().optional(),
  notIn: RequestStatusSchema.array().optional(),
});
export const RequestStatusFilterSchema = z.object({
  equals: RequestStatusSchema.optional(),
  in: RequestStatusSchema.array().optional(),
  notIn: RequestStatusSchema.array().optional(),
  not: RequestStatusSchema.or(__RequestStatusFilterSchema).optional(),
});

export const RequestStatusArrayFilterSchema = z.object({
  equals: RequestStatusSchema.array().optional(),
  has: RequestStatusSchema.optional(),
  hasEvery: RequestStatusSchema.array().optional(),
  hasSome: RequestStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const BenefitStatusSchema = z.enum([
  "ACTIVE",
  "PENDING",
  "AWAITING_EOI",
  "WAIVED",
  "ENROLLED",
]);

export const __BenefitStatusFilterSchema = z.object({
  equals: BenefitStatusSchema.optional(),
  in: BenefitStatusSchema.array().optional(),
  notIn: BenefitStatusSchema.array().optional(),
});
export const BenefitStatusFilterSchema = z.object({
  equals: BenefitStatusSchema.optional(),
  in: BenefitStatusSchema.array().optional(),
  notIn: BenefitStatusSchema.array().optional(),
  not: BenefitStatusSchema.or(__BenefitStatusFilterSchema).optional(),
});

export const BenefitStatusArrayFilterSchema = z.object({
  equals: BenefitStatusSchema.array().optional(),
  has: BenefitStatusSchema.optional(),
  hasEvery: BenefitStatusSchema.array().optional(),
  hasSome: BenefitStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const PayrollStatusSchema = z.enum([
  "DRAFT",
  "CALCULATED",
  "APPROVED",
  "PAID",
  "CLOSED",
]);

export const __PayrollStatusFilterSchema = z.object({
  equals: PayrollStatusSchema.optional(),
  in: PayrollStatusSchema.array().optional(),
  notIn: PayrollStatusSchema.array().optional(),
});
export const PayrollStatusFilterSchema = z.object({
  equals: PayrollStatusSchema.optional(),
  in: PayrollStatusSchema.array().optional(),
  notIn: PayrollStatusSchema.array().optional(),
  not: PayrollStatusSchema.or(__PayrollStatusFilterSchema).optional(),
});

export const PayrollStatusArrayFilterSchema = z.object({
  equals: PayrollStatusSchema.array().optional(),
  has: PayrollStatusSchema.optional(),
  hasEvery: PayrollStatusSchema.array().optional(),
  hasSome: PayrollStatusSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const TimeOffTransactionTypeSchema = z.enum([
  "ACCRUAL",
  "USED_REQUEST",
  "ROLLOVER",
  "ADJUSTMENT",
  "OTHER",
]);

export const __TimeOffTransactionTypeFilterSchema = z.object({
  equals: TimeOffTransactionTypeSchema.optional(),
  in: TimeOffTransactionTypeSchema.array().optional(),
  notIn: TimeOffTransactionTypeSchema.array().optional(),
});
export const TimeOffTransactionTypeFilterSchema = z.object({
  equals: TimeOffTransactionTypeSchema.optional(),
  in: TimeOffTransactionTypeSchema.array().optional(),
  notIn: TimeOffTransactionTypeSchema.array().optional(),
  not: TimeOffTransactionTypeSchema.or(
    __TimeOffTransactionTypeFilterSchema
  ).optional(),
});

export const TimeOffTransactionTypeArrayFilterSchema = z.object({
  equals: TimeOffTransactionTypeSchema.array().optional(),
  has: TimeOffTransactionTypeSchema.optional(),
  hasEvery: TimeOffTransactionTypeSchema.array().optional(),
  hasSome: TimeOffTransactionTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const EarningTypeSchema = z.enum([
  "REGULAR",
  "BONUS",
  "OVERTIME",
  "OTHER",
]);

export const __EarningTypeFilterSchema = z.object({
  equals: EarningTypeSchema.optional(),
  in: EarningTypeSchema.array().optional(),
  notIn: EarningTypeSchema.array().optional(),
});
export const EarningTypeFilterSchema = z.object({
  equals: EarningTypeSchema.optional(),
  in: EarningTypeSchema.array().optional(),
  notIn: EarningTypeSchema.array().optional(),
  not: EarningTypeSchema.or(__EarningTypeFilterSchema).optional(),
});

export const EarningTypeArrayFilterSchema = z.object({
  equals: EarningTypeSchema.array().optional(),
  has: EarningTypeSchema.optional(),
  hasEvery: EarningTypeSchema.array().optional(),
  hasSome: EarningTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const DepartmentDistinctSchema = z
  .enum(["id", "parentId", "name", "slug", "isActive"])
  .array()
  .optional();

export const TitleDistinctSchema = z
  .enum(["id", "departmentId", "name", "slug", "description", "isActive"])
  .array()
  .optional();

export const PersonalDataDistinctSchema = z
  .enum(["id", "employeeId", "ein", "gender", "dob", "maritalStatus"])
  .array()
  .optional();

export const EmployeeDistinctSchema = z
  .enum([
    "id",
    "uuid",
    "titleId",
    "firstName",
    "middleName",
    "lastName",
    "preferedName",
    "status",
    "hireDate",
    "terminationDate",
    "employmentType",
    "directManagerId",
  ])
  .array()
  .optional();

export const TeamDistinctSchema = z.enum(["id", "name"]).array().optional();

export const TeamManagerDistinctSchema = z
  .enum(["id", "teamId", "managerId"])
  .array()
  .optional();

export const TeamMemberDistinctSchema = z
  .enum(["id", "teamId", "memberId"])
  .array()
  .optional();

export const SalaryDistinctSchema = z
  .enum(["id", "employeeId", "gross", "startDate", "endDate", "frequency"])
  .array()
  .optional();

export const SalaryHistoryDistinctSchema = z
  .enum(["id", "employeeId", "createdAt", "oldSalary", "newSalary", "reason"])
  .array()
  .optional();

export const BenefitDistinctSchema = z
  .enum(["id", "name", "description", "type"])
  .array()
  .optional();

export const BenefitEnrolmentDistinctSchema = z
  .enum(["id", "benefitId", "employeeId", "startDate", "status"])
  .array()
  .optional();

export const TitleHistoryDistinctSchema = z
  .enum([
    "id",
    "employeeId",
    "titleId",
    "type",
    "reason",
    "startDate",
    "endDate",
  ])
  .array()
  .optional();

export const TimeOffPolicyDistinctSchema = z
  .enum(["id", "name", "description", "accrualRate", "maxRollover"])
  .array()
  .optional();

export const TimeOffBalanceDistinctSchema = z
  .enum([
    "id",
    "policyId",
    "employeeId",
    "accruedHours",
    "usedHours",
    "availableHours",
  ])
  .array()
  .optional();

export const TimeOffRequestDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "employeeId",
    "reason",
    "policyId",
    "resolverId",
    "status",
    "startDate",
    "endDate",
  ])
  .array()
  .optional();

export const TimeOffTransactionDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "updatedAt",
    "type",
    "balanceId",
    "requestId",
    "amount",
  ])
  .array()
  .optional();

export const ClockInDistinctSchema = z
  .enum(["id", "employeeId", "clockIn", "clockOut"])
  .array()
  .optional();

export const PaycheckDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "payrollRunId",
    "updatedAt",
    "employeeId",
    "grossAmount",
    "netAmount",
  ])
  .array()
  .optional();

export const EarningDistinctSchema = z
  .enum(["id", "type", "hours", "rate", "amount", "paycheckId"])
  .array()
  .optional();

export const PaycheckTaxDistinctSchema = z
  .enum(["id", "paycheckId", "taxAuthority", "amount"])
  .array()
  .optional();

export const DeductionPolicyDistinctSchema = z
  .enum(["id", "name", "type", "defaultAmount", "defaultPercent"])
  .array()
  .optional();

export const EmployeeDeductionDistinctSchema = z
  .enum(["id", "employeeId", "policyId", "employeeAmount"])
  .array()
  .optional();

export const PaycheckDeductionDistinctSchema = z
  .enum(["id", "paycheckId", "employeeDeductionId", "amount"])
  .array()
  .optional();

export const EmployeeTaxDataDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "updatedAt",
    "startDate",
    "endDate",
    "employeeId",
    "federalStatus",
    "dependentsCredit",
    "multipleJobs",
    "otherIncome",
    "deductionsAmount",
    "extraWithholding",
    "isExempt",
    "isNonResidentAlien",
  ])
  .array()
  .optional();

export const StateTaxWithholdingDistinctSchema = z
  .enum([
    "id",
    "taxDataId",
    "stateCode",
    "stateStatus",
    "allowances",
    "extraWithholding",
  ])
  .array()
  .optional();

export const LocalTaxWithholdingDistinctSchema = z
  .enum(["id", "taxDataId", "jurisdiction", "localStatus", "extraWithholding"])
  .array()
  .optional();

export const PayrollRunDistinctSchema = z
  .enum(["id", "resolverId", "startDate", "endDate", "payDate", "status"])
  .array()
  .optional();

export const ContactDistinctSchema = z
  .enum(["id", "employeeId"])
  .array()
  .optional();

export const CountryDistinctSchema = z
  .enum(["id", "name", "code"])
  .array()
  .optional();

export const StateDistinctSchema = z
  .enum(["id", "countryId", "name", "code"])
  .array()
  .optional();

export const AddressDistinctSchema = z
  .enum(["id", "type", "contactId", "stateId", "street", "zip", "city"])
  .array()
  .optional();

export const EmailDistinctSchema = z
  .enum(["id", "type", "contactId", "email"])
  .array()
  .optional();

export const PhoneDistinctSchema = z
  .enum(["id", "type", "contactId", "phone"])
  .array()
  .optional();

export const PrimaryEmailDistinctSchema = z
  .enum(["id", "emailId", "contactId"])
  .array()
  .optional();

export const PrimaryPhoneDistinctSchema = z
  .enum(["id", "phoneId", "contactId"])
  .array()
  .optional();

export const PrimaryAddressDistinctSchema = z
  .enum(["id", "addressId", "contactId"])
  .array()
  .optional();

export const DepartmentOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  isActive: _boolFilter.optional(),
});

export const TitleOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  departmentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  isActive: _boolFilter.optional(),
});

export const PersonalDataOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  ein: _strFilter.optional(),
  gender: GenderFilterSchema.optional(),
  dob: _dateFilter.optional(),
  maritalStatus: MaritalStatusFilterSchema.optional(),
});

export const EmployeeOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  titleId: _intFilter.optional(),
  firstName: _strFilter.optional(),
  middleName: _strFilter.optional(),
  lastName: _strFilter.optional(),
  preferedName: _strFilter.optional(),
  status: EmployeeStatusFilterSchema.optional(),
  hireDate: _dateFilter.optional(),
  terminationDate: _dateFilter.optional(),
  employmentType: EmploymentTypeFilterSchema.optional(),
  directManagerId: _intFilter.optional(),
});

export const TeamOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const TeamManagerOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  teamId: _intFilter.optional(),
  managerId: _intFilter.optional(),
});

export const TeamMemberOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  teamId: _intFilter.optional(),
  memberId: _intFilter.optional(),
});

export const SalaryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  gross: _numFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  frequency: PayFrequencyFilterSchema.optional(),
});

export const SalaryHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  oldSalary: _numFilter.optional(),
  newSalary: _numFilter.optional(),
  reason: _strFilter.optional(),
});

export const BenefitOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  type: _strFilter.optional(),
});

export const BenefitEnrolmentOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  benefitId: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  startDate: _dateFilter.optional(),
  status: BenefitStatusFilterSchema.optional(),
});

export const TitleHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  titleId: _intFilter.optional(),
  type: TitleChangeTypeFilterSchema.optional(),
  reason: _strFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
});

export const TimeOffPolicyOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  accrualRate: _numFilter.optional(),
  maxRollover: _numFilter.optional(),
});

export const TimeOffBalanceOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  policyId: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  accruedHours: _numFilter.optional(),
  usedHours: _numFilter.optional(),
  availableHours: _numFilter.optional(),
});

export const TimeOffRequestOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  employeeId: _intFilter.optional(),
  reason: _strFilter.optional(),
  policyId: _intFilter.optional(),
  resolverId: _intFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
});

export const TimeOffTransactionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  type: TimeOffTransactionTypeFilterSchema.optional(),
  balanceId: _intFilter.optional(),
  requestId: _intFilter.optional(),
  amount: _numFilter.optional(),
});

export const ClockInOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  clockIn: _dateFilter.optional(),
  clockOut: _dateFilter.optional(),
});

export const PaycheckOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  payrollRunId: _intFilter.optional(),
  updatedAt: _dateFilter.optional(),
  employeeId: _intFilter.optional(),
  grossAmount: _numFilter.optional(),
  netAmount: _numFilter.optional(),
});

export const EarningOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  type: EarningTypeFilterSchema.optional(),
  hours: _numFilter.optional(),
  rate: _numFilter.optional(),
  amount: _numFilter.optional(),
  paycheckId: _intFilter.optional(),
});

export const PaycheckTaxOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  paycheckId: _intFilter.optional(),
  taxAuthority: _strFilter.optional(),
  amount: _numFilter.optional(),
});

export const DeductionPolicyOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  type: DeductionTypeFilterSchema.optional(),
  defaultAmount: _numFilter.optional(),
  defaultPercent: _numFilter.optional(),
});

export const EmployeeDeductionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  policyId: _intFilter.optional(),
  employeeAmount: _numFilter.optional(),
});

export const PaycheckDeductionOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  paycheckId: _intFilter.optional(),
  employeeDeductionId: _intFilter.optional(),
  amount: _numFilter.optional(),
});

export const EmployeeTaxDataOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  employeeId: _intFilter.optional(),
  federalStatus: TaxFilingStatusFilterSchema.optional(),
  dependentsCredit: _numFilter.optional(),
  multipleJobs: _boolFilter.optional(),
  otherIncome: _numFilter.optional(),
  deductionsAmount: _numFilter.optional(),
  extraWithholding: _numFilter.optional(),
  isExempt: _boolFilter.optional(),
  isNonResidentAlien: _boolFilter.optional(),
});

export const StateTaxWithholdingOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  taxDataId: _intFilter.optional(),
  stateCode: _strFilter.optional(),
  stateStatus: _strFilter.optional(),
  allowances: _intFilter.optional(),
  extraWithholding: _numFilter.optional(),
});

export const LocalTaxWithholdingOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  taxDataId: _intFilter.optional(),
  jurisdiction: _strFilter.optional(),
  localStatus: _strFilter.optional(),
  extraWithholding: _numFilter.optional(),
});

export const PayrollRunOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  resolverId: _intFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  payDate: _dateFilter.optional(),
  status: PayrollStatusFilterSchema.optional(),
});

export const ContactOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
});

export const CountryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
});

export const StateOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  countryId: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
});

export const AddressOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  contactId: _intFilter.optional(),
  stateId: _intFilter.optional(),
  street: _strFilter.optional(),
  zip: _strFilter.optional(),
  city: _strFilter.optional(),
});

export const EmailOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  contactId: _intFilter.optional(),
  email: _strFilter.optional(),
});

export const PhoneOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  contactId: _intFilter.optional(),
  phone: _strFilter.optional(),
});

export const PrimaryEmailOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  emailId: _intFilter.optional(),
  contactId: _intFilter.optional(),
});

export const PrimaryPhoneOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  phoneId: _intFilter.optional(),
  contactId: _intFilter.optional(),
});

export const PrimaryAddressOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  addressId: _intFilter.optional(),
  contactId: _intFilter.optional(),
});

export const DepartmentOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnWhereSchema
);

export const TitleOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnWhereSchema
);

export const PersonalDataOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataOwnWhereSchema
);

export const EmployeeOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnWhereSchema
);

export const TeamOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamOwnWhereSchema
);

export const TeamManagerOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerOwnWhereSchema
);

export const TeamMemberOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberOwnWhereSchema
);

export const SalaryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryOwnWhereSchema
);

export const SalaryHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryOwnWhereSchema
);

export const BenefitOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitOwnWhereSchema
);

export const BenefitEnrolmentOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentOwnWhereSchema
);

export const TitleHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryOwnWhereSchema
);

export const TimeOffPolicyOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyOwnWhereSchema
);

export const TimeOffBalanceOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceOwnWhereSchema
);

export const TimeOffRequestOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestOwnWhereSchema
);

export const TimeOffTransactionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionOwnWhereSchema
);

export const ClockInOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInOwnWhereSchema
);

export const PaycheckOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckOwnWhereSchema
);

export const EarningOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningOwnWhereSchema
);

export const PaycheckTaxOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxOwnWhereSchema
);

export const DeductionPolicyOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyOwnWhereSchema
);

export const EmployeeDeductionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionOwnWhereSchema
);

export const PaycheckDeductionOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionOwnWhereSchema
);

export const EmployeeTaxDataOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataOwnWhereSchema
);

export const StateTaxWithholdingOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingOwnWhereSchema
);

export const LocalTaxWithholdingOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingOwnWhereSchema
);

export const PayrollRunOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunOwnWhereSchema
);

export const ContactOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnWhereSchema
);

export const CountryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnWhereSchema
);

export const StateOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnWhereSchema
);

export const AddressOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnWhereSchema
);

export const EmailOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnWhereSchema
);

export const PhoneOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnWhereSchema
);

export const PrimaryEmailOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailOwnWhereSchema
);

export const PrimaryPhoneOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneOwnWhereSchema
);

export const PrimaryAddressOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressOwnWhereSchema
);

export const DepartmentWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  isActive: _boolFilter.optional(),
  parent: DepartmentOwnWhereSchema.optional(),
  departments: z
    .object({
      every: DepartmentOwnWhereSchema.optional(),
      some: DepartmentOwnWhereSchema.optional(),
      none: DepartmentOwnWhereSchema.optional(),
    })
    .optional(),
  titles: z
    .object({
      every: TitleOwnWhereSchema.optional(),
      some: TitleOwnWhereSchema.optional(),
      none: TitleOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TitleWhereSchema = z.object({
  id: _intFilter.optional(),
  departmentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  isActive: _boolFilter.optional(),
  department: DepartmentOwnWhereSchema.optional(),
  employees: z
    .object({
      every: EmployeeOwnWhereSchema.optional(),
      some: EmployeeOwnWhereSchema.optional(),
      none: EmployeeOwnWhereSchema.optional(),
    })
    .optional(),
  histories: z
    .object({
      every: TitleHistoryOwnWhereSchema.optional(),
      some: TitleHistoryOwnWhereSchema.optional(),
      none: TitleHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const PersonalDataWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  ein: _strFilter.optional(),
  gender: GenderFilterSchema.optional(),
  dob: _dateFilter.optional(),
  maritalStatus: MaritalStatusFilterSchema.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const EmployeeWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  titleId: _intFilter.optional(),
  firstName: _strFilter.optional(),
  middleName: _strFilter.optional(),
  lastName: _strFilter.optional(),
  preferedName: _strFilter.optional(),
  status: EmployeeStatusFilterSchema.optional(),
  title: TitleOwnWhereSchema.optional(),
  hireDate: _dateFilter.optional(),
  terminationDate: _dateFilter.optional(),
  employmentType: EmploymentTypeFilterSchema.optional(),
  salary: SalaryOwnWhereSchema.optional(),
  salaryHistory: z
    .object({
      every: SalaryHistoryOwnWhereSchema.optional(),
      some: SalaryHistoryOwnWhereSchema.optional(),
      none: SalaryHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  benefits: z
    .object({
      every: BenefitEnrolmentOwnWhereSchema.optional(),
      some: BenefitEnrolmentOwnWhereSchema.optional(),
      none: BenefitEnrolmentOwnWhereSchema.optional(),
    })
    .optional(),
  titleHistory: z
    .object({
      every: TitleHistoryOwnWhereSchema.optional(),
      some: TitleHistoryOwnWhereSchema.optional(),
      none: TitleHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  timeOffBalances: z
    .object({
      every: TimeOffBalanceOwnWhereSchema.optional(),
      some: TimeOffBalanceOwnWhereSchema.optional(),
      none: TimeOffBalanceOwnWhereSchema.optional(),
    })
    .optional(),
  timeOffRequests: z
    .object({
      every: TimeOffRequestOwnWhereSchema.optional(),
      some: TimeOffRequestOwnWhereSchema.optional(),
      none: TimeOffRequestOwnWhereSchema.optional(),
    })
    .optional(),
  resolvedTimeOffs: z
    .object({
      every: TimeOffRequestOwnWhereSchema.optional(),
      some: TimeOffRequestOwnWhereSchema.optional(),
      none: TimeOffRequestOwnWhereSchema.optional(),
    })
    .optional(),
  clockIns: z
    .object({
      every: ClockInOwnWhereSchema.optional(),
      some: ClockInOwnWhereSchema.optional(),
      none: ClockInOwnWhereSchema.optional(),
    })
    .optional(),
  personalData: PersonalDataOwnWhereSchema.optional(),
  taxData: z
    .object({
      every: EmployeeTaxDataOwnWhereSchema.optional(),
      some: EmployeeTaxDataOwnWhereSchema.optional(),
      none: EmployeeTaxDataOwnWhereSchema.optional(),
    })
    .optional(),
  memberships: z
    .object({
      every: TeamMemberOwnWhereSchema.optional(),
      some: TeamMemberOwnWhereSchema.optional(),
      none: TeamMemberOwnWhereSchema.optional(),
    })
    .optional(),
  managingTeams: z
    .object({
      every: TeamManagerOwnWhereSchema.optional(),
      some: TeamManagerOwnWhereSchema.optional(),
      none: TeamManagerOwnWhereSchema.optional(),
    })
    .optional(),
  managingEmployees: z
    .object({
      every: EmployeeOwnWhereSchema.optional(),
      some: EmployeeOwnWhereSchema.optional(),
      none: EmployeeOwnWhereSchema.optional(),
    })
    .optional(),
  directManager: EmployeeOwnWhereSchema.optional(),
  paychecks: z
    .object({
      every: PaycheckOwnWhereSchema.optional(),
      some: PaycheckOwnWhereSchema.optional(),
      none: PaycheckOwnWhereSchema.optional(),
    })
    .optional(),
  directManagerId: _intFilter.optional(),
  deductions: z
    .object({
      every: EmployeeDeductionOwnWhereSchema.optional(),
      some: EmployeeDeductionOwnWhereSchema.optional(),
      none: EmployeeDeductionOwnWhereSchema.optional(),
    })
    .optional(),
  resolvedPayrollRuns: z
    .object({
      every: PayrollRunOwnWhereSchema.optional(),
      some: PayrollRunOwnWhereSchema.optional(),
      none: PayrollRunOwnWhereSchema.optional(),
    })
    .optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const TeamWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  members: z
    .object({
      every: TeamMemberOwnWhereSchema.optional(),
      some: TeamMemberOwnWhereSchema.optional(),
      none: TeamMemberOwnWhereSchema.optional(),
    })
    .optional(),
  managers: z
    .object({
      every: TeamManagerOwnWhereSchema.optional(),
      some: TeamManagerOwnWhereSchema.optional(),
      none: TeamManagerOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TeamManagerWhereSchema = z.object({
  id: _intFilter.optional(),
  teamId: _intFilter.optional(),
  managerId: _intFilter.optional(),
  team: TeamOwnWhereSchema.optional(),
  manager: EmployeeOwnWhereSchema.optional(),
});

export const TeamMemberWhereSchema = z.object({
  id: _intFilter.optional(),
  teamId: _intFilter.optional(),
  memberId: _intFilter.optional(),
  member: EmployeeOwnWhereSchema.optional(),
  team: TeamOwnWhereSchema.optional(),
});

export const SalaryWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  gross: _numFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  frequency: PayFrequencyFilterSchema.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const SalaryHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  oldSalary: _numFilter.optional(),
  newSalary: _numFilter.optional(),
  reason: _strFilter.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const BenefitWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  type: _strFilter.optional(),
  enrolments: z
    .object({
      every: BenefitEnrolmentOwnWhereSchema.optional(),
      some: BenefitEnrolmentOwnWhereSchema.optional(),
      none: BenefitEnrolmentOwnWhereSchema.optional(),
    })
    .optional(),
});

export const BenefitEnrolmentWhereSchema = z.object({
  id: _intFilter.optional(),
  benefitId: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  startDate: _dateFilter.optional(),
  status: BenefitStatusFilterSchema.optional(),
  benefit: BenefitOwnWhereSchema.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const TitleHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  titleId: _intFilter.optional(),
  type: TitleChangeTypeFilterSchema.optional(),
  reason: _strFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
  title: TitleOwnWhereSchema.optional(),
});

export const TimeOffPolicyWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  accrualRate: _numFilter.optional(),
  maxRollover: _numFilter.optional(),
  balances: z
    .object({
      every: TimeOffBalanceOwnWhereSchema.optional(),
      some: TimeOffBalanceOwnWhereSchema.optional(),
      none: TimeOffBalanceOwnWhereSchema.optional(),
    })
    .optional(),
  requests: z
    .object({
      every: TimeOffRequestOwnWhereSchema.optional(),
      some: TimeOffRequestOwnWhereSchema.optional(),
      none: TimeOffRequestOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TimeOffBalanceWhereSchema = z.object({
  id: _intFilter.optional(),
  policyId: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  accruedHours: _numFilter.optional(),
  usedHours: _numFilter.optional(),
  availableHours: _numFilter.optional(),
  policy: TimeOffPolicyOwnWhereSchema.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
  transactions: z
    .object({
      every: TimeOffTransactionOwnWhereSchema.optional(),
      some: TimeOffTransactionOwnWhereSchema.optional(),
      none: TimeOffTransactionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TimeOffRequestWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  employeeId: _intFilter.optional(),
  reason: _strFilter.optional(),
  policyId: _intFilter.optional(),
  resolverId: _intFilter.optional(),
  status: RequestStatusFilterSchema.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
  policy: TimeOffPolicyOwnWhereSchema.optional(),
  resolver: EmployeeOwnWhereSchema.optional(),
  transactions: z
    .object({
      every: TimeOffTransactionOwnWhereSchema.optional(),
      some: TimeOffTransactionOwnWhereSchema.optional(),
      none: TimeOffTransactionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TimeOffTransactionWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  type: TimeOffTransactionTypeFilterSchema.optional(),
  balanceId: _intFilter.optional(),
  requestId: _intFilter.optional(),
  amount: _numFilter.optional(),
  balance: TimeOffBalanceOwnWhereSchema.optional(),
  request: TimeOffRequestOwnWhereSchema.optional(),
});

export const ClockInWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  clockIn: _dateFilter.optional(),
  clockOut: _dateFilter.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const PaycheckWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  payrollRunId: _intFilter.optional(),
  updatedAt: _dateFilter.optional(),
  employeeId: _intFilter.optional(),
  grossAmount: _numFilter.optional(),
  netAmount: _numFilter.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
  earnings: z
    .object({
      every: EarningOwnWhereSchema.optional(),
      some: EarningOwnWhereSchema.optional(),
      none: EarningOwnWhereSchema.optional(),
    })
    .optional(),
  paycheckTaxes: z
    .object({
      every: PaycheckTaxOwnWhereSchema.optional(),
      some: PaycheckTaxOwnWhereSchema.optional(),
      none: PaycheckTaxOwnWhereSchema.optional(),
    })
    .optional(),
  deductions: z
    .object({
      every: PaycheckDeductionOwnWhereSchema.optional(),
      some: PaycheckDeductionOwnWhereSchema.optional(),
      none: PaycheckDeductionOwnWhereSchema.optional(),
    })
    .optional(),
  payrollRun: PayrollRunOwnWhereSchema.optional(),
});

export const EarningWhereSchema = z.object({
  id: _intFilter.optional(),
  type: EarningTypeFilterSchema.optional(),
  hours: _numFilter.optional(),
  rate: _numFilter.optional(),
  amount: _numFilter.optional(),
  paycheckId: _intFilter.optional(),
  paycheck: PaycheckOwnWhereSchema.optional(),
});

export const PaycheckTaxWhereSchema = z.object({
  id: _intFilter.optional(),
  paycheckId: _intFilter.optional(),
  taxAuthority: _strFilter.optional(),
  amount: _numFilter.optional(),
  paycheck: PaycheckOwnWhereSchema.optional(),
});

export const DeductionPolicyWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  type: DeductionTypeFilterSchema.optional(),
  defaultAmount: _numFilter.optional(),
  defaultPercent: _numFilter.optional(),
  employeeDeductions: z
    .object({
      every: EmployeeDeductionOwnWhereSchema.optional(),
      some: EmployeeDeductionOwnWhereSchema.optional(),
      none: EmployeeDeductionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const EmployeeDeductionWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  policyId: _intFilter.optional(),
  employeeAmount: _numFilter.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
  policy: DeductionPolicyOwnWhereSchema.optional(),
  paycheckDeductions: z
    .object({
      every: PaycheckDeductionOwnWhereSchema.optional(),
      some: PaycheckDeductionOwnWhereSchema.optional(),
      none: PaycheckDeductionOwnWhereSchema.optional(),
    })
    .optional(),
});

export const PaycheckDeductionWhereSchema = z.object({
  id: _intFilter.optional(),
  paycheckId: _intFilter.optional(),
  employeeDeductionId: _intFilter.optional(),
  amount: _numFilter.optional(),
  paycheck: PaycheckOwnWhereSchema.optional(),
  employeeDeduction: EmployeeDeductionOwnWhereSchema.optional(),
});

export const EmployeeTaxDataWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  employeeId: _intFilter.optional(),
  federalStatus: TaxFilingStatusFilterSchema.optional(),
  dependentsCredit: _numFilter.optional(),
  multipleJobs: _boolFilter.optional(),
  otherIncome: _numFilter.optional(),
  deductionsAmount: _numFilter.optional(),
  extraWithholding: _numFilter.optional(),
  isExempt: _boolFilter.optional(),
  isNonResidentAlien: _boolFilter.optional(),
  stateTaxes: z
    .object({
      every: StateTaxWithholdingOwnWhereSchema.optional(),
      some: StateTaxWithholdingOwnWhereSchema.optional(),
      none: StateTaxWithholdingOwnWhereSchema.optional(),
    })
    .optional(),
  localTaxes: z
    .object({
      every: LocalTaxWithholdingOwnWhereSchema.optional(),
      some: LocalTaxWithholdingOwnWhereSchema.optional(),
      none: LocalTaxWithholdingOwnWhereSchema.optional(),
    })
    .optional(),
  employee: EmployeeOwnWhereSchema.optional(),
});

export const StateTaxWithholdingWhereSchema = z.object({
  id: _intFilter.optional(),
  taxDataId: _intFilter.optional(),
  stateCode: _strFilter.optional(),
  stateStatus: _strFilter.optional(),
  allowances: _intFilter.optional(),
  extraWithholding: _numFilter.optional(),
  taxData: EmployeeTaxDataOwnWhereSchema.optional(),
});

export const LocalTaxWithholdingWhereSchema = z.object({
  id: _intFilter.optional(),
  taxDataId: _intFilter.optional(),
  jurisdiction: _strFilter.optional(),
  localStatus: _strFilter.optional(),
  extraWithholding: _numFilter.optional(),
  taxData: EmployeeTaxDataOwnWhereSchema.optional(),
});

export const PayrollRunWhereSchema = z.object({
  id: _intFilter.optional(),
  resolverId: _intFilter.optional(),
  startDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  payDate: _dateFilter.optional(),
  status: PayrollStatusFilterSchema.optional(),
  approvedBy: EmployeeOwnWhereSchema.optional(),
  paychecks: z
    .object({
      every: PaycheckOwnWhereSchema.optional(),
      some: PaycheckOwnWhereSchema.optional(),
      none: PaycheckOwnWhereSchema.optional(),
    })
    .optional(),
});

export const ContactWhereSchema = z.object({
  id: _intFilter.optional(),
  employeeId: _intFilter.optional(),
  employee: EmployeeOwnWhereSchema.optional(),
  emails: z
    .object({
      every: EmailOwnWhereSchema.optional(),
      some: EmailOwnWhereSchema.optional(),
      none: EmailOwnWhereSchema.optional(),
    })
    .optional(),
  phones: z
    .object({
      every: PhoneOwnWhereSchema.optional(),
      some: PhoneOwnWhereSchema.optional(),
      none: PhoneOwnWhereSchema.optional(),
    })
    .optional(),
  addresses: z
    .object({
      every: AddressOwnWhereSchema.optional(),
      some: AddressOwnWhereSchema.optional(),
      none: AddressOwnWhereSchema.optional(),
    })
    .optional(),
  primaryEmail: PrimaryEmailOwnWhereSchema.optional(),
  primaryPhone: PrimaryPhoneOwnWhereSchema.optional(),
  primaryAddress: PrimaryAddressOwnWhereSchema.optional(),
});

export const CountryWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  states: z
    .object({
      every: StateOwnWhereSchema.optional(),
      some: StateOwnWhereSchema.optional(),
      none: StateOwnWhereSchema.optional(),
    })
    .optional(),
});

export const StateWhereSchema = z.object({
  id: _intFilter.optional(),
  countryId: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  country: CountryOwnWhereSchema.optional(),
  addresses: z
    .object({
      every: AddressOwnWhereSchema.optional(),
      some: AddressOwnWhereSchema.optional(),
      none: AddressOwnWhereSchema.optional(),
    })
    .optional(),
});

export const AddressWhereSchema = z.object({
  id: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  contactId: _intFilter.optional(),
  stateId: _intFilter.optional(),
  street: _strFilter.optional(),
  zip: _strFilter.optional(),
  city: _strFilter.optional(),
  state: StateOwnWhereSchema.optional(),
  contact: ContactOwnWhereSchema.optional(),
  primary: PrimaryAddressOwnWhereSchema.optional(),
});

export const EmailWhereSchema = z.object({
  id: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  contactId: _intFilter.optional(),
  email: _strFilter.optional(),
  contact: ContactOwnWhereSchema.optional(),
  primary: PrimaryEmailOwnWhereSchema.optional(),
});

export const PhoneWhereSchema = z.object({
  id: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  contactId: _intFilter.optional(),
  phone: _strFilter.optional(),
  contact: ContactOwnWhereSchema.optional(),
  primary: PrimaryPhoneOwnWhereSchema.optional(),
});

export const PrimaryEmailWhereSchema = z.object({
  id: _intFilter.optional(),
  emailId: _intFilter.optional(),
  contactId: _intFilter.optional(),
  email: EmailOwnWhereSchema.optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const PrimaryPhoneWhereSchema = z.object({
  id: _intFilter.optional(),
  phoneId: _intFilter.optional(),
  contactId: _intFilter.optional(),
  phone: PhoneOwnWhereSchema.optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const PrimaryAddressWhereSchema = z.object({
  id: _intFilter.optional(),
  addressId: _intFilter.optional(),
  contactId: _intFilter.optional(),
  address: AddressOwnWhereSchema.optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const DepartmentWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentWhereSchema
);

export const TitleWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleWhereSchema
);

export const PersonalDataWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataWhereSchema
);

export const EmployeeWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeWhereSchema
);

export const TeamWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamWhereSchema
);

export const TeamManagerWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerWhereSchema
);

export const TeamMemberWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberWhereSchema
);

export const SalaryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryWhereSchema
);

export const SalaryHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryWhereSchema
);

export const BenefitWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitWhereSchema
);

export const BenefitEnrolmentWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentWhereSchema
);

export const TitleHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryWhereSchema
);

export const TimeOffPolicyWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyWhereSchema
);

export const TimeOffBalanceWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceWhereSchema
);

export const TimeOffRequestWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestWhereSchema
);

export const TimeOffTransactionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionWhereSchema
);

export const ClockInWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInWhereSchema
);

export const PaycheckWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckWhereSchema
);

export const EarningWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningWhereSchema
);

export const PaycheckTaxWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxWhereSchema
);

export const DeductionPolicyWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyWhereSchema
);

export const EmployeeDeductionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionWhereSchema
);

export const PaycheckDeductionWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionWhereSchema
);

export const EmployeeTaxDataWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataWhereSchema
);

export const StateTaxWithholdingWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingWhereSchema
);

export const LocalTaxWithholdingWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingWhereSchema
);

export const PayrollRunWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunWhereSchema
);

export const ContactWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactWhereSchema
);

export const CountryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryWhereSchema
);

export const StateWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateWhereSchema
);

export const AddressWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressWhereSchema
);

export const EmailWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailWhereSchema
);

export const PhoneWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneWhereSchema
);

export const PrimaryEmailWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailWhereSchema
);

export const PrimaryPhoneWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneWhereSchema
);

export const PrimaryAddressWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressWhereSchema
);

export const DepartmentOwnOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  slug: _direction,
  isActive: _direction,
});

export const TitleOwnOrderBySchema = z.object({
  id: _direction,
  departmentId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  isActive: _direction,
});

export const PersonalDataOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  ein: _direction,
  gender: _direction,
  dob: _direction,
  maritalStatus: _direction,
});

export const EmployeeOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  titleId: _direction,
  firstName: _direction,
  middleName: _direction,
  lastName: _direction,
  preferedName: _direction,
  status: _direction,
  hireDate: _direction,
  terminationDate: _direction,
  employmentType: _direction,
  directManagerId: _direction,
});

export const TeamOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
});

export const TeamManagerOwnOrderBySchema = z.object({
  id: _direction,
  teamId: _direction,
  managerId: _direction,
});

export const TeamMemberOwnOrderBySchema = z.object({
  id: _direction,
  teamId: _direction,
  memberId: _direction,
});

export const SalaryOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  gross: _direction,
  startDate: _direction,
  endDate: _direction,
  frequency: _direction,
});

export const SalaryHistoryOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  createdAt: _direction,
  oldSalary: _direction,
  newSalary: _direction,
  reason: _direction,
});

export const BenefitOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  type: _direction,
});

export const BenefitEnrolmentOwnOrderBySchema = z.object({
  id: _direction,
  benefitId: _direction,
  employeeId: _direction,
  startDate: _direction,
  status: _direction,
});

export const TitleHistoryOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  titleId: _direction,
  type: _direction,
  reason: _direction,
  startDate: _direction,
  endDate: _direction,
});

export const TimeOffPolicyOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  accrualRate: _direction,
  maxRollover: _direction,
});

export const TimeOffBalanceOwnOrderBySchema = z.object({
  id: _direction,
  policyId: _direction,
  employeeId: _direction,
  accruedHours: _direction,
  usedHours: _direction,
  availableHours: _direction,
});

export const TimeOffRequestOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  employeeId: _direction,
  reason: _direction,
  policyId: _direction,
  resolverId: _direction,
  status: _direction,
  startDate: _direction,
  endDate: _direction,
});

export const TimeOffTransactionOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  type: _direction,
  balanceId: _direction,
  requestId: _direction,
  amount: _direction,
});

export const ClockInOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  clockIn: _direction,
  clockOut: _direction,
});

export const PaycheckOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  payrollRunId: _direction,
  updatedAt: _direction,
  employeeId: _direction,
  grossAmount: _direction,
  netAmount: _direction,
});

export const EarningOwnOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  hours: _direction,
  rate: _direction,
  amount: _direction,
  paycheckId: _direction,
});

export const PaycheckTaxOwnOrderBySchema = z.object({
  id: _direction,
  paycheckId: _direction,
  taxAuthority: _direction,
  amount: _direction,
});

export const DeductionPolicyOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  type: _direction,
  defaultAmount: _direction,
  defaultPercent: _direction,
});

export const EmployeeDeductionOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  policyId: _direction,
  employeeAmount: _direction,
});

export const PaycheckDeductionOwnOrderBySchema = z.object({
  id: _direction,
  paycheckId: _direction,
  employeeDeductionId: _direction,
  amount: _direction,
});

export const EmployeeTaxDataOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  startDate: _direction,
  endDate: _direction,
  employeeId: _direction,
  federalStatus: _direction,
  dependentsCredit: _direction,
  multipleJobs: _direction,
  otherIncome: _direction,
  deductionsAmount: _direction,
  extraWithholding: _direction,
  isExempt: _direction,
  isNonResidentAlien: _direction,
});

export const StateTaxWithholdingOwnOrderBySchema = z.object({
  id: _direction,
  taxDataId: _direction,
  stateCode: _direction,
  stateStatus: _direction,
  allowances: _direction,
  extraWithholding: _direction,
});

export const LocalTaxWithholdingOwnOrderBySchema = z.object({
  id: _direction,
  taxDataId: _direction,
  jurisdiction: _direction,
  localStatus: _direction,
  extraWithholding: _direction,
});

export const PayrollRunOwnOrderBySchema = z.object({
  id: _direction,
  resolverId: _direction,
  startDate: _direction,
  endDate: _direction,
  payDate: _direction,
  status: _direction,
});

export const ContactOwnOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
});

export const CountryOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
});

export const StateOwnOrderBySchema = z.object({
  id: _direction,
  countryId: _direction,
  name: _direction,
  code: _direction,
});

export const AddressOwnOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  contactId: _direction,
  stateId: _direction,
  street: _direction,
  zip: _direction,
  city: _direction,
});

export const EmailOwnOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  contactId: _direction,
  email: _direction,
});

export const PhoneOwnOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  contactId: _direction,
  phone: _direction,
});

export const PrimaryEmailOwnOrderBySchema = z.object({
  id: _direction,
  emailId: _direction,
  contactId: _direction,
});

export const PrimaryPhoneOwnOrderBySchema = z.object({
  id: _direction,
  phoneId: _direction,
  contactId: _direction,
});

export const PrimaryAddressOwnOrderBySchema = z.object({
  id: _direction,
  addressId: _direction,
  contactId: _direction,
});

export const DepartmentOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnOrderBySchema
);

export const TitleOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnOrderBySchema
);

export const PersonalDataOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataOwnOrderBySchema
);

export const EmployeeOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnOrderBySchema
);

export const TeamOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamOwnOrderBySchema
);

export const TeamManagerOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerOwnOrderBySchema
);

export const TeamMemberOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberOwnOrderBySchema
);

export const SalaryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryOwnOrderBySchema
);

export const SalaryHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryOwnOrderBySchema
);

export const BenefitOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitOwnOrderBySchema
);

export const BenefitEnrolmentOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentOwnOrderBySchema
);

export const TitleHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryOwnOrderBySchema
);

export const TimeOffPolicyOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyOwnOrderBySchema
);

export const TimeOffBalanceOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceOwnOrderBySchema
);

export const TimeOffRequestOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestOwnOrderBySchema
);

export const TimeOffTransactionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionOwnOrderBySchema
);

export const ClockInOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInOwnOrderBySchema
);

export const PaycheckOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckOwnOrderBySchema
);

export const EarningOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningOwnOrderBySchema
);

export const PaycheckTaxOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxOwnOrderBySchema
);

export const DeductionPolicyOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyOwnOrderBySchema
);

export const EmployeeDeductionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionOwnOrderBySchema
);

export const PaycheckDeductionOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionOwnOrderBySchema
);

export const EmployeeTaxDataOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataOwnOrderBySchema
);

export const StateTaxWithholdingOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingOwnOrderBySchema
);

export const LocalTaxWithholdingOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingOwnOrderBySchema
);

export const PayrollRunOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunOwnOrderBySchema
);

export const ContactOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnOrderBySchema
);

export const CountryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnOrderBySchema
);

export const StateOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnOrderBySchema
);

export const AddressOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnOrderBySchema
);

export const EmailOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnOrderBySchema
);

export const PhoneOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnOrderBySchema
);

export const PrimaryEmailOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailOwnOrderBySchema
);

export const PrimaryPhoneOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneOwnOrderBySchema
);

export const PrimaryAddressOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressOwnOrderBySchema
);

export const DepartmentOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  slug: _direction,
  isActive: _direction,
  parent: DepartmentOwnOrderBySchema.optional(),
  departments: _orderByCount,
  titles: _orderByCount,
});

export const TitleOrderBySchema = z.object({
  id: _direction,
  departmentId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  isActive: _direction,
  department: DepartmentOwnOrderBySchema.optional(),
  employees: _orderByCount,
  histories: _orderByCount,
});

export const PersonalDataOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  ein: _direction,
  gender: _direction,
  dob: _direction,
  maritalStatus: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const EmployeeOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  titleId: _direction,
  firstName: _direction,
  middleName: _direction,
  lastName: _direction,
  preferedName: _direction,
  status: _direction,
  title: TitleOwnOrderBySchema.optional(),
  hireDate: _direction,
  terminationDate: _direction,
  employmentType: _direction,
  salary: SalaryOwnOrderBySchema.optional(),
  salaryHistory: _orderByCount,
  benefits: _orderByCount,
  titleHistory: _orderByCount,
  timeOffBalances: _orderByCount,
  timeOffRequests: _orderByCount,
  resolvedTimeOffs: _orderByCount,
  clockIns: _orderByCount,
  personalData: PersonalDataOwnOrderBySchema.optional(),
  taxData: _orderByCount,
  memberships: _orderByCount,
  managingTeams: _orderByCount,
  managingEmployees: _orderByCount,
  directManager: EmployeeOwnOrderBySchema.optional(),
  paychecks: _orderByCount,
  directManagerId: _direction,
  deductions: _orderByCount,
  resolvedPayrollRuns: _orderByCount,
  contact: ContactOwnOrderBySchema.optional(),
});

export const TeamOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  members: _orderByCount,
  managers: _orderByCount,
});

export const TeamManagerOrderBySchema = z.object({
  id: _direction,
  teamId: _direction,
  managerId: _direction,
  team: TeamOwnOrderBySchema.optional(),
  manager: EmployeeOwnOrderBySchema.optional(),
});

export const TeamMemberOrderBySchema = z.object({
  id: _direction,
  teamId: _direction,
  memberId: _direction,
  member: EmployeeOwnOrderBySchema.optional(),
  team: TeamOwnOrderBySchema.optional(),
});

export const SalaryOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  gross: _direction,
  startDate: _direction,
  endDate: _direction,
  frequency: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const SalaryHistoryOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  createdAt: _direction,
  oldSalary: _direction,
  newSalary: _direction,
  reason: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const BenefitOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  type: _direction,
  enrolments: _orderByCount,
});

export const BenefitEnrolmentOrderBySchema = z.object({
  id: _direction,
  benefitId: _direction,
  employeeId: _direction,
  startDate: _direction,
  status: _direction,
  benefit: BenefitOwnOrderBySchema.optional(),
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const TitleHistoryOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  titleId: _direction,
  type: _direction,
  reason: _direction,
  startDate: _direction,
  endDate: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
  title: TitleOwnOrderBySchema.optional(),
});

export const TimeOffPolicyOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  accrualRate: _direction,
  maxRollover: _direction,
  balances: _orderByCount,
  requests: _orderByCount,
});

export const TimeOffBalanceOrderBySchema = z.object({
  id: _direction,
  policyId: _direction,
  employeeId: _direction,
  accruedHours: _direction,
  usedHours: _direction,
  availableHours: _direction,
  policy: TimeOffPolicyOwnOrderBySchema.optional(),
  employee: EmployeeOwnOrderBySchema.optional(),
  transactions: _orderByCount,
});

export const TimeOffRequestOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  employeeId: _direction,
  reason: _direction,
  policyId: _direction,
  resolverId: _direction,
  status: _direction,
  startDate: _direction,
  endDate: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
  policy: TimeOffPolicyOwnOrderBySchema.optional(),
  resolver: EmployeeOwnOrderBySchema.optional(),
  transactions: _orderByCount,
});

export const TimeOffTransactionOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  type: _direction,
  balanceId: _direction,
  requestId: _direction,
  amount: _direction,
  balance: TimeOffBalanceOwnOrderBySchema.optional(),
  request: TimeOffRequestOwnOrderBySchema.optional(),
});

export const ClockInOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  clockIn: _direction,
  clockOut: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const PaycheckOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  payrollRunId: _direction,
  updatedAt: _direction,
  employeeId: _direction,
  grossAmount: _direction,
  netAmount: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
  earnings: _orderByCount,
  paycheckTaxes: _orderByCount,
  deductions: _orderByCount,
  payrollRun: PayrollRunOwnOrderBySchema.optional(),
});

export const EarningOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  hours: _direction,
  rate: _direction,
  amount: _direction,
  paycheckId: _direction,
  paycheck: PaycheckOwnOrderBySchema.optional(),
});

export const PaycheckTaxOrderBySchema = z.object({
  id: _direction,
  paycheckId: _direction,
  taxAuthority: _direction,
  amount: _direction,
  paycheck: PaycheckOwnOrderBySchema.optional(),
});

export const DeductionPolicyOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  type: _direction,
  defaultAmount: _direction,
  defaultPercent: _direction,
  employeeDeductions: _orderByCount,
});

export const EmployeeDeductionOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  policyId: _direction,
  employeeAmount: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
  policy: DeductionPolicyOwnOrderBySchema.optional(),
  paycheckDeductions: _orderByCount,
});

export const PaycheckDeductionOrderBySchema = z.object({
  id: _direction,
  paycheckId: _direction,
  employeeDeductionId: _direction,
  amount: _direction,
  paycheck: PaycheckOwnOrderBySchema.optional(),
  employeeDeduction: EmployeeDeductionOwnOrderBySchema.optional(),
});

export const EmployeeTaxDataOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  startDate: _direction,
  endDate: _direction,
  employeeId: _direction,
  federalStatus: _direction,
  dependentsCredit: _direction,
  multipleJobs: _direction,
  otherIncome: _direction,
  deductionsAmount: _direction,
  extraWithholding: _direction,
  isExempt: _direction,
  isNonResidentAlien: _direction,
  stateTaxes: _orderByCount,
  localTaxes: _orderByCount,
  employee: EmployeeOwnOrderBySchema.optional(),
});

export const StateTaxWithholdingOrderBySchema = z.object({
  id: _direction,
  taxDataId: _direction,
  stateCode: _direction,
  stateStatus: _direction,
  allowances: _direction,
  extraWithholding: _direction,
  taxData: EmployeeTaxDataOwnOrderBySchema.optional(),
});

export const LocalTaxWithholdingOrderBySchema = z.object({
  id: _direction,
  taxDataId: _direction,
  jurisdiction: _direction,
  localStatus: _direction,
  extraWithholding: _direction,
  taxData: EmployeeTaxDataOwnOrderBySchema.optional(),
});

export const PayrollRunOrderBySchema = z.object({
  id: _direction,
  resolverId: _direction,
  startDate: _direction,
  endDate: _direction,
  payDate: _direction,
  status: _direction,
  approvedBy: EmployeeOwnOrderBySchema.optional(),
  paychecks: _orderByCount,
});

export const ContactOrderBySchema = z.object({
  id: _direction,
  employeeId: _direction,
  employee: EmployeeOwnOrderBySchema.optional(),
  emails: _orderByCount,
  phones: _orderByCount,
  addresses: _orderByCount,
  primaryEmail: PrimaryEmailOwnOrderBySchema.optional(),
  primaryPhone: PrimaryPhoneOwnOrderBySchema.optional(),
  primaryAddress: PrimaryAddressOwnOrderBySchema.optional(),
});

export const CountryOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
  states: _orderByCount,
});

export const StateOrderBySchema = z.object({
  id: _direction,
  countryId: _direction,
  name: _direction,
  code: _direction,
  country: CountryOwnOrderBySchema.optional(),
  addresses: _orderByCount,
});

export const AddressOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  contactId: _direction,
  stateId: _direction,
  street: _direction,
  zip: _direction,
  city: _direction,
  state: StateOwnOrderBySchema.optional(),
  contact: ContactOwnOrderBySchema.optional(),
  primary: PrimaryAddressOwnOrderBySchema.optional(),
});

export const EmailOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  contactId: _direction,
  email: _direction,
  contact: ContactOwnOrderBySchema.optional(),
  primary: PrimaryEmailOwnOrderBySchema.optional(),
});

export const PhoneOrderBySchema = z.object({
  id: _direction,
  type: _direction,
  contactId: _direction,
  phone: _direction,
  contact: ContactOwnOrderBySchema.optional(),
  primary: PrimaryPhoneOwnOrderBySchema.optional(),
});

export const PrimaryEmailOrderBySchema = z.object({
  id: _direction,
  emailId: _direction,
  contactId: _direction,
  email: EmailOwnOrderBySchema.optional(),
  contact: ContactOwnOrderBySchema.optional(),
});

export const PrimaryPhoneOrderBySchema = z.object({
  id: _direction,
  phoneId: _direction,
  contactId: _direction,
  phone: PhoneOwnOrderBySchema.optional(),
  contact: ContactOwnOrderBySchema.optional(),
});

export const PrimaryAddressOrderBySchema = z.object({
  id: _direction,
  addressId: _direction,
  contactId: _direction,
  address: AddressOwnOrderBySchema.optional(),
  contact: ContactOwnOrderBySchema.optional(),
});

export const DepartmentOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOrderBySchema
);

export const TitleOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOrderBySchema
);

export const PersonalDataOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataOrderBySchema
);

export const EmployeeOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOrderBySchema
);

export const TeamOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamOrderBySchema
);

export const TeamManagerOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerOrderBySchema
);

export const TeamMemberOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberOrderBySchema
);

export const SalaryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryOrderBySchema
);

export const SalaryHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryOrderBySchema
);

export const BenefitOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitOrderBySchema
);

export const BenefitEnrolmentOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentOrderBySchema
);

export const TitleHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryOrderBySchema
);

export const TimeOffPolicyOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyOrderBySchema
);

export const TimeOffBalanceOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceOrderBySchema
);

export const TimeOffRequestOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestOrderBySchema
);

export const TimeOffTransactionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionOrderBySchema
);

export const ClockInOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInOrderBySchema
);

export const PaycheckOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckOrderBySchema
);

export const EarningOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningOrderBySchema
);

export const PaycheckTaxOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxOrderBySchema
);

export const DeductionPolicyOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyOrderBySchema
);

export const EmployeeDeductionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionOrderBySchema
);

export const PaycheckDeductionOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionOrderBySchema
);

export const EmployeeTaxDataOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataOrderBySchema
);

export const StateTaxWithholdingOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingOrderBySchema
);

export const LocalTaxWithholdingOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingOrderBySchema
);

export const PayrollRunOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunOrderBySchema
);

export const ContactOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOrderBySchema
);

export const CountryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOrderBySchema
);

export const StateOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOrderBySchema
);

export const AddressOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOrderBySchema
);

export const EmailOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOrderBySchema
);

export const PhoneOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOrderBySchema
);

export const PrimaryEmailOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailOrderBySchema
);

export const PrimaryPhoneOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneOrderBySchema
);

export const PrimaryAddressOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressOrderBySchema
);

export const DepartmentOwnSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  isActive: _select,
});

export const TitleOwnSelectSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  isActive: _select,
});

export const PersonalDataOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  ein: _select,
  gender: _select,
  dob: _select,
  maritalStatus: _select,
});

export const EmployeeOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  status: _select,
  hireDate: _select,
  terminationDate: _select,
  employmentType: _select,
  directManagerId: _select,
});

export const TeamOwnSelectSchema = z.object({ id: _select, name: _select });

export const TeamManagerOwnSelectSchema = z.object({
  id: _select,
  teamId: _select,
  managerId: _select,
});

export const TeamMemberOwnSelectSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
});

export const SalaryOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  gross: _select,
  startDate: _select,
  endDate: _select,
  frequency: _select,
});

export const SalaryHistoryOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  createdAt: _select,
  oldSalary: _select,
  newSalary: _select,
  reason: _select,
});

export const BenefitOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  type: _select,
});

export const BenefitEnrolmentOwnSelectSchema = z.object({
  id: _select,
  benefitId: _select,
  employeeId: _select,
  startDate: _select,
  status: _select,
});

export const TitleHistoryOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  titleId: _select,
  type: _select,
  reason: _select,
  startDate: _select,
  endDate: _select,
});

export const TimeOffPolicyOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  accrualRate: _select,
  maxRollover: _select,
});

export const TimeOffBalanceOwnSelectSchema = z.object({
  id: _select,
  policyId: _select,
  employeeId: _select,
  accruedHours: _select,
  usedHours: _select,
  availableHours: _select,
});

export const TimeOffRequestOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  employeeId: _select,
  reason: _select,
  policyId: _select,
  resolverId: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
});

export const TimeOffTransactionOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  type: _select,
  balanceId: _select,
  requestId: _select,
  amount: _select,
});

export const ClockInOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  clockIn: _select,
  clockOut: _select,
});

export const PaycheckOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  payrollRunId: _select,
  updatedAt: _select,
  employeeId: _select,
  grossAmount: _select,
  netAmount: _select,
});

export const EarningOwnSelectSchema = z.object({
  id: _select,
  type: _select,
  hours: _select,
  rate: _select,
  amount: _select,
  paycheckId: _select,
});

export const PaycheckTaxOwnSelectSchema = z.object({
  id: _select,
  paycheckId: _select,
  taxAuthority: _select,
  amount: _select,
});

export const DeductionPolicyOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  type: _select,
  defaultAmount: _select,
  defaultPercent: _select,
});

export const EmployeeDeductionOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  policyId: _select,
  employeeAmount: _select,
});

export const PaycheckDeductionOwnSelectSchema = z.object({
  id: _select,
  paycheckId: _select,
  employeeDeductionId: _select,
  amount: _select,
});

export const EmployeeTaxDataOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  startDate: _select,
  endDate: _select,
  employeeId: _select,
  federalStatus: _select,
  dependentsCredit: _select,
  multipleJobs: _select,
  otherIncome: _select,
  deductionsAmount: _select,
  extraWithholding: _select,
  isExempt: _select,
  isNonResidentAlien: _select,
});

export const StateTaxWithholdingOwnSelectSchema = z.object({
  id: _select,
  taxDataId: _select,
  stateCode: _select,
  stateStatus: _select,
  allowances: _select,
  extraWithholding: _select,
});

export const LocalTaxWithholdingOwnSelectSchema = z.object({
  id: _select,
  taxDataId: _select,
  jurisdiction: _select,
  localStatus: _select,
  extraWithholding: _select,
});

export const PayrollRunOwnSelectSchema = z.object({
  id: _select,
  resolverId: _select,
  startDate: _select,
  endDate: _select,
  payDate: _select,
  status: _select,
});

export const ContactOwnSelectSchema = z.object({
  id: _select,
  employeeId: _select,
});

export const CountryOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
});

export const StateOwnSelectSchema = z.object({
  id: _select,
  countryId: _select,
  name: _select,
  code: _select,
});

export const AddressOwnSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  stateId: _select,
  street: _select,
  zip: _select,
  city: _select,
});

export const EmailOwnSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  email: _select,
});

export const PhoneOwnSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  phone: _select,
});

export const PrimaryEmailOwnSelectSchema = z.object({
  id: _select,
  emailId: _select,
  contactId: _select,
});

export const PrimaryPhoneOwnSelectSchema = z.object({
  id: _select,
  phoneId: _select,
  contactId: _select,
});

export const PrimaryAddressOwnSelectSchema = z.object({
  id: _select,
  addressId: _select,
  contactId: _select,
});

export const DepartmentOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnSelectSchema
);

export const TitleOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnSelectSchema
);

export const PersonalDataOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataOwnSelectSchema
);

export const EmployeeOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnSelectSchema
);

export const TeamOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamOwnSelectSchema
);

export const TeamManagerOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerOwnSelectSchema
);

export const TeamMemberOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberOwnSelectSchema
);

export const SalaryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryOwnSelectSchema
);

export const SalaryHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryOwnSelectSchema
);

export const BenefitOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitOwnSelectSchema
);

export const BenefitEnrolmentOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentOwnSelectSchema
);

export const TitleHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryOwnSelectSchema
);

export const TimeOffPolicyOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyOwnSelectSchema
);

export const TimeOffBalanceOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceOwnSelectSchema
);

export const TimeOffRequestOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestOwnSelectSchema
);

export const TimeOffTransactionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionOwnSelectSchema
);

export const ClockInOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInOwnSelectSchema
);

export const PaycheckOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckOwnSelectSchema
);

export const EarningOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningOwnSelectSchema
);

export const PaycheckTaxOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxOwnSelectSchema
);

export const DeductionPolicyOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyOwnSelectSchema
);

export const EmployeeDeductionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionOwnSelectSchema
);

export const PaycheckDeductionOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionOwnSelectSchema
);

export const EmployeeTaxDataOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataOwnSelectSchema
);

export const StateTaxWithholdingOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingOwnSelectSchema
);

export const LocalTaxWithholdingOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingOwnSelectSchema
);

export const PayrollRunOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunOwnSelectSchema
);

export const ContactOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnSelectSchema
);

export const CountryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnSelectSchema
);

export const StateOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnSelectSchema
);

export const AddressOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnSelectSchema
);

export const EmailOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnSelectSchema
);

export const PhoneOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnSelectSchema
);

export const PrimaryEmailOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailOwnSelectSchema
);

export const PrimaryPhoneOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneOwnSelectSchema
);

export const PrimaryAddressOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressOwnSelectSchema
);

export const DepartmentSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  isActive: _select,
  parent: _select,
  departments: _select,
  titles: _select,
});

export const TitleSelectSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  isActive: _select,
  department: _select,
  employees: _select,
  histories: _select,
});

export const PersonalDataSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  ein: _select,
  gender: _select,
  dob: _select,
  maritalStatus: _select,
  employee: _select,
});

export const EmployeeSelectSchema = z.object({
  id: _select,
  uuid: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  status: _select,
  title: _select,
  hireDate: _select,
  terminationDate: _select,
  employmentType: _select,
  salary: _select,
  salaryHistory: _select,
  benefits: _select,
  titleHistory: _select,
  timeOffBalances: _select,
  timeOffRequests: _select,
  resolvedTimeOffs: _select,
  clockIns: _select,
  personalData: _select,
  taxData: _select,
  memberships: _select,
  managingTeams: _select,
  managingEmployees: _select,
  directManager: _select,
  paychecks: _select,
  directManagerId: _select,
  deductions: _select,
  resolvedPayrollRuns: _select,
  contact: _select,
});

export const TeamSelectSchema = z.object({
  id: _select,
  name: _select,
  members: _select,
  managers: _select,
});

export const TeamManagerSelectSchema = z.object({
  id: _select,
  teamId: _select,
  managerId: _select,
  team: _select,
  manager: _select,
});

export const TeamMemberSelectSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
  member: _select,
  team: _select,
});

export const SalarySelectSchema = z.object({
  id: _select,
  employeeId: _select,
  gross: _select,
  startDate: _select,
  endDate: _select,
  frequency: _select,
  employee: _select,
});

export const SalaryHistorySelectSchema = z.object({
  id: _select,
  employeeId: _select,
  createdAt: _select,
  oldSalary: _select,
  newSalary: _select,
  reason: _select,
  employee: _select,
});

export const BenefitSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  type: _select,
  enrolments: _select,
});

export const BenefitEnrolmentSelectSchema = z.object({
  id: _select,
  benefitId: _select,
  employeeId: _select,
  startDate: _select,
  status: _select,
  benefit: _select,
  employee: _select,
});

export const TitleHistorySelectSchema = z.object({
  id: _select,
  employeeId: _select,
  titleId: _select,
  type: _select,
  reason: _select,
  startDate: _select,
  endDate: _select,
  employee: _select,
  title: _select,
});

export const TimeOffPolicySelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  accrualRate: _select,
  maxRollover: _select,
  balances: _select,
  requests: _select,
});

export const TimeOffBalanceSelectSchema = z.object({
  id: _select,
  policyId: _select,
  employeeId: _select,
  accruedHours: _select,
  usedHours: _select,
  availableHours: _select,
  policy: _select,
  employee: _select,
  transactions: _select,
});

export const TimeOffRequestSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  employeeId: _select,
  reason: _select,
  policyId: _select,
  resolverId: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
  employee: _select,
  policy: _select,
  resolver: _select,
  transactions: _select,
});

export const TimeOffTransactionSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  type: _select,
  balanceId: _select,
  requestId: _select,
  amount: _select,
  balance: _select,
  request: _select,
});

export const ClockInSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  clockIn: _select,
  clockOut: _select,
  employee: _select,
});

export const PaycheckSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  payrollRunId: _select,
  updatedAt: _select,
  employeeId: _select,
  grossAmount: _select,
  netAmount: _select,
  employee: _select,
  earnings: _select,
  paycheckTaxes: _select,
  deductions: _select,
  payrollRun: _select,
});

export const EarningSelectSchema = z.object({
  id: _select,
  type: _select,
  hours: _select,
  rate: _select,
  amount: _select,
  paycheckId: _select,
  paycheck: _select,
});

export const PaycheckTaxSelectSchema = z.object({
  id: _select,
  paycheckId: _select,
  taxAuthority: _select,
  amount: _select,
  paycheck: _select,
});

export const DeductionPolicySelectSchema = z.object({
  id: _select,
  name: _select,
  type: _select,
  defaultAmount: _select,
  defaultPercent: _select,
  employeeDeductions: _select,
});

export const EmployeeDeductionSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  policyId: _select,
  employeeAmount: _select,
  employee: _select,
  policy: _select,
  paycheckDeductions: _select,
});

export const PaycheckDeductionSelectSchema = z.object({
  id: _select,
  paycheckId: _select,
  employeeDeductionId: _select,
  amount: _select,
  paycheck: _select,
  employeeDeduction: _select,
});

export const EmployeeTaxDataSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  startDate: _select,
  endDate: _select,
  employeeId: _select,
  federalStatus: _select,
  dependentsCredit: _select,
  multipleJobs: _select,
  otherIncome: _select,
  deductionsAmount: _select,
  extraWithholding: _select,
  isExempt: _select,
  isNonResidentAlien: _select,
  stateTaxes: _select,
  localTaxes: _select,
  employee: _select,
});

export const StateTaxWithholdingSelectSchema = z.object({
  id: _select,
  taxDataId: _select,
  stateCode: _select,
  stateStatus: _select,
  allowances: _select,
  extraWithholding: _select,
  taxData: _select,
});

export const LocalTaxWithholdingSelectSchema = z.object({
  id: _select,
  taxDataId: _select,
  jurisdiction: _select,
  localStatus: _select,
  extraWithholding: _select,
  taxData: _select,
});

export const PayrollRunSelectSchema = z.object({
  id: _select,
  resolverId: _select,
  startDate: _select,
  endDate: _select,
  payDate: _select,
  status: _select,
  approvedBy: _select,
  paychecks: _select,
});

export const ContactSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  employee: _select,
  emails: _select,
  phones: _select,
  addresses: _select,
  primaryEmail: _select,
  primaryPhone: _select,
  primaryAddress: _select,
});

export const CountrySelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  states: _select,
});

export const StateSelectSchema = z.object({
  id: _select,
  countryId: _select,
  name: _select,
  code: _select,
  country: _select,
  addresses: _select,
});

export const AddressSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  stateId: _select,
  street: _select,
  zip: _select,
  city: _select,
  state: _select,
  contact: _select,
  primary: _select,
});

export const EmailSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  email: _select,
  contact: _select,
  primary: _select,
});

export const PhoneSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  phone: _select,
  contact: _select,
  primary: _select,
});

export const PrimaryEmailSelectSchema = z.object({
  id: _select,
  emailId: _select,
  contactId: _select,
  email: _select,
  contact: _select,
});

export const PrimaryPhoneSelectSchema = z.object({
  id: _select,
  phoneId: _select,
  contactId: _select,
  phone: _select,
  contact: _select,
});

export const PrimaryAddressSelectSchema = z.object({
  id: _select,
  addressId: _select,
  contactId: _select,
  address: _select,
  contact: _select,
});

export const DepartmentSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentSelectSchema
);

export const TitleSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleSelectSchema
);

export const PersonalDataSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataSelectSchema
);

export const EmployeeSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeSelectSchema
);

export const TeamSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamSelectSchema
);

export const TeamManagerSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerSelectSchema
);

export const TeamMemberSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberSelectSchema
);

export const SalarySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalarySelectSchema
);

export const SalaryHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistorySelectSchema
);

export const BenefitSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitSelectSchema
);

export const BenefitEnrolmentSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentSelectSchema
);

export const TitleHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistorySelectSchema
);

export const TimeOffPolicySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicySelectSchema
);

export const TimeOffBalanceSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceSelectSchema
);

export const TimeOffRequestSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestSelectSchema
);

export const TimeOffTransactionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionSelectSchema
);

export const ClockInSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInSelectSchema
);

export const PaycheckSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckSelectSchema
);

export const EarningSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningSelectSchema
);

export const PaycheckTaxSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxSelectSchema
);

export const DeductionPolicySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicySelectSchema
);

export const EmployeeDeductionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionSelectSchema
);

export const PaycheckDeductionSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionSelectSchema
);

export const EmployeeTaxDataSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataSelectSchema
);

export const StateTaxWithholdingSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingSelectSchema
);

export const LocalTaxWithholdingSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingSelectSchema
);

export const PayrollRunSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunSelectSchema
);

export const ContactSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactSelectSchema
);

export const CountrySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountrySelectSchema
);

export const StateSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateSelectSchema
);

export const AddressSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressSelectSchema
);

export const EmailSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailSelectSchema
);

export const PhoneSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneSelectSchema
);

export const PrimaryEmailSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailSelectSchema
);

export const PrimaryPhoneSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneSelectSchema
);

export const PrimaryAddressSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressSelectSchema
);

export const DepartmentOmitSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  isActive: _select,
});

export const TitleOmitSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  isActive: _select,
});

export const PersonalDataOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  ein: _select,
  gender: _select,
  dob: _select,
  maritalStatus: _select,
});

export const EmployeeOmitSchema = z.object({
  id: _select,
  uuid: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  status: _select,
  hireDate: _select,
  terminationDate: _select,
  employmentType: _select,
  directManagerId: _select,
});

export const TeamOmitSchema = z.object({ id: _select, name: _select });

export const TeamManagerOmitSchema = z.object({
  id: _select,
  teamId: _select,
  managerId: _select,
});

export const TeamMemberOmitSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
});

export const SalaryOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  gross: _select,
  startDate: _select,
  endDate: _select,
  frequency: _select,
});

export const SalaryHistoryOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  createdAt: _select,
  oldSalary: _select,
  newSalary: _select,
  reason: _select,
});

export const BenefitOmitSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  type: _select,
});

export const BenefitEnrolmentOmitSchema = z.object({
  id: _select,
  benefitId: _select,
  employeeId: _select,
  startDate: _select,
  status: _select,
});

export const TitleHistoryOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  titleId: _select,
  type: _select,
  reason: _select,
  startDate: _select,
  endDate: _select,
});

export const TimeOffPolicyOmitSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  accrualRate: _select,
  maxRollover: _select,
});

export const TimeOffBalanceOmitSchema = z.object({
  id: _select,
  policyId: _select,
  employeeId: _select,
  accruedHours: _select,
  usedHours: _select,
  availableHours: _select,
});

export const TimeOffRequestOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  employeeId: _select,
  reason: _select,
  policyId: _select,
  resolverId: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
});

export const TimeOffTransactionOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  type: _select,
  balanceId: _select,
  requestId: _select,
  amount: _select,
});

export const ClockInOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  clockIn: _select,
  clockOut: _select,
});

export const PaycheckOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  payrollRunId: _select,
  updatedAt: _select,
  employeeId: _select,
  grossAmount: _select,
  netAmount: _select,
});

export const EarningOmitSchema = z.object({
  id: _select,
  type: _select,
  hours: _select,
  rate: _select,
  amount: _select,
  paycheckId: _select,
});

export const PaycheckTaxOmitSchema = z.object({
  id: _select,
  paycheckId: _select,
  taxAuthority: _select,
  amount: _select,
});

export const DeductionPolicyOmitSchema = z.object({
  id: _select,
  name: _select,
  type: _select,
  defaultAmount: _select,
  defaultPercent: _select,
});

export const EmployeeDeductionOmitSchema = z.object({
  id: _select,
  employeeId: _select,
  policyId: _select,
  employeeAmount: _select,
});

export const PaycheckDeductionOmitSchema = z.object({
  id: _select,
  paycheckId: _select,
  employeeDeductionId: _select,
  amount: _select,
});

export const EmployeeTaxDataOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  startDate: _select,
  endDate: _select,
  employeeId: _select,
  federalStatus: _select,
  dependentsCredit: _select,
  multipleJobs: _select,
  otherIncome: _select,
  deductionsAmount: _select,
  extraWithholding: _select,
  isExempt: _select,
  isNonResidentAlien: _select,
});

export const StateTaxWithholdingOmitSchema = z.object({
  id: _select,
  taxDataId: _select,
  stateCode: _select,
  stateStatus: _select,
  allowances: _select,
  extraWithholding: _select,
});

export const LocalTaxWithholdingOmitSchema = z.object({
  id: _select,
  taxDataId: _select,
  jurisdiction: _select,
  localStatus: _select,
  extraWithholding: _select,
});

export const PayrollRunOmitSchema = z.object({
  id: _select,
  resolverId: _select,
  startDate: _select,
  endDate: _select,
  payDate: _select,
  status: _select,
});

export const ContactOmitSchema = z.object({ id: _select, employeeId: _select });

export const CountryOmitSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
});

export const StateOmitSchema = z.object({
  id: _select,
  countryId: _select,
  name: _select,
  code: _select,
});

export const AddressOmitSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  stateId: _select,
  street: _select,
  zip: _select,
  city: _select,
});

export const EmailOmitSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  email: _select,
});

export const PhoneOmitSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  phone: _select,
});

export const PrimaryEmailOmitSchema = z.object({
  id: _select,
  emailId: _select,
  contactId: _select,
});

export const PrimaryPhoneOmitSchema = z.object({
  id: _select,
  phoneId: _select,
  contactId: _select,
});

export const PrimaryAddressOmitSchema = z.object({
  id: _select,
  addressId: _select,
  contactId: _select,
});

export const DepartmentOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOmitSchema
);

export const TitleOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOmitSchema
);

export const PersonalDataOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataOmitSchema
);

export const EmployeeOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOmitSchema
);

export const TeamOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamOmitSchema
);

export const TeamManagerOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerOmitSchema
);

export const TeamMemberOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberOmitSchema
);

export const SalaryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryOmitSchema
);

export const SalaryHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryOmitSchema
);

export const BenefitOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitOmitSchema
);

export const BenefitEnrolmentOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentOmitSchema
);

export const TitleHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryOmitSchema
);

export const TimeOffPolicyOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyOmitSchema
);

export const TimeOffBalanceOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceOmitSchema
);

export const TimeOffRequestOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestOmitSchema
);

export const TimeOffTransactionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionOmitSchema
);

export const ClockInOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInOmitSchema
);

export const PaycheckOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckOmitSchema
);

export const EarningOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningOmitSchema
);

export const PaycheckTaxOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxOmitSchema
);

export const DeductionPolicyOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyOmitSchema
);

export const EmployeeDeductionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionOmitSchema
);

export const PaycheckDeductionOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionOmitSchema
);

export const EmployeeTaxDataOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataOmitSchema
);

export const StateTaxWithholdingOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingOmitSchema
);

export const LocalTaxWithholdingOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingOmitSchema
);

export const PayrollRunOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunOmitSchema
);

export const ContactOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOmitSchema
);

export const CountryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOmitSchema
);

export const StateOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOmitSchema
);

export const AddressOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOmitSchema
);

export const EmailOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOmitSchema
);

export const PhoneOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOmitSchema
);

export const PrimaryEmailOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailOmitSchema
);

export const PrimaryPhoneOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneOmitSchema
);

export const PrimaryAddressOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressOmitSchema
);

export const DepartmentOwnQueryOneSchema = z.object({
  select: DepartmentOwnSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  where: DepartmentOwnWhereSchemaJson.optional(),
});

export const TitleOwnQueryOneSchema = z.object({
  select: TitleOwnSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  where: TitleOwnWhereSchemaJson.optional(),
});

export const PersonalDataOwnQueryOneSchema = z.object({
  select: PersonalDataOwnSelectSchemaJson.optional(),
  omit: PersonalDataOmitSchemaJson.optional(),
  where: PersonalDataOwnWhereSchemaJson.optional(),
});

export const EmployeeOwnQueryOneSchema = z.object({
  select: EmployeeOwnSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  where: EmployeeOwnWhereSchemaJson.optional(),
});

export const TeamOwnQueryOneSchema = z.object({
  select: TeamOwnSelectSchemaJson.optional(),
  omit: TeamOmitSchemaJson.optional(),
  where: TeamOwnWhereSchemaJson.optional(),
});

export const TeamManagerOwnQueryOneSchema = z.object({
  select: TeamManagerOwnSelectSchemaJson.optional(),
  omit: TeamManagerOmitSchemaJson.optional(),
  where: TeamManagerOwnWhereSchemaJson.optional(),
});

export const TeamMemberOwnQueryOneSchema = z.object({
  select: TeamMemberOwnSelectSchemaJson.optional(),
  omit: TeamMemberOmitSchemaJson.optional(),
  where: TeamMemberOwnWhereSchemaJson.optional(),
});

export const SalaryOwnQueryOneSchema = z.object({
  select: SalaryOwnSelectSchemaJson.optional(),
  omit: SalaryOmitSchemaJson.optional(),
  where: SalaryOwnWhereSchemaJson.optional(),
});

export const SalaryHistoryOwnQueryOneSchema = z.object({
  select: SalaryHistoryOwnSelectSchemaJson.optional(),
  omit: SalaryHistoryOmitSchemaJson.optional(),
  where: SalaryHistoryOwnWhereSchemaJson.optional(),
});

export const BenefitOwnQueryOneSchema = z.object({
  select: BenefitOwnSelectSchemaJson.optional(),
  omit: BenefitOmitSchemaJson.optional(),
  where: BenefitOwnWhereSchemaJson.optional(),
});

export const BenefitEnrolmentOwnQueryOneSchema = z.object({
  select: BenefitEnrolmentOwnSelectSchemaJson.optional(),
  omit: BenefitEnrolmentOmitSchemaJson.optional(),
  where: BenefitEnrolmentOwnWhereSchemaJson.optional(),
});

export const TitleHistoryOwnQueryOneSchema = z.object({
  select: TitleHistoryOwnSelectSchemaJson.optional(),
  omit: TitleHistoryOmitSchemaJson.optional(),
  where: TitleHistoryOwnWhereSchemaJson.optional(),
});

export const TimeOffPolicyOwnQueryOneSchema = z.object({
  select: TimeOffPolicyOwnSelectSchemaJson.optional(),
  omit: TimeOffPolicyOmitSchemaJson.optional(),
  where: TimeOffPolicyOwnWhereSchemaJson.optional(),
});

export const TimeOffBalanceOwnQueryOneSchema = z.object({
  select: TimeOffBalanceOwnSelectSchemaJson.optional(),
  omit: TimeOffBalanceOmitSchemaJson.optional(),
  where: TimeOffBalanceOwnWhereSchemaJson.optional(),
});

export const TimeOffRequestOwnQueryOneSchema = z.object({
  select: TimeOffRequestOwnSelectSchemaJson.optional(),
  omit: TimeOffRequestOmitSchemaJson.optional(),
  where: TimeOffRequestOwnWhereSchemaJson.optional(),
});

export const TimeOffTransactionOwnQueryOneSchema = z.object({
  select: TimeOffTransactionOwnSelectSchemaJson.optional(),
  omit: TimeOffTransactionOmitSchemaJson.optional(),
  where: TimeOffTransactionOwnWhereSchemaJson.optional(),
});

export const ClockInOwnQueryOneSchema = z.object({
  select: ClockInOwnSelectSchemaJson.optional(),
  omit: ClockInOmitSchemaJson.optional(),
  where: ClockInOwnWhereSchemaJson.optional(),
});

export const PaycheckOwnQueryOneSchema = z.object({
  select: PaycheckOwnSelectSchemaJson.optional(),
  omit: PaycheckOmitSchemaJson.optional(),
  where: PaycheckOwnWhereSchemaJson.optional(),
});

export const EarningOwnQueryOneSchema = z.object({
  select: EarningOwnSelectSchemaJson.optional(),
  omit: EarningOmitSchemaJson.optional(),
  where: EarningOwnWhereSchemaJson.optional(),
});

export const PaycheckTaxOwnQueryOneSchema = z.object({
  select: PaycheckTaxOwnSelectSchemaJson.optional(),
  omit: PaycheckTaxOmitSchemaJson.optional(),
  where: PaycheckTaxOwnWhereSchemaJson.optional(),
});

export const DeductionPolicyOwnQueryOneSchema = z.object({
  select: DeductionPolicyOwnSelectSchemaJson.optional(),
  omit: DeductionPolicyOmitSchemaJson.optional(),
  where: DeductionPolicyOwnWhereSchemaJson.optional(),
});

export const EmployeeDeductionOwnQueryOneSchema = z.object({
  select: EmployeeDeductionOwnSelectSchemaJson.optional(),
  omit: EmployeeDeductionOmitSchemaJson.optional(),
  where: EmployeeDeductionOwnWhereSchemaJson.optional(),
});

export const PaycheckDeductionOwnQueryOneSchema = z.object({
  select: PaycheckDeductionOwnSelectSchemaJson.optional(),
  omit: PaycheckDeductionOmitSchemaJson.optional(),
  where: PaycheckDeductionOwnWhereSchemaJson.optional(),
});

export const EmployeeTaxDataOwnQueryOneSchema = z.object({
  select: EmployeeTaxDataOwnSelectSchemaJson.optional(),
  omit: EmployeeTaxDataOmitSchemaJson.optional(),
  where: EmployeeTaxDataOwnWhereSchemaJson.optional(),
});

export const StateTaxWithholdingOwnQueryOneSchema = z.object({
  select: StateTaxWithholdingOwnSelectSchemaJson.optional(),
  omit: StateTaxWithholdingOmitSchemaJson.optional(),
  where: StateTaxWithholdingOwnWhereSchemaJson.optional(),
});

export const LocalTaxWithholdingOwnQueryOneSchema = z.object({
  select: LocalTaxWithholdingOwnSelectSchemaJson.optional(),
  omit: LocalTaxWithholdingOmitSchemaJson.optional(),
  where: LocalTaxWithholdingOwnWhereSchemaJson.optional(),
});

export const PayrollRunOwnQueryOneSchema = z.object({
  select: PayrollRunOwnSelectSchemaJson.optional(),
  omit: PayrollRunOmitSchemaJson.optional(),
  where: PayrollRunOwnWhereSchemaJson.optional(),
});

export const ContactOwnQueryOneSchema = z.object({
  select: ContactOwnSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  where: ContactOwnWhereSchemaJson.optional(),
});

export const CountryOwnQueryOneSchema = z.object({
  select: CountryOwnSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  where: CountryOwnWhereSchemaJson.optional(),
});

export const StateOwnQueryOneSchema = z.object({
  select: StateOwnSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  where: StateOwnWhereSchemaJson.optional(),
});

export const AddressOwnQueryOneSchema = z.object({
  select: AddressOwnSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  where: AddressOwnWhereSchemaJson.optional(),
});

export const EmailOwnQueryOneSchema = z.object({
  select: EmailOwnSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  where: EmailOwnWhereSchemaJson.optional(),
});

export const PhoneOwnQueryOneSchema = z.object({
  select: PhoneOwnSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  where: PhoneOwnWhereSchemaJson.optional(),
});

export const PrimaryEmailOwnQueryOneSchema = z.object({
  select: PrimaryEmailOwnSelectSchemaJson.optional(),
  omit: PrimaryEmailOmitSchemaJson.optional(),
  where: PrimaryEmailOwnWhereSchemaJson.optional(),
});

export const PrimaryPhoneOwnQueryOneSchema = z.object({
  select: PrimaryPhoneOwnSelectSchemaJson.optional(),
  omit: PrimaryPhoneOmitSchemaJson.optional(),
  where: PrimaryPhoneOwnWhereSchemaJson.optional(),
});

export const PrimaryAddressOwnQueryOneSchema = z.object({
  select: PrimaryAddressOwnSelectSchemaJson.optional(),
  omit: PrimaryAddressOmitSchemaJson.optional(),
  where: PrimaryAddressOwnWhereSchemaJson.optional(),
});

export const DepartmentOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnQueryOneSchema
);

export const TitleOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnQueryOneSchema
);

export const PersonalDataOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataOwnQueryOneSchema
);

export const EmployeeOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnQueryOneSchema
);

export const TeamOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamOwnQueryOneSchema
);

export const TeamManagerOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerOwnQueryOneSchema
);

export const TeamMemberOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberOwnQueryOneSchema
);

export const SalaryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryOwnQueryOneSchema
);

export const SalaryHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryOwnQueryOneSchema
);

export const BenefitOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitOwnQueryOneSchema
);

export const BenefitEnrolmentOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentOwnQueryOneSchema
);

export const TitleHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryOwnQueryOneSchema
);

export const TimeOffPolicyOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyOwnQueryOneSchema
);

export const TimeOffBalanceOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceOwnQueryOneSchema
);

export const TimeOffRequestOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestOwnQueryOneSchema
);

export const TimeOffTransactionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionOwnQueryOneSchema
);

export const ClockInOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInOwnQueryOneSchema
);

export const PaycheckOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckOwnQueryOneSchema
);

export const EarningOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningOwnQueryOneSchema
);

export const PaycheckTaxOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxOwnQueryOneSchema
);

export const DeductionPolicyOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyOwnQueryOneSchema
);

export const EmployeeDeductionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionOwnQueryOneSchema
);

export const PaycheckDeductionOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionOwnQueryOneSchema
);

export const EmployeeTaxDataOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataOwnQueryOneSchema
);

export const StateTaxWithholdingOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingOwnQueryOneSchema
);

export const LocalTaxWithholdingOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingOwnQueryOneSchema
);

export const PayrollRunOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunOwnQueryOneSchema
);

export const ContactOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnQueryOneSchema
);

export const CountryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnQueryOneSchema
);

export const StateOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnQueryOneSchema
);

export const AddressOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnQueryOneSchema
);

export const EmailOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnQueryOneSchema
);

export const PhoneOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnQueryOneSchema
);

export const PrimaryEmailOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailOwnQueryOneSchema
);

export const PrimaryPhoneOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneOwnQueryOneSchema
);

export const PrimaryAddressOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressOwnQueryOneSchema
);

export const DepartmentOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DepartmentDistinctSchema.optional(),
  select: DepartmentOwnSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  where: DepartmentOwnWhereSchemaJson.optional(),
  orderBy: DepartmentOwnOrderBySchemaJson.optional(),
});

export const TitleOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleDistinctSchema.optional(),
  select: TitleOwnSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  where: TitleOwnWhereSchemaJson.optional(),
  orderBy: TitleOwnOrderBySchemaJson.optional(),
});

export const PersonalDataOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PersonalDataDistinctSchema.optional(),
  select: PersonalDataOwnSelectSchemaJson.optional(),
  omit: PersonalDataOmitSchemaJson.optional(),
  where: PersonalDataOwnWhereSchemaJson.optional(),
  orderBy: PersonalDataOwnOrderBySchemaJson.optional(),
});

export const EmployeeOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDistinctSchema.optional(),
  select: EmployeeOwnSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  where: EmployeeOwnWhereSchemaJson.optional(),
  orderBy: EmployeeOwnOrderBySchemaJson.optional(),
});

export const TeamOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamDistinctSchema.optional(),
  select: TeamOwnSelectSchemaJson.optional(),
  omit: TeamOmitSchemaJson.optional(),
  where: TeamOwnWhereSchemaJson.optional(),
  orderBy: TeamOwnOrderBySchemaJson.optional(),
});

export const TeamManagerOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamManagerDistinctSchema.optional(),
  select: TeamManagerOwnSelectSchemaJson.optional(),
  omit: TeamManagerOmitSchemaJson.optional(),
  where: TeamManagerOwnWhereSchemaJson.optional(),
  orderBy: TeamManagerOwnOrderBySchemaJson.optional(),
});

export const TeamMemberOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamMemberDistinctSchema.optional(),
  select: TeamMemberOwnSelectSchemaJson.optional(),
  omit: TeamMemberOmitSchemaJson.optional(),
  where: TeamMemberOwnWhereSchemaJson.optional(),
  orderBy: TeamMemberOwnOrderBySchemaJson.optional(),
});

export const SalaryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SalaryDistinctSchema.optional(),
  select: SalaryOwnSelectSchemaJson.optional(),
  omit: SalaryOmitSchemaJson.optional(),
  where: SalaryOwnWhereSchemaJson.optional(),
  orderBy: SalaryOwnOrderBySchemaJson.optional(),
});

export const SalaryHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SalaryHistoryDistinctSchema.optional(),
  select: SalaryHistoryOwnSelectSchemaJson.optional(),
  omit: SalaryHistoryOmitSchemaJson.optional(),
  where: SalaryHistoryOwnWhereSchemaJson.optional(),
  orderBy: SalaryHistoryOwnOrderBySchemaJson.optional(),
});

export const BenefitOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BenefitDistinctSchema.optional(),
  select: BenefitOwnSelectSchemaJson.optional(),
  omit: BenefitOmitSchemaJson.optional(),
  where: BenefitOwnWhereSchemaJson.optional(),
  orderBy: BenefitOwnOrderBySchemaJson.optional(),
});

export const BenefitEnrolmentOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BenefitEnrolmentDistinctSchema.optional(),
  select: BenefitEnrolmentOwnSelectSchemaJson.optional(),
  omit: BenefitEnrolmentOmitSchemaJson.optional(),
  where: BenefitEnrolmentOwnWhereSchemaJson.optional(),
  orderBy: BenefitEnrolmentOwnOrderBySchemaJson.optional(),
});

export const TitleHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleHistoryDistinctSchema.optional(),
  select: TitleHistoryOwnSelectSchemaJson.optional(),
  omit: TitleHistoryOmitSchemaJson.optional(),
  where: TitleHistoryOwnWhereSchemaJson.optional(),
  orderBy: TitleHistoryOwnOrderBySchemaJson.optional(),
});

export const TimeOffPolicyOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffPolicyDistinctSchema.optional(),
  select: TimeOffPolicyOwnSelectSchemaJson.optional(),
  omit: TimeOffPolicyOmitSchemaJson.optional(),
  where: TimeOffPolicyOwnWhereSchemaJson.optional(),
  orderBy: TimeOffPolicyOwnOrderBySchemaJson.optional(),
});

export const TimeOffBalanceOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffBalanceDistinctSchema.optional(),
  select: TimeOffBalanceOwnSelectSchemaJson.optional(),
  omit: TimeOffBalanceOmitSchemaJson.optional(),
  where: TimeOffBalanceOwnWhereSchemaJson.optional(),
  orderBy: TimeOffBalanceOwnOrderBySchemaJson.optional(),
});

export const TimeOffRequestOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffRequestDistinctSchema.optional(),
  select: TimeOffRequestOwnSelectSchemaJson.optional(),
  omit: TimeOffRequestOmitSchemaJson.optional(),
  where: TimeOffRequestOwnWhereSchemaJson.optional(),
  orderBy: TimeOffRequestOwnOrderBySchemaJson.optional(),
});

export const TimeOffTransactionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffTransactionDistinctSchema.optional(),
  select: TimeOffTransactionOwnSelectSchemaJson.optional(),
  omit: TimeOffTransactionOmitSchemaJson.optional(),
  where: TimeOffTransactionOwnWhereSchemaJson.optional(),
  orderBy: TimeOffTransactionOwnOrderBySchemaJson.optional(),
});

export const ClockInOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ClockInDistinctSchema.optional(),
  select: ClockInOwnSelectSchemaJson.optional(),
  omit: ClockInOmitSchemaJson.optional(),
  where: ClockInOwnWhereSchemaJson.optional(),
  orderBy: ClockInOwnOrderBySchemaJson.optional(),
});

export const PaycheckOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckDistinctSchema.optional(),
  select: PaycheckOwnSelectSchemaJson.optional(),
  omit: PaycheckOmitSchemaJson.optional(),
  where: PaycheckOwnWhereSchemaJson.optional(),
  orderBy: PaycheckOwnOrderBySchemaJson.optional(),
});

export const EarningOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EarningDistinctSchema.optional(),
  select: EarningOwnSelectSchemaJson.optional(),
  omit: EarningOmitSchemaJson.optional(),
  where: EarningOwnWhereSchemaJson.optional(),
  orderBy: EarningOwnOrderBySchemaJson.optional(),
});

export const PaycheckTaxOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckTaxDistinctSchema.optional(),
  select: PaycheckTaxOwnSelectSchemaJson.optional(),
  omit: PaycheckTaxOmitSchemaJson.optional(),
  where: PaycheckTaxOwnWhereSchemaJson.optional(),
  orderBy: PaycheckTaxOwnOrderBySchemaJson.optional(),
});

export const DeductionPolicyOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DeductionPolicyDistinctSchema.optional(),
  select: DeductionPolicyOwnSelectSchemaJson.optional(),
  omit: DeductionPolicyOmitSchemaJson.optional(),
  where: DeductionPolicyOwnWhereSchemaJson.optional(),
  orderBy: DeductionPolicyOwnOrderBySchemaJson.optional(),
});

export const EmployeeDeductionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDeductionDistinctSchema.optional(),
  select: EmployeeDeductionOwnSelectSchemaJson.optional(),
  omit: EmployeeDeductionOmitSchemaJson.optional(),
  where: EmployeeDeductionOwnWhereSchemaJson.optional(),
  orderBy: EmployeeDeductionOwnOrderBySchemaJson.optional(),
});

export const PaycheckDeductionOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckDeductionDistinctSchema.optional(),
  select: PaycheckDeductionOwnSelectSchemaJson.optional(),
  omit: PaycheckDeductionOmitSchemaJson.optional(),
  where: PaycheckDeductionOwnWhereSchemaJson.optional(),
  orderBy: PaycheckDeductionOwnOrderBySchemaJson.optional(),
});

export const EmployeeTaxDataOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeTaxDataDistinctSchema.optional(),
  select: EmployeeTaxDataOwnSelectSchemaJson.optional(),
  omit: EmployeeTaxDataOmitSchemaJson.optional(),
  where: EmployeeTaxDataOwnWhereSchemaJson.optional(),
  orderBy: EmployeeTaxDataOwnOrderBySchemaJson.optional(),
});

export const StateTaxWithholdingOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateTaxWithholdingDistinctSchema.optional(),
  select: StateTaxWithholdingOwnSelectSchemaJson.optional(),
  omit: StateTaxWithholdingOmitSchemaJson.optional(),
  where: StateTaxWithholdingOwnWhereSchemaJson.optional(),
  orderBy: StateTaxWithholdingOwnOrderBySchemaJson.optional(),
});

export const LocalTaxWithholdingOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: LocalTaxWithholdingDistinctSchema.optional(),
  select: LocalTaxWithholdingOwnSelectSchemaJson.optional(),
  omit: LocalTaxWithholdingOmitSchemaJson.optional(),
  where: LocalTaxWithholdingOwnWhereSchemaJson.optional(),
  orderBy: LocalTaxWithholdingOwnOrderBySchemaJson.optional(),
});

export const PayrollRunOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PayrollRunDistinctSchema.optional(),
  select: PayrollRunOwnSelectSchemaJson.optional(),
  omit: PayrollRunOmitSchemaJson.optional(),
  where: PayrollRunOwnWhereSchemaJson.optional(),
  orderBy: PayrollRunOwnOrderBySchemaJson.optional(),
});

export const ContactOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ContactDistinctSchema.optional(),
  select: ContactOwnSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  where: ContactOwnWhereSchemaJson.optional(),
  orderBy: ContactOwnOrderBySchemaJson.optional(),
});

export const CountryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CountryDistinctSchema.optional(),
  select: CountryOwnSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  where: CountryOwnWhereSchemaJson.optional(),
  orderBy: CountryOwnOrderBySchemaJson.optional(),
});

export const StateOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateDistinctSchema.optional(),
  select: StateOwnSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  where: StateOwnWhereSchemaJson.optional(),
  orderBy: StateOwnOrderBySchemaJson.optional(),
});

export const AddressOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AddressDistinctSchema.optional(),
  select: AddressOwnSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  where: AddressOwnWhereSchemaJson.optional(),
  orderBy: AddressOwnOrderBySchemaJson.optional(),
});

export const EmailOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmailDistinctSchema.optional(),
  select: EmailOwnSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  where: EmailOwnWhereSchemaJson.optional(),
  orderBy: EmailOwnOrderBySchemaJson.optional(),
});

export const PhoneOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PhoneDistinctSchema.optional(),
  select: PhoneOwnSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  where: PhoneOwnWhereSchemaJson.optional(),
  orderBy: PhoneOwnOrderBySchemaJson.optional(),
});

export const PrimaryEmailOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryEmailDistinctSchema.optional(),
  select: PrimaryEmailOwnSelectSchemaJson.optional(),
  omit: PrimaryEmailOmitSchemaJson.optional(),
  where: PrimaryEmailOwnWhereSchemaJson.optional(),
  orderBy: PrimaryEmailOwnOrderBySchemaJson.optional(),
});

export const PrimaryPhoneOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryPhoneDistinctSchema.optional(),
  select: PrimaryPhoneOwnSelectSchemaJson.optional(),
  omit: PrimaryPhoneOmitSchemaJson.optional(),
  where: PrimaryPhoneOwnWhereSchemaJson.optional(),
  orderBy: PrimaryPhoneOwnOrderBySchemaJson.optional(),
});

export const PrimaryAddressOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryAddressDistinctSchema.optional(),
  select: PrimaryAddressOwnSelectSchemaJson.optional(),
  omit: PrimaryAddressOmitSchemaJson.optional(),
  where: PrimaryAddressOwnWhereSchemaJson.optional(),
  orderBy: PrimaryAddressOwnOrderBySchemaJson.optional(),
});

export const DepartmentOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnQuerySchema
);

export const TitleOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnQuerySchema
);

export const PersonalDataOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataOwnQuerySchema
);

export const EmployeeOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeOwnQuerySchema
);

export const TeamOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamOwnQuerySchema
);

export const TeamManagerOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerOwnQuerySchema
);

export const TeamMemberOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberOwnQuerySchema
);

export const SalaryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryOwnQuerySchema
);

export const SalaryHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryOwnQuerySchema
);

export const BenefitOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitOwnQuerySchema
);

export const BenefitEnrolmentOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentOwnQuerySchema
);

export const TitleHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryOwnQuerySchema
);

export const TimeOffPolicyOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyOwnQuerySchema
);

export const TimeOffBalanceOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceOwnQuerySchema
);

export const TimeOffRequestOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestOwnQuerySchema
);

export const TimeOffTransactionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionOwnQuerySchema
);

export const ClockInOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInOwnQuerySchema
);

export const PaycheckOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckOwnQuerySchema
);

export const EarningOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningOwnQuerySchema
);

export const PaycheckTaxOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxOwnQuerySchema
);

export const DeductionPolicyOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyOwnQuerySchema
);

export const EmployeeDeductionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionOwnQuerySchema
);

export const PaycheckDeductionOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionOwnQuerySchema
);

export const EmployeeTaxDataOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataOwnQuerySchema
);

export const StateTaxWithholdingOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingOwnQuerySchema
);

export const LocalTaxWithholdingOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingOwnQuerySchema
);

export const PayrollRunOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunOwnQuerySchema
);

export const ContactOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnQuerySchema
);

export const CountryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnQuerySchema
);

export const StateOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnQuerySchema
);

export const AddressOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnQuerySchema
);

export const EmailOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnQuerySchema
);

export const PhoneOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnQuerySchema
);

export const PrimaryEmailOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailOwnQuerySchema
);

export const PrimaryPhoneOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneOwnQuerySchema
);

export const PrimaryAddressOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressOwnQuerySchema
);

export const DepartmentIncludeSchema = z.object({
  parent: _select.or(DepartmentOwnQueryOneSchema).optional(),
  departments: _select.or(DepartmentOwnQueryOneSchema).optional(),
  titles: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const TitleIncludeSchema = z.object({
  department: _select.or(DepartmentOwnQueryOneSchema).optional(),
  employees: _select.or(EmployeeOwnQueryOneSchema).optional(),
  histories: _select.or(TitleHistoryOwnQueryOneSchema).optional(),
});

export const PersonalDataIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeIncludeSchema = z.object({
  title: _select.or(TitleOwnQueryOneSchema).optional(),
  salary: _select.or(SalaryOwnQueryOneSchema).optional(),
  salaryHistory: _select.or(SalaryHistoryOwnQueryOneSchema).optional(),
  benefits: _select.or(BenefitEnrolmentOwnQueryOneSchema).optional(),
  titleHistory: _select.or(TitleHistoryOwnQueryOneSchema).optional(),
  timeOffBalances: _select.or(TimeOffBalanceOwnQueryOneSchema).optional(),
  timeOffRequests: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
  resolvedTimeOffs: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
  clockIns: _select.or(ClockInOwnQueryOneSchema).optional(),
  personalData: _select.or(PersonalDataOwnQueryOneSchema).optional(),
  taxData: _select.or(EmployeeTaxDataOwnQueryOneSchema).optional(),
  memberships: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  managingTeams: _select.or(TeamManagerOwnQueryOneSchema).optional(),
  managingEmployees: _select.or(EmployeeOwnQueryOneSchema).optional(),
  directManager: _select.or(EmployeeOwnQueryOneSchema).optional(),
  paychecks: _select.or(PaycheckOwnQueryOneSchema).optional(),
  deductions: _select.or(EmployeeDeductionOwnQueryOneSchema).optional(),
  resolvedPayrollRuns: _select.or(PayrollRunOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const TeamIncludeSchema = z.object({
  members: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  managers: _select.or(TeamManagerOwnQueryOneSchema).optional(),
});

export const TeamManagerIncludeSchema = z.object({
  team: _select.or(TeamOwnQueryOneSchema).optional(),
  manager: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const TeamMemberIncludeSchema = z.object({
  member: _select.or(EmployeeOwnQueryOneSchema).optional(),
  team: _select.or(TeamOwnQueryOneSchema).optional(),
});

export const SalaryIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const SalaryHistoryIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const BenefitIncludeSchema = z.object({
  enrolments: _select.or(BenefitEnrolmentOwnQueryOneSchema).optional(),
});

export const BenefitEnrolmentIncludeSchema = z.object({
  benefit: _select.or(BenefitOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const TitleHistoryIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  title: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const TimeOffPolicyIncludeSchema = z.object({
  balances: _select.or(TimeOffBalanceOwnQueryOneSchema).optional(),
  requests: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
});

export const TimeOffBalanceIncludeSchema = z.object({
  policy: _select.or(TimeOffPolicyOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  transactions: _select.or(TimeOffTransactionOwnQueryOneSchema).optional(),
});

export const TimeOffRequestIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  policy: _select.or(TimeOffPolicyOwnQueryOneSchema).optional(),
  resolver: _select.or(EmployeeOwnQueryOneSchema).optional(),
  transactions: _select.or(TimeOffTransactionOwnQueryOneSchema).optional(),
});

export const TimeOffTransactionIncludeSchema = z.object({
  balance: _select.or(TimeOffBalanceOwnQueryOneSchema).optional(),
  request: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
});

export const ClockInIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const PaycheckIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  earnings: _select.or(EarningOwnQueryOneSchema).optional(),
  paycheckTaxes: _select.or(PaycheckTaxOwnQueryOneSchema).optional(),
  deductions: _select.or(PaycheckDeductionOwnQueryOneSchema).optional(),
  payrollRun: _select.or(PayrollRunOwnQueryOneSchema).optional(),
});

export const EarningIncludeSchema = z.object({
  paycheck: _select.or(PaycheckOwnQueryOneSchema).optional(),
});

export const PaycheckTaxIncludeSchema = z.object({
  paycheck: _select.or(PaycheckOwnQueryOneSchema).optional(),
});

export const DeductionPolicyIncludeSchema = z.object({
  employeeDeductions: _select.or(EmployeeDeductionOwnQueryOneSchema).optional(),
});

export const EmployeeDeductionIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  policy: _select.or(DeductionPolicyOwnQueryOneSchema).optional(),
  paycheckDeductions: _select.or(PaycheckDeductionOwnQueryOneSchema).optional(),
});

export const PaycheckDeductionIncludeSchema = z.object({
  paycheck: _select.or(PaycheckOwnQueryOneSchema).optional(),
  employeeDeduction: _select.or(EmployeeDeductionOwnQueryOneSchema).optional(),
});

export const EmployeeTaxDataIncludeSchema = z.object({
  stateTaxes: _select.or(StateTaxWithholdingOwnQueryOneSchema).optional(),
  localTaxes: _select.or(LocalTaxWithholdingOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const StateTaxWithholdingIncludeSchema = z.object({
  taxData: _select.or(EmployeeTaxDataOwnQueryOneSchema).optional(),
});

export const LocalTaxWithholdingIncludeSchema = z.object({
  taxData: _select.or(EmployeeTaxDataOwnQueryOneSchema).optional(),
});

export const PayrollRunIncludeSchema = z.object({
  approvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  paychecks: _select.or(PaycheckOwnQueryOneSchema).optional(),
});

export const ContactIncludeSchema = z.object({
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  emails: _select.or(EmailOwnQueryOneSchema).optional(),
  phones: _select.or(PhoneOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
  primaryEmail: _select.or(PrimaryEmailOwnQueryOneSchema).optional(),
  primaryPhone: _select.or(PrimaryPhoneOwnQueryOneSchema).optional(),
  primaryAddress: _select.or(PrimaryAddressOwnQueryOneSchema).optional(),
});

export const CountryIncludeSchema = z.object({
  states: _select.or(StateOwnQueryOneSchema).optional(),
});

export const StateIncludeSchema = z.object({
  country: _select.or(CountryOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
});

export const AddressIncludeSchema = z.object({
  state: _select.or(StateOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
  primary: _select.or(PrimaryAddressOwnQueryOneSchema).optional(),
});

export const EmailIncludeSchema = z.object({
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
  primary: _select.or(PrimaryEmailOwnQueryOneSchema).optional(),
});

export const PhoneIncludeSchema = z.object({
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
  primary: _select.or(PrimaryPhoneOwnQueryOneSchema).optional(),
});

export const PrimaryEmailIncludeSchema = z.object({
  email: _select.or(EmailOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const PrimaryPhoneIncludeSchema = z.object({
  phone: _select.or(PhoneOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const PrimaryAddressIncludeSchema = z.object({
  address: _select.or(AddressOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const DepartmentIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentIncludeSchema
);

export const TitleIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleIncludeSchema
);

export const PersonalDataIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataIncludeSchema
);

export const EmployeeIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeIncludeSchema
);

export const TeamIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamIncludeSchema
);

export const TeamManagerIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerIncludeSchema
);

export const TeamMemberIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberIncludeSchema
);

export const SalaryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryIncludeSchema
);

export const SalaryHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryIncludeSchema
);

export const BenefitIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitIncludeSchema
);

export const BenefitEnrolmentIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentIncludeSchema
);

export const TitleHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryIncludeSchema
);

export const TimeOffPolicyIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyIncludeSchema
);

export const TimeOffBalanceIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceIncludeSchema
);

export const TimeOffRequestIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestIncludeSchema
);

export const TimeOffTransactionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionIncludeSchema
);

export const ClockInIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInIncludeSchema
);

export const PaycheckIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckIncludeSchema
);

export const EarningIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningIncludeSchema
);

export const PaycheckTaxIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxIncludeSchema
);

export const DeductionPolicyIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyIncludeSchema
);

export const EmployeeDeductionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionIncludeSchema
);

export const PaycheckDeductionIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionIncludeSchema
);

export const EmployeeTaxDataIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataIncludeSchema
);

export const StateTaxWithholdingIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingIncludeSchema
);

export const LocalTaxWithholdingIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingIncludeSchema
);

export const PayrollRunIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunIncludeSchema
);

export const ContactIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactIncludeSchema
);

export const CountryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryIncludeSchema
);

export const StateIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateIncludeSchema
);

export const AddressIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressIncludeSchema
);

export const EmailIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailIncludeSchema
);

export const PhoneIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneIncludeSchema
);

export const PrimaryEmailIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailIncludeSchema
);

export const PrimaryPhoneIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneIncludeSchema
);

export const PrimaryAddressIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressIncludeSchema
);

export const DepartmentCompleteSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  isActive: _select,
  parent: _select.or(DepartmentOwnQueryOneSchema).optional(),
  departments: _select.or(DepartmentOwnQueryOneSchema).optional(),
  titles: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const TitleCompleteSelectSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  isActive: _select,
  department: _select.or(DepartmentOwnQueryOneSchema).optional(),
  employees: _select.or(EmployeeOwnQueryOneSchema).optional(),
  histories: _select.or(TitleHistoryOwnQueryOneSchema).optional(),
});

export const PersonalDataCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  ein: _select,
  gender: _select,
  dob: _select,
  maritalStatus: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const EmployeeCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  status: _select,
  title: _select.or(TitleOwnQueryOneSchema).optional(),
  hireDate: _select,
  terminationDate: _select,
  employmentType: _select,
  salary: _select.or(SalaryOwnQueryOneSchema).optional(),
  salaryHistory: _select.or(SalaryHistoryOwnQueryOneSchema).optional(),
  benefits: _select.or(BenefitEnrolmentOwnQueryOneSchema).optional(),
  titleHistory: _select.or(TitleHistoryOwnQueryOneSchema).optional(),
  timeOffBalances: _select.or(TimeOffBalanceOwnQueryOneSchema).optional(),
  timeOffRequests: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
  resolvedTimeOffs: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
  clockIns: _select.or(ClockInOwnQueryOneSchema).optional(),
  personalData: _select.or(PersonalDataOwnQueryOneSchema).optional(),
  taxData: _select.or(EmployeeTaxDataOwnQueryOneSchema).optional(),
  memberships: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  managingTeams: _select.or(TeamManagerOwnQueryOneSchema).optional(),
  managingEmployees: _select.or(EmployeeOwnQueryOneSchema).optional(),
  directManager: _select.or(EmployeeOwnQueryOneSchema).optional(),
  paychecks: _select.or(PaycheckOwnQueryOneSchema).optional(),
  directManagerId: _select,
  deductions: _select.or(EmployeeDeductionOwnQueryOneSchema).optional(),
  resolvedPayrollRuns: _select.or(PayrollRunOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const TeamCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  members: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  managers: _select.or(TeamManagerOwnQueryOneSchema).optional(),
});

export const TeamManagerCompleteSelectSchema = z.object({
  id: _select,
  teamId: _select,
  managerId: _select,
  team: _select.or(TeamOwnQueryOneSchema).optional(),
  manager: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const TeamMemberCompleteSelectSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
  member: _select.or(EmployeeOwnQueryOneSchema).optional(),
  team: _select.or(TeamOwnQueryOneSchema).optional(),
});

export const SalaryCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  gross: _select,
  startDate: _select,
  endDate: _select,
  frequency: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const SalaryHistoryCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  createdAt: _select,
  oldSalary: _select,
  newSalary: _select,
  reason: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const BenefitCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  type: _select,
  enrolments: _select.or(BenefitEnrolmentOwnQueryOneSchema).optional(),
});

export const BenefitEnrolmentCompleteSelectSchema = z.object({
  id: _select,
  benefitId: _select,
  employeeId: _select,
  startDate: _select,
  status: _select,
  benefit: _select.or(BenefitOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const TitleHistoryCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  titleId: _select,
  type: _select,
  reason: _select,
  startDate: _select,
  endDate: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  title: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const TimeOffPolicyCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  accrualRate: _select,
  maxRollover: _select,
  balances: _select.or(TimeOffBalanceOwnQueryOneSchema).optional(),
  requests: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
});

export const TimeOffBalanceCompleteSelectSchema = z.object({
  id: _select,
  policyId: _select,
  employeeId: _select,
  accruedHours: _select,
  usedHours: _select,
  availableHours: _select,
  policy: _select.or(TimeOffPolicyOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  transactions: _select.or(TimeOffTransactionOwnQueryOneSchema).optional(),
});

export const TimeOffRequestCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  employeeId: _select,
  reason: _select,
  policyId: _select,
  resolverId: _select,
  status: _select,
  startDate: _select,
  endDate: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  policy: _select.or(TimeOffPolicyOwnQueryOneSchema).optional(),
  resolver: _select.or(EmployeeOwnQueryOneSchema).optional(),
  transactions: _select.or(TimeOffTransactionOwnQueryOneSchema).optional(),
});

export const TimeOffTransactionCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  type: _select,
  balanceId: _select,
  requestId: _select,
  amount: _select,
  balance: _select.or(TimeOffBalanceOwnQueryOneSchema).optional(),
  request: _select.or(TimeOffRequestOwnQueryOneSchema).optional(),
});

export const ClockInCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  clockIn: _select,
  clockOut: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const PaycheckCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  payrollRunId: _select,
  updatedAt: _select,
  employeeId: _select,
  grossAmount: _select,
  netAmount: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  earnings: _select.or(EarningOwnQueryOneSchema).optional(),
  paycheckTaxes: _select.or(PaycheckTaxOwnQueryOneSchema).optional(),
  deductions: _select.or(PaycheckDeductionOwnQueryOneSchema).optional(),
  payrollRun: _select.or(PayrollRunOwnQueryOneSchema).optional(),
});

export const EarningCompleteSelectSchema = z.object({
  id: _select,
  type: _select,
  hours: _select,
  rate: _select,
  amount: _select,
  paycheckId: _select,
  paycheck: _select.or(PaycheckOwnQueryOneSchema).optional(),
});

export const PaycheckTaxCompleteSelectSchema = z.object({
  id: _select,
  paycheckId: _select,
  taxAuthority: _select,
  amount: _select,
  paycheck: _select.or(PaycheckOwnQueryOneSchema).optional(),
});

export const DeductionPolicyCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  type: _select,
  defaultAmount: _select,
  defaultPercent: _select,
  employeeDeductions: _select.or(EmployeeDeductionOwnQueryOneSchema).optional(),
});

export const EmployeeDeductionCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  policyId: _select,
  employeeAmount: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  policy: _select.or(DeductionPolicyOwnQueryOneSchema).optional(),
  paycheckDeductions: _select.or(PaycheckDeductionOwnQueryOneSchema).optional(),
});

export const PaycheckDeductionCompleteSelectSchema = z.object({
  id: _select,
  paycheckId: _select,
  employeeDeductionId: _select,
  amount: _select,
  paycheck: _select.or(PaycheckOwnQueryOneSchema).optional(),
  employeeDeduction: _select.or(EmployeeDeductionOwnQueryOneSchema).optional(),
});

export const EmployeeTaxDataCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  startDate: _select,
  endDate: _select,
  employeeId: _select,
  federalStatus: _select,
  dependentsCredit: _select,
  multipleJobs: _select,
  otherIncome: _select,
  deductionsAmount: _select,
  extraWithholding: _select,
  isExempt: _select,
  isNonResidentAlien: _select,
  stateTaxes: _select.or(StateTaxWithholdingOwnQueryOneSchema).optional(),
  localTaxes: _select.or(LocalTaxWithholdingOwnQueryOneSchema).optional(),
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
});

export const StateTaxWithholdingCompleteSelectSchema = z.object({
  id: _select,
  taxDataId: _select,
  stateCode: _select,
  stateStatus: _select,
  allowances: _select,
  extraWithholding: _select,
  taxData: _select.or(EmployeeTaxDataOwnQueryOneSchema).optional(),
});

export const LocalTaxWithholdingCompleteSelectSchema = z.object({
  id: _select,
  taxDataId: _select,
  jurisdiction: _select,
  localStatus: _select,
  extraWithholding: _select,
  taxData: _select.or(EmployeeTaxDataOwnQueryOneSchema).optional(),
});

export const PayrollRunCompleteSelectSchema = z.object({
  id: _select,
  resolverId: _select,
  startDate: _select,
  endDate: _select,
  payDate: _select,
  status: _select,
  approvedBy: _select.or(EmployeeOwnQueryOneSchema).optional(),
  paychecks: _select.or(PaycheckOwnQueryOneSchema).optional(),
});

export const ContactCompleteSelectSchema = z.object({
  id: _select,
  employeeId: _select,
  employee: _select.or(EmployeeOwnQueryOneSchema).optional(),
  emails: _select.or(EmailOwnQueryOneSchema).optional(),
  phones: _select.or(PhoneOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
  primaryEmail: _select.or(PrimaryEmailOwnQueryOneSchema).optional(),
  primaryPhone: _select.or(PrimaryPhoneOwnQueryOneSchema).optional(),
  primaryAddress: _select.or(PrimaryAddressOwnQueryOneSchema).optional(),
});

export const CountryCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  states: _select.or(StateOwnQueryOneSchema).optional(),
});

export const StateCompleteSelectSchema = z.object({
  id: _select,
  countryId: _select,
  name: _select,
  code: _select,
  country: _select.or(CountryOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
});

export const AddressCompleteSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  stateId: _select,
  street: _select,
  zip: _select,
  city: _select,
  state: _select.or(StateOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
  primary: _select.or(PrimaryAddressOwnQueryOneSchema).optional(),
});

export const EmailCompleteSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  email: _select,
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
  primary: _select.or(PrimaryEmailOwnQueryOneSchema).optional(),
});

export const PhoneCompleteSelectSchema = z.object({
  id: _select,
  type: _select,
  contactId: _select,
  phone: _select,
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
  primary: _select.or(PrimaryPhoneOwnQueryOneSchema).optional(),
});

export const PrimaryEmailCompleteSelectSchema = z.object({
  id: _select,
  emailId: _select,
  contactId: _select,
  email: _select.or(EmailOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const PrimaryPhoneCompleteSelectSchema = z.object({
  id: _select,
  phoneId: _select,
  contactId: _select,
  phone: _select.or(PhoneOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const PrimaryAddressCompleteSelectSchema = z.object({
  id: _select,
  addressId: _select,
  contactId: _select,
  address: _select.or(AddressOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const DepartmentCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentCompleteSelectSchema
);

export const TitleCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleCompleteSelectSchema
);

export const PersonalDataCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataCompleteSelectSchema
);

export const EmployeeCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeCompleteSelectSchema
);

export const TeamCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamCompleteSelectSchema
);

export const TeamManagerCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerCompleteSelectSchema
);

export const TeamMemberCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberCompleteSelectSchema
);

export const SalaryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryCompleteSelectSchema
);

export const SalaryHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryCompleteSelectSchema
);

export const BenefitCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitCompleteSelectSchema
);

export const BenefitEnrolmentCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentCompleteSelectSchema
);

export const TitleHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryCompleteSelectSchema
);

export const TimeOffPolicyCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyCompleteSelectSchema
);

export const TimeOffBalanceCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceCompleteSelectSchema
);

export const TimeOffRequestCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestCompleteSelectSchema
);

export const TimeOffTransactionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionCompleteSelectSchema
);

export const ClockInCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInCompleteSelectSchema
);

export const PaycheckCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckCompleteSelectSchema
);

export const EarningCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningCompleteSelectSchema
);

export const PaycheckTaxCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxCompleteSelectSchema
);

export const DeductionPolicyCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyCompleteSelectSchema
);

export const EmployeeDeductionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionCompleteSelectSchema
);

export const PaycheckDeductionCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionCompleteSelectSchema
);

export const EmployeeTaxDataCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataCompleteSelectSchema
);

export const StateTaxWithholdingCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingCompleteSelectSchema
);

export const LocalTaxWithholdingCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingCompleteSelectSchema
);

export const PayrollRunCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunCompleteSelectSchema
);

export const ContactCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactCompleteSelectSchema
);

export const CountryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryCompleteSelectSchema
);

export const StateCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateCompleteSelectSchema
);

export const AddressCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressCompleteSelectSchema
);

export const EmailCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailCompleteSelectSchema
);

export const PhoneCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneCompleteSelectSchema
);

export const PrimaryEmailCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailCompleteSelectSchema
);

export const PrimaryPhoneCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneCompleteSelectSchema
);

export const PrimaryAddressCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressCompleteSelectSchema
);

export const DepartmentQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DepartmentDistinctSchema.optional(),
  select: DepartmentOwnSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  include: DepartmentIncludeSchemaJson.optional(),
  where: DepartmentOwnWhereSchemaJson.optional(),
  orderBy: DepartmentOwnOrderBySchemaJson.optional(),
});

export const TitleQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleDistinctSchema.optional(),
  select: TitleOwnSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  include: TitleIncludeSchemaJson.optional(),
  where: TitleOwnWhereSchemaJson.optional(),
  orderBy: TitleOwnOrderBySchemaJson.optional(),
});

export const PersonalDataQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PersonalDataDistinctSchema.optional(),
  select: PersonalDataOwnSelectSchemaJson.optional(),
  omit: PersonalDataOmitSchemaJson.optional(),
  include: PersonalDataIncludeSchemaJson.optional(),
  where: PersonalDataOwnWhereSchemaJson.optional(),
  orderBy: PersonalDataOwnOrderBySchemaJson.optional(),
});

export const EmployeeQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDistinctSchema.optional(),
  select: EmployeeOwnSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  include: EmployeeIncludeSchemaJson.optional(),
  where: EmployeeOwnWhereSchemaJson.optional(),
  orderBy: EmployeeOwnOrderBySchemaJson.optional(),
});

export const TeamQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamDistinctSchema.optional(),
  select: TeamOwnSelectSchemaJson.optional(),
  omit: TeamOmitSchemaJson.optional(),
  include: TeamIncludeSchemaJson.optional(),
  where: TeamOwnWhereSchemaJson.optional(),
  orderBy: TeamOwnOrderBySchemaJson.optional(),
});

export const TeamManagerQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamManagerDistinctSchema.optional(),
  select: TeamManagerOwnSelectSchemaJson.optional(),
  omit: TeamManagerOmitSchemaJson.optional(),
  include: TeamManagerIncludeSchemaJson.optional(),
  where: TeamManagerOwnWhereSchemaJson.optional(),
  orderBy: TeamManagerOwnOrderBySchemaJson.optional(),
});

export const TeamMemberQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamMemberDistinctSchema.optional(),
  select: TeamMemberOwnSelectSchemaJson.optional(),
  omit: TeamMemberOmitSchemaJson.optional(),
  include: TeamMemberIncludeSchemaJson.optional(),
  where: TeamMemberOwnWhereSchemaJson.optional(),
  orderBy: TeamMemberOwnOrderBySchemaJson.optional(),
});

export const SalaryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SalaryDistinctSchema.optional(),
  select: SalaryOwnSelectSchemaJson.optional(),
  omit: SalaryOmitSchemaJson.optional(),
  include: SalaryIncludeSchemaJson.optional(),
  where: SalaryOwnWhereSchemaJson.optional(),
  orderBy: SalaryOwnOrderBySchemaJson.optional(),
});

export const SalaryHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SalaryHistoryDistinctSchema.optional(),
  select: SalaryHistoryOwnSelectSchemaJson.optional(),
  omit: SalaryHistoryOmitSchemaJson.optional(),
  include: SalaryHistoryIncludeSchemaJson.optional(),
  where: SalaryHistoryOwnWhereSchemaJson.optional(),
  orderBy: SalaryHistoryOwnOrderBySchemaJson.optional(),
});

export const BenefitQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BenefitDistinctSchema.optional(),
  select: BenefitOwnSelectSchemaJson.optional(),
  omit: BenefitOmitSchemaJson.optional(),
  include: BenefitIncludeSchemaJson.optional(),
  where: BenefitOwnWhereSchemaJson.optional(),
  orderBy: BenefitOwnOrderBySchemaJson.optional(),
});

export const BenefitEnrolmentQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BenefitEnrolmentDistinctSchema.optional(),
  select: BenefitEnrolmentOwnSelectSchemaJson.optional(),
  omit: BenefitEnrolmentOmitSchemaJson.optional(),
  include: BenefitEnrolmentIncludeSchemaJson.optional(),
  where: BenefitEnrolmentOwnWhereSchemaJson.optional(),
  orderBy: BenefitEnrolmentOwnOrderBySchemaJson.optional(),
});

export const TitleHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleHistoryDistinctSchema.optional(),
  select: TitleHistoryOwnSelectSchemaJson.optional(),
  omit: TitleHistoryOmitSchemaJson.optional(),
  include: TitleHistoryIncludeSchemaJson.optional(),
  where: TitleHistoryOwnWhereSchemaJson.optional(),
  orderBy: TitleHistoryOwnOrderBySchemaJson.optional(),
});

export const TimeOffPolicyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffPolicyDistinctSchema.optional(),
  select: TimeOffPolicyOwnSelectSchemaJson.optional(),
  omit: TimeOffPolicyOmitSchemaJson.optional(),
  include: TimeOffPolicyIncludeSchemaJson.optional(),
  where: TimeOffPolicyOwnWhereSchemaJson.optional(),
  orderBy: TimeOffPolicyOwnOrderBySchemaJson.optional(),
});

export const TimeOffBalanceQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffBalanceDistinctSchema.optional(),
  select: TimeOffBalanceOwnSelectSchemaJson.optional(),
  omit: TimeOffBalanceOmitSchemaJson.optional(),
  include: TimeOffBalanceIncludeSchemaJson.optional(),
  where: TimeOffBalanceOwnWhereSchemaJson.optional(),
  orderBy: TimeOffBalanceOwnOrderBySchemaJson.optional(),
});

export const TimeOffRequestQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffRequestDistinctSchema.optional(),
  select: TimeOffRequestOwnSelectSchemaJson.optional(),
  omit: TimeOffRequestOmitSchemaJson.optional(),
  include: TimeOffRequestIncludeSchemaJson.optional(),
  where: TimeOffRequestOwnWhereSchemaJson.optional(),
  orderBy: TimeOffRequestOwnOrderBySchemaJson.optional(),
});

export const TimeOffTransactionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffTransactionDistinctSchema.optional(),
  select: TimeOffTransactionOwnSelectSchemaJson.optional(),
  omit: TimeOffTransactionOmitSchemaJson.optional(),
  include: TimeOffTransactionIncludeSchemaJson.optional(),
  where: TimeOffTransactionOwnWhereSchemaJson.optional(),
  orderBy: TimeOffTransactionOwnOrderBySchemaJson.optional(),
});

export const ClockInQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ClockInDistinctSchema.optional(),
  select: ClockInOwnSelectSchemaJson.optional(),
  omit: ClockInOmitSchemaJson.optional(),
  include: ClockInIncludeSchemaJson.optional(),
  where: ClockInOwnWhereSchemaJson.optional(),
  orderBy: ClockInOwnOrderBySchemaJson.optional(),
});

export const PaycheckQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckDistinctSchema.optional(),
  select: PaycheckOwnSelectSchemaJson.optional(),
  omit: PaycheckOmitSchemaJson.optional(),
  include: PaycheckIncludeSchemaJson.optional(),
  where: PaycheckOwnWhereSchemaJson.optional(),
  orderBy: PaycheckOwnOrderBySchemaJson.optional(),
});

export const EarningQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EarningDistinctSchema.optional(),
  select: EarningOwnSelectSchemaJson.optional(),
  omit: EarningOmitSchemaJson.optional(),
  include: EarningIncludeSchemaJson.optional(),
  where: EarningOwnWhereSchemaJson.optional(),
  orderBy: EarningOwnOrderBySchemaJson.optional(),
});

export const PaycheckTaxQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckTaxDistinctSchema.optional(),
  select: PaycheckTaxOwnSelectSchemaJson.optional(),
  omit: PaycheckTaxOmitSchemaJson.optional(),
  include: PaycheckTaxIncludeSchemaJson.optional(),
  where: PaycheckTaxOwnWhereSchemaJson.optional(),
  orderBy: PaycheckTaxOwnOrderBySchemaJson.optional(),
});

export const DeductionPolicyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DeductionPolicyDistinctSchema.optional(),
  select: DeductionPolicyOwnSelectSchemaJson.optional(),
  omit: DeductionPolicyOmitSchemaJson.optional(),
  include: DeductionPolicyIncludeSchemaJson.optional(),
  where: DeductionPolicyOwnWhereSchemaJson.optional(),
  orderBy: DeductionPolicyOwnOrderBySchemaJson.optional(),
});

export const EmployeeDeductionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDeductionDistinctSchema.optional(),
  select: EmployeeDeductionOwnSelectSchemaJson.optional(),
  omit: EmployeeDeductionOmitSchemaJson.optional(),
  include: EmployeeDeductionIncludeSchemaJson.optional(),
  where: EmployeeDeductionOwnWhereSchemaJson.optional(),
  orderBy: EmployeeDeductionOwnOrderBySchemaJson.optional(),
});

export const PaycheckDeductionQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckDeductionDistinctSchema.optional(),
  select: PaycheckDeductionOwnSelectSchemaJson.optional(),
  omit: PaycheckDeductionOmitSchemaJson.optional(),
  include: PaycheckDeductionIncludeSchemaJson.optional(),
  where: PaycheckDeductionOwnWhereSchemaJson.optional(),
  orderBy: PaycheckDeductionOwnOrderBySchemaJson.optional(),
});

export const EmployeeTaxDataQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeTaxDataDistinctSchema.optional(),
  select: EmployeeTaxDataOwnSelectSchemaJson.optional(),
  omit: EmployeeTaxDataOmitSchemaJson.optional(),
  include: EmployeeTaxDataIncludeSchemaJson.optional(),
  where: EmployeeTaxDataOwnWhereSchemaJson.optional(),
  orderBy: EmployeeTaxDataOwnOrderBySchemaJson.optional(),
});

export const StateTaxWithholdingQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateTaxWithholdingDistinctSchema.optional(),
  select: StateTaxWithholdingOwnSelectSchemaJson.optional(),
  omit: StateTaxWithholdingOmitSchemaJson.optional(),
  include: StateTaxWithholdingIncludeSchemaJson.optional(),
  where: StateTaxWithholdingOwnWhereSchemaJson.optional(),
  orderBy: StateTaxWithholdingOwnOrderBySchemaJson.optional(),
});

export const LocalTaxWithholdingQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: LocalTaxWithholdingDistinctSchema.optional(),
  select: LocalTaxWithholdingOwnSelectSchemaJson.optional(),
  omit: LocalTaxWithholdingOmitSchemaJson.optional(),
  include: LocalTaxWithholdingIncludeSchemaJson.optional(),
  where: LocalTaxWithholdingOwnWhereSchemaJson.optional(),
  orderBy: LocalTaxWithholdingOwnOrderBySchemaJson.optional(),
});

export const PayrollRunQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PayrollRunDistinctSchema.optional(),
  select: PayrollRunOwnSelectSchemaJson.optional(),
  omit: PayrollRunOmitSchemaJson.optional(),
  include: PayrollRunIncludeSchemaJson.optional(),
  where: PayrollRunOwnWhereSchemaJson.optional(),
  orderBy: PayrollRunOwnOrderBySchemaJson.optional(),
});

export const ContactQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ContactDistinctSchema.optional(),
  select: ContactOwnSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  include: ContactIncludeSchemaJson.optional(),
  where: ContactOwnWhereSchemaJson.optional(),
  orderBy: ContactOwnOrderBySchemaJson.optional(),
});

export const CountryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CountryDistinctSchema.optional(),
  select: CountryOwnSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  include: CountryIncludeSchemaJson.optional(),
  where: CountryOwnWhereSchemaJson.optional(),
  orderBy: CountryOwnOrderBySchemaJson.optional(),
});

export const StateQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateDistinctSchema.optional(),
  select: StateOwnSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  include: StateIncludeSchemaJson.optional(),
  where: StateOwnWhereSchemaJson.optional(),
  orderBy: StateOwnOrderBySchemaJson.optional(),
});

export const AddressQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AddressDistinctSchema.optional(),
  select: AddressOwnSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  include: AddressIncludeSchemaJson.optional(),
  where: AddressOwnWhereSchemaJson.optional(),
  orderBy: AddressOwnOrderBySchemaJson.optional(),
});

export const EmailQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmailDistinctSchema.optional(),
  select: EmailOwnSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  include: EmailIncludeSchemaJson.optional(),
  where: EmailOwnWhereSchemaJson.optional(),
  orderBy: EmailOwnOrderBySchemaJson.optional(),
});

export const PhoneQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PhoneDistinctSchema.optional(),
  select: PhoneOwnSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  include: PhoneIncludeSchemaJson.optional(),
  where: PhoneOwnWhereSchemaJson.optional(),
  orderBy: PhoneOwnOrderBySchemaJson.optional(),
});

export const PrimaryEmailQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryEmailDistinctSchema.optional(),
  select: PrimaryEmailOwnSelectSchemaJson.optional(),
  omit: PrimaryEmailOmitSchemaJson.optional(),
  include: PrimaryEmailIncludeSchemaJson.optional(),
  where: PrimaryEmailOwnWhereSchemaJson.optional(),
  orderBy: PrimaryEmailOwnOrderBySchemaJson.optional(),
});

export const PrimaryPhoneQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryPhoneDistinctSchema.optional(),
  select: PrimaryPhoneOwnSelectSchemaJson.optional(),
  omit: PrimaryPhoneOmitSchemaJson.optional(),
  include: PrimaryPhoneIncludeSchemaJson.optional(),
  where: PrimaryPhoneOwnWhereSchemaJson.optional(),
  orderBy: PrimaryPhoneOwnOrderBySchemaJson.optional(),
});

export const PrimaryAddressQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryAddressDistinctSchema.optional(),
  select: PrimaryAddressOwnSelectSchemaJson.optional(),
  omit: PrimaryAddressOmitSchemaJson.optional(),
  include: PrimaryAddressIncludeSchemaJson.optional(),
  where: PrimaryAddressOwnWhereSchemaJson.optional(),
  orderBy: PrimaryAddressOwnOrderBySchemaJson.optional(),
});

export const DepartmentQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentQuerySchema
);

export const TitleQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleQuerySchema
);

export const PersonalDataQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataQuerySchema
);

export const EmployeeQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeQuerySchema
);

export const TeamQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamQuerySchema
);

export const TeamManagerQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerQuerySchema
);

export const TeamMemberQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberQuerySchema
);

export const SalaryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryQuerySchema
);

export const SalaryHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryQuerySchema
);

export const BenefitQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitQuerySchema
);

export const BenefitEnrolmentQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentQuerySchema
);

export const TitleHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryQuerySchema
);

export const TimeOffPolicyQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyQuerySchema
);

export const TimeOffBalanceQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceQuerySchema
);

export const TimeOffRequestQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestQuerySchema
);

export const TimeOffTransactionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionQuerySchema
);

export const ClockInQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInQuerySchema
);

export const PaycheckQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckQuerySchema
);

export const EarningQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningQuerySchema
);

export const PaycheckTaxQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxQuerySchema
);

export const DeductionPolicyQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyQuerySchema
);

export const EmployeeDeductionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionQuerySchema
);

export const PaycheckDeductionQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionQuerySchema
);

export const EmployeeTaxDataQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataQuerySchema
);

export const StateTaxWithholdingQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingQuerySchema
);

export const LocalTaxWithholdingQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingQuerySchema
);

export const PayrollRunQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunQuerySchema
);

export const ContactQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactQuerySchema
);

export const CountryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryQuerySchema
);

export const StateQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateQuerySchema
);

export const AddressQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressQuerySchema
);

export const EmailQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailQuerySchema
);

export const PhoneQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneQuerySchema
);

export const PrimaryEmailQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailQuerySchema
);

export const PrimaryPhoneQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneQuerySchema
);

export const PrimaryAddressQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressQuerySchema
);

export const DepartmentCompleteQueryOneSchema = z.object({
  select: DepartmentSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  include: DepartmentIncludeSchemaJson.optional(),
  where: DepartmentWhereSchemaJson.optional(),
});

export const TitleCompleteQueryOneSchema = z.object({
  select: TitleSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  include: TitleIncludeSchemaJson.optional(),
  where: TitleWhereSchemaJson.optional(),
});

export const PersonalDataCompleteQueryOneSchema = z.object({
  select: PersonalDataSelectSchemaJson.optional(),
  omit: PersonalDataOmitSchemaJson.optional(),
  include: PersonalDataIncludeSchemaJson.optional(),
  where: PersonalDataWhereSchemaJson.optional(),
});

export const EmployeeCompleteQueryOneSchema = z.object({
  select: EmployeeSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  include: EmployeeIncludeSchemaJson.optional(),
  where: EmployeeWhereSchemaJson.optional(),
});

export const TeamCompleteQueryOneSchema = z.object({
  select: TeamSelectSchemaJson.optional(),
  omit: TeamOmitSchemaJson.optional(),
  include: TeamIncludeSchemaJson.optional(),
  where: TeamWhereSchemaJson.optional(),
});

export const TeamManagerCompleteQueryOneSchema = z.object({
  select: TeamManagerSelectSchemaJson.optional(),
  omit: TeamManagerOmitSchemaJson.optional(),
  include: TeamManagerIncludeSchemaJson.optional(),
  where: TeamManagerWhereSchemaJson.optional(),
});

export const TeamMemberCompleteQueryOneSchema = z.object({
  select: TeamMemberSelectSchemaJson.optional(),
  omit: TeamMemberOmitSchemaJson.optional(),
  include: TeamMemberIncludeSchemaJson.optional(),
  where: TeamMemberWhereSchemaJson.optional(),
});

export const SalaryCompleteQueryOneSchema = z.object({
  select: SalarySelectSchemaJson.optional(),
  omit: SalaryOmitSchemaJson.optional(),
  include: SalaryIncludeSchemaJson.optional(),
  where: SalaryWhereSchemaJson.optional(),
});

export const SalaryHistoryCompleteQueryOneSchema = z.object({
  select: SalaryHistorySelectSchemaJson.optional(),
  omit: SalaryHistoryOmitSchemaJson.optional(),
  include: SalaryHistoryIncludeSchemaJson.optional(),
  where: SalaryHistoryWhereSchemaJson.optional(),
});

export const BenefitCompleteQueryOneSchema = z.object({
  select: BenefitSelectSchemaJson.optional(),
  omit: BenefitOmitSchemaJson.optional(),
  include: BenefitIncludeSchemaJson.optional(),
  where: BenefitWhereSchemaJson.optional(),
});

export const BenefitEnrolmentCompleteQueryOneSchema = z.object({
  select: BenefitEnrolmentSelectSchemaJson.optional(),
  omit: BenefitEnrolmentOmitSchemaJson.optional(),
  include: BenefitEnrolmentIncludeSchemaJson.optional(),
  where: BenefitEnrolmentWhereSchemaJson.optional(),
});

export const TitleHistoryCompleteQueryOneSchema = z.object({
  select: TitleHistorySelectSchemaJson.optional(),
  omit: TitleHistoryOmitSchemaJson.optional(),
  include: TitleHistoryIncludeSchemaJson.optional(),
  where: TitleHistoryWhereSchemaJson.optional(),
});

export const TimeOffPolicyCompleteQueryOneSchema = z.object({
  select: TimeOffPolicySelectSchemaJson.optional(),
  omit: TimeOffPolicyOmitSchemaJson.optional(),
  include: TimeOffPolicyIncludeSchemaJson.optional(),
  where: TimeOffPolicyWhereSchemaJson.optional(),
});

export const TimeOffBalanceCompleteQueryOneSchema = z.object({
  select: TimeOffBalanceSelectSchemaJson.optional(),
  omit: TimeOffBalanceOmitSchemaJson.optional(),
  include: TimeOffBalanceIncludeSchemaJson.optional(),
  where: TimeOffBalanceWhereSchemaJson.optional(),
});

export const TimeOffRequestCompleteQueryOneSchema = z.object({
  select: TimeOffRequestSelectSchemaJson.optional(),
  omit: TimeOffRequestOmitSchemaJson.optional(),
  include: TimeOffRequestIncludeSchemaJson.optional(),
  where: TimeOffRequestWhereSchemaJson.optional(),
});

export const TimeOffTransactionCompleteQueryOneSchema = z.object({
  select: TimeOffTransactionSelectSchemaJson.optional(),
  omit: TimeOffTransactionOmitSchemaJson.optional(),
  include: TimeOffTransactionIncludeSchemaJson.optional(),
  where: TimeOffTransactionWhereSchemaJson.optional(),
});

export const ClockInCompleteQueryOneSchema = z.object({
  select: ClockInSelectSchemaJson.optional(),
  omit: ClockInOmitSchemaJson.optional(),
  include: ClockInIncludeSchemaJson.optional(),
  where: ClockInWhereSchemaJson.optional(),
});

export const PaycheckCompleteQueryOneSchema = z.object({
  select: PaycheckSelectSchemaJson.optional(),
  omit: PaycheckOmitSchemaJson.optional(),
  include: PaycheckIncludeSchemaJson.optional(),
  where: PaycheckWhereSchemaJson.optional(),
});

export const EarningCompleteQueryOneSchema = z.object({
  select: EarningSelectSchemaJson.optional(),
  omit: EarningOmitSchemaJson.optional(),
  include: EarningIncludeSchemaJson.optional(),
  where: EarningWhereSchemaJson.optional(),
});

export const PaycheckTaxCompleteQueryOneSchema = z.object({
  select: PaycheckTaxSelectSchemaJson.optional(),
  omit: PaycheckTaxOmitSchemaJson.optional(),
  include: PaycheckTaxIncludeSchemaJson.optional(),
  where: PaycheckTaxWhereSchemaJson.optional(),
});

export const DeductionPolicyCompleteQueryOneSchema = z.object({
  select: DeductionPolicySelectSchemaJson.optional(),
  omit: DeductionPolicyOmitSchemaJson.optional(),
  include: DeductionPolicyIncludeSchemaJson.optional(),
  where: DeductionPolicyWhereSchemaJson.optional(),
});

export const EmployeeDeductionCompleteQueryOneSchema = z.object({
  select: EmployeeDeductionSelectSchemaJson.optional(),
  omit: EmployeeDeductionOmitSchemaJson.optional(),
  include: EmployeeDeductionIncludeSchemaJson.optional(),
  where: EmployeeDeductionWhereSchemaJson.optional(),
});

export const PaycheckDeductionCompleteQueryOneSchema = z.object({
  select: PaycheckDeductionSelectSchemaJson.optional(),
  omit: PaycheckDeductionOmitSchemaJson.optional(),
  include: PaycheckDeductionIncludeSchemaJson.optional(),
  where: PaycheckDeductionWhereSchemaJson.optional(),
});

export const EmployeeTaxDataCompleteQueryOneSchema = z.object({
  select: EmployeeTaxDataSelectSchemaJson.optional(),
  omit: EmployeeTaxDataOmitSchemaJson.optional(),
  include: EmployeeTaxDataIncludeSchemaJson.optional(),
  where: EmployeeTaxDataWhereSchemaJson.optional(),
});

export const StateTaxWithholdingCompleteQueryOneSchema = z.object({
  select: StateTaxWithholdingSelectSchemaJson.optional(),
  omit: StateTaxWithholdingOmitSchemaJson.optional(),
  include: StateTaxWithholdingIncludeSchemaJson.optional(),
  where: StateTaxWithholdingWhereSchemaJson.optional(),
});

export const LocalTaxWithholdingCompleteQueryOneSchema = z.object({
  select: LocalTaxWithholdingSelectSchemaJson.optional(),
  omit: LocalTaxWithholdingOmitSchemaJson.optional(),
  include: LocalTaxWithholdingIncludeSchemaJson.optional(),
  where: LocalTaxWithholdingWhereSchemaJson.optional(),
});

export const PayrollRunCompleteQueryOneSchema = z.object({
  select: PayrollRunSelectSchemaJson.optional(),
  omit: PayrollRunOmitSchemaJson.optional(),
  include: PayrollRunIncludeSchemaJson.optional(),
  where: PayrollRunWhereSchemaJson.optional(),
});

export const ContactCompleteQueryOneSchema = z.object({
  select: ContactSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  include: ContactIncludeSchemaJson.optional(),
  where: ContactWhereSchemaJson.optional(),
});

export const CountryCompleteQueryOneSchema = z.object({
  select: CountrySelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  include: CountryIncludeSchemaJson.optional(),
  where: CountryWhereSchemaJson.optional(),
});

export const StateCompleteQueryOneSchema = z.object({
  select: StateSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  include: StateIncludeSchemaJson.optional(),
  where: StateWhereSchemaJson.optional(),
});

export const AddressCompleteQueryOneSchema = z.object({
  select: AddressSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  include: AddressIncludeSchemaJson.optional(),
  where: AddressWhereSchemaJson.optional(),
});

export const EmailCompleteQueryOneSchema = z.object({
  select: EmailSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  include: EmailIncludeSchemaJson.optional(),
  where: EmailWhereSchemaJson.optional(),
});

export const PhoneCompleteQueryOneSchema = z.object({
  select: PhoneSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  include: PhoneIncludeSchemaJson.optional(),
  where: PhoneWhereSchemaJson.optional(),
});

export const PrimaryEmailCompleteQueryOneSchema = z.object({
  select: PrimaryEmailSelectSchemaJson.optional(),
  omit: PrimaryEmailOmitSchemaJson.optional(),
  include: PrimaryEmailIncludeSchemaJson.optional(),
  where: PrimaryEmailWhereSchemaJson.optional(),
});

export const PrimaryPhoneCompleteQueryOneSchema = z.object({
  select: PrimaryPhoneSelectSchemaJson.optional(),
  omit: PrimaryPhoneOmitSchemaJson.optional(),
  include: PrimaryPhoneIncludeSchemaJson.optional(),
  where: PrimaryPhoneWhereSchemaJson.optional(),
});

export const PrimaryAddressCompleteQueryOneSchema = z.object({
  select: PrimaryAddressSelectSchemaJson.optional(),
  omit: PrimaryAddressOmitSchemaJson.optional(),
  include: PrimaryAddressIncludeSchemaJson.optional(),
  where: PrimaryAddressWhereSchemaJson.optional(),
});

export const DepartmentCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentCompleteQueryOneSchema
);

export const TitleCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleCompleteQueryOneSchema
);

export const PersonalDataCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataCompleteQueryOneSchema
);

export const EmployeeCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeCompleteQueryOneSchema
);

export const TeamCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamCompleteQueryOneSchema
);

export const TeamManagerCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerCompleteQueryOneSchema
);

export const TeamMemberCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberCompleteQueryOneSchema
);

export const SalaryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryCompleteQueryOneSchema
);

export const SalaryHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryCompleteQueryOneSchema
);

export const BenefitCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitCompleteQueryOneSchema
);

export const BenefitEnrolmentCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentCompleteQueryOneSchema
);

export const TitleHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryCompleteQueryOneSchema
);

export const TimeOffPolicyCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyCompleteQueryOneSchema
);

export const TimeOffBalanceCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceCompleteQueryOneSchema
);

export const TimeOffRequestCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestCompleteQueryOneSchema
);

export const TimeOffTransactionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionCompleteQueryOneSchema
);

export const ClockInCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInCompleteQueryOneSchema
);

export const PaycheckCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckCompleteQueryOneSchema
);

export const EarningCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningCompleteQueryOneSchema
);

export const PaycheckTaxCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxCompleteQueryOneSchema
);

export const DeductionPolicyCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyCompleteQueryOneSchema
);

export const EmployeeDeductionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionCompleteQueryOneSchema
);

export const PaycheckDeductionCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionCompleteQueryOneSchema
);

export const EmployeeTaxDataCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataCompleteQueryOneSchema
);

export const StateTaxWithholdingCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingCompleteQueryOneSchema
);

export const LocalTaxWithholdingCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingCompleteQueryOneSchema
);

export const PayrollRunCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunCompleteQueryOneSchema
);

export const ContactCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactCompleteQueryOneSchema
);

export const CountryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryCompleteQueryOneSchema
);

export const StateCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateCompleteQueryOneSchema
);

export const AddressCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressCompleteQueryOneSchema
);

export const EmailCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailCompleteQueryOneSchema
);

export const PhoneCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneCompleteQueryOneSchema
);

export const PrimaryEmailCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailCompleteQueryOneSchema
);

export const PrimaryPhoneCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneCompleteQueryOneSchema
);

export const PrimaryAddressCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressCompleteQueryOneSchema
);

export const DepartmentCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DepartmentDistinctSchema.optional(),
  select: DepartmentCompleteSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  include: DepartmentIncludeSchemaJson.optional(),
  where: DepartmentWhereSchemaJson.optional(),
  orderBy: DepartmentOrderBySchemaJson.optional(),
});

export const TitleCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleDistinctSchema.optional(),
  select: TitleCompleteSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  include: TitleIncludeSchemaJson.optional(),
  where: TitleWhereSchemaJson.optional(),
  orderBy: TitleOrderBySchemaJson.optional(),
});

export const PersonalDataCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PersonalDataDistinctSchema.optional(),
  select: PersonalDataCompleteSelectSchemaJson.optional(),
  omit: PersonalDataOmitSchemaJson.optional(),
  include: PersonalDataIncludeSchemaJson.optional(),
  where: PersonalDataWhereSchemaJson.optional(),
  orderBy: PersonalDataOrderBySchemaJson.optional(),
});

export const EmployeeCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDistinctSchema.optional(),
  select: EmployeeCompleteSelectSchemaJson.optional(),
  omit: EmployeeOmitSchemaJson.optional(),
  include: EmployeeIncludeSchemaJson.optional(),
  where: EmployeeWhereSchemaJson.optional(),
  orderBy: EmployeeOrderBySchemaJson.optional(),
});

export const TeamCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamDistinctSchema.optional(),
  select: TeamCompleteSelectSchemaJson.optional(),
  omit: TeamOmitSchemaJson.optional(),
  include: TeamIncludeSchemaJson.optional(),
  where: TeamWhereSchemaJson.optional(),
  orderBy: TeamOrderBySchemaJson.optional(),
});

export const TeamManagerCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamManagerDistinctSchema.optional(),
  select: TeamManagerCompleteSelectSchemaJson.optional(),
  omit: TeamManagerOmitSchemaJson.optional(),
  include: TeamManagerIncludeSchemaJson.optional(),
  where: TeamManagerWhereSchemaJson.optional(),
  orderBy: TeamManagerOrderBySchemaJson.optional(),
});

export const TeamMemberCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamMemberDistinctSchema.optional(),
  select: TeamMemberCompleteSelectSchemaJson.optional(),
  omit: TeamMemberOmitSchemaJson.optional(),
  include: TeamMemberIncludeSchemaJson.optional(),
  where: TeamMemberWhereSchemaJson.optional(),
  orderBy: TeamMemberOrderBySchemaJson.optional(),
});

export const SalaryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SalaryDistinctSchema.optional(),
  select: SalaryCompleteSelectSchemaJson.optional(),
  omit: SalaryOmitSchemaJson.optional(),
  include: SalaryIncludeSchemaJson.optional(),
  where: SalaryWhereSchemaJson.optional(),
  orderBy: SalaryOrderBySchemaJson.optional(),
});

export const SalaryHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SalaryHistoryDistinctSchema.optional(),
  select: SalaryHistoryCompleteSelectSchemaJson.optional(),
  omit: SalaryHistoryOmitSchemaJson.optional(),
  include: SalaryHistoryIncludeSchemaJson.optional(),
  where: SalaryHistoryWhereSchemaJson.optional(),
  orderBy: SalaryHistoryOrderBySchemaJson.optional(),
});

export const BenefitCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BenefitDistinctSchema.optional(),
  select: BenefitCompleteSelectSchemaJson.optional(),
  omit: BenefitOmitSchemaJson.optional(),
  include: BenefitIncludeSchemaJson.optional(),
  where: BenefitWhereSchemaJson.optional(),
  orderBy: BenefitOrderBySchemaJson.optional(),
});

export const BenefitEnrolmentCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: BenefitEnrolmentDistinctSchema.optional(),
  select: BenefitEnrolmentCompleteSelectSchemaJson.optional(),
  omit: BenefitEnrolmentOmitSchemaJson.optional(),
  include: BenefitEnrolmentIncludeSchemaJson.optional(),
  where: BenefitEnrolmentWhereSchemaJson.optional(),
  orderBy: BenefitEnrolmentOrderBySchemaJson.optional(),
});

export const TitleHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleHistoryDistinctSchema.optional(),
  select: TitleHistoryCompleteSelectSchemaJson.optional(),
  omit: TitleHistoryOmitSchemaJson.optional(),
  include: TitleHistoryIncludeSchemaJson.optional(),
  where: TitleHistoryWhereSchemaJson.optional(),
  orderBy: TitleHistoryOrderBySchemaJson.optional(),
});

export const TimeOffPolicyCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffPolicyDistinctSchema.optional(),
  select: TimeOffPolicyCompleteSelectSchemaJson.optional(),
  omit: TimeOffPolicyOmitSchemaJson.optional(),
  include: TimeOffPolicyIncludeSchemaJson.optional(),
  where: TimeOffPolicyWhereSchemaJson.optional(),
  orderBy: TimeOffPolicyOrderBySchemaJson.optional(),
});

export const TimeOffBalanceCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffBalanceDistinctSchema.optional(),
  select: TimeOffBalanceCompleteSelectSchemaJson.optional(),
  omit: TimeOffBalanceOmitSchemaJson.optional(),
  include: TimeOffBalanceIncludeSchemaJson.optional(),
  where: TimeOffBalanceWhereSchemaJson.optional(),
  orderBy: TimeOffBalanceOrderBySchemaJson.optional(),
});

export const TimeOffRequestCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffRequestDistinctSchema.optional(),
  select: TimeOffRequestCompleteSelectSchemaJson.optional(),
  omit: TimeOffRequestOmitSchemaJson.optional(),
  include: TimeOffRequestIncludeSchemaJson.optional(),
  where: TimeOffRequestWhereSchemaJson.optional(),
  orderBy: TimeOffRequestOrderBySchemaJson.optional(),
});

export const TimeOffTransactionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TimeOffTransactionDistinctSchema.optional(),
  select: TimeOffTransactionCompleteSelectSchemaJson.optional(),
  omit: TimeOffTransactionOmitSchemaJson.optional(),
  include: TimeOffTransactionIncludeSchemaJson.optional(),
  where: TimeOffTransactionWhereSchemaJson.optional(),
  orderBy: TimeOffTransactionOrderBySchemaJson.optional(),
});

export const ClockInCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ClockInDistinctSchema.optional(),
  select: ClockInCompleteSelectSchemaJson.optional(),
  omit: ClockInOmitSchemaJson.optional(),
  include: ClockInIncludeSchemaJson.optional(),
  where: ClockInWhereSchemaJson.optional(),
  orderBy: ClockInOrderBySchemaJson.optional(),
});

export const PaycheckCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckDistinctSchema.optional(),
  select: PaycheckCompleteSelectSchemaJson.optional(),
  omit: PaycheckOmitSchemaJson.optional(),
  include: PaycheckIncludeSchemaJson.optional(),
  where: PaycheckWhereSchemaJson.optional(),
  orderBy: PaycheckOrderBySchemaJson.optional(),
});

export const EarningCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EarningDistinctSchema.optional(),
  select: EarningCompleteSelectSchemaJson.optional(),
  omit: EarningOmitSchemaJson.optional(),
  include: EarningIncludeSchemaJson.optional(),
  where: EarningWhereSchemaJson.optional(),
  orderBy: EarningOrderBySchemaJson.optional(),
});

export const PaycheckTaxCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckTaxDistinctSchema.optional(),
  select: PaycheckTaxCompleteSelectSchemaJson.optional(),
  omit: PaycheckTaxOmitSchemaJson.optional(),
  include: PaycheckTaxIncludeSchemaJson.optional(),
  where: PaycheckTaxWhereSchemaJson.optional(),
  orderBy: PaycheckTaxOrderBySchemaJson.optional(),
});

export const DeductionPolicyCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DeductionPolicyDistinctSchema.optional(),
  select: DeductionPolicyCompleteSelectSchemaJson.optional(),
  omit: DeductionPolicyOmitSchemaJson.optional(),
  include: DeductionPolicyIncludeSchemaJson.optional(),
  where: DeductionPolicyWhereSchemaJson.optional(),
  orderBy: DeductionPolicyOrderBySchemaJson.optional(),
});

export const EmployeeDeductionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeDeductionDistinctSchema.optional(),
  select: EmployeeDeductionCompleteSelectSchemaJson.optional(),
  omit: EmployeeDeductionOmitSchemaJson.optional(),
  include: EmployeeDeductionIncludeSchemaJson.optional(),
  where: EmployeeDeductionWhereSchemaJson.optional(),
  orderBy: EmployeeDeductionOrderBySchemaJson.optional(),
});

export const PaycheckDeductionCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PaycheckDeductionDistinctSchema.optional(),
  select: PaycheckDeductionCompleteSelectSchemaJson.optional(),
  omit: PaycheckDeductionOmitSchemaJson.optional(),
  include: PaycheckDeductionIncludeSchemaJson.optional(),
  where: PaycheckDeductionWhereSchemaJson.optional(),
  orderBy: PaycheckDeductionOrderBySchemaJson.optional(),
});

export const EmployeeTaxDataCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmployeeTaxDataDistinctSchema.optional(),
  select: EmployeeTaxDataCompleteSelectSchemaJson.optional(),
  omit: EmployeeTaxDataOmitSchemaJson.optional(),
  include: EmployeeTaxDataIncludeSchemaJson.optional(),
  where: EmployeeTaxDataWhereSchemaJson.optional(),
  orderBy: EmployeeTaxDataOrderBySchemaJson.optional(),
});

export const StateTaxWithholdingCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateTaxWithholdingDistinctSchema.optional(),
  select: StateTaxWithholdingCompleteSelectSchemaJson.optional(),
  omit: StateTaxWithholdingOmitSchemaJson.optional(),
  include: StateTaxWithholdingIncludeSchemaJson.optional(),
  where: StateTaxWithholdingWhereSchemaJson.optional(),
  orderBy: StateTaxWithholdingOrderBySchemaJson.optional(),
});

export const LocalTaxWithholdingCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: LocalTaxWithholdingDistinctSchema.optional(),
  select: LocalTaxWithholdingCompleteSelectSchemaJson.optional(),
  omit: LocalTaxWithholdingOmitSchemaJson.optional(),
  include: LocalTaxWithholdingIncludeSchemaJson.optional(),
  where: LocalTaxWithholdingWhereSchemaJson.optional(),
  orderBy: LocalTaxWithholdingOrderBySchemaJson.optional(),
});

export const PayrollRunCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PayrollRunDistinctSchema.optional(),
  select: PayrollRunCompleteSelectSchemaJson.optional(),
  omit: PayrollRunOmitSchemaJson.optional(),
  include: PayrollRunIncludeSchemaJson.optional(),
  where: PayrollRunWhereSchemaJson.optional(),
  orderBy: PayrollRunOrderBySchemaJson.optional(),
});

export const ContactCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ContactDistinctSchema.optional(),
  select: ContactCompleteSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  include: ContactIncludeSchemaJson.optional(),
  where: ContactWhereSchemaJson.optional(),
  orderBy: ContactOrderBySchemaJson.optional(),
});

export const CountryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CountryDistinctSchema.optional(),
  select: CountryCompleteSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  include: CountryIncludeSchemaJson.optional(),
  where: CountryWhereSchemaJson.optional(),
  orderBy: CountryOrderBySchemaJson.optional(),
});

export const StateCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateDistinctSchema.optional(),
  select: StateCompleteSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  include: StateIncludeSchemaJson.optional(),
  where: StateWhereSchemaJson.optional(),
  orderBy: StateOrderBySchemaJson.optional(),
});

export const AddressCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AddressDistinctSchema.optional(),
  select: AddressCompleteSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  include: AddressIncludeSchemaJson.optional(),
  where: AddressWhereSchemaJson.optional(),
  orderBy: AddressOrderBySchemaJson.optional(),
});

export const EmailCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmailDistinctSchema.optional(),
  select: EmailCompleteSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  include: EmailIncludeSchemaJson.optional(),
  where: EmailWhereSchemaJson.optional(),
  orderBy: EmailOrderBySchemaJson.optional(),
});

export const PhoneCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PhoneDistinctSchema.optional(),
  select: PhoneCompleteSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  include: PhoneIncludeSchemaJson.optional(),
  where: PhoneWhereSchemaJson.optional(),
  orderBy: PhoneOrderBySchemaJson.optional(),
});

export const PrimaryEmailCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryEmailDistinctSchema.optional(),
  select: PrimaryEmailCompleteSelectSchemaJson.optional(),
  omit: PrimaryEmailOmitSchemaJson.optional(),
  include: PrimaryEmailIncludeSchemaJson.optional(),
  where: PrimaryEmailWhereSchemaJson.optional(),
  orderBy: PrimaryEmailOrderBySchemaJson.optional(),
});

export const PrimaryPhoneCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryPhoneDistinctSchema.optional(),
  select: PrimaryPhoneCompleteSelectSchemaJson.optional(),
  omit: PrimaryPhoneOmitSchemaJson.optional(),
  include: PrimaryPhoneIncludeSchemaJson.optional(),
  where: PrimaryPhoneWhereSchemaJson.optional(),
  orderBy: PrimaryPhoneOrderBySchemaJson.optional(),
});

export const PrimaryAddressCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PrimaryAddressDistinctSchema.optional(),
  select: PrimaryAddressCompleteSelectSchemaJson.optional(),
  omit: PrimaryAddressOmitSchemaJson.optional(),
  include: PrimaryAddressIncludeSchemaJson.optional(),
  where: PrimaryAddressWhereSchemaJson.optional(),
  orderBy: PrimaryAddressOrderBySchemaJson.optional(),
});

export const DepartmentCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentCompleteQuerySchema
);

export const TitleCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleCompleteQuerySchema
);

export const PersonalDataCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PersonalDataCompleteQuerySchema
);

export const EmployeeCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeCompleteQuerySchema
);

export const TeamCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamCompleteQuerySchema
);

export const TeamManagerCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamManagerCompleteQuerySchema
);

export const TeamMemberCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamMemberCompleteQuerySchema
);

export const SalaryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryCompleteQuerySchema
);

export const SalaryHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SalaryHistoryCompleteQuerySchema
);

export const BenefitCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitCompleteQuerySchema
);

export const BenefitEnrolmentCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  BenefitEnrolmentCompleteQuerySchema
);

export const TitleHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleHistoryCompleteQuerySchema
);

export const TimeOffPolicyCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffPolicyCompleteQuerySchema
);

export const TimeOffBalanceCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffBalanceCompleteQuerySchema
);

export const TimeOffRequestCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffRequestCompleteQuerySchema
);

export const TimeOffTransactionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TimeOffTransactionCompleteQuerySchema
);

export const ClockInCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ClockInCompleteQuerySchema
);

export const PaycheckCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckCompleteQuerySchema
);

export const EarningCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EarningCompleteQuerySchema
);

export const PaycheckTaxCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckTaxCompleteQuerySchema
);

export const DeductionPolicyCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DeductionPolicyCompleteQuerySchema
);

export const EmployeeDeductionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeDeductionCompleteQuerySchema
);

export const PaycheckDeductionCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PaycheckDeductionCompleteQuerySchema
);

export const EmployeeTaxDataCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmployeeTaxDataCompleteQuerySchema
);

export const StateTaxWithholdingCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateTaxWithholdingCompleteQuerySchema
);

export const LocalTaxWithholdingCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  LocalTaxWithholdingCompleteQuerySchema
);

export const PayrollRunCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PayrollRunCompleteQuerySchema
);

export const ContactCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactCompleteQuerySchema
);

export const CountryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryCompleteQuerySchema
);

export const StateCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateCompleteQuerySchema
);

export const AddressCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressCompleteQuerySchema
);

export const EmailCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailCompleteQuerySchema
);

export const PhoneCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneCompleteQuerySchema
);

export const PrimaryEmailCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryEmailCompleteQuerySchema
);

export const PrimaryPhoneCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryPhoneCompleteQuerySchema
);

export const PrimaryAddressCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrimaryAddressCompleteQuerySchema
);

export const DepartmentProjectionSchema = z.union([
  z.object({ omit: DepartmentOmitSchemaJson }),
  z.object({ select: DepartmentSelectSchemaJson }),
  z.object({ include: DepartmentIncludeSchemaJson }),
  z.object({}),
]);

export const TitleProjectionSchema = z.union([
  z.object({ omit: TitleOmitSchemaJson }),
  z.object({ select: TitleSelectSchemaJson }),
  z.object({ include: TitleIncludeSchemaJson }),
  z.object({}),
]);

export const PersonalDataProjectionSchema = z.union([
  z.object({ omit: PersonalDataOmitSchemaJson }),
  z.object({ select: PersonalDataSelectSchemaJson }),
  z.object({ include: PersonalDataIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeProjectionSchema = z.union([
  z.object({ omit: EmployeeOmitSchemaJson }),
  z.object({ select: EmployeeSelectSchemaJson }),
  z.object({ include: EmployeeIncludeSchemaJson }),
  z.object({}),
]);

export const TeamProjectionSchema = z.union([
  z.object({ omit: TeamOmitSchemaJson }),
  z.object({ select: TeamSelectSchemaJson }),
  z.object({ include: TeamIncludeSchemaJson }),
  z.object({}),
]);

export const TeamManagerProjectionSchema = z.union([
  z.object({ omit: TeamManagerOmitSchemaJson }),
  z.object({ select: TeamManagerSelectSchemaJson }),
  z.object({ include: TeamManagerIncludeSchemaJson }),
  z.object({}),
]);

export const TeamMemberProjectionSchema = z.union([
  z.object({ omit: TeamMemberOmitSchemaJson }),
  z.object({ select: TeamMemberSelectSchemaJson }),
  z.object({ include: TeamMemberIncludeSchemaJson }),
  z.object({}),
]);

export const SalaryProjectionSchema = z.union([
  z.object({ omit: SalaryOmitSchemaJson }),
  z.object({ select: SalarySelectSchemaJson }),
  z.object({ include: SalaryIncludeSchemaJson }),
  z.object({}),
]);

export const SalaryHistoryProjectionSchema = z.union([
  z.object({ omit: SalaryHistoryOmitSchemaJson }),
  z.object({ select: SalaryHistorySelectSchemaJson }),
  z.object({ include: SalaryHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const BenefitProjectionSchema = z.union([
  z.object({ omit: BenefitOmitSchemaJson }),
  z.object({ select: BenefitSelectSchemaJson }),
  z.object({ include: BenefitIncludeSchemaJson }),
  z.object({}),
]);

export const BenefitEnrolmentProjectionSchema = z.union([
  z.object({ omit: BenefitEnrolmentOmitSchemaJson }),
  z.object({ select: BenefitEnrolmentSelectSchemaJson }),
  z.object({ include: BenefitEnrolmentIncludeSchemaJson }),
  z.object({}),
]);

export const TitleHistoryProjectionSchema = z.union([
  z.object({ omit: TitleHistoryOmitSchemaJson }),
  z.object({ select: TitleHistorySelectSchemaJson }),
  z.object({ include: TitleHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffPolicyProjectionSchema = z.union([
  z.object({ omit: TimeOffPolicyOmitSchemaJson }),
  z.object({ select: TimeOffPolicySelectSchemaJson }),
  z.object({ include: TimeOffPolicyIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffBalanceProjectionSchema = z.union([
  z.object({ omit: TimeOffBalanceOmitSchemaJson }),
  z.object({ select: TimeOffBalanceSelectSchemaJson }),
  z.object({ include: TimeOffBalanceIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffRequestProjectionSchema = z.union([
  z.object({ omit: TimeOffRequestOmitSchemaJson }),
  z.object({ select: TimeOffRequestSelectSchemaJson }),
  z.object({ include: TimeOffRequestIncludeSchemaJson }),
  z.object({}),
]);

export const TimeOffTransactionProjectionSchema = z.union([
  z.object({ omit: TimeOffTransactionOmitSchemaJson }),
  z.object({ select: TimeOffTransactionSelectSchemaJson }),
  z.object({ include: TimeOffTransactionIncludeSchemaJson }),
  z.object({}),
]);

export const ClockInProjectionSchema = z.union([
  z.object({ omit: ClockInOmitSchemaJson }),
  z.object({ select: ClockInSelectSchemaJson }),
  z.object({ include: ClockInIncludeSchemaJson }),
  z.object({}),
]);

export const PaycheckProjectionSchema = z.union([
  z.object({ omit: PaycheckOmitSchemaJson }),
  z.object({ select: PaycheckSelectSchemaJson }),
  z.object({ include: PaycheckIncludeSchemaJson }),
  z.object({}),
]);

export const EarningProjectionSchema = z.union([
  z.object({ omit: EarningOmitSchemaJson }),
  z.object({ select: EarningSelectSchemaJson }),
  z.object({ include: EarningIncludeSchemaJson }),
  z.object({}),
]);

export const PaycheckTaxProjectionSchema = z.union([
  z.object({ omit: PaycheckTaxOmitSchemaJson }),
  z.object({ select: PaycheckTaxSelectSchemaJson }),
  z.object({ include: PaycheckTaxIncludeSchemaJson }),
  z.object({}),
]);

export const DeductionPolicyProjectionSchema = z.union([
  z.object({ omit: DeductionPolicyOmitSchemaJson }),
  z.object({ select: DeductionPolicySelectSchemaJson }),
  z.object({ include: DeductionPolicyIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeDeductionProjectionSchema = z.union([
  z.object({ omit: EmployeeDeductionOmitSchemaJson }),
  z.object({ select: EmployeeDeductionSelectSchemaJson }),
  z.object({ include: EmployeeDeductionIncludeSchemaJson }),
  z.object({}),
]);

export const PaycheckDeductionProjectionSchema = z.union([
  z.object({ omit: PaycheckDeductionOmitSchemaJson }),
  z.object({ select: PaycheckDeductionSelectSchemaJson }),
  z.object({ include: PaycheckDeductionIncludeSchemaJson }),
  z.object({}),
]);

export const EmployeeTaxDataProjectionSchema = z.union([
  z.object({ omit: EmployeeTaxDataOmitSchemaJson }),
  z.object({ select: EmployeeTaxDataSelectSchemaJson }),
  z.object({ include: EmployeeTaxDataIncludeSchemaJson }),
  z.object({}),
]);

export const StateTaxWithholdingProjectionSchema = z.union([
  z.object({ omit: StateTaxWithholdingOmitSchemaJson }),
  z.object({ select: StateTaxWithholdingSelectSchemaJson }),
  z.object({ include: StateTaxWithholdingIncludeSchemaJson }),
  z.object({}),
]);

export const LocalTaxWithholdingProjectionSchema = z.union([
  z.object({ omit: LocalTaxWithholdingOmitSchemaJson }),
  z.object({ select: LocalTaxWithholdingSelectSchemaJson }),
  z.object({ include: LocalTaxWithholdingIncludeSchemaJson }),
  z.object({}),
]);

export const PayrollRunProjectionSchema = z.union([
  z.object({ omit: PayrollRunOmitSchemaJson }),
  z.object({ select: PayrollRunSelectSchemaJson }),
  z.object({ include: PayrollRunIncludeSchemaJson }),
  z.object({}),
]);

export const ContactProjectionSchema = z.union([
  z.object({ omit: ContactOmitSchemaJson }),
  z.object({ select: ContactSelectSchemaJson }),
  z.object({ include: ContactIncludeSchemaJson }),
  z.object({}),
]);

export const CountryProjectionSchema = z.union([
  z.object({ omit: CountryOmitSchemaJson }),
  z.object({ select: CountrySelectSchemaJson }),
  z.object({ include: CountryIncludeSchemaJson }),
  z.object({}),
]);

export const StateProjectionSchema = z.union([
  z.object({ omit: StateOmitSchemaJson }),
  z.object({ select: StateSelectSchemaJson }),
  z.object({ include: StateIncludeSchemaJson }),
  z.object({}),
]);

export const AddressProjectionSchema = z.union([
  z.object({ omit: AddressOmitSchemaJson }),
  z.object({ select: AddressSelectSchemaJson }),
  z.object({ include: AddressIncludeSchemaJson }),
  z.object({}),
]);

export const EmailProjectionSchema = z.union([
  z.object({ omit: EmailOmitSchemaJson }),
  z.object({ select: EmailSelectSchemaJson }),
  z.object({ include: EmailIncludeSchemaJson }),
  z.object({}),
]);

export const PhoneProjectionSchema = z.union([
  z.object({ omit: PhoneOmitSchemaJson }),
  z.object({ select: PhoneSelectSchemaJson }),
  z.object({ include: PhoneIncludeSchemaJson }),
  z.object({}),
]);

export const PrimaryEmailProjectionSchema = z.union([
  z.object({ omit: PrimaryEmailOmitSchemaJson }),
  z.object({ select: PrimaryEmailSelectSchemaJson }),
  z.object({ include: PrimaryEmailIncludeSchemaJson }),
  z.object({}),
]);

export const PrimaryPhoneProjectionSchema = z.union([
  z.object({ omit: PrimaryPhoneOmitSchemaJson }),
  z.object({ select: PrimaryPhoneSelectSchemaJson }),
  z.object({ include: PrimaryPhoneIncludeSchemaJson }),
  z.object({}),
]);

export const PrimaryAddressProjectionSchema = z.union([
  z.object({ omit: PrimaryAddressOmitSchemaJson }),
  z.object({ select: PrimaryAddressSelectSchemaJson }),
  z.object({ include: PrimaryAddressIncludeSchemaJson }),
  z.object({}),
]);

export const DepartmentOwnCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
  isActive: _bool.optional(),
});

export const TitleOwnCreateSchema = z.object({
  departmentId: _id,
  name: _name,
  slug: _slug,
  description: _description.optional(),
  isActive: _bool.optional(),
});

export const PersonalDataOwnCreateSchema = z.object({
  employeeId: _id,
  ein: _str,
  gender: GenderSchema,
  dob: _date,
  maritalStatus: MaritalStatusSchema,
});

export const EmployeeOwnCreateSchema = z.object({
  uuid: _str.optional(),
  titleId: _id,
  firstName: _str,
  middleName: _str.optional(),
  lastName: _str,
  preferedName: _str.optional(),
  status: EmployeeStatusSchema.optional(),
  hireDate: _date.optional(),
  terminationDate: _date.optional(),
  employmentType: EmploymentTypeSchema,
  directManagerId: _id.optional(),
});

export const TeamOwnCreateSchema = z.object({ name: _name });

export const TeamManagerOwnCreateSchema = z.object({
  teamId: _id,
  managerId: _id,
});

export const TeamMemberOwnCreateSchema = z.object({
  teamId: _id,
  memberId: _id,
});

export const SalaryOwnCreateSchema = z.object({
  employeeId: _id,
  gross: _num,
  startDate: _date,
  endDate: _date.optional(),
  frequency: PayFrequencySchema,
});

export const SalaryHistoryOwnCreateSchema = z.object({
  employeeId: _id,
  oldSalary: _num,
  newSalary: _num,
  reason: _str.optional(),
});

export const BenefitOwnCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  type: _str.optional(),
});

export const BenefitEnrolmentOwnCreateSchema = z.object({
  benefitId: _id,
  employeeId: _id,
  startDate: _date,
  status: BenefitStatusSchema.optional(),
});

export const TitleHistoryOwnCreateSchema = z.object({
  employeeId: _id,
  titleId: _id,
  type: TitleChangeTypeSchema,
  reason: _str.optional(),
  startDate: _date,
  endDate: _date.optional(),
});

export const TimeOffPolicyOwnCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  accrualRate: _currency,
  maxRollover: _num,
});

export const TimeOffBalanceOwnCreateSchema = z.object({
  policyId: _id,
  employeeId: _id,
  accruedHours: _num,
  usedHours: _num,
  availableHours: _num,
});

export const TimeOffRequestOwnCreateSchema = z.object({
  employeeId: _id,
  reason: _str,
  policyId: _id,
  resolverId: _id.optional(),
  status: RequestStatusSchema.optional(),
  startDate: _date,
  endDate: _date,
});

export const TimeOffTransactionOwnCreateSchema = z.object({
  type: TimeOffTransactionTypeSchema,
  balanceId: _id,
  requestId: _id.optional(),
  amount: _currency,
});

export const ClockInOwnCreateSchema = z.object({
  employeeId: _id,
  clockOut: _date.optional(),
});

export const PaycheckOwnCreateSchema = z.object({
  payrollRunId: _id,
  employeeId: _id,
  grossAmount: _currency,
  netAmount: _currency,
});

export const EarningOwnCreateSchema = z.object({
  type: EarningTypeSchema,
  hours: _num.optional(),
  rate: _currency,
  amount: _currency,
  paycheckId: _id,
});

export const PaycheckTaxOwnCreateSchema = z.object({
  paycheckId: _id,
  taxAuthority: _str,
  amount: _currency,
});

export const DeductionPolicyOwnCreateSchema = z.object({
  name: _name,
  type: DeductionTypeSchema,
  defaultAmount: _currency.optional(),
  defaultPercent: _num.optional(),
});

export const EmployeeDeductionOwnCreateSchema = z.object({
  employeeId: _id,
  policyId: _id,
  employeeAmount: _currency.optional(),
});

export const PaycheckDeductionOwnCreateSchema = z.object({
  paycheckId: _id,
  employeeDeductionId: _id,
  amount: _currency,
});

export const EmployeeTaxDataOwnCreateSchema = z.object({
  startDate: _date,
  endDate: _date.optional(),
  employeeId: _id,
  federalStatus: TaxFilingStatusSchema.optional(),
  dependentsCredit: _currency.optional(),
  multipleJobs: _bool.optional(),
  otherIncome: _num.optional(),
  deductionsAmount: _currency.optional(),
  extraWithholding: _num.optional(),
  isExempt: _bool.optional(),
  isNonResidentAlien: _bool.optional(),
});

export const StateTaxWithholdingOwnCreateSchema = z.object({
  taxDataId: _id,
  stateCode: _str,
  stateStatus: _str.optional(),
  allowances: _int.optional(),
  extraWithholding: _num.optional(),
});

export const LocalTaxWithholdingOwnCreateSchema = z.object({
  taxDataId: _id,
  jurisdiction: _str,
  localStatus: _str.optional(),
  extraWithholding: _num.optional(),
});

export const PayrollRunOwnCreateSchema = z.object({
  resolverId: _id,
  startDate: _date,
  endDate: _date,
  payDate: _date,
  status: PayrollStatusSchema.optional(),
});

export const ContactOwnCreateSchema = z.object({ employeeId: _id });

export const CountryOwnCreateSchema = z.object({ name: _name, code: _str });

export const StateOwnCreateSchema = z.object({
  countryId: _id,
  name: _name,
  code: _str,
});

export const AddressOwnCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  stateId: _id,
  street: _str,
  zip: _str,
  city: _str,
});

export const EmailOwnCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  email: _email,
});

export const PhoneOwnCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  phone: _phone,
});

export const PrimaryEmailOwnCreateSchema = z.object({
  emailId: _id,
  contactId: _id,
});

export const PrimaryPhoneOwnCreateSchema = z.object({
  phoneId: _id,
  contactId: _id,
});

export const PrimaryAddressOwnCreateSchema = z.object({
  addressId: _id,
  contactId: _id,
});

export const DepartmentCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
  isActive: _bool.optional(),
  parent: z.object({ create: DepartmentOwnCreateSchema }).optional(),
  departments: z
    .object({ createMany: DepartmentOwnCreateSchema.array() })
    .array(),
  titles: z.object({ createMany: TitleOwnCreateSchema.array() }).array(),
});

export const TitleCreateSchema = z.object({
  departmentId: _id,
  name: _name,
  slug: _slug,
  description: _description.optional(),
  isActive: _bool.optional(),
  department: z.object({ create: DepartmentOwnCreateSchema }),
  employees: z.object({ createMany: EmployeeOwnCreateSchema.array() }).array(),
  histories: z
    .object({ createMany: TitleHistoryOwnCreateSchema.array() })
    .array(),
});

export const PersonalDataCreateSchema = z.object({
  employeeId: _id,
  ein: _str,
  gender: GenderSchema,
  dob: _date,
  maritalStatus: MaritalStatusSchema,
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const EmployeeCreateSchema = z.object({
  uuid: _str.optional(),
  titleId: _id,
  firstName: _str,
  middleName: _str.optional(),
  lastName: _str,
  preferedName: _str.optional(),
  status: EmployeeStatusSchema.optional(),
  title: z.object({ create: TitleOwnCreateSchema }),
  hireDate: _date.optional(),
  terminationDate: _date.optional(),
  employmentType: EmploymentTypeSchema,
  salary: z.object({ create: SalaryOwnCreateSchema }).optional(),
  salaryHistory: z
    .object({ createMany: SalaryHistoryOwnCreateSchema.array() })
    .array(),
  benefits: z
    .object({ createMany: BenefitEnrolmentOwnCreateSchema.array() })
    .array(),
  titleHistory: z
    .object({ createMany: TitleHistoryOwnCreateSchema.array() })
    .array(),
  timeOffBalances: z
    .object({ createMany: TimeOffBalanceOwnCreateSchema.array() })
    .array(),
  timeOffRequests: z
    .object({ createMany: TimeOffRequestOwnCreateSchema.array() })
    .array(),
  resolvedTimeOffs: z
    .object({ createMany: TimeOffRequestOwnCreateSchema.array() })
    .array(),
  clockIns: z.object({ createMany: ClockInOwnCreateSchema.array() }).array(),
  personalData: z.object({ create: PersonalDataOwnCreateSchema }).optional(),
  taxData: z
    .object({ createMany: EmployeeTaxDataOwnCreateSchema.array() })
    .array(),
  memberships: z
    .object({ createMany: TeamMemberOwnCreateSchema.array() })
    .array(),
  managingTeams: z
    .object({ createMany: TeamManagerOwnCreateSchema.array() })
    .array(),
  managingEmployees: z
    .object({ createMany: EmployeeOwnCreateSchema.array() })
    .array(),
  directManager: z.object({ create: EmployeeOwnCreateSchema }).optional(),
  paychecks: z.object({ createMany: PaycheckOwnCreateSchema.array() }).array(),
  directManagerId: _id.optional(),
  deductions: z
    .object({ createMany: EmployeeDeductionOwnCreateSchema.array() })
    .array(),
  resolvedPayrollRuns: z
    .object({ createMany: PayrollRunOwnCreateSchema.array() })
    .array(),
  contact: z.object({ create: ContactOwnCreateSchema }).optional(),
});

export const TeamCreateSchema = z.object({
  name: _name,
  members: z.object({ createMany: TeamMemberOwnCreateSchema.array() }).array(),
  managers: z
    .object({ createMany: TeamManagerOwnCreateSchema.array() })
    .array(),
});

export const TeamManagerCreateSchema = z.object({
  teamId: _id,
  managerId: _id,
  team: z.object({ create: TeamOwnCreateSchema }),
  manager: z.object({ create: EmployeeOwnCreateSchema }),
});

export const TeamMemberCreateSchema = z.object({
  teamId: _id,
  memberId: _id,
  member: z.object({ create: EmployeeOwnCreateSchema }),
  team: z.object({ create: TeamOwnCreateSchema }),
});

export const SalaryCreateSchema = z.object({
  employeeId: _id,
  gross: _num,
  startDate: _date,
  endDate: _date.optional(),
  frequency: PayFrequencySchema,
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const SalaryHistoryCreateSchema = z.object({
  employeeId: _id,
  oldSalary: _num,
  newSalary: _num,
  reason: _str.optional(),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const BenefitCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  type: _str.optional(),
  enrolments: z
    .object({ createMany: BenefitEnrolmentOwnCreateSchema.array() })
    .array(),
});

export const BenefitEnrolmentCreateSchema = z.object({
  benefitId: _id,
  employeeId: _id,
  startDate: _date,
  status: BenefitStatusSchema.optional(),
  benefit: z.object({ create: BenefitOwnCreateSchema }),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const TitleHistoryCreateSchema = z.object({
  employeeId: _id,
  titleId: _id,
  type: TitleChangeTypeSchema,
  reason: _str.optional(),
  startDate: _date,
  endDate: _date.optional(),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
  title: z.object({ create: TitleOwnCreateSchema }),
});

export const TimeOffPolicyCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  accrualRate: _currency,
  maxRollover: _num,
  balances: z
    .object({ createMany: TimeOffBalanceOwnCreateSchema.array() })
    .array(),
  requests: z
    .object({ createMany: TimeOffRequestOwnCreateSchema.array() })
    .array(),
});

export const TimeOffBalanceCreateSchema = z.object({
  policyId: _id,
  employeeId: _id,
  accruedHours: _num,
  usedHours: _num,
  availableHours: _num,
  policy: z.object({ create: TimeOffPolicyOwnCreateSchema }),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
  transactions: z
    .object({ createMany: TimeOffTransactionOwnCreateSchema.array() })
    .array(),
});

export const TimeOffRequestCreateSchema = z.object({
  employeeId: _id,
  reason: _str,
  policyId: _id,
  resolverId: _id.optional(),
  status: RequestStatusSchema.optional(),
  startDate: _date,
  endDate: _date,
  employee: z.object({ create: EmployeeOwnCreateSchema }),
  policy: z.object({ create: TimeOffPolicyOwnCreateSchema }),
  resolver: z.object({ create: EmployeeOwnCreateSchema }).optional(),
  transactions: z
    .object({ createMany: TimeOffTransactionOwnCreateSchema.array() })
    .array(),
});

export const TimeOffTransactionCreateSchema = z.object({
  type: TimeOffTransactionTypeSchema,
  balanceId: _id,
  requestId: _id.optional(),
  amount: _currency,
  balance: z.object({ create: TimeOffBalanceOwnCreateSchema }),
  request: z.object({ create: TimeOffRequestOwnCreateSchema }).optional(),
});

export const ClockInCreateSchema = z.object({
  employeeId: _id,
  clockOut: _date.optional(),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const PaycheckCreateSchema = z.object({
  payrollRunId: _id,
  employeeId: _id,
  grossAmount: _currency,
  netAmount: _currency,
  employee: z.object({ create: EmployeeOwnCreateSchema }),
  earnings: z.object({ createMany: EarningOwnCreateSchema.array() }).array(),
  paycheckTaxes: z
    .object({ createMany: PaycheckTaxOwnCreateSchema.array() })
    .array(),
  deductions: z
    .object({ createMany: PaycheckDeductionOwnCreateSchema.array() })
    .array(),
  payrollRun: z.object({ create: PayrollRunOwnCreateSchema }),
});

export const EarningCreateSchema = z.object({
  type: EarningTypeSchema,
  hours: _num.optional(),
  rate: _currency,
  amount: _currency,
  paycheckId: _id,
  paycheck: z.object({ create: PaycheckOwnCreateSchema }),
});

export const PaycheckTaxCreateSchema = z.object({
  paycheckId: _id,
  taxAuthority: _str,
  amount: _currency,
  paycheck: z.object({ create: PaycheckOwnCreateSchema }),
});

export const DeductionPolicyCreateSchema = z.object({
  name: _name,
  type: DeductionTypeSchema,
  defaultAmount: _currency.optional(),
  defaultPercent: _num.optional(),
  employeeDeductions: z
    .object({ createMany: EmployeeDeductionOwnCreateSchema.array() })
    .array(),
});

export const EmployeeDeductionCreateSchema = z.object({
  employeeId: _id,
  policyId: _id,
  employeeAmount: _currency.optional(),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
  policy: z.object({ create: DeductionPolicyOwnCreateSchema }),
  paycheckDeductions: z
    .object({ createMany: PaycheckDeductionOwnCreateSchema.array() })
    .array(),
});

export const PaycheckDeductionCreateSchema = z.object({
  paycheckId: _id,
  employeeDeductionId: _id,
  amount: _currency,
  paycheck: z.object({ create: PaycheckOwnCreateSchema }),
  employeeDeduction: z.object({ create: EmployeeDeductionOwnCreateSchema }),
});

export const EmployeeTaxDataCreateSchema = z.object({
  startDate: _date,
  endDate: _date.optional(),
  employeeId: _id,
  federalStatus: TaxFilingStatusSchema.optional(),
  dependentsCredit: _currency.optional(),
  multipleJobs: _bool.optional(),
  otherIncome: _num.optional(),
  deductionsAmount: _currency.optional(),
  extraWithholding: _num.optional(),
  isExempt: _bool.optional(),
  isNonResidentAlien: _bool.optional(),
  stateTaxes: z
    .object({ createMany: StateTaxWithholdingOwnCreateSchema.array() })
    .array(),
  localTaxes: z
    .object({ createMany: LocalTaxWithholdingOwnCreateSchema.array() })
    .array(),
  employee: z.object({ create: EmployeeOwnCreateSchema }),
});

export const StateTaxWithholdingCreateSchema = z.object({
  taxDataId: _id,
  stateCode: _str,
  stateStatus: _str.optional(),
  allowances: _int.optional(),
  extraWithholding: _num.optional(),
  taxData: z.object({ create: EmployeeTaxDataOwnCreateSchema }),
});

export const LocalTaxWithholdingCreateSchema = z.object({
  taxDataId: _id,
  jurisdiction: _str,
  localStatus: _str.optional(),
  extraWithholding: _num.optional(),
  taxData: z.object({ create: EmployeeTaxDataOwnCreateSchema }),
});

export const PayrollRunCreateSchema = z.object({
  resolverId: _id,
  startDate: _date,
  endDate: _date,
  payDate: _date,
  status: PayrollStatusSchema.optional(),
  approvedBy: z.object({ create: EmployeeOwnCreateSchema }),
  paychecks: z.object({ createMany: PaycheckOwnCreateSchema.array() }).array(),
});

export const ContactCreateSchema = z.object({
  employeeId: _id,
  employee: z.object({ create: EmployeeOwnCreateSchema }),
  emails: z.object({ createMany: EmailOwnCreateSchema.array() }).array(),
  phones: z.object({ createMany: PhoneOwnCreateSchema.array() }).array(),
  addresses: z.object({ createMany: AddressOwnCreateSchema.array() }).array(),
  primaryEmail: z.object({ create: PrimaryEmailOwnCreateSchema }).optional(),
  primaryPhone: z.object({ create: PrimaryPhoneOwnCreateSchema }).optional(),
  primaryAddress: z
    .object({ create: PrimaryAddressOwnCreateSchema })
    .optional(),
});

export const CountryCreateSchema = z.object({
  name: _name,
  code: _str,
  states: z.object({ createMany: StateOwnCreateSchema.array() }).array(),
});

export const StateCreateSchema = z.object({
  countryId: _id,
  name: _name,
  code: _str,
  country: z.object({ create: CountryOwnCreateSchema }),
  addresses: z.object({ createMany: AddressOwnCreateSchema.array() }).array(),
});

export const AddressCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  stateId: _id,
  street: _str,
  zip: _str,
  city: _str,
  state: z.object({ create: StateOwnCreateSchema }),
  contact: z.object({ create: ContactOwnCreateSchema }),
  primary: z.object({ create: PrimaryAddressOwnCreateSchema }).optional(),
});

export const EmailCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  email: _email,
  contact: z.object({ create: ContactOwnCreateSchema }),
  primary: z.object({ create: PrimaryEmailOwnCreateSchema }).optional(),
});

export const PhoneCreateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  phone: _phone,
  contact: z.object({ create: ContactOwnCreateSchema }),
  primary: z.object({ create: PrimaryPhoneOwnCreateSchema }).optional(),
});

export const PrimaryEmailCreateSchema = z.object({
  emailId: _id,
  contactId: _id,
  email: z.object({ create: EmailOwnCreateSchema }),
  contact: z.object({ create: ContactOwnCreateSchema }),
});

export const PrimaryPhoneCreateSchema = z.object({
  phoneId: _id,
  contactId: _id,
  phone: z.object({ create: PhoneOwnCreateSchema }),
  contact: z.object({ create: ContactOwnCreateSchema }),
});

export const PrimaryAddressCreateSchema = z.object({
  addressId: _id,
  contactId: _id,
  address: z.object({ create: AddressOwnCreateSchema }),
  contact: z.object({ create: ContactOwnCreateSchema }),
});

export const DepartmentUpdateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
  isActive: _bool.optional(),
});

export const TitleUpdateSchema = z.object({
  departmentId: _id,
  name: _name,
  slug: _slug,
  description: _description.optional(),
  isActive: _bool.optional(),
});

export const PersonalDataUpdateSchema = z.object({
  employeeId: _id,
  ein: _str,
  gender: GenderSchema,
  dob: _date,
  maritalStatus: MaritalStatusSchema,
});

export const EmployeeUpdateSchema = z.object({
  titleId: _id,
  firstName: _str,
  middleName: _str.optional(),
  lastName: _str,
  preferedName: _str.optional(),
  status: EmployeeStatusSchema.optional(),
  hireDate: _date.optional(),
  terminationDate: _date.optional(),
  employmentType: EmploymentTypeSchema,
  directManagerId: _id.optional(),
});

export const TeamUpdateSchema = z.object({ name: _name });

export const TeamManagerUpdateSchema = z.object({
  teamId: _id,
  managerId: _id,
});

export const TeamMemberUpdateSchema = z.object({ teamId: _id, memberId: _id });

export const SalaryUpdateSchema = z.object({
  employeeId: _id,
  gross: _num,
  startDate: _date,
  endDate: _date.optional(),
  frequency: PayFrequencySchema,
});

export const SalaryHistoryUpdateSchema = z.object({
  employeeId: _id,
  oldSalary: _num,
  newSalary: _num,
  reason: _str.optional(),
});

export const BenefitUpdateSchema = z.object({
  name: _name,
  description: _description.optional(),
  type: _str.optional(),
});

export const BenefitEnrolmentUpdateSchema = z.object({
  benefitId: _id,
  employeeId: _id,
  startDate: _date,
  status: BenefitStatusSchema.optional(),
});

export const TitleHistoryUpdateSchema = z.object({
  employeeId: _id,
  titleId: _id,
  type: TitleChangeTypeSchema,
  reason: _str.optional(),
  startDate: _date,
  endDate: _date.optional(),
});

export const TimeOffPolicyUpdateSchema = z.object({
  name: _name,
  description: _description.optional(),
  accrualRate: _currency,
  maxRollover: _num,
});

export const TimeOffBalanceUpdateSchema = z.object({
  policyId: _id,
  employeeId: _id,
  accruedHours: _num,
  usedHours: _num,
  availableHours: _num,
});

export const TimeOffRequestUpdateSchema = z.object({
  employeeId: _id,
  reason: _str,
  policyId: _id,
  resolverId: _id.optional(),
  status: RequestStatusSchema.optional(),
  startDate: _date,
  endDate: _date,
});

export const TimeOffTransactionUpdateSchema = z.object({
  type: TimeOffTransactionTypeSchema,
  balanceId: _id,
  requestId: _id.optional(),
  amount: _currency,
});

export const ClockInUpdateSchema = z.object({
  employeeId: _id,
  clockOut: _date.optional(),
});

export const PaycheckUpdateSchema = z.object({
  payrollRunId: _id,
  employeeId: _id,
  grossAmount: _currency,
  netAmount: _currency,
});

export const EarningUpdateSchema = z.object({
  type: EarningTypeSchema,
  hours: _num.optional(),
  rate: _currency,
  amount: _currency,
  paycheckId: _id,
});

export const PaycheckTaxUpdateSchema = z.object({
  paycheckId: _id,
  taxAuthority: _str,
  amount: _currency,
});

export const DeductionPolicyUpdateSchema = z.object({
  name: _name,
  type: DeductionTypeSchema,
  defaultAmount: _currency.optional(),
  defaultPercent: _num.optional(),
});

export const EmployeeDeductionUpdateSchema = z.object({
  employeeId: _id,
  policyId: _id,
  employeeAmount: _currency.optional(),
});

export const PaycheckDeductionUpdateSchema = z.object({
  paycheckId: _id,
  employeeDeductionId: _id,
  amount: _currency,
});

export const EmployeeTaxDataUpdateSchema = z.object({
  startDate: _date,
  endDate: _date.optional(),
  employeeId: _id,
  federalStatus: TaxFilingStatusSchema.optional(),
  dependentsCredit: _currency.optional(),
  multipleJobs: _bool.optional(),
  otherIncome: _num.optional(),
  deductionsAmount: _currency.optional(),
  extraWithholding: _num.optional(),
  isExempt: _bool.optional(),
  isNonResidentAlien: _bool.optional(),
});

export const StateTaxWithholdingUpdateSchema = z.object({
  taxDataId: _id,
  stateCode: _str,
  stateStatus: _str.optional(),
  allowances: _int.optional(),
  extraWithholding: _num.optional(),
});

export const LocalTaxWithholdingUpdateSchema = z.object({
  taxDataId: _id,
  jurisdiction: _str,
  localStatus: _str.optional(),
  extraWithholding: _num.optional(),
});

export const PayrollRunUpdateSchema = z.object({
  resolverId: _id,
  startDate: _date,
  endDate: _date,
  payDate: _date,
  status: PayrollStatusSchema.optional(),
});

export const ContactUpdateSchema = z.object({ employeeId: _id });

export const CountryUpdateSchema = z.object({ name: _name, code: _str });

export const StateUpdateSchema = z.object({
  countryId: _id,
  name: _name,
  code: _str,
});

export const AddressUpdateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  stateId: _id,
  street: _str,
  zip: _str,
  city: _str,
});

export const EmailUpdateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  email: _email,
});

export const PhoneUpdateSchema = z.object({
  type: ContactTypeSchema,
  contactId: _id,
  phone: _phone,
});

export const PrimaryEmailUpdateSchema = z.object({
  emailId: _id,
  contactId: _id,
});

export const PrimaryPhoneUpdateSchema = z.object({
  phoneId: _id,
  contactId: _id,
});

export const PrimaryAddressUpdateSchema = z.object({
  addressId: _id,
  contactId: _id,
});
