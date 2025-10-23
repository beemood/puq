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

export const UserDistinctSchema = z
  .enum(["id", "uuid", "displayName", "slug", "title"])
  .array()
  .optional();

export const TeamDistinctSchema = z
  .enum(["id", "name", "slug", "description"])
  .array()
  .optional();

export const TeamManagerDistinctSchema = z
  .enum(["id", "managerId", "teamId"])
  .array()
  .optional();

export const TeamMemberDistinctSchema = z
  .enum(["id", "teamId", "memberId"])
  .array()
  .optional();

export const ProjectDistinctSchema = z
  .enum([
    "id",
    "createdById",
    "parentId",
    "name",
    "slug",
    "description",
    "startDate",
    "dueDate",
    "endDate",
  ])
  .array()
  .optional();

export const TagDistinctSchema = z
  .enum(["id", "name", "isDefault"])
  .array()
  .optional();

export const CategoryDistinctSchema = z
  .enum(["id", "parentId", "name", "description", "isDefault"])
  .array()
  .optional();

export const SprintDistinctSchema = z
  .enum(["id", "createdById", "projectId", "name", "slug", "description"])
  .array()
  .optional();

export const PriorityDistinctSchema = z
  .enum(["id", "name", "description", "isDefault"])
  .array()
  .optional();

export const StatusDistinctSchema = z
  .enum(["id", "name", "description", "isDefault"])
  .array()
  .optional();

export const PointDistinctSchema = z
  .enum(["id", "name", "point", "description"])
  .array()
  .optional();

export const TaskDistinctSchema = z
  .enum([
    "id",
    "sprintId",
    "createdAt",
    "updatedAt",
    "createdById",
    "priorityId",
    "pointId",
    "statusId",
    "parentId",
    "title",
    "slug",
    "description",
    "due",
    "resolvedAt",
  ])
  .array()
  .optional();

export const AssignmentHistoryDistinctSchema = z
  .enum([
    "id",
    "createdById",
    "createdAt",
    "updatedAt",
    "projectId",
    "taskId",
    "oldUserId",
    "newUserId",
  ])
  .array()
  .optional();

export const PriorityHistoryDistinctSchema = z
  .enum([
    "id",
    "createdById",
    "createdAt",
    "updatedAt",
    "projectId",
    "taskId",
    "oldPriorityId",
    "newPriorityId",
  ])
  .array()
  .optional();

export const StatusHistoryDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "createdById",
    "oldStatusId",
    "newStatusId",
    "projectId",
    "taskId",
  ])
  .array()
  .optional();

export const PointHistoryDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "createdById",
    "oldPointId",
    "newPointId",
    "projectId",
    "taskId",
  ])
  .array()
  .optional();

export const TeamHistoryDistinctSchema = z
  .enum(["id", "createdAt", "createdById", "oldTeamId", "newTeamId"])
  .array()
  .optional();

export const TaskTagDistinctSchema = z
  .enum(["id", "taskId", "tagId"])
  .array()
  .optional();

export const TaskCategoryDistinctSchema = z
  .enum(["id", "categoryId", "taskId"])
  .array()
  .optional();

export const AssignmentDistinctSchema = z
  .enum(["id", "createdAt", "updatedAt", "assigneeId", "taskId"])
  .array()
  .optional();

export const CommentDistinctSchema = z
  .enum([
    "id",
    "createdAt",
    "updatedAt",
    "parentId",
    "createdById",
    "taskId",
    "comment",
  ])
  .array()
  .optional();

export const ProjectTaskTagDistinctSchema = z
  .enum(["id", "projectId", "tagId"])
  .array()
  .optional();

export const ProjectTaskStatusDistinctSchema = z
  .enum(["id", "projectId", "statusId"])
  .array()
  .optional();

export const ProjectTaskPriorityDistinctSchema = z
  .enum(["id", "projectId", "priorityId"])
  .array()
  .optional();

export const UserOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  displayName: _strFilter.optional(),
  slug: _strFilter.optional(),
  title: _strFilter.optional(),
});

export const TeamOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const TeamManagerOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  managerId: _intFilter.optional(),
  teamId: _intFilter.optional(),
});

export const TeamMemberOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  teamId: _intFilter.optional(),
  memberId: _intFilter.optional(),
});

export const ProjectOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  startDate: _dateFilter.optional(),
  dueDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
});

export const TagOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
});

export const CategoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
});

export const SprintOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  projectId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const PriorityOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
});

export const StatusOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
});

export const PointOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  point: _intFilter.optional(),
  description: _strFilter.optional(),
});

export const TaskOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  sprintId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  priorityId: _intFilter.optional(),
  pointId: _intFilter.optional(),
  statusId: _intFilter.optional(),
  parentId: _intFilter.optional(),
  title: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  due: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
});

export const AssignmentHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  oldUserId: _intFilter.optional(),
  newUserId: _intFilter.optional(),
});

export const PriorityHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  oldPriorityId: _intFilter.optional(),
  newPriorityId: _intFilter.optional(),
});

export const StatusHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  oldStatusId: _intFilter.optional(),
  newStatusId: _intFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
});

export const PointHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  oldPointId: _intFilter.optional(),
  newPointId: _intFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
});

export const TeamHistoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  oldTeamId: _intFilter.optional(),
  newTeamId: _intFilter.optional(),
});

export const TaskTagOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  taskId: _intFilter.optional(),
  tagId: _intFilter.optional(),
});

export const TaskCategoryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  categoryId: _intFilter.optional(),
  taskId: _intFilter.optional(),
});

export const AssignmentOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  assigneeId: _intFilter.optional(),
  taskId: _intFilter.optional(),
});

export const CommentOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  parentId: _intFilter.optional(),
  createdById: _intFilter.optional(),
  taskId: _intFilter.optional(),
  comment: _strFilter.optional(),
});

export const ProjectTaskTagOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  projectId: _intFilter.optional(),
  tagId: _intFilter.optional(),
});

export const ProjectTaskStatusOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  projectId: _intFilter.optional(),
  statusId: _intFilter.optional(),
});

export const ProjectTaskPriorityOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  projectId: _intFilter.optional(),
  priorityId: _intFilter.optional(),
});

export const UserOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnWhereSchema
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

export const ProjectOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectOwnWhereSchema
);

export const TagOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnWhereSchema
);

export const CategoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnWhereSchema
);

export const SprintOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintOwnWhereSchema
);

export const PriorityOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityOwnWhereSchema
);

export const StatusOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusOwnWhereSchema
);

export const PointOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointOwnWhereSchema
);

export const TaskOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskOwnWhereSchema
);

export const AssignmentHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryOwnWhereSchema
);

export const PriorityHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryOwnWhereSchema
);

export const StatusHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryOwnWhereSchema
);

export const PointHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryOwnWhereSchema
);

export const TeamHistoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryOwnWhereSchema
);

export const TaskTagOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagOwnWhereSchema
);

export const TaskCategoryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryOwnWhereSchema
);

export const AssignmentOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentOwnWhereSchema
);

export const CommentOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentOwnWhereSchema
);

export const ProjectTaskTagOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagOwnWhereSchema
);

export const ProjectTaskStatusOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusOwnWhereSchema
);

export const ProjectTaskPriorityOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityOwnWhereSchema
);

export const UserWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  displayName: _strFilter.optional(),
  slug: _strFilter.optional(),
  title: _strFilter.optional(),
  assignments: z
    .object({
      every: AssignmentOwnWhereSchema.optional(),
      some: AssignmentOwnWhereSchema.optional(),
      none: AssignmentOwnWhereSchema.optional(),
    })
    .optional(),
  managedTeams: z
    .object({
      every: TeamManagerOwnWhereSchema.optional(),
      some: TeamManagerOwnWhereSchema.optional(),
      none: TeamManagerOwnWhereSchema.optional(),
    })
    .optional(),
  memberships: z
    .object({
      every: TeamMemberOwnWhereSchema.optional(),
      some: TeamMemberOwnWhereSchema.optional(),
      none: TeamMemberOwnWhereSchema.optional(),
    })
    .optional(),
  createdProjects: z
    .object({
      every: ProjectOwnWhereSchema.optional(),
      some: ProjectOwnWhereSchema.optional(),
      none: ProjectOwnWhereSchema.optional(),
    })
    .optional(),
  createdSprints: z
    .object({
      every: SprintOwnWhereSchema.optional(),
      some: SprintOwnWhereSchema.optional(),
      none: SprintOwnWhereSchema.optional(),
    })
    .optional(),
  createdTasks: z
    .object({
      every: TaskOwnWhereSchema.optional(),
      some: TaskOwnWhereSchema.optional(),
      none: TaskOwnWhereSchema.optional(),
    })
    .optional(),
  createdComments: z
    .object({
      every: CommentOwnWhereSchema.optional(),
      some: CommentOwnWhereSchema.optional(),
      none: CommentOwnWhereSchema.optional(),
    })
    .optional(),
  takenAssignments: z
    .object({
      every: AssignmentHistoryOwnWhereSchema.optional(),
      some: AssignmentHistoryOwnWhereSchema.optional(),
      none: AssignmentHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  givenAssignments: z
    .object({
      every: AssignmentHistoryOwnWhereSchema.optional(),
      some: AssignmentHistoryOwnWhereSchema.optional(),
      none: AssignmentHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  changedAssignments: z
    .object({
      every: AssignmentHistoryOwnWhereSchema.optional(),
      some: AssignmentHistoryOwnWhereSchema.optional(),
      none: AssignmentHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  changedPriorities: z
    .object({
      every: PriorityHistoryOwnWhereSchema.optional(),
      some: PriorityHistoryOwnWhereSchema.optional(),
      none: PriorityHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  changedStatuses: z
    .object({
      every: StatusHistoryOwnWhereSchema.optional(),
      some: StatusHistoryOwnWhereSchema.optional(),
      none: StatusHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  changedPoints: z
    .object({
      every: PointHistoryOwnWhereSchema.optional(),
      some: PointHistoryOwnWhereSchema.optional(),
      none: PointHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  changedTeams: z
    .object({
      every: TeamHistoryOwnWhereSchema.optional(),
      some: TeamHistoryOwnWhereSchema.optional(),
      none: TeamHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TeamWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  managers: z
    .object({
      every: TeamManagerOwnWhereSchema.optional(),
      some: TeamManagerOwnWhereSchema.optional(),
      none: TeamManagerOwnWhereSchema.optional(),
    })
    .optional(),
  members: z
    .object({
      every: TeamMemberOwnWhereSchema.optional(),
      some: TeamMemberOwnWhereSchema.optional(),
      none: TeamMemberOwnWhereSchema.optional(),
    })
    .optional(),
  takenTeams: z
    .object({
      every: TeamHistoryOwnWhereSchema.optional(),
      some: TeamHistoryOwnWhereSchema.optional(),
      none: TeamHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  givenTeams: z
    .object({
      every: TeamHistoryOwnWhereSchema.optional(),
      some: TeamHistoryOwnWhereSchema.optional(),
      none: TeamHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TeamManagerWhereSchema = z.object({
  id: _intFilter.optional(),
  managerId: _intFilter.optional(),
  teamId: _intFilter.optional(),
  manager: UserOwnWhereSchema.optional(),
  team: TeamOwnWhereSchema.optional(),
});

export const TeamMemberWhereSchema = z.object({
  id: _intFilter.optional(),
  teamId: _intFilter.optional(),
  memberId: _intFilter.optional(),
  team: TeamOwnWhereSchema.optional(),
  member: UserOwnWhereSchema.optional(),
});

export const ProjectWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  parentId: _intFilter.optional(),
  parent: ProjectOwnWhereSchema.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  startDate: _dateFilter.optional(),
  dueDate: _dateFilter.optional(),
  endDate: _dateFilter.optional(),
  sprints: z
    .object({
      every: SprintOwnWhereSchema.optional(),
      some: SprintOwnWhereSchema.optional(),
      none: SprintOwnWhereSchema.optional(),
    })
    .optional(),
  createdBy: UserOwnWhereSchema.optional(),
  tags: z
    .object({
      every: ProjectTaskTagOwnWhereSchema.optional(),
      some: ProjectTaskTagOwnWhereSchema.optional(),
      none: ProjectTaskTagOwnWhereSchema.optional(),
    })
    .optional(),
  statuses: z
    .object({
      every: ProjectTaskStatusOwnWhereSchema.optional(),
      some: ProjectTaskStatusOwnWhereSchema.optional(),
      none: ProjectTaskStatusOwnWhereSchema.optional(),
    })
    .optional(),
  priorities: z
    .object({
      every: ProjectTaskPriorityOwnWhereSchema.optional(),
      some: ProjectTaskPriorityOwnWhereSchema.optional(),
      none: ProjectTaskPriorityOwnWhereSchema.optional(),
    })
    .optional(),
  assignmentHistory: z
    .object({
      every: AssignmentHistoryOwnWhereSchema.optional(),
      some: AssignmentHistoryOwnWhereSchema.optional(),
      none: AssignmentHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  priorityHistory: z
    .object({
      every: PriorityHistoryOwnWhereSchema.optional(),
      some: PriorityHistoryOwnWhereSchema.optional(),
      none: PriorityHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  statusHistory: z
    .object({
      every: StatusHistoryOwnWhereSchema.optional(),
      some: StatusHistoryOwnWhereSchema.optional(),
      none: StatusHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  pointHistory: z
    .object({
      every: PointHistoryOwnWhereSchema.optional(),
      some: PointHistoryOwnWhereSchema.optional(),
      none: PointHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  projects: z
    .object({
      every: ProjectOwnWhereSchema.optional(),
      some: ProjectOwnWhereSchema.optional(),
      none: ProjectOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TagWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
  tasks: z
    .object({
      every: TaskTagOwnWhereSchema.optional(),
      some: TaskTagOwnWhereSchema.optional(),
      none: TaskTagOwnWhereSchema.optional(),
    })
    .optional(),
  projects: z
    .object({
      every: ProjectTaskTagOwnWhereSchema.optional(),
      some: ProjectTaskTagOwnWhereSchema.optional(),
      none: ProjectTaskTagOwnWhereSchema.optional(),
    })
    .optional(),
});

export const CategoryWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
  parent: CategoryOwnWhereSchema.optional(),
  categories: z
    .object({
      every: CategoryOwnWhereSchema.optional(),
      some: CategoryOwnWhereSchema.optional(),
      none: CategoryOwnWhereSchema.optional(),
    })
    .optional(),
  tasks: z
    .object({
      every: TaskCategoryOwnWhereSchema.optional(),
      some: TaskCategoryOwnWhereSchema.optional(),
      none: TaskCategoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const SprintWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  projectId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  project: ProjectOwnWhereSchema.optional(),
  tasks: z
    .object({
      every: TaskOwnWhereSchema.optional(),
      some: TaskOwnWhereSchema.optional(),
      none: TaskOwnWhereSchema.optional(),
    })
    .optional(),
  createdBy: UserOwnWhereSchema.optional(),
});

export const PriorityWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
  tasks: z
    .object({
      every: TaskOwnWhereSchema.optional(),
      some: TaskOwnWhereSchema.optional(),
      none: TaskOwnWhereSchema.optional(),
    })
    .optional(),
  projects: z
    .object({
      every: ProjectTaskPriorityOwnWhereSchema.optional(),
      some: ProjectTaskPriorityOwnWhereSchema.optional(),
      none: ProjectTaskPriorityOwnWhereSchema.optional(),
    })
    .optional(),
  takenPriorities: z
    .object({
      every: PriorityHistoryOwnWhereSchema.optional(),
      some: PriorityHistoryOwnWhereSchema.optional(),
      none: PriorityHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  givenPriorities: z
    .object({
      every: PriorityHistoryOwnWhereSchema.optional(),
      some: PriorityHistoryOwnWhereSchema.optional(),
      none: PriorityHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const StatusWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  description: _strFilter.optional(),
  isDefault: _boolFilter.optional(),
  tasks: z
    .object({
      every: TaskOwnWhereSchema.optional(),
      some: TaskOwnWhereSchema.optional(),
      none: TaskOwnWhereSchema.optional(),
    })
    .optional(),
  projects: z
    .object({
      every: ProjectTaskStatusOwnWhereSchema.optional(),
      some: ProjectTaskStatusOwnWhereSchema.optional(),
      none: ProjectTaskStatusOwnWhereSchema.optional(),
    })
    .optional(),
  takenStatuses: z
    .object({
      every: StatusHistoryOwnWhereSchema.optional(),
      some: StatusHistoryOwnWhereSchema.optional(),
      none: StatusHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  givenStatuses: z
    .object({
      every: StatusHistoryOwnWhereSchema.optional(),
      some: StatusHistoryOwnWhereSchema.optional(),
      none: StatusHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const PointWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  point: _intFilter.optional(),
  description: _strFilter.optional(),
  tasks: z
    .object({
      every: TaskOwnWhereSchema.optional(),
      some: TaskOwnWhereSchema.optional(),
      none: TaskOwnWhereSchema.optional(),
    })
    .optional(),
  takenPointes: z
    .object({
      every: PointHistoryOwnWhereSchema.optional(),
      some: PointHistoryOwnWhereSchema.optional(),
      none: PointHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  givenPointes: z
    .object({
      every: PointHistoryOwnWhereSchema.optional(),
      some: PointHistoryOwnWhereSchema.optional(),
      none: PointHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TaskWhereSchema = z.object({
  id: _intFilter.optional(),
  sprintId: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  priorityId: _intFilter.optional(),
  pointId: _intFilter.optional(),
  statusId: _intFilter.optional(),
  parentId: _intFilter.optional(),
  title: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  due: _dateFilter.optional(),
  resolvedAt: _dateFilter.optional(),
  comments: z
    .object({
      every: CommentOwnWhereSchema.optional(),
      some: CommentOwnWhereSchema.optional(),
      none: CommentOwnWhereSchema.optional(),
    })
    .optional(),
  parent: TaskOwnWhereSchema.optional(),
  tasks: z
    .object({
      every: TaskOwnWhereSchema.optional(),
      some: TaskOwnWhereSchema.optional(),
      none: TaskOwnWhereSchema.optional(),
    })
    .optional(),
  createdBy: UserOwnWhereSchema.optional(),
  assignments: z
    .object({
      every: AssignmentOwnWhereSchema.optional(),
      some: AssignmentOwnWhereSchema.optional(),
      none: AssignmentOwnWhereSchema.optional(),
    })
    .optional(),
  tags: z
    .object({
      every: TaskTagOwnWhereSchema.optional(),
      some: TaskTagOwnWhereSchema.optional(),
      none: TaskTagOwnWhereSchema.optional(),
    })
    .optional(),
  categories: z
    .object({
      every: TaskCategoryOwnWhereSchema.optional(),
      some: TaskCategoryOwnWhereSchema.optional(),
      none: TaskCategoryOwnWhereSchema.optional(),
    })
    .optional(),
  point: PointOwnWhereSchema.optional(),
  priority: PriorityOwnWhereSchema.optional(),
  status: StatusOwnWhereSchema.optional(),
  sprint: SprintOwnWhereSchema.optional(),
  assignmentHistory: z
    .object({
      every: AssignmentHistoryOwnWhereSchema.optional(),
      some: AssignmentHistoryOwnWhereSchema.optional(),
      none: AssignmentHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  statusHistory: z
    .object({
      every: StatusHistoryOwnWhereSchema.optional(),
      some: StatusHistoryOwnWhereSchema.optional(),
      none: StatusHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  priorityHistory: z
    .object({
      every: PriorityHistoryOwnWhereSchema.optional(),
      some: PriorityHistoryOwnWhereSchema.optional(),
      none: PriorityHistoryOwnWhereSchema.optional(),
    })
    .optional(),
  pointHistory: z
    .object({
      every: PointHistoryOwnWhereSchema.optional(),
      some: PointHistoryOwnWhereSchema.optional(),
      none: PointHistoryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const AssignmentHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  oldUserId: _intFilter.optional(),
  newUserId: _intFilter.optional(),
  oldUser: UserOwnWhereSchema.optional(),
  newUser: UserOwnWhereSchema.optional(),
  createdBy: UserOwnWhereSchema.optional(),
  task: TaskOwnWhereSchema.optional(),
  project: ProjectOwnWhereSchema.optional(),
});

export const PriorityHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  createdById: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  oldPriorityId: _intFilter.optional(),
  newPriorityId: _intFilter.optional(),
  oldPriority: PriorityOwnWhereSchema.optional(),
  newPriority: PriorityOwnWhereSchema.optional(),
  createdBy: UserOwnWhereSchema.optional(),
  task: TaskOwnWhereSchema.optional(),
  project: ProjectOwnWhereSchema.optional(),
});

export const StatusHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  oldStatusId: _intFilter.optional(),
  newStatusId: _intFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  task: TaskOwnWhereSchema.optional(),
  oldStatus: StatusOwnWhereSchema.optional(),
  newStatus: StatusOwnWhereSchema.optional(),
  createdBy: UserOwnWhereSchema.optional(),
  project: ProjectOwnWhereSchema.optional(),
});

export const PointHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  oldPointId: _intFilter.optional(),
  newPointId: _intFilter.optional(),
  projectId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  task: TaskOwnWhereSchema.optional(),
  oldPoint: PointOwnWhereSchema.optional(),
  newPoint: PointOwnWhereSchema.optional(),
  createdBy: UserOwnWhereSchema.optional(),
  project: ProjectOwnWhereSchema.optional(),
});

export const TeamHistoryWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  createdById: _intFilter.optional(),
  oldTeamId: _intFilter.optional(),
  newTeamId: _intFilter.optional(),
  oldTeam: TeamOwnWhereSchema.optional(),
  newTeam: TeamOwnWhereSchema.optional(),
  createdBy: UserOwnWhereSchema.optional(),
});

export const TaskTagWhereSchema = z.object({
  id: _intFilter.optional(),
  taskId: _intFilter.optional(),
  tagId: _intFilter.optional(),
  task: TaskOwnWhereSchema.optional(),
  tag: TagOwnWhereSchema.optional(),
});

export const TaskCategoryWhereSchema = z.object({
  id: _intFilter.optional(),
  categoryId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  task: TaskOwnWhereSchema.optional(),
  category: CategoryOwnWhereSchema.optional(),
});

export const AssignmentWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  assigneeId: _intFilter.optional(),
  taskId: _intFilter.optional(),
  task: TaskOwnWhereSchema.optional(),
  assignee: UserOwnWhereSchema.optional(),
});

export const CommentWhereSchema = z.object({
  id: _intFilter.optional(),
  createdAt: _dateFilter.optional(),
  updatedAt: _dateFilter.optional(),
  parentId: _intFilter.optional(),
  createdById: _intFilter.optional(),
  taskId: _intFilter.optional(),
  comment: _strFilter.optional(),
  parent: CommentOwnWhereSchema.optional(),
  comments: z
    .object({
      every: CommentOwnWhereSchema.optional(),
      some: CommentOwnWhereSchema.optional(),
      none: CommentOwnWhereSchema.optional(),
    })
    .optional(),
  createdBy: UserOwnWhereSchema.optional(),
  task: TaskOwnWhereSchema.optional(),
});

export const ProjectTaskTagWhereSchema = z.object({
  id: _intFilter.optional(),
  projectId: _intFilter.optional(),
  tagId: _intFilter.optional(),
  tag: TagOwnWhereSchema.optional(),
  project: ProjectOwnWhereSchema.optional(),
});

export const ProjectTaskStatusWhereSchema = z.object({
  id: _intFilter.optional(),
  projectId: _intFilter.optional(),
  statusId: _intFilter.optional(),
  project: ProjectOwnWhereSchema.optional(),
  status: StatusOwnWhereSchema.optional(),
});

export const ProjectTaskPriorityWhereSchema = z.object({
  id: _intFilter.optional(),
  projectId: _intFilter.optional(),
  priorityId: _intFilter.optional(),
  project: ProjectOwnWhereSchema.optional(),
  priority: PriorityOwnWhereSchema.optional(),
});

export const UserWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserWhereSchema
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

export const ProjectWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectWhereSchema
);

export const TagWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagWhereSchema
);

export const CategoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryWhereSchema
);

export const SprintWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintWhereSchema
);

export const PriorityWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityWhereSchema
);

export const StatusWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusWhereSchema
);

export const PointWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointWhereSchema
);

export const TaskWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskWhereSchema
);

export const AssignmentHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryWhereSchema
);

export const PriorityHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryWhereSchema
);

export const StatusHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryWhereSchema
);

export const PointHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryWhereSchema
);

export const TeamHistoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryWhereSchema
);

export const TaskTagWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagWhereSchema
);

export const TaskCategoryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryWhereSchema
);

export const AssignmentWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentWhereSchema
);

export const CommentWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentWhereSchema
);

export const ProjectTaskTagWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagWhereSchema
);

export const ProjectTaskStatusWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusWhereSchema
);

export const ProjectTaskPriorityWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityWhereSchema
);

export const UserOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  displayName: _direction,
  slug: _direction,
  title: _direction,
});

export const TeamOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
});

export const TeamManagerOwnOrderBySchema = z.object({
  id: _direction,
  managerId: _direction,
  teamId: _direction,
});

export const TeamMemberOwnOrderBySchema = z.object({
  id: _direction,
  teamId: _direction,
  memberId: _direction,
});

export const ProjectOwnOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  parentId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  startDate: _direction,
  dueDate: _direction,
  endDate: _direction,
});

export const TagOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  isDefault: _direction,
});

export const CategoryOwnOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  description: _direction,
  isDefault: _direction,
});

export const SprintOwnOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  projectId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
});

export const PriorityOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  isDefault: _direction,
});

export const StatusOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  isDefault: _direction,
});

export const PointOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  point: _direction,
  description: _direction,
});

export const TaskOwnOrderBySchema = z.object({
  id: _direction,
  sprintId: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  createdById: _direction,
  priorityId: _direction,
  pointId: _direction,
  statusId: _direction,
  parentId: _direction,
  title: _direction,
  slug: _direction,
  description: _direction,
  due: _direction,
  resolvedAt: _direction,
});

export const AssignmentHistoryOwnOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  projectId: _direction,
  taskId: _direction,
  oldUserId: _direction,
  newUserId: _direction,
});

export const PriorityHistoryOwnOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  projectId: _direction,
  taskId: _direction,
  oldPriorityId: _direction,
  newPriorityId: _direction,
});

export const StatusHistoryOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  createdById: _direction,
  oldStatusId: _direction,
  newStatusId: _direction,
  projectId: _direction,
  taskId: _direction,
});

export const PointHistoryOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  createdById: _direction,
  oldPointId: _direction,
  newPointId: _direction,
  projectId: _direction,
  taskId: _direction,
});

export const TeamHistoryOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  createdById: _direction,
  oldTeamId: _direction,
  newTeamId: _direction,
});

export const TaskTagOwnOrderBySchema = z.object({
  id: _direction,
  taskId: _direction,
  tagId: _direction,
});

export const TaskCategoryOwnOrderBySchema = z.object({
  id: _direction,
  categoryId: _direction,
  taskId: _direction,
});

export const AssignmentOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  assigneeId: _direction,
  taskId: _direction,
});

export const CommentOwnOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  parentId: _direction,
  createdById: _direction,
  taskId: _direction,
  comment: _direction,
});

export const ProjectTaskTagOwnOrderBySchema = z.object({
  id: _direction,
  projectId: _direction,
  tagId: _direction,
});

export const ProjectTaskStatusOwnOrderBySchema = z.object({
  id: _direction,
  projectId: _direction,
  statusId: _direction,
});

export const ProjectTaskPriorityOwnOrderBySchema = z.object({
  id: _direction,
  projectId: _direction,
  priorityId: _direction,
});

export const UserOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnOrderBySchema
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

export const ProjectOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectOwnOrderBySchema
);

export const TagOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnOrderBySchema
);

export const CategoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnOrderBySchema
);

export const SprintOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintOwnOrderBySchema
);

export const PriorityOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityOwnOrderBySchema
);

export const StatusOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusOwnOrderBySchema
);

export const PointOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointOwnOrderBySchema
);

export const TaskOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskOwnOrderBySchema
);

export const AssignmentHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryOwnOrderBySchema
);

export const PriorityHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryOwnOrderBySchema
);

export const StatusHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryOwnOrderBySchema
);

export const PointHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryOwnOrderBySchema
);

export const TeamHistoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryOwnOrderBySchema
);

export const TaskTagOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagOwnOrderBySchema
);

export const TaskCategoryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryOwnOrderBySchema
);

export const AssignmentOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentOwnOrderBySchema
);

export const CommentOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentOwnOrderBySchema
);

export const ProjectTaskTagOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagOwnOrderBySchema
);

export const ProjectTaskStatusOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusOwnOrderBySchema
);

export const ProjectTaskPriorityOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityOwnOrderBySchema
);

export const UserOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  displayName: _direction,
  slug: _direction,
  title: _direction,
  assignments: _orderByCount,
  managedTeams: _orderByCount,
  memberships: _orderByCount,
  createdProjects: _orderByCount,
  createdSprints: _orderByCount,
  createdTasks: _orderByCount,
  createdComments: _orderByCount,
  takenAssignments: _orderByCount,
  givenAssignments: _orderByCount,
  changedAssignments: _orderByCount,
  changedPriorities: _orderByCount,
  changedStatuses: _orderByCount,
  changedPoints: _orderByCount,
  changedTeams: _orderByCount,
});

export const TeamOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  managers: _orderByCount,
  members: _orderByCount,
  takenTeams: _orderByCount,
  givenTeams: _orderByCount,
});

export const TeamManagerOrderBySchema = z.object({
  id: _direction,
  managerId: _direction,
  teamId: _direction,
  manager: UserOwnOrderBySchema.optional(),
  team: TeamOwnOrderBySchema.optional(),
});

export const TeamMemberOrderBySchema = z.object({
  id: _direction,
  teamId: _direction,
  memberId: _direction,
  team: TeamOwnOrderBySchema.optional(),
  member: UserOwnOrderBySchema.optional(),
});

export const ProjectOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  parentId: _direction,
  parent: ProjectOwnOrderBySchema.optional(),
  name: _direction,
  slug: _direction,
  description: _direction,
  startDate: _direction,
  dueDate: _direction,
  endDate: _direction,
  sprints: _orderByCount,
  createdBy: UserOwnOrderBySchema.optional(),
  tags: _orderByCount,
  statuses: _orderByCount,
  priorities: _orderByCount,
  assignmentHistory: _orderByCount,
  priorityHistory: _orderByCount,
  statusHistory: _orderByCount,
  pointHistory: _orderByCount,
  projects: _orderByCount,
});

export const TagOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  isDefault: _direction,
  tasks: _orderByCount,
  projects: _orderByCount,
});

export const CategoryOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  description: _direction,
  isDefault: _direction,
  parent: CategoryOwnOrderBySchema.optional(),
  categories: _orderByCount,
  tasks: _orderByCount,
});

export const SprintOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  projectId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  project: ProjectOwnOrderBySchema.optional(),
  tasks: _orderByCount,
  createdBy: UserOwnOrderBySchema.optional(),
});

export const PriorityOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  isDefault: _direction,
  tasks: _orderByCount,
  projects: _orderByCount,
  takenPriorities: _orderByCount,
  givenPriorities: _orderByCount,
});

export const StatusOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  description: _direction,
  isDefault: _direction,
  tasks: _orderByCount,
  projects: _orderByCount,
  takenStatuses: _orderByCount,
  givenStatuses: _orderByCount,
});

export const PointOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  point: _direction,
  description: _direction,
  tasks: _orderByCount,
  takenPointes: _orderByCount,
  givenPointes: _orderByCount,
});

export const TaskOrderBySchema = z.object({
  id: _direction,
  sprintId: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  createdById: _direction,
  priorityId: _direction,
  pointId: _direction,
  statusId: _direction,
  parentId: _direction,
  title: _direction,
  slug: _direction,
  description: _direction,
  due: _direction,
  resolvedAt: _direction,
  comments: _orderByCount,
  parent: TaskOwnOrderBySchema.optional(),
  tasks: _orderByCount,
  createdBy: UserOwnOrderBySchema.optional(),
  assignments: _orderByCount,
  tags: _orderByCount,
  categories: _orderByCount,
  point: PointOwnOrderBySchema.optional(),
  priority: PriorityOwnOrderBySchema.optional(),
  status: StatusOwnOrderBySchema.optional(),
  sprint: SprintOwnOrderBySchema.optional(),
  assignmentHistory: _orderByCount,
  statusHistory: _orderByCount,
  priorityHistory: _orderByCount,
  pointHistory: _orderByCount,
});

export const AssignmentHistoryOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  projectId: _direction,
  taskId: _direction,
  oldUserId: _direction,
  newUserId: _direction,
  oldUser: UserOwnOrderBySchema.optional(),
  newUser: UserOwnOrderBySchema.optional(),
  createdBy: UserOwnOrderBySchema.optional(),
  task: TaskOwnOrderBySchema.optional(),
  project: ProjectOwnOrderBySchema.optional(),
});

export const PriorityHistoryOrderBySchema = z.object({
  id: _direction,
  createdById: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  projectId: _direction,
  taskId: _direction,
  oldPriorityId: _direction,
  newPriorityId: _direction,
  oldPriority: PriorityOwnOrderBySchema.optional(),
  newPriority: PriorityOwnOrderBySchema.optional(),
  createdBy: UserOwnOrderBySchema.optional(),
  task: TaskOwnOrderBySchema.optional(),
  project: ProjectOwnOrderBySchema.optional(),
});

export const StatusHistoryOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  createdById: _direction,
  oldStatusId: _direction,
  newStatusId: _direction,
  projectId: _direction,
  taskId: _direction,
  task: TaskOwnOrderBySchema.optional(),
  oldStatus: StatusOwnOrderBySchema.optional(),
  newStatus: StatusOwnOrderBySchema.optional(),
  createdBy: UserOwnOrderBySchema.optional(),
  project: ProjectOwnOrderBySchema.optional(),
});

export const PointHistoryOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  createdById: _direction,
  oldPointId: _direction,
  newPointId: _direction,
  projectId: _direction,
  taskId: _direction,
  task: TaskOwnOrderBySchema.optional(),
  oldPoint: PointOwnOrderBySchema.optional(),
  newPoint: PointOwnOrderBySchema.optional(),
  createdBy: UserOwnOrderBySchema.optional(),
  project: ProjectOwnOrderBySchema.optional(),
});

export const TeamHistoryOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  createdById: _direction,
  oldTeamId: _direction,
  newTeamId: _direction,
  oldTeam: TeamOwnOrderBySchema.optional(),
  newTeam: TeamOwnOrderBySchema.optional(),
  createdBy: UserOwnOrderBySchema.optional(),
});

export const TaskTagOrderBySchema = z.object({
  id: _direction,
  taskId: _direction,
  tagId: _direction,
  task: TaskOwnOrderBySchema.optional(),
  tag: TagOwnOrderBySchema.optional(),
});

export const TaskCategoryOrderBySchema = z.object({
  id: _direction,
  categoryId: _direction,
  taskId: _direction,
  task: TaskOwnOrderBySchema.optional(),
  category: CategoryOwnOrderBySchema.optional(),
});

export const AssignmentOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  assigneeId: _direction,
  taskId: _direction,
  task: TaskOwnOrderBySchema.optional(),
  assignee: UserOwnOrderBySchema.optional(),
});

export const CommentOrderBySchema = z.object({
  id: _direction,
  createdAt: _direction,
  updatedAt: _direction,
  parentId: _direction,
  createdById: _direction,
  taskId: _direction,
  comment: _direction,
  parent: CommentOwnOrderBySchema.optional(),
  comments: _orderByCount,
  createdBy: UserOwnOrderBySchema.optional(),
  task: TaskOwnOrderBySchema.optional(),
});

export const ProjectTaskTagOrderBySchema = z.object({
  id: _direction,
  projectId: _direction,
  tagId: _direction,
  tag: TagOwnOrderBySchema.optional(),
  project: ProjectOwnOrderBySchema.optional(),
});

export const ProjectTaskStatusOrderBySchema = z.object({
  id: _direction,
  projectId: _direction,
  statusId: _direction,
  project: ProjectOwnOrderBySchema.optional(),
  status: StatusOwnOrderBySchema.optional(),
});

export const ProjectTaskPriorityOrderBySchema = z.object({
  id: _direction,
  projectId: _direction,
  priorityId: _direction,
  project: ProjectOwnOrderBySchema.optional(),
  priority: PriorityOwnOrderBySchema.optional(),
});

export const UserOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOrderBySchema
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

export const ProjectOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectOrderBySchema
);

export const TagOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOrderBySchema
);

export const CategoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOrderBySchema
);

export const SprintOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintOrderBySchema
);

export const PriorityOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityOrderBySchema
);

export const StatusOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusOrderBySchema
);

export const PointOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointOrderBySchema
);

export const TaskOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskOrderBySchema
);

export const AssignmentHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryOrderBySchema
);

export const PriorityHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryOrderBySchema
);

export const StatusHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryOrderBySchema
);

export const PointHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryOrderBySchema
);

export const TeamHistoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryOrderBySchema
);

export const TaskTagOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagOrderBySchema
);

export const TaskCategoryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryOrderBySchema
);

export const AssignmentOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentOrderBySchema
);

export const CommentOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentOrderBySchema
);

export const ProjectTaskTagOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagOrderBySchema
);

export const ProjectTaskStatusOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusOrderBySchema
);

export const ProjectTaskPriorityOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityOrderBySchema
);

export const UserOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  displayName: _select,
  slug: _select,
  title: _select,
});

export const TeamOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const TeamManagerOwnSelectSchema = z.object({
  id: _select,
  managerId: _select,
  teamId: _select,
});

export const TeamMemberOwnSelectSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
});

export const ProjectOwnSelectSchema = z.object({
  id: _select,
  createdById: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  startDate: _select,
  dueDate: _select,
  endDate: _select,
});

export const TagOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  isDefault: _select,
});

export const CategoryOwnSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  isDefault: _select,
});

export const SprintOwnSelectSchema = z.object({
  id: _select,
  createdById: _select,
  projectId: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const PriorityOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
});

export const StatusOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
});

export const PointOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  point: _select,
  description: _select,
});

export const TaskOwnSelectSchema = z.object({
  id: _select,
  sprintId: _select,
  createdAt: _select,
  updatedAt: _select,
  createdById: _select,
  priorityId: _select,
  pointId: _select,
  statusId: _select,
  parentId: _select,
  title: _select,
  slug: _select,
  description: _select,
  due: _select,
  resolvedAt: _select,
});

export const AssignmentHistoryOwnSelectSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldUserId: _select,
  newUserId: _select,
});

export const PriorityHistoryOwnSelectSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldPriorityId: _select,
  newPriorityId: _select,
});

export const StatusHistoryOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldStatusId: _select,
  newStatusId: _select,
  projectId: _select,
  taskId: _select,
});

export const PointHistoryOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldPointId: _select,
  newPointId: _select,
  projectId: _select,
  taskId: _select,
});

export const TeamHistoryOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldTeamId: _select,
  newTeamId: _select,
});

export const TaskTagOwnSelectSchema = z.object({
  id: _select,
  taskId: _select,
  tagId: _select,
});

export const TaskCategoryOwnSelectSchema = z.object({
  id: _select,
  categoryId: _select,
  taskId: _select,
});

export const AssignmentOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  assigneeId: _select,
  taskId: _select,
});

export const CommentOwnSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  parentId: _select,
  createdById: _select,
  taskId: _select,
  comment: _select,
});

export const ProjectTaskTagOwnSelectSchema = z.object({
  id: _select,
  projectId: _select,
  tagId: _select,
});

export const ProjectTaskStatusOwnSelectSchema = z.object({
  id: _select,
  projectId: _select,
  statusId: _select,
});

export const ProjectTaskPriorityOwnSelectSchema = z.object({
  id: _select,
  projectId: _select,
  priorityId: _select,
});

export const UserOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnSelectSchema
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

export const ProjectOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectOwnSelectSchema
);

export const TagOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnSelectSchema
);

export const CategoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnSelectSchema
);

export const SprintOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintOwnSelectSchema
);

export const PriorityOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityOwnSelectSchema
);

export const StatusOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusOwnSelectSchema
);

export const PointOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointOwnSelectSchema
);

export const TaskOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskOwnSelectSchema
);

export const AssignmentHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryOwnSelectSchema
);

export const PriorityHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryOwnSelectSchema
);

export const StatusHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryOwnSelectSchema
);

export const PointHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryOwnSelectSchema
);

export const TeamHistoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryOwnSelectSchema
);

export const TaskTagOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagOwnSelectSchema
);

export const TaskCategoryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryOwnSelectSchema
);

export const AssignmentOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentOwnSelectSchema
);

export const CommentOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentOwnSelectSchema
);

export const ProjectTaskTagOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagOwnSelectSchema
);

export const ProjectTaskStatusOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusOwnSelectSchema
);

export const ProjectTaskPriorityOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityOwnSelectSchema
);

export const UserSelectSchema = z.object({
  id: _select,
  uuid: _select,
  displayName: _select,
  slug: _select,
  title: _select,
  assignments: _select,
  managedTeams: _select,
  memberships: _select,
  createdProjects: _select,
  createdSprints: _select,
  createdTasks: _select,
  createdComments: _select,
  takenAssignments: _select,
  givenAssignments: _select,
  changedAssignments: _select,
  changedPriorities: _select,
  changedStatuses: _select,
  changedPoints: _select,
  changedTeams: _select,
});

export const TeamSelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
  managers: _select,
  members: _select,
  takenTeams: _select,
  givenTeams: _select,
});

export const TeamManagerSelectSchema = z.object({
  id: _select,
  managerId: _select,
  teamId: _select,
  manager: _select,
  team: _select,
});

export const TeamMemberSelectSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
  team: _select,
  member: _select,
});

export const ProjectSelectSchema = z.object({
  id: _select,
  createdById: _select,
  parentId: _select,
  parent: _select,
  name: _select,
  slug: _select,
  description: _select,
  startDate: _select,
  dueDate: _select,
  endDate: _select,
  sprints: _select,
  createdBy: _select,
  tags: _select,
  statuses: _select,
  priorities: _select,
  assignmentHistory: _select,
  priorityHistory: _select,
  statusHistory: _select,
  pointHistory: _select,
  projects: _select,
});

export const TagSelectSchema = z.object({
  id: _select,
  name: _select,
  isDefault: _select,
  tasks: _select,
  projects: _select,
});

export const CategorySelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  isDefault: _select,
  parent: _select,
  categories: _select,
  tasks: _select,
});

export const SprintSelectSchema = z.object({
  id: _select,
  createdById: _select,
  projectId: _select,
  name: _select,
  slug: _select,
  description: _select,
  project: _select,
  tasks: _select,
  createdBy: _select,
});

export const PrioritySelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
  tasks: _select,
  projects: _select,
  takenPriorities: _select,
  givenPriorities: _select,
});

export const StatusSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
  tasks: _select,
  projects: _select,
  takenStatuses: _select,
  givenStatuses: _select,
});

export const PointSelectSchema = z.object({
  id: _select,
  name: _select,
  point: _select,
  description: _select,
  tasks: _select,
  takenPointes: _select,
  givenPointes: _select,
});

export const TaskSelectSchema = z.object({
  id: _select,
  sprintId: _select,
  createdAt: _select,
  updatedAt: _select,
  createdById: _select,
  priorityId: _select,
  pointId: _select,
  statusId: _select,
  parentId: _select,
  title: _select,
  slug: _select,
  description: _select,
  due: _select,
  resolvedAt: _select,
  comments: _select,
  parent: _select,
  tasks: _select,
  createdBy: _select,
  assignments: _select,
  tags: _select,
  categories: _select,
  point: _select,
  priority: _select,
  status: _select,
  sprint: _select,
  assignmentHistory: _select,
  statusHistory: _select,
  priorityHistory: _select,
  pointHistory: _select,
});

export const AssignmentHistorySelectSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldUserId: _select,
  newUserId: _select,
  oldUser: _select,
  newUser: _select,
  createdBy: _select,
  task: _select,
  project: _select,
});

export const PriorityHistorySelectSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldPriorityId: _select,
  newPriorityId: _select,
  oldPriority: _select,
  newPriority: _select,
  createdBy: _select,
  task: _select,
  project: _select,
});

export const StatusHistorySelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldStatusId: _select,
  newStatusId: _select,
  projectId: _select,
  taskId: _select,
  task: _select,
  oldStatus: _select,
  newStatus: _select,
  createdBy: _select,
  project: _select,
});

export const PointHistorySelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldPointId: _select,
  newPointId: _select,
  projectId: _select,
  taskId: _select,
  task: _select,
  oldPoint: _select,
  newPoint: _select,
  createdBy: _select,
  project: _select,
});

export const TeamHistorySelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldTeamId: _select,
  newTeamId: _select,
  oldTeam: _select,
  newTeam: _select,
  createdBy: _select,
});

export const TaskTagSelectSchema = z.object({
  id: _select,
  taskId: _select,
  tagId: _select,
  task: _select,
  tag: _select,
});

export const TaskCategorySelectSchema = z.object({
  id: _select,
  categoryId: _select,
  taskId: _select,
  task: _select,
  category: _select,
});

export const AssignmentSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  assigneeId: _select,
  taskId: _select,
  task: _select,
  assignee: _select,
});

export const CommentSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  parentId: _select,
  createdById: _select,
  taskId: _select,
  comment: _select,
  parent: _select,
  comments: _select,
  createdBy: _select,
  task: _select,
});

export const ProjectTaskTagSelectSchema = z.object({
  id: _select,
  projectId: _select,
  tagId: _select,
  tag: _select,
  project: _select,
});

export const ProjectTaskStatusSelectSchema = z.object({
  id: _select,
  projectId: _select,
  statusId: _select,
  project: _select,
  status: _select,
});

export const ProjectTaskPrioritySelectSchema = z.object({
  id: _select,
  projectId: _select,
  priorityId: _select,
  project: _select,
  priority: _select,
});

export const UserSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserSelectSchema
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

export const ProjectSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectSelectSchema
);

export const TagSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagSelectSchema
);

export const CategorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategorySelectSchema
);

export const SprintSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintSelectSchema
);

export const PrioritySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PrioritySelectSchema
);

export const StatusSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusSelectSchema
);

export const PointSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointSelectSchema
);

export const TaskSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskSelectSchema
);

export const AssignmentHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistorySelectSchema
);

export const PriorityHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistorySelectSchema
);

export const StatusHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistorySelectSchema
);

export const PointHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistorySelectSchema
);

export const TeamHistorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistorySelectSchema
);

export const TaskTagSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagSelectSchema
);

export const TaskCategorySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategorySelectSchema
);

export const AssignmentSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentSelectSchema
);

export const CommentSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentSelectSchema
);

export const ProjectTaskTagSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagSelectSchema
);

export const ProjectTaskStatusSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusSelectSchema
);

export const ProjectTaskPrioritySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPrioritySelectSchema
);

export const UserOmitSchema = z.object({
  id: _select,
  uuid: _select,
  displayName: _select,
  slug: _select,
  title: _select,
});

export const TeamOmitSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const TeamManagerOmitSchema = z.object({
  id: _select,
  managerId: _select,
  teamId: _select,
});

export const TeamMemberOmitSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
});

export const ProjectOmitSchema = z.object({
  id: _select,
  createdById: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  startDate: _select,
  dueDate: _select,
  endDate: _select,
});

export const TagOmitSchema = z.object({
  id: _select,
  name: _select,
  isDefault: _select,
});

export const CategoryOmitSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  isDefault: _select,
});

export const SprintOmitSchema = z.object({
  id: _select,
  createdById: _select,
  projectId: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const PriorityOmitSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
});

export const StatusOmitSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
});

export const PointOmitSchema = z.object({
  id: _select,
  name: _select,
  point: _select,
  description: _select,
});

export const TaskOmitSchema = z.object({
  id: _select,
  sprintId: _select,
  createdAt: _select,
  updatedAt: _select,
  createdById: _select,
  priorityId: _select,
  pointId: _select,
  statusId: _select,
  parentId: _select,
  title: _select,
  slug: _select,
  description: _select,
  due: _select,
  resolvedAt: _select,
});

export const AssignmentHistoryOmitSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldUserId: _select,
  newUserId: _select,
});

export const PriorityHistoryOmitSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldPriorityId: _select,
  newPriorityId: _select,
});

export const StatusHistoryOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldStatusId: _select,
  newStatusId: _select,
  projectId: _select,
  taskId: _select,
});

export const PointHistoryOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldPointId: _select,
  newPointId: _select,
  projectId: _select,
  taskId: _select,
});

export const TeamHistoryOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldTeamId: _select,
  newTeamId: _select,
});

export const TaskTagOmitSchema = z.object({
  id: _select,
  taskId: _select,
  tagId: _select,
});

export const TaskCategoryOmitSchema = z.object({
  id: _select,
  categoryId: _select,
  taskId: _select,
});

export const AssignmentOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  assigneeId: _select,
  taskId: _select,
});

export const CommentOmitSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  parentId: _select,
  createdById: _select,
  taskId: _select,
  comment: _select,
});

export const ProjectTaskTagOmitSchema = z.object({
  id: _select,
  projectId: _select,
  tagId: _select,
});

export const ProjectTaskStatusOmitSchema = z.object({
  id: _select,
  projectId: _select,
  statusId: _select,
});

export const ProjectTaskPriorityOmitSchema = z.object({
  id: _select,
  projectId: _select,
  priorityId: _select,
});

export const UserOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOmitSchema
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

export const ProjectOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectOmitSchema
);

export const TagOmitSchemaJson = z.preprocess(_jsonPreprocessor, TagOmitSchema);

export const CategoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOmitSchema
);

export const SprintOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintOmitSchema
);

export const PriorityOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityOmitSchema
);

export const StatusOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusOmitSchema
);

export const PointOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointOmitSchema
);

export const TaskOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskOmitSchema
);

export const AssignmentHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryOmitSchema
);

export const PriorityHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryOmitSchema
);

export const StatusHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryOmitSchema
);

export const PointHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryOmitSchema
);

export const TeamHistoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryOmitSchema
);

export const TaskTagOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagOmitSchema
);

export const TaskCategoryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryOmitSchema
);

export const AssignmentOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentOmitSchema
);

export const CommentOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentOmitSchema
);

export const ProjectTaskTagOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagOmitSchema
);

export const ProjectTaskStatusOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusOmitSchema
);

export const ProjectTaskPriorityOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityOmitSchema
);

export const UserOwnQueryOneSchema = z.object({
  select: UserOwnSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  where: UserOwnWhereSchemaJson.optional(),
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

export const ProjectOwnQueryOneSchema = z.object({
  select: ProjectOwnSelectSchemaJson.optional(),
  omit: ProjectOmitSchemaJson.optional(),
  where: ProjectOwnWhereSchemaJson.optional(),
});

export const TagOwnQueryOneSchema = z.object({
  select: TagOwnSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  where: TagOwnWhereSchemaJson.optional(),
});

export const CategoryOwnQueryOneSchema = z.object({
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
});

export const SprintOwnQueryOneSchema = z.object({
  select: SprintOwnSelectSchemaJson.optional(),
  omit: SprintOmitSchemaJson.optional(),
  where: SprintOwnWhereSchemaJson.optional(),
});

export const PriorityOwnQueryOneSchema = z.object({
  select: PriorityOwnSelectSchemaJson.optional(),
  omit: PriorityOmitSchemaJson.optional(),
  where: PriorityOwnWhereSchemaJson.optional(),
});

export const StatusOwnQueryOneSchema = z.object({
  select: StatusOwnSelectSchemaJson.optional(),
  omit: StatusOmitSchemaJson.optional(),
  where: StatusOwnWhereSchemaJson.optional(),
});

export const PointOwnQueryOneSchema = z.object({
  select: PointOwnSelectSchemaJson.optional(),
  omit: PointOmitSchemaJson.optional(),
  where: PointOwnWhereSchemaJson.optional(),
});

export const TaskOwnQueryOneSchema = z.object({
  select: TaskOwnSelectSchemaJson.optional(),
  omit: TaskOmitSchemaJson.optional(),
  where: TaskOwnWhereSchemaJson.optional(),
});

export const AssignmentHistoryOwnQueryOneSchema = z.object({
  select: AssignmentHistoryOwnSelectSchemaJson.optional(),
  omit: AssignmentHistoryOmitSchemaJson.optional(),
  where: AssignmentHistoryOwnWhereSchemaJson.optional(),
});

export const PriorityHistoryOwnQueryOneSchema = z.object({
  select: PriorityHistoryOwnSelectSchemaJson.optional(),
  omit: PriorityHistoryOmitSchemaJson.optional(),
  where: PriorityHistoryOwnWhereSchemaJson.optional(),
});

export const StatusHistoryOwnQueryOneSchema = z.object({
  select: StatusHistoryOwnSelectSchemaJson.optional(),
  omit: StatusHistoryOmitSchemaJson.optional(),
  where: StatusHistoryOwnWhereSchemaJson.optional(),
});

export const PointHistoryOwnQueryOneSchema = z.object({
  select: PointHistoryOwnSelectSchemaJson.optional(),
  omit: PointHistoryOmitSchemaJson.optional(),
  where: PointHistoryOwnWhereSchemaJson.optional(),
});

export const TeamHistoryOwnQueryOneSchema = z.object({
  select: TeamHistoryOwnSelectSchemaJson.optional(),
  omit: TeamHistoryOmitSchemaJson.optional(),
  where: TeamHistoryOwnWhereSchemaJson.optional(),
});

export const TaskTagOwnQueryOneSchema = z.object({
  select: TaskTagOwnSelectSchemaJson.optional(),
  omit: TaskTagOmitSchemaJson.optional(),
  where: TaskTagOwnWhereSchemaJson.optional(),
});

export const TaskCategoryOwnQueryOneSchema = z.object({
  select: TaskCategoryOwnSelectSchemaJson.optional(),
  omit: TaskCategoryOmitSchemaJson.optional(),
  where: TaskCategoryOwnWhereSchemaJson.optional(),
});

export const AssignmentOwnQueryOneSchema = z.object({
  select: AssignmentOwnSelectSchemaJson.optional(),
  omit: AssignmentOmitSchemaJson.optional(),
  where: AssignmentOwnWhereSchemaJson.optional(),
});

export const CommentOwnQueryOneSchema = z.object({
  select: CommentOwnSelectSchemaJson.optional(),
  omit: CommentOmitSchemaJson.optional(),
  where: CommentOwnWhereSchemaJson.optional(),
});

export const ProjectTaskTagOwnQueryOneSchema = z.object({
  select: ProjectTaskTagOwnSelectSchemaJson.optional(),
  omit: ProjectTaskTagOmitSchemaJson.optional(),
  where: ProjectTaskTagOwnWhereSchemaJson.optional(),
});

export const ProjectTaskStatusOwnQueryOneSchema = z.object({
  select: ProjectTaskStatusOwnSelectSchemaJson.optional(),
  omit: ProjectTaskStatusOmitSchemaJson.optional(),
  where: ProjectTaskStatusOwnWhereSchemaJson.optional(),
});

export const ProjectTaskPriorityOwnQueryOneSchema = z.object({
  select: ProjectTaskPriorityOwnSelectSchemaJson.optional(),
  omit: ProjectTaskPriorityOmitSchemaJson.optional(),
  where: ProjectTaskPriorityOwnWhereSchemaJson.optional(),
});

export const UserOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnQueryOneSchema
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

export const ProjectOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectOwnQueryOneSchema
);

export const TagOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnQueryOneSchema
);

export const CategoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQueryOneSchema
);

export const SprintOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintOwnQueryOneSchema
);

export const PriorityOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityOwnQueryOneSchema
);

export const StatusOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusOwnQueryOneSchema
);

export const PointOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointOwnQueryOneSchema
);

export const TaskOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskOwnQueryOneSchema
);

export const AssignmentHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryOwnQueryOneSchema
);

export const PriorityHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryOwnQueryOneSchema
);

export const StatusHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryOwnQueryOneSchema
);

export const PointHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryOwnQueryOneSchema
);

export const TeamHistoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryOwnQueryOneSchema
);

export const TaskTagOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagOwnQueryOneSchema
);

export const TaskCategoryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryOwnQueryOneSchema
);

export const AssignmentOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentOwnQueryOneSchema
);

export const CommentOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentOwnQueryOneSchema
);

export const ProjectTaskTagOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagOwnQueryOneSchema
);

export const ProjectTaskStatusOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusOwnQueryOneSchema
);

export const ProjectTaskPriorityOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityOwnQueryOneSchema
);

export const UserOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserDistinctSchema.optional(),
  select: UserOwnSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  where: UserOwnWhereSchemaJson.optional(),
  orderBy: UserOwnOrderBySchemaJson.optional(),
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

export const ProjectOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectDistinctSchema.optional(),
  select: ProjectOwnSelectSchemaJson.optional(),
  omit: ProjectOmitSchemaJson.optional(),
  where: ProjectOwnWhereSchemaJson.optional(),
  orderBy: ProjectOwnOrderBySchemaJson.optional(),
});

export const TagOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSchema.optional(),
  select: TagOwnSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  where: TagOwnWhereSchemaJson.optional(),
  orderBy: TagOwnOrderBySchemaJson.optional(),
});

export const CategoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
  orderBy: CategoryOwnOrderBySchemaJson.optional(),
});

export const SprintOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SprintDistinctSchema.optional(),
  select: SprintOwnSelectSchemaJson.optional(),
  omit: SprintOmitSchemaJson.optional(),
  where: SprintOwnWhereSchemaJson.optional(),
  orderBy: SprintOwnOrderBySchemaJson.optional(),
});

export const PriorityOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriorityDistinctSchema.optional(),
  select: PriorityOwnSelectSchemaJson.optional(),
  omit: PriorityOmitSchemaJson.optional(),
  where: PriorityOwnWhereSchemaJson.optional(),
  orderBy: PriorityOwnOrderBySchemaJson.optional(),
});

export const StatusOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StatusDistinctSchema.optional(),
  select: StatusOwnSelectSchemaJson.optional(),
  omit: StatusOmitSchemaJson.optional(),
  where: StatusOwnWhereSchemaJson.optional(),
  orderBy: StatusOwnOrderBySchemaJson.optional(),
});

export const PointOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PointDistinctSchema.optional(),
  select: PointOwnSelectSchemaJson.optional(),
  omit: PointOmitSchemaJson.optional(),
  where: PointOwnWhereSchemaJson.optional(),
  orderBy: PointOwnOrderBySchemaJson.optional(),
});

export const TaskOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskDistinctSchema.optional(),
  select: TaskOwnSelectSchemaJson.optional(),
  omit: TaskOmitSchemaJson.optional(),
  where: TaskOwnWhereSchemaJson.optional(),
  orderBy: TaskOwnOrderBySchemaJson.optional(),
});

export const AssignmentHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AssignmentHistoryDistinctSchema.optional(),
  select: AssignmentHistoryOwnSelectSchemaJson.optional(),
  omit: AssignmentHistoryOmitSchemaJson.optional(),
  where: AssignmentHistoryOwnWhereSchemaJson.optional(),
  orderBy: AssignmentHistoryOwnOrderBySchemaJson.optional(),
});

export const PriorityHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriorityHistoryDistinctSchema.optional(),
  select: PriorityHistoryOwnSelectSchemaJson.optional(),
  omit: PriorityHistoryOmitSchemaJson.optional(),
  where: PriorityHistoryOwnWhereSchemaJson.optional(),
  orderBy: PriorityHistoryOwnOrderBySchemaJson.optional(),
});

export const StatusHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StatusHistoryDistinctSchema.optional(),
  select: StatusHistoryOwnSelectSchemaJson.optional(),
  omit: StatusHistoryOmitSchemaJson.optional(),
  where: StatusHistoryOwnWhereSchemaJson.optional(),
  orderBy: StatusHistoryOwnOrderBySchemaJson.optional(),
});

export const PointHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PointHistoryDistinctSchema.optional(),
  select: PointHistoryOwnSelectSchemaJson.optional(),
  omit: PointHistoryOmitSchemaJson.optional(),
  where: PointHistoryOwnWhereSchemaJson.optional(),
  orderBy: PointHistoryOwnOrderBySchemaJson.optional(),
});

export const TeamHistoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamHistoryDistinctSchema.optional(),
  select: TeamHistoryOwnSelectSchemaJson.optional(),
  omit: TeamHistoryOmitSchemaJson.optional(),
  where: TeamHistoryOwnWhereSchemaJson.optional(),
  orderBy: TeamHistoryOwnOrderBySchemaJson.optional(),
});

export const TaskTagOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskTagDistinctSchema.optional(),
  select: TaskTagOwnSelectSchemaJson.optional(),
  omit: TaskTagOmitSchemaJson.optional(),
  where: TaskTagOwnWhereSchemaJson.optional(),
  orderBy: TaskTagOwnOrderBySchemaJson.optional(),
});

export const TaskCategoryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskCategoryDistinctSchema.optional(),
  select: TaskCategoryOwnSelectSchemaJson.optional(),
  omit: TaskCategoryOmitSchemaJson.optional(),
  where: TaskCategoryOwnWhereSchemaJson.optional(),
  orderBy: TaskCategoryOwnOrderBySchemaJson.optional(),
});

export const AssignmentOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AssignmentDistinctSchema.optional(),
  select: AssignmentOwnSelectSchemaJson.optional(),
  omit: AssignmentOmitSchemaJson.optional(),
  where: AssignmentOwnWhereSchemaJson.optional(),
  orderBy: AssignmentOwnOrderBySchemaJson.optional(),
});

export const CommentOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CommentDistinctSchema.optional(),
  select: CommentOwnSelectSchemaJson.optional(),
  omit: CommentOmitSchemaJson.optional(),
  where: CommentOwnWhereSchemaJson.optional(),
  orderBy: CommentOwnOrderBySchemaJson.optional(),
});

export const ProjectTaskTagOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskTagDistinctSchema.optional(),
  select: ProjectTaskTagOwnSelectSchemaJson.optional(),
  omit: ProjectTaskTagOmitSchemaJson.optional(),
  where: ProjectTaskTagOwnWhereSchemaJson.optional(),
  orderBy: ProjectTaskTagOwnOrderBySchemaJson.optional(),
});

export const ProjectTaskStatusOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskStatusDistinctSchema.optional(),
  select: ProjectTaskStatusOwnSelectSchemaJson.optional(),
  omit: ProjectTaskStatusOmitSchemaJson.optional(),
  where: ProjectTaskStatusOwnWhereSchemaJson.optional(),
  orderBy: ProjectTaskStatusOwnOrderBySchemaJson.optional(),
});

export const ProjectTaskPriorityOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskPriorityDistinctSchema.optional(),
  select: ProjectTaskPriorityOwnSelectSchemaJson.optional(),
  omit: ProjectTaskPriorityOmitSchemaJson.optional(),
  where: ProjectTaskPriorityOwnWhereSchemaJson.optional(),
  orderBy: ProjectTaskPriorityOwnOrderBySchemaJson.optional(),
});

export const UserOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserOwnQuerySchema
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

export const ProjectOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectOwnQuerySchema
);

export const TagOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagOwnQuerySchema
);

export const CategoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryOwnQuerySchema
);

export const SprintOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintOwnQuerySchema
);

export const PriorityOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityOwnQuerySchema
);

export const StatusOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusOwnQuerySchema
);

export const PointOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointOwnQuerySchema
);

export const TaskOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskOwnQuerySchema
);

export const AssignmentHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryOwnQuerySchema
);

export const PriorityHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryOwnQuerySchema
);

export const StatusHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryOwnQuerySchema
);

export const PointHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryOwnQuerySchema
);

export const TeamHistoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryOwnQuerySchema
);

export const TaskTagOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagOwnQuerySchema
);

export const TaskCategoryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryOwnQuerySchema
);

export const AssignmentOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentOwnQuerySchema
);

export const CommentOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentOwnQuerySchema
);

export const ProjectTaskTagOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagOwnQuerySchema
);

export const ProjectTaskStatusOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusOwnQuerySchema
);

export const ProjectTaskPriorityOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityOwnQuerySchema
);

export const UserIncludeSchema = z.object({
  assignments: _select.or(AssignmentOwnQueryOneSchema).optional(),
  managedTeams: _select.or(TeamManagerOwnQueryOneSchema).optional(),
  memberships: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  createdProjects: _select.or(ProjectOwnQueryOneSchema).optional(),
  createdSprints: _select.or(SprintOwnQueryOneSchema).optional(),
  createdTasks: _select.or(TaskOwnQueryOneSchema).optional(),
  createdComments: _select.or(CommentOwnQueryOneSchema).optional(),
  takenAssignments: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  givenAssignments: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  changedAssignments: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  changedPriorities: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  changedStatuses: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  changedPoints: _select.or(PointHistoryOwnQueryOneSchema).optional(),
  changedTeams: _select.or(TeamHistoryOwnQueryOneSchema).optional(),
});

export const TeamIncludeSchema = z.object({
  managers: _select.or(TeamManagerOwnQueryOneSchema).optional(),
  members: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  takenTeams: _select.or(TeamHistoryOwnQueryOneSchema).optional(),
  givenTeams: _select.or(TeamHistoryOwnQueryOneSchema).optional(),
});

export const TeamManagerIncludeSchema = z.object({
  manager: _select.or(UserOwnQueryOneSchema).optional(),
  team: _select.or(TeamOwnQueryOneSchema).optional(),
});

export const TeamMemberIncludeSchema = z.object({
  team: _select.or(TeamOwnQueryOneSchema).optional(),
  member: _select.or(UserOwnQueryOneSchema).optional(),
});

export const ProjectIncludeSchema = z.object({
  parent: _select.or(ProjectOwnQueryOneSchema).optional(),
  sprints: _select.or(SprintOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  tags: _select.or(ProjectTaskTagOwnQueryOneSchema).optional(),
  statuses: _select.or(ProjectTaskStatusOwnQueryOneSchema).optional(),
  priorities: _select.or(ProjectTaskPriorityOwnQueryOneSchema).optional(),
  assignmentHistory: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  priorityHistory: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  statusHistory: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  pointHistory: _select.or(PointHistoryOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const TagIncludeSchema = z.object({
  tasks: _select.or(TaskTagOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectTaskTagOwnQueryOneSchema).optional(),
});

export const CategoryIncludeSchema = z.object({
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  categories: _select.or(CategoryOwnQueryOneSchema).optional(),
  tasks: _select.or(TaskCategoryOwnQueryOneSchema).optional(),
});

export const SprintIncludeSchema = z.object({
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
});

export const PriorityIncludeSchema = z.object({
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectTaskPriorityOwnQueryOneSchema).optional(),
  takenPriorities: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  givenPriorities: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
});

export const StatusIncludeSchema = z.object({
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectTaskStatusOwnQueryOneSchema).optional(),
  takenStatuses: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  givenStatuses: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
});

export const PointIncludeSchema = z.object({
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  takenPointes: _select.or(PointHistoryOwnQueryOneSchema).optional(),
  givenPointes: _select.or(PointHistoryOwnQueryOneSchema).optional(),
});

export const TaskIncludeSchema = z.object({
  comments: _select.or(CommentOwnQueryOneSchema).optional(),
  parent: _select.or(TaskOwnQueryOneSchema).optional(),
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  assignments: _select.or(AssignmentOwnQueryOneSchema).optional(),
  tags: _select.or(TaskTagOwnQueryOneSchema).optional(),
  categories: _select.or(TaskCategoryOwnQueryOneSchema).optional(),
  point: _select.or(PointOwnQueryOneSchema).optional(),
  priority: _select.or(PriorityOwnQueryOneSchema).optional(),
  status: _select.or(StatusOwnQueryOneSchema).optional(),
  sprint: _select.or(SprintOwnQueryOneSchema).optional(),
  assignmentHistory: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  statusHistory: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  priorityHistory: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  pointHistory: _select.or(PointHistoryOwnQueryOneSchema).optional(),
});

export const AssignmentHistoryIncludeSchema = z.object({
  oldUser: _select.or(UserOwnQueryOneSchema).optional(),
  newUser: _select.or(UserOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const PriorityHistoryIncludeSchema = z.object({
  oldPriority: _select.or(PriorityOwnQueryOneSchema).optional(),
  newPriority: _select.or(PriorityOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const StatusHistoryIncludeSchema = z.object({
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  oldStatus: _select.or(StatusOwnQueryOneSchema).optional(),
  newStatus: _select.or(StatusOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const PointHistoryIncludeSchema = z.object({
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  oldPoint: _select.or(PointOwnQueryOneSchema).optional(),
  newPoint: _select.or(PointOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const TeamHistoryIncludeSchema = z.object({
  oldTeam: _select.or(TeamOwnQueryOneSchema).optional(),
  newTeam: _select.or(TeamOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
});

export const TaskTagIncludeSchema = z.object({
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  tag: _select.or(TagOwnQueryOneSchema).optional(),
});

export const TaskCategoryIncludeSchema = z.object({
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
});

export const AssignmentIncludeSchema = z.object({
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  assignee: _select.or(UserOwnQueryOneSchema).optional(),
});

export const CommentIncludeSchema = z.object({
  parent: _select.or(CommentOwnQueryOneSchema).optional(),
  comments: _select.or(CommentOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  task: _select.or(TaskOwnQueryOneSchema).optional(),
});

export const ProjectTaskTagIncludeSchema = z.object({
  tag: _select.or(TagOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const ProjectTaskStatusIncludeSchema = z.object({
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
  status: _select.or(StatusOwnQueryOneSchema).optional(),
});

export const ProjectTaskPriorityIncludeSchema = z.object({
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
  priority: _select.or(PriorityOwnQueryOneSchema).optional(),
});

export const UserIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserIncludeSchema
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

export const ProjectIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectIncludeSchema
);

export const TagIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagIncludeSchema
);

export const CategoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryIncludeSchema
);

export const SprintIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintIncludeSchema
);

export const PriorityIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityIncludeSchema
);

export const StatusIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusIncludeSchema
);

export const PointIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointIncludeSchema
);

export const TaskIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskIncludeSchema
);

export const AssignmentHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryIncludeSchema
);

export const PriorityHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryIncludeSchema
);

export const StatusHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryIncludeSchema
);

export const PointHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryIncludeSchema
);

export const TeamHistoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryIncludeSchema
);

export const TaskTagIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagIncludeSchema
);

export const TaskCategoryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryIncludeSchema
);

export const AssignmentIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentIncludeSchema
);

export const CommentIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentIncludeSchema
);

export const ProjectTaskTagIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagIncludeSchema
);

export const ProjectTaskStatusIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusIncludeSchema
);

export const ProjectTaskPriorityIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityIncludeSchema
);

export const UserCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  displayName: _select,
  slug: _select,
  title: _select,
  assignments: _select.or(AssignmentOwnQueryOneSchema).optional(),
  managedTeams: _select.or(TeamManagerOwnQueryOneSchema).optional(),
  memberships: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  createdProjects: _select.or(ProjectOwnQueryOneSchema).optional(),
  createdSprints: _select.or(SprintOwnQueryOneSchema).optional(),
  createdTasks: _select.or(TaskOwnQueryOneSchema).optional(),
  createdComments: _select.or(CommentOwnQueryOneSchema).optional(),
  takenAssignments: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  givenAssignments: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  changedAssignments: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  changedPriorities: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  changedStatuses: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  changedPoints: _select.or(PointHistoryOwnQueryOneSchema).optional(),
  changedTeams: _select.or(TeamHistoryOwnQueryOneSchema).optional(),
});

export const TeamCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
  managers: _select.or(TeamManagerOwnQueryOneSchema).optional(),
  members: _select.or(TeamMemberOwnQueryOneSchema).optional(),
  takenTeams: _select.or(TeamHistoryOwnQueryOneSchema).optional(),
  givenTeams: _select.or(TeamHistoryOwnQueryOneSchema).optional(),
});

export const TeamManagerCompleteSelectSchema = z.object({
  id: _select,
  managerId: _select,
  teamId: _select,
  manager: _select.or(UserOwnQueryOneSchema).optional(),
  team: _select.or(TeamOwnQueryOneSchema).optional(),
});

export const TeamMemberCompleteSelectSchema = z.object({
  id: _select,
  teamId: _select,
  memberId: _select,
  team: _select.or(TeamOwnQueryOneSchema).optional(),
  member: _select.or(UserOwnQueryOneSchema).optional(),
});

export const ProjectCompleteSelectSchema = z.object({
  id: _select,
  createdById: _select,
  parentId: _select,
  parent: _select.or(ProjectOwnQueryOneSchema).optional(),
  name: _select,
  slug: _select,
  description: _select,
  startDate: _select,
  dueDate: _select,
  endDate: _select,
  sprints: _select.or(SprintOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  tags: _select.or(ProjectTaskTagOwnQueryOneSchema).optional(),
  statuses: _select.or(ProjectTaskStatusOwnQueryOneSchema).optional(),
  priorities: _select.or(ProjectTaskPriorityOwnQueryOneSchema).optional(),
  assignmentHistory: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  priorityHistory: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  statusHistory: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  pointHistory: _select.or(PointHistoryOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const TagCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  isDefault: _select,
  tasks: _select.or(TaskTagOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectTaskTagOwnQueryOneSchema).optional(),
});

export const CategoryCompleteSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  description: _select,
  isDefault: _select,
  parent: _select.or(CategoryOwnQueryOneSchema).optional(),
  categories: _select.or(CategoryOwnQueryOneSchema).optional(),
  tasks: _select.or(TaskCategoryOwnQueryOneSchema).optional(),
});

export const SprintCompleteSelectSchema = z.object({
  id: _select,
  createdById: _select,
  projectId: _select,
  name: _select,
  slug: _select,
  description: _select,
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
});

export const PriorityCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectTaskPriorityOwnQueryOneSchema).optional(),
  takenPriorities: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  givenPriorities: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
});

export const StatusCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  description: _select,
  isDefault: _select,
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  projects: _select.or(ProjectTaskStatusOwnQueryOneSchema).optional(),
  takenStatuses: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  givenStatuses: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
});

export const PointCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  point: _select,
  description: _select,
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  takenPointes: _select.or(PointHistoryOwnQueryOneSchema).optional(),
  givenPointes: _select.or(PointHistoryOwnQueryOneSchema).optional(),
});

export const TaskCompleteSelectSchema = z.object({
  id: _select,
  sprintId: _select,
  createdAt: _select,
  updatedAt: _select,
  createdById: _select,
  priorityId: _select,
  pointId: _select,
  statusId: _select,
  parentId: _select,
  title: _select,
  slug: _select,
  description: _select,
  due: _select,
  resolvedAt: _select,
  comments: _select.or(CommentOwnQueryOneSchema).optional(),
  parent: _select.or(TaskOwnQueryOneSchema).optional(),
  tasks: _select.or(TaskOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  assignments: _select.or(AssignmentOwnQueryOneSchema).optional(),
  tags: _select.or(TaskTagOwnQueryOneSchema).optional(),
  categories: _select.or(TaskCategoryOwnQueryOneSchema).optional(),
  point: _select.or(PointOwnQueryOneSchema).optional(),
  priority: _select.or(PriorityOwnQueryOneSchema).optional(),
  status: _select.or(StatusOwnQueryOneSchema).optional(),
  sprint: _select.or(SprintOwnQueryOneSchema).optional(),
  assignmentHistory: _select.or(AssignmentHistoryOwnQueryOneSchema).optional(),
  statusHistory: _select.or(StatusHistoryOwnQueryOneSchema).optional(),
  priorityHistory: _select.or(PriorityHistoryOwnQueryOneSchema).optional(),
  pointHistory: _select.or(PointHistoryOwnQueryOneSchema).optional(),
});

export const AssignmentHistoryCompleteSelectSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldUserId: _select,
  newUserId: _select,
  oldUser: _select.or(UserOwnQueryOneSchema).optional(),
  newUser: _select.or(UserOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const PriorityHistoryCompleteSelectSchema = z.object({
  id: _select,
  createdById: _select,
  createdAt: _select,
  updatedAt: _select,
  projectId: _select,
  taskId: _select,
  oldPriorityId: _select,
  newPriorityId: _select,
  oldPriority: _select.or(PriorityOwnQueryOneSchema).optional(),
  newPriority: _select.or(PriorityOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const StatusHistoryCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldStatusId: _select,
  newStatusId: _select,
  projectId: _select,
  taskId: _select,
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  oldStatus: _select.or(StatusOwnQueryOneSchema).optional(),
  newStatus: _select.or(StatusOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const PointHistoryCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldPointId: _select,
  newPointId: _select,
  projectId: _select,
  taskId: _select,
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  oldPoint: _select.or(PointOwnQueryOneSchema).optional(),
  newPoint: _select.or(PointOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const TeamHistoryCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  createdById: _select,
  oldTeamId: _select,
  newTeamId: _select,
  oldTeam: _select.or(TeamOwnQueryOneSchema).optional(),
  newTeam: _select.or(TeamOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
});

export const TaskTagCompleteSelectSchema = z.object({
  id: _select,
  taskId: _select,
  tagId: _select,
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  tag: _select.or(TagOwnQueryOneSchema).optional(),
});

export const TaskCategoryCompleteSelectSchema = z.object({
  id: _select,
  categoryId: _select,
  taskId: _select,
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  category: _select.or(CategoryOwnQueryOneSchema).optional(),
});

export const AssignmentCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  assigneeId: _select,
  taskId: _select,
  task: _select.or(TaskOwnQueryOneSchema).optional(),
  assignee: _select.or(UserOwnQueryOneSchema).optional(),
});

export const CommentCompleteSelectSchema = z.object({
  id: _select,
  createdAt: _select,
  updatedAt: _select,
  parentId: _select,
  createdById: _select,
  taskId: _select,
  comment: _select,
  parent: _select.or(CommentOwnQueryOneSchema).optional(),
  comments: _select.or(CommentOwnQueryOneSchema).optional(),
  createdBy: _select.or(UserOwnQueryOneSchema).optional(),
  task: _select.or(TaskOwnQueryOneSchema).optional(),
});

export const ProjectTaskTagCompleteSelectSchema = z.object({
  id: _select,
  projectId: _select,
  tagId: _select,
  tag: _select.or(TagOwnQueryOneSchema).optional(),
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
});

export const ProjectTaskStatusCompleteSelectSchema = z.object({
  id: _select,
  projectId: _select,
  statusId: _select,
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
  status: _select.or(StatusOwnQueryOneSchema).optional(),
});

export const ProjectTaskPriorityCompleteSelectSchema = z.object({
  id: _select,
  projectId: _select,
  priorityId: _select,
  project: _select.or(ProjectOwnQueryOneSchema).optional(),
  priority: _select.or(PriorityOwnQueryOneSchema).optional(),
});

export const UserCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserCompleteSelectSchema
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

export const ProjectCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectCompleteSelectSchema
);

export const TagCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagCompleteSelectSchema
);

export const CategoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteSelectSchema
);

export const SprintCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintCompleteSelectSchema
);

export const PriorityCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityCompleteSelectSchema
);

export const StatusCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusCompleteSelectSchema
);

export const PointCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointCompleteSelectSchema
);

export const TaskCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCompleteSelectSchema
);

export const AssignmentHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryCompleteSelectSchema
);

export const PriorityHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryCompleteSelectSchema
);

export const StatusHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryCompleteSelectSchema
);

export const PointHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryCompleteSelectSchema
);

export const TeamHistoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryCompleteSelectSchema
);

export const TaskTagCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagCompleteSelectSchema
);

export const TaskCategoryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryCompleteSelectSchema
);

export const AssignmentCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentCompleteSelectSchema
);

export const CommentCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentCompleteSelectSchema
);

export const ProjectTaskTagCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagCompleteSelectSchema
);

export const ProjectTaskStatusCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusCompleteSelectSchema
);

export const ProjectTaskPriorityCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityCompleteSelectSchema
);

export const UserQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserDistinctSchema.optional(),
  select: UserOwnSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  include: UserIncludeSchemaJson.optional(),
  where: UserOwnWhereSchemaJson.optional(),
  orderBy: UserOwnOrderBySchemaJson.optional(),
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

export const ProjectQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectDistinctSchema.optional(),
  select: ProjectOwnSelectSchemaJson.optional(),
  omit: ProjectOmitSchemaJson.optional(),
  include: ProjectIncludeSchemaJson.optional(),
  where: ProjectOwnWhereSchemaJson.optional(),
  orderBy: ProjectOwnOrderBySchemaJson.optional(),
});

export const TagQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSchema.optional(),
  select: TagOwnSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  include: TagIncludeSchemaJson.optional(),
  where: TagOwnWhereSchemaJson.optional(),
  orderBy: TagOwnOrderBySchemaJson.optional(),
});

export const CategoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryOwnSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryOwnWhereSchemaJson.optional(),
  orderBy: CategoryOwnOrderBySchemaJson.optional(),
});

export const SprintQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SprintDistinctSchema.optional(),
  select: SprintOwnSelectSchemaJson.optional(),
  omit: SprintOmitSchemaJson.optional(),
  include: SprintIncludeSchemaJson.optional(),
  where: SprintOwnWhereSchemaJson.optional(),
  orderBy: SprintOwnOrderBySchemaJson.optional(),
});

export const PriorityQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriorityDistinctSchema.optional(),
  select: PriorityOwnSelectSchemaJson.optional(),
  omit: PriorityOmitSchemaJson.optional(),
  include: PriorityIncludeSchemaJson.optional(),
  where: PriorityOwnWhereSchemaJson.optional(),
  orderBy: PriorityOwnOrderBySchemaJson.optional(),
});

export const StatusQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StatusDistinctSchema.optional(),
  select: StatusOwnSelectSchemaJson.optional(),
  omit: StatusOmitSchemaJson.optional(),
  include: StatusIncludeSchemaJson.optional(),
  where: StatusOwnWhereSchemaJson.optional(),
  orderBy: StatusOwnOrderBySchemaJson.optional(),
});

export const PointQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PointDistinctSchema.optional(),
  select: PointOwnSelectSchemaJson.optional(),
  omit: PointOmitSchemaJson.optional(),
  include: PointIncludeSchemaJson.optional(),
  where: PointOwnWhereSchemaJson.optional(),
  orderBy: PointOwnOrderBySchemaJson.optional(),
});

export const TaskQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskDistinctSchema.optional(),
  select: TaskOwnSelectSchemaJson.optional(),
  omit: TaskOmitSchemaJson.optional(),
  include: TaskIncludeSchemaJson.optional(),
  where: TaskOwnWhereSchemaJson.optional(),
  orderBy: TaskOwnOrderBySchemaJson.optional(),
});

export const AssignmentHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AssignmentHistoryDistinctSchema.optional(),
  select: AssignmentHistoryOwnSelectSchemaJson.optional(),
  omit: AssignmentHistoryOmitSchemaJson.optional(),
  include: AssignmentHistoryIncludeSchemaJson.optional(),
  where: AssignmentHistoryOwnWhereSchemaJson.optional(),
  orderBy: AssignmentHistoryOwnOrderBySchemaJson.optional(),
});

export const PriorityHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriorityHistoryDistinctSchema.optional(),
  select: PriorityHistoryOwnSelectSchemaJson.optional(),
  omit: PriorityHistoryOmitSchemaJson.optional(),
  include: PriorityHistoryIncludeSchemaJson.optional(),
  where: PriorityHistoryOwnWhereSchemaJson.optional(),
  orderBy: PriorityHistoryOwnOrderBySchemaJson.optional(),
});

export const StatusHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StatusHistoryDistinctSchema.optional(),
  select: StatusHistoryOwnSelectSchemaJson.optional(),
  omit: StatusHistoryOmitSchemaJson.optional(),
  include: StatusHistoryIncludeSchemaJson.optional(),
  where: StatusHistoryOwnWhereSchemaJson.optional(),
  orderBy: StatusHistoryOwnOrderBySchemaJson.optional(),
});

export const PointHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PointHistoryDistinctSchema.optional(),
  select: PointHistoryOwnSelectSchemaJson.optional(),
  omit: PointHistoryOmitSchemaJson.optional(),
  include: PointHistoryIncludeSchemaJson.optional(),
  where: PointHistoryOwnWhereSchemaJson.optional(),
  orderBy: PointHistoryOwnOrderBySchemaJson.optional(),
});

export const TeamHistoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamHistoryDistinctSchema.optional(),
  select: TeamHistoryOwnSelectSchemaJson.optional(),
  omit: TeamHistoryOmitSchemaJson.optional(),
  include: TeamHistoryIncludeSchemaJson.optional(),
  where: TeamHistoryOwnWhereSchemaJson.optional(),
  orderBy: TeamHistoryOwnOrderBySchemaJson.optional(),
});

export const TaskTagQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskTagDistinctSchema.optional(),
  select: TaskTagOwnSelectSchemaJson.optional(),
  omit: TaskTagOmitSchemaJson.optional(),
  include: TaskTagIncludeSchemaJson.optional(),
  where: TaskTagOwnWhereSchemaJson.optional(),
  orderBy: TaskTagOwnOrderBySchemaJson.optional(),
});

export const TaskCategoryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskCategoryDistinctSchema.optional(),
  select: TaskCategoryOwnSelectSchemaJson.optional(),
  omit: TaskCategoryOmitSchemaJson.optional(),
  include: TaskCategoryIncludeSchemaJson.optional(),
  where: TaskCategoryOwnWhereSchemaJson.optional(),
  orderBy: TaskCategoryOwnOrderBySchemaJson.optional(),
});

export const AssignmentQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AssignmentDistinctSchema.optional(),
  select: AssignmentOwnSelectSchemaJson.optional(),
  omit: AssignmentOmitSchemaJson.optional(),
  include: AssignmentIncludeSchemaJson.optional(),
  where: AssignmentOwnWhereSchemaJson.optional(),
  orderBy: AssignmentOwnOrderBySchemaJson.optional(),
});

export const CommentQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CommentDistinctSchema.optional(),
  select: CommentOwnSelectSchemaJson.optional(),
  omit: CommentOmitSchemaJson.optional(),
  include: CommentIncludeSchemaJson.optional(),
  where: CommentOwnWhereSchemaJson.optional(),
  orderBy: CommentOwnOrderBySchemaJson.optional(),
});

export const ProjectTaskTagQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskTagDistinctSchema.optional(),
  select: ProjectTaskTagOwnSelectSchemaJson.optional(),
  omit: ProjectTaskTagOmitSchemaJson.optional(),
  include: ProjectTaskTagIncludeSchemaJson.optional(),
  where: ProjectTaskTagOwnWhereSchemaJson.optional(),
  orderBy: ProjectTaskTagOwnOrderBySchemaJson.optional(),
});

export const ProjectTaskStatusQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskStatusDistinctSchema.optional(),
  select: ProjectTaskStatusOwnSelectSchemaJson.optional(),
  omit: ProjectTaskStatusOmitSchemaJson.optional(),
  include: ProjectTaskStatusIncludeSchemaJson.optional(),
  where: ProjectTaskStatusOwnWhereSchemaJson.optional(),
  orderBy: ProjectTaskStatusOwnOrderBySchemaJson.optional(),
});

export const ProjectTaskPriorityQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskPriorityDistinctSchema.optional(),
  select: ProjectTaskPriorityOwnSelectSchemaJson.optional(),
  omit: ProjectTaskPriorityOmitSchemaJson.optional(),
  include: ProjectTaskPriorityIncludeSchemaJson.optional(),
  where: ProjectTaskPriorityOwnWhereSchemaJson.optional(),
  orderBy: ProjectTaskPriorityOwnOrderBySchemaJson.optional(),
});

export const UserQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserQuerySchema
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

export const ProjectQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectQuerySchema
);

export const TagQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagQuerySchema
);

export const CategoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryQuerySchema
);

export const SprintQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintQuerySchema
);

export const PriorityQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityQuerySchema
);

export const StatusQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusQuerySchema
);

export const PointQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointQuerySchema
);

export const TaskQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskQuerySchema
);

export const AssignmentHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryQuerySchema
);

export const PriorityHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryQuerySchema
);

export const StatusHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryQuerySchema
);

export const PointHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryQuerySchema
);

export const TeamHistoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryQuerySchema
);

export const TaskTagQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagQuerySchema
);

export const TaskCategoryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryQuerySchema
);

export const AssignmentQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentQuerySchema
);

export const CommentQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentQuerySchema
);

export const ProjectTaskTagQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagQuerySchema
);

export const ProjectTaskStatusQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusQuerySchema
);

export const ProjectTaskPriorityQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityQuerySchema
);

export const UserCompleteQueryOneSchema = z.object({
  select: UserSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  include: UserIncludeSchemaJson.optional(),
  where: UserWhereSchemaJson.optional(),
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

export const ProjectCompleteQueryOneSchema = z.object({
  select: ProjectSelectSchemaJson.optional(),
  omit: ProjectOmitSchemaJson.optional(),
  include: ProjectIncludeSchemaJson.optional(),
  where: ProjectWhereSchemaJson.optional(),
});

export const TagCompleteQueryOneSchema = z.object({
  select: TagSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  include: TagIncludeSchemaJson.optional(),
  where: TagWhereSchemaJson.optional(),
});

export const CategoryCompleteQueryOneSchema = z.object({
  select: CategorySelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryWhereSchemaJson.optional(),
});

export const SprintCompleteQueryOneSchema = z.object({
  select: SprintSelectSchemaJson.optional(),
  omit: SprintOmitSchemaJson.optional(),
  include: SprintIncludeSchemaJson.optional(),
  where: SprintWhereSchemaJson.optional(),
});

export const PriorityCompleteQueryOneSchema = z.object({
  select: PrioritySelectSchemaJson.optional(),
  omit: PriorityOmitSchemaJson.optional(),
  include: PriorityIncludeSchemaJson.optional(),
  where: PriorityWhereSchemaJson.optional(),
});

export const StatusCompleteQueryOneSchema = z.object({
  select: StatusSelectSchemaJson.optional(),
  omit: StatusOmitSchemaJson.optional(),
  include: StatusIncludeSchemaJson.optional(),
  where: StatusWhereSchemaJson.optional(),
});

export const PointCompleteQueryOneSchema = z.object({
  select: PointSelectSchemaJson.optional(),
  omit: PointOmitSchemaJson.optional(),
  include: PointIncludeSchemaJson.optional(),
  where: PointWhereSchemaJson.optional(),
});

export const TaskCompleteQueryOneSchema = z.object({
  select: TaskSelectSchemaJson.optional(),
  omit: TaskOmitSchemaJson.optional(),
  include: TaskIncludeSchemaJson.optional(),
  where: TaskWhereSchemaJson.optional(),
});

export const AssignmentHistoryCompleteQueryOneSchema = z.object({
  select: AssignmentHistorySelectSchemaJson.optional(),
  omit: AssignmentHistoryOmitSchemaJson.optional(),
  include: AssignmentHistoryIncludeSchemaJson.optional(),
  where: AssignmentHistoryWhereSchemaJson.optional(),
});

export const PriorityHistoryCompleteQueryOneSchema = z.object({
  select: PriorityHistorySelectSchemaJson.optional(),
  omit: PriorityHistoryOmitSchemaJson.optional(),
  include: PriorityHistoryIncludeSchemaJson.optional(),
  where: PriorityHistoryWhereSchemaJson.optional(),
});

export const StatusHistoryCompleteQueryOneSchema = z.object({
  select: StatusHistorySelectSchemaJson.optional(),
  omit: StatusHistoryOmitSchemaJson.optional(),
  include: StatusHistoryIncludeSchemaJson.optional(),
  where: StatusHistoryWhereSchemaJson.optional(),
});

export const PointHistoryCompleteQueryOneSchema = z.object({
  select: PointHistorySelectSchemaJson.optional(),
  omit: PointHistoryOmitSchemaJson.optional(),
  include: PointHistoryIncludeSchemaJson.optional(),
  where: PointHistoryWhereSchemaJson.optional(),
});

export const TeamHistoryCompleteQueryOneSchema = z.object({
  select: TeamHistorySelectSchemaJson.optional(),
  omit: TeamHistoryOmitSchemaJson.optional(),
  include: TeamHistoryIncludeSchemaJson.optional(),
  where: TeamHistoryWhereSchemaJson.optional(),
});

export const TaskTagCompleteQueryOneSchema = z.object({
  select: TaskTagSelectSchemaJson.optional(),
  omit: TaskTagOmitSchemaJson.optional(),
  include: TaskTagIncludeSchemaJson.optional(),
  where: TaskTagWhereSchemaJson.optional(),
});

export const TaskCategoryCompleteQueryOneSchema = z.object({
  select: TaskCategorySelectSchemaJson.optional(),
  omit: TaskCategoryOmitSchemaJson.optional(),
  include: TaskCategoryIncludeSchemaJson.optional(),
  where: TaskCategoryWhereSchemaJson.optional(),
});

export const AssignmentCompleteQueryOneSchema = z.object({
  select: AssignmentSelectSchemaJson.optional(),
  omit: AssignmentOmitSchemaJson.optional(),
  include: AssignmentIncludeSchemaJson.optional(),
  where: AssignmentWhereSchemaJson.optional(),
});

export const CommentCompleteQueryOneSchema = z.object({
  select: CommentSelectSchemaJson.optional(),
  omit: CommentOmitSchemaJson.optional(),
  include: CommentIncludeSchemaJson.optional(),
  where: CommentWhereSchemaJson.optional(),
});

export const ProjectTaskTagCompleteQueryOneSchema = z.object({
  select: ProjectTaskTagSelectSchemaJson.optional(),
  omit: ProjectTaskTagOmitSchemaJson.optional(),
  include: ProjectTaskTagIncludeSchemaJson.optional(),
  where: ProjectTaskTagWhereSchemaJson.optional(),
});

export const ProjectTaskStatusCompleteQueryOneSchema = z.object({
  select: ProjectTaskStatusSelectSchemaJson.optional(),
  omit: ProjectTaskStatusOmitSchemaJson.optional(),
  include: ProjectTaskStatusIncludeSchemaJson.optional(),
  where: ProjectTaskStatusWhereSchemaJson.optional(),
});

export const ProjectTaskPriorityCompleteQueryOneSchema = z.object({
  select: ProjectTaskPrioritySelectSchemaJson.optional(),
  omit: ProjectTaskPriorityOmitSchemaJson.optional(),
  include: ProjectTaskPriorityIncludeSchemaJson.optional(),
  where: ProjectTaskPriorityWhereSchemaJson.optional(),
});

export const UserCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserCompleteQueryOneSchema
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

export const ProjectCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectCompleteQueryOneSchema
);

export const TagCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagCompleteQueryOneSchema
);

export const CategoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQueryOneSchema
);

export const SprintCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintCompleteQueryOneSchema
);

export const PriorityCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityCompleteQueryOneSchema
);

export const StatusCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusCompleteQueryOneSchema
);

export const PointCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointCompleteQueryOneSchema
);

export const TaskCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCompleteQueryOneSchema
);

export const AssignmentHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryCompleteQueryOneSchema
);

export const PriorityHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryCompleteQueryOneSchema
);

export const StatusHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryCompleteQueryOneSchema
);

export const PointHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryCompleteQueryOneSchema
);

export const TeamHistoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryCompleteQueryOneSchema
);

export const TaskTagCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagCompleteQueryOneSchema
);

export const TaskCategoryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryCompleteQueryOneSchema
);

export const AssignmentCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentCompleteQueryOneSchema
);

export const CommentCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentCompleteQueryOneSchema
);

export const ProjectTaskTagCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagCompleteQueryOneSchema
);

export const ProjectTaskStatusCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusCompleteQueryOneSchema
);

export const ProjectTaskPriorityCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityCompleteQueryOneSchema
);

export const UserCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: UserDistinctSchema.optional(),
  select: UserCompleteSelectSchemaJson.optional(),
  omit: UserOmitSchemaJson.optional(),
  include: UserIncludeSchemaJson.optional(),
  where: UserWhereSchemaJson.optional(),
  orderBy: UserOrderBySchemaJson.optional(),
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

export const ProjectCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectDistinctSchema.optional(),
  select: ProjectCompleteSelectSchemaJson.optional(),
  omit: ProjectOmitSchemaJson.optional(),
  include: ProjectIncludeSchemaJson.optional(),
  where: ProjectWhereSchemaJson.optional(),
  orderBy: ProjectOrderBySchemaJson.optional(),
});

export const TagCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TagDistinctSchema.optional(),
  select: TagCompleteSelectSchemaJson.optional(),
  omit: TagOmitSchemaJson.optional(),
  include: TagIncludeSchemaJson.optional(),
  where: TagWhereSchemaJson.optional(),
  orderBy: TagOrderBySchemaJson.optional(),
});

export const CategoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CategoryDistinctSchema.optional(),
  select: CategoryCompleteSelectSchemaJson.optional(),
  omit: CategoryOmitSchemaJson.optional(),
  include: CategoryIncludeSchemaJson.optional(),
  where: CategoryWhereSchemaJson.optional(),
  orderBy: CategoryOrderBySchemaJson.optional(),
});

export const SprintCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: SprintDistinctSchema.optional(),
  select: SprintCompleteSelectSchemaJson.optional(),
  omit: SprintOmitSchemaJson.optional(),
  include: SprintIncludeSchemaJson.optional(),
  where: SprintWhereSchemaJson.optional(),
  orderBy: SprintOrderBySchemaJson.optional(),
});

export const PriorityCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriorityDistinctSchema.optional(),
  select: PriorityCompleteSelectSchemaJson.optional(),
  omit: PriorityOmitSchemaJson.optional(),
  include: PriorityIncludeSchemaJson.optional(),
  where: PriorityWhereSchemaJson.optional(),
  orderBy: PriorityOrderBySchemaJson.optional(),
});

export const StatusCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StatusDistinctSchema.optional(),
  select: StatusCompleteSelectSchemaJson.optional(),
  omit: StatusOmitSchemaJson.optional(),
  include: StatusIncludeSchemaJson.optional(),
  where: StatusWhereSchemaJson.optional(),
  orderBy: StatusOrderBySchemaJson.optional(),
});

export const PointCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PointDistinctSchema.optional(),
  select: PointCompleteSelectSchemaJson.optional(),
  omit: PointOmitSchemaJson.optional(),
  include: PointIncludeSchemaJson.optional(),
  where: PointWhereSchemaJson.optional(),
  orderBy: PointOrderBySchemaJson.optional(),
});

export const TaskCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskDistinctSchema.optional(),
  select: TaskCompleteSelectSchemaJson.optional(),
  omit: TaskOmitSchemaJson.optional(),
  include: TaskIncludeSchemaJson.optional(),
  where: TaskWhereSchemaJson.optional(),
  orderBy: TaskOrderBySchemaJson.optional(),
});

export const AssignmentHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AssignmentHistoryDistinctSchema.optional(),
  select: AssignmentHistoryCompleteSelectSchemaJson.optional(),
  omit: AssignmentHistoryOmitSchemaJson.optional(),
  include: AssignmentHistoryIncludeSchemaJson.optional(),
  where: AssignmentHistoryWhereSchemaJson.optional(),
  orderBy: AssignmentHistoryOrderBySchemaJson.optional(),
});

export const PriorityHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PriorityHistoryDistinctSchema.optional(),
  select: PriorityHistoryCompleteSelectSchemaJson.optional(),
  omit: PriorityHistoryOmitSchemaJson.optional(),
  include: PriorityHistoryIncludeSchemaJson.optional(),
  where: PriorityHistoryWhereSchemaJson.optional(),
  orderBy: PriorityHistoryOrderBySchemaJson.optional(),
});

export const StatusHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StatusHistoryDistinctSchema.optional(),
  select: StatusHistoryCompleteSelectSchemaJson.optional(),
  omit: StatusHistoryOmitSchemaJson.optional(),
  include: StatusHistoryIncludeSchemaJson.optional(),
  where: StatusHistoryWhereSchemaJson.optional(),
  orderBy: StatusHistoryOrderBySchemaJson.optional(),
});

export const PointHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PointHistoryDistinctSchema.optional(),
  select: PointHistoryCompleteSelectSchemaJson.optional(),
  omit: PointHistoryOmitSchemaJson.optional(),
  include: PointHistoryIncludeSchemaJson.optional(),
  where: PointHistoryWhereSchemaJson.optional(),
  orderBy: PointHistoryOrderBySchemaJson.optional(),
});

export const TeamHistoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TeamHistoryDistinctSchema.optional(),
  select: TeamHistoryCompleteSelectSchemaJson.optional(),
  omit: TeamHistoryOmitSchemaJson.optional(),
  include: TeamHistoryIncludeSchemaJson.optional(),
  where: TeamHistoryWhereSchemaJson.optional(),
  orderBy: TeamHistoryOrderBySchemaJson.optional(),
});

export const TaskTagCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskTagDistinctSchema.optional(),
  select: TaskTagCompleteSelectSchemaJson.optional(),
  omit: TaskTagOmitSchemaJson.optional(),
  include: TaskTagIncludeSchemaJson.optional(),
  where: TaskTagWhereSchemaJson.optional(),
  orderBy: TaskTagOrderBySchemaJson.optional(),
});

export const TaskCategoryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TaskCategoryDistinctSchema.optional(),
  select: TaskCategoryCompleteSelectSchemaJson.optional(),
  omit: TaskCategoryOmitSchemaJson.optional(),
  include: TaskCategoryIncludeSchemaJson.optional(),
  where: TaskCategoryWhereSchemaJson.optional(),
  orderBy: TaskCategoryOrderBySchemaJson.optional(),
});

export const AssignmentCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AssignmentDistinctSchema.optional(),
  select: AssignmentCompleteSelectSchemaJson.optional(),
  omit: AssignmentOmitSchemaJson.optional(),
  include: AssignmentIncludeSchemaJson.optional(),
  where: AssignmentWhereSchemaJson.optional(),
  orderBy: AssignmentOrderBySchemaJson.optional(),
});

export const CommentCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CommentDistinctSchema.optional(),
  select: CommentCompleteSelectSchemaJson.optional(),
  omit: CommentOmitSchemaJson.optional(),
  include: CommentIncludeSchemaJson.optional(),
  where: CommentWhereSchemaJson.optional(),
  orderBy: CommentOrderBySchemaJson.optional(),
});

export const ProjectTaskTagCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskTagDistinctSchema.optional(),
  select: ProjectTaskTagCompleteSelectSchemaJson.optional(),
  omit: ProjectTaskTagOmitSchemaJson.optional(),
  include: ProjectTaskTagIncludeSchemaJson.optional(),
  where: ProjectTaskTagWhereSchemaJson.optional(),
  orderBy: ProjectTaskTagOrderBySchemaJson.optional(),
});

export const ProjectTaskStatusCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskStatusDistinctSchema.optional(),
  select: ProjectTaskStatusCompleteSelectSchemaJson.optional(),
  omit: ProjectTaskStatusOmitSchemaJson.optional(),
  include: ProjectTaskStatusIncludeSchemaJson.optional(),
  where: ProjectTaskStatusWhereSchemaJson.optional(),
  orderBy: ProjectTaskStatusOrderBySchemaJson.optional(),
});

export const ProjectTaskPriorityCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ProjectTaskPriorityDistinctSchema.optional(),
  select: ProjectTaskPriorityCompleteSelectSchemaJson.optional(),
  omit: ProjectTaskPriorityOmitSchemaJson.optional(),
  include: ProjectTaskPriorityIncludeSchemaJson.optional(),
  where: ProjectTaskPriorityWhereSchemaJson.optional(),
  orderBy: ProjectTaskPriorityOrderBySchemaJson.optional(),
});

export const UserCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  UserCompleteQuerySchema
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

export const ProjectCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectCompleteQuerySchema
);

export const TagCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TagCompleteQuerySchema
);

export const CategoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CategoryCompleteQuerySchema
);

export const SprintCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  SprintCompleteQuerySchema
);

export const PriorityCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityCompleteQuerySchema
);

export const StatusCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusCompleteQuerySchema
);

export const PointCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointCompleteQuerySchema
);

export const TaskCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCompleteQuerySchema
);

export const AssignmentHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentHistoryCompleteQuerySchema
);

export const PriorityHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PriorityHistoryCompleteQuerySchema
);

export const StatusHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StatusHistoryCompleteQuerySchema
);

export const PointHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PointHistoryCompleteQuerySchema
);

export const TeamHistoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TeamHistoryCompleteQuerySchema
);

export const TaskTagCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskTagCompleteQuerySchema
);

export const TaskCategoryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TaskCategoryCompleteQuerySchema
);

export const AssignmentCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AssignmentCompleteQuerySchema
);

export const CommentCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CommentCompleteQuerySchema
);

export const ProjectTaskTagCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskTagCompleteQuerySchema
);

export const ProjectTaskStatusCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskStatusCompleteQuerySchema
);

export const ProjectTaskPriorityCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ProjectTaskPriorityCompleteQuerySchema
);

export const UserProjectionSchema = z.union([
  z.object({ omit: UserOmitSchemaJson }),
  z.object({ select: UserSelectSchemaJson }),
  z.object({ include: UserIncludeSchemaJson }),
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

export const ProjectProjectionSchema = z.union([
  z.object({ omit: ProjectOmitSchemaJson }),
  z.object({ select: ProjectSelectSchemaJson }),
  z.object({ include: ProjectIncludeSchemaJson }),
  z.object({}),
]);

export const TagProjectionSchema = z.union([
  z.object({ omit: TagOmitSchemaJson }),
  z.object({ select: TagSelectSchemaJson }),
  z.object({ include: TagIncludeSchemaJson }),
  z.object({}),
]);

export const CategoryProjectionSchema = z.union([
  z.object({ omit: CategoryOmitSchemaJson }),
  z.object({ select: CategorySelectSchemaJson }),
  z.object({ include: CategoryIncludeSchemaJson }),
  z.object({}),
]);

export const SprintProjectionSchema = z.union([
  z.object({ omit: SprintOmitSchemaJson }),
  z.object({ select: SprintSelectSchemaJson }),
  z.object({ include: SprintIncludeSchemaJson }),
  z.object({}),
]);

export const PriorityProjectionSchema = z.union([
  z.object({ omit: PriorityOmitSchemaJson }),
  z.object({ select: PrioritySelectSchemaJson }),
  z.object({ include: PriorityIncludeSchemaJson }),
  z.object({}),
]);

export const StatusProjectionSchema = z.union([
  z.object({ omit: StatusOmitSchemaJson }),
  z.object({ select: StatusSelectSchemaJson }),
  z.object({ include: StatusIncludeSchemaJson }),
  z.object({}),
]);

export const PointProjectionSchema = z.union([
  z.object({ omit: PointOmitSchemaJson }),
  z.object({ select: PointSelectSchemaJson }),
  z.object({ include: PointIncludeSchemaJson }),
  z.object({}),
]);

export const TaskProjectionSchema = z.union([
  z.object({ omit: TaskOmitSchemaJson }),
  z.object({ select: TaskSelectSchemaJson }),
  z.object({ include: TaskIncludeSchemaJson }),
  z.object({}),
]);

export const AssignmentHistoryProjectionSchema = z.union([
  z.object({ omit: AssignmentHistoryOmitSchemaJson }),
  z.object({ select: AssignmentHistorySelectSchemaJson }),
  z.object({ include: AssignmentHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const PriorityHistoryProjectionSchema = z.union([
  z.object({ omit: PriorityHistoryOmitSchemaJson }),
  z.object({ select: PriorityHistorySelectSchemaJson }),
  z.object({ include: PriorityHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const StatusHistoryProjectionSchema = z.union([
  z.object({ omit: StatusHistoryOmitSchemaJson }),
  z.object({ select: StatusHistorySelectSchemaJson }),
  z.object({ include: StatusHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const PointHistoryProjectionSchema = z.union([
  z.object({ omit: PointHistoryOmitSchemaJson }),
  z.object({ select: PointHistorySelectSchemaJson }),
  z.object({ include: PointHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const TeamHistoryProjectionSchema = z.union([
  z.object({ omit: TeamHistoryOmitSchemaJson }),
  z.object({ select: TeamHistorySelectSchemaJson }),
  z.object({ include: TeamHistoryIncludeSchemaJson }),
  z.object({}),
]);

export const TaskTagProjectionSchema = z.union([
  z.object({ omit: TaskTagOmitSchemaJson }),
  z.object({ select: TaskTagSelectSchemaJson }),
  z.object({ include: TaskTagIncludeSchemaJson }),
  z.object({}),
]);

export const TaskCategoryProjectionSchema = z.union([
  z.object({ omit: TaskCategoryOmitSchemaJson }),
  z.object({ select: TaskCategorySelectSchemaJson }),
  z.object({ include: TaskCategoryIncludeSchemaJson }),
  z.object({}),
]);

export const AssignmentProjectionSchema = z.union([
  z.object({ omit: AssignmentOmitSchemaJson }),
  z.object({ select: AssignmentSelectSchemaJson }),
  z.object({ include: AssignmentIncludeSchemaJson }),
  z.object({}),
]);

export const CommentProjectionSchema = z.union([
  z.object({ omit: CommentOmitSchemaJson }),
  z.object({ select: CommentSelectSchemaJson }),
  z.object({ include: CommentIncludeSchemaJson }),
  z.object({}),
]);

export const ProjectTaskTagProjectionSchema = z.union([
  z.object({ omit: ProjectTaskTagOmitSchemaJson }),
  z.object({ select: ProjectTaskTagSelectSchemaJson }),
  z.object({ include: ProjectTaskTagIncludeSchemaJson }),
  z.object({}),
]);

export const ProjectTaskStatusProjectionSchema = z.union([
  z.object({ omit: ProjectTaskStatusOmitSchemaJson }),
  z.object({ select: ProjectTaskStatusSelectSchemaJson }),
  z.object({ include: ProjectTaskStatusIncludeSchemaJson }),
  z.object({}),
]);

export const ProjectTaskPriorityProjectionSchema = z.union([
  z.object({ omit: ProjectTaskPriorityOmitSchemaJson }),
  z.object({ select: ProjectTaskPrioritySelectSchemaJson }),
  z.object({ include: ProjectTaskPriorityIncludeSchemaJson }),
  z.object({}),
]);

export const UserOwnCreateSchema = z.object({
  uuid: _str,
  displayName: _str,
  slug: _slug,
  title: _str,
});

export const TeamOwnCreateSchema = z.object({
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const TeamManagerOwnCreateSchema = z.object({
  managerId: _id,
  teamId: _id,
});

export const TeamMemberOwnCreateSchema = z.object({
  teamId: _id,
  memberId: _id,
});

export const ProjectOwnCreateSchema = z.object({
  createdById: _id,
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
  startDate: _date.optional(),
  dueDate: _date.optional(),
  endDate: _date.optional(),
});

export const TagOwnCreateSchema = z.object({
  name: _name,
  isDefault: _bool.optional(),
});

export const CategoryOwnCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
});

export const SprintOwnCreateSchema = z.object({
  createdById: _id,
  projectId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const PriorityOwnCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
});

export const StatusOwnCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
});

export const PointOwnCreateSchema = z.object({
  name: _name,
  point: _int,
  description: _description.optional(),
});

export const TaskOwnCreateSchema = z.object({
  sprintId: _id.optional(),
  createdById: _id,
  priorityId: _id.optional(),
  pointId: _id,
  statusId: _id.optional(),
  parentId: _id.optional(),
  title: _str,
  slug: _slug,
  description: _description.optional(),
  due: _date.optional(),
  resolvedAt: _date.optional(),
});

export const AssignmentHistoryOwnCreateSchema = z.object({
  createdById: _id,
  projectId: _id,
  taskId: _id,
  oldUserId: _id,
  newUserId: _id,
});

export const PriorityHistoryOwnCreateSchema = z.object({
  createdById: _id,
  projectId: _id,
  taskId: _id,
  oldPriorityId: _id.optional(),
  newPriorityId: _id,
});

export const StatusHistoryOwnCreateSchema = z.object({
  createdById: _id,
  oldStatusId: _id.optional(),
  newStatusId: _id,
  projectId: _id,
  taskId: _id,
});

export const PointHistoryOwnCreateSchema = z.object({
  createdById: _id,
  oldPointId: _id.optional(),
  newPointId: _id,
  projectId: _id,
  taskId: _id,
});

export const TeamHistoryOwnCreateSchema = z.object({
  createdById: _id,
  oldTeamId: _id.optional(),
  newTeamId: _id,
});

export const TaskTagOwnCreateSchema = z.object({ taskId: _id, tagId: _id });

export const TaskCategoryOwnCreateSchema = z.object({
  categoryId: _id,
  taskId: _id,
});

export const AssignmentOwnCreateSchema = z.object({
  assigneeId: _id,
  taskId: _id,
});

export const CommentOwnCreateSchema = z.object({
  parentId: _id.optional(),
  createdById: _id,
  taskId: _id,
  comment: _str,
});

export const ProjectTaskTagOwnCreateSchema = z.object({
  projectId: _id,
  tagId: _id,
});

export const ProjectTaskStatusOwnCreateSchema = z.object({
  projectId: _id,
  statusId: _id,
});

export const ProjectTaskPriorityOwnCreateSchema = z.object({
  projectId: _id,
  priorityId: _id,
});

export const UserCreateSchema = z.object({
  uuid: _str,
  displayName: _str,
  slug: _slug,
  title: _str,
  assignments: z
    .object({ createMany: AssignmentOwnCreateSchema.array() })
    .array(),
  managedTeams: z
    .object({ createMany: TeamManagerOwnCreateSchema.array() })
    .array(),
  memberships: z
    .object({ createMany: TeamMemberOwnCreateSchema.array() })
    .array(),
  createdProjects: z
    .object({ createMany: ProjectOwnCreateSchema.array() })
    .array(),
  createdSprints: z
    .object({ createMany: SprintOwnCreateSchema.array() })
    .array(),
  createdTasks: z.object({ createMany: TaskOwnCreateSchema.array() }).array(),
  createdComments: z
    .object({ createMany: CommentOwnCreateSchema.array() })
    .array(),
  takenAssignments: z
    .object({ createMany: AssignmentHistoryOwnCreateSchema.array() })
    .array(),
  givenAssignments: z
    .object({ createMany: AssignmentHistoryOwnCreateSchema.array() })
    .array(),
  changedAssignments: z
    .object({ createMany: AssignmentHistoryOwnCreateSchema.array() })
    .array(),
  changedPriorities: z
    .object({ createMany: PriorityHistoryOwnCreateSchema.array() })
    .array(),
  changedStatuses: z
    .object({ createMany: StatusHistoryOwnCreateSchema.array() })
    .array(),
  changedPoints: z
    .object({ createMany: PointHistoryOwnCreateSchema.array() })
    .array(),
  changedTeams: z
    .object({ createMany: TeamHistoryOwnCreateSchema.array() })
    .array(),
});

export const TeamCreateSchema = z.object({
  name: _name,
  slug: _slug,
  description: _description.optional(),
  managers: z
    .object({ createMany: TeamManagerOwnCreateSchema.array() })
    .array(),
  members: z.object({ createMany: TeamMemberOwnCreateSchema.array() }).array(),
  takenTeams: z
    .object({ createMany: TeamHistoryOwnCreateSchema.array() })
    .array(),
  givenTeams: z
    .object({ createMany: TeamHistoryOwnCreateSchema.array() })
    .array(),
});

export const TeamManagerCreateSchema = z.object({
  managerId: _id,
  teamId: _id,
  manager: z.object({ create: UserOwnCreateSchema }),
  team: z.object({ create: TeamOwnCreateSchema }),
});

export const TeamMemberCreateSchema = z.object({
  teamId: _id,
  memberId: _id,
  team: z.object({ create: TeamOwnCreateSchema }),
  member: z.object({ create: UserOwnCreateSchema }),
});

export const ProjectCreateSchema = z.object({
  createdById: _id,
  parentId: _id.optional(),
  parent: z.object({ create: ProjectOwnCreateSchema }).optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
  startDate: _date.optional(),
  dueDate: _date.optional(),
  endDate: _date.optional(),
  sprints: z.object({ createMany: SprintOwnCreateSchema.array() }).array(),
  createdBy: z.object({ create: UserOwnCreateSchema }),
  tags: z.object({ createMany: ProjectTaskTagOwnCreateSchema.array() }).array(),
  statuses: z
    .object({ createMany: ProjectTaskStatusOwnCreateSchema.array() })
    .array(),
  priorities: z
    .object({ createMany: ProjectTaskPriorityOwnCreateSchema.array() })
    .array(),
  assignmentHistory: z
    .object({ createMany: AssignmentHistoryOwnCreateSchema.array() })
    .array(),
  priorityHistory: z
    .object({ createMany: PriorityHistoryOwnCreateSchema.array() })
    .array(),
  statusHistory: z
    .object({ createMany: StatusHistoryOwnCreateSchema.array() })
    .array(),
  pointHistory: z
    .object({ createMany: PointHistoryOwnCreateSchema.array() })
    .array(),
  projects: z.object({ createMany: ProjectOwnCreateSchema.array() }).array(),
});

export const TagCreateSchema = z.object({
  name: _name,
  isDefault: _bool.optional(),
  tasks: z.object({ createMany: TaskTagOwnCreateSchema.array() }).array(),
  projects: z
    .object({ createMany: ProjectTaskTagOwnCreateSchema.array() })
    .array(),
});

export const CategoryCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
  parent: z.object({ create: CategoryOwnCreateSchema }).optional(),
  categories: z.object({ createMany: CategoryOwnCreateSchema.array() }).array(),
  tasks: z.object({ createMany: TaskCategoryOwnCreateSchema.array() }).array(),
});

export const SprintCreateSchema = z.object({
  createdById: _id,
  projectId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
  project: z.object({ create: ProjectOwnCreateSchema }).optional(),
  tasks: z.object({ createMany: TaskOwnCreateSchema.array() }).array(),
  createdBy: z.object({ create: UserOwnCreateSchema }),
});

export const PriorityCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
  tasks: z.object({ createMany: TaskOwnCreateSchema.array() }).array(),
  projects: z
    .object({ createMany: ProjectTaskPriorityOwnCreateSchema.array() })
    .array(),
  takenPriorities: z
    .object({ createMany: PriorityHistoryOwnCreateSchema.array() })
    .array(),
  givenPriorities: z
    .object({ createMany: PriorityHistoryOwnCreateSchema.array() })
    .array(),
});

export const StatusCreateSchema = z.object({
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
  tasks: z.object({ createMany: TaskOwnCreateSchema.array() }).array(),
  projects: z
    .object({ createMany: ProjectTaskStatusOwnCreateSchema.array() })
    .array(),
  takenStatuses: z
    .object({ createMany: StatusHistoryOwnCreateSchema.array() })
    .array(),
  givenStatuses: z
    .object({ createMany: StatusHistoryOwnCreateSchema.array() })
    .array(),
});

export const PointCreateSchema = z.object({
  name: _name,
  point: _int,
  description: _description.optional(),
  tasks: z.object({ createMany: TaskOwnCreateSchema.array() }).array(),
  takenPointes: z
    .object({ createMany: PointHistoryOwnCreateSchema.array() })
    .array(),
  givenPointes: z
    .object({ createMany: PointHistoryOwnCreateSchema.array() })
    .array(),
});

export const TaskCreateSchema = z.object({
  sprintId: _id.optional(),
  createdById: _id,
  priorityId: _id.optional(),
  pointId: _id,
  statusId: _id.optional(),
  parentId: _id.optional(),
  title: _str,
  slug: _slug,
  description: _description.optional(),
  due: _date.optional(),
  resolvedAt: _date.optional(),
  comments: z.object({ createMany: CommentOwnCreateSchema.array() }).array(),
  parent: z.object({ create: TaskOwnCreateSchema }).optional(),
  tasks: z.object({ createMany: TaskOwnCreateSchema.array() }).array(),
  createdBy: z.object({ create: UserOwnCreateSchema }),
  assignments: z
    .object({ createMany: AssignmentOwnCreateSchema.array() })
    .array(),
  tags: z.object({ createMany: TaskTagOwnCreateSchema.array() }).array(),
  categories: z
    .object({ createMany: TaskCategoryOwnCreateSchema.array() })
    .array(),
  point: z.object({ create: PointOwnCreateSchema }),
  priority: z.object({ create: PriorityOwnCreateSchema }).optional(),
  status: z.object({ create: StatusOwnCreateSchema }).optional(),
  sprint: z.object({ create: SprintOwnCreateSchema }).optional(),
  assignmentHistory: z
    .object({ createMany: AssignmentHistoryOwnCreateSchema.array() })
    .array(),
  statusHistory: z
    .object({ createMany: StatusHistoryOwnCreateSchema.array() })
    .array(),
  priorityHistory: z
    .object({ createMany: PriorityHistoryOwnCreateSchema.array() })
    .array(),
  pointHistory: z
    .object({ createMany: PointHistoryOwnCreateSchema.array() })
    .array(),
});

export const AssignmentHistoryCreateSchema = z.object({
  createdById: _id,
  projectId: _id,
  taskId: _id,
  oldUserId: _id,
  newUserId: _id,
  oldUser: z.object({ create: UserOwnCreateSchema }),
  newUser: z.object({ create: UserOwnCreateSchema }),
  createdBy: z.object({ create: UserOwnCreateSchema }),
  task: z.object({ create: TaskOwnCreateSchema }),
  project: z.object({ create: ProjectOwnCreateSchema }),
});

export const PriorityHistoryCreateSchema = z.object({
  createdById: _id,
  projectId: _id,
  taskId: _id,
  oldPriorityId: _id.optional(),
  newPriorityId: _id,
  oldPriority: z.object({ create: PriorityOwnCreateSchema }).optional(),
  newPriority: z.object({ create: PriorityOwnCreateSchema }),
  createdBy: z.object({ create: UserOwnCreateSchema }),
  task: z.object({ create: TaskOwnCreateSchema }),
  project: z.object({ create: ProjectOwnCreateSchema }),
});

export const StatusHistoryCreateSchema = z.object({
  createdById: _id,
  oldStatusId: _id.optional(),
  newStatusId: _id,
  projectId: _id,
  taskId: _id,
  task: z.object({ create: TaskOwnCreateSchema }),
  oldStatus: z.object({ create: StatusOwnCreateSchema }).optional(),
  newStatus: z.object({ create: StatusOwnCreateSchema }),
  createdBy: z.object({ create: UserOwnCreateSchema }),
  project: z.object({ create: ProjectOwnCreateSchema }),
});

export const PointHistoryCreateSchema = z.object({
  createdById: _id,
  oldPointId: _id.optional(),
  newPointId: _id,
  projectId: _id,
  taskId: _id,
  task: z.object({ create: TaskOwnCreateSchema }),
  oldPoint: z.object({ create: PointOwnCreateSchema }).optional(),
  newPoint: z.object({ create: PointOwnCreateSchema }),
  createdBy: z.object({ create: UserOwnCreateSchema }),
  project: z.object({ create: ProjectOwnCreateSchema }),
});

export const TeamHistoryCreateSchema = z.object({
  createdById: _id,
  oldTeamId: _id.optional(),
  newTeamId: _id,
  oldTeam: z.object({ create: TeamOwnCreateSchema }).optional(),
  newTeam: z.object({ create: TeamOwnCreateSchema }),
  createdBy: z.object({ create: UserOwnCreateSchema }),
});

export const TaskTagCreateSchema = z.object({
  taskId: _id,
  tagId: _id,
  task: z.object({ create: TaskOwnCreateSchema }),
  tag: z.object({ create: TagOwnCreateSchema }),
});

export const TaskCategoryCreateSchema = z.object({
  categoryId: _id,
  taskId: _id,
  task: z.object({ create: TaskOwnCreateSchema }),
  category: z.object({ create: CategoryOwnCreateSchema }),
});

export const AssignmentCreateSchema = z.object({
  assigneeId: _id,
  taskId: _id,
  task: z.object({ create: TaskOwnCreateSchema }),
  assignee: z.object({ create: UserOwnCreateSchema }),
});

export const CommentCreateSchema = z.object({
  parentId: _id.optional(),
  createdById: _id,
  taskId: _id,
  comment: _str,
  parent: z.object({ create: CommentOwnCreateSchema }).optional(),
  comments: z.object({ createMany: CommentOwnCreateSchema.array() }).array(),
  createdBy: z.object({ create: UserOwnCreateSchema }),
  task: z.object({ create: TaskOwnCreateSchema }),
});

export const ProjectTaskTagCreateSchema = z.object({
  projectId: _id,
  tagId: _id,
  tag: z.object({ create: TagOwnCreateSchema }),
  project: z.object({ create: ProjectOwnCreateSchema }),
});

export const ProjectTaskStatusCreateSchema = z.object({
  projectId: _id,
  statusId: _id,
  project: z.object({ create: ProjectOwnCreateSchema }),
  status: z.object({ create: StatusOwnCreateSchema }),
});

export const ProjectTaskPriorityCreateSchema = z.object({
  projectId: _id,
  priorityId: _id,
  project: z.object({ create: ProjectOwnCreateSchema }),
  priority: z.object({ create: PriorityOwnCreateSchema }),
});

export const UserUpdateSchema = z.object({
  uuid: _str,
  displayName: _str,
  slug: _slug,
  title: _str,
});

export const TeamUpdateSchema = z.object({
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const TeamManagerUpdateSchema = z.object({
  managerId: _id,
  teamId: _id,
});

export const TeamMemberUpdateSchema = z.object({ teamId: _id, memberId: _id });

export const ProjectUpdateSchema = z.object({
  createdById: _id,
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
  startDate: _date.optional(),
  dueDate: _date.optional(),
  endDate: _date.optional(),
});

export const TagUpdateSchema = z.object({
  name: _name,
  isDefault: _bool.optional(),
});

export const CategoryUpdateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
});

export const SprintUpdateSchema = z.object({
  createdById: _id,
  projectId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const PriorityUpdateSchema = z.object({
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
});

export const StatusUpdateSchema = z.object({
  name: _name,
  description: _description.optional(),
  isDefault: _bool.optional(),
});

export const PointUpdateSchema = z.object({
  name: _name,
  point: _int,
  description: _description.optional(),
});

export const TaskUpdateSchema = z.object({
  sprintId: _id.optional(),
  createdById: _id,
  priorityId: _id.optional(),
  pointId: _id,
  statusId: _id.optional(),
  parentId: _id.optional(),
  title: _str,
  slug: _slug,
  description: _description.optional(),
  due: _date.optional(),
  resolvedAt: _date.optional(),
});

export const AssignmentHistoryUpdateSchema = z.object({
  createdById: _id,
  projectId: _id,
  taskId: _id,
  oldUserId: _id,
  newUserId: _id,
});

export const PriorityHistoryUpdateSchema = z.object({
  createdById: _id,
  projectId: _id,
  taskId: _id,
  oldPriorityId: _id.optional(),
  newPriorityId: _id,
});

export const StatusHistoryUpdateSchema = z.object({
  createdById: _id,
  oldStatusId: _id.optional(),
  newStatusId: _id,
  projectId: _id,
  taskId: _id,
});

export const PointHistoryUpdateSchema = z.object({
  createdById: _id,
  oldPointId: _id.optional(),
  newPointId: _id,
  projectId: _id,
  taskId: _id,
});

export const TeamHistoryUpdateSchema = z.object({
  createdById: _id,
  oldTeamId: _id.optional(),
  newTeamId: _id,
});

export const TaskTagUpdateSchema = z.object({ taskId: _id, tagId: _id });

export const TaskCategoryUpdateSchema = z.object({
  categoryId: _id,
  taskId: _id,
});

export const AssignmentUpdateSchema = z.object({
  assigneeId: _id,
  taskId: _id,
});

export const CommentUpdateSchema = z.object({
  parentId: _id.optional(),
  createdById: _id,
  taskId: _id,
  comment: _str,
});

export const ProjectTaskTagUpdateSchema = z.object({
  projectId: _id,
  tagId: _id,
});

export const ProjectTaskStatusUpdateSchema = z.object({
  projectId: _id,
  statusId: _id,
});

export const ProjectTaskPriorityUpdateSchema = z.object({
  projectId: _id,
  priorityId: _id,
});
