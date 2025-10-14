
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- Department Schemas ----------


export const DepartmentSchema = z.object({
  id: z.number().int(),
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
  isActive: z.boolean(),
});

export const DepartmentCreateSchema = z.object({
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
  isActive: z.boolean(),
});

export const DepartmentUpdateSchema = z.object({
  id: z.number().int().optional(),
  parentId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const DepartmentWhereSchema = toWhereQuerySchema(DepartmentSchema);

export const DepartmentOrderSchema =  toOrderBySchema(DepartmentSchema);

export const DepartmentSelectSchema = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  isActive: z.boolean().optional(),
  parent: z.boolean().optional(),
  departments: z.boolean().optional(),
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
  isActive: z.boolean(),
});

export const TitleCreateSchema = z.object({
  departmentId: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  isActive: z.boolean(),
});

export const TitleUpdateSchema = z.object({
  id: z.number().int().optional(),
  departmentId: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
  isActive: z.boolean().optional(),
});

export const TitleWhereSchema = toWhereQuerySchema(TitleSchema);

export const TitleOrderSchema =  toOrderBySchema(TitleSchema);

export const TitleSelectSchema = z.object({
  id: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  isActive: z.boolean().optional(),
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




// ---------- PersonalData Schemas ----------


export const PersonalDataSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  ein: z.string(),
  gender: z.any(),
  dob: z.date(),
  maritalStatus: z.any(),
});

export const PersonalDataCreateSchema = z.object({
  employeeId: z.number().int(),
  ein: z.string(),
  gender: z.any(),
  dob: z.date(),
  maritalStatus: z.any(),
});

export const PersonalDataUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  ein: z.string().optional(),
  gender: z.any().optional(),
  dob: z.date().optional(),
  maritalStatus: z.any().optional(),
});

export const PersonalDataWhereSchema = toWhereQuerySchema(PersonalDataSchema);

export const PersonalDataOrderSchema =  toOrderBySchema(PersonalDataSchema);

export const PersonalDataSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  ein: z.boolean().optional(),
  gender: z.boolean().optional(),
  dob: z.boolean().optional(),
  maritalStatus: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const PersonalDataQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PersonalDataWhereSchema.optional(),
  orderBy: PersonalDataOrderSchema.optional(),
  select: PersonalDataSelectSchema.optional()
});

export type PersonalData = z.infer<typeof PersonalDataSchema>;
export type PersonalDataCreate = z.infer<typeof PersonalDataCreateSchema>;
export type PersonalDataUpdate = z.infer<typeof PersonalDataUpdateSchema>;
export type PersonalDataWhere = z.infer<typeof PersonalDataWhereSchema>;
export type PersonalDataOrder = z.infer<typeof PersonalDataOrderSchema>;
export type PersonalDataSelect = z.infer<typeof PersonalDataSelectSchema>;
export type PersonalDataQuery = z.infer<typeof PersonalDataQuerySchema>;




// ---------- Employee Schemas ----------


export const EmployeeSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  titleId: z.number().int(),
  firstName: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  preferedName: z.string().nullish(),
  status: z.any(),
  hireDate: z.date().nullish(),
  terminationDate: z.date().nullish(),
  employmentType: z.any(),
  directManagerId: z.number().int().nullish(),
});

export const EmployeeCreateSchema = z.object({
  titleId: z.number().int(),
  firstName: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  preferedName: z.string().nullish(),
  status: z.any(),
  hireDate: z.date().nullish(),
  terminationDate: z.date().nullish(),
  employmentType: z.any(),
  directManagerId: z.number().int().nullish(),
});

export const EmployeeUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  titleId: z.number().int().optional(),
  firstName: z.string().optional(),
  middleName: z.string().nullish().optional(),
  lastName: z.string().optional(),
  preferedName: z.string().nullish().optional(),
  status: z.any().optional(),
  hireDate: z.date().nullish().optional(),
  terminationDate: z.date().nullish().optional(),
  employmentType: z.any().optional(),
  directManagerId: z.number().int().nullish().optional(),
});

export const EmployeeWhereSchema = toWhereQuerySchema(EmployeeSchema);

export const EmployeeOrderSchema =  toOrderBySchema(EmployeeSchema);

export const EmployeeSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  titleId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  preferedName: z.boolean().optional(),
  status: z.boolean().optional(),
  title: z.boolean().optional(),
  hireDate: z.boolean().optional(),
  terminationDate: z.boolean().optional(),
  employmentType: z.boolean().optional(),
  salary: z.boolean().optional(),
  salaryHistory: z.boolean().optional(),
  benefits: z.boolean().optional(),
  titleHistory: z.boolean().optional(),
  timeOffBalances: z.boolean().optional(),
  timeOffRequests: z.boolean().optional(),
  resolvedTimeOffs: z.boolean().optional(),
  clockIns: z.boolean().optional(),
  personalData: z.boolean().optional(),
  taxData: z.boolean().optional(),
  memberships: z.boolean().optional(),
  managingTeams: z.boolean().optional(),
  managingEmployees: z.boolean().optional(),
  directManager: z.boolean().optional(),
  paychecks: z.boolean().optional(),
  directManagerId: z.boolean().optional(),
  deductions: z.boolean().optional(),
  resolvedPayrollRuns: z.boolean().optional(),
  contact: z.boolean().optional(),
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
  name: z.string(),
});

export const TeamCreateSchema = z.object({
  name: z.string(),
});

export const TeamUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const TeamWhereSchema = toWhereQuerySchema(TeamSchema);

export const TeamOrderSchema =  toOrderBySchema(TeamSchema);

export const TeamSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  members: z.boolean().optional(),
  managers: z.boolean().optional(),
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




// ---------- TeamManager Schemas ----------


export const TeamManagerSchema = z.object({
  id: z.number().int(),
  teamId: z.number().int(),
  managerId: z.number().int(),
});

export const TeamManagerCreateSchema = z.object({
  teamId: z.number().int(),
  managerId: z.number().int(),
});

export const TeamManagerUpdateSchema = z.object({
  id: z.number().int().optional(),
  teamId: z.number().int().optional(),
  managerId: z.number().int().optional(),
});

export const TeamManagerWhereSchema = toWhereQuerySchema(TeamManagerSchema);

export const TeamManagerOrderSchema =  toOrderBySchema(TeamManagerSchema);

export const TeamManagerSelectSchema = z.object({
  id: z.boolean().optional(),
  teamId: z.boolean().optional(),
  managerId: z.boolean().optional(),
  team: z.boolean().optional(),
  manager: z.boolean().optional(),
});

export const TeamManagerQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TeamManagerWhereSchema.optional(),
  orderBy: TeamManagerOrderSchema.optional(),
  select: TeamManagerSelectSchema.optional()
});

export type TeamManager = z.infer<typeof TeamManagerSchema>;
export type TeamManagerCreate = z.infer<typeof TeamManagerCreateSchema>;
export type TeamManagerUpdate = z.infer<typeof TeamManagerUpdateSchema>;
export type TeamManagerWhere = z.infer<typeof TeamManagerWhereSchema>;
export type TeamManagerOrder = z.infer<typeof TeamManagerOrderSchema>;
export type TeamManagerSelect = z.infer<typeof TeamManagerSelectSchema>;
export type TeamManagerQuery = z.infer<typeof TeamManagerQuerySchema>;




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
  member: z.boolean().optional(),
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
  gross: z.number(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  frequency: z.any(),
});

export const SalaryCreateSchema = z.object({
  employeeId: z.number().int(),
  gross: z.number(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  frequency: z.any(),
});

export const SalaryUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  gross: z.number().optional(),
  startDate: z.date().optional(),
  endDate: z.date().nullish().optional(),
  frequency: z.any().optional(),
});

export const SalaryWhereSchema = toWhereQuerySchema(SalarySchema);

export const SalaryOrderSchema =  toOrderBySchema(SalarySchema);

export const SalarySelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  gross: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  frequency: z.boolean().optional(),
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
  createdAt: z.date(),
  oldSalary: z.number(),
  newSalary: z.number(),
  reason: z.string().nullish(),
});

export const SalaryHistoryCreateSchema = z.object({
  employeeId: z.number().int(),
  oldSalary: z.number(),
  newSalary: z.number(),
  reason: z.string().nullish(),
});

export const SalaryHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  createdAt: z.date().optional(),
  oldSalary: z.number().optional(),
  newSalary: z.number().optional(),
  reason: z.string().nullish().optional(),
});

export const SalaryHistoryWhereSchema = toWhereQuerySchema(SalaryHistorySchema);

export const SalaryHistoryOrderSchema =  toOrderBySchema(SalaryHistorySchema);

export const SalaryHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
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
  benefitId: z.number().int(),
  employeeId: z.number().int(),
  startDate: z.date(),
  status: z.any(),
});

export const BenefitEnrolmentCreateSchema = z.object({
  benefitId: z.number().int(),
  employeeId: z.number().int(),
  startDate: z.date(),
  status: z.any(),
});

export const BenefitEnrolmentUpdateSchema = z.object({
  id: z.number().int().optional(),
  benefitId: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  startDate: z.date().optional(),
  status: z.any().optional(),
});

export const BenefitEnrolmentWhereSchema = toWhereQuerySchema(BenefitEnrolmentSchema);

export const BenefitEnrolmentOrderSchema =  toOrderBySchema(BenefitEnrolmentSchema);

export const BenefitEnrolmentSelectSchema = z.object({
  id: z.boolean().optional(),
  benefitId: z.boolean().optional(),
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
  description: z.string().nullish(),
  accrualRate: z.number(),
  maxRollover: z.number(),
});

export const TimeOffPolicyCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  accrualRate: z.number(),
  maxRollover: z.number(),
});

export const TimeOffPolicyUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  accrualRate: z.number().optional(),
  maxRollover: z.number().optional(),
});

export const TimeOffPolicyWhereSchema = toWhereQuerySchema(TimeOffPolicySchema);

export const TimeOffPolicyOrderSchema =  toOrderBySchema(TimeOffPolicySchema);

export const TimeOffPolicySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  accrualRate: z.boolean().optional(),
  maxRollover: z.boolean().optional(),
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
  createdAt: z.date(),
  employeeId: z.number().int(),
  reason: z.string(),
  policyId: z.number().int(),
  resolverId: z.number().int().nullish(),
  status: z.any(),
  startDate: z.date(),
  endDate: z.date(),
});

export const TimeOffRequestCreateSchema = z.object({
  employeeId: z.number().int(),
  reason: z.string(),
  policyId: z.number().int(),
  resolverId: z.number().int().nullish(),
  status: z.any(),
  startDate: z.date(),
  endDate: z.date(),
});

export const TimeOffRequestUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  employeeId: z.number().int().optional(),
  reason: z.string().optional(),
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
  createdAt: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  reason: z.boolean().optional(),
  policyId: z.boolean().optional(),
  resolverId: z.boolean().optional(),
  status: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  employee: z.boolean().optional(),
  policy: z.boolean().optional(),
  resolver: z.boolean().optional(),
  transactions: z.boolean().optional(),
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
  createdAt: z.date(),
  updatedAt: z.date(),
  type: z.any(),
  balanceId: z.number().int(),
  requestId: z.number().int().nullish(),
  amount: z.number(),
});

export const TimeOffTransactionCreateSchema = z.object({
  type: z.any(),
  balanceId: z.number().int(),
  requestId: z.number().int().nullish(),
  amount: z.number(),
});

export const TimeOffTransactionUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  type: z.any().optional(),
  balanceId: z.number().int().optional(),
  requestId: z.number().int().nullish().optional(),
  amount: z.number().optional(),
});

export const TimeOffTransactionWhereSchema = toWhereQuerySchema(TimeOffTransactionSchema);

export const TimeOffTransactionOrderSchema =  toOrderBySchema(TimeOffTransactionSchema);

export const TimeOffTransactionSelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
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
  clockIn: z.date(),
  clockOut: z.date().nullish(),
});

export const ClockInCreateSchema = z.object({
  employeeId: z.number().int(),
  clockOut: z.date().nullish(),
});

export const ClockInUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  clockIn: z.date().optional(),
  clockOut: z.date().nullish().optional(),
});

export const ClockInWhereSchema = toWhereQuerySchema(ClockInSchema);

export const ClockInOrderSchema =  toOrderBySchema(ClockInSchema);

export const ClockInSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  clockIn: z.boolean().optional(),
  clockOut: z.boolean().optional(),
  employee: z.boolean().optional(),
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




// ---------- Paycheck Schemas ----------


export const PaycheckSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  payrollRunId: z.number().int(),
  updatedAt: z.date(),
  employeeId: z.number().int(),
  grossAmount: z.number(),
  netAmount: z.number(),
});

export const PaycheckCreateSchema = z.object({
  payrollRunId: z.number().int(),
  employeeId: z.number().int(),
  grossAmount: z.number(),
  netAmount: z.number(),
});

export const PaycheckUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  payrollRunId: z.number().int().optional(),
  updatedAt: z.date().optional(),
  employeeId: z.number().int().optional(),
  grossAmount: z.number().optional(),
  netAmount: z.number().optional(),
});

export const PaycheckWhereSchema = toWhereQuerySchema(PaycheckSchema);

export const PaycheckOrderSchema =  toOrderBySchema(PaycheckSchema);

export const PaycheckSelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  payrollRunId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  grossAmount: z.boolean().optional(),
  netAmount: z.boolean().optional(),
  employee: z.boolean().optional(),
  earnings: z.boolean().optional(),
  paycheckTaxes: z.boolean().optional(),
  deductions: z.boolean().optional(),
  payrollRun: z.boolean().optional(),
});

export const PaycheckQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PaycheckWhereSchema.optional(),
  orderBy: PaycheckOrderSchema.optional(),
  select: PaycheckSelectSchema.optional()
});

export type Paycheck = z.infer<typeof PaycheckSchema>;
export type PaycheckCreate = z.infer<typeof PaycheckCreateSchema>;
export type PaycheckUpdate = z.infer<typeof PaycheckUpdateSchema>;
export type PaycheckWhere = z.infer<typeof PaycheckWhereSchema>;
export type PaycheckOrder = z.infer<typeof PaycheckOrderSchema>;
export type PaycheckSelect = z.infer<typeof PaycheckSelectSchema>;
export type PaycheckQuery = z.infer<typeof PaycheckQuerySchema>;




// ---------- Earning Schemas ----------


export const EarningSchema = z.object({
  id: z.number().int(),
  type: z.any(),
  hours: z.number().nullish(),
  rate: z.number(),
  amount: z.number(),
  paycheckId: z.number().int(),
});

export const EarningCreateSchema = z.object({
  type: z.any(),
  hours: z.number().nullish(),
  rate: z.number(),
  amount: z.number(),
  paycheckId: z.number().int(),
});

export const EarningUpdateSchema = z.object({
  id: z.number().int().optional(),
  type: z.any().optional(),
  hours: z.number().nullish().optional(),
  rate: z.number().optional(),
  amount: z.number().optional(),
  paycheckId: z.number().int().optional(),
});

export const EarningWhereSchema = toWhereQuerySchema(EarningSchema);

export const EarningOrderSchema =  toOrderBySchema(EarningSchema);

export const EarningSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  hours: z.boolean().optional(),
  rate: z.boolean().optional(),
  amount: z.boolean().optional(),
  paycheckId: z.boolean().optional(),
  paycheck: z.boolean().optional(),
});

export const EarningQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EarningWhereSchema.optional(),
  orderBy: EarningOrderSchema.optional(),
  select: EarningSelectSchema.optional()
});

export type Earning = z.infer<typeof EarningSchema>;
export type EarningCreate = z.infer<typeof EarningCreateSchema>;
export type EarningUpdate = z.infer<typeof EarningUpdateSchema>;
export type EarningWhere = z.infer<typeof EarningWhereSchema>;
export type EarningOrder = z.infer<typeof EarningOrderSchema>;
export type EarningSelect = z.infer<typeof EarningSelectSchema>;
export type EarningQuery = z.infer<typeof EarningQuerySchema>;




// ---------- PaycheckTax Schemas ----------


export const PaycheckTaxSchema = z.object({
  id: z.number().int(),
  paycheckId: z.number().int(),
  taxAuthority: z.string(),
  amount: z.number(),
});

export const PaycheckTaxCreateSchema = z.object({
  paycheckId: z.number().int(),
  taxAuthority: z.string(),
  amount: z.number(),
});

export const PaycheckTaxUpdateSchema = z.object({
  id: z.number().int().optional(),
  paycheckId: z.number().int().optional(),
  taxAuthority: z.string().optional(),
  amount: z.number().optional(),
});

export const PaycheckTaxWhereSchema = toWhereQuerySchema(PaycheckTaxSchema);

export const PaycheckTaxOrderSchema =  toOrderBySchema(PaycheckTaxSchema);

export const PaycheckTaxSelectSchema = z.object({
  id: z.boolean().optional(),
  paycheckId: z.boolean().optional(),
  taxAuthority: z.boolean().optional(),
  amount: z.boolean().optional(),
  paycheck: z.boolean().optional(),
});

export const PaycheckTaxQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PaycheckTaxWhereSchema.optional(),
  orderBy: PaycheckTaxOrderSchema.optional(),
  select: PaycheckTaxSelectSchema.optional()
});

export type PaycheckTax = z.infer<typeof PaycheckTaxSchema>;
export type PaycheckTaxCreate = z.infer<typeof PaycheckTaxCreateSchema>;
export type PaycheckTaxUpdate = z.infer<typeof PaycheckTaxUpdateSchema>;
export type PaycheckTaxWhere = z.infer<typeof PaycheckTaxWhereSchema>;
export type PaycheckTaxOrder = z.infer<typeof PaycheckTaxOrderSchema>;
export type PaycheckTaxSelect = z.infer<typeof PaycheckTaxSelectSchema>;
export type PaycheckTaxQuery = z.infer<typeof PaycheckTaxQuerySchema>;




// ---------- DeductionPolicy Schemas ----------


export const DeductionPolicySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.any(),
  defaultAmount: z.number().nullish(),
  defaultPercent: z.number().nullish(),
});

export const DeductionPolicyCreateSchema = z.object({
  name: z.string(),
  type: z.any(),
  defaultAmount: z.number().nullish(),
  defaultPercent: z.number().nullish(),
});

export const DeductionPolicyUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  type: z.any().optional(),
  defaultAmount: z.number().nullish().optional(),
  defaultPercent: z.number().nullish().optional(),
});

export const DeductionPolicyWhereSchema = toWhereQuerySchema(DeductionPolicySchema);

export const DeductionPolicyOrderSchema =  toOrderBySchema(DeductionPolicySchema);

export const DeductionPolicySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  defaultAmount: z.boolean().optional(),
  defaultPercent: z.boolean().optional(),
  employeeDeductions: z.boolean().optional(),
});

export const DeductionPolicyQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: DeductionPolicyWhereSchema.optional(),
  orderBy: DeductionPolicyOrderSchema.optional(),
  select: DeductionPolicySelectSchema.optional()
});

export type DeductionPolicy = z.infer<typeof DeductionPolicySchema>;
export type DeductionPolicyCreate = z.infer<typeof DeductionPolicyCreateSchema>;
export type DeductionPolicyUpdate = z.infer<typeof DeductionPolicyUpdateSchema>;
export type DeductionPolicyWhere = z.infer<typeof DeductionPolicyWhereSchema>;
export type DeductionPolicyOrder = z.infer<typeof DeductionPolicyOrderSchema>;
export type DeductionPolicySelect = z.infer<typeof DeductionPolicySelectSchema>;
export type DeductionPolicyQuery = z.infer<typeof DeductionPolicyQuerySchema>;




// ---------- EmployeeDeduction Schemas ----------


export const EmployeeDeductionSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  policyId: z.number().int(),
  employeeAmount: z.number().nullish(),
});

export const EmployeeDeductionCreateSchema = z.object({
  employeeId: z.number().int(),
  policyId: z.number().int(),
  employeeAmount: z.number().nullish(),
});

export const EmployeeDeductionUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  policyId: z.number().int().optional(),
  employeeAmount: z.number().nullish().optional(),
});

export const EmployeeDeductionWhereSchema = toWhereQuerySchema(EmployeeDeductionSchema);

export const EmployeeDeductionOrderSchema =  toOrderBySchema(EmployeeDeductionSchema);

export const EmployeeDeductionSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  policyId: z.boolean().optional(),
  employeeAmount: z.boolean().optional(),
  employee: z.boolean().optional(),
  policy: z.boolean().optional(),
  paycheckDeductions: z.boolean().optional(),
});

export const EmployeeDeductionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeDeductionWhereSchema.optional(),
  orderBy: EmployeeDeductionOrderSchema.optional(),
  select: EmployeeDeductionSelectSchema.optional()
});

export type EmployeeDeduction = z.infer<typeof EmployeeDeductionSchema>;
export type EmployeeDeductionCreate = z.infer<typeof EmployeeDeductionCreateSchema>;
export type EmployeeDeductionUpdate = z.infer<typeof EmployeeDeductionUpdateSchema>;
export type EmployeeDeductionWhere = z.infer<typeof EmployeeDeductionWhereSchema>;
export type EmployeeDeductionOrder = z.infer<typeof EmployeeDeductionOrderSchema>;
export type EmployeeDeductionSelect = z.infer<typeof EmployeeDeductionSelectSchema>;
export type EmployeeDeductionQuery = z.infer<typeof EmployeeDeductionQuerySchema>;




// ---------- PaycheckDeduction Schemas ----------


export const PaycheckDeductionSchema = z.object({
  id: z.number().int(),
  paycheckId: z.number().int(),
  employeeDeductionId: z.number().int(),
  amount: z.number(),
});

export const PaycheckDeductionCreateSchema = z.object({
  paycheckId: z.number().int(),
  employeeDeductionId: z.number().int(),
  amount: z.number(),
});

export const PaycheckDeductionUpdateSchema = z.object({
  id: z.number().int().optional(),
  paycheckId: z.number().int().optional(),
  employeeDeductionId: z.number().int().optional(),
  amount: z.number().optional(),
});

export const PaycheckDeductionWhereSchema = toWhereQuerySchema(PaycheckDeductionSchema);

export const PaycheckDeductionOrderSchema =  toOrderBySchema(PaycheckDeductionSchema);

export const PaycheckDeductionSelectSchema = z.object({
  id: z.boolean().optional(),
  paycheckId: z.boolean().optional(),
  employeeDeductionId: z.boolean().optional(),
  amount: z.boolean().optional(),
  paycheck: z.boolean().optional(),
  employeeDeduction: z.boolean().optional(),
});

export const PaycheckDeductionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PaycheckDeductionWhereSchema.optional(),
  orderBy: PaycheckDeductionOrderSchema.optional(),
  select: PaycheckDeductionSelectSchema.optional()
});

export type PaycheckDeduction = z.infer<typeof PaycheckDeductionSchema>;
export type PaycheckDeductionCreate = z.infer<typeof PaycheckDeductionCreateSchema>;
export type PaycheckDeductionUpdate = z.infer<typeof PaycheckDeductionUpdateSchema>;
export type PaycheckDeductionWhere = z.infer<typeof PaycheckDeductionWhereSchema>;
export type PaycheckDeductionOrder = z.infer<typeof PaycheckDeductionOrderSchema>;
export type PaycheckDeductionSelect = z.infer<typeof PaycheckDeductionSelectSchema>;
export type PaycheckDeductionQuery = z.infer<typeof PaycheckDeductionQuerySchema>;




// ---------- EmployeeTaxData Schemas ----------


export const EmployeeTaxDataSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  employeeId: z.number().int(),
  federalStatus: z.any(),
  dependentsCredit: z.number(),
  multipleJobs: z.boolean(),
  otherIncome: z.number(),
  deductionsAmount: z.number(),
  extraWithholding: z.number(),
  isExempt: z.boolean(),
  isNonResidentAlien: z.boolean(),
});

export const EmployeeTaxDataCreateSchema = z.object({
  startDate: z.date(),
  endDate: z.date().nullish(),
  employeeId: z.number().int(),
  federalStatus: z.any(),
  dependentsCredit: z.number(),
  multipleJobs: z.boolean(),
  otherIncome: z.number(),
  deductionsAmount: z.number(),
  extraWithholding: z.number(),
  isExempt: z.boolean(),
  isNonResidentAlien: z.boolean(),
});

export const EmployeeTaxDataUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  startDate: z.date().optional(),
  endDate: z.date().nullish().optional(),
  employeeId: z.number().int().optional(),
  federalStatus: z.any().optional(),
  dependentsCredit: z.number().optional(),
  multipleJobs: z.boolean().optional(),
  otherIncome: z.number().optional(),
  deductionsAmount: z.number().optional(),
  extraWithholding: z.number().optional(),
  isExempt: z.boolean().optional(),
  isNonResidentAlien: z.boolean().optional(),
});

export const EmployeeTaxDataWhereSchema = toWhereQuerySchema(EmployeeTaxDataSchema);

export const EmployeeTaxDataOrderSchema =  toOrderBySchema(EmployeeTaxDataSchema);

export const EmployeeTaxDataSelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  federalStatus: z.boolean().optional(),
  dependentsCredit: z.boolean().optional(),
  multipleJobs: z.boolean().optional(),
  otherIncome: z.boolean().optional(),
  deductionsAmount: z.boolean().optional(),
  extraWithholding: z.boolean().optional(),
  isExempt: z.boolean().optional(),
  isNonResidentAlien: z.boolean().optional(),
  stateTaxes: z.boolean().optional(),
  localTaxes: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const EmployeeTaxDataQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmployeeTaxDataWhereSchema.optional(),
  orderBy: EmployeeTaxDataOrderSchema.optional(),
  select: EmployeeTaxDataSelectSchema.optional()
});

export type EmployeeTaxData = z.infer<typeof EmployeeTaxDataSchema>;
export type EmployeeTaxDataCreate = z.infer<typeof EmployeeTaxDataCreateSchema>;
export type EmployeeTaxDataUpdate = z.infer<typeof EmployeeTaxDataUpdateSchema>;
export type EmployeeTaxDataWhere = z.infer<typeof EmployeeTaxDataWhereSchema>;
export type EmployeeTaxDataOrder = z.infer<typeof EmployeeTaxDataOrderSchema>;
export type EmployeeTaxDataSelect = z.infer<typeof EmployeeTaxDataSelectSchema>;
export type EmployeeTaxDataQuery = z.infer<typeof EmployeeTaxDataQuerySchema>;




// ---------- StateTaxWithholding Schemas ----------


export const StateTaxWithholdingSchema = z.object({
  id: z.number().int(),
  taxDataId: z.number().int(),
  stateCode: z.string(),
  stateStatus: z.string().nullish(),
  allowances: z.number().int(),
  extraWithholding: z.number(),
});

export const StateTaxWithholdingCreateSchema = z.object({
  taxDataId: z.number().int(),
  stateCode: z.string(),
  stateStatus: z.string().nullish(),
  allowances: z.number().int(),
  extraWithholding: z.number(),
});

export const StateTaxWithholdingUpdateSchema = z.object({
  id: z.number().int().optional(),
  taxDataId: z.number().int().optional(),
  stateCode: z.string().optional(),
  stateStatus: z.string().nullish().optional(),
  allowances: z.number().int().optional(),
  extraWithholding: z.number().optional(),
});

export const StateTaxWithholdingWhereSchema = toWhereQuerySchema(StateTaxWithholdingSchema);

export const StateTaxWithholdingOrderSchema =  toOrderBySchema(StateTaxWithholdingSchema);

export const StateTaxWithholdingSelectSchema = z.object({
  id: z.boolean().optional(),
  taxDataId: z.boolean().optional(),
  stateCode: z.boolean().optional(),
  stateStatus: z.boolean().optional(),
  allowances: z.boolean().optional(),
  extraWithholding: z.boolean().optional(),
  taxData: z.boolean().optional(),
});

export const StateTaxWithholdingQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: StateTaxWithholdingWhereSchema.optional(),
  orderBy: StateTaxWithholdingOrderSchema.optional(),
  select: StateTaxWithholdingSelectSchema.optional()
});

export type StateTaxWithholding = z.infer<typeof StateTaxWithholdingSchema>;
export type StateTaxWithholdingCreate = z.infer<typeof StateTaxWithholdingCreateSchema>;
export type StateTaxWithholdingUpdate = z.infer<typeof StateTaxWithholdingUpdateSchema>;
export type StateTaxWithholdingWhere = z.infer<typeof StateTaxWithholdingWhereSchema>;
export type StateTaxWithholdingOrder = z.infer<typeof StateTaxWithholdingOrderSchema>;
export type StateTaxWithholdingSelect = z.infer<typeof StateTaxWithholdingSelectSchema>;
export type StateTaxWithholdingQuery = z.infer<typeof StateTaxWithholdingQuerySchema>;




// ---------- LocalTaxWithholding Schemas ----------


export const LocalTaxWithholdingSchema = z.object({
  id: z.number().int(),
  taxDataId: z.number().int(),
  jurisdiction: z.string(),
  localStatus: z.string().nullish(),
  extraWithholding: z.number(),
});

export const LocalTaxWithholdingCreateSchema = z.object({
  taxDataId: z.number().int(),
  jurisdiction: z.string(),
  localStatus: z.string().nullish(),
  extraWithholding: z.number(),
});

export const LocalTaxWithholdingUpdateSchema = z.object({
  id: z.number().int().optional(),
  taxDataId: z.number().int().optional(),
  jurisdiction: z.string().optional(),
  localStatus: z.string().nullish().optional(),
  extraWithholding: z.number().optional(),
});

export const LocalTaxWithholdingWhereSchema = toWhereQuerySchema(LocalTaxWithholdingSchema);

export const LocalTaxWithholdingOrderSchema =  toOrderBySchema(LocalTaxWithholdingSchema);

export const LocalTaxWithholdingSelectSchema = z.object({
  id: z.boolean().optional(),
  taxDataId: z.boolean().optional(),
  jurisdiction: z.boolean().optional(),
  localStatus: z.boolean().optional(),
  extraWithholding: z.boolean().optional(),
  taxData: z.boolean().optional(),
});

export const LocalTaxWithholdingQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: LocalTaxWithholdingWhereSchema.optional(),
  orderBy: LocalTaxWithholdingOrderSchema.optional(),
  select: LocalTaxWithholdingSelectSchema.optional()
});

export type LocalTaxWithholding = z.infer<typeof LocalTaxWithholdingSchema>;
export type LocalTaxWithholdingCreate = z.infer<typeof LocalTaxWithholdingCreateSchema>;
export type LocalTaxWithholdingUpdate = z.infer<typeof LocalTaxWithholdingUpdateSchema>;
export type LocalTaxWithholdingWhere = z.infer<typeof LocalTaxWithholdingWhereSchema>;
export type LocalTaxWithholdingOrder = z.infer<typeof LocalTaxWithholdingOrderSchema>;
export type LocalTaxWithholdingSelect = z.infer<typeof LocalTaxWithholdingSelectSchema>;
export type LocalTaxWithholdingQuery = z.infer<typeof LocalTaxWithholdingQuerySchema>;




// ---------- PayrollRun Schemas ----------


export const PayrollRunSchema = z.object({
  id: z.number().int(),
  resolverId: z.number().int(),
  startDate: z.date(),
  endDate: z.date(),
  payDate: z.date(),
  status: z.any(),
});

export const PayrollRunCreateSchema = z.object({
  resolverId: z.number().int(),
  startDate: z.date(),
  endDate: z.date(),
  payDate: z.date(),
  status: z.any(),
});

export const PayrollRunUpdateSchema = z.object({
  id: z.number().int().optional(),
  resolverId: z.number().int().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  payDate: z.date().optional(),
  status: z.any().optional(),
});

export const PayrollRunWhereSchema = toWhereQuerySchema(PayrollRunSchema);

export const PayrollRunOrderSchema =  toOrderBySchema(PayrollRunSchema);

export const PayrollRunSelectSchema = z.object({
  id: z.boolean().optional(),
  resolverId: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  payDate: z.boolean().optional(),
  status: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
  paychecks: z.boolean().optional(),
});

export const PayrollRunQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PayrollRunWhereSchema.optional(),
  orderBy: PayrollRunOrderSchema.optional(),
  select: PayrollRunSelectSchema.optional()
});

export type PayrollRun = z.infer<typeof PayrollRunSchema>;
export type PayrollRunCreate = z.infer<typeof PayrollRunCreateSchema>;
export type PayrollRunUpdate = z.infer<typeof PayrollRunUpdateSchema>;
export type PayrollRunWhere = z.infer<typeof PayrollRunWhereSchema>;
export type PayrollRunOrder = z.infer<typeof PayrollRunOrderSchema>;
export type PayrollRunSelect = z.infer<typeof PayrollRunSelectSchema>;
export type PayrollRunQuery = z.infer<typeof PayrollRunQuerySchema>;




// ---------- Contact Schemas ----------


export const ContactSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
});

export const ContactCreateSchema = z.object({
  employeeId: z.number().int(),
});

export const ContactUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
});

export const ContactWhereSchema = toWhereQuerySchema(ContactSchema);

export const ContactOrderSchema =  toOrderBySchema(ContactSchema);

export const ContactSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  employee: z.boolean().optional(),
  emails: z.boolean().optional(),
  phones: z.boolean().optional(),
  addresses: z.boolean().optional(),
  primaryEmail: z.boolean().optional(),
  primaryPhone: z.boolean().optional(),
  primaryAddress: z.boolean().optional(),
});

export const ContactQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ContactWhereSchema.optional(),
  orderBy: ContactOrderSchema.optional(),
  select: ContactSelectSchema.optional()
});

export type Contact = z.infer<typeof ContactSchema>;
export type ContactCreate = z.infer<typeof ContactCreateSchema>;
export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;
export type ContactWhere = z.infer<typeof ContactWhereSchema>;
export type ContactOrder = z.infer<typeof ContactOrderSchema>;
export type ContactSelect = z.infer<typeof ContactSelectSchema>;
export type ContactQuery = z.infer<typeof ContactQuerySchema>;




// ---------- Country Schemas ----------


export const CountrySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  code: z.string(),
});

export const CountryCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const CountryUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
});

export const CountryWhereSchema = toWhereQuerySchema(CountrySchema);

export const CountryOrderSchema =  toOrderBySchema(CountrySchema);

export const CountrySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  states: z.boolean().optional(),
});

export const CountryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CountryWhereSchema.optional(),
  orderBy: CountryOrderSchema.optional(),
  select: CountrySelectSchema.optional()
});

export type Country = z.infer<typeof CountrySchema>;
export type CountryCreate = z.infer<typeof CountryCreateSchema>;
export type CountryUpdate = z.infer<typeof CountryUpdateSchema>;
export type CountryWhere = z.infer<typeof CountryWhereSchema>;
export type CountryOrder = z.infer<typeof CountryOrderSchema>;
export type CountrySelect = z.infer<typeof CountrySelectSchema>;
export type CountryQuery = z.infer<typeof CountryQuerySchema>;




// ---------- State Schemas ----------


export const StateSchema = z.object({
  id: z.number().int(),
  countryId: z.number().int(),
  name: z.string(),
  code: z.string(),
});

export const StateCreateSchema = z.object({
  countryId: z.number().int(),
  name: z.string(),
  code: z.string(),
});

export const StateUpdateSchema = z.object({
  id: z.number().int().optional(),
  countryId: z.number().int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
});

export const StateWhereSchema = toWhereQuerySchema(StateSchema);

export const StateOrderSchema =  toOrderBySchema(StateSchema);

export const StateSelectSchema = z.object({
  id: z.boolean().optional(),
  countryId: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  country: z.boolean().optional(),
  addresses: z.boolean().optional(),
});

export const StateQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: StateWhereSchema.optional(),
  orderBy: StateOrderSchema.optional(),
  select: StateSelectSchema.optional()
});

export type State = z.infer<typeof StateSchema>;
export type StateCreate = z.infer<typeof StateCreateSchema>;
export type StateUpdate = z.infer<typeof StateUpdateSchema>;
export type StateWhere = z.infer<typeof StateWhereSchema>;
export type StateOrder = z.infer<typeof StateOrderSchema>;
export type StateSelect = z.infer<typeof StateSelectSchema>;
export type StateQuery = z.infer<typeof StateQuerySchema>;




// ---------- Address Schemas ----------


export const AddressSchema = z.object({
  id: z.number().int(),
  type: z.any(),
  contactId: z.number().int(),
  stateId: z.number().int(),
  street: z.string(),
  zip: z.string(),
  city: z.string(),
});

export const AddressCreateSchema = z.object({
  type: z.any(),
  contactId: z.number().int(),
  stateId: z.number().int(),
  street: z.string(),
  zip: z.string(),
  city: z.string(),
});

export const AddressUpdateSchema = z.object({
  id: z.number().int().optional(),
  type: z.any().optional(),
  contactId: z.number().int().optional(),
  stateId: z.number().int().optional(),
  street: z.string().optional(),
  zip: z.string().optional(),
  city: z.string().optional(),
});

export const AddressWhereSchema = toWhereQuerySchema(AddressSchema);

export const AddressOrderSchema =  toOrderBySchema(AddressSchema);

export const AddressSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  contactId: z.boolean().optional(),
  stateId: z.boolean().optional(),
  street: z.boolean().optional(),
  zip: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  contact: z.boolean().optional(),
  primary: z.boolean().optional(),
});

export const AddressQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AddressWhereSchema.optional(),
  orderBy: AddressOrderSchema.optional(),
  select: AddressSelectSchema.optional()
});

export type Address = z.infer<typeof AddressSchema>;
export type AddressCreate = z.infer<typeof AddressCreateSchema>;
export type AddressUpdate = z.infer<typeof AddressUpdateSchema>;
export type AddressWhere = z.infer<typeof AddressWhereSchema>;
export type AddressOrder = z.infer<typeof AddressOrderSchema>;
export type AddressSelect = z.infer<typeof AddressSelectSchema>;
export type AddressQuery = z.infer<typeof AddressQuerySchema>;




// ---------- Email Schemas ----------


export const EmailSchema = z.object({
  id: z.number().int(),
  type: z.any(),
  contactId: z.number().int(),
  email: z.string(),
});

export const EmailCreateSchema = z.object({
  type: z.any(),
  contactId: z.number().int(),
  email: z.string(),
});

export const EmailUpdateSchema = z.object({
  id: z.number().int().optional(),
  type: z.any().optional(),
  contactId: z.number().int().optional(),
  email: z.string().optional(),
});

export const EmailWhereSchema = toWhereQuerySchema(EmailSchema);

export const EmailOrderSchema =  toOrderBySchema(EmailSchema);

export const EmailSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  contactId: z.boolean().optional(),
  email: z.boolean().optional(),
  contact: z.boolean().optional(),
  primary: z.boolean().optional(),
});

export const EmailQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmailWhereSchema.optional(),
  orderBy: EmailOrderSchema.optional(),
  select: EmailSelectSchema.optional()
});

export type Email = z.infer<typeof EmailSchema>;
export type EmailCreate = z.infer<typeof EmailCreateSchema>;
export type EmailUpdate = z.infer<typeof EmailUpdateSchema>;
export type EmailWhere = z.infer<typeof EmailWhereSchema>;
export type EmailOrder = z.infer<typeof EmailOrderSchema>;
export type EmailSelect = z.infer<typeof EmailSelectSchema>;
export type EmailQuery = z.infer<typeof EmailQuerySchema>;




// ---------- Phone Schemas ----------


export const PhoneSchema = z.object({
  id: z.number().int(),
  type: z.any(),
  contactId: z.number().int(),
  phone: z.string(),
});

export const PhoneCreateSchema = z.object({
  type: z.any(),
  contactId: z.number().int(),
  phone: z.string(),
});

export const PhoneUpdateSchema = z.object({
  id: z.number().int().optional(),
  type: z.any().optional(),
  contactId: z.number().int().optional(),
  phone: z.string().optional(),
});

export const PhoneWhereSchema = toWhereQuerySchema(PhoneSchema);

export const PhoneOrderSchema =  toOrderBySchema(PhoneSchema);

export const PhoneSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  contactId: z.boolean().optional(),
  phone: z.boolean().optional(),
  contact: z.boolean().optional(),
  primary: z.boolean().optional(),
});

export const PhoneQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PhoneWhereSchema.optional(),
  orderBy: PhoneOrderSchema.optional(),
  select: PhoneSelectSchema.optional()
});

export type Phone = z.infer<typeof PhoneSchema>;
export type PhoneCreate = z.infer<typeof PhoneCreateSchema>;
export type PhoneUpdate = z.infer<typeof PhoneUpdateSchema>;
export type PhoneWhere = z.infer<typeof PhoneWhereSchema>;
export type PhoneOrder = z.infer<typeof PhoneOrderSchema>;
export type PhoneSelect = z.infer<typeof PhoneSelectSchema>;
export type PhoneQuery = z.infer<typeof PhoneQuerySchema>;




// ---------- PrimaryEmail Schemas ----------


export const PrimaryEmailSchema = z.object({
  id: z.number().int(),
  emailId: z.number().int(),
  contactId: z.number().int(),
});

export const PrimaryEmailCreateSchema = z.object({
  emailId: z.number().int(),
  contactId: z.number().int(),
});

export const PrimaryEmailUpdateSchema = z.object({
  id: z.number().int().optional(),
  emailId: z.number().int().optional(),
  contactId: z.number().int().optional(),
});

export const PrimaryEmailWhereSchema = toWhereQuerySchema(PrimaryEmailSchema);

export const PrimaryEmailOrderSchema =  toOrderBySchema(PrimaryEmailSchema);

export const PrimaryEmailSelectSchema = z.object({
  id: z.boolean().optional(),
  emailId: z.boolean().optional(),
  contactId: z.boolean().optional(),
  email: z.boolean().optional(),
  contact: z.boolean().optional(),
});

export const PrimaryEmailQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PrimaryEmailWhereSchema.optional(),
  orderBy: PrimaryEmailOrderSchema.optional(),
  select: PrimaryEmailSelectSchema.optional()
});

export type PrimaryEmail = z.infer<typeof PrimaryEmailSchema>;
export type PrimaryEmailCreate = z.infer<typeof PrimaryEmailCreateSchema>;
export type PrimaryEmailUpdate = z.infer<typeof PrimaryEmailUpdateSchema>;
export type PrimaryEmailWhere = z.infer<typeof PrimaryEmailWhereSchema>;
export type PrimaryEmailOrder = z.infer<typeof PrimaryEmailOrderSchema>;
export type PrimaryEmailSelect = z.infer<typeof PrimaryEmailSelectSchema>;
export type PrimaryEmailQuery = z.infer<typeof PrimaryEmailQuerySchema>;




// ---------- PrimaryPhone Schemas ----------


export const PrimaryPhoneSchema = z.object({
  id: z.number().int(),
  phoneId: z.number().int(),
  contactId: z.number().int(),
});

export const PrimaryPhoneCreateSchema = z.object({
  phoneId: z.number().int(),
  contactId: z.number().int(),
});

export const PrimaryPhoneUpdateSchema = z.object({
  id: z.number().int().optional(),
  phoneId: z.number().int().optional(),
  contactId: z.number().int().optional(),
});

export const PrimaryPhoneWhereSchema = toWhereQuerySchema(PrimaryPhoneSchema);

export const PrimaryPhoneOrderSchema =  toOrderBySchema(PrimaryPhoneSchema);

export const PrimaryPhoneSelectSchema = z.object({
  id: z.boolean().optional(),
  phoneId: z.boolean().optional(),
  contactId: z.boolean().optional(),
  phone: z.boolean().optional(),
  contact: z.boolean().optional(),
});

export const PrimaryPhoneQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PrimaryPhoneWhereSchema.optional(),
  orderBy: PrimaryPhoneOrderSchema.optional(),
  select: PrimaryPhoneSelectSchema.optional()
});

export type PrimaryPhone = z.infer<typeof PrimaryPhoneSchema>;
export type PrimaryPhoneCreate = z.infer<typeof PrimaryPhoneCreateSchema>;
export type PrimaryPhoneUpdate = z.infer<typeof PrimaryPhoneUpdateSchema>;
export type PrimaryPhoneWhere = z.infer<typeof PrimaryPhoneWhereSchema>;
export type PrimaryPhoneOrder = z.infer<typeof PrimaryPhoneOrderSchema>;
export type PrimaryPhoneSelect = z.infer<typeof PrimaryPhoneSelectSchema>;
export type PrimaryPhoneQuery = z.infer<typeof PrimaryPhoneQuerySchema>;




// ---------- PrimaryAddress Schemas ----------


export const PrimaryAddressSchema = z.object({
  id: z.number().int(),
  addressId: z.number().int(),
  contactId: z.number().int(),
});

export const PrimaryAddressCreateSchema = z.object({
  addressId: z.number().int(),
  contactId: z.number().int(),
});

export const PrimaryAddressUpdateSchema = z.object({
  id: z.number().int().optional(),
  addressId: z.number().int().optional(),
  contactId: z.number().int().optional(),
});

export const PrimaryAddressWhereSchema = toWhereQuerySchema(PrimaryAddressSchema);

export const PrimaryAddressOrderSchema =  toOrderBySchema(PrimaryAddressSchema);

export const PrimaryAddressSelectSchema = z.object({
  id: z.boolean().optional(),
  addressId: z.boolean().optional(),
  contactId: z.boolean().optional(),
  address: z.boolean().optional(),
  contact: z.boolean().optional(),
});

export const PrimaryAddressQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PrimaryAddressWhereSchema.optional(),
  orderBy: PrimaryAddressOrderSchema.optional(),
  select: PrimaryAddressSelectSchema.optional()
});

export type PrimaryAddress = z.infer<typeof PrimaryAddressSchema>;
export type PrimaryAddressCreate = z.infer<typeof PrimaryAddressCreateSchema>;
export type PrimaryAddressUpdate = z.infer<typeof PrimaryAddressUpdateSchema>;
export type PrimaryAddressWhere = z.infer<typeof PrimaryAddressWhereSchema>;
export type PrimaryAddressOrder = z.infer<typeof PrimaryAddressOrderSchema>;
export type PrimaryAddressSelect = z.infer<typeof PrimaryAddressSelectSchema>;
export type PrimaryAddressQuery = z.infer<typeof PrimaryAddressQuerySchema>;


