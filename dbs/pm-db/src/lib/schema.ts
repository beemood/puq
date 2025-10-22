/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';

export const PaginationSchema = z
  .object({
    take: PZ.Scalar.take(),
    skip: PZ.Scalar.skip(),
  })
  .partial();

export const UserOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    displayName: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
    assignments: PZ.Scalar.bool(),
    managedTeams: PZ.Scalar.bool(),
    memberships: PZ.Scalar.bool(),
    createdProjects: PZ.Scalar.bool(),
    createdSprints: PZ.Scalar.bool(),
    createdTasks: PZ.Scalar.bool(),
    createdComments: PZ.Scalar.bool(),
    takenAssignments: PZ.Scalar.bool(),
    givenAssignments: PZ.Scalar.bool(),
    changedAssignments: PZ.Scalar.bool(),
    changedPriorities: PZ.Scalar.bool(),
    changedStatuses: PZ.Scalar.bool(),
    changedPoints: PZ.Scalar.bool(),
    changedTeams: PZ.Scalar.bool(),
  })
  .partial();

export const UserOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserOwnSelectFieldsSchema
);

export const UserDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'displayName', 'slug', 'title'])
  .array();

export const TeamOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    managers: PZ.Scalar.bool(),
    members: PZ.Scalar.bool(),
    takenTeams: PZ.Scalar.bool(),
    givenTeams: PZ.Scalar.bool(),
  })
  .partial();

export const TeamOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamOwnSelectFieldsSchema
);

export const TeamDistinctFieldsSchema = z
  .enum(['id', 'name', 'slug', 'description'])
  .array();

export const TeamManagerOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    managerId: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    manager: PZ.Scalar.bool(),
    team: PZ.Scalar.bool(),
  })
  .partial();

export const TeamManagerOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerOwnSelectFieldsSchema
);

export const TeamManagerDistinctFieldsSchema = z
  .enum(['id', 'managerId', 'teamId'])
  .array();

export const TeamMemberOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    memberId: PZ.Scalar.bool(),
    team: PZ.Scalar.bool(),
    member: PZ.Scalar.bool(),
  })
  .partial();

export const TeamMemberOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamMemberOwnSelectFieldsSchema
);

export const TeamMemberDistinctFieldsSchema = z
  .enum(['id', 'teamId', 'memberId'])
  .array();

export const ProjectOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    dueDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    sprints: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    tags: PZ.Scalar.bool(),
    statuses: PZ.Scalar.bool(),
    priorities: PZ.Scalar.bool(),
    assignmentHistory: PZ.Scalar.bool(),
    priorityHistory: PZ.Scalar.bool(),
    statusHistory: PZ.Scalar.bool(),
    pointHistory: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
  })
  .partial();

export const TagOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TagOwnSelectFieldsSchema
);

export const TagDistinctFieldsSchema = z
  .enum(['id', 'name', 'isDefault'])
  .array();

export const CategoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    categories: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
  })
  .partial();

export const CategoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryOwnSelectFieldsSchema
);

export const CategoryDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name', 'description', 'isDefault'])
  .array();

export const SprintOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
  })
  .partial();

export const SprintOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SprintOwnSelectFieldsSchema
);

export const SprintDistinctFieldsSchema = z
  .enum(['id', 'createdById', 'projectId', 'name', 'slug', 'description'])
  .array();

export const PriorityOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
    takenPriorities: PZ.Scalar.bool(),
    givenPriorities: PZ.Scalar.bool(),
  })
  .partial();

export const PriorityOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriorityOwnSelectFieldsSchema
);

export const PriorityDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'isDefault'])
  .array();

export const StatusOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
    takenStatuses: PZ.Scalar.bool(),
    givenStatuses: PZ.Scalar.bool(),
  })
  .partial();

export const StatusOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StatusOwnSelectFieldsSchema
);

export const StatusDistinctFieldsSchema = z
  .enum(['id', 'name', 'description', 'isDefault'])
  .array();

export const PointOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    point: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    takenPointes: PZ.Scalar.bool(),
    givenPointes: PZ.Scalar.bool(),
  })
  .partial();

export const PointOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointOwnSelectFieldsSchema
);

export const PointDistinctFieldsSchema = z
  .enum(['id', 'name', 'point', 'description'])
  .array();

export const TaskOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sprintId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    priorityId: PZ.Scalar.bool(),
    pointId: PZ.Scalar.bool(),
    statusId: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    due: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    comments: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    assignments: PZ.Scalar.bool(),
    tags: PZ.Scalar.bool(),
    categories: PZ.Scalar.bool(),
    point: PZ.Scalar.bool(),
    priority: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    sprint: PZ.Scalar.bool(),
    assignmentHistory: PZ.Scalar.bool(),
    statusHistory: PZ.Scalar.bool(),
    priorityHistory: PZ.Scalar.bool(),
    pointHistory: PZ.Scalar.bool(),
  })
  .partial();

export const TaskOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    oldUserId: PZ.Scalar.bool(),
    newUserId: PZ.Scalar.bool(),
    oldUser: PZ.Scalar.bool(),
    newUser: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const AssignmentHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    oldPriorityId: PZ.Scalar.bool(),
    newPriorityId: PZ.Scalar.bool(),
    oldPriority: PZ.Scalar.bool(),
    newPriority: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const PriorityHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldStatusId: PZ.Scalar.bool(),
    newStatusId: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    oldStatus: PZ.Scalar.bool(),
    newStatus: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const StatusHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldPointId: PZ.Scalar.bool(),
    newPointId: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    oldPoint: PZ.Scalar.bool(),
    newPoint: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const PointHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldTeamId: PZ.Scalar.bool(),
    newTeamId: PZ.Scalar.bool(),
    oldTeam: PZ.Scalar.bool(),
    newTeam: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
  })
  .partial();

export const TeamHistoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamHistoryOwnSelectFieldsSchema
);

export const TeamHistoryDistinctFieldsSchema = z
  .enum(['id', 'createdAt', 'createdById', 'oldTeamId', 'newTeamId'])
  .array();

export const TaskTagOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    tagId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    tag: PZ.Scalar.bool(),
  })
  .partial();

export const TaskTagOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskTagOwnSelectFieldsSchema
);

export const TaskTagDistinctFieldsSchema = z
  .enum(['id', 'taskId', 'tagId'])
  .array();

export const TaskCategoryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
  })
  .partial();

export const TaskCategoryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskCategoryOwnSelectFieldsSchema
);

export const TaskCategoryDistinctFieldsSchema = z
  .enum(['id', 'categoryId', 'taskId'])
  .array();

export const AssignmentOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    assigneeId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    assignee: PZ.Scalar.bool(),
  })
  .partial();

export const AssignmentOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AssignmentOwnSelectFieldsSchema
);

export const AssignmentDistinctFieldsSchema = z
  .enum(['id', 'createdAt', 'updatedAt', 'assigneeId', 'taskId'])
  .array();

export const CommentOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    comment: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    comments: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
  })
  .partial();

export const CommentOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    tagId: PZ.Scalar.bool(),
    tag: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectTaskTagOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskTagOwnSelectFieldsSchema
);

export const ProjectTaskTagDistinctFieldsSchema = z
  .enum(['id', 'projectId', 'tagId'])
  .array();

export const ProjectTaskStatusOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    statusId: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectTaskStatusOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskStatusOwnSelectFieldsSchema
);

export const ProjectTaskStatusDistinctFieldsSchema = z
  .enum(['id', 'projectId', 'statusId'])
  .array();

export const ProjectTaskPriorityOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    priorityId: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
    priority: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectTaskPriorityOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProjectTaskPriorityOwnWhereSchema
);

export const UserOwnIncludeSchema = z
  .object({
    assignments: PZ.Scalar.bool(),
    managedTeams: PZ.Scalar.bool(),
    memberships: PZ.Scalar.bool(),
    createdProjects: PZ.Scalar.bool(),
    createdSprints: PZ.Scalar.bool(),
    createdTasks: PZ.Scalar.bool(),
    createdComments: PZ.Scalar.bool(),
    takenAssignments: PZ.Scalar.bool(),
    givenAssignments: PZ.Scalar.bool(),
    changedAssignments: PZ.Scalar.bool(),
    changedPriorities: PZ.Scalar.bool(),
    changedStatuses: PZ.Scalar.bool(),
    changedPoints: PZ.Scalar.bool(),
    changedTeams: PZ.Scalar.bool(),
  })
  .partial();

export const UserOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    managers: PZ.Scalar.bool(),
    members: PZ.Scalar.bool(),
    takenTeams: PZ.Scalar.bool(),
    givenTeams: PZ.Scalar.bool(),
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
    manager: PZ.Scalar.bool(),
    team: PZ.Scalar.bool(),
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
    team: PZ.Scalar.bool(),
    member: PZ.Scalar.bool(),
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

export const ProjectOwnIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool(),
    sprints: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    tags: PZ.Scalar.bool(),
    statuses: PZ.Scalar.bool(),
    priorities: PZ.Scalar.bool(),
    assignmentHistory: PZ.Scalar.bool(),
    priorityHistory: PZ.Scalar.bool(),
    statusHistory: PZ.Scalar.bool(),
    pointHistory: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    tasks: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
  })
  .partial();

export const TagOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    parent: PZ.Scalar.bool(),
    categories: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
  })
  .partial();

export const CategoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    project: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
  })
  .partial();

export const SprintOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    tasks: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
    takenPriorities: PZ.Scalar.bool(),
    givenPriorities: PZ.Scalar.bool(),
  })
  .partial();

export const PriorityOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    tasks: PZ.Scalar.bool(),
    projects: PZ.Scalar.bool(),
    takenStatuses: PZ.Scalar.bool(),
    givenStatuses: PZ.Scalar.bool(),
  })
  .partial();

export const StatusOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    tasks: PZ.Scalar.bool(),
    takenPointes: PZ.Scalar.bool(),
    givenPointes: PZ.Scalar.bool(),
  })
  .partial();

export const PointOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    comments: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    assignments: PZ.Scalar.bool(),
    tags: PZ.Scalar.bool(),
    categories: PZ.Scalar.bool(),
    point: PZ.Scalar.bool(),
    priority: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
    sprint: PZ.Scalar.bool(),
    assignmentHistory: PZ.Scalar.bool(),
    statusHistory: PZ.Scalar.bool(),
    priorityHistory: PZ.Scalar.bool(),
    pointHistory: PZ.Scalar.bool(),
  })
  .partial();

export const TaskOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    oldUser: PZ.Scalar.bool(),
    newUser: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const AssignmentHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    oldPriority: PZ.Scalar.bool(),
    newPriority: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const PriorityHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    task: PZ.Scalar.bool(),
    oldStatus: PZ.Scalar.bool(),
    newStatus: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const StatusHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    task: PZ.Scalar.bool(),
    oldPoint: PZ.Scalar.bool(),
    newPoint: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const PointHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    oldTeam: PZ.Scalar.bool(),
    newTeam: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
  })
  .partial();

export const TeamHistoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    task: PZ.Scalar.bool(),
    tag: PZ.Scalar.bool(),
  })
  .partial();

export const TaskTagOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    task: PZ.Scalar.bool(),
    category: PZ.Scalar.bool(),
  })
  .partial();

export const TaskCategoryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    task: PZ.Scalar.bool(),
    assignee: PZ.Scalar.bool(),
  })
  .partial();

export const AssignmentOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    parent: PZ.Scalar.bool(),
    comments: PZ.Scalar.bool(),
    createdBy: PZ.Scalar.bool(),
    task: PZ.Scalar.bool(),
  })
  .partial();

export const CommentOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    tag: PZ.Scalar.bool(),
    project: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectTaskTagOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    project: PZ.Scalar.bool(),
    status: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectTaskStatusOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
    project: PZ.Scalar.bool(),
    priority: PZ.Scalar.bool(),
  })
  .partial();

export const ProjectTaskPriorityOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const UserCreateSchema = z.preprocess(
  PZ.slugTransformer('title'),
  z.object({
    uuid: PZ.Scalar.string(),
    displayName: PZ.Scalar.string(),
    slug: PZ.Scalar.slug().optional(),
    title: PZ.Scalar.string(),
  })
);

export const UserUpdateSchema = z.object({
  uuid: PZ.Scalar.string().optional(),
  displayName: PZ.Scalar.string().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  title: PZ.Scalar.string().optional(),
});

export const UserOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    displayName: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    title: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const UserOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const UserWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserWhereSchema
);

export const UserSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    displayName: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
    assignments: PZ.Scalar.bool().or(AssignmentOwnQuerySchema),
    managedTeams: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
    memberships: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    createdProjects: PZ.Scalar.bool().or(ProjectOwnQuerySchema),
    createdSprints: PZ.Scalar.bool().or(SprintOwnQuerySchema),
    createdTasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    createdComments: PZ.Scalar.bool().or(CommentOwnQuerySchema),
    takenAssignments: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    givenAssignments: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    changedAssignments: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    changedPriorities: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    changedStatuses: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    changedPoints: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
    changedTeams: PZ.Scalar.bool().or(TeamHistoryOwnQuerySchema),
  })
  .partial();

export const UserSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserSelectFieldsSchema
);

export const UserOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    displayName: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'displayName', 'slug', 'title'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const UserOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserOmitFieldsSchema
);

export const UserIncludeSchema = z
  .object({
    assignments: PZ.Scalar.bool().or(AssignmentOwnQuerySchema),
    managedTeams: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
    memberships: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    createdProjects: PZ.Scalar.bool().or(ProjectOwnQuerySchema),
    createdSprints: PZ.Scalar.bool().or(SprintOwnQuerySchema),
    createdTasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    createdComments: PZ.Scalar.bool().or(CommentOwnQuerySchema),
    takenAssignments: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    givenAssignments: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    changedAssignments: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    changedPriorities: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    changedStatuses: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    changedPoints: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
    changedTeams: PZ.Scalar.bool().or(TeamHistoryOwnQuerySchema),
  })
  .partial();

export const UserIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  UserIncludeSchema
);

export const UserProjectionSchema = z.union([
  z.object({ omit: UserOmitFieldsSchemaJson }),
  z.object({ select: UserSelectFieldsSchemaJson }),
  z.object({ include: UserIncludeSchemaJson }),
  z.object({}),
]);

export const TeamCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
    description: PZ.Scalar.description().optional(),
  })
);

export const TeamUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const TeamOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
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

export const TeamWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamWhereSchema
);

export const TeamSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    managers: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
    members: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    takenTeams: PZ.Scalar.bool().or(TeamHistoryOwnQuerySchema),
    givenTeams: PZ.Scalar.bool().or(TeamHistoryOwnQuerySchema),
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
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'slug', 'description'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TeamOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamOmitFieldsSchema
);

export const TeamIncludeSchema = z
  .object({
    managers: PZ.Scalar.bool().or(TeamManagerOwnQuerySchema),
    members: PZ.Scalar.bool().or(TeamMemberOwnQuerySchema),
    takenTeams: PZ.Scalar.bool().or(TeamHistoryOwnQuerySchema),
    givenTeams: PZ.Scalar.bool().or(TeamHistoryOwnQuerySchema),
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
    managerId: PZ.Scalar.id(),
    teamId: PZ.Scalar.id(),
  })
);

export const TeamManagerUpdateSchema = z.object({
  managerId: PZ.Scalar.id().optional(),
  teamId: PZ.Scalar.id().optional(),
});

export const TeamManagerOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    managerId: PZ.OrderDirectionSchema,
    teamId: PZ.OrderDirectionSchema,
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
    managerId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    teamId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    manager: UserOwnWhereSchema,
    team: TeamOwnWhereSchema,
  })
  .partial();

export const TeamManagerWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerWhereSchema
);

export const TeamManagerSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    managerId: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
    manager: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
  })
  .partial();

export const TeamManagerSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerSelectFieldsSchema
);

export const TeamManagerOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    managerId: PZ.Scalar.bool(),
    teamId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'managerId', 'teamId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TeamManagerOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamManagerOmitFieldsSchema
);

export const TeamManagerIncludeSchema = z
  .object({
    manager: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
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
    team: TeamOwnWhereSchema,
    member: UserOwnWhereSchema,
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
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    member: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
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
    team: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    member: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
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

export const ProjectCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    createdById: PZ.Scalar.id(),
    parentId: PZ.Scalar.id().optional(),
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
    description: PZ.Scalar.description().optional(),
    startDate: PZ.Scalar.datetime().optional(),
    dueDate: PZ.Scalar.datetime().optional(),
    endDate: PZ.Scalar.datetime().optional(),
  })
);

export const ProjectUpdateSchema = z.object({
  createdById: PZ.Scalar.id().optional(),
  parentId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
  startDate: PZ.Scalar.datetime().optional().optional(),
  dueDate: PZ.Scalar.datetime().optional().optional(),
  endDate: PZ.Scalar.datetime().optional().optional(),
});

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ProjectOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProjectWhereSchema
);

export const ProjectSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    dueDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
    sprints: PZ.Scalar.bool().or(SprintOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    tags: PZ.Scalar.bool().or(ProjectTaskTagOwnQuerySchema),
    statuses: PZ.Scalar.bool().or(ProjectTaskStatusOwnQuerySchema),
    priorities: PZ.Scalar.bool().or(ProjectTaskPriorityOwnQuerySchema),
    assignmentHistory: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    priorityHistory: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    statusHistory: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    pointHistory: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectOwnQuerySchema),
  })
  .partial();

export const ProjectSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectSelectFieldsSchema
);

export const ProjectOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    startDate: PZ.Scalar.bool(),
    dueDate: PZ.Scalar.bool(),
    endDate: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdById',
        'parentId',
        'name',
        'slug',
        'description',
        'startDate',
        'dueDate',
        'endDate',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ProjectOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectOmitFieldsSchema
);

export const ProjectIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    sprints: PZ.Scalar.bool().or(SprintOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    tags: PZ.Scalar.bool().or(ProjectTaskTagOwnQuerySchema),
    statuses: PZ.Scalar.bool().or(ProjectTaskStatusOwnQuerySchema),
    priorities: PZ.Scalar.bool().or(ProjectTaskPriorityOwnQuerySchema),
    assignmentHistory: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    priorityHistory: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    statusHistory: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    pointHistory: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectOwnQuerySchema),
  })
  .partial();

export const ProjectIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectIncludeSchema
);

export const ProjectProjectionSchema = z.union([
  z.object({ omit: ProjectOmitFieldsSchemaJson }),
  z.object({ select: ProjectSelectFieldsSchemaJson }),
  z.object({ include: ProjectIncludeSchemaJson }),
  z.object({}),
]);

export const TagCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    isDefault: PZ.Scalar.bool().optional(),
  })
);

export const TagUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  isDefault: PZ.Scalar.bool().optional().optional(),
});

export const TagOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TagOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TagOrderBySchema
);

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

export const TagWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TagWhereSchema
);

export const TagSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool().or(TaskTagOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectTaskTagOwnQuerySchema),
  })
  .partial();

export const TagSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TagSelectFieldsSchema
);

export const TagOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'isDefault'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TagOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TagOmitFieldsSchema
);

export const TagIncludeSchema = z
  .object({
    tasks: PZ.Scalar.bool().or(TaskTagOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectTaskTagOwnQuerySchema),
  })
  .partial();

export const TagIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TagIncludeSchema
);

export const TagProjectionSchema = z.union([
  z.object({ omit: TagOmitFieldsSchemaJson }),
  z.object({ select: TagSelectFieldsSchemaJson }),
  z.object({ include: TagIncludeSchemaJson }),
  z.object({}),
]);

export const CategoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    parentId: PZ.Scalar.id().optional(),
    name: PZ.Scalar.name(),
    description: PZ.Scalar.description().optional(),
    isDefault: PZ.Scalar.bool().optional(),
  })
);

export const CategoryUpdateSchema = z.object({
  parentId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  isDefault: PZ.Scalar.bool().optional().optional(),
});

export const CategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CategoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  CategoryWhereSchema
);

export const CategorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    categories: PZ.Scalar.bool().or(CategoryOwnQuerySchema),
    tasks: PZ.Scalar.bool().or(TaskCategoryOwnQuerySchema),
  })
  .partial();

export const CategorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategorySelectFieldsSchema
);

export const CategoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'parentId', 'name', 'description', 'isDefault'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CategoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryOmitFieldsSchema
);

export const CategoryIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
    categories: PZ.Scalar.bool().or(CategoryOwnQuerySchema),
    tasks: PZ.Scalar.bool().or(TaskCategoryOwnQuerySchema),
  })
  .partial();

export const CategoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CategoryIncludeSchema
);

export const CategoryProjectionSchema = z.union([
  z.object({ omit: CategoryOmitFieldsSchemaJson }),
  z.object({ select: CategorySelectFieldsSchemaJson }),
  z.object({ include: CategoryIncludeSchemaJson }),
  z.object({}),
]);

export const SprintCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    createdById: PZ.Scalar.id(),
    projectId: PZ.Scalar.id().optional(),
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
    description: PZ.Scalar.description().optional(),
  })
);

export const SprintUpdateSchema = z.object({
  createdById: PZ.Scalar.id().optional(),
  projectId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const SprintOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const SprintOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  SprintWhereSchema
);

export const SprintSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
  })
  .partial();

export const SprintSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SprintSelectFieldsSchema
);

export const SprintOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'createdById', 'projectId', 'name', 'slug', 'description'].every(
        (e) => Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const SprintOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SprintOmitFieldsSchema
);

export const SprintIncludeSchema = z
  .object({
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
  })
  .partial();

export const SprintIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  SprintIncludeSchema
);

export const SprintProjectionSchema = z.union([
  z.object({ omit: SprintOmitFieldsSchemaJson }),
  z.object({ select: SprintSelectFieldsSchemaJson }),
  z.object({ include: SprintIncludeSchemaJson }),
  z.object({}),
]);

export const PriorityCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    description: PZ.Scalar.description().optional(),
    isDefault: PZ.Scalar.bool().optional(),
  })
);

export const PriorityUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  isDefault: PZ.Scalar.bool().optional().optional(),
});

export const PriorityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PriorityOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  PriorityWhereSchema
);

export const PrioritySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectTaskPriorityOwnQuerySchema),
    takenPriorities: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    givenPriorities: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
  })
  .partial();

export const PrioritySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PrioritySelectFieldsSchema
);

export const PriorityOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'description', 'isDefault'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PriorityOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriorityOmitFieldsSchema
);

export const PriorityIncludeSchema = z
  .object({
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectTaskPriorityOwnQuerySchema),
    takenPriorities: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    givenPriorities: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
  })
  .partial();

export const PriorityIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriorityIncludeSchema
);

export const PriorityProjectionSchema = z.union([
  z.object({ omit: PriorityOmitFieldsSchemaJson }),
  z.object({ select: PrioritySelectFieldsSchemaJson }),
  z.object({ include: PriorityIncludeSchemaJson }),
  z.object({}),
]);

export const StatusCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    description: PZ.Scalar.description().optional(),
    isDefault: PZ.Scalar.bool().optional(),
  })
);

export const StatusUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  description: PZ.Scalar.description().optional().optional(),
  isDefault: PZ.Scalar.bool().optional().optional(),
});

export const StatusOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
    isDefault: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const StatusOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  StatusWhereSchema
);

export const StatusSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectTaskStatusOwnQuerySchema),
    takenStatuses: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    givenStatuses: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
  })
  .partial();

export const StatusSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StatusSelectFieldsSchema
);

export const StatusOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    isDefault: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'description', 'isDefault'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const StatusOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StatusOmitFieldsSchema
);

export const StatusIncludeSchema = z
  .object({
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    projects: PZ.Scalar.bool().or(ProjectTaskStatusOwnQuerySchema),
    takenStatuses: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    givenStatuses: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
  })
  .partial();

export const StatusIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StatusIncludeSchema
);

export const StatusProjectionSchema = z.union([
  z.object({ omit: StatusOmitFieldsSchemaJson }),
  z.object({ select: StatusSelectFieldsSchemaJson }),
  z.object({ include: StatusIncludeSchemaJson }),
  z.object({}),
]);

export const PointCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    point: PZ.Scalar.int(),
    description: PZ.Scalar.description().optional(),
  })
);

export const PointUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  point: PZ.Scalar.int().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const PointOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    point: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PointOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const PointWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointWhereSchema
);

export const PointSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    point: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    takenPointes: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
    givenPointes: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const PointSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointSelectFieldsSchema
);

export const PointOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    point: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'name', 'point', 'description'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PointOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointOmitFieldsSchema
);

export const PointIncludeSchema = z
  .object({
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    takenPointes: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
    givenPointes: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const PointIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointIncludeSchema
);

export const PointProjectionSchema = z.union([
  z.object({ omit: PointOmitFieldsSchemaJson }),
  z.object({ select: PointSelectFieldsSchemaJson }),
  z.object({ include: PointIncludeSchemaJson }),
  z.object({}),
]);

export const TaskCreateSchema = z.preprocess(
  PZ.slugTransformer('title'),
  z.object({
    sprintId: PZ.Scalar.id().optional(),
    createdById: PZ.Scalar.id(),
    priorityId: PZ.Scalar.id().optional(),
    pointId: PZ.Scalar.id(),
    statusId: PZ.Scalar.id().optional(),
    parentId: PZ.Scalar.id().optional(),
    title: PZ.Scalar.string(),
    slug: PZ.Scalar.slug().optional(),
    description: PZ.Scalar.description().optional(),
    due: PZ.Scalar.datetime().optional(),
    resolvedAt: PZ.Scalar.datetime().optional(),
  })
);

export const TaskUpdateSchema = z.object({
  sprintId: PZ.Scalar.id().optional().optional(),
  createdById: PZ.Scalar.id().optional(),
  priorityId: PZ.Scalar.id().optional().optional(),
  pointId: PZ.Scalar.id().optional(),
  statusId: PZ.Scalar.id().optional().optional(),
  parentId: PZ.Scalar.id().optional().optional(),
  title: PZ.Scalar.string().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
  due: PZ.Scalar.datetime().optional().optional(),
  resolvedAt: PZ.Scalar.datetime().optional().optional(),
});

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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TaskOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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

export const TaskWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskWhereSchema
);

export const TaskSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sprintId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    priorityId: PZ.Scalar.bool(),
    pointId: PZ.Scalar.bool(),
    statusId: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    due: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
    comments: PZ.Scalar.bool().or(CommentOwnQuerySchema),
    parent: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    assignments: PZ.Scalar.bool().or(AssignmentOwnQuerySchema),
    tags: PZ.Scalar.bool().or(TaskTagOwnQuerySchema),
    categories: PZ.Scalar.bool().or(TaskCategoryOwnQuerySchema),
    point: PZ.Scalar.bool().or(PointOwnQueryOneSchema),
    priority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
    status: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
    sprint: PZ.Scalar.bool().or(SprintOwnQueryOneSchema),
    assignmentHistory: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    statusHistory: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    priorityHistory: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    pointHistory: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const TaskSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskSelectFieldsSchema
);

export const TaskOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    sprintId: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    priorityId: PZ.Scalar.bool(),
    pointId: PZ.Scalar.bool(),
    statusId: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    due: PZ.Scalar.bool(),
    resolvedAt: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
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
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TaskOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskOmitFieldsSchema
);

export const TaskIncludeSchema = z
  .object({
    comments: PZ.Scalar.bool().or(CommentOwnQuerySchema),
    parent: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    tasks: PZ.Scalar.bool().or(TaskOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    assignments: PZ.Scalar.bool().or(AssignmentOwnQuerySchema),
    tags: PZ.Scalar.bool().or(TaskTagOwnQuerySchema),
    categories: PZ.Scalar.bool().or(TaskCategoryOwnQuerySchema),
    point: PZ.Scalar.bool().or(PointOwnQueryOneSchema),
    priority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
    status: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
    sprint: PZ.Scalar.bool().or(SprintOwnQueryOneSchema),
    assignmentHistory: PZ.Scalar.bool().or(AssignmentHistoryOwnQuerySchema),
    statusHistory: PZ.Scalar.bool().or(StatusHistoryOwnQuerySchema),
    priorityHistory: PZ.Scalar.bool().or(PriorityHistoryOwnQuerySchema),
    pointHistory: PZ.Scalar.bool().or(PointHistoryOwnQuerySchema),
  })
  .partial();

export const TaskIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskIncludeSchema
);

export const TaskProjectionSchema = z.union([
  z.object({ omit: TaskOmitFieldsSchemaJson }),
  z.object({ select: TaskSelectFieldsSchemaJson }),
  z.object({ include: TaskIncludeSchemaJson }),
  z.object({}),
]);

export const AssignmentHistoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    createdById: PZ.Scalar.id(),
    projectId: PZ.Scalar.id(),
    taskId: PZ.Scalar.id(),
    oldUserId: PZ.Scalar.id(),
    newUserId: PZ.Scalar.id(),
  })
);

export const AssignmentHistoryUpdateSchema = z.object({
  createdById: PZ.Scalar.id().optional(),
  projectId: PZ.Scalar.id().optional(),
  taskId: PZ.Scalar.id().optional(),
  oldUserId: PZ.Scalar.id().optional(),
  newUserId: PZ.Scalar.id().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AssignmentHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AssignmentHistoryWhereSchema
);

export const AssignmentHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    oldUserId: PZ.Scalar.bool(),
    newUserId: PZ.Scalar.bool(),
    oldUser: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    newUser: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const AssignmentHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AssignmentHistorySelectFieldsSchema
);

export const AssignmentHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    oldUserId: PZ.Scalar.bool(),
    newUserId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdById',
        'createdAt',
        'updatedAt',
        'projectId',
        'taskId',
        'oldUserId',
        'newUserId',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AssignmentHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AssignmentHistoryOmitFieldsSchema
);

export const AssignmentHistoryIncludeSchema = z
  .object({
    oldUser: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    newUser: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const AssignmentHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AssignmentHistoryIncludeSchema
);

export const AssignmentHistoryProjectionSchema = z.union([
  z.object({ omit: AssignmentHistoryOmitFieldsSchemaJson }),
  z.object({ select: AssignmentHistorySelectFieldsSchemaJson }),
  z.object({ include: AssignmentHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const PriorityHistoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    createdById: PZ.Scalar.id(),
    projectId: PZ.Scalar.id(),
    taskId: PZ.Scalar.id(),
    oldPriorityId: PZ.Scalar.id().optional(),
    newPriorityId: PZ.Scalar.id(),
  })
);

export const PriorityHistoryUpdateSchema = z.object({
  createdById: PZ.Scalar.id().optional(),
  projectId: PZ.Scalar.id().optional(),
  taskId: PZ.Scalar.id().optional(),
  oldPriorityId: PZ.Scalar.id().optional().optional(),
  newPriorityId: PZ.Scalar.id().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PriorityHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  PriorityHistoryWhereSchema
);

export const PriorityHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    oldPriorityId: PZ.Scalar.bool(),
    newPriorityId: PZ.Scalar.bool(),
    oldPriority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
    newPriority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PriorityHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriorityHistorySelectFieldsSchema
);

export const PriorityHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    oldPriorityId: PZ.Scalar.bool(),
    newPriorityId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdById',
        'createdAt',
        'updatedAt',
        'projectId',
        'taskId',
        'oldPriorityId',
        'newPriorityId',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PriorityHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriorityHistoryOmitFieldsSchema
);

export const PriorityHistoryIncludeSchema = z
  .object({
    oldPriority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
    newPriority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PriorityHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PriorityHistoryIncludeSchema
);

export const PriorityHistoryProjectionSchema = z.union([
  z.object({ omit: PriorityHistoryOmitFieldsSchemaJson }),
  z.object({ select: PriorityHistorySelectFieldsSchemaJson }),
  z.object({ include: PriorityHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const StatusHistoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    createdById: PZ.Scalar.id(),
    oldStatusId: PZ.Scalar.id().optional(),
    newStatusId: PZ.Scalar.id(),
    projectId: PZ.Scalar.id(),
    taskId: PZ.Scalar.id(),
  })
);

export const StatusHistoryUpdateSchema = z.object({
  createdById: PZ.Scalar.id().optional(),
  oldStatusId: PZ.Scalar.id().optional().optional(),
  newStatusId: PZ.Scalar.id().optional(),
  projectId: PZ.Scalar.id().optional(),
  taskId: PZ.Scalar.id().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const StatusHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  StatusHistoryWhereSchema
);

export const StatusHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldStatusId: PZ.Scalar.bool(),
    newStatusId: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    oldStatus: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
    newStatus: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const StatusHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StatusHistorySelectFieldsSchema
);

export const StatusHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldStatusId: PZ.Scalar.bool(),
    newStatusId: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'createdById',
        'oldStatusId',
        'newStatusId',
        'projectId',
        'taskId',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const StatusHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StatusHistoryOmitFieldsSchema
);

export const StatusHistoryIncludeSchema = z
  .object({
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    oldStatus: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
    newStatus: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const StatusHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StatusHistoryIncludeSchema
);

export const StatusHistoryProjectionSchema = z.union([
  z.object({ omit: StatusHistoryOmitFieldsSchemaJson }),
  z.object({ select: StatusHistorySelectFieldsSchemaJson }),
  z.object({ include: StatusHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const PointHistoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    createdById: PZ.Scalar.id(),
    oldPointId: PZ.Scalar.id().optional(),
    newPointId: PZ.Scalar.id(),
    projectId: PZ.Scalar.id(),
    taskId: PZ.Scalar.id(),
  })
);

export const PointHistoryUpdateSchema = z.object({
  createdById: PZ.Scalar.id().optional(),
  oldPointId: PZ.Scalar.id().optional().optional(),
  newPointId: PZ.Scalar.id().optional(),
  projectId: PZ.Scalar.id().optional(),
  taskId: PZ.Scalar.id().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PointHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  PointHistoryWhereSchema
);

export const PointHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldPointId: PZ.Scalar.bool(),
    newPointId: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    oldPoint: PZ.Scalar.bool().or(PointOwnQueryOneSchema),
    newPoint: PZ.Scalar.bool().or(PointOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PointHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointHistorySelectFieldsSchema
);

export const PointHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldPointId: PZ.Scalar.bool(),
    newPointId: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'createdById',
        'oldPointId',
        'newPointId',
        'projectId',
        'taskId',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PointHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointHistoryOmitFieldsSchema
);

export const PointHistoryIncludeSchema = z
  .object({
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    oldPoint: PZ.Scalar.bool().or(PointOwnQueryOneSchema),
    newPoint: PZ.Scalar.bool().or(PointOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const PointHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PointHistoryIncludeSchema
);

export const PointHistoryProjectionSchema = z.union([
  z.object({ omit: PointHistoryOmitFieldsSchemaJson }),
  z.object({ select: PointHistorySelectFieldsSchemaJson }),
  z.object({ include: PointHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const TeamHistoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    createdById: PZ.Scalar.id(),
    oldTeamId: PZ.Scalar.id().optional(),
    newTeamId: PZ.Scalar.id(),
  })
);

export const TeamHistoryUpdateSchema = z.object({
  createdById: PZ.Scalar.id().optional(),
  oldTeamId: PZ.Scalar.id().optional().optional(),
  newTeamId: PZ.Scalar.id().optional(),
});

export const TeamHistoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    createdById: PZ.OrderDirectionSchema,
    oldTeamId: PZ.OrderDirectionSchema,
    newTeamId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TeamHistoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  TeamHistoryWhereSchema
);

export const TeamHistorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldTeamId: PZ.Scalar.bool(),
    newTeamId: PZ.Scalar.bool(),
    oldTeam: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    newTeam: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
  })
  .partial();

export const TeamHistorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamHistorySelectFieldsSchema
);

export const TeamHistoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    oldTeamId: PZ.Scalar.bool(),
    newTeamId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'createdAt', 'createdById', 'oldTeamId', 'newTeamId'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TeamHistoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamHistoryOmitFieldsSchema
);

export const TeamHistoryIncludeSchema = z
  .object({
    oldTeam: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    newTeam: PZ.Scalar.bool().or(TeamOwnQueryOneSchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
  })
  .partial();

export const TeamHistoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TeamHistoryIncludeSchema
);

export const TeamHistoryProjectionSchema = z.union([
  z.object({ omit: TeamHistoryOmitFieldsSchemaJson }),
  z.object({ select: TeamHistorySelectFieldsSchemaJson }),
  z.object({ include: TeamHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const TaskTagCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    taskId: PZ.Scalar.id(),
    tagId: PZ.Scalar.id(),
  })
);

export const TaskTagUpdateSchema = z.object({
  taskId: PZ.Scalar.id().optional(),
  tagId: PZ.Scalar.id().optional(),
});

export const TaskTagOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
    tagId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TaskTagOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  TaskTagWhereSchema
);

export const TaskTagSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    tagId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    tag: PZ.Scalar.bool().or(TagOwnQueryOneSchema),
  })
  .partial();

export const TaskTagSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskTagSelectFieldsSchema
);

export const TaskTagOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    tagId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'taskId', 'tagId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TaskTagOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskTagOmitFieldsSchema
);

export const TaskTagIncludeSchema = z
  .object({
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    tag: PZ.Scalar.bool().or(TagOwnQueryOneSchema),
  })
  .partial();

export const TaskTagIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskTagIncludeSchema
);

export const TaskTagProjectionSchema = z.union([
  z.object({ omit: TaskTagOmitFieldsSchemaJson }),
  z.object({ select: TaskTagSelectFieldsSchemaJson }),
  z.object({ include: TaskTagIncludeSchemaJson }),
  z.object({}),
]);

export const TaskCategoryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    categoryId: PZ.Scalar.id(),
    taskId: PZ.Scalar.id(),
  })
);

export const TaskCategoryUpdateSchema = z.object({
  categoryId: PZ.Scalar.id().optional(),
  taskId: PZ.Scalar.id().optional(),
});

export const TaskCategoryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    categoryId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TaskCategoryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  TaskCategoryWhereSchema
);

export const TaskCategorySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const TaskCategorySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskCategorySelectFieldsSchema
);

export const TaskCategoryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    categoryId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'categoryId', 'taskId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TaskCategoryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskCategoryOmitFieldsSchema
);

export const TaskCategoryIncludeSchema = z
  .object({
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    category: PZ.Scalar.bool().or(CategoryOwnQueryOneSchema),
  })
  .partial();

export const TaskCategoryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TaskCategoryIncludeSchema
);

export const TaskCategoryProjectionSchema = z.union([
  z.object({ omit: TaskCategoryOmitFieldsSchemaJson }),
  z.object({ select: TaskCategorySelectFieldsSchemaJson }),
  z.object({ include: TaskCategoryIncludeSchemaJson }),
  z.object({}),
]);

export const AssignmentCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    assigneeId: PZ.Scalar.id(),
    taskId: PZ.Scalar.id(),
  })
);

export const AssignmentUpdateSchema = z.object({
  assigneeId: PZ.Scalar.id().optional(),
  taskId: PZ.Scalar.id().optional(),
});

export const AssignmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    createdAt: PZ.OrderDirectionSchema,
    updatedAt: PZ.OrderDirectionSchema,
    assigneeId: PZ.OrderDirectionSchema,
    taskId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AssignmentOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  AssignmentWhereSchema
);

export const AssignmentSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    assigneeId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    assignee: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
  })
  .partial();

export const AssignmentSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AssignmentSelectFieldsSchema
);

export const AssignmentOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    assigneeId: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'createdAt', 'updatedAt', 'assigneeId', 'taskId'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AssignmentOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AssignmentOmitFieldsSchema
);

export const AssignmentIncludeSchema = z
  .object({
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
    assignee: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
  })
  .partial();

export const AssignmentIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AssignmentIncludeSchema
);

export const AssignmentProjectionSchema = z.union([
  z.object({ omit: AssignmentOmitFieldsSchemaJson }),
  z.object({ select: AssignmentSelectFieldsSchemaJson }),
  z.object({ include: AssignmentIncludeSchemaJson }),
  z.object({}),
]);

export const CommentCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    parentId: PZ.Scalar.id().optional(),
    createdById: PZ.Scalar.id(),
    taskId: PZ.Scalar.id(),
    comment: PZ.Scalar.string(),
  })
);

export const CommentUpdateSchema = z.object({
  parentId: PZ.Scalar.id().optional().optional(),
  createdById: PZ.Scalar.id().optional(),
  taskId: PZ.Scalar.id().optional(),
  comment: PZ.Scalar.string().optional(),
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
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CommentOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  CommentWhereSchema
);

export const CommentSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    comment: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool().or(CommentOwnQueryOneSchema),
    comments: PZ.Scalar.bool().or(CommentOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
  })
  .partial();

export const CommentSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CommentSelectFieldsSchema
);

export const CommentOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    createdAt: PZ.Scalar.bool(),
    updatedAt: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    createdById: PZ.Scalar.bool(),
    taskId: PZ.Scalar.bool(),
    comment: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'createdAt',
        'updatedAt',
        'parentId',
        'createdById',
        'taskId',
        'comment',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CommentOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CommentOmitFieldsSchema
);

export const CommentIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool().or(CommentOwnQueryOneSchema),
    comments: PZ.Scalar.bool().or(CommentOwnQuerySchema),
    createdBy: PZ.Scalar.bool().or(UserOwnQueryOneSchema),
    task: PZ.Scalar.bool().or(TaskOwnQueryOneSchema),
  })
  .partial();

export const CommentIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CommentIncludeSchema
);

export const CommentProjectionSchema = z.union([
  z.object({ omit: CommentOmitFieldsSchemaJson }),
  z.object({ select: CommentSelectFieldsSchemaJson }),
  z.object({ include: CommentIncludeSchemaJson }),
  z.object({}),
]);

export const ProjectTaskTagCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    projectId: PZ.Scalar.id(),
    tagId: PZ.Scalar.id(),
  })
);

export const ProjectTaskTagUpdateSchema = z.object({
  projectId: PZ.Scalar.id().optional(),
  tagId: PZ.Scalar.id().optional(),
});

export const ProjectTaskTagOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    tagId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ProjectTaskTagOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProjectTaskTagWhereSchema
);

export const ProjectTaskTagSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    tagId: PZ.Scalar.bool(),
    tag: PZ.Scalar.bool().or(TagOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskTagSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskTagSelectFieldsSchema
);

export const ProjectTaskTagOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    tagId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'projectId', 'tagId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ProjectTaskTagOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskTagOmitFieldsSchema
);

export const ProjectTaskTagIncludeSchema = z
  .object({
    tag: PZ.Scalar.bool().or(TagOwnQueryOneSchema),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskTagIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskTagIncludeSchema
);

export const ProjectTaskTagProjectionSchema = z.union([
  z.object({ omit: ProjectTaskTagOmitFieldsSchemaJson }),
  z.object({ select: ProjectTaskTagSelectFieldsSchemaJson }),
  z.object({ include: ProjectTaskTagIncludeSchemaJson }),
  z.object({}),
]);

export const ProjectTaskStatusCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    projectId: PZ.Scalar.id(),
    statusId: PZ.Scalar.id(),
  })
);

export const ProjectTaskStatusUpdateSchema = z.object({
  projectId: PZ.Scalar.id().optional(),
  statusId: PZ.Scalar.id().optional(),
});

export const ProjectTaskStatusOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    statusId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ProjectTaskStatusOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProjectTaskStatusWhereSchema
);

export const ProjectTaskStatusSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    statusId: PZ.Scalar.bool(),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    status: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskStatusSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskStatusSelectFieldsSchema
);

export const ProjectTaskStatusOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    statusId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'projectId', 'statusId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ProjectTaskStatusOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskStatusOmitFieldsSchema
);

export const ProjectTaskStatusIncludeSchema = z
  .object({
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    status: PZ.Scalar.bool().or(StatusOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskStatusIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskStatusIncludeSchema
);

export const ProjectTaskStatusProjectionSchema = z.union([
  z.object({ omit: ProjectTaskStatusOmitFieldsSchemaJson }),
  z.object({ select: ProjectTaskStatusSelectFieldsSchemaJson }),
  z.object({ include: ProjectTaskStatusIncludeSchemaJson }),
  z.object({}),
]);

export const ProjectTaskPriorityCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    projectId: PZ.Scalar.id(),
    priorityId: PZ.Scalar.id(),
  })
);

export const ProjectTaskPriorityUpdateSchema = z.object({
  projectId: PZ.Scalar.id().optional(),
  priorityId: PZ.Scalar.id().optional(),
});

export const ProjectTaskPriorityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    projectId: PZ.OrderDirectionSchema,
    priorityId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ProjectTaskPriorityOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
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
  PZ.jsonPreprocessor,
  ProjectTaskPriorityWhereSchema
);

export const ProjectTaskPrioritySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    priorityId: PZ.Scalar.bool(),
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    priority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskPrioritySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskPrioritySelectFieldsSchema
);

export const ProjectTaskPriorityOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    projectId: PZ.Scalar.bool(),
    priorityId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'projectId', 'priorityId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ProjectTaskPriorityOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskPriorityOmitFieldsSchema
);

export const ProjectTaskPriorityIncludeSchema = z
  .object({
    project: PZ.Scalar.bool().or(ProjectOwnQueryOneSchema),
    priority: PZ.Scalar.bool().or(PriorityOwnQueryOneSchema),
  })
  .partial();

export const ProjectTaskPriorityIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ProjectTaskPriorityIncludeSchema
);

export const ProjectTaskPriorityProjectionSchema = z.union([
  z.object({ omit: ProjectTaskPriorityOmitFieldsSchemaJson }),
  z.object({ select: ProjectTaskPrioritySelectFieldsSchemaJson }),
  z.object({ include: ProjectTaskPriorityIncludeSchemaJson }),
  z.object({}),
]);

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

export type UserOmitFields = z.infer<typeof UserOmitFieldsSchema>;

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

export type ProjectOmitFields = z.infer<typeof ProjectOmitFieldsSchema>;

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

export type TagOmitFields = z.infer<typeof TagOmitFieldsSchema>;

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

export type CategoryOmitFields = z.infer<typeof CategoryOmitFieldsSchema>;

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

export type SprintOmitFields = z.infer<typeof SprintOmitFieldsSchema>;

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

export type PriorityOmitFields = z.infer<typeof PriorityOmitFieldsSchema>;

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

export type StatusOmitFields = z.infer<typeof StatusOmitFieldsSchema>;

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

export type PointOmitFields = z.infer<typeof PointOmitFieldsSchema>;

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

export type TaskOmitFields = z.infer<typeof TaskOmitFieldsSchema>;

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

export type AssignmentHistoryOmitFields = z.infer<
  typeof AssignmentHistoryOmitFieldsSchema
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

export type PriorityHistoryOmitFields = z.infer<
  typeof PriorityHistoryOmitFieldsSchema
>;

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

export type StatusHistoryOmitFields = z.infer<
  typeof StatusHistoryOmitFieldsSchema
>;

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

export type PointHistoryOmitFields = z.infer<
  typeof PointHistoryOmitFieldsSchema
>;

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

export type TeamHistoryOmitFields = z.infer<typeof TeamHistoryOmitFieldsSchema>;

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

export type TaskTagOmitFields = z.infer<typeof TaskTagOmitFieldsSchema>;

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

export type TaskCategoryOmitFields = z.infer<
  typeof TaskCategoryOmitFieldsSchema
>;

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

export type AssignmentOmitFields = z.infer<typeof AssignmentOmitFieldsSchema>;

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

export type CommentOmitFields = z.infer<typeof CommentOmitFieldsSchema>;

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

export type ProjectTaskTagOmitFields = z.infer<
  typeof ProjectTaskTagOmitFieldsSchema
>;

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

export type ProjectTaskStatusOmitFields = z.infer<
  typeof ProjectTaskStatusOmitFieldsSchema
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

export type ProjectTaskPriorityOmitFields = z.infer<
  typeof ProjectTaskPriorityOmitFieldsSchema
>;

export type ProjectTaskPrioritySelectFields = z.infer<
  typeof ProjectTaskPrioritySelectFieldsSchema
>;

export type ProjectTaskPriorityProjection = z.infer<
  typeof ProjectTaskPriorityProjectionSchema
>;
