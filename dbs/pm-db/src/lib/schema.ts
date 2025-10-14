
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- User Schemas ----------


export const UserSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  displayName: z.string(),
  slug: z.string(),
  title: z.string(),
});

export const UserCreateSchema = z.object({
  uuid: z.string(),
  displayName: z.string(),
  slug: z.string(),
  title: z.string(),
});

export const UserUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  displayName: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
});

export const UserWhereSchema = toWhereQuerySchema(UserSchema);

export const UserOrderSchema =  toOrderBySchema(UserSchema);

export const UserSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  displayName: z.boolean().optional(),
  slug: z.boolean().optional(),
  title: z.boolean().optional(),
  assignments: z.boolean().optional(),
  managedTeams: z.boolean().optional(),
  memberships: z.boolean().optional(),
  createdProjects: z.boolean().optional(),
  createdSprints: z.boolean().optional(),
  createdTasks: z.boolean().optional(),
  createdComments: z.boolean().optional(),
  takenAssignments: z.boolean().optional(),
  givenAssignments: z.boolean().optional(),
  changedAssignments: z.boolean().optional(),
  changedPriorities: z.boolean().optional(),
  changedStatuses: z.boolean().optional(),
  changedPoints: z.boolean().optional(),
  changedTeams: z.boolean().optional(),
});

export const UserQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: UserWhereSchema.optional(),
  orderBy: UserOrderSchema.optional(),
  select: UserSelectSchema.optional()
});

export type User = z.infer<typeof UserSchema>;
export type UserCreate = z.infer<typeof UserCreateSchema>;
export type UserUpdate = z.infer<typeof UserUpdateSchema>;
export type UserWhere = z.infer<typeof UserWhereSchema>;
export type UserOrder = z.infer<typeof UserOrderSchema>;
export type UserSelect = z.infer<typeof UserSelectSchema>;
export type UserQuery = z.infer<typeof UserQuerySchema>;




// ---------- Team Schemas ----------


export const TeamSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const TeamCreateSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const TeamUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const TeamWhereSchema = toWhereQuerySchema(TeamSchema);

export const TeamOrderSchema =  toOrderBySchema(TeamSchema);

export const TeamSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  managers: z.boolean().optional(),
  members: z.boolean().optional(),
  takenTeams: z.boolean().optional(),
  givenTeams: z.boolean().optional(),
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
  managerId: z.number().int(),
  teamId: z.number().int(),
});

export const TeamManagerCreateSchema = z.object({
  managerId: z.number().int(),
  teamId: z.number().int(),
});

export const TeamManagerUpdateSchema = z.object({
  id: z.number().int().optional(),
  managerId: z.number().int().optional(),
  teamId: z.number().int().optional(),
});

export const TeamManagerWhereSchema = toWhereQuerySchema(TeamManagerSchema);

export const TeamManagerOrderSchema =  toOrderBySchema(TeamManagerSchema);

export const TeamManagerSelectSchema = z.object({
  id: z.boolean().optional(),
  managerId: z.boolean().optional(),
  teamId: z.boolean().optional(),
  manager: z.boolean().optional(),
  team: z.boolean().optional(),
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
  team: z.boolean().optional(),
  member: z.boolean().optional(),
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




// ---------- Project Schemas ----------


export const ProjectSchema = z.object({
  id: z.number().int(),
  createdById: z.number().int(),
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  endDate: z.date().nullish(),
});

export const ProjectCreateSchema = z.object({
  createdById: z.number().int(),
  parentId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  endDate: z.date().nullish(),
});

export const ProjectUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdById: z.number().int().optional(),
  parentId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
  startDate: z.date().nullish().optional(),
  dueDate: z.date().nullish().optional(),
  endDate: z.date().nullish().optional(),
});

export const ProjectWhereSchema = toWhereQuerySchema(ProjectSchema);

export const ProjectOrderSchema =  toOrderBySchema(ProjectSchema);

export const ProjectSelectSchema = z.object({
  id: z.boolean().optional(),
  createdById: z.boolean().optional(),
  parentId: z.boolean().optional(),
  parent: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  startDate: z.boolean().optional(),
  dueDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  sprints: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  tags: z.boolean().optional(),
  statuses: z.boolean().optional(),
  priorities: z.boolean().optional(),
  assignmentHistory: z.boolean().optional(),
  priorityHistory: z.boolean().optional(),
  statusHistory: z.boolean().optional(),
  pointHistory: z.boolean().optional(),
  projects: z.boolean().optional(),
});

export const ProjectQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ProjectWhereSchema.optional(),
  orderBy: ProjectOrderSchema.optional(),
  select: ProjectSelectSchema.optional()
});

export type Project = z.infer<typeof ProjectSchema>;
export type ProjectCreate = z.infer<typeof ProjectCreateSchema>;
export type ProjectUpdate = z.infer<typeof ProjectUpdateSchema>;
export type ProjectWhere = z.infer<typeof ProjectWhereSchema>;
export type ProjectOrder = z.infer<typeof ProjectOrderSchema>;
export type ProjectSelect = z.infer<typeof ProjectSelectSchema>;
export type ProjectQuery = z.infer<typeof ProjectQuerySchema>;




// ---------- Tag Schemas ----------


export const TagSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  isDefault: z.boolean(),
});

export const TagCreateSchema = z.object({
  name: z.string(),
  isDefault: z.boolean(),
});

export const TagUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  isDefault: z.boolean().optional(),
});

export const TagWhereSchema = toWhereQuerySchema(TagSchema);

export const TagOrderSchema =  toOrderBySchema(TagSchema);

export const TagSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  tasks: z.boolean().optional(),
  projects: z.boolean().optional(),
});

export const TagQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TagWhereSchema.optional(),
  orderBy: TagOrderSchema.optional(),
  select: TagSelectSchema.optional()
});

export type Tag = z.infer<typeof TagSchema>;
export type TagCreate = z.infer<typeof TagCreateSchema>;
export type TagUpdate = z.infer<typeof TagUpdateSchema>;
export type TagWhere = z.infer<typeof TagWhereSchema>;
export type TagOrder = z.infer<typeof TagOrderSchema>;
export type TagSelect = z.infer<typeof TagSelectSchema>;
export type TagQuery = z.infer<typeof TagQuerySchema>;




// ---------- Category Schemas ----------


export const CategorySchema = z.object({
  id: z.number().int(),
  parentId: z.number().int().nullish(),
  name: z.string(),
  description: z.string().nullish(),
  isDefault: z.boolean(),
});

export const CategoryCreateSchema = z.object({
  parentId: z.number().int().nullish(),
  name: z.string(),
  description: z.string().nullish(),
  isDefault: z.boolean(),
});

export const CategoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  parentId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  isDefault: z.boolean().optional(),
});

export const CategoryWhereSchema = toWhereQuerySchema(CategorySchema);

export const CategoryOrderSchema =  toOrderBySchema(CategorySchema);

export const CategorySelectSchema = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  parent: z.boolean().optional(),
  categories: z.boolean().optional(),
  tasks: z.boolean().optional(),
});

export const CategoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CategoryWhereSchema.optional(),
  orderBy: CategoryOrderSchema.optional(),
  select: CategorySelectSchema.optional()
});

export type Category = z.infer<typeof CategorySchema>;
export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;
export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;
export type CategoryOrder = z.infer<typeof CategoryOrderSchema>;
export type CategorySelect = z.infer<typeof CategorySelectSchema>;
export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;




// ---------- Sprint Schemas ----------


export const SprintSchema = z.object({
  id: z.number().int(),
  createdById: z.number().int(),
  projectId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const SprintCreateSchema = z.object({
  createdById: z.number().int(),
  projectId: z.number().int().nullish(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const SprintUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdById: z.number().int().optional(),
  projectId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const SprintWhereSchema = toWhereQuerySchema(SprintSchema);

export const SprintOrderSchema =  toOrderBySchema(SprintSchema);

export const SprintSelectSchema = z.object({
  id: z.boolean().optional(),
  createdById: z.boolean().optional(),
  projectId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  project: z.boolean().optional(),
  tasks: z.boolean().optional(),
  createdBy: z.boolean().optional(),
});

export const SprintQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: SprintWhereSchema.optional(),
  orderBy: SprintOrderSchema.optional(),
  select: SprintSelectSchema.optional()
});

export type Sprint = z.infer<typeof SprintSchema>;
export type SprintCreate = z.infer<typeof SprintCreateSchema>;
export type SprintUpdate = z.infer<typeof SprintUpdateSchema>;
export type SprintWhere = z.infer<typeof SprintWhereSchema>;
export type SprintOrder = z.infer<typeof SprintOrderSchema>;
export type SprintSelect = z.infer<typeof SprintSelectSchema>;
export type SprintQuery = z.infer<typeof SprintQuerySchema>;




// ---------- Priority Schemas ----------


export const PrioritySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  isDefault: z.boolean(),
});

export const PriorityCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  isDefault: z.boolean(),
});

export const PriorityUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  isDefault: z.boolean().optional(),
});

export const PriorityWhereSchema = toWhereQuerySchema(PrioritySchema);

export const PriorityOrderSchema =  toOrderBySchema(PrioritySchema);

export const PrioritySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  tasks: z.boolean().optional(),
  projects: z.boolean().optional(),
  takenPriorities: z.boolean().optional(),
  givenPriorities: z.boolean().optional(),
});

export const PriorityQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PriorityWhereSchema.optional(),
  orderBy: PriorityOrderSchema.optional(),
  select: PrioritySelectSchema.optional()
});

export type Priority = z.infer<typeof PrioritySchema>;
export type PriorityCreate = z.infer<typeof PriorityCreateSchema>;
export type PriorityUpdate = z.infer<typeof PriorityUpdateSchema>;
export type PriorityWhere = z.infer<typeof PriorityWhereSchema>;
export type PriorityOrder = z.infer<typeof PriorityOrderSchema>;
export type PrioritySelect = z.infer<typeof PrioritySelectSchema>;
export type PriorityQuery = z.infer<typeof PriorityQuerySchema>;




// ---------- Status Schemas ----------


export const StatusSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  isDefault: z.boolean(),
});

export const StatusCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  isDefault: z.boolean(),
});

export const StatusUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
  isDefault: z.boolean().optional(),
});

export const StatusWhereSchema = toWhereQuerySchema(StatusSchema);

export const StatusOrderSchema =  toOrderBySchema(StatusSchema);

export const StatusSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  tasks: z.boolean().optional(),
  projects: z.boolean().optional(),
  takenStatuses: z.boolean().optional(),
  givenStatuses: z.boolean().optional(),
});

export const StatusQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: StatusWhereSchema.optional(),
  orderBy: StatusOrderSchema.optional(),
  select: StatusSelectSchema.optional()
});

export type Status = z.infer<typeof StatusSchema>;
export type StatusCreate = z.infer<typeof StatusCreateSchema>;
export type StatusUpdate = z.infer<typeof StatusUpdateSchema>;
export type StatusWhere = z.infer<typeof StatusWhereSchema>;
export type StatusOrder = z.infer<typeof StatusOrderSchema>;
export type StatusSelect = z.infer<typeof StatusSelectSchema>;
export type StatusQuery = z.infer<typeof StatusQuerySchema>;




// ---------- Point Schemas ----------


export const PointSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  point: z.number().int(),
  description: z.string(),
});

export const PointCreateSchema = z.object({
  name: z.string(),
  point: z.number().int(),
  description: z.string(),
});

export const PointUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  point: z.number().int().optional(),
  description: z.string().optional(),
});

export const PointWhereSchema = toWhereQuerySchema(PointSchema);

export const PointOrderSchema =  toOrderBySchema(PointSchema);

export const PointSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  point: z.boolean().optional(),
  description: z.boolean().optional(),
  tasks: z.boolean().optional(),
  takenPointes: z.boolean().optional(),
  givenPointes: z.boolean().optional(),
});

export const PointQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PointWhereSchema.optional(),
  orderBy: PointOrderSchema.optional(),
  select: PointSelectSchema.optional()
});

export type Point = z.infer<typeof PointSchema>;
export type PointCreate = z.infer<typeof PointCreateSchema>;
export type PointUpdate = z.infer<typeof PointUpdateSchema>;
export type PointWhere = z.infer<typeof PointWhereSchema>;
export type PointOrder = z.infer<typeof PointOrderSchema>;
export type PointSelect = z.infer<typeof PointSelectSchema>;
export type PointQuery = z.infer<typeof PointQuerySchema>;




// ---------- Task Schemas ----------


export const TaskSchema = z.object({
  id: z.number().int(),
  sprintId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.number().int(),
  priorityId: z.number().int().nullish(),
  pointId: z.number().int(),
  statusId: z.number().int().nullish(),
  parentId: z.number().int().nullish(),
  title: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  due: z.date().nullish(),
  resolvedAt: z.date().nullish(),
});

export const TaskCreateSchema = z.object({
  sprintId: z.number().int().nullish(),
  createdById: z.number().int(),
  priorityId: z.number().int().nullish(),
  pointId: z.number().int(),
  statusId: z.number().int().nullish(),
  parentId: z.number().int().nullish(),
  title: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  due: z.date().nullish(),
  resolvedAt: z.date().nullish(),
});

export const TaskUpdateSchema = z.object({
  id: z.number().int().optional(),
  sprintId: z.number().int().nullish().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.number().int().optional(),
  priorityId: z.number().int().nullish().optional(),
  pointId: z.number().int().optional(),
  statusId: z.number().int().nullish().optional(),
  parentId: z.number().int().nullish().optional(),
  title: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
  due: z.date().nullish().optional(),
  resolvedAt: z.date().nullish().optional(),
});

export const TaskWhereSchema = toWhereQuerySchema(TaskSchema);

export const TaskOrderSchema =  toOrderBySchema(TaskSchema);

export const TaskSelectSchema = z.object({
  id: z.boolean().optional(),
  sprintId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdById: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  pointId: z.boolean().optional(),
  statusId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  due: z.boolean().optional(),
  resolvedAt: z.boolean().optional(),
  comments: z.boolean().optional(),
  parent: z.boolean().optional(),
  tasks: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  assignments: z.boolean().optional(),
  tags: z.boolean().optional(),
  categories: z.boolean().optional(),
  point: z.boolean().optional(),
  priority: z.boolean().optional(),
  status: z.boolean().optional(),
  sprint: z.boolean().optional(),
  assignmentHistory: z.boolean().optional(),
  statusHistory: z.boolean().optional(),
  priorityHistory: z.boolean().optional(),
  pointHistory: z.boolean().optional(),
});

export const TaskQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TaskWhereSchema.optional(),
  orderBy: TaskOrderSchema.optional(),
  select: TaskSelectSchema.optional()
});

export type Task = z.infer<typeof TaskSchema>;
export type TaskCreate = z.infer<typeof TaskCreateSchema>;
export type TaskUpdate = z.infer<typeof TaskUpdateSchema>;
export type TaskWhere = z.infer<typeof TaskWhereSchema>;
export type TaskOrder = z.infer<typeof TaskOrderSchema>;
export type TaskSelect = z.infer<typeof TaskSelectSchema>;
export type TaskQuery = z.infer<typeof TaskQuerySchema>;




// ---------- AssignmentHistory Schemas ----------


export const AssignmentHistorySchema = z.object({
  id: z.number().int(),
  createdById: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  projectId: z.number().int(),
  taskId: z.number().int(),
  oldUserId: z.number().int(),
  newUserId: z.number().int(),
});

export const AssignmentHistoryCreateSchema = z.object({
  createdById: z.number().int(),
  projectId: z.number().int(),
  taskId: z.number().int(),
  oldUserId: z.number().int(),
  newUserId: z.number().int(),
});

export const AssignmentHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdById: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  projectId: z.number().int().optional(),
  taskId: z.number().int().optional(),
  oldUserId: z.number().int().optional(),
  newUserId: z.number().int().optional(),
});

export const AssignmentHistoryWhereSchema = toWhereQuerySchema(AssignmentHistorySchema);

export const AssignmentHistoryOrderSchema =  toOrderBySchema(AssignmentHistorySchema);

export const AssignmentHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  createdById: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  oldUserId: z.boolean().optional(),
  newUserId: z.boolean().optional(),
  oldUser: z.boolean().optional(),
  newUser: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  task: z.boolean().optional(),
  project: z.boolean().optional(),
});

export const AssignmentHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AssignmentHistoryWhereSchema.optional(),
  orderBy: AssignmentHistoryOrderSchema.optional(),
  select: AssignmentHistorySelectSchema.optional()
});

export type AssignmentHistory = z.infer<typeof AssignmentHistorySchema>;
export type AssignmentHistoryCreate = z.infer<typeof AssignmentHistoryCreateSchema>;
export type AssignmentHistoryUpdate = z.infer<typeof AssignmentHistoryUpdateSchema>;
export type AssignmentHistoryWhere = z.infer<typeof AssignmentHistoryWhereSchema>;
export type AssignmentHistoryOrder = z.infer<typeof AssignmentHistoryOrderSchema>;
export type AssignmentHistorySelect = z.infer<typeof AssignmentHistorySelectSchema>;
export type AssignmentHistoryQuery = z.infer<typeof AssignmentHistoryQuerySchema>;




// ---------- PriorityHistory Schemas ----------


export const PriorityHistorySchema = z.object({
  id: z.number().int(),
  createdById: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  projectId: z.number().int(),
  taskId: z.number().int(),
  oldPriorityId: z.number().int().nullish(),
  newPriorityId: z.number().int(),
});

export const PriorityHistoryCreateSchema = z.object({
  createdById: z.number().int(),
  projectId: z.number().int(),
  taskId: z.number().int(),
  oldPriorityId: z.number().int().nullish(),
  newPriorityId: z.number().int(),
});

export const PriorityHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdById: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  projectId: z.number().int().optional(),
  taskId: z.number().int().optional(),
  oldPriorityId: z.number().int().nullish().optional(),
  newPriorityId: z.number().int().optional(),
});

export const PriorityHistoryWhereSchema = toWhereQuerySchema(PriorityHistorySchema);

export const PriorityHistoryOrderSchema =  toOrderBySchema(PriorityHistorySchema);

export const PriorityHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  createdById: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  oldPriorityId: z.boolean().optional(),
  newPriorityId: z.boolean().optional(),
  oldPriority: z.boolean().optional(),
  newPriority: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  task: z.boolean().optional(),
  project: z.boolean().optional(),
});

export const PriorityHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PriorityHistoryWhereSchema.optional(),
  orderBy: PriorityHistoryOrderSchema.optional(),
  select: PriorityHistorySelectSchema.optional()
});

export type PriorityHistory = z.infer<typeof PriorityHistorySchema>;
export type PriorityHistoryCreate = z.infer<typeof PriorityHistoryCreateSchema>;
export type PriorityHistoryUpdate = z.infer<typeof PriorityHistoryUpdateSchema>;
export type PriorityHistoryWhere = z.infer<typeof PriorityHistoryWhereSchema>;
export type PriorityHistoryOrder = z.infer<typeof PriorityHistoryOrderSchema>;
export type PriorityHistorySelect = z.infer<typeof PriorityHistorySelectSchema>;
export type PriorityHistoryQuery = z.infer<typeof PriorityHistoryQuerySchema>;




// ---------- StatusHistory Schemas ----------


export const StatusHistorySchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  createdById: z.number().int(),
  oldStatusId: z.number().int().nullish(),
  newStatusId: z.number().int(),
  projectId: z.number().int(),
  taskId: z.number().int(),
});

export const StatusHistoryCreateSchema = z.object({
  createdById: z.number().int(),
  oldStatusId: z.number().int().nullish(),
  newStatusId: z.number().int(),
  projectId: z.number().int(),
  taskId: z.number().int(),
});

export const StatusHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  createdById: z.number().int().optional(),
  oldStatusId: z.number().int().nullish().optional(),
  newStatusId: z.number().int().optional(),
  projectId: z.number().int().optional(),
  taskId: z.number().int().optional(),
});

export const StatusHistoryWhereSchema = toWhereQuerySchema(StatusHistorySchema);

export const StatusHistoryOrderSchema =  toOrderBySchema(StatusHistorySchema);

export const StatusHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdById: z.boolean().optional(),
  oldStatusId: z.boolean().optional(),
  newStatusId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  task: z.boolean().optional(),
  oldStatus: z.boolean().optional(),
  newStatus: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  project: z.boolean().optional(),
});

export const StatusHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: StatusHistoryWhereSchema.optional(),
  orderBy: StatusHistoryOrderSchema.optional(),
  select: StatusHistorySelectSchema.optional()
});

export type StatusHistory = z.infer<typeof StatusHistorySchema>;
export type StatusHistoryCreate = z.infer<typeof StatusHistoryCreateSchema>;
export type StatusHistoryUpdate = z.infer<typeof StatusHistoryUpdateSchema>;
export type StatusHistoryWhere = z.infer<typeof StatusHistoryWhereSchema>;
export type StatusHistoryOrder = z.infer<typeof StatusHistoryOrderSchema>;
export type StatusHistorySelect = z.infer<typeof StatusHistorySelectSchema>;
export type StatusHistoryQuery = z.infer<typeof StatusHistoryQuerySchema>;




// ---------- PointHistory Schemas ----------


export const PointHistorySchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  createdById: z.number().int(),
  oldPointId: z.number().int().nullish(),
  newPointId: z.number().int(),
  projectId: z.number().int(),
  taskId: z.number().int(),
});

export const PointHistoryCreateSchema = z.object({
  createdById: z.number().int(),
  oldPointId: z.number().int().nullish(),
  newPointId: z.number().int(),
  projectId: z.number().int(),
  taskId: z.number().int(),
});

export const PointHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  createdById: z.number().int().optional(),
  oldPointId: z.number().int().nullish().optional(),
  newPointId: z.number().int().optional(),
  projectId: z.number().int().optional(),
  taskId: z.number().int().optional(),
});

export const PointHistoryWhereSchema = toWhereQuerySchema(PointHistorySchema);

export const PointHistoryOrderSchema =  toOrderBySchema(PointHistorySchema);

export const PointHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdById: z.boolean().optional(),
  oldPointId: z.boolean().optional(),
  newPointId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  task: z.boolean().optional(),
  oldPoint: z.boolean().optional(),
  newPoint: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  project: z.boolean().optional(),
});

export const PointHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PointHistoryWhereSchema.optional(),
  orderBy: PointHistoryOrderSchema.optional(),
  select: PointHistorySelectSchema.optional()
});

export type PointHistory = z.infer<typeof PointHistorySchema>;
export type PointHistoryCreate = z.infer<typeof PointHistoryCreateSchema>;
export type PointHistoryUpdate = z.infer<typeof PointHistoryUpdateSchema>;
export type PointHistoryWhere = z.infer<typeof PointHistoryWhereSchema>;
export type PointHistoryOrder = z.infer<typeof PointHistoryOrderSchema>;
export type PointHistorySelect = z.infer<typeof PointHistorySelectSchema>;
export type PointHistoryQuery = z.infer<typeof PointHistoryQuerySchema>;




// ---------- TeamHistory Schemas ----------


export const TeamHistorySchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  createdById: z.number().int(),
  oldTeamId: z.number().int().nullish(),
  newTeamId: z.number().int(),
});

export const TeamHistoryCreateSchema = z.object({
  createdById: z.number().int(),
  oldTeamId: z.number().int().nullish(),
  newTeamId: z.number().int(),
});

export const TeamHistoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  createdById: z.number().int().optional(),
  oldTeamId: z.number().int().nullish().optional(),
  newTeamId: z.number().int().optional(),
});

export const TeamHistoryWhereSchema = toWhereQuerySchema(TeamHistorySchema);

export const TeamHistoryOrderSchema =  toOrderBySchema(TeamHistorySchema);

export const TeamHistorySelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdById: z.boolean().optional(),
  oldTeamId: z.boolean().optional(),
  newTeamId: z.boolean().optional(),
  oldTeam: z.boolean().optional(),
  newTeam: z.boolean().optional(),
  createdBy: z.boolean().optional(),
});

export const TeamHistoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TeamHistoryWhereSchema.optional(),
  orderBy: TeamHistoryOrderSchema.optional(),
  select: TeamHistorySelectSchema.optional()
});

export type TeamHistory = z.infer<typeof TeamHistorySchema>;
export type TeamHistoryCreate = z.infer<typeof TeamHistoryCreateSchema>;
export type TeamHistoryUpdate = z.infer<typeof TeamHistoryUpdateSchema>;
export type TeamHistoryWhere = z.infer<typeof TeamHistoryWhereSchema>;
export type TeamHistoryOrder = z.infer<typeof TeamHistoryOrderSchema>;
export type TeamHistorySelect = z.infer<typeof TeamHistorySelectSchema>;
export type TeamHistoryQuery = z.infer<typeof TeamHistoryQuerySchema>;




// ---------- TaskTag Schemas ----------


export const TaskTagSchema = z.object({
  id: z.number().int(),
  taskId: z.number().int(),
  tagId: z.number().int(),
});

export const TaskTagCreateSchema = z.object({
  taskId: z.number().int(),
  tagId: z.number().int(),
});

export const TaskTagUpdateSchema = z.object({
  id: z.number().int().optional(),
  taskId: z.number().int().optional(),
  tagId: z.number().int().optional(),
});

export const TaskTagWhereSchema = toWhereQuerySchema(TaskTagSchema);

export const TaskTagOrderSchema =  toOrderBySchema(TaskTagSchema);

export const TaskTagSelectSchema = z.object({
  id: z.boolean().optional(),
  taskId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  task: z.boolean().optional(),
  tag: z.boolean().optional(),
});

export const TaskTagQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TaskTagWhereSchema.optional(),
  orderBy: TaskTagOrderSchema.optional(),
  select: TaskTagSelectSchema.optional()
});

export type TaskTag = z.infer<typeof TaskTagSchema>;
export type TaskTagCreate = z.infer<typeof TaskTagCreateSchema>;
export type TaskTagUpdate = z.infer<typeof TaskTagUpdateSchema>;
export type TaskTagWhere = z.infer<typeof TaskTagWhereSchema>;
export type TaskTagOrder = z.infer<typeof TaskTagOrderSchema>;
export type TaskTagSelect = z.infer<typeof TaskTagSelectSchema>;
export type TaskTagQuery = z.infer<typeof TaskTagQuerySchema>;




// ---------- TaskCategory Schemas ----------


export const TaskCategorySchema = z.object({
  id: z.number().int(),
  categoryId: z.number().int(),
  taskId: z.number().int(),
});

export const TaskCategoryCreateSchema = z.object({
  categoryId: z.number().int(),
  taskId: z.number().int(),
});

export const TaskCategoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  categoryId: z.number().int().optional(),
  taskId: z.number().int().optional(),
});

export const TaskCategoryWhereSchema = toWhereQuerySchema(TaskCategorySchema);

export const TaskCategoryOrderSchema =  toOrderBySchema(TaskCategorySchema);

export const TaskCategorySelectSchema = z.object({
  id: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  task: z.boolean().optional(),
  category: z.boolean().optional(),
});

export const TaskCategoryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TaskCategoryWhereSchema.optional(),
  orderBy: TaskCategoryOrderSchema.optional(),
  select: TaskCategorySelectSchema.optional()
});

export type TaskCategory = z.infer<typeof TaskCategorySchema>;
export type TaskCategoryCreate = z.infer<typeof TaskCategoryCreateSchema>;
export type TaskCategoryUpdate = z.infer<typeof TaskCategoryUpdateSchema>;
export type TaskCategoryWhere = z.infer<typeof TaskCategoryWhereSchema>;
export type TaskCategoryOrder = z.infer<typeof TaskCategoryOrderSchema>;
export type TaskCategorySelect = z.infer<typeof TaskCategorySelectSchema>;
export type TaskCategoryQuery = z.infer<typeof TaskCategoryQuerySchema>;




// ---------- Assignment Schemas ----------


export const AssignmentSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  assigneeId: z.number().int(),
  taskId: z.number().int(),
});

export const AssignmentCreateSchema = z.object({
  assigneeId: z.number().int(),
  taskId: z.number().int(),
});

export const AssignmentUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  assigneeId: z.number().int().optional(),
  taskId: z.number().int().optional(),
});

export const AssignmentWhereSchema = toWhereQuerySchema(AssignmentSchema);

export const AssignmentOrderSchema =  toOrderBySchema(AssignmentSchema);

export const AssignmentSelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  assigneeId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  task: z.boolean().optional(),
  assignee: z.boolean().optional(),
});

export const AssignmentQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AssignmentWhereSchema.optional(),
  orderBy: AssignmentOrderSchema.optional(),
  select: AssignmentSelectSchema.optional()
});

export type Assignment = z.infer<typeof AssignmentSchema>;
export type AssignmentCreate = z.infer<typeof AssignmentCreateSchema>;
export type AssignmentUpdate = z.infer<typeof AssignmentUpdateSchema>;
export type AssignmentWhere = z.infer<typeof AssignmentWhereSchema>;
export type AssignmentOrder = z.infer<typeof AssignmentOrderSchema>;
export type AssignmentSelect = z.infer<typeof AssignmentSelectSchema>;
export type AssignmentQuery = z.infer<typeof AssignmentQuerySchema>;




// ---------- Comment Schemas ----------


export const CommentSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  parentId: z.number().int().nullish(),
  createdById: z.number().int(),
  taskId: z.number().int(),
  comment: z.string(),
});

export const CommentCreateSchema = z.object({
  parentId: z.number().int().nullish(),
  createdById: z.number().int(),
  taskId: z.number().int(),
  comment: z.string(),
});

export const CommentUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  parentId: z.number().int().nullish().optional(),
  createdById: z.number().int().optional(),
  taskId: z.number().int().optional(),
  comment: z.string().optional(),
});

export const CommentWhereSchema = toWhereQuerySchema(CommentSchema);

export const CommentOrderSchema =  toOrderBySchema(CommentSchema);

export const CommentSelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  parentId: z.boolean().optional(),
  createdById: z.boolean().optional(),
  taskId: z.boolean().optional(),
  comment: z.boolean().optional(),
  parent: z.boolean().optional(),
  comments: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  task: z.boolean().optional(),
});

export const CommentQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CommentWhereSchema.optional(),
  orderBy: CommentOrderSchema.optional(),
  select: CommentSelectSchema.optional()
});

export type Comment = z.infer<typeof CommentSchema>;
export type CommentCreate = z.infer<typeof CommentCreateSchema>;
export type CommentUpdate = z.infer<typeof CommentUpdateSchema>;
export type CommentWhere = z.infer<typeof CommentWhereSchema>;
export type CommentOrder = z.infer<typeof CommentOrderSchema>;
export type CommentSelect = z.infer<typeof CommentSelectSchema>;
export type CommentQuery = z.infer<typeof CommentQuerySchema>;




// ---------- ProjectTaskTag Schemas ----------


export const ProjectTaskTagSchema = z.object({
  id: z.number().int(),
  projectId: z.number().int(),
  tagId: z.number().int(),
});

export const ProjectTaskTagCreateSchema = z.object({
  projectId: z.number().int(),
  tagId: z.number().int(),
});

export const ProjectTaskTagUpdateSchema = z.object({
  id: z.number().int().optional(),
  projectId: z.number().int().optional(),
  tagId: z.number().int().optional(),
});

export const ProjectTaskTagWhereSchema = toWhereQuerySchema(ProjectTaskTagSchema);

export const ProjectTaskTagOrderSchema =  toOrderBySchema(ProjectTaskTagSchema);

export const ProjectTaskTagSelectSchema = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  tag: z.boolean().optional(),
  project: z.boolean().optional(),
});

export const ProjectTaskTagQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ProjectTaskTagWhereSchema.optional(),
  orderBy: ProjectTaskTagOrderSchema.optional(),
  select: ProjectTaskTagSelectSchema.optional()
});

export type ProjectTaskTag = z.infer<typeof ProjectTaskTagSchema>;
export type ProjectTaskTagCreate = z.infer<typeof ProjectTaskTagCreateSchema>;
export type ProjectTaskTagUpdate = z.infer<typeof ProjectTaskTagUpdateSchema>;
export type ProjectTaskTagWhere = z.infer<typeof ProjectTaskTagWhereSchema>;
export type ProjectTaskTagOrder = z.infer<typeof ProjectTaskTagOrderSchema>;
export type ProjectTaskTagSelect = z.infer<typeof ProjectTaskTagSelectSchema>;
export type ProjectTaskTagQuery = z.infer<typeof ProjectTaskTagQuerySchema>;




// ---------- ProjectTaskStatus Schemas ----------


export const ProjectTaskStatusSchema = z.object({
  id: z.number().int(),
  projectId: z.number().int(),
  statusId: z.number().int(),
});

export const ProjectTaskStatusCreateSchema = z.object({
  projectId: z.number().int(),
  statusId: z.number().int(),
});

export const ProjectTaskStatusUpdateSchema = z.object({
  id: z.number().int().optional(),
  projectId: z.number().int().optional(),
  statusId: z.number().int().optional(),
});

export const ProjectTaskStatusWhereSchema = toWhereQuerySchema(ProjectTaskStatusSchema);

export const ProjectTaskStatusOrderSchema =  toOrderBySchema(ProjectTaskStatusSchema);

export const ProjectTaskStatusSelectSchema = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  statusId: z.boolean().optional(),
  project: z.boolean().optional(),
  status: z.boolean().optional(),
});

export const ProjectTaskStatusQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ProjectTaskStatusWhereSchema.optional(),
  orderBy: ProjectTaskStatusOrderSchema.optional(),
  select: ProjectTaskStatusSelectSchema.optional()
});

export type ProjectTaskStatus = z.infer<typeof ProjectTaskStatusSchema>;
export type ProjectTaskStatusCreate = z.infer<typeof ProjectTaskStatusCreateSchema>;
export type ProjectTaskStatusUpdate = z.infer<typeof ProjectTaskStatusUpdateSchema>;
export type ProjectTaskStatusWhere = z.infer<typeof ProjectTaskStatusWhereSchema>;
export type ProjectTaskStatusOrder = z.infer<typeof ProjectTaskStatusOrderSchema>;
export type ProjectTaskStatusSelect = z.infer<typeof ProjectTaskStatusSelectSchema>;
export type ProjectTaskStatusQuery = z.infer<typeof ProjectTaskStatusQuerySchema>;




// ---------- ProjectTaskPriority Schemas ----------


export const ProjectTaskPrioritySchema = z.object({
  id: z.number().int(),
  projectId: z.number().int(),
  priorityId: z.number().int(),
});

export const ProjectTaskPriorityCreateSchema = z.object({
  projectId: z.number().int(),
  priorityId: z.number().int(),
});

export const ProjectTaskPriorityUpdateSchema = z.object({
  id: z.number().int().optional(),
  projectId: z.number().int().optional(),
  priorityId: z.number().int().optional(),
});

export const ProjectTaskPriorityWhereSchema = toWhereQuerySchema(ProjectTaskPrioritySchema);

export const ProjectTaskPriorityOrderSchema =  toOrderBySchema(ProjectTaskPrioritySchema);

export const ProjectTaskPrioritySelectSchema = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  project: z.boolean().optional(),
  priority: z.boolean().optional(),
});

export const ProjectTaskPriorityQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ProjectTaskPriorityWhereSchema.optional(),
  orderBy: ProjectTaskPriorityOrderSchema.optional(),
  select: ProjectTaskPrioritySelectSchema.optional()
});

export type ProjectTaskPriority = z.infer<typeof ProjectTaskPrioritySchema>;
export type ProjectTaskPriorityCreate = z.infer<typeof ProjectTaskPriorityCreateSchema>;
export type ProjectTaskPriorityUpdate = z.infer<typeof ProjectTaskPriorityUpdateSchema>;
export type ProjectTaskPriorityWhere = z.infer<typeof ProjectTaskPriorityWhereSchema>;
export type ProjectTaskPriorityOrder = z.infer<typeof ProjectTaskPriorityOrderSchema>;
export type ProjectTaskPrioritySelect = z.infer<typeof ProjectTaskPrioritySelectSchema>;
export type ProjectTaskPriorityQuery = z.infer<typeof ProjectTaskPriorityQuerySchema>;


