
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- Department Schemas ----------


export const DepartmentSchema = z.object({
  id: z.number().int(),
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
});

export const DepartmentCreateSchema = z.object({
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
});

export const DepartmentUpdateSchema = z.object({
  id: z.number().int().optional(),
  parentId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
});

export const DepartmentWhereSchema = toWhereQuerySchema(DepartmentSchema);

export const DepartmentOrderSchema =  toOrderBySchema(DepartmentSchema);

export const DepartmentSelectSchema = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  parent: z.boolean().optional(),
  children: z.boolean().optional(),
  titles: z.boolean().optional(),
});

export const DepartmentQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: DepartmentWhereSchema.optional(),
  orderBy: DepartmentOrderSchema.optional(),
  select: DepartmentSelectSchema.optional()
});

export type Department = z.infer<typeof DepartmentSchema>;
export type DepartmentCreate = z.infer<typeof DepartmentCreateSchema>;
export type DepartmentUpdate = z.infer<typeof DepartmentUpdateSchema>;
export type DepartmentWhere = z.infer<typeof DepartmentWhereSchema>;
export type DepartmentOrder = z.infer<typeof DepartmentOrderSchema>;
export type DepartmentSelect = z.infer<typeof DepartmentSelectSchema>;
export type DepartmentQuery = z.infer<typeof DepartmentQuerySchema>;




// ---------- Title Schemas ----------


export const TitleSchema = z.object({
  id: z.number().int(),
  departmentId: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const TitleCreateSchema = z.object({
  departmentId: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const TitleUpdateSchema = z.object({
  id: z.number().int().optional(),
  departmentId: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const TitleWhereSchema = toWhereQuerySchema(TitleSchema);

export const TitleOrderSchema =  toOrderBySchema(TitleSchema);

export const TitleSelectSchema = z.object({
  id: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  department: z.boolean().optional(),
  employees: z.boolean().optional(),
  histories: z.boolean().optional(),
});

export const TitleQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TitleWhereSchema.optional(),
  orderBy: TitleOrderSchema.optional(),
  select: TitleSelectSchema.optional()
});

export type Title = z.infer<typeof TitleSchema>;
export type TitleCreate = z.infer<typeof TitleCreateSchema>;
export type TitleUpdate = z.infer<typeof TitleUpdateSchema>;
export type TitleWhere = z.infer<typeof TitleWhereSchema>;
export type TitleOrder = z.infer<typeof TitleOrderSchema>;
export type TitleSelect = z.infer<typeof TitleSelectSchema>;
export type TitleQuery = z.infer<typeof TitleQuerySchema>;




// ---------- Employee Schemas ----------


export const EmployeeSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  titleId: z.number().int(),
  status: z.any(),
});

export const EmployeeCreateSchema = z.object({
  uuid: z.string(),
  titleId: z.number().int(),
  status: z.any(),
});

export const EmployeeUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  titleId: z.number().int().optional(),
  status: z.any().optional(),
});

export const EmployeeWhereSchema = toWhereQuerySchema(EmployeeSchema);

export const EmployeeOrderSchema =  toOrderBySchema(EmployeeSchema);

export const EmployeeSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  titleId: z.boolean().optional(),
  status: z.boolean().optional(),
  title: z.boolean().optional(),
  leadTeams: z.boolean().optional(),
  memberships: z.boolean().optional(),
  salary: z.boolean().optional(),
  salaryHistory: z.boolean().optional(),
  benefits: z.boolean().optional(),
  titleHistory: z.boolean().optional(),
  timeOffBalances: z.boolean().optional(),
  timeOffRequests: z.boolean().optional(),
  resolvedTimeOffs: z.boolean().optional(),
  clockIns: z.boolean().optional(),
  payments: z.boolean().optional(),
  resolvedPayments: z.boolean().optional(),
});

export const EmployeeQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeWhereSchema.optional(),
  orderBy: EmployeeOrderSchema.optional(),
  select: EmployeeSelectSchema.optional()
});

export type Employee = z.infer<typeof EmployeeSchema>;
export type EmployeeCreate = z.infer<typeof EmployeeCreateSchema>;
export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;
export type EmployeeWhere = z.infer<typeof EmployeeWhereSchema>;
export type EmployeeOrder = z.infer<typeof EmployeeOrderSchema>;
export type EmployeeSelect = z.infer<typeof EmployeeSelectSchema>;
export type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;




// ---------- Team Schemas ----------


export const TeamSchema = z.object({
  id: z.number().int(),
  managerId: z.number().int(),
  name: z.string(),
});

export const TeamCreateSchema = z.object({
  managerId: z.number().int(),
  name: z.string(),
});

export const TeamUpdateSchema = z.object({
  id: z.number().int().optional(),
  managerId: z.number().int().optional(),
  name: z.string().optional(),
});

export const TeamWhereSchema = toWhereQuerySchema(TeamSchema);

export const TeamOrderSchema =  toOrderBySchema(TeamSchema);

export const TeamSelectSchema = z.object({
  id: z.boolean().optional(),
  managerId: z.boolean().optional(),
  name: z.boolean().optional(),
  manager: z.boolean().optional(),
  members: z.boolean().optional(),
});

export const TeamQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TeamWhereSchema.optional(),
  orderBy: TeamOrderSchema.optional(),
  select: TeamSelectSchema.optional()
});

export type Team = z.infer<typeof TeamSchema>;
export type TeamCreate = z.infer<typeof TeamCreateSchema>;
export type TeamUpdate = z.infer<typeof TeamUpdateSchema>;
export type TeamWhere = z.infer<typeof TeamWhereSchema>;
export type TeamOrder = z.infer<typeof TeamOrderSchema>;
export type TeamSelect = z.infer<typeof TeamSelectSchema>;
export type TeamQuery = z.infer<typeof TeamQuerySchema>;




// ---------- TeamMember Schemas ----------


export const TeamMemberSchema = z.object({
  id: z.number().int(),
  teamId: z.number().int(),
  memberId: z.number().int(),
});

export const TeamMemberCreateSchema = z.object({
  teamId: z.number().int(),
  memberId: z.number().int(),
});

export const TeamMemberUpdateSchema = z.object({
  id: z.number().int().optional(),
  teamId: z.number().int().optional(),
  memberId: z.number().int().optional(),
});

export const TeamMemberWhereSchema = toWhereQuerySchema(TeamMemberSchema);

export const TeamMemberOrderSchema =  toOrderBySchema(TeamMemberSchema);

export const TeamMemberSelectSchema = z.object({
  id: z.boolean().optional(),
  teamId: z.boolean().optional(),
  memberId: z.boolean().optional(),
  employee: z.boolean().optional(),
  team: z.boolean().optional(),
});

export const TeamMemberQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TeamMemberWhereSchema.optional(),
  orderBy: TeamMemberOrderSchema.optional(),
  select: TeamMemberSelectSchema.optional()
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type TeamMemberCreate = z.infer<typeof TeamMemberCreateSchema>;
export type TeamMemberUpdate = z.infer<typeof TeamMemberUpdateSchema>;
export type TeamMemberWhere = z.infer<typeof TeamMemberWhereSchema>;
export type TeamMemberOrder = z.infer<typeof TeamMemberOrderSchema>;
export type TeamMemberSelect = z.infer<typeof TeamMemberSelectSchema>;
export type TeamMemberQuery = z.infer<typeof TeamMemberQuerySchema>;




// ---------- Salary Schemas ----------


export const SalarySchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  salary: z.number(),
  frequency: z.any(),
  lastReviewDate: z.date().nullish(),
});

export const SalaryCreateSchema = z.object({
  employeeId: z.number().int(),
  salary: z.number(),
  frequency: z.any(),
  lastReviewDate: z.date().nullish(),
});

export const SalaryUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  salary: z.number().optional(),
  frequency: z.any().optional(),
  lastReviewDate: z.date().nullish().optional(),
});

export const SalaryWhereSchema = toWhereQuerySchema(SalarySchema);

export const SalaryOrderSchema =  toOrderBySchema(SalarySchema);

export const SalarySelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  salary: z.boolean().optional(),
  frequency: z.boolean().optional(),
  lastReviewDate: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const SalaryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SalaryWhereSchema.optional(),
  orderBy: SalaryOrderSchema.optional(),
  select: SalarySelectSchema.optional()
});

export type Salary = z.infer<typeof SalarySchema>;
export type SalaryCreate = z.infer<typeof SalaryCreateSchema>;
export type SalaryUpdate = z.infer<typeof SalaryUpdateSchema>;
export type SalaryWhere = z.infer<typeof SalaryWhereSchema>;
export type SalaryOrder = z.infer<typeof SalaryOrderSchema>;
export type SalarySelect = z.infer<typeof SalarySelectSchema>;
export type SalaryQuery = z.infer<typeof SalaryQuerySchema>;




// ---------- SalaryHistory Schemas ----------


export const SalaryHistorySchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  changeDate: z.date(),
  oldSalary: z.number(),
  newSalary: z.number(),
  reason: z.string().nullish(),
});

export const SalaryHistoryCreateSchema = z.object({
  employeeId: z.number().int(),
  changeDate: z.date(),
  oldSalary: z.number(),
  newSalary: z.number(),
  reason: z.string().nullish(),
});

export const SalaryHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  changeDate: z.date().optional(),
  oldSalary: z.number().optional(),
  newSalary: z.number().optional(),
  reason: z.string().nullish().optional(),
});

export const SalaryHistoryWhereSchema = toWhereQuerySchema(SalaryHistorySchema);

export const SalaryHistoryOrderSchema =  toOrderBySchema(SalaryHistorySchema);

export const SalaryHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  changeDate: z.boolean().optional(),
  oldSalary: z.boolean().optional(),
  newSalary: z.boolean().optional(),
  reason: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const SalaryHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SalaryHistoryWhereSchema.optional(),
  orderBy: SalaryHistoryOrderSchema.optional(),
  select: SalaryHistorySelectSchema.optional()
});

export type SalaryHistory = z.infer<typeof SalaryHistorySchema>;
export type SalaryHistoryCreate = z.infer<typeof SalaryHistoryCreateSchema>;
export type SalaryHistoryUpdate = z.infer<typeof SalaryHistoryUpdateSchema>;
export type SalaryHistoryWhere = z.infer<typeof SalaryHistoryWhereSchema>;
export type SalaryHistoryOrder = z.infer<typeof SalaryHistoryOrderSchema>;
export type SalaryHistorySelect = z.infer<typeof SalaryHistorySelectSchema>;
export type SalaryHistoryQuery = z.infer<typeof SalaryHistoryQuerySchema>;




// ---------- Benefit Schemas ----------


export const BenefitSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  type: z.string().nullish(),
});

export const BenefitCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  type: z.string().nullish(),
});

export const BenefitUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  type: z.string().nullish().optional(),
});

export const BenefitWhereSchema = toWhereQuerySchema(BenefitSchema);

export const BenefitOrderSchema =  toOrderBySchema(BenefitSchema);

export const BenefitSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  enrolments: z.boolean().optional(),
});

export const BenefitQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: BenefitWhereSchema.optional(),
  orderBy: BenefitOrderSchema.optional(),
  select: BenefitSelectSchema.optional()
});

export type Benefit = z.infer<typeof BenefitSchema>;
export type BenefitCreate = z.infer<typeof BenefitCreateSchema>;
export type BenefitUpdate = z.infer<typeof BenefitUpdateSchema>;
export type BenefitWhere = z.infer<typeof BenefitWhereSchema>;
export type BenefitOrder = z.infer<typeof BenefitOrderSchema>;
export type BenefitSelect = z.infer<typeof BenefitSelectSchema>;
export type BenefitQuery = z.infer<typeof BenefitQuerySchema>;




// ---------- BenefitEnrolment Schemas ----------


export const BenefitEnrolmentSchema = z.object({
  id: z.number().int(),
  bid: z.number().int(),
  employeeId: z.number().int(),
  startDate: z.date(),
  status: z.any(),
});

export const BenefitEnrolmentCreateSchema = z.object({
  bid: z.number().int(),
  employeeId: z.number().int(),
  startDate: z.date(),
  status: z.any(),
});

export const BenefitEnrolmentUpdateSchema = z.object({
  id: z.number().int().optional(),
  bid: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  startDate: z.date().optional(),
  status: z.any().optional(),
});

export const BenefitEnrolmentWhereSchema = toWhereQuerySchema(BenefitEnrolmentSchema);

export const BenefitEnrolmentOrderSchema =  toOrderBySchema(BenefitEnrolmentSchema);

export const BenefitEnrolmentSelectSchema = z.object({
  id: z.boolean().optional(),
  bid: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  startDate: z.boolean().optional(),
  status: z.boolean().optional(),
  benefit: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const BenefitEnrolmentQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: BenefitEnrolmentWhereSchema.optional(),
  orderBy: BenefitEnrolmentOrderSchema.optional(),
  select: BenefitEnrolmentSelectSchema.optional()
});

export type BenefitEnrolment = z.infer<typeof BenefitEnrolmentSchema>;
export type BenefitEnrolmentCreate = z.infer<typeof BenefitEnrolmentCreateSchema>;
export type BenefitEnrolmentUpdate = z.infer<typeof BenefitEnrolmentUpdateSchema>;
export type BenefitEnrolmentWhere = z.infer<typeof BenefitEnrolmentWhereSchema>;
export type BenefitEnrolmentOrder = z.infer<typeof BenefitEnrolmentOrderSchema>;
export type BenefitEnrolmentSelect = z.infer<typeof BenefitEnrolmentSelectSchema>;
export type BenefitEnrolmentQuery = z.infer<typeof BenefitEnrolmentQuerySchema>;




// ---------- TitleHistory Schemas ----------


export const TitleHistorySchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  titleId: z.number().int(),
  type: z.any(),
  reason: z.string().nullish(),
  startDate: z.date(),
  endDate: z.date().nullish(),
});

export const TitleHistoryCreateSchema = z.object({
  employeeId: z.number().int(),
  titleId: z.number().int(),
  type: z.any(),
  reason: z.string().nullish(),
  startDate: z.date(),
  endDate: z.date().nullish(),
});

export const TitleHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  titleId: z.number().int().optional(),
  type: z.any().optional(),
  reason: z.string().nullish().optional(),
  startDate: z.date().optional(),
  endDate: z.date().nullish().optional(),
});

export const TitleHistoryWhereSchema = toWhereQuerySchema(TitleHistorySchema);

export const TitleHistoryOrderSchema =  toOrderBySchema(TitleHistorySchema);

export const TitleHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  titleId: z.boolean().optional(),
  type: z.boolean().optional(),
  reason: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  employee: z.boolean().optional(),
  title: z.boolean().optional(),
});

export const TitleHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TitleHistoryWhereSchema.optional(),
  orderBy: TitleHistoryOrderSchema.optional(),
  select: TitleHistorySelectSchema.optional()
});

export type TitleHistory = z.infer<typeof TitleHistorySchema>;
export type TitleHistoryCreate = z.infer<typeof TitleHistoryCreateSchema>;
export type TitleHistoryUpdate = z.infer<typeof TitleHistoryUpdateSchema>;
export type TitleHistoryWhere = z.infer<typeof TitleHistoryWhereSchema>;
export type TitleHistoryOrder = z.infer<typeof TitleHistoryOrderSchema>;
export type TitleHistorySelect = z.infer<typeof TitleHistorySelectSchema>;
export type TitleHistoryQuery = z.infer<typeof TitleHistoryQuerySchema>;




// ---------- TimeOffPolicy Schemas ----------


export const TimeOffPolicySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.any(),
  accrualRate: z.number(),
  maxRollover: z.number(),
  description: z.string().nullish(),
});

export const TimeOffPolicyCreateSchema = z.object({
  name: z.string(),
  type: z.any(),
  accrualRate: z.number(),
  maxRollover: z.number(),
  description: z.string().nullish(),
});

export const TimeOffPolicyUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  type: z.any().optional(),
  accrualRate: z.number().optional(),
  maxRollover: z.number().optional(),
  description: z.string().nullish().optional(),
});

export const TimeOffPolicyWhereSchema = toWhereQuerySchema(TimeOffPolicySchema);

export const TimeOffPolicyOrderSchema =  toOrderBySchema(TimeOffPolicySchema);

export const TimeOffPolicySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  accrualRate: z.boolean().optional(),
  maxRollover: z.boolean().optional(),
  description: z.boolean().optional(),
  balances: z.boolean().optional(),
  requests: z.boolean().optional(),
});

export const TimeOffPolicyQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TimeOffPolicyWhereSchema.optional(),
  orderBy: TimeOffPolicyOrderSchema.optional(),
  select: TimeOffPolicySelectSchema.optional()
});

export type TimeOffPolicy = z.infer<typeof TimeOffPolicySchema>;
export type TimeOffPolicyCreate = z.infer<typeof TimeOffPolicyCreateSchema>;
export type TimeOffPolicyUpdate = z.infer<typeof TimeOffPolicyUpdateSchema>;
export type TimeOffPolicyWhere = z.infer<typeof TimeOffPolicyWhereSchema>;
export type TimeOffPolicyOrder = z.infer<typeof TimeOffPolicyOrderSchema>;
export type TimeOffPolicySelect = z.infer<typeof TimeOffPolicySelectSchema>;
export type TimeOffPolicyQuery = z.infer<typeof TimeOffPolicyQuerySchema>;




// ---------- TimeOffBalance Schemas ----------


export const TimeOffBalanceSchema = z.object({
  id: z.number().int(),
  policyId: z.number().int(),
  employeeId: z.number().int(),
  accruedHours: z.number(),
  usedHours: z.number(),
  availableHours: z.number(),
});

export const TimeOffBalanceCreateSchema = z.object({
  policyId: z.number().int(),
  employeeId: z.number().int(),
  accruedHours: z.number(),
  usedHours: z.number(),
  availableHours: z.number(),
});

export const TimeOffBalanceUpdateSchema = z.object({
  id: z.number().int().optional(),
  policyId: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  accruedHours: z.number().optional(),
  usedHours: z.number().optional(),
  availableHours: z.number().optional(),
});

export const TimeOffBalanceWhereSchema = toWhereQuerySchema(TimeOffBalanceSchema);

export const TimeOffBalanceOrderSchema =  toOrderBySchema(TimeOffBalanceSchema);

export const TimeOffBalanceSelectSchema = z.object({
  id: z.boolean().optional(),
  policyId: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  accruedHours: z.boolean().optional(),
  usedHours: z.boolean().optional(),
  availableHours: z.boolean().optional(),
  policy: z.boolean().optional(),
  employee: z.boolean().optional(),
  transactions: z.boolean().optional(),
});

export const TimeOffBalanceQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TimeOffBalanceWhereSchema.optional(),
  orderBy: TimeOffBalanceOrderSchema.optional(),
  select: TimeOffBalanceSelectSchema.optional()
});

export type TimeOffBalance = z.infer<typeof TimeOffBalanceSchema>;
export type TimeOffBalanceCreate = z.infer<typeof TimeOffBalanceCreateSchema>;
export type TimeOffBalanceUpdate = z.infer<typeof TimeOffBalanceUpdateSchema>;
export type TimeOffBalanceWhere = z.infer<typeof TimeOffBalanceWhereSchema>;
export type TimeOffBalanceOrder = z.infer<typeof TimeOffBalanceOrderSchema>;
export type TimeOffBalanceSelect = z.infer<typeof TimeOffBalanceSelectSchema>;
export type TimeOffBalanceQuery = z.infer<typeof TimeOffBalanceQuerySchema>;




// ---------- TimeOffRequest Schemas ----------


export const TimeOffRequestSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  policyId: z.number().int(),
  resolverId: z.number().int().nullish(),
  status: z.any(),
  startDate: z.date(),
  endDate: z.date(),
});

export const TimeOffRequestCreateSchema = z.object({
  employeeId: z.number().int(),
  policyId: z.number().int(),
  resolverId: z.number().int().nullish(),
  status: z.any(),
  startDate: z.date(),
  endDate: z.date(),
});

export const TimeOffRequestUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  policyId: z.number().int().optional(),
  resolverId: z.number().int().nullish().optional(),
  status: z.any().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

export const TimeOffRequestWhereSchema = toWhereQuerySchema(TimeOffRequestSchema);

export const TimeOffRequestOrderSchema =  toOrderBySchema(TimeOffRequestSchema);

export const TimeOffRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  policyId: z.boolean().optional(),
  resolverId: z.boolean().optional(),
  status: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  employee: z.boolean().optional(),
  policy: z.boolean().optional(),
  resolver: z.boolean().optional(),
  transaction: z.boolean().optional(),
});

export const TimeOffRequestQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TimeOffRequestWhereSchema.optional(),
  orderBy: TimeOffRequestOrderSchema.optional(),
  select: TimeOffRequestSelectSchema.optional()
});

export type TimeOffRequest = z.infer<typeof TimeOffRequestSchema>;
export type TimeOffRequestCreate = z.infer<typeof TimeOffRequestCreateSchema>;
export type TimeOffRequestUpdate = z.infer<typeof TimeOffRequestUpdateSchema>;
export type TimeOffRequestWhere = z.infer<typeof TimeOffRequestWhereSchema>;
export type TimeOffRequestOrder = z.infer<typeof TimeOffRequestOrderSchema>;
export type TimeOffRequestSelect = z.infer<typeof TimeOffRequestSelectSchema>;
export type TimeOffRequestQuery = z.infer<typeof TimeOffRequestQuerySchema>;




// ---------- TimeOffTransaction Schemas ----------


export const TimeOffTransactionSchema = z.object({
  id: z.number().int(),
  balanceId: z.number().int(),
  requestId: z.number().int().nullish(),
  amount: z.number(),
});

export const TimeOffTransactionCreateSchema = z.object({
  balanceId: z.number().int(),
  requestId: z.number().int().nullish(),
  amount: z.number(),
});

export const TimeOffTransactionUpdateSchema = z.object({
  id: z.number().int().optional(),
  balanceId: z.number().int().optional(),
  requestId: z.number().int().nullish().optional(),
  amount: z.number().optional(),
});

export const TimeOffTransactionWhereSchema = toWhereQuerySchema(TimeOffTransactionSchema);

export const TimeOffTransactionOrderSchema =  toOrderBySchema(TimeOffTransactionSchema);

export const TimeOffTransactionSelectSchema = z.object({
  id: z.boolean().optional(),
  balanceId: z.boolean().optional(),
  requestId: z.boolean().optional(),
  amount: z.boolean().optional(),
  balance: z.boolean().optional(),
  request: z.boolean().optional(),
});

export const TimeOffTransactionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TimeOffTransactionWhereSchema.optional(),
  orderBy: TimeOffTransactionOrderSchema.optional(),
  select: TimeOffTransactionSelectSchema.optional()
});

export type TimeOffTransaction = z.infer<typeof TimeOffTransactionSchema>;
export type TimeOffTransactionCreate = z.infer<typeof TimeOffTransactionCreateSchema>;
export type TimeOffTransactionUpdate = z.infer<typeof TimeOffTransactionUpdateSchema>;
export type TimeOffTransactionWhere = z.infer<typeof TimeOffTransactionWhereSchema>;
export type TimeOffTransactionOrder = z.infer<typeof TimeOffTransactionOrderSchema>;
export type TimeOffTransactionSelect = z.infer<typeof TimeOffTransactionSelectSchema>;
export type TimeOffTransactionQuery = z.infer<typeof TimeOffTransactionQuerySchema>;




// ---------- ClockIn Schemas ----------


export const ClockInSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  paymentId: z.number().int().nullish(),
  clockIn: z.date(),
  clockOut: z.date().nullish(),
});

export const ClockInCreateSchema = z.object({
  employeeId: z.number().int(),
  paymentId: z.number().int().nullish(),
  clockOut: z.date().nullish(),
});

export const ClockInUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  paymentId: z.number().int().nullish().optional(),
  clockIn: z.date().optional(),
  clockOut: z.date().nullish().optional(),
});

export const ClockInWhereSchema = toWhereQuerySchema(ClockInSchema);

export const ClockInOrderSchema =  toOrderBySchema(ClockInSchema);

export const ClockInSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  paymentId: z.boolean().optional(),
  clockIn: z.boolean().optional(),
  clockOut: z.boolean().optional(),
  employee: z.boolean().optional(),
  payment: z.boolean().optional(),
});

export const ClockInQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ClockInWhereSchema.optional(),
  orderBy: ClockInOrderSchema.optional(),
  select: ClockInSelectSchema.optional()
});

export type ClockIn = z.infer<typeof ClockInSchema>;
export type ClockInCreate = z.infer<typeof ClockInCreateSchema>;
export type ClockInUpdate = z.infer<typeof ClockInUpdateSchema>;
export type ClockInWhere = z.infer<typeof ClockInWhereSchema>;
export type ClockInOrder = z.infer<typeof ClockInOrderSchema>;
export type ClockInSelect = z.infer<typeof ClockInSelectSchema>;
export type ClockInQuery = z.infer<typeof ClockInQuerySchema>;




// ---------- Payment Schemas ----------


export const PaymentSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  resolverId: z.number().int(),
  type: z.any(),
  status: z.any(),
});

export const PaymentCreateSchema = z.object({
  employeeId: z.number().int(),
  resolverId: z.number().int(),
  type: z.any(),
  status: z.any(),
});

export const PaymentUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  resolverId: z.number().int().optional(),
  type: z.any().optional(),
  status: z.any().optional(),
});

export const PaymentWhereSchema = toWhereQuerySchema(PaymentSchema);

export const PaymentOrderSchema =  toOrderBySchema(PaymentSchema);

export const PaymentSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  resolverId: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  employee: z.boolean().optional(),
  resolvedBy: z.boolean().optional(),
  hours: z.boolean().optional(),
});

export const PaymentQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PaymentWhereSchema.optional(),
  orderBy: PaymentOrderSchema.optional(),
  select: PaymentSelectSchema.optional()
});

export type Payment = z.infer<typeof PaymentSchema>;
export type PaymentCreate = z.infer<typeof PaymentCreateSchema>;
export type PaymentUpdate = z.infer<typeof PaymentUpdateSchema>;
export type PaymentWhere = z.infer<typeof PaymentWhereSchema>;
export type PaymentOrder = z.infer<typeof PaymentOrderSchema>;
export type PaymentSelect = z.infer<typeof PaymentSelectSchema>;
export type PaymentQuery = z.infer<typeof PaymentQuerySchema>;


