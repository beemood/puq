
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
  positions: z.boolean().optional(),
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




// ---------- Position Schemas ----------


export const PositionSchema = z.object({
  id: z.number().int(),
  departmentId: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const PositionCreateSchema = z.object({
  departmentId: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const PositionUpdateSchema = z.object({
  id: z.number().int().optional(),
  departmentId: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const PositionWhereSchema = toWhereQuerySchema(PositionSchema);

export const PositionOrderSchema =  toOrderBySchema(PositionSchema);

export const PositionSelectSchema = z.object({
  id: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  department: z.boolean().optional(),
  employees: z.boolean().optional(),
  histories: z.boolean().optional(),
});

export const PositionQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PositionWhereSchema.optional(),
  orderBy: PositionOrderSchema.optional(),
  select: PositionSelectSchema.optional()
});

export type Position = z.infer<typeof PositionSchema>;
export type PositionCreate = z.infer<typeof PositionCreateSchema>;
export type PositionUpdate = z.infer<typeof PositionUpdateSchema>;
export type PositionWhere = z.infer<typeof PositionWhereSchema>;
export type PositionOrder = z.infer<typeof PositionOrderSchema>;
export type PositionSelect = z.infer<typeof PositionSelectSchema>;
export type PositionQuery = z.infer<typeof PositionQuerySchema>;




// ---------- Employee Schemas ----------


export const EmployeeSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  positionId: z.number().int(),
  firstName: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  preferedName: z.string().nullish(),
  fullName: z.string(),
  gender: z.any(),
  slug: z.string(),
  status: z.any(),
});

export const EmployeeCreateSchema = z.object({
  positionId: z.number().int(),
  firstName: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  preferedName: z.string().nullish(),
  fullName: z.string(),
  gender: z.any(),
  slug: z.string(),
  status: z.any(),
});

export const EmployeeUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  positionId: z.number().int().optional(),
  firstName: z.string().optional(),
  middleName: z.string().nullish().optional(),
  lastName: z.string().optional(),
  preferedName: z.string().nullish().optional(),
  fullName: z.string().optional(),
  gender: z.any().optional(),
  slug: z.string().optional(),
  status: z.any().optional(),
});

export const EmployeeWhereSchema = toWhereQuerySchema(EmployeeSchema);

export const EmployeeOrderSchema =  toOrderBySchema(EmployeeSchema);

export const EmployeeSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  positionId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  preferedName: z.boolean().optional(),
  fullName: z.boolean().optional(),
  gender: z.boolean().optional(),
  slug: z.boolean().optional(),
  status: z.boolean().optional(),
  position: z.boolean().optional(),
  personalInfo: z.boolean().optional(),
  leadTeams: z.boolean().optional(),
  memberships: z.boolean().optional(),
  compensation: z.boolean().optional(),
  compensationHistory: z.boolean().optional(),
  contact: z.boolean().optional(),
  benefits: z.boolean().optional(),
  positionHistory: z.boolean().optional(),
  timeOffBalances: z.boolean().optional(),
  timeOffRequests: z.boolean().optional(),
  approvedTimeOffs: z.boolean().optional(),
  reviewedPerformances: z.boolean().optional(),
  performanceReviews: z.boolean().optional(),
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




// ---------- PersonalInfo Schemas ----------


export const PersonalInfoSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  dateOfBirth: z.date(),
  maritalStatus: z.any().nullish(),
  nationality: z.string().nullish(),
  ssnLast4: z.string().nullish(),
  note: z.string().nullish(),
});

export const PersonalInfoCreateSchema = z.object({
  employeeId: z.number().int(),
  dateOfBirth: z.date(),
  maritalStatus: z.any().nullish(),
  nationality: z.string().nullish(),
  ssnLast4: z.string().nullish(),
  note: z.string().nullish(),
});

export const PersonalInfoUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  dateOfBirth: z.date().optional(),
  maritalStatus: z.any().nullish().optional(),
  nationality: z.string().nullish().optional(),
  ssnLast4: z.string().nullish().optional(),
  note: z.string().nullish().optional(),
});

export const PersonalInfoWhereSchema = toWhereQuerySchema(PersonalInfoSchema);

export const PersonalInfoOrderSchema =  toOrderBySchema(PersonalInfoSchema);

export const PersonalInfoSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  maritalStatus: z.boolean().optional(),
  nationality: z.boolean().optional(),
  ssnLast4: z.boolean().optional(),
  note: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const PersonalInfoQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PersonalInfoWhereSchema.optional(),
  orderBy: PersonalInfoOrderSchema.optional(),
  select: PersonalInfoSelectSchema.optional()
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type PersonalInfoCreate = z.infer<typeof PersonalInfoCreateSchema>;
export type PersonalInfoUpdate = z.infer<typeof PersonalInfoUpdateSchema>;
export type PersonalInfoWhere = z.infer<typeof PersonalInfoWhereSchema>;
export type PersonalInfoOrder = z.infer<typeof PersonalInfoOrderSchema>;
export type PersonalInfoSelect = z.infer<typeof PersonalInfoSelectSchema>;
export type PersonalInfoQuery = z.infer<typeof PersonalInfoQuerySchema>;




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




// ---------- Compensation Schemas ----------


export const CompensationSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  salary: z.number(),
  payFrequency: z.any(),
  isHourly: z.boolean(),
  lastReviewDate: z.date(),
});

export const CompensationCreateSchema = z.object({
  employeeId: z.number().int(),
  salary: z.number(),
  payFrequency: z.any(),
  isHourly: z.boolean(),
  lastReviewDate: z.date(),
});

export const CompensationUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  salary: z.number().optional(),
  payFrequency: z.any().optional(),
  isHourly: z.boolean().optional(),
  lastReviewDate: z.date().optional(),
});

export const CompensationWhereSchema = toWhereQuerySchema(CompensationSchema);

export const CompensationOrderSchema =  toOrderBySchema(CompensationSchema);

export const CompensationSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  salary: z.boolean().optional(),
  payFrequency: z.boolean().optional(),
  isHourly: z.boolean().optional(),
  lastReviewDate: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const CompensationQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CompensationWhereSchema.optional(),
  orderBy: CompensationOrderSchema.optional(),
  select: CompensationSelectSchema.optional()
});

export type Compensation = z.infer<typeof CompensationSchema>;
export type CompensationCreate = z.infer<typeof CompensationCreateSchema>;
export type CompensationUpdate = z.infer<typeof CompensationUpdateSchema>;
export type CompensationWhere = z.infer<typeof CompensationWhereSchema>;
export type CompensationOrder = z.infer<typeof CompensationOrderSchema>;
export type CompensationSelect = z.infer<typeof CompensationSelectSchema>;
export type CompensationQuery = z.infer<typeof CompensationQuerySchema>;




// ---------- CompensationHistory Schemas ----------


export const CompensationHistorySchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  changeDate: z.date(),
  oldSalary: z.number(),
  newSalary: z.number(),
  reason: z.string().nullish(),
});

export const CompensationHistoryCreateSchema = z.object({
  employeeId: z.number().int(),
  changeDate: z.date(),
  oldSalary: z.number(),
  newSalary: z.number(),
  reason: z.string().nullish(),
});

export const CompensationHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  changeDate: z.date().optional(),
  oldSalary: z.number().optional(),
  newSalary: z.number().optional(),
  reason: z.string().nullish().optional(),
});

export const CompensationHistoryWhereSchema = toWhereQuerySchema(CompensationHistorySchema);

export const CompensationHistoryOrderSchema =  toOrderBySchema(CompensationHistorySchema);

export const CompensationHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  changeDate: z.boolean().optional(),
  oldSalary: z.boolean().optional(),
  newSalary: z.boolean().optional(),
  reason: z.boolean().optional(),
  employee: z.boolean().optional(),
});

export const CompensationHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CompensationHistoryWhereSchema.optional(),
  orderBy: CompensationHistoryOrderSchema.optional(),
  select: CompensationHistorySelectSchema.optional()
});

export type CompensationHistory = z.infer<typeof CompensationHistorySchema>;
export type CompensationHistoryCreate = z.infer<typeof CompensationHistoryCreateSchema>;
export type CompensationHistoryUpdate = z.infer<typeof CompensationHistoryUpdateSchema>;
export type CompensationHistoryWhere = z.infer<typeof CompensationHistoryWhereSchema>;
export type CompensationHistoryOrder = z.infer<typeof CompensationHistoryOrderSchema>;
export type CompensationHistorySelect = z.infer<typeof CompensationHistorySelectSchema>;
export type CompensationHistoryQuery = z.infer<typeof CompensationHistoryQuerySchema>;




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




// ---------- Email Schemas ----------


export const EmailSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  type: z.any().nullish(),
  email: z.string(),
  order: z.number().int(),
});

export const EmailCreateSchema = z.object({
  contactId: z.number().int(),
  type: z.any().nullish(),
  email: z.string(),
});

export const EmailUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  type: z.any().nullish().optional(),
  email: z.string().optional(),
  order: z.number().int().optional(),
});

export const EmailWhereSchema = toWhereQuerySchema(EmailSchema);

export const EmailOrderSchema =  toOrderBySchema(EmailSchema);

export const EmailSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  type: z.boolean().optional(),
  email: z.boolean().optional(),
  contact: z.boolean().optional(),
  order: z.boolean().optional(),
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
  contactId: z.number().int(),
  type: z.any().nullish(),
  phone: z.string(),
  order: z.number().int(),
});

export const PhoneCreateSchema = z.object({
  contactId: z.number().int(),
  type: z.any().nullish(),
  phone: z.string(),
});

export const PhoneUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  type: z.any().nullish().optional(),
  phone: z.string().optional(),
  order: z.number().int().optional(),
});

export const PhoneWhereSchema = toWhereQuerySchema(PhoneSchema);

export const PhoneOrderSchema =  toOrderBySchema(PhoneSchema);

export const PhoneSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  type: z.boolean().optional(),
  phone: z.boolean().optional(),
  contact: z.boolean().optional(),
  order: z.boolean().optional(),
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




// ---------- PositionHistory Schemas ----------


export const PositionHistorySchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  positionId: z.number().int(),
  type: z.any(),
  justification: z.string().nullish(),
  startDate: z.date(),
  endDate: z.date().nullish(),
});

export const PositionHistoryCreateSchema = z.object({
  employeeId: z.number().int(),
  positionId: z.number().int(),
  type: z.any(),
  justification: z.string().nullish(),
  startDate: z.date(),
  endDate: z.date().nullish(),
});

export const PositionHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  positionId: z.number().int().optional(),
  type: z.any().optional(),
  justification: z.string().nullish().optional(),
  startDate: z.date().optional(),
  endDate: z.date().nullish().optional(),
});

export const PositionHistoryWhereSchema = toWhereQuerySchema(PositionHistorySchema);

export const PositionHistoryOrderSchema =  toOrderBySchema(PositionHistorySchema);

export const PositionHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  positionId: z.boolean().optional(),
  type: z.boolean().optional(),
  justification: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  employee: z.boolean().optional(),
  position: z.boolean().optional(),
});

export const PositionHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PositionHistoryWhereSchema.optional(),
  orderBy: PositionHistoryOrderSchema.optional(),
  select: PositionHistorySelectSchema.optional()
});

export type PositionHistory = z.infer<typeof PositionHistorySchema>;
export type PositionHistoryCreate = z.infer<typeof PositionHistoryCreateSchema>;
export type PositionHistoryUpdate = z.infer<typeof PositionHistoryUpdateSchema>;
export type PositionHistoryWhere = z.infer<typeof PositionHistoryWhereSchema>;
export type PositionHistoryOrder = z.infer<typeof PositionHistoryOrderSchema>;
export type PositionHistorySelect = z.infer<typeof PositionHistorySelectSchema>;
export type PositionHistoryQuery = z.infer<typeof PositionHistoryQuerySchema>;




// ---------- TimeOffPolicy Schemas ----------


export const TimeOffPolicySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  timeOffType: z.any(),
  accrualRate: z.number(),
  maxRollover: z.number(),
  policyDetails: z.string().nullish(),
});

export const TimeOffPolicyCreateSchema = z.object({
  name: z.string(),
  timeOffType: z.any(),
  accrualRate: z.number(),
  maxRollover: z.number(),
  policyDetails: z.string().nullish(),
});

export const TimeOffPolicyUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  timeOffType: z.any().optional(),
  accrualRate: z.number().optional(),
  maxRollover: z.number().optional(),
  policyDetails: z.string().nullish().optional(),
});

export const TimeOffPolicyWhereSchema = toWhereQuerySchema(TimeOffPolicySchema);

export const TimeOffPolicyOrderSchema =  toOrderBySchema(TimeOffPolicySchema);

export const TimeOffPolicySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  timeOffType: z.boolean().optional(),
  accrualRate: z.boolean().optional(),
  maxRollover: z.boolean().optional(),
  policyDetails: z.boolean().optional(),
  balances: z.boolean().optional(),
  TimeOffRequest: z.boolean().optional(),
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
  approverId: z.number().int().nullish(),
  status: z.any(),
  startDate: z.date(),
  endDate: z.date(),
});

export const TimeOffRequestCreateSchema = z.object({
  employeeId: z.number().int(),
  policyId: z.number().int(),
  approverId: z.number().int().nullish(),
  status: z.any(),
  startDate: z.date(),
  endDate: z.date(),
});

export const TimeOffRequestUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  policyId: z.number().int().optional(),
  approverId: z.number().int().nullish().optional(),
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
  approverId: z.boolean().optional(),
  status: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  employee: z.boolean().optional(),
  policy: z.boolean().optional(),
  approver: z.boolean().optional(),
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
  timeOffBalanceId: z.number().int(),
  requestId: z.number().int().nullish(),
  amount: z.number(),
});

export const TimeOffTransactionCreateSchema = z.object({
  timeOffBalanceId: z.number().int(),
  requestId: z.number().int().nullish(),
  amount: z.number(),
});

export const TimeOffTransactionUpdateSchema = z.object({
  id: z.number().int().optional(),
  timeOffBalanceId: z.number().int().optional(),
  requestId: z.number().int().nullish().optional(),
  amount: z.number().optional(),
});

export const TimeOffTransactionWhereSchema = toWhereQuerySchema(TimeOffTransactionSchema);

export const TimeOffTransactionOrderSchema =  toOrderBySchema(TimeOffTransactionSchema);

export const TimeOffTransactionSelectSchema = z.object({
  id: z.boolean().optional(),
  timeOffBalanceId: z.boolean().optional(),
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




// ---------- ReviewCycle Schemas ----------


export const ReviewCycleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export const ReviewCycleCreateSchema = z.object({
  name: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export const ReviewCycleUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});

export const ReviewCycleWhereSchema = toWhereQuerySchema(ReviewCycleSchema);

export const ReviewCycleOrderSchema =  toOrderBySchema(ReviewCycleSchema);

export const ReviewCycleSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  reviews: z.boolean().optional(),
});

export const ReviewCycleQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ReviewCycleWhereSchema.optional(),
  orderBy: ReviewCycleOrderSchema.optional(),
  select: ReviewCycleSelectSchema.optional()
});

export type ReviewCycle = z.infer<typeof ReviewCycleSchema>;
export type ReviewCycleCreate = z.infer<typeof ReviewCycleCreateSchema>;
export type ReviewCycleUpdate = z.infer<typeof ReviewCycleUpdateSchema>;
export type ReviewCycleWhere = z.infer<typeof ReviewCycleWhereSchema>;
export type ReviewCycleOrder = z.infer<typeof ReviewCycleOrderSchema>;
export type ReviewCycleSelect = z.infer<typeof ReviewCycleSelectSchema>;
export type ReviewCycleQuery = z.infer<typeof ReviewCycleQuerySchema>;




// ---------- PerformanceReview Schemas ----------


export const PerformanceReviewSchema = z.object({
  id: z.number().int(),
  employeeId: z.number().int(),
  reviewerId: z.number().int(),
  cycleId: z.number().int(),
  reviewDate: z.date(),
  rating: z.number().int().nullish(),
  summary: z.string().nullish(),
  goals: z.string().nullish(),
});

export const PerformanceReviewCreateSchema = z.object({
  employeeId: z.number().int(),
  reviewerId: z.number().int(),
  cycleId: z.number().int(),
  reviewDate: z.date(),
  rating: z.number().int().nullish(),
  summary: z.string().nullish(),
  goals: z.string().nullish(),
});

export const PerformanceReviewUpdateSchema = z.object({
  id: z.number().int().optional(),
  employeeId: z.number().int().optional(),
  reviewerId: z.number().int().optional(),
  cycleId: z.number().int().optional(),
  reviewDate: z.date().optional(),
  rating: z.number().int().nullish().optional(),
  summary: z.string().nullish().optional(),
  goals: z.string().nullish().optional(),
});

export const PerformanceReviewWhereSchema = toWhereQuerySchema(PerformanceReviewSchema);

export const PerformanceReviewOrderSchema =  toOrderBySchema(PerformanceReviewSchema);

export const PerformanceReviewSelectSchema = z.object({
  id: z.boolean().optional(),
  employeeId: z.boolean().optional(),
  reviewerId: z.boolean().optional(),
  cycleId: z.boolean().optional(),
  reviewDate: z.boolean().optional(),
  rating: z.boolean().optional(),
  summary: z.boolean().optional(),
  goals: z.boolean().optional(),
  employee: z.boolean().optional(),
  reviewer: z.boolean().optional(),
  cycle: z.boolean().optional(),
});

export const PerformanceReviewQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PerformanceReviewWhereSchema.optional(),
  orderBy: PerformanceReviewOrderSchema.optional(),
  select: PerformanceReviewSelectSchema.optional()
});

export type PerformanceReview = z.infer<typeof PerformanceReviewSchema>;
export type PerformanceReviewCreate = z.infer<typeof PerformanceReviewCreateSchema>;
export type PerformanceReviewUpdate = z.infer<typeof PerformanceReviewUpdateSchema>;
export type PerformanceReviewWhere = z.infer<typeof PerformanceReviewWhereSchema>;
export type PerformanceReviewOrder = z.infer<typeof PerformanceReviewOrderSchema>;
export type PerformanceReviewSelect = z.infer<typeof PerformanceReviewSelectSchema>;
export type PerformanceReviewQuery = z.infer<typeof PerformanceReviewQuerySchema>;


