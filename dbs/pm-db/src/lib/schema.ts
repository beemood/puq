
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- User Schemas ----------


export const UserSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  displayName: z.string(),
});

export const UserCreateSchema = z.object({
  uuid: z.string(),
  displayName: z.string(),
});

export const UserUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  displayName: z.string().optional(),
});

export const UserWhereSchema = toWhereQuerySchema(UserSchema);

export const UserOrderSchema =  toOrderBySchema(UserSchema);

export const UserSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  displayName: z.boolean().optional(),
  comments: z.boolean().optional(),
  createdTasks: z.boolean().optional(),
  assignments: z.boolean().optional(),
  leadTeams: z.boolean().optional(),
  teams: z.boolean().optional(),
  Project: z.boolean().optional(),
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
  description: z.string().nullish(),
});

export const TeamCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
});

export const TeamUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const TeamWhereSchema = toWhereQuerySchema(TeamSchema);

export const TeamOrderSchema =  toOrderBySchema(TeamSchema);

export const TeamSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  managers: z.boolean().optional(),
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
  memeberId: z.number().int(),
});

export const TeamMemberCreateSchema = z.object({
  teamId: z.number().int(),
  memeberId: z.number().int(),
});

export const TeamMemberUpdateSchema = z.object({
  id: z.number().int().optional(),
  teamId: z.number().int().optional(),
  memeberId: z.number().int().optional(),
});

export const TeamMemberWhereSchema = toWhereQuerySchema(TeamMemberSchema);

export const TeamMemberOrderSchema =  toOrderBySchema(TeamMemberSchema);

export const TeamMemberSelectSchema = z.object({
  id: z.boolean().optional(),
  teamId: z.boolean().optional(),
  memeberId: z.boolean().optional(),
  team: z.boolean().optional(),
  memeber: z.boolean().optional(),
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
  name: z.string(),
  description: z.string().nullish(),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  endDate: z.date().nullish(),
});

export const ProjectCreateSchema = z.object({
  createdById: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  endDate: z.date().nullish(),
});

export const ProjectUpdateSchema = z.object({
  id: z.number().int().optional(),
  createdById: z.number().int().optional(),
  name: z.string().optional(),
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
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  startDate: z.boolean().optional(),
  dueDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  sprints: z.boolean().optional(),
  createdBy: z.boolean().optional(),
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
});

export const TagCreateSchema = z.object({
  name: z.string(),
});

export const TagUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const TagWhereSchema = toWhereQuerySchema(TagSchema);

export const TagOrderSchema =  toOrderBySchema(TagSchema);

export const TagSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  tasks: z.boolean().optional(),
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
});

export const CategoryCreateSchema = z.object({
  parentId: z.number().int().nullish(),
  name: z.string(),
  description: z.string().nullish(),
});

export const CategoryUpdateSchema = z.object({
  id: z.number().int().optional(),
  parentId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const CategoryWhereSchema = toWhereQuerySchema(CategorySchema);

export const CategoryOrderSchema =  toOrderBySchema(CategorySchema);

export const CategorySelectSchema = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
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
  projectId: z.number().int().nullish(),
  name: z.string(),
  description: z.string().nullish(),
});

export const SprintCreateSchema = z.object({
  projectId: z.number().int().nullish(),
  name: z.string(),
  description: z.string().nullish(),
});

export const SprintUpdateSchema = z.object({
  id: z.number().int().optional(),
  projectId: z.number().int().nullish().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const SprintWhereSchema = toWhereQuerySchema(SprintSchema);

export const SprintOrderSchema =  toOrderBySchema(SprintSchema);

export const SprintSelectSchema = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  project: z.boolean().optional(),
  tasks: z.boolean().optional(),
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
});

export const PriorityCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
});

export const PriorityUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const PriorityWhereSchema = toWhereQuerySchema(PrioritySchema);

export const PriorityOrderSchema =  toOrderBySchema(PrioritySchema);

export const PrioritySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  tasks: z.boolean().optional(),
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
});

export const StatusCreateSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
});

export const StatusUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const StatusWhereSchema = toWhereQuerySchema(StatusSchema);

export const StatusOrderSchema =  toOrderBySchema(StatusSchema);

export const StatusSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  tasks: z.boolean().optional(),
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




// ---------- Task Schemas ----------


export const TaskSchema = z.object({
  id: z.number().int(),
  sprintId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.number().int(),
  parentId: z.number().int().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  due: z.date().nullish(),
  resolvedAt: z.date().nullish(),
});

export const TaskCreateSchema = z.object({
  sprintId: z.number().int().nullish(),
  createdById: z.number().int(),
  parentId: z.number().int().nullish(),
  title: z.string(),
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
  parentId: z.number().int().nullish().optional(),
  title: z.string().optional(),
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
  parentId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  due: z.boolean().optional(),
  resolvedAt: z.boolean().optional(),
  comments: z.boolean().optional(),
  parent: z.boolean().optional(),
  tasks: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  assignees: z.boolean().optional(),
  tags: z.boolean().optional(),
  categories: z.boolean().optional(),
  prioritites: z.boolean().optional(),
  statuses: z.boolean().optional(),
  sprint: z.boolean().optional(),
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




// ---------- TaskStatus Schemas ----------


export const TaskStatusSchema = z.object({
  id: z.number().int(),
  statusId: z.number().int(),
  taskId: z.number().int(),
});

export const TaskStatusCreateSchema = z.object({
  statusId: z.number().int(),
  taskId: z.number().int(),
});

export const TaskStatusUpdateSchema = z.object({
  id: z.number().int().optional(),
  statusId: z.number().int().optional(),
  taskId: z.number().int().optional(),
});

export const TaskStatusWhereSchema = toWhereQuerySchema(TaskStatusSchema);

export const TaskStatusOrderSchema =  toOrderBySchema(TaskStatusSchema);

export const TaskStatusSelectSchema = z.object({
  id: z.boolean().optional(),
  statusId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  status: z.boolean().optional(),
  task: z.boolean().optional(),
});

export const TaskStatusQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TaskStatusWhereSchema.optional(),
  orderBy: TaskStatusOrderSchema.optional(),
  select: TaskStatusSelectSchema.optional()
});

export type TaskStatus = z.infer<typeof TaskStatusSchema>;
export type TaskStatusCreate = z.infer<typeof TaskStatusCreateSchema>;
export type TaskStatusUpdate = z.infer<typeof TaskStatusUpdateSchema>;
export type TaskStatusWhere = z.infer<typeof TaskStatusWhereSchema>;
export type TaskStatusOrder = z.infer<typeof TaskStatusOrderSchema>;
export type TaskStatusSelect = z.infer<typeof TaskStatusSelectSchema>;
export type TaskStatusQuery = z.infer<typeof TaskStatusQuerySchema>;




// ---------- TaskPriority Schemas ----------


export const TaskPrioritySchema = z.object({
  id: z.number().int(),
  taskId: z.number().int(),
  priorityId: z.number().int(),
});

export const TaskPriorityCreateSchema = z.object({
  taskId: z.number().int(),
  priorityId: z.number().int(),
});

export const TaskPriorityUpdateSchema = z.object({
  id: z.number().int().optional(),
  taskId: z.number().int().optional(),
  priorityId: z.number().int().optional(),
});

export const TaskPriorityWhereSchema = toWhereQuerySchema(TaskPrioritySchema);

export const TaskPriorityOrderSchema =  toOrderBySchema(TaskPrioritySchema);

export const TaskPrioritySelectSchema = z.object({
  id: z.boolean().optional(),
  taskId: z.boolean().optional(),
  priorityId: z.boolean().optional(),
  task: z.boolean().optional(),
  priority: z.boolean().optional(),
});

export const TaskPriorityQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: TaskPriorityWhereSchema.optional(),
  orderBy: TaskPriorityOrderSchema.optional(),
  select: TaskPrioritySelectSchema.optional()
});

export type TaskPriority = z.infer<typeof TaskPrioritySchema>;
export type TaskPriorityCreate = z.infer<typeof TaskPriorityCreateSchema>;
export type TaskPriorityUpdate = z.infer<typeof TaskPriorityUpdateSchema>;
export type TaskPriorityWhere = z.infer<typeof TaskPriorityWhereSchema>;
export type TaskPriorityOrder = z.infer<typeof TaskPriorityOrderSchema>;
export type TaskPrioritySelect = z.infer<typeof TaskPrioritySelectSchema>;
export type TaskPriorityQuery = z.infer<typeof TaskPriorityQuerySchema>;




// ---------- UserTask Schemas ----------


export const UserTaskSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  taskId: z.number().int(),
});

export const UserTaskCreateSchema = z.object({
  userId: z.number().int(),
  taskId: z.number().int(),
});

export const UserTaskUpdateSchema = z.object({
  id: z.number().int().optional(),
  userId: z.number().int().optional(),
  taskId: z.number().int().optional(),
});

export const UserTaskWhereSchema = toWhereQuerySchema(UserTaskSchema);

export const UserTaskOrderSchema =  toOrderBySchema(UserTaskSchema);

export const UserTaskSelectSchema = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  task: z.boolean().optional(),
  user: z.boolean().optional(),
});

export const UserTaskQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: UserTaskWhereSchema.optional(),
  orderBy: UserTaskOrderSchema.optional(),
  select: UserTaskSelectSchema.optional()
});

export type UserTask = z.infer<typeof UserTaskSchema>;
export type UserTaskCreate = z.infer<typeof UserTaskCreateSchema>;
export type UserTaskUpdate = z.infer<typeof UserTaskUpdateSchema>;
export type UserTaskWhere = z.infer<typeof UserTaskWhereSchema>;
export type UserTaskOrder = z.infer<typeof UserTaskOrderSchema>;
export type UserTaskSelect = z.infer<typeof UserTaskSelectSchema>;
export type UserTaskQuery = z.infer<typeof UserTaskQuerySchema>;




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


