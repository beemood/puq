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

export const UserOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    displayName: z.boolean(),
    slug: z.boolean(),
    title: z.boolean(),
    assignments: z.boolean(),
    managedTeams: z.boolean(),
    memberships: z.boolean(),
    createdProjects: z.boolean(),
    createdSprints: z.boolean(),
    createdTasks: z.boolean(),
    createdComments: z.boolean(),
    takenAssignments: z.boolean(),
    givenAssignments: z.boolean(),
    changedAssignments: z.boolean(),
    changedPriorities: z.boolean(),
    changedStatuses: z.boolean(),
    changedPoints: z.boolean(),
    changedTeams: z.boolean(),
  })
  .partial();

export const UserOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  UserOwnProjectionSchema
);

export const TeamOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    managers: z.boolean(),
    members: z.boolean(),
    takenTeams: z.boolean(),
    givenTeams: z.boolean(),
  })
  .partial();

export const TeamOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnProjectionSchema
);

export const TeamManagerOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    managerId: z.boolean(),
    teamId: z.boolean(),
    manager: z.boolean(),
    team: z.boolean(),
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
    team: z.boolean(),
    member: z.boolean(),
  })
  .partial();

export const TeamMemberOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberOwnProjectionSchema
);

export const ProjectOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    parentId: z.boolean(),
    parent: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    startDate: z.boolean(),
    dueDate: z.boolean(),
    endDate: z.boolean(),
    sprints: z.boolean(),
    createdBy: z.boolean(),
    tags: z.boolean(),
    statuses: z.boolean(),
    priorities: z.boolean(),
    assignmentHistory: z.boolean(),
    priorityHistory: z.boolean(),
    statusHistory: z.boolean(),
    pointHistory: z.boolean(),
    projects: z.boolean(),
  })
  .partial();

export const ProjectOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectOwnProjectionSchema
);

export const TagOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean(),
    projects: z.boolean(),
  })
  .partial();

export const TagOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TagOwnProjectionSchema
);

export const CategoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    isDefault: z.boolean(),
    parent: z.boolean(),
    categories: z.boolean(),
    tasks: z.boolean(),
  })
  .partial();

export const CategoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnProjectionSchema
);

export const SprintOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    projectId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    project: z.boolean(),
    tasks: z.boolean(),
    createdBy: z.boolean(),
  })
  .partial();

export const SprintOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  SprintOwnProjectionSchema
);

export const PriorityOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean(),
    projects: z.boolean(),
    takenPriorities: z.boolean(),
    givenPriorities: z.boolean(),
  })
  .partial();

export const PriorityOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriorityOwnProjectionSchema
);

export const StatusOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean(),
    projects: z.boolean(),
    takenStatuses: z.boolean(),
    givenStatuses: z.boolean(),
  })
  .partial();

export const StatusOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  StatusOwnProjectionSchema
);

export const PointOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    point: z.boolean(),
    description: z.boolean(),
    tasks: z.boolean(),
    takenPointes: z.boolean(),
    givenPointes: z.boolean(),
  })
  .partial();

export const PointOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PointOwnProjectionSchema
);

export const TaskOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    sprintId: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    createdById: z.boolean(),
    priorityId: z.boolean(),
    pointId: z.boolean(),
    statusId: z.boolean(),
    parentId: z.boolean(),
    title: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    due: z.boolean(),
    resolvedAt: z.boolean(),
    comments: z.boolean(),
    parent: z.boolean(),
    tasks: z.boolean(),
    createdBy: z.boolean(),
    assignments: z.boolean(),
    tags: z.boolean(),
    categories: z.boolean(),
    point: z.boolean(),
    priority: z.boolean(),
    status: z.boolean(),
    sprint: z.boolean(),
    assignmentHistory: z.boolean(),
    statusHistory: z.boolean(),
    priorityHistory: z.boolean(),
    pointHistory: z.boolean(),
  })
  .partial();

export const TaskOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TaskOwnProjectionSchema
);

export const AssignmentHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    oldUserId: z.boolean(),
    newUserId: z.boolean(),
    oldUser: z.boolean(),
    newUser: z.boolean(),
    createdBy: z.boolean(),
    task: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const AssignmentHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryOwnProjectionSchema
);

export const PriorityHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    oldPriorityId: z.boolean(),
    newPriorityId: z.boolean(),
    oldPriority: z.boolean(),
    newPriority: z.boolean(),
    createdBy: z.boolean(),
    task: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const PriorityHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryOwnProjectionSchema
);

export const StatusHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    createdById: z.boolean(),
    oldStatusId: z.boolean(),
    newStatusId: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean(),
    oldStatus: z.boolean(),
    newStatus: z.boolean(),
    createdBy: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const StatusHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryOwnProjectionSchema
);

export const PointHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    createdById: z.boolean(),
    oldPointId: z.boolean(),
    newPointId: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean(),
    oldPoint: z.boolean(),
    newPoint: z.boolean(),
    createdBy: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const PointHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryOwnProjectionSchema
);

export const TeamHistoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    createdById: z.boolean(),
    oldTeamId: z.boolean(),
    newTeamId: z.boolean(),
    oldTeam: z.boolean(),
    newTeam: z.boolean(),
    createdBy: z.boolean(),
  })
  .partial();

export const TeamHistoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryOwnProjectionSchema
);

export const TaskTagOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    taskId: z.boolean(),
    tagId: z.boolean(),
    task: z.boolean(),
    tag: z.boolean(),
  })
  .partial();

export const TaskTagOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TaskTagOwnProjectionSchema
);

export const TaskCategoryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    categoryId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean(),
    category: z.boolean(),
  })
  .partial();

export const TaskCategoryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryOwnProjectionSchema
);

export const AssignmentOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    assigneeId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean(),
    assignee: z.boolean(),
  })
  .partial();

export const AssignmentOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AssignmentOwnProjectionSchema
);

export const CommentOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    parentId: z.boolean(),
    createdById: z.boolean(),
    taskId: z.boolean(),
    comment: z.boolean(),
    parent: z.boolean(),
    comments: z.boolean(),
    createdBy: z.boolean(),
    task: z.boolean(),
  })
  .partial();

export const CommentOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CommentOwnProjectionSchema
);

export const ProjectTaskTagOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    tagId: z.boolean(),
    tag: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const ProjectTaskTagOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagOwnProjectionSchema
);

export const ProjectTaskStatusOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    statusId: z.boolean(),
    project: z.boolean(),
    status: z.boolean(),
  })
  .partial();

export const ProjectTaskStatusOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusOwnProjectionSchema
);

export const ProjectTaskPriorityOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    priorityId: z.boolean(),
    project: z.boolean(),
    priority: z.boolean(),
  })
  .partial();

export const ProjectTaskPriorityOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityOwnProjectionSchema
);

export const UserOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    displayName: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    title: PZ.StringFilterSchema,
  })
  .partial();

export const UserOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  UserOwnWhereSchema
);

export const TeamOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const TeamOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnWhereSchema
);

export const TeamManagerOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    managerId: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
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

export const ProjectOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    dueDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
  })
  .partial();

export const ProjectOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectOwnWhereSchema
);

export const TagOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
  })
  .partial();

export const TagOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TagOwnWhereSchema
);

export const CategoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
  })
  .partial();

export const CategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnWhereSchema
);

export const SprintOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const SprintOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SprintOwnWhereSchema
);

export const PriorityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
  })
  .partial();

export const PriorityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriorityOwnWhereSchema
);

export const StatusOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
  })
  .partial();

export const StatusOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StatusOwnWhereSchema
);

export const PointOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    point: PZ.IntegerFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const PointOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PointOwnWhereSchema
);

export const TaskOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sprintId: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    priorityId: PZ.IntegerFilterSchema,
    pointId: PZ.IntegerFilterSchema,
    statusId: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    title: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    due: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
  })
  .partial();

export const TaskOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskOwnWhereSchema
);

export const AssignmentHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    oldUserId: PZ.IntegerFilterSchema,
    newUserId: PZ.IntegerFilterSchema,
  })
  .partial();

export const AssignmentHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryOwnWhereSchema
);

export const PriorityHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    oldPriorityId: PZ.IntegerFilterSchema,
    newPriorityId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PriorityHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryOwnWhereSchema
);

export const StatusHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    oldStatusId: PZ.IntegerFilterSchema,
    newStatusId: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
  })
  .partial();

export const StatusHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryOwnWhereSchema
);

export const PointHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    oldPointId: PZ.IntegerFilterSchema,
    newPointId: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
  })
  .partial();

export const PointHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryOwnWhereSchema
);

export const TeamHistoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    oldTeamId: PZ.IntegerFilterSchema,
    newTeamId: PZ.IntegerFilterSchema,
  })
  .partial();

export const TeamHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryOwnWhereSchema
);

export const TaskTagOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    tagId: PZ.IntegerFilterSchema,
  })
  .partial();

export const TaskTagOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskTagOwnWhereSchema
);

export const TaskCategoryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
  })
  .partial();

export const TaskCategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryOwnWhereSchema
);

export const AssignmentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    assigneeId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
  })
  .partial();

export const AssignmentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentOwnWhereSchema
);

export const CommentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    comment: PZ.StringFilterSchema,
  })
  .partial();

export const CommentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CommentOwnWhereSchema
);

export const ProjectTaskTagOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    tagId: PZ.IntegerFilterSchema,
  })
  .partial();

export const ProjectTaskTagOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagOwnWhereSchema
);

export const ProjectTaskStatusOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    statusId: PZ.IntegerFilterSchema,
  })
  .partial();

export const ProjectTaskStatusOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusOwnWhereSchema
);

export const ProjectTaskPriorityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    priorityId: PZ.IntegerFilterSchema,
  })
  .partial();

export const ProjectTaskPriorityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityOwnWhereSchema
);

export const UserOwnIncludeSchema = z
  .object({
    assignments: z.boolean(),
    managedTeams: z.boolean(),
    memberships: z.boolean(),
    createdProjects: z.boolean(),
    createdSprints: z.boolean(),
    createdTasks: z.boolean(),
    createdComments: z.boolean(),
    takenAssignments: z.boolean(),
    givenAssignments: z.boolean(),
    changedAssignments: z.boolean(),
    changedPriorities: z.boolean(),
    changedStatuses: z.boolean(),
    changedPoints: z.boolean(),
    changedTeams: z.boolean(),
  })
  .partial();

export const UserOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  UserOwnIncludeSchema
);

export const UserOwnQueryOneSchema = z
  .object({
    where: UserOwnWhereSchemaJson,
    select: UserOwnProjectionSchemaJson,
    omit: UserOwnProjectionSchemaJson,
    include: UserOwnIncludeSchemaJson,
  })
  .partial();

export const UserOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UserOwnWhereSchemaJson,
    select: UserOwnProjectionSchemaJson,
    omit: UserOwnProjectionSchemaJson,
    include: UserOwnIncludeSchemaJson,
  })
  .partial();

export const TeamOwnIncludeSchema = z
  .object({
    managers: z.boolean(),
    members: z.boolean(),
    takenTeams: z.boolean(),
    givenTeams: z.boolean(),
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
    manager: z.boolean(),
    team: z.boolean(),
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
    team: z.boolean(),
    member: z.boolean(),
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

export const ProjectOwnIncludeSchema = z
  .object({
    parent: z.boolean(),
    sprints: z.boolean(),
    createdBy: z.boolean(),
    tags: z.boolean(),
    statuses: z.boolean(),
    priorities: z.boolean(),
    assignmentHistory: z.boolean(),
    priorityHistory: z.boolean(),
    statusHistory: z.boolean(),
    pointHistory: z.boolean(),
    projects: z.boolean(),
  })
  .partial();

export const ProjectOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectOwnIncludeSchema
);

export const ProjectOwnQueryOneSchema = z
  .object({
    where: ProjectOwnWhereSchemaJson,
    select: ProjectOwnProjectionSchemaJson,
    omit: ProjectOwnProjectionSchemaJson,
    include: ProjectOwnIncludeSchemaJson,
  })
  .partial();

export const ProjectOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectOwnWhereSchemaJson,
    select: ProjectOwnProjectionSchemaJson,
    omit: ProjectOwnProjectionSchemaJson,
    include: ProjectOwnIncludeSchemaJson,
  })
  .partial();

export const TagOwnIncludeSchema = z
  .object({
    tasks: z.boolean(),
    projects: z.boolean(),
  })
  .partial();

export const TagOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TagOwnIncludeSchema
);

export const TagOwnQueryOneSchema = z
  .object({
    where: TagOwnWhereSchemaJson,
    select: TagOwnProjectionSchemaJson,
    omit: TagOwnProjectionSchemaJson,
    include: TagOwnIncludeSchemaJson,
  })
  .partial();

export const TagOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TagOwnWhereSchemaJson,
    select: TagOwnProjectionSchemaJson,
    omit: TagOwnProjectionSchemaJson,
    include: TagOwnIncludeSchemaJson,
  })
  .partial();

export const CategoryOwnIncludeSchema = z
  .object({
    parent: z.boolean(),
    categories: z.boolean(),
    tasks: z.boolean(),
  })
  .partial();

export const CategoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnIncludeSchema
);

export const CategoryOwnQueryOneSchema = z
  .object({
    where: CategoryOwnWhereSchemaJson,
    select: CategoryOwnProjectionSchemaJson,
    omit: CategoryOwnProjectionSchemaJson,
    include: CategoryOwnIncludeSchemaJson,
  })
  .partial();

export const CategoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CategoryOwnWhereSchemaJson,
    select: CategoryOwnProjectionSchemaJson,
    omit: CategoryOwnProjectionSchemaJson,
    include: CategoryOwnIncludeSchemaJson,
  })
  .partial();

export const SprintOwnIncludeSchema = z
  .object({
    project: z.boolean(),
    tasks: z.boolean(),
    createdBy: z.boolean(),
  })
  .partial();

export const SprintOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  SprintOwnIncludeSchema
);

export const SprintOwnQueryOneSchema = z
  .object({
    where: SprintOwnWhereSchemaJson,
    select: SprintOwnProjectionSchemaJson,
    omit: SprintOwnProjectionSchemaJson,
    include: SprintOwnIncludeSchemaJson,
  })
  .partial();

export const SprintOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SprintOwnWhereSchemaJson,
    select: SprintOwnProjectionSchemaJson,
    omit: SprintOwnProjectionSchemaJson,
    include: SprintOwnIncludeSchemaJson,
  })
  .partial();

export const PriorityOwnIncludeSchema = z
  .object({
    tasks: z.boolean(),
    projects: z.boolean(),
    takenPriorities: z.boolean(),
    givenPriorities: z.boolean(),
  })
  .partial();

export const PriorityOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriorityOwnIncludeSchema
);

export const PriorityOwnQueryOneSchema = z
  .object({
    where: PriorityOwnWhereSchemaJson,
    select: PriorityOwnProjectionSchemaJson,
    omit: PriorityOwnProjectionSchemaJson,
    include: PriorityOwnIncludeSchemaJson,
  })
  .partial();

export const PriorityOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriorityOwnWhereSchemaJson,
    select: PriorityOwnProjectionSchemaJson,
    omit: PriorityOwnProjectionSchemaJson,
    include: PriorityOwnIncludeSchemaJson,
  })
  .partial();

export const StatusOwnIncludeSchema = z
  .object({
    tasks: z.boolean(),
    projects: z.boolean(),
    takenStatuses: z.boolean(),
    givenStatuses: z.boolean(),
  })
  .partial();

export const StatusOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  StatusOwnIncludeSchema
);

export const StatusOwnQueryOneSchema = z
  .object({
    where: StatusOwnWhereSchemaJson,
    select: StatusOwnProjectionSchemaJson,
    omit: StatusOwnProjectionSchemaJson,
    include: StatusOwnIncludeSchemaJson,
  })
  .partial();

export const StatusOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StatusOwnWhereSchemaJson,
    select: StatusOwnProjectionSchemaJson,
    omit: StatusOwnProjectionSchemaJson,
    include: StatusOwnIncludeSchemaJson,
  })
  .partial();

export const PointOwnIncludeSchema = z
  .object({
    tasks: z.boolean(),
    takenPointes: z.boolean(),
    givenPointes: z.boolean(),
  })
  .partial();

export const PointOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PointOwnIncludeSchema
);

export const PointOwnQueryOneSchema = z
  .object({
    where: PointOwnWhereSchemaJson,
    select: PointOwnProjectionSchemaJson,
    omit: PointOwnProjectionSchemaJson,
    include: PointOwnIncludeSchemaJson,
  })
  .partial();

export const PointOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PointOwnWhereSchemaJson,
    select: PointOwnProjectionSchemaJson,
    omit: PointOwnProjectionSchemaJson,
    include: PointOwnIncludeSchemaJson,
  })
  .partial();

export const TaskOwnIncludeSchema = z
  .object({
    comments: z.boolean(),
    parent: z.boolean(),
    tasks: z.boolean(),
    createdBy: z.boolean(),
    assignments: z.boolean(),
    tags: z.boolean(),
    categories: z.boolean(),
    point: z.boolean(),
    priority: z.boolean(),
    status: z.boolean(),
    sprint: z.boolean(),
    assignmentHistory: z.boolean(),
    statusHistory: z.boolean(),
    priorityHistory: z.boolean(),
    pointHistory: z.boolean(),
  })
  .partial();

export const TaskOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TaskOwnIncludeSchema
);

export const TaskOwnQueryOneSchema = z
  .object({
    where: TaskOwnWhereSchemaJson,
    select: TaskOwnProjectionSchemaJson,
    omit: TaskOwnProjectionSchemaJson,
    include: TaskOwnIncludeSchemaJson,
  })
  .partial();

export const TaskOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TaskOwnWhereSchemaJson,
    select: TaskOwnProjectionSchemaJson,
    omit: TaskOwnProjectionSchemaJson,
    include: TaskOwnIncludeSchemaJson,
  })
  .partial();

export const AssignmentHistoryOwnIncludeSchema = z
  .object({
    oldUser: z.boolean(),
    newUser: z.boolean(),
    createdBy: z.boolean(),
    task: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const AssignmentHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryOwnIncludeSchema
);

export const AssignmentHistoryOwnQueryOneSchema = z
  .object({
    where: AssignmentHistoryOwnWhereSchemaJson,
    select: AssignmentHistoryOwnProjectionSchemaJson,
    omit: AssignmentHistoryOwnProjectionSchemaJson,
    include: AssignmentHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const AssignmentHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AssignmentHistoryOwnWhereSchemaJson,
    select: AssignmentHistoryOwnProjectionSchemaJson,
    omit: AssignmentHistoryOwnProjectionSchemaJson,
    include: AssignmentHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const PriorityHistoryOwnIncludeSchema = z
  .object({
    oldPriority: z.boolean(),
    newPriority: z.boolean(),
    createdBy: z.boolean(),
    task: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const PriorityHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryOwnIncludeSchema
);

export const PriorityHistoryOwnQueryOneSchema = z
  .object({
    where: PriorityHistoryOwnWhereSchemaJson,
    select: PriorityHistoryOwnProjectionSchemaJson,
    omit: PriorityHistoryOwnProjectionSchemaJson,
    include: PriorityHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const PriorityHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriorityHistoryOwnWhereSchemaJson,
    select: PriorityHistoryOwnProjectionSchemaJson,
    omit: PriorityHistoryOwnProjectionSchemaJson,
    include: PriorityHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const StatusHistoryOwnIncludeSchema = z
  .object({
    task: z.boolean(),
    oldStatus: z.boolean(),
    newStatus: z.boolean(),
    createdBy: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const StatusHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryOwnIncludeSchema
);

export const StatusHistoryOwnQueryOneSchema = z
  .object({
    where: StatusHistoryOwnWhereSchemaJson,
    select: StatusHistoryOwnProjectionSchemaJson,
    omit: StatusHistoryOwnProjectionSchemaJson,
    include: StatusHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const StatusHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StatusHistoryOwnWhereSchemaJson,
    select: StatusHistoryOwnProjectionSchemaJson,
    omit: StatusHistoryOwnProjectionSchemaJson,
    include: StatusHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const PointHistoryOwnIncludeSchema = z
  .object({
    task: z.boolean(),
    oldPoint: z.boolean(),
    newPoint: z.boolean(),
    createdBy: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const PointHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryOwnIncludeSchema
);

export const PointHistoryOwnQueryOneSchema = z
  .object({
    where: PointHistoryOwnWhereSchemaJson,
    select: PointHistoryOwnProjectionSchemaJson,
    omit: PointHistoryOwnProjectionSchemaJson,
    include: PointHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const PointHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PointHistoryOwnWhereSchemaJson,
    select: PointHistoryOwnProjectionSchemaJson,
    omit: PointHistoryOwnProjectionSchemaJson,
    include: PointHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const TeamHistoryOwnIncludeSchema = z
  .object({
    oldTeam: z.boolean(),
    newTeam: z.boolean(),
    createdBy: z.boolean(),
  })
  .partial();

export const TeamHistoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryOwnIncludeSchema
);

export const TeamHistoryOwnQueryOneSchema = z
  .object({
    where: TeamHistoryOwnWhereSchemaJson,
    select: TeamHistoryOwnProjectionSchemaJson,
    omit: TeamHistoryOwnProjectionSchemaJson,
    include: TeamHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const TeamHistoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamHistoryOwnWhereSchemaJson,
    select: TeamHistoryOwnProjectionSchemaJson,
    omit: TeamHistoryOwnProjectionSchemaJson,
    include: TeamHistoryOwnIncludeSchemaJson,
  })
  .partial();

export const TaskTagOwnIncludeSchema = z
  .object({
    task: z.boolean(),
    tag: z.boolean(),
  })
  .partial();

export const TaskTagOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TaskTagOwnIncludeSchema
);

export const TaskTagOwnQueryOneSchema = z
  .object({
    where: TaskTagOwnWhereSchemaJson,
    select: TaskTagOwnProjectionSchemaJson,
    omit: TaskTagOwnProjectionSchemaJson,
    include: TaskTagOwnIncludeSchemaJson,
  })
  .partial();

export const TaskTagOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TaskTagOwnWhereSchemaJson,
    select: TaskTagOwnProjectionSchemaJson,
    omit: TaskTagOwnProjectionSchemaJson,
    include: TaskTagOwnIncludeSchemaJson,
  })
  .partial();

export const TaskCategoryOwnIncludeSchema = z
  .object({
    task: z.boolean(),
    category: z.boolean(),
  })
  .partial();

export const TaskCategoryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryOwnIncludeSchema
);

export const TaskCategoryOwnQueryOneSchema = z
  .object({
    where: TaskCategoryOwnWhereSchemaJson,
    select: TaskCategoryOwnProjectionSchemaJson,
    omit: TaskCategoryOwnProjectionSchemaJson,
    include: TaskCategoryOwnIncludeSchemaJson,
  })
  .partial();

export const TaskCategoryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TaskCategoryOwnWhereSchemaJson,
    select: TaskCategoryOwnProjectionSchemaJson,
    omit: TaskCategoryOwnProjectionSchemaJson,
    include: TaskCategoryOwnIncludeSchemaJson,
  })
  .partial();

export const AssignmentOwnIncludeSchema = z
  .object({
    task: z.boolean(),
    assignee: z.boolean(),
  })
  .partial();

export const AssignmentOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  AssignmentOwnIncludeSchema
);

export const AssignmentOwnQueryOneSchema = z
  .object({
    where: AssignmentOwnWhereSchemaJson,
    select: AssignmentOwnProjectionSchemaJson,
    omit: AssignmentOwnProjectionSchemaJson,
    include: AssignmentOwnIncludeSchemaJson,
  })
  .partial();

export const AssignmentOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AssignmentOwnWhereSchemaJson,
    select: AssignmentOwnProjectionSchemaJson,
    omit: AssignmentOwnProjectionSchemaJson,
    include: AssignmentOwnIncludeSchemaJson,
  })
  .partial();

export const CommentOwnIncludeSchema = z
  .object({
    parent: z.boolean(),
    comments: z.boolean(),
    createdBy: z.boolean(),
    task: z.boolean(),
  })
  .partial();

export const CommentOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  CommentOwnIncludeSchema
);

export const CommentOwnQueryOneSchema = z
  .object({
    where: CommentOwnWhereSchemaJson,
    select: CommentOwnProjectionSchemaJson,
    omit: CommentOwnProjectionSchemaJson,
    include: CommentOwnIncludeSchemaJson,
  })
  .partial();

export const CommentOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CommentOwnWhereSchemaJson,
    select: CommentOwnProjectionSchemaJson,
    omit: CommentOwnProjectionSchemaJson,
    include: CommentOwnIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskTagOwnIncludeSchema = z
  .object({
    tag: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const ProjectTaskTagOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagOwnIncludeSchema
);

export const ProjectTaskTagOwnQueryOneSchema = z
  .object({
    where: ProjectTaskTagOwnWhereSchemaJson,
    select: ProjectTaskTagOwnProjectionSchemaJson,
    omit: ProjectTaskTagOwnProjectionSchemaJson,
    include: ProjectTaskTagOwnIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskTagOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectTaskTagOwnWhereSchemaJson,
    select: ProjectTaskTagOwnProjectionSchemaJson,
    omit: ProjectTaskTagOwnProjectionSchemaJson,
    include: ProjectTaskTagOwnIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskStatusOwnIncludeSchema = z
  .object({
    project: z.boolean(),
    status: z.boolean(),
  })
  .partial();

export const ProjectTaskStatusOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusOwnIncludeSchema
);

export const ProjectTaskStatusOwnQueryOneSchema = z
  .object({
    where: ProjectTaskStatusOwnWhereSchemaJson,
    select: ProjectTaskStatusOwnProjectionSchemaJson,
    omit: ProjectTaskStatusOwnProjectionSchemaJson,
    include: ProjectTaskStatusOwnIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskStatusOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectTaskStatusOwnWhereSchemaJson,
    select: ProjectTaskStatusOwnProjectionSchemaJson,
    omit: ProjectTaskStatusOwnProjectionSchemaJson,
    include: ProjectTaskStatusOwnIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskPriorityOwnIncludeSchema = z
  .object({
    project: z.boolean(),
    priority: z.boolean(),
  })
  .partial();

export const ProjectTaskPriorityOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityOwnIncludeSchema
);

export const ProjectTaskPriorityOwnQueryOneSchema = z
  .object({
    where: ProjectTaskPriorityOwnWhereSchemaJson,
    select: ProjectTaskPriorityOwnProjectionSchemaJson,
    omit: ProjectTaskPriorityOwnProjectionSchemaJson,
    include: ProjectTaskPriorityOwnIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskPriorityOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectTaskPriorityOwnWhereSchemaJson,
    select: ProjectTaskPriorityOwnProjectionSchemaJson,
    omit: ProjectTaskPriorityOwnProjectionSchemaJson,
    include: ProjectTaskPriorityOwnIncludeSchemaJson,
  })
  .partial();

export const UserCreateSchema = z
  .object({
    uuid: z.string(),
    displayName: z.string(),
    slug: z.string().optional(),
    title: z.string(),
  })
  .transform(slugTransformer('title'));

export const UserUpdateSchema = z
  .object({
    uuid: z.string().optional(),
    displayName: z.string().optional(),
    slug: z.string().optional().optional(),
    title: z.string().optional(),
  })
  .transform(slugTransformer('title'));

export const UserOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    displayName: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    title: PZ.OrderDirectionSchema,
  })
  .partial();

export const UserOrderBySchemaJson = z.preprocess(
  jsonParser,
  UserOrderBySchema
);

export const UserWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    displayName: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    title: PZ.StringFilterSchema,
    assignments: z
      .object({
        some: AssignmentOwnWhereSchema,
        every: AssignmentOwnWhereSchema,
        none: AssignmentOwnWhereSchema,
      })
      .partial(),
    managedTeams: z
      .object({
        some: TeamManagerOwnWhereSchema,
        every: TeamManagerOwnWhereSchema,
        none: TeamManagerOwnWhereSchema,
      })
      .partial(),
    memberships: z
      .object({
        some: TeamMemberOwnWhereSchema,
        every: TeamMemberOwnWhereSchema,
        none: TeamMemberOwnWhereSchema,
      })
      .partial(),
    createdProjects: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
    createdSprints: z
      .object({
        some: SprintOwnWhereSchema,
        every: SprintOwnWhereSchema,
        none: SprintOwnWhereSchema,
      })
      .partial(),
    createdTasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    createdComments: z
      .object({
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      })
      .partial(),
    takenAssignments: z
      .object({
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      })
      .partial(),
    givenAssignments: z
      .object({
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      })
      .partial(),
    changedAssignments: z
      .object({
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      })
      .partial(),
    changedPriorities: z
      .object({
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      })
      .partial(),
    changedStatuses: z
      .object({
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      })
      .partial(),
    changedPoints: z
      .object({
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      })
      .partial(),
    changedTeams: z
      .object({
        some: TeamHistoryOwnWhereSchema,
        every: TeamHistoryOwnWhereSchema,
        none: TeamHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const UserWhereSchemaJson = z.preprocess(jsonParser, UserWhereSchema);

export const UserProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    displayName: z.boolean(),
    slug: z.boolean(),
    title: z.boolean(),
    assignments: z.boolean().or(AssignmentOwnQuerySchema),
    managedTeams: z.boolean().or(TeamManagerOwnQuerySchema),
    memberships: z.boolean().or(TeamMemberOwnQuerySchema),
    createdProjects: z.boolean().or(ProjectOwnQuerySchema),
    createdSprints: z.boolean().or(SprintOwnQuerySchema),
    createdTasks: z.boolean().or(TaskOwnQuerySchema),
    createdComments: z.boolean().or(CommentOwnQuerySchema),
    takenAssignments: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    givenAssignments: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    changedAssignments: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    changedPriorities: z.boolean().or(PriorityHistoryOwnQuerySchema),
    changedStatuses: z.boolean().or(StatusHistoryOwnQuerySchema),
    changedPoints: z.boolean().or(PointHistoryOwnQuerySchema),
    changedTeams: z.boolean().or(TeamHistoryOwnQuerySchema),
  })
  .partial();

export const UserProjectionSchemaJson = z.preprocess(
  jsonParser,
  UserProjectionSchema
);

export const UserIncludeSchema = z
  .object({
    assignments: z.boolean().or(AssignmentOwnQuerySchema),
    managedTeams: z.boolean().or(TeamManagerOwnQuerySchema),
    memberships: z.boolean().or(TeamMemberOwnQuerySchema),
    createdProjects: z.boolean().or(ProjectOwnQuerySchema),
    createdSprints: z.boolean().or(SprintOwnQuerySchema),
    createdTasks: z.boolean().or(TaskOwnQuerySchema),
    createdComments: z.boolean().or(CommentOwnQuerySchema),
    takenAssignments: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    givenAssignments: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    changedAssignments: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    changedPriorities: z.boolean().or(PriorityHistoryOwnQuerySchema),
    changedStatuses: z.boolean().or(StatusHistoryOwnQuerySchema),
    changedPoints: z.boolean().or(PointHistoryOwnQuerySchema),
    changedTeams: z.boolean().or(TeamHistoryOwnQuerySchema),
  })
  .partial();

export const UserIncludeSchemaJson = z.preprocess(
  jsonParser,
  UserIncludeSchema
);

export const TeamCreateSchema = z
  .object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const TeamUpdateSchema = z
  .object({
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const TeamOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
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
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    managers: z
      .object({
        some: TeamManagerOwnWhereSchema,
        every: TeamManagerOwnWhereSchema,
        none: TeamManagerOwnWhereSchema,
      })
      .partial(),
    members: z
      .object({
        some: TeamMemberOwnWhereSchema,
        every: TeamMemberOwnWhereSchema,
        none: TeamMemberOwnWhereSchema,
      })
      .partial(),
    takenTeams: z
      .object({
        some: TeamHistoryOwnWhereSchema,
        every: TeamHistoryOwnWhereSchema,
        none: TeamHistoryOwnWhereSchema,
      })
      .partial(),
    givenTeams: z
      .object({
        some: TeamHistoryOwnWhereSchema,
        every: TeamHistoryOwnWhereSchema,
        none: TeamHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TeamWhereSchemaJson = z.preprocess(jsonParser, TeamWhereSchema);

export const TeamProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    managers: z.boolean().or(TeamManagerOwnQuerySchema),
    members: z.boolean().or(TeamMemberOwnQuerySchema),
    takenTeams: z.boolean().or(TeamHistoryOwnQuerySchema),
    givenTeams: z.boolean().or(TeamHistoryOwnQuerySchema),
  })
  .partial();

export const TeamProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamProjectionSchema
);

export const TeamIncludeSchema = z
  .object({
    managers: z.boolean().or(TeamManagerOwnQuerySchema),
    members: z.boolean().or(TeamMemberOwnQuerySchema),
    takenTeams: z.boolean().or(TeamHistoryOwnQuerySchema),
    givenTeams: z.boolean().or(TeamHistoryOwnQuerySchema),
  })
  .partial();

export const TeamIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamIncludeSchema
);

export const TeamManagerCreateSchema = z.object({
  managerId: z.int(),
  teamId: z.int(),
});

export const TeamManagerUpdateSchema = z.object({
  managerId: z.int().optional(),
  teamId: z.int().optional(),
});

export const TeamManagerOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    managerId: PZ.OrderDirectionSchema,
    teamId: PZ.OrderDirectionSchema,
  })
  .partial();

export const TeamManagerOrderBySchemaJson = z.preprocess(
  jsonParser,
  TeamManagerOrderBySchema
);

export const TeamManagerWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    managerId: PZ.IntegerFilterSchema,
    teamId: PZ.IntegerFilterSchema,
    manager: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
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

export const TeamManagerWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerWhereSchema
);

export const TeamManagerProjectionSchema = z
  .object({
    id: z.boolean(),
    managerId: z.boolean(),
    teamId: z.boolean(),
    manager: z.boolean().or(UserOwnQueryOneSchema),
    team: z.boolean().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerProjectionSchema
);

export const TeamManagerIncludeSchema = z
  .object({
    manager: z.boolean().or(UserOwnQueryOneSchema),
    team: z.boolean().or(TeamOwnQueryOneSchema),
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
    team: z
      .object({
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      })
      .partial(),
    member: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
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
    team: z.boolean().or(TeamOwnQueryOneSchema),
    member: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberProjectionSchema
);

export const TeamMemberIncludeSchema = z
  .object({
    team: z.boolean().or(TeamOwnQueryOneSchema),
    member: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberIncludeSchema
);

export const ProjectCreateSchema = z
  .object({
    createdById: z.int(),
    parentId: z.int().optional(),
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    startDate: z.iso.datetime().optional(),
    dueDate: z.iso.datetime().optional(),
    endDate: z.iso.datetime().optional(),
  })
  .transform(slugTransformer('name'));

export const ProjectUpdateSchema = z
  .object({
    createdById: z.int().optional(),
    parentId: z.int().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
    startDate: z.iso.datetime().optional().optional(),
    dueDate: z.iso.datetime().optional().optional(),
    endDate: z.iso.datetime().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const ProjectOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    startDate: PZ.OrderDirectionSchema,
    dueDate: PZ.OrderDirectionSchema,
    endDate: PZ.OrderDirectionSchema,
  })
  .partial();

export const ProjectOrderBySchemaJson = z.preprocess(
  jsonParser,
  ProjectOrderBySchema
);

export const ProjectWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    parent: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    startDate: PZ.DateTimeFilterSchema,
    dueDate: PZ.DateTimeFilterSchema,
    endDate: PZ.DateTimeFilterSchema,
    sprints: z
      .object({
        some: SprintOwnWhereSchema,
        every: SprintOwnWhereSchema,
        none: SprintOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    tags: z
      .object({
        some: ProjectTaskTagOwnWhereSchema,
        every: ProjectTaskTagOwnWhereSchema,
        none: ProjectTaskTagOwnWhereSchema,
      })
      .partial(),
    statuses: z
      .object({
        some: ProjectTaskStatusOwnWhereSchema,
        every: ProjectTaskStatusOwnWhereSchema,
        none: ProjectTaskStatusOwnWhereSchema,
      })
      .partial(),
    priorities: z
      .object({
        some: ProjectTaskPriorityOwnWhereSchema,
        every: ProjectTaskPriorityOwnWhereSchema,
        none: ProjectTaskPriorityOwnWhereSchema,
      })
      .partial(),
    assignmentHistory: z
      .object({
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      })
      .partial(),
    priorityHistory: z
      .object({
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      })
      .partial(),
    statusHistory: z
      .object({
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      })
      .partial(),
    pointHistory: z
      .object({
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      })
      .partial(),
    projects: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ProjectWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectWhereSchema
);

export const ProjectProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    parentId: z.boolean(),
    parent: z.boolean().or(ProjectOwnQueryOneSchema),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    startDate: z.boolean(),
    dueDate: z.boolean(),
    endDate: z.boolean(),
    sprints: z.boolean().or(SprintOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    tags: z.boolean().or(ProjectTaskTagOwnQuerySchema),
    statuses: z.boolean().or(ProjectTaskStatusOwnQuerySchema),
    priorities: z.boolean().or(ProjectTaskPriorityOwnQuerySchema),
    assignmentHistory: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    priorityHistory: z.boolean().or(PriorityHistoryOwnQuerySchema),
    statusHistory: z.boolean().or(StatusHistoryOwnQuerySchema),
    pointHistory: z.boolean().or(PointHistoryOwnQuerySchema),
    projects: z.boolean().or(ProjectOwnQuerySchema),
  })
  .partial();

export const ProjectProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectProjectionSchema
);

export const ProjectIncludeSchema = z
  .object({
    parent: z.boolean().or(ProjectOwnQueryOneSchema),
    sprints: z.boolean().or(SprintOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    tags: z.boolean().or(ProjectTaskTagOwnQuerySchema),
    statuses: z.boolean().or(ProjectTaskStatusOwnQuerySchema),
    priorities: z.boolean().or(ProjectTaskPriorityOwnQuerySchema),
    assignmentHistory: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    priorityHistory: z.boolean().or(PriorityHistoryOwnQuerySchema),
    statusHistory: z.boolean().or(StatusHistoryOwnQuerySchema),
    pointHistory: z.boolean().or(PointHistoryOwnQuerySchema),
    projects: z.boolean().or(ProjectOwnQuerySchema),
  })
  .partial();

export const ProjectIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectIncludeSchema
);

export const TagCreateSchema = z.object({
  name: z.string(),
  isDefault: z.boolean().optional(),
});

export const TagUpdateSchema = z.object({
  name: z.string().optional(),
  isDefault: z.boolean().optional().optional(),
});

export const TagOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial();

export const TagOrderBySchemaJson = z.preprocess(jsonParser, TagOrderBySchema);

export const TagWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
    tasks: z
      .object({
        some: TaskTagOwnWhereSchema,
        every: TaskTagOwnWhereSchema,
        none: TaskTagOwnWhereSchema,
      })
      .partial(),
    projects: z
      .object({
        some: ProjectTaskTagOwnWhereSchema,
        every: ProjectTaskTagOwnWhereSchema,
        none: ProjectTaskTagOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TagWhereSchemaJson = z.preprocess(jsonParser, TagWhereSchema);

export const TagProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean().or(TaskTagOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskTagOwnQuerySchema),
  })
  .partial();

export const TagProjectionSchemaJson = z.preprocess(
  jsonParser,
  TagProjectionSchema
);

export const TagIncludeSchema = z
  .object({
    tasks: z.boolean().or(TaskTagOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskTagOwnQuerySchema),
  })
  .partial();

export const TagIncludeSchemaJson = z.preprocess(jsonParser, TagIncludeSchema);

export const CategoryCreateSchema = z.object({
  parentId: z.int().optional(),
  name: z.string(),
  description: z.string().optional(),
  isDefault: z.boolean().optional(),
});

export const CategoryUpdateSchema = z.object({
  parentId: z.int().optional().optional(),
  name: z.string().optional(),
  description: z.string().optional().optional(),
  isDefault: z.boolean().optional().optional(),
});

export const CategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial();

export const CategoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  CategoryOrderBySchema
);

export const CategoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
    parent: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
    categories: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
    tasks: z
      .object({
        some: TaskCategoryOwnWhereSchema,
        every: TaskCategoryOwnWhereSchema,
        none: TaskCategoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryWhereSchema
);

export const CategoryProjectionSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    isDefault: z.boolean(),
    parent: z.boolean().or(CategoryOwnQueryOneSchema),
    categories: z.boolean().or(CategoryOwnQuerySchema),
    tasks: z.boolean().or(TaskCategoryOwnQuerySchema),
  })
  .partial();

export const CategoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  CategoryProjectionSchema
);

export const CategoryIncludeSchema = z
  .object({
    parent: z.boolean().or(CategoryOwnQueryOneSchema),
    categories: z.boolean().or(CategoryOwnQuerySchema),
    tasks: z.boolean().or(TaskCategoryOwnQuerySchema),
  })
  .partial();

export const CategoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  CategoryIncludeSchema
);

export const SprintCreateSchema = z
  .object({
    createdById: z.int(),
    projectId: z.int().optional(),
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const SprintUpdateSchema = z
  .object({
    createdById: z.int().optional(),
    projectId: z.int().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const SprintOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const SprintOrderBySchemaJson = z.preprocess(
  jsonParser,
  SprintOrderBySchema
);

export const SprintWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
    tasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const SprintWhereSchemaJson = z.preprocess(
  jsonParser,
  SprintWhereSchema
);

export const SprintProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    projectId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    tasks: z.boolean().or(TaskOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const SprintProjectionSchemaJson = z.preprocess(
  jsonParser,
  SprintProjectionSchema
);

export const SprintIncludeSchema = z
  .object({
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    tasks: z.boolean().or(TaskOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const SprintIncludeSchemaJson = z.preprocess(
  jsonParser,
  SprintIncludeSchema
);

export const PriorityCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  isDefault: z.boolean().optional(),
});

export const PriorityUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional().optional(),
  isDefault: z.boolean().optional().optional(),
});

export const PriorityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial();

export const PriorityOrderBySchemaJson = z.preprocess(
  jsonParser,
  PriorityOrderBySchema
);

export const PriorityWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
    tasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    projects: z
      .object({
        some: ProjectTaskPriorityOwnWhereSchema,
        every: ProjectTaskPriorityOwnWhereSchema,
        none: ProjectTaskPriorityOwnWhereSchema,
      })
      .partial(),
    takenPriorities: z
      .object({
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      })
      .partial(),
    givenPriorities: z
      .object({
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PriorityWhereSchemaJson = z.preprocess(
  jsonParser,
  PriorityWhereSchema
);

export const PriorityProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean().or(TaskOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskPriorityOwnQuerySchema),
    takenPriorities: z.boolean().or(PriorityHistoryOwnQuerySchema),
    givenPriorities: z.boolean().or(PriorityHistoryOwnQuerySchema),
  })
  .partial();

export const PriorityProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriorityProjectionSchema
);

export const PriorityIncludeSchema = z
  .object({
    tasks: z.boolean().or(TaskOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskPriorityOwnQuerySchema),
    takenPriorities: z.boolean().or(PriorityHistoryOwnQuerySchema),
    givenPriorities: z.boolean().or(PriorityHistoryOwnQuerySchema),
  })
  .partial();

export const PriorityIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriorityIncludeSchema
);

export const StatusCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  isDefault: z.boolean().optional(),
});

export const StatusUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional().optional(),
  isDefault: z.boolean().optional().optional(),
});

export const StatusOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial();

export const StatusOrderBySchemaJson = z.preprocess(
  jsonParser,
  StatusOrderBySchema
);

export const StatusWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    isDefault: PZ.BooleanFilterSchema,
    tasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    projects: z
      .object({
        some: ProjectTaskStatusOwnWhereSchema,
        every: ProjectTaskStatusOwnWhereSchema,
        none: ProjectTaskStatusOwnWhereSchema,
      })
      .partial(),
    takenStatuses: z
      .object({
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      })
      .partial(),
    givenStatuses: z
      .object({
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const StatusWhereSchemaJson = z.preprocess(
  jsonParser,
  StatusWhereSchema
);

export const StatusProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    description: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean().or(TaskOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskStatusOwnQuerySchema),
    takenStatuses: z.boolean().or(StatusHistoryOwnQuerySchema),
    givenStatuses: z.boolean().or(StatusHistoryOwnQuerySchema),
  })
  .partial();

export const StatusProjectionSchemaJson = z.preprocess(
  jsonParser,
  StatusProjectionSchema
);

export const StatusIncludeSchema = z
  .object({
    tasks: z.boolean().or(TaskOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskStatusOwnQuerySchema),
    takenStatuses: z.boolean().or(StatusHistoryOwnQuerySchema),
    givenStatuses: z.boolean().or(StatusHistoryOwnQuerySchema),
  })
  .partial();

export const StatusIncludeSchemaJson = z.preprocess(
  jsonParser,
  StatusIncludeSchema
);

export const PointCreateSchema = z.object({
  name: z.string(),
  point: z.int(),
  description: z.string().optional(),
});

export const PointUpdateSchema = z.object({
  name: z.string().optional(),
  point: z.int().optional(),
  description: z.string().optional().optional(),
});

export const PointOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    point: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const PointOrderBySchemaJson = z.preprocess(
  jsonParser,
  PointOrderBySchema
);

export const PointWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    point: PZ.IntegerFilterSchema,
    description: PZ.StringFilterSchema,
    tasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    takenPointes: z
      .object({
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      })
      .partial(),
    givenPointes: z
      .object({
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PointWhereSchemaJson = z.preprocess(jsonParser, PointWhereSchema);

export const PointProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    point: z.boolean(),
    description: z.boolean(),
    tasks: z.boolean().or(TaskOwnQuerySchema),
    takenPointes: z.boolean().or(PointHistoryOwnQuerySchema),
    givenPointes: z.boolean().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const PointProjectionSchemaJson = z.preprocess(
  jsonParser,
  PointProjectionSchema
);

export const PointIncludeSchema = z
  .object({
    tasks: z.boolean().or(TaskOwnQuerySchema),
    takenPointes: z.boolean().or(PointHistoryOwnQuerySchema),
    givenPointes: z.boolean().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const PointIncludeSchemaJson = z.preprocess(
  jsonParser,
  PointIncludeSchema
);

export const TaskCreateSchema = z
  .object({
    sprintId: z.int().optional(),
    createdById: z.int(),
    priorityId: z.int().optional(),
    pointId: z.int(),
    statusId: z.int().optional(),
    parentId: z.int().optional(),
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    due: z.iso.datetime().optional(),
    resolvedAt: z.iso.datetime().optional(),
  })
  .transform(slugTransformer('title'));

export const TaskUpdateSchema = z
  .object({
    sprintId: z.int().optional().optional(),
    createdById: z.int().optional(),
    priorityId: z.int().optional().optional(),
    pointId: z.int().optional(),
    statusId: z.int().optional().optional(),
    parentId: z.int().optional().optional(),
    title: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
    due: z.iso.datetime().optional().optional(),
    resolvedAt: z.iso.datetime().optional().optional(),
  })
  .transform(slugTransformer('title'));

export const TaskOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    sprintId: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    priorityId: PZ.OrderDirectionSchema,
    pointId: PZ.OrderDirectionSchema,
    statusId: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    title: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    due: PZ.OrderDirectionSchema,
    resolvedAt: PZ.OrderDirectionSchema,
  })
  .partial();

export const TaskOrderBySchemaJson = z.preprocess(
  jsonParser,
  TaskOrderBySchema
);

export const TaskWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    sprintId: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    priorityId: PZ.IntegerFilterSchema,
    pointId: PZ.IntegerFilterSchema,
    statusId: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    title: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    due: PZ.DateTimeFilterSchema,
    resolvedAt: PZ.DateTimeFilterSchema,
    comments: z
      .object({
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      })
      .partial(),
    parent: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    tasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    assignments: z
      .object({
        some: AssignmentOwnWhereSchema,
        every: AssignmentOwnWhereSchema,
        none: AssignmentOwnWhereSchema,
      })
      .partial(),
    tags: z
      .object({
        some: TaskTagOwnWhereSchema,
        every: TaskTagOwnWhereSchema,
        none: TaskTagOwnWhereSchema,
      })
      .partial(),
    categories: z
      .object({
        some: TaskCategoryOwnWhereSchema,
        every: TaskCategoryOwnWhereSchema,
        none: TaskCategoryOwnWhereSchema,
      })
      .partial(),
    point: z
      .object({
        some: PointOwnWhereSchema,
        every: PointOwnWhereSchema,
        none: PointOwnWhereSchema,
      })
      .partial(),
    priority: z
      .object({
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      })
      .partial(),
    status: z
      .object({
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      })
      .partial(),
    sprint: z
      .object({
        some: SprintOwnWhereSchema,
        every: SprintOwnWhereSchema,
        none: SprintOwnWhereSchema,
      })
      .partial(),
    assignmentHistory: z
      .object({
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      })
      .partial(),
    statusHistory: z
      .object({
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      })
      .partial(),
    priorityHistory: z
      .object({
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      })
      .partial(),
    pointHistory: z
      .object({
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TaskWhereSchemaJson = z.preprocess(jsonParser, TaskWhereSchema);

export const TaskProjectionSchema = z
  .object({
    id: z.boolean(),
    sprintId: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    createdById: z.boolean(),
    priorityId: z.boolean(),
    pointId: z.boolean(),
    statusId: z.boolean(),
    parentId: z.boolean(),
    title: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    due: z.boolean(),
    resolvedAt: z.boolean(),
    comments: z.boolean().or(CommentOwnQuerySchema),
    parent: z.boolean().or(TaskOwnQueryOneSchema),
    tasks: z.boolean().or(TaskOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    assignments: z.boolean().or(AssignmentOwnQuerySchema),
    tags: z.boolean().or(TaskTagOwnQuerySchema),
    categories: z.boolean().or(TaskCategoryOwnQuerySchema),
    point: z.boolean().or(PointOwnQueryOneSchema),
    priority: z.boolean().or(PriorityOwnQueryOneSchema),
    status: z.boolean().or(StatusOwnQueryOneSchema),
    sprint: z.boolean().or(SprintOwnQueryOneSchema),
    assignmentHistory: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    statusHistory: z.boolean().or(StatusHistoryOwnQuerySchema),
    priorityHistory: z.boolean().or(PriorityHistoryOwnQuerySchema),
    pointHistory: z.boolean().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const TaskProjectionSchemaJson = z.preprocess(
  jsonParser,
  TaskProjectionSchema
);

export const TaskIncludeSchema = z
  .object({
    comments: z.boolean().or(CommentOwnQuerySchema),
    parent: z.boolean().or(TaskOwnQueryOneSchema),
    tasks: z.boolean().or(TaskOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    assignments: z.boolean().or(AssignmentOwnQuerySchema),
    tags: z.boolean().or(TaskTagOwnQuerySchema),
    categories: z.boolean().or(TaskCategoryOwnQuerySchema),
    point: z.boolean().or(PointOwnQueryOneSchema),
    priority: z.boolean().or(PriorityOwnQueryOneSchema),
    status: z.boolean().or(StatusOwnQueryOneSchema),
    sprint: z.boolean().or(SprintOwnQueryOneSchema),
    assignmentHistory: z.boolean().or(AssignmentHistoryOwnQuerySchema),
    statusHistory: z.boolean().or(StatusHistoryOwnQuerySchema),
    priorityHistory: z.boolean().or(PriorityHistoryOwnQuerySchema),
    pointHistory: z.boolean().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const TaskIncludeSchemaJson = z.preprocess(
  jsonParser,
  TaskIncludeSchema
);

export const AssignmentHistoryCreateSchema = z.object({
  createdById: z.int(),
  projectId: z.int(),
  taskId: z.int(),
  oldUserId: z.int(),
  newUserId: z.int(),
});

export const AssignmentHistoryUpdateSchema = z.object({
  createdById: z.int().optional(),
  projectId: z.int().optional(),
  taskId: z.int().optional(),
  oldUserId: z.int().optional(),
  newUserId: z.int().optional(),
});

export const AssignmentHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
    oldUserId: PZ.OrderDirectionSchema,
    newUserId: PZ.OrderDirectionSchema,
  })
  .partial();

export const AssignmentHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryOrderBySchema
);

export const AssignmentHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    oldUserId: PZ.IntegerFilterSchema,
    newUserId: PZ.IntegerFilterSchema,
    oldUser: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    newUser: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AssignmentHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryWhereSchema
);

export const AssignmentHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    oldUserId: z.boolean(),
    newUserId: z.boolean(),
    oldUser: z.boolean().or(UserOwnQueryOneSchema),
    newUser: z.boolean().or(UserOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const AssignmentHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryProjectionSchema
);

export const AssignmentHistoryIncludeSchema = z
  .object({
    oldUser: z.boolean().or(UserOwnQueryOneSchema),
    newUser: z.boolean().or(UserOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const AssignmentHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryIncludeSchema
);

export const PriorityHistoryCreateSchema = z.object({
  createdById: z.int(),
  projectId: z.int(),
  taskId: z.int(),
  oldPriorityId: z.int().optional(),
  newPriorityId: z.int(),
});

export const PriorityHistoryUpdateSchema = z.object({
  createdById: z.int().optional(),
  projectId: z.int().optional(),
  taskId: z.int().optional(),
  oldPriorityId: z.int().optional().optional(),
  newPriorityId: z.int().optional(),
});

export const PriorityHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
    oldPriorityId: PZ.OrderDirectionSchema,
    newPriorityId: PZ.OrderDirectionSchema,
  })
  .partial();

export const PriorityHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryOrderBySchema
);

export const PriorityHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    oldPriorityId: PZ.IntegerFilterSchema,
    newPriorityId: PZ.IntegerFilterSchema,
    oldPriority: z
      .object({
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      })
      .partial(),
    newPriority: z
      .object({
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PriorityHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryWhereSchema
);

export const PriorityHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    createdById: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    oldPriorityId: z.boolean(),
    newPriorityId: z.boolean(),
    oldPriority: z.boolean().or(PriorityOwnQueryOneSchema),
    newPriority: z.boolean().or(PriorityOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PriorityHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryProjectionSchema
);

export const PriorityHistoryIncludeSchema = z
  .object({
    oldPriority: z.boolean().or(PriorityOwnQueryOneSchema),
    newPriority: z.boolean().or(PriorityOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PriorityHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryIncludeSchema
);

export const StatusHistoryCreateSchema = z.object({
  createdById: z.int(),
  oldStatusId: z.int().optional(),
  newStatusId: z.int(),
  projectId: z.int(),
  taskId: z.int(),
});

export const StatusHistoryUpdateSchema = z.object({
  createdById: z.int().optional(),
  oldStatusId: z.int().optional().optional(),
  newStatusId: z.int().optional(),
  projectId: z.int().optional(),
  taskId: z.int().optional(),
});

export const StatusHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    oldStatusId: PZ.OrderDirectionSchema,
    newStatusId: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
  })
  .partial();

export const StatusHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryOrderBySchema
);

export const StatusHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    oldStatusId: PZ.IntegerFilterSchema,
    newStatusId: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    oldStatus: z
      .object({
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      })
      .partial(),
    newStatus: z
      .object({
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const StatusHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryWhereSchema
);

export const StatusHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    createdById: z.boolean(),
    oldStatusId: z.boolean(),
    newStatusId: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    oldStatus: z.boolean().or(StatusOwnQueryOneSchema),
    newStatus: z.boolean().or(StatusOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const StatusHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryProjectionSchema
);

export const StatusHistoryIncludeSchema = z
  .object({
    task: z.boolean().or(TaskOwnQueryOneSchema),
    oldStatus: z.boolean().or(StatusOwnQueryOneSchema),
    newStatus: z.boolean().or(StatusOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const StatusHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryIncludeSchema
);

export const PointHistoryCreateSchema = z.object({
  createdById: z.int(),
  oldPointId: z.int().optional(),
  newPointId: z.int(),
  projectId: z.int(),
  taskId: z.int(),
});

export const PointHistoryUpdateSchema = z.object({
  createdById: z.int().optional(),
  oldPointId: z.int().optional().optional(),
  newPointId: z.int().optional(),
  projectId: z.int().optional(),
  taskId: z.int().optional(),
});

export const PointHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    oldPointId: PZ.OrderDirectionSchema,
    newPointId: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
  })
  .partial();

export const PointHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  PointHistoryOrderBySchema
);

export const PointHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    oldPointId: PZ.IntegerFilterSchema,
    newPointId: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    oldPoint: z
      .object({
        some: PointOwnWhereSchema,
        every: PointOwnWhereSchema,
        none: PointOwnWhereSchema,
      })
      .partial(),
    newPoint: z
      .object({
        some: PointOwnWhereSchema,
        every: PointOwnWhereSchema,
        none: PointOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PointHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryWhereSchema
);

export const PointHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    createdById: z.boolean(),
    oldPointId: z.boolean(),
    newPointId: z.boolean(),
    projectId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    oldPoint: z.boolean().or(PointOwnQueryOneSchema),
    newPoint: z.boolean().or(PointOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PointHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryProjectionSchema
);

export const PointHistoryIncludeSchema = z
  .object({
    task: z.boolean().or(TaskOwnQueryOneSchema),
    oldPoint: z.boolean().or(PointOwnQueryOneSchema),
    newPoint: z.boolean().or(PointOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PointHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryIncludeSchema
);

export const TeamHistoryCreateSchema = z.object({
  createdById: z.int(),
  oldTeamId: z.int().optional(),
  newTeamId: z.int(),
});

export const TeamHistoryUpdateSchema = z.object({
  createdById: z.int().optional(),
  oldTeamId: z.int().optional().optional(),
  newTeamId: z.int().optional(),
});

export const TeamHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    oldTeamId: PZ.OrderDirectionSchema,
    newTeamId: PZ.OrderDirectionSchema,
  })
  .partial();

export const TeamHistoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryOrderBySchema
);

export const TeamHistoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    oldTeamId: PZ.IntegerFilterSchema,
    newTeamId: PZ.IntegerFilterSchema,
    oldTeam: z
      .object({
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      })
      .partial(),
    newTeam: z
      .object({
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TeamHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryWhereSchema
);

export const TeamHistoryProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    createdById: z.boolean(),
    oldTeamId: z.boolean(),
    newTeamId: z.boolean(),
    oldTeam: z.boolean().or(TeamOwnQueryOneSchema),
    newTeam: z.boolean().or(TeamOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const TeamHistoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryProjectionSchema
);

export const TeamHistoryIncludeSchema = z
  .object({
    oldTeam: z.boolean().or(TeamOwnQueryOneSchema),
    newTeam: z.boolean().or(TeamOwnQueryOneSchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const TeamHistoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryIncludeSchema
);

export const TaskTagCreateSchema = z.object({
  taskId: z.int(),
  tagId: z.int(),
});

export const TaskTagUpdateSchema = z.object({
  taskId: z.int().optional(),
  tagId: z.int().optional(),
});

export const TaskTagOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
    tagId: PZ.OrderDirectionSchema,
  })
  .partial();

export const TaskTagOrderBySchemaJson = z.preprocess(
  jsonParser,
  TaskTagOrderBySchema
);

export const TaskTagWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    tagId: PZ.IntegerFilterSchema,
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    tag: z
      .object({
        some: TagOwnWhereSchema,
        every: TagOwnWhereSchema,
        none: TagOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TaskTagWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskTagWhereSchema
);

export const TaskTagProjectionSchema = z
  .object({
    id: z.boolean(),
    taskId: z.boolean(),
    tagId: z.boolean(),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    tag: z.boolean().or(TagOwnQueryOneSchema),
  })
  .partial();

export const TaskTagProjectionSchemaJson = z.preprocess(
  jsonParser,
  TaskTagProjectionSchema
);

export const TaskTagIncludeSchema = z
  .object({
    task: z.boolean().or(TaskOwnQueryOneSchema),
    tag: z.boolean().or(TagOwnQueryOneSchema),
  })
  .partial();

export const TaskTagIncludeSchemaJson = z.preprocess(
  jsonParser,
  TaskTagIncludeSchema
);

export const TaskCategoryCreateSchema = z.object({
  categoryId: z.int(),
  taskId: z.int(),
});

export const TaskCategoryUpdateSchema = z.object({
  categoryId: z.int().optional(),
  taskId: z.int().optional(),
});

export const TaskCategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
  })
  .partial();

export const TaskCategoryOrderBySchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryOrderBySchema
);

export const TaskCategoryWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    categoryId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    category: z
      .object({
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TaskCategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryWhereSchema
);

export const TaskCategoryProjectionSchema = z
  .object({
    id: z.boolean(),
    categoryId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const TaskCategoryProjectionSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryProjectionSchema
);

export const TaskCategoryIncludeSchema = z
  .object({
    task: z.boolean().or(TaskOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const TaskCategoryIncludeSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryIncludeSchema
);

export const AssignmentCreateSchema = z.object({
  assigneeId: z.int(),
  taskId: z.int(),
});

export const AssignmentUpdateSchema = z.object({
  assigneeId: z.int().optional(),
  taskId: z.int().optional(),
});

export const AssignmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    assigneeId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
  })
  .partial();

export const AssignmentOrderBySchemaJson = z.preprocess(
  jsonParser,
  AssignmentOrderBySchema
);

export const AssignmentWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    assigneeId: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    assignee: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AssignmentWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentWhereSchema
);

export const AssignmentProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    assigneeId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    assignee: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const AssignmentProjectionSchemaJson = z.preprocess(
  jsonParser,
  AssignmentProjectionSchema
);

export const AssignmentIncludeSchema = z
  .object({
    task: z.boolean().or(TaskOwnQueryOneSchema),
    assignee: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const AssignmentIncludeSchemaJson = z.preprocess(
  jsonParser,
  AssignmentIncludeSchema
);

export const CommentCreateSchema = z.object({
  parentId: z.int().optional(),
  createdById: z.int(),
  taskId: z.int(),
  comment: z.string(),
});

export const CommentUpdateSchema = z.object({
  parentId: z.int().optional().optional(),
  createdById: z.int().optional(),
  taskId: z.int().optional(),
  comment: z.string().optional(),
});

export const CommentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
    comment: PZ.OrderDirectionSchema,
  })
  .partial();

export const CommentOrderBySchemaJson = z.preprocess(
  jsonParser,
  CommentOrderBySchema
);

export const CommentWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    createdAt: PZ.DateTimeFilterSchema,
    updatedAt: PZ.DateTimeFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    createdById: PZ.IntegerFilterSchema,
    taskId: PZ.IntegerFilterSchema,
    comment: PZ.StringFilterSchema,
    parent: z
      .object({
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      })
      .partial(),
    comments: z
      .object({
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      })
      .partial(),
    createdBy: z
      .object({
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      })
      .partial(),
    task: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CommentWhereSchemaJson = z.preprocess(
  jsonParser,
  CommentWhereSchema
);

export const CommentProjectionSchema = z
  .object({
    id: z.boolean(),
    createdAt: z.boolean(),
    updatedAt: z.boolean(),
    parentId: z.boolean(),
    createdById: z.boolean(),
    taskId: z.boolean(),
    comment: z.boolean(),
    parent: z.boolean().or(CommentOwnQueryOneSchema),
    comments: z.boolean().or(CommentOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    task: z.boolean().or(TaskOwnQueryOneSchema),
  })
  .partial();

export const CommentProjectionSchemaJson = z.preprocess(
  jsonParser,
  CommentProjectionSchema
);

export const CommentIncludeSchema = z
  .object({
    parent: z.boolean().or(CommentOwnQueryOneSchema),
    comments: z.boolean().or(CommentOwnQuerySchema),
    createdBy: z.boolean().or(UserOwnQueryOneSchema),
    task: z.boolean().or(TaskOwnQueryOneSchema),
  })
  .partial();

export const CommentIncludeSchemaJson = z.preprocess(
  jsonParser,
  CommentIncludeSchema
);

export const ProjectTaskTagCreateSchema = z.object({
  projectId: z.int(),
  tagId: z.int(),
});

export const ProjectTaskTagUpdateSchema = z.object({
  projectId: z.int().optional(),
  tagId: z.int().optional(),
});

export const ProjectTaskTagOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    tagId: PZ.OrderDirectionSchema,
  })
  .partial();

export const ProjectTaskTagOrderBySchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagOrderBySchema
);

export const ProjectTaskTagWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    tagId: PZ.IntegerFilterSchema,
    tag: z
      .object({
        some: TagOwnWhereSchema,
        every: TagOwnWhereSchema,
        none: TagOwnWhereSchema,
      })
      .partial(),
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ProjectTaskTagWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagWhereSchema
);

export const ProjectTaskTagProjectionSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    tagId: z.boolean(),
    tag: z.boolean().or(TagOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskTagProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagProjectionSchema
);

export const ProjectTaskTagIncludeSchema = z
  .object({
    tag: z.boolean().or(TagOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskTagIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagIncludeSchema
);

export const ProjectTaskStatusCreateSchema = z.object({
  projectId: z.int(),
  statusId: z.int(),
});

export const ProjectTaskStatusUpdateSchema = z.object({
  projectId: z.int().optional(),
  statusId: z.int().optional(),
});

export const ProjectTaskStatusOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    statusId: PZ.OrderDirectionSchema,
  })
  .partial();

export const ProjectTaskStatusOrderBySchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusOrderBySchema
);

export const ProjectTaskStatusWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    statusId: PZ.IntegerFilterSchema,
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
    status: z
      .object({
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ProjectTaskStatusWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusWhereSchema
);

export const ProjectTaskStatusProjectionSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    statusId: z.boolean(),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    status: z.boolean().or(StatusOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskStatusProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusProjectionSchema
);

export const ProjectTaskStatusIncludeSchema = z
  .object({
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    status: z.boolean().or(StatusOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskStatusIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusIncludeSchema
);

export const ProjectTaskPriorityCreateSchema = z.object({
  projectId: z.int(),
  priorityId: z.int(),
});

export const ProjectTaskPriorityUpdateSchema = z.object({
  projectId: z.int().optional(),
  priorityId: z.int().optional(),
});

export const ProjectTaskPriorityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    priorityId: PZ.OrderDirectionSchema,
  })
  .partial();

export const ProjectTaskPriorityOrderBySchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityOrderBySchema
);

export const ProjectTaskPriorityWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    projectId: PZ.IntegerFilterSchema,
    priorityId: PZ.IntegerFilterSchema,
    project: z
      .object({
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      })
      .partial(),
    priority: z
      .object({
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ProjectTaskPriorityWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityWhereSchema
);

export const ProjectTaskPriorityProjectionSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    priorityId: z.boolean(),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    priority: z.boolean().or(PriorityOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskPriorityProjectionSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityProjectionSchema
);

export const ProjectTaskPriorityIncludeSchema = z
  .object({
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    priority: z.boolean().or(PriorityOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskPriorityIncludeSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityIncludeSchema
);

export const UserQueryOneSchema = z
  .object({
    where: UserWhereSchemaJson,
    select: UserProjectionSchemaJson,
    omit: UserProjectionSchemaJson,
    include: UserIncludeSchemaJson,
  })
  .partial();

export const UserQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: UserWhereSchemaJson,
    select: UserProjectionSchemaJson,
    omit: UserProjectionSchemaJson,
    include: UserIncludeSchemaJson,
  })
  .partial();

export type UserCreate = z.infer<typeof UserCreateSchema>;

export type UserUpdate = z.infer<typeof UserUpdateSchema>;

export type UserOrderBy = z.infer<typeof UserOrderBySchema>;

export type UserOwnProjection = z.infer<typeof UserOwnProjectionSchema>;

export type UserOwnWhere = z.infer<typeof UserOwnWhereSchema>;

export type UserOwnQuery = z.infer<typeof UserOwnQuerySchema>;

export type UserOwnQueryOne = z.infer<typeof UserOwnQueryOneSchema>;

export type UserWhere = z.infer<typeof UserWhereSchema>;

export type UserInclude = z.infer<typeof UserIncludeSchema>;

export type UserQueryOne = z.infer<typeof UserQueryOneSchema>;

export type UserQuery = z.infer<typeof UserQuerySchema>;

export type UserProjection = z.infer<typeof UserProjectionSchema>;

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

export const ProjectQueryOneSchema = z
  .object({
    where: ProjectWhereSchemaJson,
    select: ProjectProjectionSchemaJson,
    omit: ProjectProjectionSchemaJson,
    include: ProjectIncludeSchemaJson,
  })
  .partial();

export const ProjectQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectWhereSchemaJson,
    select: ProjectProjectionSchemaJson,
    omit: ProjectProjectionSchemaJson,
    include: ProjectIncludeSchemaJson,
  })
  .partial();

export type ProjectCreate = z.infer<typeof ProjectCreateSchema>;

export type ProjectUpdate = z.infer<typeof ProjectUpdateSchema>;

export type ProjectOrderBy = z.infer<typeof ProjectOrderBySchema>;

export type ProjectOwnProjection = z.infer<typeof ProjectOwnProjectionSchema>;

export type ProjectOwnWhere = z.infer<typeof ProjectOwnWhereSchema>;

export type ProjectOwnQuery = z.infer<typeof ProjectOwnQuerySchema>;

export type ProjectOwnQueryOne = z.infer<typeof ProjectOwnQueryOneSchema>;

export type ProjectWhere = z.infer<typeof ProjectWhereSchema>;

export type ProjectInclude = z.infer<typeof ProjectIncludeSchema>;

export type ProjectQueryOne = z.infer<typeof ProjectQueryOneSchema>;

export type ProjectQuery = z.infer<typeof ProjectQuerySchema>;

export type ProjectProjection = z.infer<typeof ProjectProjectionSchema>;

export const TagQueryOneSchema = z
  .object({
    where: TagWhereSchemaJson,
    select: TagProjectionSchemaJson,
    omit: TagProjectionSchemaJson,
    include: TagIncludeSchemaJson,
  })
  .partial();

export const TagQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TagWhereSchemaJson,
    select: TagProjectionSchemaJson,
    omit: TagProjectionSchemaJson,
    include: TagIncludeSchemaJson,
  })
  .partial();

export type TagCreate = z.infer<typeof TagCreateSchema>;

export type TagUpdate = z.infer<typeof TagUpdateSchema>;

export type TagOrderBy = z.infer<typeof TagOrderBySchema>;

export type TagOwnProjection = z.infer<typeof TagOwnProjectionSchema>;

export type TagOwnWhere = z.infer<typeof TagOwnWhereSchema>;

export type TagOwnQuery = z.infer<typeof TagOwnQuerySchema>;

export type TagOwnQueryOne = z.infer<typeof TagOwnQueryOneSchema>;

export type TagWhere = z.infer<typeof TagWhereSchema>;

export type TagInclude = z.infer<typeof TagIncludeSchema>;

export type TagQueryOne = z.infer<typeof TagQueryOneSchema>;

export type TagQuery = z.infer<typeof TagQuerySchema>;

export type TagProjection = z.infer<typeof TagProjectionSchema>;

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchemaJson,
    select: CategoryProjectionSchemaJson,
    omit: CategoryProjectionSchemaJson,
    include: CategoryIncludeSchemaJson,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CategoryWhereSchemaJson,
    select: CategoryProjectionSchemaJson,
    omit: CategoryProjectionSchemaJson,
    include: CategoryIncludeSchemaJson,
  })
  .partial();

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type CategoryOwnProjection = z.infer<typeof CategoryOwnProjectionSchema>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export const SprintQueryOneSchema = z
  .object({
    where: SprintWhereSchemaJson,
    select: SprintProjectionSchemaJson,
    omit: SprintProjectionSchemaJson,
    include: SprintIncludeSchemaJson,
  })
  .partial();

export const SprintQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: SprintWhereSchemaJson,
    select: SprintProjectionSchemaJson,
    omit: SprintProjectionSchemaJson,
    include: SprintIncludeSchemaJson,
  })
  .partial();

export type SprintCreate = z.infer<typeof SprintCreateSchema>;

export type SprintUpdate = z.infer<typeof SprintUpdateSchema>;

export type SprintOrderBy = z.infer<typeof SprintOrderBySchema>;

export type SprintOwnProjection = z.infer<typeof SprintOwnProjectionSchema>;

export type SprintOwnWhere = z.infer<typeof SprintOwnWhereSchema>;

export type SprintOwnQuery = z.infer<typeof SprintOwnQuerySchema>;

export type SprintOwnQueryOne = z.infer<typeof SprintOwnQueryOneSchema>;

export type SprintWhere = z.infer<typeof SprintWhereSchema>;

export type SprintInclude = z.infer<typeof SprintIncludeSchema>;

export type SprintQueryOne = z.infer<typeof SprintQueryOneSchema>;

export type SprintQuery = z.infer<typeof SprintQuerySchema>;

export type SprintProjection = z.infer<typeof SprintProjectionSchema>;

export const PriorityQueryOneSchema = z
  .object({
    where: PriorityWhereSchemaJson,
    select: PriorityProjectionSchemaJson,
    omit: PriorityProjectionSchemaJson,
    include: PriorityIncludeSchemaJson,
  })
  .partial();

export const PriorityQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriorityWhereSchemaJson,
    select: PriorityProjectionSchemaJson,
    omit: PriorityProjectionSchemaJson,
    include: PriorityIncludeSchemaJson,
  })
  .partial();

export type PriorityCreate = z.infer<typeof PriorityCreateSchema>;

export type PriorityUpdate = z.infer<typeof PriorityUpdateSchema>;

export type PriorityOrderBy = z.infer<typeof PriorityOrderBySchema>;

export type PriorityOwnProjection = z.infer<typeof PriorityOwnProjectionSchema>;

export type PriorityOwnWhere = z.infer<typeof PriorityOwnWhereSchema>;

export type PriorityOwnQuery = z.infer<typeof PriorityOwnQuerySchema>;

export type PriorityOwnQueryOne = z.infer<typeof PriorityOwnQueryOneSchema>;

export type PriorityWhere = z.infer<typeof PriorityWhereSchema>;

export type PriorityInclude = z.infer<typeof PriorityIncludeSchema>;

export type PriorityQueryOne = z.infer<typeof PriorityQueryOneSchema>;

export type PriorityQuery = z.infer<typeof PriorityQuerySchema>;

export type PriorityProjection = z.infer<typeof PriorityProjectionSchema>;

export const StatusQueryOneSchema = z
  .object({
    where: StatusWhereSchemaJson,
    select: StatusProjectionSchemaJson,
    omit: StatusProjectionSchemaJson,
    include: StatusIncludeSchemaJson,
  })
  .partial();

export const StatusQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StatusWhereSchemaJson,
    select: StatusProjectionSchemaJson,
    omit: StatusProjectionSchemaJson,
    include: StatusIncludeSchemaJson,
  })
  .partial();

export type StatusCreate = z.infer<typeof StatusCreateSchema>;

export type StatusUpdate = z.infer<typeof StatusUpdateSchema>;

export type StatusOrderBy = z.infer<typeof StatusOrderBySchema>;

export type StatusOwnProjection = z.infer<typeof StatusOwnProjectionSchema>;

export type StatusOwnWhere = z.infer<typeof StatusOwnWhereSchema>;

export type StatusOwnQuery = z.infer<typeof StatusOwnQuerySchema>;

export type StatusOwnQueryOne = z.infer<typeof StatusOwnQueryOneSchema>;

export type StatusWhere = z.infer<typeof StatusWhereSchema>;

export type StatusInclude = z.infer<typeof StatusIncludeSchema>;

export type StatusQueryOne = z.infer<typeof StatusQueryOneSchema>;

export type StatusQuery = z.infer<typeof StatusQuerySchema>;

export type StatusProjection = z.infer<typeof StatusProjectionSchema>;

export const PointQueryOneSchema = z
  .object({
    where: PointWhereSchemaJson,
    select: PointProjectionSchemaJson,
    omit: PointProjectionSchemaJson,
    include: PointIncludeSchemaJson,
  })
  .partial();

export const PointQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PointWhereSchemaJson,
    select: PointProjectionSchemaJson,
    omit: PointProjectionSchemaJson,
    include: PointIncludeSchemaJson,
  })
  .partial();

export type PointCreate = z.infer<typeof PointCreateSchema>;

export type PointUpdate = z.infer<typeof PointUpdateSchema>;

export type PointOrderBy = z.infer<typeof PointOrderBySchema>;

export type PointOwnProjection = z.infer<typeof PointOwnProjectionSchema>;

export type PointOwnWhere = z.infer<typeof PointOwnWhereSchema>;

export type PointOwnQuery = z.infer<typeof PointOwnQuerySchema>;

export type PointOwnQueryOne = z.infer<typeof PointOwnQueryOneSchema>;

export type PointWhere = z.infer<typeof PointWhereSchema>;

export type PointInclude = z.infer<typeof PointIncludeSchema>;

export type PointQueryOne = z.infer<typeof PointQueryOneSchema>;

export type PointQuery = z.infer<typeof PointQuerySchema>;

export type PointProjection = z.infer<typeof PointProjectionSchema>;

export const TaskQueryOneSchema = z
  .object({
    where: TaskWhereSchemaJson,
    select: TaskProjectionSchemaJson,
    omit: TaskProjectionSchemaJson,
    include: TaskIncludeSchemaJson,
  })
  .partial();

export const TaskQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TaskWhereSchemaJson,
    select: TaskProjectionSchemaJson,
    omit: TaskProjectionSchemaJson,
    include: TaskIncludeSchemaJson,
  })
  .partial();

export type TaskCreate = z.infer<typeof TaskCreateSchema>;

export type TaskUpdate = z.infer<typeof TaskUpdateSchema>;

export type TaskOrderBy = z.infer<typeof TaskOrderBySchema>;

export type TaskOwnProjection = z.infer<typeof TaskOwnProjectionSchema>;

export type TaskOwnWhere = z.infer<typeof TaskOwnWhereSchema>;

export type TaskOwnQuery = z.infer<typeof TaskOwnQuerySchema>;

export type TaskOwnQueryOne = z.infer<typeof TaskOwnQueryOneSchema>;

export type TaskWhere = z.infer<typeof TaskWhereSchema>;

export type TaskInclude = z.infer<typeof TaskIncludeSchema>;

export type TaskQueryOne = z.infer<typeof TaskQueryOneSchema>;

export type TaskQuery = z.infer<typeof TaskQuerySchema>;

export type TaskProjection = z.infer<typeof TaskProjectionSchema>;

export const AssignmentHistoryQueryOneSchema = z
  .object({
    where: AssignmentHistoryWhereSchemaJson,
    select: AssignmentHistoryProjectionSchemaJson,
    omit: AssignmentHistoryProjectionSchemaJson,
    include: AssignmentHistoryIncludeSchemaJson,
  })
  .partial();

export const AssignmentHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AssignmentHistoryWhereSchemaJson,
    select: AssignmentHistoryProjectionSchemaJson,
    omit: AssignmentHistoryProjectionSchemaJson,
    include: AssignmentHistoryIncludeSchemaJson,
  })
  .partial();

export type AssignmentHistoryCreate = z.infer<
  typeof AssignmentHistoryCreateSchema
>;

export type AssignmentHistoryUpdate = z.infer<
  typeof AssignmentHistoryUpdateSchema
>;

export type AssignmentHistoryOrderBy = z.infer<
  typeof AssignmentHistoryOrderBySchema
>;

export type AssignmentHistoryOwnProjection = z.infer<
  typeof AssignmentHistoryOwnProjectionSchema
>;

export type AssignmentHistoryOwnWhere = z.infer<
  typeof AssignmentHistoryOwnWhereSchema
>;

export type AssignmentHistoryOwnQuery = z.infer<
  typeof AssignmentHistoryOwnQuerySchema
>;

export type AssignmentHistoryOwnQueryOne = z.infer<
  typeof AssignmentHistoryOwnQueryOneSchema
>;

export type AssignmentHistoryWhere = z.infer<
  typeof AssignmentHistoryWhereSchema
>;

export type AssignmentHistoryInclude = z.infer<
  typeof AssignmentHistoryIncludeSchema
>;

export type AssignmentHistoryQueryOne = z.infer<
  typeof AssignmentHistoryQueryOneSchema
>;

export type AssignmentHistoryQuery = z.infer<
  typeof AssignmentHistoryQuerySchema
>;

export type AssignmentHistoryProjection = z.infer<
  typeof AssignmentHistoryProjectionSchema
>;

export const PriorityHistoryQueryOneSchema = z
  .object({
    where: PriorityHistoryWhereSchemaJson,
    select: PriorityHistoryProjectionSchemaJson,
    omit: PriorityHistoryProjectionSchemaJson,
    include: PriorityHistoryIncludeSchemaJson,
  })
  .partial();

export const PriorityHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PriorityHistoryWhereSchemaJson,
    select: PriorityHistoryProjectionSchemaJson,
    omit: PriorityHistoryProjectionSchemaJson,
    include: PriorityHistoryIncludeSchemaJson,
  })
  .partial();

export type PriorityHistoryCreate = z.infer<typeof PriorityHistoryCreateSchema>;

export type PriorityHistoryUpdate = z.infer<typeof PriorityHistoryUpdateSchema>;

export type PriorityHistoryOrderBy = z.infer<
  typeof PriorityHistoryOrderBySchema
>;

export type PriorityHistoryOwnProjection = z.infer<
  typeof PriorityHistoryOwnProjectionSchema
>;

export type PriorityHistoryOwnWhere = z.infer<
  typeof PriorityHistoryOwnWhereSchema
>;

export type PriorityHistoryOwnQuery = z.infer<
  typeof PriorityHistoryOwnQuerySchema
>;

export type PriorityHistoryOwnQueryOne = z.infer<
  typeof PriorityHistoryOwnQueryOneSchema
>;

export type PriorityHistoryWhere = z.infer<typeof PriorityHistoryWhereSchema>;

export type PriorityHistoryInclude = z.infer<
  typeof PriorityHistoryIncludeSchema
>;

export type PriorityHistoryQueryOne = z.infer<
  typeof PriorityHistoryQueryOneSchema
>;

export type PriorityHistoryQuery = z.infer<typeof PriorityHistoryQuerySchema>;

export type PriorityHistoryProjection = z.infer<
  typeof PriorityHistoryProjectionSchema
>;

export const StatusHistoryQueryOneSchema = z
  .object({
    where: StatusHistoryWhereSchemaJson,
    select: StatusHistoryProjectionSchemaJson,
    omit: StatusHistoryProjectionSchemaJson,
    include: StatusHistoryIncludeSchemaJson,
  })
  .partial();

export const StatusHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StatusHistoryWhereSchemaJson,
    select: StatusHistoryProjectionSchemaJson,
    omit: StatusHistoryProjectionSchemaJson,
    include: StatusHistoryIncludeSchemaJson,
  })
  .partial();

export type StatusHistoryCreate = z.infer<typeof StatusHistoryCreateSchema>;

export type StatusHistoryUpdate = z.infer<typeof StatusHistoryUpdateSchema>;

export type StatusHistoryOrderBy = z.infer<typeof StatusHistoryOrderBySchema>;

export type StatusHistoryOwnProjection = z.infer<
  typeof StatusHistoryOwnProjectionSchema
>;

export type StatusHistoryOwnWhere = z.infer<typeof StatusHistoryOwnWhereSchema>;

export type StatusHistoryOwnQuery = z.infer<typeof StatusHistoryOwnQuerySchema>;

export type StatusHistoryOwnQueryOne = z.infer<
  typeof StatusHistoryOwnQueryOneSchema
>;

export type StatusHistoryWhere = z.infer<typeof StatusHistoryWhereSchema>;

export type StatusHistoryInclude = z.infer<typeof StatusHistoryIncludeSchema>;

export type StatusHistoryQueryOne = z.infer<typeof StatusHistoryQueryOneSchema>;

export type StatusHistoryQuery = z.infer<typeof StatusHistoryQuerySchema>;

export type StatusHistoryProjection = z.infer<
  typeof StatusHistoryProjectionSchema
>;

export const PointHistoryQueryOneSchema = z
  .object({
    where: PointHistoryWhereSchemaJson,
    select: PointHistoryProjectionSchemaJson,
    omit: PointHistoryProjectionSchemaJson,
    include: PointHistoryIncludeSchemaJson,
  })
  .partial();

export const PointHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PointHistoryWhereSchemaJson,
    select: PointHistoryProjectionSchemaJson,
    omit: PointHistoryProjectionSchemaJson,
    include: PointHistoryIncludeSchemaJson,
  })
  .partial();

export type PointHistoryCreate = z.infer<typeof PointHistoryCreateSchema>;

export type PointHistoryUpdate = z.infer<typeof PointHistoryUpdateSchema>;

export type PointHistoryOrderBy = z.infer<typeof PointHistoryOrderBySchema>;

export type PointHistoryOwnProjection = z.infer<
  typeof PointHistoryOwnProjectionSchema
>;

export type PointHistoryOwnWhere = z.infer<typeof PointHistoryOwnWhereSchema>;

export type PointHistoryOwnQuery = z.infer<typeof PointHistoryOwnQuerySchema>;

export type PointHistoryOwnQueryOne = z.infer<
  typeof PointHistoryOwnQueryOneSchema
>;

export type PointHistoryWhere = z.infer<typeof PointHistoryWhereSchema>;

export type PointHistoryInclude = z.infer<typeof PointHistoryIncludeSchema>;

export type PointHistoryQueryOne = z.infer<typeof PointHistoryQueryOneSchema>;

export type PointHistoryQuery = z.infer<typeof PointHistoryQuerySchema>;

export type PointHistoryProjection = z.infer<
  typeof PointHistoryProjectionSchema
>;

export const TeamHistoryQueryOneSchema = z
  .object({
    where: TeamHistoryWhereSchemaJson,
    select: TeamHistoryProjectionSchemaJson,
    omit: TeamHistoryProjectionSchemaJson,
    include: TeamHistoryIncludeSchemaJson,
  })
  .partial();

export const TeamHistoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TeamHistoryWhereSchemaJson,
    select: TeamHistoryProjectionSchemaJson,
    omit: TeamHistoryProjectionSchemaJson,
    include: TeamHistoryIncludeSchemaJson,
  })
  .partial();

export type TeamHistoryCreate = z.infer<typeof TeamHistoryCreateSchema>;

export type TeamHistoryUpdate = z.infer<typeof TeamHistoryUpdateSchema>;

export type TeamHistoryOrderBy = z.infer<typeof TeamHistoryOrderBySchema>;

export type TeamHistoryOwnProjection = z.infer<
  typeof TeamHistoryOwnProjectionSchema
>;

export type TeamHistoryOwnWhere = z.infer<typeof TeamHistoryOwnWhereSchema>;

export type TeamHistoryOwnQuery = z.infer<typeof TeamHistoryOwnQuerySchema>;

export type TeamHistoryOwnQueryOne = z.infer<
  typeof TeamHistoryOwnQueryOneSchema
>;

export type TeamHistoryWhere = z.infer<typeof TeamHistoryWhereSchema>;

export type TeamHistoryInclude = z.infer<typeof TeamHistoryIncludeSchema>;

export type TeamHistoryQueryOne = z.infer<typeof TeamHistoryQueryOneSchema>;

export type TeamHistoryQuery = z.infer<typeof TeamHistoryQuerySchema>;

export type TeamHistoryProjection = z.infer<typeof TeamHistoryProjectionSchema>;

export const TaskTagQueryOneSchema = z
  .object({
    where: TaskTagWhereSchemaJson,
    select: TaskTagProjectionSchemaJson,
    omit: TaskTagProjectionSchemaJson,
    include: TaskTagIncludeSchemaJson,
  })
  .partial();

export const TaskTagQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TaskTagWhereSchemaJson,
    select: TaskTagProjectionSchemaJson,
    omit: TaskTagProjectionSchemaJson,
    include: TaskTagIncludeSchemaJson,
  })
  .partial();

export type TaskTagCreate = z.infer<typeof TaskTagCreateSchema>;

export type TaskTagUpdate = z.infer<typeof TaskTagUpdateSchema>;

export type TaskTagOrderBy = z.infer<typeof TaskTagOrderBySchema>;

export type TaskTagOwnProjection = z.infer<typeof TaskTagOwnProjectionSchema>;

export type TaskTagOwnWhere = z.infer<typeof TaskTagOwnWhereSchema>;

export type TaskTagOwnQuery = z.infer<typeof TaskTagOwnQuerySchema>;

export type TaskTagOwnQueryOne = z.infer<typeof TaskTagOwnQueryOneSchema>;

export type TaskTagWhere = z.infer<typeof TaskTagWhereSchema>;

export type TaskTagInclude = z.infer<typeof TaskTagIncludeSchema>;

export type TaskTagQueryOne = z.infer<typeof TaskTagQueryOneSchema>;

export type TaskTagQuery = z.infer<typeof TaskTagQuerySchema>;

export type TaskTagProjection = z.infer<typeof TaskTagProjectionSchema>;

export const TaskCategoryQueryOneSchema = z
  .object({
    where: TaskCategoryWhereSchemaJson,
    select: TaskCategoryProjectionSchemaJson,
    omit: TaskCategoryProjectionSchemaJson,
    include: TaskCategoryIncludeSchemaJson,
  })
  .partial();

export const TaskCategoryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TaskCategoryWhereSchemaJson,
    select: TaskCategoryProjectionSchemaJson,
    omit: TaskCategoryProjectionSchemaJson,
    include: TaskCategoryIncludeSchemaJson,
  })
  .partial();

export type TaskCategoryCreate = z.infer<typeof TaskCategoryCreateSchema>;

export type TaskCategoryUpdate = z.infer<typeof TaskCategoryUpdateSchema>;

export type TaskCategoryOrderBy = z.infer<typeof TaskCategoryOrderBySchema>;

export type TaskCategoryOwnProjection = z.infer<
  typeof TaskCategoryOwnProjectionSchema
>;

export type TaskCategoryOwnWhere = z.infer<typeof TaskCategoryOwnWhereSchema>;

export type TaskCategoryOwnQuery = z.infer<typeof TaskCategoryOwnQuerySchema>;

export type TaskCategoryOwnQueryOne = z.infer<
  typeof TaskCategoryOwnQueryOneSchema
>;

export type TaskCategoryWhere = z.infer<typeof TaskCategoryWhereSchema>;

export type TaskCategoryInclude = z.infer<typeof TaskCategoryIncludeSchema>;

export type TaskCategoryQueryOne = z.infer<typeof TaskCategoryQueryOneSchema>;

export type TaskCategoryQuery = z.infer<typeof TaskCategoryQuerySchema>;

export type TaskCategoryProjection = z.infer<
  typeof TaskCategoryProjectionSchema
>;

export const AssignmentQueryOneSchema = z
  .object({
    where: AssignmentWhereSchemaJson,
    select: AssignmentProjectionSchemaJson,
    omit: AssignmentProjectionSchemaJson,
    include: AssignmentIncludeSchemaJson,
  })
  .partial();

export const AssignmentQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AssignmentWhereSchemaJson,
    select: AssignmentProjectionSchemaJson,
    omit: AssignmentProjectionSchemaJson,
    include: AssignmentIncludeSchemaJson,
  })
  .partial();

export type AssignmentCreate = z.infer<typeof AssignmentCreateSchema>;

export type AssignmentUpdate = z.infer<typeof AssignmentUpdateSchema>;

export type AssignmentOrderBy = z.infer<typeof AssignmentOrderBySchema>;

export type AssignmentOwnProjection = z.infer<
  typeof AssignmentOwnProjectionSchema
>;

export type AssignmentOwnWhere = z.infer<typeof AssignmentOwnWhereSchema>;

export type AssignmentOwnQuery = z.infer<typeof AssignmentOwnQuerySchema>;

export type AssignmentOwnQueryOne = z.infer<typeof AssignmentOwnQueryOneSchema>;

export type AssignmentWhere = z.infer<typeof AssignmentWhereSchema>;

export type AssignmentInclude = z.infer<typeof AssignmentIncludeSchema>;

export type AssignmentQueryOne = z.infer<typeof AssignmentQueryOneSchema>;

export type AssignmentQuery = z.infer<typeof AssignmentQuerySchema>;

export type AssignmentProjection = z.infer<typeof AssignmentProjectionSchema>;

export const CommentQueryOneSchema = z
  .object({
    where: CommentWhereSchemaJson,
    select: CommentProjectionSchemaJson,
    omit: CommentProjectionSchemaJson,
    include: CommentIncludeSchemaJson,
  })
  .partial();

export const CommentQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CommentWhereSchemaJson,
    select: CommentProjectionSchemaJson,
    omit: CommentProjectionSchemaJson,
    include: CommentIncludeSchemaJson,
  })
  .partial();

export type CommentCreate = z.infer<typeof CommentCreateSchema>;

export type CommentUpdate = z.infer<typeof CommentUpdateSchema>;

export type CommentOrderBy = z.infer<typeof CommentOrderBySchema>;

export type CommentOwnProjection = z.infer<typeof CommentOwnProjectionSchema>;

export type CommentOwnWhere = z.infer<typeof CommentOwnWhereSchema>;

export type CommentOwnQuery = z.infer<typeof CommentOwnQuerySchema>;

export type CommentOwnQueryOne = z.infer<typeof CommentOwnQueryOneSchema>;

export type CommentWhere = z.infer<typeof CommentWhereSchema>;

export type CommentInclude = z.infer<typeof CommentIncludeSchema>;

export type CommentQueryOne = z.infer<typeof CommentQueryOneSchema>;

export type CommentQuery = z.infer<typeof CommentQuerySchema>;

export type CommentProjection = z.infer<typeof CommentProjectionSchema>;

export const ProjectTaskTagQueryOneSchema = z
  .object({
    where: ProjectTaskTagWhereSchemaJson,
    select: ProjectTaskTagProjectionSchemaJson,
    omit: ProjectTaskTagProjectionSchemaJson,
    include: ProjectTaskTagIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskTagQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectTaskTagWhereSchemaJson,
    select: ProjectTaskTagProjectionSchemaJson,
    omit: ProjectTaskTagProjectionSchemaJson,
    include: ProjectTaskTagIncludeSchemaJson,
  })
  .partial();

export type ProjectTaskTagCreate = z.infer<typeof ProjectTaskTagCreateSchema>;

export type ProjectTaskTagUpdate = z.infer<typeof ProjectTaskTagUpdateSchema>;

export type ProjectTaskTagOrderBy = z.infer<typeof ProjectTaskTagOrderBySchema>;

export type ProjectTaskTagOwnProjection = z.infer<
  typeof ProjectTaskTagOwnProjectionSchema
>;

export type ProjectTaskTagOwnWhere = z.infer<
  typeof ProjectTaskTagOwnWhereSchema
>;

export type ProjectTaskTagOwnQuery = z.infer<
  typeof ProjectTaskTagOwnQuerySchema
>;

export type ProjectTaskTagOwnQueryOne = z.infer<
  typeof ProjectTaskTagOwnQueryOneSchema
>;

export type ProjectTaskTagWhere = z.infer<typeof ProjectTaskTagWhereSchema>;

export type ProjectTaskTagInclude = z.infer<typeof ProjectTaskTagIncludeSchema>;

export type ProjectTaskTagQueryOne = z.infer<
  typeof ProjectTaskTagQueryOneSchema
>;

export type ProjectTaskTagQuery = z.infer<typeof ProjectTaskTagQuerySchema>;

export type ProjectTaskTagProjection = z.infer<
  typeof ProjectTaskTagProjectionSchema
>;

export const ProjectTaskStatusQueryOneSchema = z
  .object({
    where: ProjectTaskStatusWhereSchemaJson,
    select: ProjectTaskStatusProjectionSchemaJson,
    omit: ProjectTaskStatusProjectionSchemaJson,
    include: ProjectTaskStatusIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskStatusQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectTaskStatusWhereSchemaJson,
    select: ProjectTaskStatusProjectionSchemaJson,
    omit: ProjectTaskStatusProjectionSchemaJson,
    include: ProjectTaskStatusIncludeSchemaJson,
  })
  .partial();

export type ProjectTaskStatusCreate = z.infer<
  typeof ProjectTaskStatusCreateSchema
>;

export type ProjectTaskStatusUpdate = z.infer<
  typeof ProjectTaskStatusUpdateSchema
>;

export type ProjectTaskStatusOrderBy = z.infer<
  typeof ProjectTaskStatusOrderBySchema
>;

export type ProjectTaskStatusOwnProjection = z.infer<
  typeof ProjectTaskStatusOwnProjectionSchema
>;

export type ProjectTaskStatusOwnWhere = z.infer<
  typeof ProjectTaskStatusOwnWhereSchema
>;

export type ProjectTaskStatusOwnQuery = z.infer<
  typeof ProjectTaskStatusOwnQuerySchema
>;

export type ProjectTaskStatusOwnQueryOne = z.infer<
  typeof ProjectTaskStatusOwnQueryOneSchema
>;

export type ProjectTaskStatusWhere = z.infer<
  typeof ProjectTaskStatusWhereSchema
>;

export type ProjectTaskStatusInclude = z.infer<
  typeof ProjectTaskStatusIncludeSchema
>;

export type ProjectTaskStatusQueryOne = z.infer<
  typeof ProjectTaskStatusQueryOneSchema
>;

export type ProjectTaskStatusQuery = z.infer<
  typeof ProjectTaskStatusQuerySchema
>;

export type ProjectTaskStatusProjection = z.infer<
  typeof ProjectTaskStatusProjectionSchema
>;

export const ProjectTaskPriorityQueryOneSchema = z
  .object({
    where: ProjectTaskPriorityWhereSchemaJson,
    select: ProjectTaskPriorityProjectionSchemaJson,
    omit: ProjectTaskPriorityProjectionSchemaJson,
    include: ProjectTaskPriorityIncludeSchemaJson,
  })
  .partial();

export const ProjectTaskPriorityQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ProjectTaskPriorityWhereSchemaJson,
    select: ProjectTaskPriorityProjectionSchemaJson,
    omit: ProjectTaskPriorityProjectionSchemaJson,
    include: ProjectTaskPriorityIncludeSchemaJson,
  })
  .partial();

export type ProjectTaskPriorityCreate = z.infer<
  typeof ProjectTaskPriorityCreateSchema
>;

export type ProjectTaskPriorityUpdate = z.infer<
  typeof ProjectTaskPriorityUpdateSchema
>;

export type ProjectTaskPriorityOrderBy = z.infer<
  typeof ProjectTaskPriorityOrderBySchema
>;

export type ProjectTaskPriorityOwnProjection = z.infer<
  typeof ProjectTaskPriorityOwnProjectionSchema
>;

export type ProjectTaskPriorityOwnWhere = z.infer<
  typeof ProjectTaskPriorityOwnWhereSchema
>;

export type ProjectTaskPriorityOwnQuery = z.infer<
  typeof ProjectTaskPriorityOwnQuerySchema
>;

export type ProjectTaskPriorityOwnQueryOne = z.infer<
  typeof ProjectTaskPriorityOwnQueryOneSchema
>;

export type ProjectTaskPriorityWhere = z.infer<
  typeof ProjectTaskPriorityWhereSchema
>;

export type ProjectTaskPriorityInclude = z.infer<
  typeof ProjectTaskPriorityIncludeSchema
>;

export type ProjectTaskPriorityQueryOne = z.infer<
  typeof ProjectTaskPriorityQueryOneSchema
>;

export type ProjectTaskPriorityQuery = z.infer<
  typeof ProjectTaskPriorityQuerySchema
>;

export type ProjectTaskPriorityProjection = z.infer<
  typeof ProjectTaskPriorityProjectionSchema
>;
