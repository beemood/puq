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

export const UserOwnSelectFieldsSchema = z
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

export const UserOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UserOwnSelectFieldsSchema
);

export const UserDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'displayName', 'slug', 'title'])
  .array();

export const TeamOwnSelectFieldsSchema = z
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

export const TeamOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnSelectFieldsSchema
);

export const TeamDistinctFieldsSchema = z
  .enum(['id', 'name', 'slug', 'description'])
  .array();

export const TeamManagerOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    managerId: z.boolean(),
    teamId: z.boolean(),
    manager: z.boolean(),
    team: z.boolean(),
  })
  .partial();

export const TeamManagerOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerOwnSelectFieldsSchema
);

export const TeamManagerDistinctFieldsSchema = z
  .enum(['id', 'managerId', 'teamId'])
  .array();

export const TeamMemberOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    teamId: z.boolean(),
    memberId: z.boolean(),
    team: z.boolean(),
    member: z.boolean(),
  })
  .partial();

export const TeamMemberOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberOwnSelectFieldsSchema
);

export const TeamMemberDistinctFieldsSchema = z
  .enum(['id', 'teamId', 'memberId'])
  .array();

export const ProjectOwnSelectFieldsSchema = z
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

export const ProjectOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectOwnSelectFieldsSchema
);

export const ProjectDistinctFieldsSchema = z
  .enum([
    'id',
    'createdById',
    'parentId',
    'name',
    'slug',
    'description',
    'startDate',
    'dueDate',
    'endDate',
  ])
  .array();

export const TagOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean(),
    projects: z.boolean(),
  })
  .partial();

export const TagOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TagOwnSelectFieldsSchema
);

export const TagDistinctFieldsSchema = z
  .enum(['id', 'name', 'isDefault'])
  .array();

export const CategoryOwnSelectFieldsSchema = z
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

export const CategoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnSelectFieldsSchema
);

export const CategoryDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name', 'description', 'isDefault'])
  .array();

export const SprintOwnSelectFieldsSchema = z
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

export const SprintOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SprintOwnSelectFieldsSchema
);

export const SprintDistinctFieldsSchema = z
  .enum(['id', 'createdById', 'projectId', 'name', 'slug', 'description'])
  .array();

export const PriorityOwnSelectFieldsSchema = z
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

export const PriorityOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PriorityOwnSelectFieldsSchema
);

export const PriorityDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'isDefault'])
  .array();

export const StatusOwnSelectFieldsSchema = z
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

export const StatusOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StatusOwnSelectFieldsSchema
);

export const StatusDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'isDefault'])
  .array();

export const PointOwnSelectFieldsSchema = z
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

export const PointOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PointOwnSelectFieldsSchema
);

export const PointDistinctFieldsSchema = z
  .enum(['id', 'name', 'point', 'description'])
  .array();

export const TaskOwnSelectFieldsSchema = z
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

export const TaskOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TaskOwnSelectFieldsSchema
);

export const TaskDistinctFieldsSchema = z
  .enum([
    'id',
    'sprintId',
    'createdAt',
    'updatedAt',
    'createdById',
    'priorityId',
    'pointId',
    'statusId',
    'parentId',
    'title',
    'slug',
    'description',
    'due',
    'resolvedAt',
  ])
  .array();

export const AssignmentHistoryOwnSelectFieldsSchema = z
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

export const AssignmentHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryOwnSelectFieldsSchema
);

export const AssignmentHistoryDistinctFieldsSchema = z
  .enum([
    'id',
    'createdById',
    'createdAt',
    'updatedAt',
    'projectId',
    'taskId',
    'oldUserId',
    'newUserId',
  ])
  .array();

export const PriorityHistoryOwnSelectFieldsSchema = z
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

export const PriorityHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryOwnSelectFieldsSchema
);

export const PriorityHistoryDistinctFieldsSchema = z
  .enum([
    'id',
    'createdById',
    'createdAt',
    'updatedAt',
    'projectId',
    'taskId',
    'oldPriorityId',
    'newPriorityId',
  ])
  .array();

export const StatusHistoryOwnSelectFieldsSchema = z
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

export const StatusHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryOwnSelectFieldsSchema
);

export const StatusHistoryDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'createdById',
    'oldStatusId',
    'newStatusId',
    'projectId',
    'taskId',
  ])
  .array();

export const PointHistoryOwnSelectFieldsSchema = z
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

export const PointHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryOwnSelectFieldsSchema
);

export const PointHistoryDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'createdById',
    'oldPointId',
    'newPointId',
    'projectId',
    'taskId',
  ])
  .array();

export const TeamHistoryOwnSelectFieldsSchema = z
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

export const TeamHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryOwnSelectFieldsSchema
);

export const TeamHistoryDistinctFieldsSchema = z
  .enum(['id', 'createdAt', 'createdById', 'oldTeamId', 'newTeamId'])
  .array();

export const TaskTagOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    taskId: z.boolean(),
    tagId: z.boolean(),
    task: z.boolean(),
    tag: z.boolean(),
  })
  .partial();

export const TaskTagOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TaskTagOwnSelectFieldsSchema
);

export const TaskTagDistinctFieldsSchema = z
  .enum(['id', 'taskId', 'tagId'])
  .array();

export const TaskCategoryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    categoryId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean(),
    category: z.boolean(),
  })
  .partial();

export const TaskCategoryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryOwnSelectFieldsSchema
);

export const TaskCategoryDistinctFieldsSchema = z
  .enum(['id', 'categoryId', 'taskId'])
  .array();

export const AssignmentOwnSelectFieldsSchema = z
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

export const AssignmentOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AssignmentOwnSelectFieldsSchema
);

export const AssignmentDistinctFieldsSchema = z
  .enum(['id', 'createdAt', 'updatedAt', 'assigneeId', 'taskId'])
  .array();

export const CommentOwnSelectFieldsSchema = z
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

export const CommentOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CommentOwnSelectFieldsSchema
);

export const CommentDistinctFieldsSchema = z
  .enum([
    'id',
    'createdAt',
    'updatedAt',
    'parentId',
    'createdById',
    'taskId',
    'comment',
  ])
  .array();

export const ProjectTaskTagOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    tagId: z.boolean(),
    tag: z.boolean(),
    project: z.boolean(),
  })
  .partial();

export const ProjectTaskTagOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagOwnSelectFieldsSchema
);

export const ProjectTaskTagDistinctFieldsSchema = z
  .enum(['id', 'projectId', 'tagId'])
  .array();

export const ProjectTaskStatusOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    statusId: z.boolean(),
    project: z.boolean(),
    status: z.boolean(),
  })
  .partial();

export const ProjectTaskStatusOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusOwnSelectFieldsSchema
);

export const ProjectTaskStatusDistinctFieldsSchema = z
  .enum(['id', 'projectId', 'statusId'])
  .array();

export const ProjectTaskPriorityOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    priorityId: z.boolean(),
    project: z.boolean(),
    priority: z.boolean(),
  })
  .partial();

export const ProjectTaskPriorityOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityOwnSelectFieldsSchema
);

export const ProjectTaskPriorityDistinctFieldsSchema = z
  .enum(['id', 'projectId', 'priorityId'])
  .array();

export const UserOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    displayName: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    title: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const UserOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  UserOwnWhereSchema
);

export const TeamOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const TeamOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamOwnWhereSchema
);

export const TeamManagerOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    managerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
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

export const ProjectOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    dueDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const ProjectOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectOwnWhereSchema
);

export const TagOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const TagOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TagOwnWhereSchema
);

export const CategoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const CategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CategoryOwnWhereSchema
);

export const SprintOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const SprintOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  SprintOwnWhereSchema
);

export const PriorityOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const PriorityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriorityOwnWhereSchema
);

export const StatusOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
  })
  .partial();

export const StatusOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StatusOwnWhereSchema
);

export const PointOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    point: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const PointOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PointOwnWhereSchema
);

export const TaskOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sprintId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    pointId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    statusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    title: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    due: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
  })
  .partial();

export const TaskOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskOwnWhereSchema
);

export const AssignmentHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldUserId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newUserId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const AssignmentHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryOwnWhereSchema
);

export const PriorityHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldPriorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newPriorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const PriorityHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryOwnWhereSchema
);

export const StatusHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldStatusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newStatusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const StatusHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryOwnWhereSchema
);

export const PointHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldPointId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newPointId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const PointHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryOwnWhereSchema
);

export const TeamHistoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldTeamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newTeamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const TeamHistoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryOwnWhereSchema
);

export const TaskTagOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    tagId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const TaskTagOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskTagOwnWhereSchema
);

export const TaskCategoryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const TaskCategoryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryOwnWhereSchema
);

export const AssignmentOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    assigneeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const AssignmentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentOwnWhereSchema
);

export const CommentOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    comment: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CommentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CommentOwnWhereSchema
);

export const ProjectTaskTagOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    tagId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ProjectTaskTagOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagOwnWhereSchema
);

export const ProjectTaskStatusOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    statusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ProjectTaskStatusOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusOwnWhereSchema
);

export const ProjectTaskPriorityOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
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
    distinct: UserDistinctFieldsSchema,
  })
  .partial();

export const UserOwnQuerySchema = z
  .object({
    where: UserOwnWhereSchemaJson,
    distinct: UserDistinctFieldsSchema,
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
    distinct: TeamMemberDistinctFieldsSchema,
  })
  .partial();

export const TeamMemberOwnQuerySchema = z
  .object({
    where: TeamMemberOwnWhereSchemaJson,
    distinct: TeamMemberDistinctFieldsSchema,
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
    distinct: ProjectDistinctFieldsSchema,
  })
  .partial();

export const ProjectOwnQuerySchema = z
  .object({
    where: ProjectOwnWhereSchemaJson,
    distinct: ProjectDistinctFieldsSchema,
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
    distinct: TagDistinctFieldsSchema,
  })
  .partial();

export const TagOwnQuerySchema = z
  .object({
    where: TagOwnWhereSchemaJson,
    distinct: TagDistinctFieldsSchema,
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
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const CategoryOwnQuerySchema = z
  .object({
    where: CategoryOwnWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
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
    distinct: SprintDistinctFieldsSchema,
  })
  .partial();

export const SprintOwnQuerySchema = z
  .object({
    where: SprintOwnWhereSchemaJson,
    distinct: SprintDistinctFieldsSchema,
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
    distinct: PriorityDistinctFieldsSchema,
  })
  .partial();

export const PriorityOwnQuerySchema = z
  .object({
    where: PriorityOwnWhereSchemaJson,
    distinct: PriorityDistinctFieldsSchema,
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
    distinct: StatusDistinctFieldsSchema,
  })
  .partial();

export const StatusOwnQuerySchema = z
  .object({
    where: StatusOwnWhereSchemaJson,
    distinct: StatusDistinctFieldsSchema,
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
    distinct: PointDistinctFieldsSchema,
  })
  .partial();

export const PointOwnQuerySchema = z
  .object({
    where: PointOwnWhereSchemaJson,
    distinct: PointDistinctFieldsSchema,
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
    distinct: TaskDistinctFieldsSchema,
  })
  .partial();

export const TaskOwnQuerySchema = z
  .object({
    where: TaskOwnWhereSchemaJson,
    distinct: TaskDistinctFieldsSchema,
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
    distinct: AssignmentHistoryDistinctFieldsSchema,
  })
  .partial();

export const AssignmentHistoryOwnQuerySchema = z
  .object({
    where: AssignmentHistoryOwnWhereSchemaJson,
    distinct: AssignmentHistoryDistinctFieldsSchema,
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
    distinct: PriorityHistoryDistinctFieldsSchema,
  })
  .partial();

export const PriorityHistoryOwnQuerySchema = z
  .object({
    where: PriorityHistoryOwnWhereSchemaJson,
    distinct: PriorityHistoryDistinctFieldsSchema,
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
    distinct: StatusHistoryDistinctFieldsSchema,
  })
  .partial();

export const StatusHistoryOwnQuerySchema = z
  .object({
    where: StatusHistoryOwnWhereSchemaJson,
    distinct: StatusHistoryDistinctFieldsSchema,
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
    distinct: PointHistoryDistinctFieldsSchema,
  })
  .partial();

export const PointHistoryOwnQuerySchema = z
  .object({
    where: PointHistoryOwnWhereSchemaJson,
    distinct: PointHistoryDistinctFieldsSchema,
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
    distinct: TeamHistoryDistinctFieldsSchema,
  })
  .partial();

export const TeamHistoryOwnQuerySchema = z
  .object({
    where: TeamHistoryOwnWhereSchemaJson,
    distinct: TeamHistoryDistinctFieldsSchema,
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
    distinct: TaskTagDistinctFieldsSchema,
  })
  .partial();

export const TaskTagOwnQuerySchema = z
  .object({
    where: TaskTagOwnWhereSchemaJson,
    distinct: TaskTagDistinctFieldsSchema,
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
    distinct: TaskCategoryDistinctFieldsSchema,
  })
  .partial();

export const TaskCategoryOwnQuerySchema = z
  .object({
    where: TaskCategoryOwnWhereSchemaJson,
    distinct: TaskCategoryDistinctFieldsSchema,
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
    distinct: AssignmentDistinctFieldsSchema,
  })
  .partial();

export const AssignmentOwnQuerySchema = z
  .object({
    where: AssignmentOwnWhereSchemaJson,
    distinct: AssignmentDistinctFieldsSchema,
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
    distinct: CommentDistinctFieldsSchema,
  })
  .partial();

export const CommentOwnQuerySchema = z
  .object({
    where: CommentOwnWhereSchemaJson,
    distinct: CommentDistinctFieldsSchema,
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
    distinct: ProjectTaskTagDistinctFieldsSchema,
  })
  .partial();

export const ProjectTaskTagOwnQuerySchema = z
  .object({
    where: ProjectTaskTagOwnWhereSchemaJson,
    distinct: ProjectTaskTagDistinctFieldsSchema,
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
    distinct: ProjectTaskStatusDistinctFieldsSchema,
  })
  .partial();

export const ProjectTaskStatusOwnQuerySchema = z
  .object({
    where: ProjectTaskStatusOwnWhereSchemaJson,
    distinct: ProjectTaskStatusDistinctFieldsSchema,
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
    distinct: ProjectTaskPriorityDistinctFieldsSchema,
  })
  .partial();

export const ProjectTaskPriorityOwnQuerySchema = z
  .object({
    where: ProjectTaskPriorityOwnWhereSchemaJson,
    distinct: ProjectTaskPriorityDistinctFieldsSchema,
  })
  .partial();

export const UserCreateSchema = z
  .object({
    uuid: z.string(),
    displayName: z.string(),
    slug: slugSchema.clone().optional(),
    title: z.string(),
  })
  .transform(slugTransformer('title'));

export const UserUpdateSchema = z
  .object({
    uuid: z.string().optional(),
    displayName: z.string().optional(),
    slug: slugSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    displayName: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    title: z.string().or(PZ.StringFilterSchema),
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

export const UserSelectFieldsSchema = z
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

export const UserSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  UserSelectFieldsSchema
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

export const UserProjectionSchema = z
  .union([
    z
      .object({
        omit: UserSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: UserSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: UserIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const TeamCreateSchema = z
  .object({
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const TeamUpdateSchema = z
  .object({
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
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

export const TeamSelectFieldsSchema = z
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

export const TeamSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamSelectFieldsSchema
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

export const TeamProjectionSchema = z
  .union([
    z
      .object({
        omit: TeamSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TeamSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TeamIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const TeamManagerCreateSchema = z.object({
  managerId: z.coerce.number().int(),
  teamId: z.coerce.number().int(),
});

export const TeamManagerUpdateSchema = z.object({
  managerId: z.coerce.number().int().optional(),
  teamId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    managerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    manager: UserOwnWhereSchema,
    team: TeamOwnWhereSchema,
  })
  .partial();

export const TeamManagerWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerWhereSchema
);

export const TeamManagerSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    managerId: z.boolean(),
    teamId: z.boolean(),
    manager: z.boolean().or(UserOwnQueryOneSchema),
    team: z.boolean().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamManagerSelectFieldsSchema
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

export const TeamManagerProjectionSchema = z
  .union([
    z
      .object({
        omit: TeamManagerSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TeamManagerSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TeamManagerIncludeSchemaJson,
      })
      .optional(),
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
    team: TeamOwnWhereSchema,
    member: UserOwnWhereSchema,
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
    team: z.boolean().or(TeamOwnQueryOneSchema),
    member: z.boolean().or(UserOwnQueryOneSchema),
  })
  .partial();

export const TeamMemberSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamMemberSelectFieldsSchema
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

export const TeamMemberProjectionSchema = z
  .union([
    z
      .object({
        omit: TeamMemberSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TeamMemberSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TeamMemberIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const ProjectCreateSchema = z
  .object({
    createdById: z.coerce.number().int(),
    parentId: z.coerce.number().int().optional(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
    startDate: dateSchema.clone().optional(),
    dueDate: dateSchema.clone().optional(),
    endDate: dateSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const ProjectUpdateSchema = z
  .object({
    createdById: z.coerce.number().int().optional(),
    parentId: z.coerce.number().int().optional().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
    startDate: dateSchema.clone().optional().optional(),
    dueDate: dateSchema.clone().optional().optional(),
    endDate: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parent: ProjectOwnWhereSchema,
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    startDate: z.string().or(PZ.DateTimeFilterSchema),
    dueDate: z.string().or(PZ.DateTimeFilterSchema),
    endDate: z.string().or(PZ.DateTimeFilterSchema),
    sprints: z
      .object({
        some: SprintOwnWhereSchema,
        every: SprintOwnWhereSchema,
        none: SprintOwnWhereSchema,
      })
      .partial(),
    createdBy: UserOwnWhereSchema,
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

export const ProjectSelectFieldsSchema = z
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

export const ProjectSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectSelectFieldsSchema
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

export const ProjectProjectionSchema = z
  .union([
    z
      .object({
        omit: ProjectSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: ProjectSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: ProjectIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const TagCreateSchema = z.object({
  name: nameSchema.clone(),
  isDefault: z.boolean().optional(),
});

export const TagUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
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

export const TagSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    isDefault: z.boolean(),
    tasks: z.boolean().or(TaskTagOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskTagOwnQuerySchema),
  })
  .partial();

export const TagSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TagSelectFieldsSchema
);

export const TagIncludeSchema = z
  .object({
    tasks: z.boolean().or(TaskTagOwnQuerySchema),
    projects: z.boolean().or(ProjectTaskTagOwnQuerySchema),
  })
  .partial();

export const TagIncludeSchemaJson = z.preprocess(jsonParser, TagIncludeSchema);

export const TagProjectionSchema = z
  .union([
    z
      .object({
        omit: TagSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TagSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TagIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const CategoryCreateSchema = z.object({
  parentId: z.coerce.number().int().optional(),
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  isDefault: z.boolean().optional(),
});

export const CategoryUpdateSchema = z.object({
  parentId: z.coerce.number().int().optional().optional(),
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
    parent: CategoryOwnWhereSchema,
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

export const CategorySelectFieldsSchema = z
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

export const CategorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CategorySelectFieldsSchema
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

export const CategoryProjectionSchema = z
  .union([
    z
      .object({
        omit: CategorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: CategorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: CategoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const SprintCreateSchema = z
  .object({
    createdById: z.coerce.number().int(),
    projectId: z.coerce.number().int().optional(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const SprintUpdateSchema = z
  .object({
    createdById: z.coerce.number().int().optional(),
    projectId: z.coerce.number().int().optional().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    project: ProjectOwnWhereSchema,
    tasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    createdBy: UserOwnWhereSchema,
  })
  .partial();

export const SprintWhereSchemaJson = z.preprocess(
  jsonParser,
  SprintWhereSchema
);

export const SprintSelectFieldsSchema = z
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

export const SprintSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  SprintSelectFieldsSchema
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

export const SprintProjectionSchema = z
  .union([
    z
      .object({
        omit: SprintSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: SprintSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: SprintIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const PriorityCreateSchema = z.object({
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  isDefault: z.boolean().optional(),
});

export const PriorityUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
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

export const PrioritySelectFieldsSchema = z
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

export const PrioritySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PrioritySelectFieldsSchema
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

export const PriorityProjectionSchema = z
  .union([
    z
      .object({
        omit: PrioritySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: PrioritySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: PriorityIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const StatusCreateSchema = z.object({
  name: nameSchema.clone(),
  description: descriptionSchema.clone().optional(),
  isDefault: z.boolean().optional(),
});

export const StatusUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  description: descriptionSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    isDefault: z.coerce.boolean().or(PZ.BooleanFilterSchema),
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

export const StatusSelectFieldsSchema = z
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

export const StatusSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StatusSelectFieldsSchema
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

export const StatusProjectionSchema = z
  .union([
    z
      .object({
        omit: StatusSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: StatusSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: StatusIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const PointCreateSchema = z.object({
  name: nameSchema.clone(),
  point: z.coerce.number().int(),
  description: descriptionSchema.clone().optional(),
});

export const PointUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  point: z.coerce.number().int().optional(),
  description: descriptionSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    point: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
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

export const PointSelectFieldsSchema = z
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

export const PointSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PointSelectFieldsSchema
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

export const PointProjectionSchema = z
  .union([
    z
      .object({
        omit: PointSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: PointSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: PointIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const TaskCreateSchema = z
  .object({
    sprintId: z.coerce.number().int().optional(),
    createdById: z.coerce.number().int(),
    priorityId: z.coerce.number().int().optional(),
    pointId: z.coerce.number().int(),
    statusId: z.coerce.number().int().optional(),
    parentId: z.coerce.number().int().optional(),
    title: z.string(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
    due: dateSchema.clone().optional(),
    resolvedAt: dateSchema.clone().optional(),
  })
  .transform(slugTransformer('title'));

export const TaskUpdateSchema = z
  .object({
    sprintId: z.coerce.number().int().optional().optional(),
    createdById: z.coerce.number().int().optional(),
    priorityId: z.coerce.number().int().optional().optional(),
    pointId: z.coerce.number().int().optional(),
    statusId: z.coerce.number().int().optional().optional(),
    parentId: z.coerce.number().int().optional().optional(),
    title: z.string().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
    due: dateSchema.clone().optional().optional(),
    resolvedAt: dateSchema.clone().optional().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    sprintId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    pointId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    statusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    title: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    due: z.string().or(PZ.DateTimeFilterSchema),
    resolvedAt: z.string().or(PZ.DateTimeFilterSchema),
    comments: z
      .object({
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      })
      .partial(),
    parent: TaskOwnWhereSchema,
    tasks: z
      .object({
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      })
      .partial(),
    createdBy: UserOwnWhereSchema,
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
    point: PointOwnWhereSchema,
    priority: PriorityOwnWhereSchema,
    status: StatusOwnWhereSchema,
    sprint: SprintOwnWhereSchema,
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

export const TaskSelectFieldsSchema = z
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

export const TaskSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TaskSelectFieldsSchema
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

export const TaskProjectionSchema = z
  .union([
    z
      .object({
        omit: TaskSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TaskSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TaskIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const AssignmentHistoryCreateSchema = z.object({
  createdById: z.coerce.number().int(),
  projectId: z.coerce.number().int(),
  taskId: z.coerce.number().int(),
  oldUserId: z.coerce.number().int(),
  newUserId: z.coerce.number().int(),
});

export const AssignmentHistoryUpdateSchema = z.object({
  createdById: z.coerce.number().int().optional(),
  projectId: z.coerce.number().int().optional(),
  taskId: z.coerce.number().int().optional(),
  oldUserId: z.coerce.number().int().optional(),
  newUserId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldUserId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newUserId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldUser: UserOwnWhereSchema,
    newUser: UserOwnWhereSchema,
    createdBy: UserOwnWhereSchema,
    task: TaskOwnWhereSchema,
    project: ProjectOwnWhereSchema,
  })
  .partial();

export const AssignmentHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistoryWhereSchema
);

export const AssignmentHistorySelectFieldsSchema = z
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

export const AssignmentHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AssignmentHistorySelectFieldsSchema
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

export const AssignmentHistoryProjectionSchema = z
  .union([
    z
      .object({
        omit: AssignmentHistorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: AssignmentHistorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: AssignmentHistoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const PriorityHistoryCreateSchema = z.object({
  createdById: z.coerce.number().int(),
  projectId: z.coerce.number().int(),
  taskId: z.coerce.number().int(),
  oldPriorityId: z.coerce.number().int().optional(),
  newPriorityId: z.coerce.number().int(),
});

export const PriorityHistoryUpdateSchema = z.object({
  createdById: z.coerce.number().int().optional(),
  projectId: z.coerce.number().int().optional(),
  taskId: z.coerce.number().int().optional(),
  oldPriorityId: z.coerce.number().int().optional().optional(),
  newPriorityId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldPriorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newPriorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldPriority: PriorityOwnWhereSchema,
    newPriority: PriorityOwnWhereSchema,
    createdBy: UserOwnWhereSchema,
    task: TaskOwnWhereSchema,
    project: ProjectOwnWhereSchema,
  })
  .partial();

export const PriorityHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistoryWhereSchema
);

export const PriorityHistorySelectFieldsSchema = z
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

export const PriorityHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PriorityHistorySelectFieldsSchema
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

export const PriorityHistoryProjectionSchema = z
  .union([
    z
      .object({
        omit: PriorityHistorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: PriorityHistorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: PriorityHistoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const StatusHistoryCreateSchema = z.object({
  createdById: z.coerce.number().int(),
  oldStatusId: z.coerce.number().int().optional(),
  newStatusId: z.coerce.number().int(),
  projectId: z.coerce.number().int(),
  taskId: z.coerce.number().int(),
});

export const StatusHistoryUpdateSchema = z.object({
  createdById: z.coerce.number().int().optional(),
  oldStatusId: z.coerce.number().int().optional().optional(),
  newStatusId: z.coerce.number().int().optional(),
  projectId: z.coerce.number().int().optional(),
  taskId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldStatusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newStatusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    task: TaskOwnWhereSchema,
    oldStatus: StatusOwnWhereSchema,
    newStatus: StatusOwnWhereSchema,
    createdBy: UserOwnWhereSchema,
    project: ProjectOwnWhereSchema,
  })
  .partial();

export const StatusHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  StatusHistoryWhereSchema
);

export const StatusHistorySelectFieldsSchema = z
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

export const StatusHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StatusHistorySelectFieldsSchema
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

export const StatusHistoryProjectionSchema = z
  .union([
    z
      .object({
        omit: StatusHistorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: StatusHistorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: StatusHistoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const PointHistoryCreateSchema = z.object({
  createdById: z.coerce.number().int(),
  oldPointId: z.coerce.number().int().optional(),
  newPointId: z.coerce.number().int(),
  projectId: z.coerce.number().int(),
  taskId: z.coerce.number().int(),
});

export const PointHistoryUpdateSchema = z.object({
  createdById: z.coerce.number().int().optional(),
  oldPointId: z.coerce.number().int().optional().optional(),
  newPointId: z.coerce.number().int().optional(),
  projectId: z.coerce.number().int().optional(),
  taskId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldPointId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newPointId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    task: TaskOwnWhereSchema,
    oldPoint: PointOwnWhereSchema,
    newPoint: PointOwnWhereSchema,
    createdBy: UserOwnWhereSchema,
    project: ProjectOwnWhereSchema,
  })
  .partial();

export const PointHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  PointHistoryWhereSchema
);

export const PointHistorySelectFieldsSchema = z
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

export const PointHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PointHistorySelectFieldsSchema
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

export const PointHistoryProjectionSchema = z
  .union([
    z
      .object({
        omit: PointHistorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: PointHistorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: PointHistoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const TeamHistoryCreateSchema = z.object({
  createdById: z.coerce.number().int(),
  oldTeamId: z.coerce.number().int().optional(),
  newTeamId: z.coerce.number().int(),
});

export const TeamHistoryUpdateSchema = z.object({
  createdById: z.coerce.number().int().optional(),
  oldTeamId: z.coerce.number().int().optional().optional(),
  newTeamId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldTeamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    newTeamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    oldTeam: TeamOwnWhereSchema,
    newTeam: TeamOwnWhereSchema,
    createdBy: UserOwnWhereSchema,
  })
  .partial();

export const TeamHistoryWhereSchemaJson = z.preprocess(
  jsonParser,
  TeamHistoryWhereSchema
);

export const TeamHistorySelectFieldsSchema = z
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

export const TeamHistorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TeamHistorySelectFieldsSchema
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

export const TeamHistoryProjectionSchema = z
  .union([
    z
      .object({
        omit: TeamHistorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TeamHistorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TeamHistoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const TaskTagCreateSchema = z.object({
  taskId: z.coerce.number().int(),
  tagId: z.coerce.number().int(),
});

export const TaskTagUpdateSchema = z.object({
  taskId: z.coerce.number().int().optional(),
  tagId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    tagId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    task: TaskOwnWhereSchema,
    tag: TagOwnWhereSchema,
  })
  .partial();

export const TaskTagWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskTagWhereSchema
);

export const TaskTagSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    taskId: z.boolean(),
    tagId: z.boolean(),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    tag: z.boolean().or(TagOwnQueryOneSchema),
  })
  .partial();

export const TaskTagSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TaskTagSelectFieldsSchema
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

export const TaskTagProjectionSchema = z
  .union([
    z
      .object({
        omit: TaskTagSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TaskTagSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TaskTagIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const TaskCategoryCreateSchema = z.object({
  categoryId: z.coerce.number().int(),
  taskId: z.coerce.number().int(),
});

export const TaskCategoryUpdateSchema = z.object({
  categoryId: z.coerce.number().int().optional(),
  taskId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    categoryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    task: TaskOwnWhereSchema,
    category: CategoryOwnWhereSchema,
  })
  .partial();

export const TaskCategoryWhereSchemaJson = z.preprocess(
  jsonParser,
  TaskCategoryWhereSchema
);

export const TaskCategorySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    categoryId: z.boolean(),
    taskId: z.boolean(),
    task: z.boolean().or(TaskOwnQueryOneSchema),
    category: z.boolean().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const TaskCategorySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TaskCategorySelectFieldsSchema
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

export const TaskCategoryProjectionSchema = z
  .union([
    z
      .object({
        omit: TaskCategorySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: TaskCategorySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: TaskCategoryIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const AssignmentCreateSchema = z.object({
  assigneeId: z.coerce.number().int(),
  taskId: z.coerce.number().int(),
});

export const AssignmentUpdateSchema = z.object({
  assigneeId: z.coerce.number().int().optional(),
  taskId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    assigneeId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    task: TaskOwnWhereSchema,
    assignee: UserOwnWhereSchema,
  })
  .partial();

export const AssignmentWhereSchemaJson = z.preprocess(
  jsonParser,
  AssignmentWhereSchema
);

export const AssignmentSelectFieldsSchema = z
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

export const AssignmentSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AssignmentSelectFieldsSchema
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

export const AssignmentProjectionSchema = z
  .union([
    z
      .object({
        omit: AssignmentSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: AssignmentSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: AssignmentIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const CommentCreateSchema = z.object({
  parentId: z.coerce.number().int().optional(),
  createdById: z.coerce.number().int(),
  taskId: z.coerce.number().int(),
  comment: z.string(),
});

export const CommentUpdateSchema = z.object({
  parentId: z.coerce.number().int().optional().optional(),
  createdById: z.coerce.number().int().optional(),
  taskId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdAt: z.string().or(PZ.DateTimeFilterSchema),
    updatedAt: z.string().or(PZ.DateTimeFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    createdById: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    taskId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    comment: z.string().or(PZ.StringFilterSchema),
    parent: CommentOwnWhereSchema,
    comments: z
      .object({
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      })
      .partial(),
    createdBy: UserOwnWhereSchema,
    task: TaskOwnWhereSchema,
  })
  .partial();

export const CommentWhereSchemaJson = z.preprocess(
  jsonParser,
  CommentWhereSchema
);

export const CommentSelectFieldsSchema = z
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

export const CommentSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CommentSelectFieldsSchema
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

export const CommentProjectionSchema = z
  .union([
    z
      .object({
        omit: CommentSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: CommentSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: CommentIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const ProjectTaskTagCreateSchema = z.object({
  projectId: z.coerce.number().int(),
  tagId: z.coerce.number().int(),
});

export const ProjectTaskTagUpdateSchema = z.object({
  projectId: z.coerce.number().int().optional(),
  tagId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    tagId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    tag: TagOwnWhereSchema,
    project: ProjectOwnWhereSchema,
  })
  .partial();

export const ProjectTaskTagWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagWhereSchema
);

export const ProjectTaskTagSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    tagId: z.boolean(),
    tag: z.boolean().or(TagOwnQueryOneSchema),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskTagSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskTagSelectFieldsSchema
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

export const ProjectTaskTagProjectionSchema = z
  .union([
    z
      .object({
        omit: ProjectTaskTagSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: ProjectTaskTagSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: ProjectTaskTagIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const ProjectTaskStatusCreateSchema = z.object({
  projectId: z.coerce.number().int(),
  statusId: z.coerce.number().int(),
});

export const ProjectTaskStatusUpdateSchema = z.object({
  projectId: z.coerce.number().int().optional(),
  statusId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    statusId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    project: ProjectOwnWhereSchema,
    status: StatusOwnWhereSchema,
  })
  .partial();

export const ProjectTaskStatusWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusWhereSchema
);

export const ProjectTaskStatusSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    statusId: z.boolean(),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    status: z.boolean().or(StatusOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskStatusSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskStatusSelectFieldsSchema
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

export const ProjectTaskStatusProjectionSchema = z
  .union([
    z
      .object({
        omit: ProjectTaskStatusSelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: ProjectTaskStatusSelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: ProjectTaskStatusIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const ProjectTaskPriorityCreateSchema = z.object({
  projectId: z.coerce.number().int(),
  priorityId: z.coerce.number().int(),
});

export const ProjectTaskPriorityUpdateSchema = z.object({
  projectId: z.coerce.number().int().optional(),
  priorityId: z.coerce.number().int().optional(),
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
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    projectId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    priorityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    project: ProjectOwnWhereSchema,
    priority: PriorityOwnWhereSchema,
  })
  .partial();

export const ProjectTaskPriorityWhereSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPriorityWhereSchema
);

export const ProjectTaskPrioritySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    projectId: z.boolean(),
    priorityId: z.boolean(),
    project: z.boolean().or(ProjectOwnQueryOneSchema),
    priority: z.boolean().or(PriorityOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskPrioritySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ProjectTaskPrioritySelectFieldsSchema
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

export const ProjectTaskPriorityProjectionSchema = z
  .union([
    z
      .object({
        omit: ProjectTaskPrioritySelectFieldsSchemaJson,
      })
      .optional(),
    z
      .object({
        select: ProjectTaskPrioritySelectFieldsSchemaJson,
      })
      .optional(),

    z
      .object({
        include: ProjectTaskPriorityIncludeSchemaJson,
      })
      .optional(),
  ])
  .optional();

export const UserQueryOneSchema = z
  .object({
    where: UserWhereSchemaJson,
    distinct: UserDistinctFieldsSchema,
  })
  .partial();

export const UserQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: UserWhereSchemaJson,
    distinct: UserDistinctFieldsSchema,
    orderBy: UserOrderBySchemaJson,
  })
  .partial();

export type UserCreate = z.infer<typeof UserCreateSchema>;

export type UserUpdate = z.infer<typeof UserUpdateSchema>;

export type UserOrderBy = z.infer<typeof UserOrderBySchema>;

export type UserOwnSelectFields = z.infer<typeof UserOwnSelectFieldsSchema>;

export type UserOwnWhere = z.infer<typeof UserOwnWhereSchema>;

export type UserOwnQuery = z.infer<typeof UserOwnQuerySchema>;

export type UserOwnQueryOne = z.infer<typeof UserOwnQueryOneSchema>;

export type UserWhere = z.infer<typeof UserWhereSchema>;

export type UserInclude = z.infer<typeof UserIncludeSchema>;

export type UserQueryOne = z.infer<typeof UserQueryOneSchema>;

export type UserQuery = z.infer<typeof UserQuerySchema>;

export type UserSelectFields = z.infer<typeof UserSelectFieldsSchema>;

export type UserProjection = z.infer<typeof UserProjectionSchema>;

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

export const ProjectQueryOneSchema = z
  .object({
    where: ProjectWhereSchemaJson,
    distinct: ProjectDistinctFieldsSchema,
  })
  .partial();

export const ProjectQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ProjectWhereSchemaJson,
    distinct: ProjectDistinctFieldsSchema,
    orderBy: ProjectOrderBySchemaJson,
  })
  .partial();

export type ProjectCreate = z.infer<typeof ProjectCreateSchema>;

export type ProjectUpdate = z.infer<typeof ProjectUpdateSchema>;

export type ProjectOrderBy = z.infer<typeof ProjectOrderBySchema>;

export type ProjectOwnSelectFields = z.infer<
  typeof ProjectOwnSelectFieldsSchema
>;

export type ProjectOwnWhere = z.infer<typeof ProjectOwnWhereSchema>;

export type ProjectOwnQuery = z.infer<typeof ProjectOwnQuerySchema>;

export type ProjectOwnQueryOne = z.infer<typeof ProjectOwnQueryOneSchema>;

export type ProjectWhere = z.infer<typeof ProjectWhereSchema>;

export type ProjectInclude = z.infer<typeof ProjectIncludeSchema>;

export type ProjectQueryOne = z.infer<typeof ProjectQueryOneSchema>;

export type ProjectQuery = z.infer<typeof ProjectQuerySchema>;

export type ProjectSelectFields = z.infer<typeof ProjectSelectFieldsSchema>;

export type ProjectProjection = z.infer<typeof ProjectProjectionSchema>;

export const TagQueryOneSchema = z
  .object({
    where: TagWhereSchemaJson,
    distinct: TagDistinctFieldsSchema,
  })
  .partial();

export const TagQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TagWhereSchemaJson,
    distinct: TagDistinctFieldsSchema,
    orderBy: TagOrderBySchemaJson,
  })
  .partial();

export type TagCreate = z.infer<typeof TagCreateSchema>;

export type TagUpdate = z.infer<typeof TagUpdateSchema>;

export type TagOrderBy = z.infer<typeof TagOrderBySchema>;

export type TagOwnSelectFields = z.infer<typeof TagOwnSelectFieldsSchema>;

export type TagOwnWhere = z.infer<typeof TagOwnWhereSchema>;

export type TagOwnQuery = z.infer<typeof TagOwnQuerySchema>;

export type TagOwnQueryOne = z.infer<typeof TagOwnQueryOneSchema>;

export type TagWhere = z.infer<typeof TagWhereSchema>;

export type TagInclude = z.infer<typeof TagIncludeSchema>;

export type TagQueryOne = z.infer<typeof TagQueryOneSchema>;

export type TagQuery = z.infer<typeof TagQuerySchema>;

export type TagSelectFields = z.infer<typeof TagSelectFieldsSchema>;

export type TagProjection = z.infer<typeof TagProjectionSchema>;

export const CategoryQueryOneSchema = z
  .object({
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
  })
  .partial();

export const CategoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CategoryWhereSchemaJson,
    distinct: CategoryDistinctFieldsSchema,
    orderBy: CategoryOrderBySchemaJson,
  })
  .partial();

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type CategoryOwnSelectFields = z.infer<
  typeof CategoryOwnSelectFieldsSchema
>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type CategorySelectFields = z.infer<typeof CategorySelectFieldsSchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export const SprintQueryOneSchema = z
  .object({
    where: SprintWhereSchemaJson,
    distinct: SprintDistinctFieldsSchema,
  })
  .partial();

export const SprintQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: SprintWhereSchemaJson,
    distinct: SprintDistinctFieldsSchema,
    orderBy: SprintOrderBySchemaJson,
  })
  .partial();

export type SprintCreate = z.infer<typeof SprintCreateSchema>;

export type SprintUpdate = z.infer<typeof SprintUpdateSchema>;

export type SprintOrderBy = z.infer<typeof SprintOrderBySchema>;

export type SprintOwnSelectFields = z.infer<typeof SprintOwnSelectFieldsSchema>;

export type SprintOwnWhere = z.infer<typeof SprintOwnWhereSchema>;

export type SprintOwnQuery = z.infer<typeof SprintOwnQuerySchema>;

export type SprintOwnQueryOne = z.infer<typeof SprintOwnQueryOneSchema>;

export type SprintWhere = z.infer<typeof SprintWhereSchema>;

export type SprintInclude = z.infer<typeof SprintIncludeSchema>;

export type SprintQueryOne = z.infer<typeof SprintQueryOneSchema>;

export type SprintQuery = z.infer<typeof SprintQuerySchema>;

export type SprintSelectFields = z.infer<typeof SprintSelectFieldsSchema>;

export type SprintProjection = z.infer<typeof SprintProjectionSchema>;

export const PriorityQueryOneSchema = z
  .object({
    where: PriorityWhereSchemaJson,
    distinct: PriorityDistinctFieldsSchema,
  })
  .partial();

export const PriorityQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PriorityWhereSchemaJson,
    distinct: PriorityDistinctFieldsSchema,
    orderBy: PriorityOrderBySchemaJson,
  })
  .partial();

export type PriorityCreate = z.infer<typeof PriorityCreateSchema>;

export type PriorityUpdate = z.infer<typeof PriorityUpdateSchema>;

export type PriorityOrderBy = z.infer<typeof PriorityOrderBySchema>;

export type PriorityOwnSelectFields = z.infer<
  typeof PriorityOwnSelectFieldsSchema
>;

export type PriorityOwnWhere = z.infer<typeof PriorityOwnWhereSchema>;

export type PriorityOwnQuery = z.infer<typeof PriorityOwnQuerySchema>;

export type PriorityOwnQueryOne = z.infer<typeof PriorityOwnQueryOneSchema>;

export type PriorityWhere = z.infer<typeof PriorityWhereSchema>;

export type PriorityInclude = z.infer<typeof PriorityIncludeSchema>;

export type PriorityQueryOne = z.infer<typeof PriorityQueryOneSchema>;

export type PriorityQuery = z.infer<typeof PriorityQuerySchema>;

export type PrioritySelectFields = z.infer<typeof PrioritySelectFieldsSchema>;

export type PriorityProjection = z.infer<typeof PriorityProjectionSchema>;

export const StatusQueryOneSchema = z
  .object({
    where: StatusWhereSchemaJson,
    distinct: StatusDistinctFieldsSchema,
  })
  .partial();

export const StatusQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: StatusWhereSchemaJson,
    distinct: StatusDistinctFieldsSchema,
    orderBy: StatusOrderBySchemaJson,
  })
  .partial();

export type StatusCreate = z.infer<typeof StatusCreateSchema>;

export type StatusUpdate = z.infer<typeof StatusUpdateSchema>;

export type StatusOrderBy = z.infer<typeof StatusOrderBySchema>;

export type StatusOwnSelectFields = z.infer<typeof StatusOwnSelectFieldsSchema>;

export type StatusOwnWhere = z.infer<typeof StatusOwnWhereSchema>;

export type StatusOwnQuery = z.infer<typeof StatusOwnQuerySchema>;

export type StatusOwnQueryOne = z.infer<typeof StatusOwnQueryOneSchema>;

export type StatusWhere = z.infer<typeof StatusWhereSchema>;

export type StatusInclude = z.infer<typeof StatusIncludeSchema>;

export type StatusQueryOne = z.infer<typeof StatusQueryOneSchema>;

export type StatusQuery = z.infer<typeof StatusQuerySchema>;

export type StatusSelectFields = z.infer<typeof StatusSelectFieldsSchema>;

export type StatusProjection = z.infer<typeof StatusProjectionSchema>;

export const PointQueryOneSchema = z
  .object({
    where: PointWhereSchemaJson,
    distinct: PointDistinctFieldsSchema,
  })
  .partial();

export const PointQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PointWhereSchemaJson,
    distinct: PointDistinctFieldsSchema,
    orderBy: PointOrderBySchemaJson,
  })
  .partial();

export type PointCreate = z.infer<typeof PointCreateSchema>;

export type PointUpdate = z.infer<typeof PointUpdateSchema>;

export type PointOrderBy = z.infer<typeof PointOrderBySchema>;

export type PointOwnSelectFields = z.infer<typeof PointOwnSelectFieldsSchema>;

export type PointOwnWhere = z.infer<typeof PointOwnWhereSchema>;

export type PointOwnQuery = z.infer<typeof PointOwnQuerySchema>;

export type PointOwnQueryOne = z.infer<typeof PointOwnQueryOneSchema>;

export type PointWhere = z.infer<typeof PointWhereSchema>;

export type PointInclude = z.infer<typeof PointIncludeSchema>;

export type PointQueryOne = z.infer<typeof PointQueryOneSchema>;

export type PointQuery = z.infer<typeof PointQuerySchema>;

export type PointSelectFields = z.infer<typeof PointSelectFieldsSchema>;

export type PointProjection = z.infer<typeof PointProjectionSchema>;

export const TaskQueryOneSchema = z
  .object({
    where: TaskWhereSchemaJson,
    distinct: TaskDistinctFieldsSchema,
  })
  .partial();

export const TaskQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TaskWhereSchemaJson,
    distinct: TaskDistinctFieldsSchema,
    orderBy: TaskOrderBySchemaJson,
  })
  .partial();

export type TaskCreate = z.infer<typeof TaskCreateSchema>;

export type TaskUpdate = z.infer<typeof TaskUpdateSchema>;

export type TaskOrderBy = z.infer<typeof TaskOrderBySchema>;

export type TaskOwnSelectFields = z.infer<typeof TaskOwnSelectFieldsSchema>;

export type TaskOwnWhere = z.infer<typeof TaskOwnWhereSchema>;

export type TaskOwnQuery = z.infer<typeof TaskOwnQuerySchema>;

export type TaskOwnQueryOne = z.infer<typeof TaskOwnQueryOneSchema>;

export type TaskWhere = z.infer<typeof TaskWhereSchema>;

export type TaskInclude = z.infer<typeof TaskIncludeSchema>;

export type TaskQueryOne = z.infer<typeof TaskQueryOneSchema>;

export type TaskQuery = z.infer<typeof TaskQuerySchema>;

export type TaskSelectFields = z.infer<typeof TaskSelectFieldsSchema>;

export type TaskProjection = z.infer<typeof TaskProjectionSchema>;

export const AssignmentHistoryQueryOneSchema = z
  .object({
    where: AssignmentHistoryWhereSchemaJson,
    distinct: AssignmentHistoryDistinctFieldsSchema,
  })
  .partial();

export const AssignmentHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AssignmentHistoryWhereSchemaJson,
    distinct: AssignmentHistoryDistinctFieldsSchema,
    orderBy: AssignmentHistoryOrderBySchemaJson,
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

export type AssignmentHistoryOwnSelectFields = z.infer<
  typeof AssignmentHistoryOwnSelectFieldsSchema
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

export type AssignmentHistorySelectFields = z.infer<
  typeof AssignmentHistorySelectFieldsSchema
>;

export type AssignmentHistoryProjection = z.infer<
  typeof AssignmentHistoryProjectionSchema
>;

export const PriorityHistoryQueryOneSchema = z
  .object({
    where: PriorityHistoryWhereSchemaJson,
    distinct: PriorityHistoryDistinctFieldsSchema,
  })
  .partial();

export const PriorityHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PriorityHistoryWhereSchemaJson,
    distinct: PriorityHistoryDistinctFieldsSchema,
    orderBy: PriorityHistoryOrderBySchemaJson,
  })
  .partial();

export type PriorityHistoryCreate = z.infer<typeof PriorityHistoryCreateSchema>;

export type PriorityHistoryUpdate = z.infer<typeof PriorityHistoryUpdateSchema>;

export type PriorityHistoryOrderBy = z.infer<
  typeof PriorityHistoryOrderBySchema
>;

export type PriorityHistoryOwnSelectFields = z.infer<
  typeof PriorityHistoryOwnSelectFieldsSchema
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

export type PriorityHistorySelectFields = z.infer<
  typeof PriorityHistorySelectFieldsSchema
>;

export type PriorityHistoryProjection = z.infer<
  typeof PriorityHistoryProjectionSchema
>;

export const StatusHistoryQueryOneSchema = z
  .object({
    where: StatusHistoryWhereSchemaJson,
    distinct: StatusHistoryDistinctFieldsSchema,
  })
  .partial();

export const StatusHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: StatusHistoryWhereSchemaJson,
    distinct: StatusHistoryDistinctFieldsSchema,
    orderBy: StatusHistoryOrderBySchemaJson,
  })
  .partial();

export type StatusHistoryCreate = z.infer<typeof StatusHistoryCreateSchema>;

export type StatusHistoryUpdate = z.infer<typeof StatusHistoryUpdateSchema>;

export type StatusHistoryOrderBy = z.infer<typeof StatusHistoryOrderBySchema>;

export type StatusHistoryOwnSelectFields = z.infer<
  typeof StatusHistoryOwnSelectFieldsSchema
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

export type StatusHistorySelectFields = z.infer<
  typeof StatusHistorySelectFieldsSchema
>;

export type StatusHistoryProjection = z.infer<
  typeof StatusHistoryProjectionSchema
>;

export const PointHistoryQueryOneSchema = z
  .object({
    where: PointHistoryWhereSchemaJson,
    distinct: PointHistoryDistinctFieldsSchema,
  })
  .partial();

export const PointHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PointHistoryWhereSchemaJson,
    distinct: PointHistoryDistinctFieldsSchema,
    orderBy: PointHistoryOrderBySchemaJson,
  })
  .partial();

export type PointHistoryCreate = z.infer<typeof PointHistoryCreateSchema>;

export type PointHistoryUpdate = z.infer<typeof PointHistoryUpdateSchema>;

export type PointHistoryOrderBy = z.infer<typeof PointHistoryOrderBySchema>;

export type PointHistoryOwnSelectFields = z.infer<
  typeof PointHistoryOwnSelectFieldsSchema
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

export type PointHistorySelectFields = z.infer<
  typeof PointHistorySelectFieldsSchema
>;

export type PointHistoryProjection = z.infer<
  typeof PointHistoryProjectionSchema
>;

export const TeamHistoryQueryOneSchema = z
  .object({
    where: TeamHistoryWhereSchemaJson,
    distinct: TeamHistoryDistinctFieldsSchema,
  })
  .partial();

export const TeamHistoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TeamHistoryWhereSchemaJson,
    distinct: TeamHistoryDistinctFieldsSchema,
    orderBy: TeamHistoryOrderBySchemaJson,
  })
  .partial();

export type TeamHistoryCreate = z.infer<typeof TeamHistoryCreateSchema>;

export type TeamHistoryUpdate = z.infer<typeof TeamHistoryUpdateSchema>;

export type TeamHistoryOrderBy = z.infer<typeof TeamHistoryOrderBySchema>;

export type TeamHistoryOwnSelectFields = z.infer<
  typeof TeamHistoryOwnSelectFieldsSchema
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

export type TeamHistorySelectFields = z.infer<
  typeof TeamHistorySelectFieldsSchema
>;

export type TeamHistoryProjection = z.infer<typeof TeamHistoryProjectionSchema>;

export const TaskTagQueryOneSchema = z
  .object({
    where: TaskTagWhereSchemaJson,
    distinct: TaskTagDistinctFieldsSchema,
  })
  .partial();

export const TaskTagQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TaskTagWhereSchemaJson,
    distinct: TaskTagDistinctFieldsSchema,
    orderBy: TaskTagOrderBySchemaJson,
  })
  .partial();

export type TaskTagCreate = z.infer<typeof TaskTagCreateSchema>;

export type TaskTagUpdate = z.infer<typeof TaskTagUpdateSchema>;

export type TaskTagOrderBy = z.infer<typeof TaskTagOrderBySchema>;

export type TaskTagOwnSelectFields = z.infer<
  typeof TaskTagOwnSelectFieldsSchema
>;

export type TaskTagOwnWhere = z.infer<typeof TaskTagOwnWhereSchema>;

export type TaskTagOwnQuery = z.infer<typeof TaskTagOwnQuerySchema>;

export type TaskTagOwnQueryOne = z.infer<typeof TaskTagOwnQueryOneSchema>;

export type TaskTagWhere = z.infer<typeof TaskTagWhereSchema>;

export type TaskTagInclude = z.infer<typeof TaskTagIncludeSchema>;

export type TaskTagQueryOne = z.infer<typeof TaskTagQueryOneSchema>;

export type TaskTagQuery = z.infer<typeof TaskTagQuerySchema>;

export type TaskTagSelectFields = z.infer<typeof TaskTagSelectFieldsSchema>;

export type TaskTagProjection = z.infer<typeof TaskTagProjectionSchema>;

export const TaskCategoryQueryOneSchema = z
  .object({
    where: TaskCategoryWhereSchemaJson,
    distinct: TaskCategoryDistinctFieldsSchema,
  })
  .partial();

export const TaskCategoryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TaskCategoryWhereSchemaJson,
    distinct: TaskCategoryDistinctFieldsSchema,
    orderBy: TaskCategoryOrderBySchemaJson,
  })
  .partial();

export type TaskCategoryCreate = z.infer<typeof TaskCategoryCreateSchema>;

export type TaskCategoryUpdate = z.infer<typeof TaskCategoryUpdateSchema>;

export type TaskCategoryOrderBy = z.infer<typeof TaskCategoryOrderBySchema>;

export type TaskCategoryOwnSelectFields = z.infer<
  typeof TaskCategoryOwnSelectFieldsSchema
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

export type TaskCategorySelectFields = z.infer<
  typeof TaskCategorySelectFieldsSchema
>;

export type TaskCategoryProjection = z.infer<
  typeof TaskCategoryProjectionSchema
>;

export const AssignmentQueryOneSchema = z
  .object({
    where: AssignmentWhereSchemaJson,
    distinct: AssignmentDistinctFieldsSchema,
  })
  .partial();

export const AssignmentQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AssignmentWhereSchemaJson,
    distinct: AssignmentDistinctFieldsSchema,
    orderBy: AssignmentOrderBySchemaJson,
  })
  .partial();

export type AssignmentCreate = z.infer<typeof AssignmentCreateSchema>;

export type AssignmentUpdate = z.infer<typeof AssignmentUpdateSchema>;

export type AssignmentOrderBy = z.infer<typeof AssignmentOrderBySchema>;

export type AssignmentOwnSelectFields = z.infer<
  typeof AssignmentOwnSelectFieldsSchema
>;

export type AssignmentOwnWhere = z.infer<typeof AssignmentOwnWhereSchema>;

export type AssignmentOwnQuery = z.infer<typeof AssignmentOwnQuerySchema>;

export type AssignmentOwnQueryOne = z.infer<typeof AssignmentOwnQueryOneSchema>;

export type AssignmentWhere = z.infer<typeof AssignmentWhereSchema>;

export type AssignmentInclude = z.infer<typeof AssignmentIncludeSchema>;

export type AssignmentQueryOne = z.infer<typeof AssignmentQueryOneSchema>;

export type AssignmentQuery = z.infer<typeof AssignmentQuerySchema>;

export type AssignmentSelectFields = z.infer<
  typeof AssignmentSelectFieldsSchema
>;

export type AssignmentProjection = z.infer<typeof AssignmentProjectionSchema>;

export const CommentQueryOneSchema = z
  .object({
    where: CommentWhereSchemaJson,
    distinct: CommentDistinctFieldsSchema,
  })
  .partial();

export const CommentQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CommentWhereSchemaJson,
    distinct: CommentDistinctFieldsSchema,
    orderBy: CommentOrderBySchemaJson,
  })
  .partial();

export type CommentCreate = z.infer<typeof CommentCreateSchema>;

export type CommentUpdate = z.infer<typeof CommentUpdateSchema>;

export type CommentOrderBy = z.infer<typeof CommentOrderBySchema>;

export type CommentOwnSelectFields = z.infer<
  typeof CommentOwnSelectFieldsSchema
>;

export type CommentOwnWhere = z.infer<typeof CommentOwnWhereSchema>;

export type CommentOwnQuery = z.infer<typeof CommentOwnQuerySchema>;

export type CommentOwnQueryOne = z.infer<typeof CommentOwnQueryOneSchema>;

export type CommentWhere = z.infer<typeof CommentWhereSchema>;

export type CommentInclude = z.infer<typeof CommentIncludeSchema>;

export type CommentQueryOne = z.infer<typeof CommentQueryOneSchema>;

export type CommentQuery = z.infer<typeof CommentQuerySchema>;

export type CommentSelectFields = z.infer<typeof CommentSelectFieldsSchema>;

export type CommentProjection = z.infer<typeof CommentProjectionSchema>;

export const ProjectTaskTagQueryOneSchema = z
  .object({
    where: ProjectTaskTagWhereSchemaJson,
    distinct: ProjectTaskTagDistinctFieldsSchema,
  })
  .partial();

export const ProjectTaskTagQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ProjectTaskTagWhereSchemaJson,
    distinct: ProjectTaskTagDistinctFieldsSchema,
    orderBy: ProjectTaskTagOrderBySchemaJson,
  })
  .partial();

export type ProjectTaskTagCreate = z.infer<typeof ProjectTaskTagCreateSchema>;

export type ProjectTaskTagUpdate = z.infer<typeof ProjectTaskTagUpdateSchema>;

export type ProjectTaskTagOrderBy = z.infer<typeof ProjectTaskTagOrderBySchema>;

export type ProjectTaskTagOwnSelectFields = z.infer<
  typeof ProjectTaskTagOwnSelectFieldsSchema
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

export type ProjectTaskTagSelectFields = z.infer<
  typeof ProjectTaskTagSelectFieldsSchema
>;

export type ProjectTaskTagProjection = z.infer<
  typeof ProjectTaskTagProjectionSchema
>;

export const ProjectTaskStatusQueryOneSchema = z
  .object({
    where: ProjectTaskStatusWhereSchemaJson,
    distinct: ProjectTaskStatusDistinctFieldsSchema,
  })
  .partial();

export const ProjectTaskStatusQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ProjectTaskStatusWhereSchemaJson,
    distinct: ProjectTaskStatusDistinctFieldsSchema,
    orderBy: ProjectTaskStatusOrderBySchemaJson,
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

export type ProjectTaskStatusOwnSelectFields = z.infer<
  typeof ProjectTaskStatusOwnSelectFieldsSchema
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

export type ProjectTaskStatusSelectFields = z.infer<
  typeof ProjectTaskStatusSelectFieldsSchema
>;

export type ProjectTaskStatusProjection = z.infer<
  typeof ProjectTaskStatusProjectionSchema
>;

export const ProjectTaskPriorityQueryOneSchema = z
  .object({
    where: ProjectTaskPriorityWhereSchemaJson,
    distinct: ProjectTaskPriorityDistinctFieldsSchema,
  })
  .partial();

export const ProjectTaskPriorityQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ProjectTaskPriorityWhereSchemaJson,
    distinct: ProjectTaskPriorityDistinctFieldsSchema,
    orderBy: ProjectTaskPriorityOrderBySchemaJson,
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

export type ProjectTaskPriorityOwnSelectFields = z.infer<
  typeof ProjectTaskPriorityOwnSelectFieldsSchema
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

export type ProjectTaskPrioritySelectFields = z.infer<
  typeof ProjectTaskPrioritySelectFieldsSchema
>;

export type ProjectTaskPriorityProjection = z.infer<
  typeof ProjectTaskPriorityProjectionSchema
>;
