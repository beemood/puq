import PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';


      export const UserOwnProjectionSchema = z.object({ 
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
changedTeams: z.boolean()
      }).partial()
      


      export const TeamOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
managers: z.boolean(),
members: z.boolean(),
takenTeams: z.boolean(),
givenTeams: z.boolean()
      }).partial()
      


      export const TeamManagerOwnProjectionSchema = z.object({ 
          id: z.boolean(),
managerId: z.boolean(),
teamId: z.boolean(),
manager: z.boolean(),
team: z.boolean()
      }).partial()
      


      export const TeamMemberOwnProjectionSchema = z.object({ 
          id: z.boolean(),
teamId: z.boolean(),
memberId: z.boolean(),
team: z.boolean(),
member: z.boolean()
      }).partial()
      


      export const ProjectOwnProjectionSchema = z.object({ 
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
projects: z.boolean()
      }).partial()
      


      export const TagOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
isDefault: z.boolean(),
tasks: z.boolean(),
projects: z.boolean()
      }).partial()
      


      export const CategoryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
parentId: z.boolean(),
name: z.boolean(),
description: z.boolean(),
isDefault: z.boolean(),
parent: z.boolean(),
categories: z.boolean(),
tasks: z.boolean()
      }).partial()
      


      export const SprintOwnProjectionSchema = z.object({ 
          id: z.boolean(),
createdById: z.boolean(),
projectId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
project: z.boolean(),
tasks: z.boolean(),
createdBy: z.boolean()
      }).partial()
      


      export const PriorityOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
isDefault: z.boolean(),
tasks: z.boolean(),
projects: z.boolean(),
takenPriorities: z.boolean(),
givenPriorities: z.boolean()
      }).partial()
      


      export const StatusOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
isDefault: z.boolean(),
tasks: z.boolean(),
projects: z.boolean(),
takenStatuses: z.boolean(),
givenStatuses: z.boolean()
      }).partial()
      


      export const PointOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
point: z.boolean(),
description: z.boolean(),
tasks: z.boolean(),
takenPointes: z.boolean(),
givenPointes: z.boolean()
      }).partial()
      


      export const TaskOwnProjectionSchema = z.object({ 
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
pointHistory: z.boolean()
      }).partial()
      


      export const AssignmentHistoryOwnProjectionSchema = z.object({ 
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
project: z.boolean()
      }).partial()
      


      export const PriorityHistoryOwnProjectionSchema = z.object({ 
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
project: z.boolean()
      }).partial()
      


      export const StatusHistoryOwnProjectionSchema = z.object({ 
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
project: z.boolean()
      }).partial()
      


      export const PointHistoryOwnProjectionSchema = z.object({ 
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
project: z.boolean()
      }).partial()
      


      export const TeamHistoryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
createdById: z.boolean(),
oldTeamId: z.boolean(),
newTeamId: z.boolean(),
oldTeam: z.boolean(),
newTeam: z.boolean(),
createdBy: z.boolean()
      }).partial()
      


      export const TaskTagOwnProjectionSchema = z.object({ 
          id: z.boolean(),
taskId: z.boolean(),
tagId: z.boolean(),
task: z.boolean(),
tag: z.boolean()
      }).partial()
      


      export const TaskCategoryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
categoryId: z.boolean(),
taskId: z.boolean(),
task: z.boolean(),
category: z.boolean()
      }).partial()
      


      export const AssignmentOwnProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
assigneeId: z.boolean(),
taskId: z.boolean(),
task: z.boolean(),
assignee: z.boolean()
      }).partial()
      


      export const CommentOwnProjectionSchema = z.object({ 
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
task: z.boolean()
      }).partial()
      


      export const ProjectTaskTagOwnProjectionSchema = z.object({ 
          id: z.boolean(),
projectId: z.boolean(),
tagId: z.boolean(),
tag: z.boolean(),
project: z.boolean()
      }).partial()
      


      export const ProjectTaskStatusOwnProjectionSchema = z.object({ 
          id: z.boolean(),
projectId: z.boolean(),
statusId: z.boolean(),
project: z.boolean(),
status: z.boolean()
      }).partial()
      


      export const ProjectTaskPriorityOwnProjectionSchema = z.object({ 
          id: z.boolean(),
projectId: z.boolean(),
priorityId: z.boolean(),
project: z.boolean(),
priority: z.boolean()
      }).partial()
      


    export const UserOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
uuid:PZ.StringFilterSchema,
displayName:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
title:PZ.StringFilterSchema
    }).partial()


    export const TeamOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const TeamManagerOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
managerId:PZ.IntegerFilterSchema,
teamId:PZ.IntegerFilterSchema
    }).partial()


    export const TeamMemberOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
teamId:PZ.IntegerFilterSchema,
memberId:PZ.IntegerFilterSchema
    }).partial()


    export const ProjectOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdById:PZ.IntegerFilterSchema,
parentId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema,
startDate:PZ.DateTimeFilterSchema,
dueDate:PZ.DateTimeFilterSchema,
endDate:PZ.DateTimeFilterSchema
    }).partial()


    export const TagOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
isDefault:PZ.BooleanFilterSchema
    }).partial()


    export const CategoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
parentId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
description:PZ.StringFilterSchema,
isDefault:PZ.BooleanFilterSchema
    }).partial()


    export const SprintOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdById:PZ.IntegerFilterSchema,
projectId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const PriorityOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
description:PZ.StringFilterSchema,
isDefault:PZ.BooleanFilterSchema
    }).partial()


    export const StatusOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
description:PZ.StringFilterSchema,
isDefault:PZ.BooleanFilterSchema
    }).partial()


    export const PointOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
point:PZ.IntegerFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const TaskOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
sprintId:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
updatedAt:PZ.DateTimeFilterSchema,
createdById:PZ.IntegerFilterSchema,
priorityId:PZ.IntegerFilterSchema,
pointId:PZ.IntegerFilterSchema,
statusId:PZ.IntegerFilterSchema,
parentId:PZ.IntegerFilterSchema,
title:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema,
due:PZ.DateTimeFilterSchema,
resolvedAt:PZ.DateTimeFilterSchema
    }).partial()


    export const AssignmentHistoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdById:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
updatedAt:PZ.DateTimeFilterSchema,
projectId:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema,
oldUserId:PZ.IntegerFilterSchema,
newUserId:PZ.IntegerFilterSchema
    }).partial()


    export const PriorityHistoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdById:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
updatedAt:PZ.DateTimeFilterSchema,
projectId:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema,
oldPriorityId:PZ.IntegerFilterSchema,
newPriorityId:PZ.IntegerFilterSchema
    }).partial()


    export const StatusHistoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
createdById:PZ.IntegerFilterSchema,
oldStatusId:PZ.IntegerFilterSchema,
newStatusId:PZ.IntegerFilterSchema,
projectId:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema
    }).partial()


    export const PointHistoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
createdById:PZ.IntegerFilterSchema,
oldPointId:PZ.IntegerFilterSchema,
newPointId:PZ.IntegerFilterSchema,
projectId:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema
    }).partial()


    export const TeamHistoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
createdById:PZ.IntegerFilterSchema,
oldTeamId:PZ.IntegerFilterSchema,
newTeamId:PZ.IntegerFilterSchema
    }).partial()


    export const TaskTagOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema,
tagId:PZ.IntegerFilterSchema
    }).partial()


    export const TaskCategoryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
categoryId:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema
    }).partial()


    export const AssignmentOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
updatedAt:PZ.DateTimeFilterSchema,
assigneeId:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema
    }).partial()


    export const CommentOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
createdAt:PZ.DateTimeFilterSchema,
updatedAt:PZ.DateTimeFilterSchema,
parentId:PZ.IntegerFilterSchema,
createdById:PZ.IntegerFilterSchema,
taskId:PZ.IntegerFilterSchema,
comment:PZ.StringFilterSchema
    }).partial()


    export const ProjectTaskTagOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
projectId:PZ.IntegerFilterSchema,
tagId:PZ.IntegerFilterSchema
    }).partial()


    export const ProjectTaskStatusOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
projectId:PZ.IntegerFilterSchema,
statusId:PZ.IntegerFilterSchema
    }).partial()


    export const ProjectTaskPriorityOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
projectId:PZ.IntegerFilterSchema,
priorityId:PZ.IntegerFilterSchema
    }).partial()


    export const UserOwnQueryOneSchema = z.object({ 
        where:UserOwnWhereSchema, 
        select: UserOwnProjectionSchema, 
        omit: UserOwnProjectionSchema, 
    }).partial()
    


    export const UserOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: UserOwnWhereSchema,
      select: UserOwnProjectionSchema, 
      omit: UserOwnProjectionSchema, 
    }).partial()
    


    export const TeamOwnQueryOneSchema = z.object({ 
        where:TeamOwnWhereSchema, 
        select: TeamOwnProjectionSchema, 
        omit: TeamOwnProjectionSchema, 
    }).partial()
    


    export const TeamOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamOwnWhereSchema,
      select: TeamOwnProjectionSchema, 
      omit: TeamOwnProjectionSchema, 
    }).partial()
    


    export const TeamManagerOwnQueryOneSchema = z.object({ 
        where:TeamManagerOwnWhereSchema, 
        select: TeamManagerOwnProjectionSchema, 
        omit: TeamManagerOwnProjectionSchema, 
    }).partial()
    


    export const TeamManagerOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamManagerOwnWhereSchema,
      select: TeamManagerOwnProjectionSchema, 
      omit: TeamManagerOwnProjectionSchema, 
    }).partial()
    


    export const TeamMemberOwnQueryOneSchema = z.object({ 
        where:TeamMemberOwnWhereSchema, 
        select: TeamMemberOwnProjectionSchema, 
        omit: TeamMemberOwnProjectionSchema, 
    }).partial()
    


    export const TeamMemberOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamMemberOwnWhereSchema,
      select: TeamMemberOwnProjectionSchema, 
      omit: TeamMemberOwnProjectionSchema, 
    }).partial()
    


    export const ProjectOwnQueryOneSchema = z.object({ 
        where:ProjectOwnWhereSchema, 
        select: ProjectOwnProjectionSchema, 
        omit: ProjectOwnProjectionSchema, 
    }).partial()
    


    export const ProjectOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectOwnWhereSchema,
      select: ProjectOwnProjectionSchema, 
      omit: ProjectOwnProjectionSchema, 
    }).partial()
    


    export const TagOwnQueryOneSchema = z.object({ 
        where:TagOwnWhereSchema, 
        select: TagOwnProjectionSchema, 
        omit: TagOwnProjectionSchema, 
    }).partial()
    


    export const TagOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TagOwnWhereSchema,
      select: TagOwnProjectionSchema, 
      omit: TagOwnProjectionSchema, 
    }).partial()
    


    export const CategoryOwnQueryOneSchema = z.object({ 
        where:CategoryOwnWhereSchema, 
        select: CategoryOwnProjectionSchema, 
        omit: CategoryOwnProjectionSchema, 
    }).partial()
    


    export const CategoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CategoryOwnWhereSchema,
      select: CategoryOwnProjectionSchema, 
      omit: CategoryOwnProjectionSchema, 
    }).partial()
    


    export const SprintOwnQueryOneSchema = z.object({ 
        where:SprintOwnWhereSchema, 
        select: SprintOwnProjectionSchema, 
        omit: SprintOwnProjectionSchema, 
    }).partial()
    


    export const SprintOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: SprintOwnWhereSchema,
      select: SprintOwnProjectionSchema, 
      omit: SprintOwnProjectionSchema, 
    }).partial()
    


    export const PriorityOwnQueryOneSchema = z.object({ 
        where:PriorityOwnWhereSchema, 
        select: PriorityOwnProjectionSchema, 
        omit: PriorityOwnProjectionSchema, 
    }).partial()
    


    export const PriorityOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriorityOwnWhereSchema,
      select: PriorityOwnProjectionSchema, 
      omit: PriorityOwnProjectionSchema, 
    }).partial()
    


    export const StatusOwnQueryOneSchema = z.object({ 
        where:StatusOwnWhereSchema, 
        select: StatusOwnProjectionSchema, 
        omit: StatusOwnProjectionSchema, 
    }).partial()
    


    export const StatusOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StatusOwnWhereSchema,
      select: StatusOwnProjectionSchema, 
      omit: StatusOwnProjectionSchema, 
    }).partial()
    


    export const PointOwnQueryOneSchema = z.object({ 
        where:PointOwnWhereSchema, 
        select: PointOwnProjectionSchema, 
        omit: PointOwnProjectionSchema, 
    }).partial()
    


    export const PointOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PointOwnWhereSchema,
      select: PointOwnProjectionSchema, 
      omit: PointOwnProjectionSchema, 
    }).partial()
    


    export const TaskOwnQueryOneSchema = z.object({ 
        where:TaskOwnWhereSchema, 
        select: TaskOwnProjectionSchema, 
        omit: TaskOwnProjectionSchema, 
    }).partial()
    


    export const TaskOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TaskOwnWhereSchema,
      select: TaskOwnProjectionSchema, 
      omit: TaskOwnProjectionSchema, 
    }).partial()
    


    export const AssignmentHistoryOwnQueryOneSchema = z.object({ 
        where:AssignmentHistoryOwnWhereSchema, 
        select: AssignmentHistoryOwnProjectionSchema, 
        omit: AssignmentHistoryOwnProjectionSchema, 
    }).partial()
    


    export const AssignmentHistoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AssignmentHistoryOwnWhereSchema,
      select: AssignmentHistoryOwnProjectionSchema, 
      omit: AssignmentHistoryOwnProjectionSchema, 
    }).partial()
    


    export const PriorityHistoryOwnQueryOneSchema = z.object({ 
        where:PriorityHistoryOwnWhereSchema, 
        select: PriorityHistoryOwnProjectionSchema, 
        omit: PriorityHistoryOwnProjectionSchema, 
    }).partial()
    


    export const PriorityHistoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriorityHistoryOwnWhereSchema,
      select: PriorityHistoryOwnProjectionSchema, 
      omit: PriorityHistoryOwnProjectionSchema, 
    }).partial()
    


    export const StatusHistoryOwnQueryOneSchema = z.object({ 
        where:StatusHistoryOwnWhereSchema, 
        select: StatusHistoryOwnProjectionSchema, 
        omit: StatusHistoryOwnProjectionSchema, 
    }).partial()
    


    export const StatusHistoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StatusHistoryOwnWhereSchema,
      select: StatusHistoryOwnProjectionSchema, 
      omit: StatusHistoryOwnProjectionSchema, 
    }).partial()
    


    export const PointHistoryOwnQueryOneSchema = z.object({ 
        where:PointHistoryOwnWhereSchema, 
        select: PointHistoryOwnProjectionSchema, 
        omit: PointHistoryOwnProjectionSchema, 
    }).partial()
    


    export const PointHistoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PointHistoryOwnWhereSchema,
      select: PointHistoryOwnProjectionSchema, 
      omit: PointHistoryOwnProjectionSchema, 
    }).partial()
    


    export const TeamHistoryOwnQueryOneSchema = z.object({ 
        where:TeamHistoryOwnWhereSchema, 
        select: TeamHistoryOwnProjectionSchema, 
        omit: TeamHistoryOwnProjectionSchema, 
    }).partial()
    


    export const TeamHistoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamHistoryOwnWhereSchema,
      select: TeamHistoryOwnProjectionSchema, 
      omit: TeamHistoryOwnProjectionSchema, 
    }).partial()
    


    export const TaskTagOwnQueryOneSchema = z.object({ 
        where:TaskTagOwnWhereSchema, 
        select: TaskTagOwnProjectionSchema, 
        omit: TaskTagOwnProjectionSchema, 
    }).partial()
    


    export const TaskTagOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TaskTagOwnWhereSchema,
      select: TaskTagOwnProjectionSchema, 
      omit: TaskTagOwnProjectionSchema, 
    }).partial()
    


    export const TaskCategoryOwnQueryOneSchema = z.object({ 
        where:TaskCategoryOwnWhereSchema, 
        select: TaskCategoryOwnProjectionSchema, 
        omit: TaskCategoryOwnProjectionSchema, 
    }).partial()
    


    export const TaskCategoryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TaskCategoryOwnWhereSchema,
      select: TaskCategoryOwnProjectionSchema, 
      omit: TaskCategoryOwnProjectionSchema, 
    }).partial()
    


    export const AssignmentOwnQueryOneSchema = z.object({ 
        where:AssignmentOwnWhereSchema, 
        select: AssignmentOwnProjectionSchema, 
        omit: AssignmentOwnProjectionSchema, 
    }).partial()
    


    export const AssignmentOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AssignmentOwnWhereSchema,
      select: AssignmentOwnProjectionSchema, 
      omit: AssignmentOwnProjectionSchema, 
    }).partial()
    


    export const CommentOwnQueryOneSchema = z.object({ 
        where:CommentOwnWhereSchema, 
        select: CommentOwnProjectionSchema, 
        omit: CommentOwnProjectionSchema, 
    }).partial()
    


    export const CommentOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CommentOwnWhereSchema,
      select: CommentOwnProjectionSchema, 
      omit: CommentOwnProjectionSchema, 
    }).partial()
    


    export const ProjectTaskTagOwnQueryOneSchema = z.object({ 
        where:ProjectTaskTagOwnWhereSchema, 
        select: ProjectTaskTagOwnProjectionSchema, 
        omit: ProjectTaskTagOwnProjectionSchema, 
    }).partial()
    


    export const ProjectTaskTagOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectTaskTagOwnWhereSchema,
      select: ProjectTaskTagOwnProjectionSchema, 
      omit: ProjectTaskTagOwnProjectionSchema, 
    }).partial()
    


    export const ProjectTaskStatusOwnQueryOneSchema = z.object({ 
        where:ProjectTaskStatusOwnWhereSchema, 
        select: ProjectTaskStatusOwnProjectionSchema, 
        omit: ProjectTaskStatusOwnProjectionSchema, 
    }).partial()
    


    export const ProjectTaskStatusOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectTaskStatusOwnWhereSchema,
      select: ProjectTaskStatusOwnProjectionSchema, 
      omit: ProjectTaskStatusOwnProjectionSchema, 
    }).partial()
    


    export const ProjectTaskPriorityOwnQueryOneSchema = z.object({ 
        where:ProjectTaskPriorityOwnWhereSchema, 
        select: ProjectTaskPriorityOwnProjectionSchema, 
        omit: ProjectTaskPriorityOwnProjectionSchema, 
    }).partial()
    


    export const ProjectTaskPriorityOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectTaskPriorityOwnWhereSchema,
      select: ProjectTaskPriorityOwnProjectionSchema, 
      omit: ProjectTaskPriorityOwnProjectionSchema, 
    }).partial()
    


    export const UserCreateSchema = z.object({ 
      uuid:z.string(),
displayName:z.string(),
slug:z.string().optional(),
title:z.string()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.title!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.title) 
          }
          }
      return value 
      })


    export const UserUpdateSchema = z.object({ 
        uuid:z.string().optional(),
displayName:z.string().optional(),
slug:z.string().optional().optional(),
title:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.title!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.title) 
          }
          }
      return value 
      })


    export const UserOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
uuid: PZ.OrderDirectionSchema,
displayName: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
title: PZ.OrderDirectionSchema
    }).partial()
    


    export const UserWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
uuid: PZ.StringFilterSchema,
displayName: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
title: PZ.StringFilterSchema,
assignments: z.object({ 
        some: AssignmentOwnWhereSchema,
        every: AssignmentOwnWhereSchema,
        none: AssignmentOwnWhereSchema,
      }).partial(),
managedTeams: z.object({ 
        some: TeamManagerOwnWhereSchema,
        every: TeamManagerOwnWhereSchema,
        none: TeamManagerOwnWhereSchema,
      }).partial(),
memberships: z.object({ 
        some: TeamMemberOwnWhereSchema,
        every: TeamMemberOwnWhereSchema,
        none: TeamMemberOwnWhereSchema,
      }).partial(),
createdProjects: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial(),
createdSprints: z.object({ 
        some: SprintOwnWhereSchema,
        every: SprintOwnWhereSchema,
        none: SprintOwnWhereSchema,
      }).partial(),
createdTasks: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
createdComments: z.object({ 
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      }).partial(),
takenAssignments: z.object({ 
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      }).partial(),
givenAssignments: z.object({ 
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      }).partial(),
changedAssignments: z.object({ 
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      }).partial(),
changedPriorities: z.object({ 
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      }).partial(),
changedStatuses: z.object({ 
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      }).partial(),
changedPoints: z.object({ 
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      }).partial(),
changedTeams: z.object({ 
        some: TeamHistoryOwnWhereSchema,
        every: TeamHistoryOwnWhereSchema,
        none: TeamHistoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const UserProjectionSchema = z.object({ 
          id: z.boolean(),
uuid: z.boolean(),
displayName: z.boolean(),
slug: z.boolean(),
title: z.boolean(),
assignments: AssignmentOwnQuerySchema,
managedTeams: TeamManagerOwnQuerySchema,
memberships: TeamMemberOwnQuerySchema,
createdProjects: ProjectOwnQuerySchema,
createdSprints: SprintOwnQuerySchema,
createdTasks: TaskOwnQuerySchema,
createdComments: CommentOwnQuerySchema,
takenAssignments: AssignmentHistoryOwnQuerySchema,
givenAssignments: AssignmentHistoryOwnQuerySchema,
changedAssignments: AssignmentHistoryOwnQuerySchema,
changedPriorities: PriorityHistoryOwnQuerySchema,
changedStatuses: StatusHistoryOwnQuerySchema,
changedPoints: PointHistoryOwnQuerySchema,
changedTeams: TeamHistoryOwnQuerySchema
     }).partial()
     


    export const UserQueryOneSchema = z.object({ 
      where: UserWhereSchema,
      select:UserProjectionSchema, 
      omit:UserProjectionSchema
    }).partial()
    


    export const UserQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: UserWhereSchema, 
      select: UserProjectionSchema, 
      omit: UserProjectionSchema
    }).partial()
    


    export const TeamCreateSchema = z.object({ 
      name:z.string(),
slug:z.string().optional(),
description:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const TeamUpdateSchema = z.object({ 
        name:z.string().optional(),
slug:z.string().optional().optional(),
description:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const TeamOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const TeamWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
managers: z.object({ 
        some: TeamManagerOwnWhereSchema,
        every: TeamManagerOwnWhereSchema,
        none: TeamManagerOwnWhereSchema,
      }).partial(),
members: z.object({ 
        some: TeamMemberOwnWhereSchema,
        every: TeamMemberOwnWhereSchema,
        none: TeamMemberOwnWhereSchema,
      }).partial(),
takenTeams: z.object({ 
        some: TeamHistoryOwnWhereSchema,
        every: TeamHistoryOwnWhereSchema,
        none: TeamHistoryOwnWhereSchema,
      }).partial(),
givenTeams: z.object({ 
        some: TeamHistoryOwnWhereSchema,
        every: TeamHistoryOwnWhereSchema,
        none: TeamHistoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TeamProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
managers: TeamManagerOwnQuerySchema,
members: TeamMemberOwnQuerySchema,
takenTeams: TeamHistoryOwnQuerySchema,
givenTeams: TeamHistoryOwnQuerySchema
     }).partial()
     


    export const TeamQueryOneSchema = z.object({ 
      where: TeamWhereSchema,
      select:TeamProjectionSchema, 
      omit:TeamProjectionSchema
    }).partial()
    


    export const TeamQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamWhereSchema, 
      select: TeamProjectionSchema, 
      omit: TeamProjectionSchema
    }).partial()
    


    export const TeamManagerCreateSchema = z.object({ 
      managerId:z.int(),
teamId:z.int()
    })


    export const TeamManagerUpdateSchema = z.object({ 
        managerId:z.int().optional(),
teamId:z.int().optional()
    })


    export const TeamManagerOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
managerId: PZ.OrderDirectionSchema,
teamId: PZ.OrderDirectionSchema
    }).partial()
    


    export const TeamManagerWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
managerId: PZ.IntegerFilterSchema,
teamId: PZ.IntegerFilterSchema,
manager: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
team: z.object({ 
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TeamManagerProjectionSchema = z.object({ 
          id: z.boolean(),
managerId: z.boolean(),
teamId: z.boolean(),
manager: UserOwnQueryOneSchema,
team: TeamOwnQueryOneSchema
     }).partial()
     


    export const TeamManagerQueryOneSchema = z.object({ 
      where: TeamManagerWhereSchema,
      select:TeamManagerProjectionSchema, 
      omit:TeamManagerProjectionSchema
    }).partial()
    


    export const TeamManagerQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamManagerWhereSchema, 
      select: TeamManagerProjectionSchema, 
      omit: TeamManagerProjectionSchema
    }).partial()
    


    export const TeamMemberCreateSchema = z.object({ 
      teamId:z.int(),
memberId:z.int()
    })


    export const TeamMemberUpdateSchema = z.object({ 
        teamId:z.int().optional(),
memberId:z.int().optional()
    })


    export const TeamMemberOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
teamId: PZ.OrderDirectionSchema,
memberId: PZ.OrderDirectionSchema
    }).partial()
    


    export const TeamMemberWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
teamId: PZ.IntegerFilterSchema,
memberId: PZ.IntegerFilterSchema,
team: z.object({ 
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      }).partial(),
member: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TeamMemberProjectionSchema = z.object({ 
          id: z.boolean(),
teamId: z.boolean(),
memberId: z.boolean(),
team: TeamOwnQueryOneSchema,
member: UserOwnQueryOneSchema
     }).partial()
     


    export const TeamMemberQueryOneSchema = z.object({ 
      where: TeamMemberWhereSchema,
      select:TeamMemberProjectionSchema, 
      omit:TeamMemberProjectionSchema
    }).partial()
    


    export const TeamMemberQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamMemberWhereSchema, 
      select: TeamMemberProjectionSchema, 
      omit: TeamMemberProjectionSchema
    }).partial()
    


    export const ProjectCreateSchema = z.object({ 
      createdById:z.int(),
parentId:z.int().optional(),
name:z.string(),
slug:z.string().optional(),
description:z.string().optional(),
startDate:z.iso.datetime().optional(),
dueDate:z.iso.datetime().optional(),
endDate:z.iso.datetime().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const ProjectUpdateSchema = z.object({ 
        createdById:z.int().optional(),
parentId:z.int().optional().optional(),
name:z.string().optional(),
slug:z.string().optional().optional(),
description:z.string().optional().optional(),
startDate:z.iso.datetime().optional().optional(),
dueDate:z.iso.datetime().optional().optional(),
endDate:z.iso.datetime().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const ProjectOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
parentId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema,
startDate: PZ.OrderDirectionSchema,
dueDate: PZ.OrderDirectionSchema,
endDate: PZ.OrderDirectionSchema
    }).partial()
    


    export const ProjectWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdById: PZ.IntegerFilterSchema,
parentId: PZ.IntegerFilterSchema,
parent: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial(),
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
startDate: PZ.DateTimeFilterSchema,
dueDate: PZ.DateTimeFilterSchema,
endDate: PZ.DateTimeFilterSchema,
sprints: z.object({ 
        some: SprintOwnWhereSchema,
        every: SprintOwnWhereSchema,
        none: SprintOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
tags: z.object({ 
        some: ProjectTaskTagOwnWhereSchema,
        every: ProjectTaskTagOwnWhereSchema,
        none: ProjectTaskTagOwnWhereSchema,
      }).partial(),
statuses: z.object({ 
        some: ProjectTaskStatusOwnWhereSchema,
        every: ProjectTaskStatusOwnWhereSchema,
        none: ProjectTaskStatusOwnWhereSchema,
      }).partial(),
priorities: z.object({ 
        some: ProjectTaskPriorityOwnWhereSchema,
        every: ProjectTaskPriorityOwnWhereSchema,
        none: ProjectTaskPriorityOwnWhereSchema,
      }).partial(),
assignmentHistory: z.object({ 
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      }).partial(),
priorityHistory: z.object({ 
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      }).partial(),
statusHistory: z.object({ 
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      }).partial(),
pointHistory: z.object({ 
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      }).partial(),
projects: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ProjectProjectionSchema = z.object({ 
          id: z.boolean(),
createdById: z.boolean(),
parentId: z.boolean(),
parent: ProjectOwnQueryOneSchema,
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
startDate: z.boolean(),
dueDate: z.boolean(),
endDate: z.boolean(),
sprints: SprintOwnQuerySchema,
createdBy: UserOwnQueryOneSchema,
tags: ProjectTaskTagOwnQuerySchema,
statuses: ProjectTaskStatusOwnQuerySchema,
priorities: ProjectTaskPriorityOwnQuerySchema,
assignmentHistory: AssignmentHistoryOwnQuerySchema,
priorityHistory: PriorityHistoryOwnQuerySchema,
statusHistory: StatusHistoryOwnQuerySchema,
pointHistory: PointHistoryOwnQuerySchema,
projects: ProjectOwnQuerySchema
     }).partial()
     


    export const ProjectQueryOneSchema = z.object({ 
      where: ProjectWhereSchema,
      select:ProjectProjectionSchema, 
      omit:ProjectProjectionSchema
    }).partial()
    


    export const ProjectQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectWhereSchema, 
      select: ProjectProjectionSchema, 
      omit: ProjectProjectionSchema
    }).partial()
    


    export const TagCreateSchema = z.object({ 
      name:z.string(),
isDefault:z.boolean().optional()
    })


    export const TagUpdateSchema = z.object({ 
        name:z.string().optional(),
isDefault:z.boolean().optional().optional()
    })


    export const TagOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
isDefault: PZ.OrderDirectionSchema
    }).partial()
    


    export const TagWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
isDefault: PZ.BooleanFilterSchema,
tasks: z.object({ 
        some: TaskTagOwnWhereSchema,
        every: TaskTagOwnWhereSchema,
        none: TaskTagOwnWhereSchema,
      }).partial(),
projects: z.object({ 
        some: ProjectTaskTagOwnWhereSchema,
        every: ProjectTaskTagOwnWhereSchema,
        none: ProjectTaskTagOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TagProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
isDefault: z.boolean(),
tasks: TaskTagOwnQuerySchema,
projects: ProjectTaskTagOwnQuerySchema
     }).partial()
     


    export const TagQueryOneSchema = z.object({ 
      where: TagWhereSchema,
      select:TagProjectionSchema, 
      omit:TagProjectionSchema
    }).partial()
    


    export const TagQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TagWhereSchema, 
      select: TagProjectionSchema, 
      omit: TagProjectionSchema
    }).partial()
    


    export const CategoryCreateSchema = z.object({ 
      parentId:z.int().optional(),
name:z.string(),
description:z.string().optional(),
isDefault:z.boolean().optional()
    })


    export const CategoryUpdateSchema = z.object({ 
        parentId:z.int().optional().optional(),
name:z.string().optional(),
description:z.string().optional().optional(),
isDefault:z.boolean().optional().optional()
    })


    export const CategoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
parentId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema,
isDefault: PZ.OrderDirectionSchema
    }).partial()
    


    export const CategoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
parentId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
isDefault: PZ.BooleanFilterSchema,
parent: z.object({ 
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      }).partial(),
categories: z.object({ 
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      }).partial(),
tasks: z.object({ 
        some: TaskCategoryOwnWhereSchema,
        every: TaskCategoryOwnWhereSchema,
        none: TaskCategoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CategoryProjectionSchema = z.object({ 
          id: z.boolean(),
parentId: z.boolean(),
name: z.boolean(),
description: z.boolean(),
isDefault: z.boolean(),
parent: CategoryOwnQueryOneSchema,
categories: CategoryOwnQuerySchema,
tasks: TaskCategoryOwnQuerySchema
     }).partial()
     


    export const CategoryQueryOneSchema = z.object({ 
      where: CategoryWhereSchema,
      select:CategoryProjectionSchema, 
      omit:CategoryProjectionSchema
    }).partial()
    


    export const CategoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CategoryWhereSchema, 
      select: CategoryProjectionSchema, 
      omit: CategoryProjectionSchema
    }).partial()
    


    export const SprintCreateSchema = z.object({ 
      createdById:z.int(),
projectId:z.int().optional(),
name:z.string(),
slug:z.string().optional(),
description:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const SprintUpdateSchema = z.object({ 
        createdById:z.int().optional(),
projectId:z.int().optional().optional(),
name:z.string().optional(),
slug:z.string().optional().optional(),
description:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const SprintOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const SprintWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdById: PZ.IntegerFilterSchema,
projectId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial(),
tasks: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const SprintProjectionSchema = z.object({ 
          id: z.boolean(),
createdById: z.boolean(),
projectId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
project: ProjectOwnQueryOneSchema,
tasks: TaskOwnQuerySchema,
createdBy: UserOwnQueryOneSchema
     }).partial()
     


    export const SprintQueryOneSchema = z.object({ 
      where: SprintWhereSchema,
      select:SprintProjectionSchema, 
      omit:SprintProjectionSchema
    }).partial()
    


    export const SprintQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: SprintWhereSchema, 
      select: SprintProjectionSchema, 
      omit: SprintProjectionSchema
    }).partial()
    


    export const PriorityCreateSchema = z.object({ 
      name:z.string(),
description:z.string().optional(),
isDefault:z.boolean().optional()
    })


    export const PriorityUpdateSchema = z.object({ 
        name:z.string().optional(),
description:z.string().optional().optional(),
isDefault:z.boolean().optional().optional()
    })


    export const PriorityOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema,
isDefault: PZ.OrderDirectionSchema
    }).partial()
    


    export const PriorityWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
isDefault: PZ.BooleanFilterSchema,
tasks: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
projects: z.object({ 
        some: ProjectTaskPriorityOwnWhereSchema,
        every: ProjectTaskPriorityOwnWhereSchema,
        none: ProjectTaskPriorityOwnWhereSchema,
      }).partial(),
takenPriorities: z.object({ 
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      }).partial(),
givenPriorities: z.object({ 
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const PriorityProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
isDefault: z.boolean(),
tasks: TaskOwnQuerySchema,
projects: ProjectTaskPriorityOwnQuerySchema,
takenPriorities: PriorityHistoryOwnQuerySchema,
givenPriorities: PriorityHistoryOwnQuerySchema
     }).partial()
     


    export const PriorityQueryOneSchema = z.object({ 
      where: PriorityWhereSchema,
      select:PriorityProjectionSchema, 
      omit:PriorityProjectionSchema
    }).partial()
    


    export const PriorityQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriorityWhereSchema, 
      select: PriorityProjectionSchema, 
      omit: PriorityProjectionSchema
    }).partial()
    


    export const StatusCreateSchema = z.object({ 
      name:z.string(),
description:z.string().optional(),
isDefault:z.boolean().optional()
    })


    export const StatusUpdateSchema = z.object({ 
        name:z.string().optional(),
description:z.string().optional().optional(),
isDefault:z.boolean().optional().optional()
    })


    export const StatusOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema,
isDefault: PZ.OrderDirectionSchema
    }).partial()
    


    export const StatusWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
isDefault: PZ.BooleanFilterSchema,
tasks: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
projects: z.object({ 
        some: ProjectTaskStatusOwnWhereSchema,
        every: ProjectTaskStatusOwnWhereSchema,
        none: ProjectTaskStatusOwnWhereSchema,
      }).partial(),
takenStatuses: z.object({ 
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      }).partial(),
givenStatuses: z.object({ 
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const StatusProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
description: z.boolean(),
isDefault: z.boolean(),
tasks: TaskOwnQuerySchema,
projects: ProjectTaskStatusOwnQuerySchema,
takenStatuses: StatusHistoryOwnQuerySchema,
givenStatuses: StatusHistoryOwnQuerySchema
     }).partial()
     


    export const StatusQueryOneSchema = z.object({ 
      where: StatusWhereSchema,
      select:StatusProjectionSchema, 
      omit:StatusProjectionSchema
    }).partial()
    


    export const StatusQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StatusWhereSchema, 
      select: StatusProjectionSchema, 
      omit: StatusProjectionSchema
    }).partial()
    


    export const PointCreateSchema = z.object({ 
      name:z.string(),
point:z.int(),
description:z.string().optional()
    })


    export const PointUpdateSchema = z.object({ 
        name:z.string().optional(),
point:z.int().optional(),
description:z.string().optional().optional()
    })


    export const PointOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
point: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const PointWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
point: PZ.IntegerFilterSchema,
description: PZ.StringFilterSchema,
tasks: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
takenPointes: z.object({ 
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      }).partial(),
givenPointes: z.object({ 
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const PointProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
point: z.boolean(),
description: z.boolean(),
tasks: TaskOwnQuerySchema,
takenPointes: PointHistoryOwnQuerySchema,
givenPointes: PointHistoryOwnQuerySchema
     }).partial()
     


    export const PointQueryOneSchema = z.object({ 
      where: PointWhereSchema,
      select:PointProjectionSchema, 
      omit:PointProjectionSchema
    }).partial()
    


    export const PointQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PointWhereSchema, 
      select: PointProjectionSchema, 
      omit: PointProjectionSchema
    }).partial()
    


    export const TaskCreateSchema = z.object({ 
      sprintId:z.int().optional(),
createdById:z.int(),
priorityId:z.int().optional(),
pointId:z.int(),
statusId:z.int().optional(),
parentId:z.int().optional(),
title:z.string(),
slug:z.string().optional(),
description:z.string().optional(),
due:z.iso.datetime().optional(),
resolvedAt:z.iso.datetime().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.title!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.title) 
          }
          }
      return value 
      })


    export const TaskUpdateSchema = z.object({ 
        sprintId:z.int().optional().optional(),
createdById:z.int().optional(),
priorityId:z.int().optional().optional(),
pointId:z.int().optional(),
statusId:z.int().optional().optional(),
parentId:z.int().optional().optional(),
title:z.string().optional(),
slug:z.string().optional().optional(),
description:z.string().optional().optional(),
due:z.iso.datetime().optional().optional(),
resolvedAt:z.iso.datetime().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.title!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.title) 
          }
          }
      return value 
      })


    export const TaskOrderBySchema = z.object({
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
resolvedAt: PZ.OrderDirectionSchema
    }).partial()
    


    export const TaskWhereSchema = z.object({ 
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
comments: z.object({ 
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      }).partial(),
parent: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
tasks: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
assignments: z.object({ 
        some: AssignmentOwnWhereSchema,
        every: AssignmentOwnWhereSchema,
        none: AssignmentOwnWhereSchema,
      }).partial(),
tags: z.object({ 
        some: TaskTagOwnWhereSchema,
        every: TaskTagOwnWhereSchema,
        none: TaskTagOwnWhereSchema,
      }).partial(),
categories: z.object({ 
        some: TaskCategoryOwnWhereSchema,
        every: TaskCategoryOwnWhereSchema,
        none: TaskCategoryOwnWhereSchema,
      }).partial(),
point: z.object({ 
        some: PointOwnWhereSchema,
        every: PointOwnWhereSchema,
        none: PointOwnWhereSchema,
      }).partial(),
priority: z.object({ 
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      }).partial(),
status: z.object({ 
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      }).partial(),
sprint: z.object({ 
        some: SprintOwnWhereSchema,
        every: SprintOwnWhereSchema,
        none: SprintOwnWhereSchema,
      }).partial(),
assignmentHistory: z.object({ 
        some: AssignmentHistoryOwnWhereSchema,
        every: AssignmentHistoryOwnWhereSchema,
        none: AssignmentHistoryOwnWhereSchema,
      }).partial(),
statusHistory: z.object({ 
        some: StatusHistoryOwnWhereSchema,
        every: StatusHistoryOwnWhereSchema,
        none: StatusHistoryOwnWhereSchema,
      }).partial(),
priorityHistory: z.object({ 
        some: PriorityHistoryOwnWhereSchema,
        every: PriorityHistoryOwnWhereSchema,
        none: PriorityHistoryOwnWhereSchema,
      }).partial(),
pointHistory: z.object({ 
        some: PointHistoryOwnWhereSchema,
        every: PointHistoryOwnWhereSchema,
        none: PointHistoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TaskProjectionSchema = z.object({ 
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
comments: CommentOwnQuerySchema,
parent: TaskOwnQueryOneSchema,
tasks: TaskOwnQuerySchema,
createdBy: UserOwnQueryOneSchema,
assignments: AssignmentOwnQuerySchema,
tags: TaskTagOwnQuerySchema,
categories: TaskCategoryOwnQuerySchema,
point: PointOwnQueryOneSchema,
priority: PriorityOwnQueryOneSchema,
status: StatusOwnQueryOneSchema,
sprint: SprintOwnQueryOneSchema,
assignmentHistory: AssignmentHistoryOwnQuerySchema,
statusHistory: StatusHistoryOwnQuerySchema,
priorityHistory: PriorityHistoryOwnQuerySchema,
pointHistory: PointHistoryOwnQuerySchema
     }).partial()
     


    export const TaskQueryOneSchema = z.object({ 
      where: TaskWhereSchema,
      select:TaskProjectionSchema, 
      omit:TaskProjectionSchema
    }).partial()
    


    export const TaskQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TaskWhereSchema, 
      select: TaskProjectionSchema, 
      omit: TaskProjectionSchema
    }).partial()
    


    export const AssignmentHistoryCreateSchema = z.object({ 
      createdById:z.int(),
projectId:z.int(),
taskId:z.int(),
oldUserId:z.int(),
newUserId:z.int()
    })


    export const AssignmentHistoryUpdateSchema = z.object({ 
        createdById:z.int().optional(),
projectId:z.int().optional(),
taskId:z.int().optional(),
oldUserId:z.int().optional(),
newUserId:z.int().optional()
    })


    export const AssignmentHistoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
updatedAt: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema,
oldUserId: PZ.OrderDirectionSchema,
newUserId: PZ.OrderDirectionSchema
    }).partial()
    


    export const AssignmentHistoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdById: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
updatedAt: PZ.DateTimeFilterSchema,
projectId: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
oldUserId: PZ.IntegerFilterSchema,
newUserId: PZ.IntegerFilterSchema,
oldUser: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
newUser: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AssignmentHistoryProjectionSchema = z.object({ 
          id: z.boolean(),
createdById: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
projectId: z.boolean(),
taskId: z.boolean(),
oldUserId: z.boolean(),
newUserId: z.boolean(),
oldUser: UserOwnQueryOneSchema,
newUser: UserOwnQueryOneSchema,
createdBy: UserOwnQueryOneSchema,
task: TaskOwnQueryOneSchema,
project: ProjectOwnQueryOneSchema
     }).partial()
     


    export const AssignmentHistoryQueryOneSchema = z.object({ 
      where: AssignmentHistoryWhereSchema,
      select:AssignmentHistoryProjectionSchema, 
      omit:AssignmentHistoryProjectionSchema
    }).partial()
    


    export const AssignmentHistoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AssignmentHistoryWhereSchema, 
      select: AssignmentHistoryProjectionSchema, 
      omit: AssignmentHistoryProjectionSchema
    }).partial()
    


    export const PriorityHistoryCreateSchema = z.object({ 
      createdById:z.int(),
projectId:z.int(),
taskId:z.int(),
oldPriorityId:z.int().optional(),
newPriorityId:z.int()
    })


    export const PriorityHistoryUpdateSchema = z.object({ 
        createdById:z.int().optional(),
projectId:z.int().optional(),
taskId:z.int().optional(),
oldPriorityId:z.int().optional().optional(),
newPriorityId:z.int().optional()
    })


    export const PriorityHistoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
updatedAt: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema,
oldPriorityId: PZ.OrderDirectionSchema,
newPriorityId: PZ.OrderDirectionSchema
    }).partial()
    


    export const PriorityHistoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdById: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
updatedAt: PZ.DateTimeFilterSchema,
projectId: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
oldPriorityId: PZ.IntegerFilterSchema,
newPriorityId: PZ.IntegerFilterSchema,
oldPriority: z.object({ 
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      }).partial(),
newPriority: z.object({ 
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const PriorityHistoryProjectionSchema = z.object({ 
          id: z.boolean(),
createdById: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
projectId: z.boolean(),
taskId: z.boolean(),
oldPriorityId: z.boolean(),
newPriorityId: z.boolean(),
oldPriority: PriorityOwnQueryOneSchema,
newPriority: PriorityOwnQueryOneSchema,
createdBy: UserOwnQueryOneSchema,
task: TaskOwnQueryOneSchema,
project: ProjectOwnQueryOneSchema
     }).partial()
     


    export const PriorityHistoryQueryOneSchema = z.object({ 
      where: PriorityHistoryWhereSchema,
      select:PriorityHistoryProjectionSchema, 
      omit:PriorityHistoryProjectionSchema
    }).partial()
    


    export const PriorityHistoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PriorityHistoryWhereSchema, 
      select: PriorityHistoryProjectionSchema, 
      omit: PriorityHistoryProjectionSchema
    }).partial()
    


    export const StatusHistoryCreateSchema = z.object({ 
      createdById:z.int(),
oldStatusId:z.int().optional(),
newStatusId:z.int(),
projectId:z.int(),
taskId:z.int()
    })


    export const StatusHistoryUpdateSchema = z.object({ 
        createdById:z.int().optional(),
oldStatusId:z.int().optional().optional(),
newStatusId:z.int().optional(),
projectId:z.int().optional(),
taskId:z.int().optional()
    })


    export const StatusHistoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
oldStatusId: PZ.OrderDirectionSchema,
newStatusId: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema
    }).partial()
    


    export const StatusHistoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
createdById: PZ.IntegerFilterSchema,
oldStatusId: PZ.IntegerFilterSchema,
newStatusId: PZ.IntegerFilterSchema,
projectId: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
oldStatus: z.object({ 
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      }).partial(),
newStatus: z.object({ 
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const StatusHistoryProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
createdById: z.boolean(),
oldStatusId: z.boolean(),
newStatusId: z.boolean(),
projectId: z.boolean(),
taskId: z.boolean(),
task: TaskOwnQueryOneSchema,
oldStatus: StatusOwnQueryOneSchema,
newStatus: StatusOwnQueryOneSchema,
createdBy: UserOwnQueryOneSchema,
project: ProjectOwnQueryOneSchema
     }).partial()
     


    export const StatusHistoryQueryOneSchema = z.object({ 
      where: StatusHistoryWhereSchema,
      select:StatusHistoryProjectionSchema, 
      omit:StatusHistoryProjectionSchema
    }).partial()
    


    export const StatusHistoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StatusHistoryWhereSchema, 
      select: StatusHistoryProjectionSchema, 
      omit: StatusHistoryProjectionSchema
    }).partial()
    


    export const PointHistoryCreateSchema = z.object({ 
      createdById:z.int(),
oldPointId:z.int().optional(),
newPointId:z.int(),
projectId:z.int(),
taskId:z.int()
    })


    export const PointHistoryUpdateSchema = z.object({ 
        createdById:z.int().optional(),
oldPointId:z.int().optional().optional(),
newPointId:z.int().optional(),
projectId:z.int().optional(),
taskId:z.int().optional()
    })


    export const PointHistoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
oldPointId: PZ.OrderDirectionSchema,
newPointId: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema
    }).partial()
    


    export const PointHistoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
createdById: PZ.IntegerFilterSchema,
oldPointId: PZ.IntegerFilterSchema,
newPointId: PZ.IntegerFilterSchema,
projectId: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
oldPoint: z.object({ 
        some: PointOwnWhereSchema,
        every: PointOwnWhereSchema,
        none: PointOwnWhereSchema,
      }).partial(),
newPoint: z.object({ 
        some: PointOwnWhereSchema,
        every: PointOwnWhereSchema,
        none: PointOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const PointHistoryProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
createdById: z.boolean(),
oldPointId: z.boolean(),
newPointId: z.boolean(),
projectId: z.boolean(),
taskId: z.boolean(),
task: TaskOwnQueryOneSchema,
oldPoint: PointOwnQueryOneSchema,
newPoint: PointOwnQueryOneSchema,
createdBy: UserOwnQueryOneSchema,
project: ProjectOwnQueryOneSchema
     }).partial()
     


    export const PointHistoryQueryOneSchema = z.object({ 
      where: PointHistoryWhereSchema,
      select:PointHistoryProjectionSchema, 
      omit:PointHistoryProjectionSchema
    }).partial()
    


    export const PointHistoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PointHistoryWhereSchema, 
      select: PointHistoryProjectionSchema, 
      omit: PointHistoryProjectionSchema
    }).partial()
    


    export const TeamHistoryCreateSchema = z.object({ 
      createdById:z.int(),
oldTeamId:z.int().optional(),
newTeamId:z.int()
    })


    export const TeamHistoryUpdateSchema = z.object({ 
        createdById:z.int().optional(),
oldTeamId:z.int().optional().optional(),
newTeamId:z.int().optional()
    })


    export const TeamHistoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
oldTeamId: PZ.OrderDirectionSchema,
newTeamId: PZ.OrderDirectionSchema
    }).partial()
    


    export const TeamHistoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
createdById: PZ.IntegerFilterSchema,
oldTeamId: PZ.IntegerFilterSchema,
newTeamId: PZ.IntegerFilterSchema,
oldTeam: z.object({ 
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      }).partial(),
newTeam: z.object({ 
        some: TeamOwnWhereSchema,
        every: TeamOwnWhereSchema,
        none: TeamOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TeamHistoryProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
createdById: z.boolean(),
oldTeamId: z.boolean(),
newTeamId: z.boolean(),
oldTeam: TeamOwnQueryOneSchema,
newTeam: TeamOwnQueryOneSchema,
createdBy: UserOwnQueryOneSchema
     }).partial()
     


    export const TeamHistoryQueryOneSchema = z.object({ 
      where: TeamHistoryWhereSchema,
      select:TeamHistoryProjectionSchema, 
      omit:TeamHistoryProjectionSchema
    }).partial()
    


    export const TeamHistoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TeamHistoryWhereSchema, 
      select: TeamHistoryProjectionSchema, 
      omit: TeamHistoryProjectionSchema
    }).partial()
    


    export const TaskTagCreateSchema = z.object({ 
      taskId:z.int(),
tagId:z.int()
    })


    export const TaskTagUpdateSchema = z.object({ 
        taskId:z.int().optional(),
tagId:z.int().optional()
    })


    export const TaskTagOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema,
tagId: PZ.OrderDirectionSchema
    }).partial()
    


    export const TaskTagWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
tagId: PZ.IntegerFilterSchema,
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
tag: z.object({ 
        some: TagOwnWhereSchema,
        every: TagOwnWhereSchema,
        none: TagOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TaskTagProjectionSchema = z.object({ 
          id: z.boolean(),
taskId: z.boolean(),
tagId: z.boolean(),
task: TaskOwnQueryOneSchema,
tag: TagOwnQueryOneSchema
     }).partial()
     


    export const TaskTagQueryOneSchema = z.object({ 
      where: TaskTagWhereSchema,
      select:TaskTagProjectionSchema, 
      omit:TaskTagProjectionSchema
    }).partial()
    


    export const TaskTagQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TaskTagWhereSchema, 
      select: TaskTagProjectionSchema, 
      omit: TaskTagProjectionSchema
    }).partial()
    


    export const TaskCategoryCreateSchema = z.object({ 
      categoryId:z.int(),
taskId:z.int()
    })


    export const TaskCategoryUpdateSchema = z.object({ 
        categoryId:z.int().optional(),
taskId:z.int().optional()
    })


    export const TaskCategoryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
categoryId: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema
    }).partial()
    


    export const TaskCategoryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
categoryId: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
category: z.object({ 
        some: CategoryOwnWhereSchema,
        every: CategoryOwnWhereSchema,
        none: CategoryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TaskCategoryProjectionSchema = z.object({ 
          id: z.boolean(),
categoryId: z.boolean(),
taskId: z.boolean(),
task: TaskOwnQueryOneSchema,
category: CategoryOwnQueryOneSchema
     }).partial()
     


    export const TaskCategoryQueryOneSchema = z.object({ 
      where: TaskCategoryWhereSchema,
      select:TaskCategoryProjectionSchema, 
      omit:TaskCategoryProjectionSchema
    }).partial()
    


    export const TaskCategoryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TaskCategoryWhereSchema, 
      select: TaskCategoryProjectionSchema, 
      omit: TaskCategoryProjectionSchema
    }).partial()
    


    export const AssignmentCreateSchema = z.object({ 
      assigneeId:z.int(),
taskId:z.int()
    })


    export const AssignmentUpdateSchema = z.object({ 
        assigneeId:z.int().optional(),
taskId:z.int().optional()
    })


    export const AssignmentOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
updatedAt: PZ.OrderDirectionSchema,
assigneeId: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema
    }).partial()
    


    export const AssignmentWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
updatedAt: PZ.DateTimeFilterSchema,
assigneeId: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial(),
assignee: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AssignmentProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
assigneeId: z.boolean(),
taskId: z.boolean(),
task: TaskOwnQueryOneSchema,
assignee: UserOwnQueryOneSchema
     }).partial()
     


    export const AssignmentQueryOneSchema = z.object({ 
      where: AssignmentWhereSchema,
      select:AssignmentProjectionSchema, 
      omit:AssignmentProjectionSchema
    }).partial()
    


    export const AssignmentQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AssignmentWhereSchema, 
      select: AssignmentProjectionSchema, 
      omit: AssignmentProjectionSchema
    }).partial()
    


    export const CommentCreateSchema = z.object({ 
      parentId:z.int().optional(),
createdById:z.int(),
taskId:z.int(),
comment:z.string()
    })


    export const CommentUpdateSchema = z.object({ 
        parentId:z.int().optional().optional(),
createdById:z.int().optional(),
taskId:z.int().optional(),
comment:z.string().optional()
    })


    export const CommentOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
createdAt: PZ.OrderDirectionSchema,
updatedAt: PZ.OrderDirectionSchema,
parentId: PZ.OrderDirectionSchema,
createdById: PZ.OrderDirectionSchema,
taskId: PZ.OrderDirectionSchema,
comment: PZ.OrderDirectionSchema
    }).partial()
    


    export const CommentWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
createdAt: PZ.DateTimeFilterSchema,
updatedAt: PZ.DateTimeFilterSchema,
parentId: PZ.IntegerFilterSchema,
createdById: PZ.IntegerFilterSchema,
taskId: PZ.IntegerFilterSchema,
comment: PZ.StringFilterSchema,
parent: z.object({ 
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      }).partial(),
comments: z.object({ 
        some: CommentOwnWhereSchema,
        every: CommentOwnWhereSchema,
        none: CommentOwnWhereSchema,
      }).partial(),
createdBy: z.object({ 
        some: UserOwnWhereSchema,
        every: UserOwnWhereSchema,
        none: UserOwnWhereSchema,
      }).partial(),
task: z.object({ 
        some: TaskOwnWhereSchema,
        every: TaskOwnWhereSchema,
        none: TaskOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CommentProjectionSchema = z.object({ 
          id: z.boolean(),
createdAt: z.boolean(),
updatedAt: z.boolean(),
parentId: z.boolean(),
createdById: z.boolean(),
taskId: z.boolean(),
comment: z.boolean(),
parent: CommentOwnQueryOneSchema,
comments: CommentOwnQuerySchema,
createdBy: UserOwnQueryOneSchema,
task: TaskOwnQueryOneSchema
     }).partial()
     


    export const CommentQueryOneSchema = z.object({ 
      where: CommentWhereSchema,
      select:CommentProjectionSchema, 
      omit:CommentProjectionSchema
    }).partial()
    


    export const CommentQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CommentWhereSchema, 
      select: CommentProjectionSchema, 
      omit: CommentProjectionSchema
    }).partial()
    


    export const ProjectTaskTagCreateSchema = z.object({ 
      projectId:z.int(),
tagId:z.int()
    })


    export const ProjectTaskTagUpdateSchema = z.object({ 
        projectId:z.int().optional(),
tagId:z.int().optional()
    })


    export const ProjectTaskTagOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
tagId: PZ.OrderDirectionSchema
    }).partial()
    


    export const ProjectTaskTagWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
projectId: PZ.IntegerFilterSchema,
tagId: PZ.IntegerFilterSchema,
tag: z.object({ 
        some: TagOwnWhereSchema,
        every: TagOwnWhereSchema,
        none: TagOwnWhereSchema,
      }).partial(),
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ProjectTaskTagProjectionSchema = z.object({ 
          id: z.boolean(),
projectId: z.boolean(),
tagId: z.boolean(),
tag: TagOwnQueryOneSchema,
project: ProjectOwnQueryOneSchema
     }).partial()
     


    export const ProjectTaskTagQueryOneSchema = z.object({ 
      where: ProjectTaskTagWhereSchema,
      select:ProjectTaskTagProjectionSchema, 
      omit:ProjectTaskTagProjectionSchema
    }).partial()
    


    export const ProjectTaskTagQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectTaskTagWhereSchema, 
      select: ProjectTaskTagProjectionSchema, 
      omit: ProjectTaskTagProjectionSchema
    }).partial()
    


    export const ProjectTaskStatusCreateSchema = z.object({ 
      projectId:z.int(),
statusId:z.int()
    })


    export const ProjectTaskStatusUpdateSchema = z.object({ 
        projectId:z.int().optional(),
statusId:z.int().optional()
    })


    export const ProjectTaskStatusOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
statusId: PZ.OrderDirectionSchema
    }).partial()
    


    export const ProjectTaskStatusWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
projectId: PZ.IntegerFilterSchema,
statusId: PZ.IntegerFilterSchema,
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial(),
status: z.object({ 
        some: StatusOwnWhereSchema,
        every: StatusOwnWhereSchema,
        none: StatusOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ProjectTaskStatusProjectionSchema = z.object({ 
          id: z.boolean(),
projectId: z.boolean(),
statusId: z.boolean(),
project: ProjectOwnQueryOneSchema,
status: StatusOwnQueryOneSchema
     }).partial()
     


    export const ProjectTaskStatusQueryOneSchema = z.object({ 
      where: ProjectTaskStatusWhereSchema,
      select:ProjectTaskStatusProjectionSchema, 
      omit:ProjectTaskStatusProjectionSchema
    }).partial()
    


    export const ProjectTaskStatusQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectTaskStatusWhereSchema, 
      select: ProjectTaskStatusProjectionSchema, 
      omit: ProjectTaskStatusProjectionSchema
    }).partial()
    


    export const ProjectTaskPriorityCreateSchema = z.object({ 
      projectId:z.int(),
priorityId:z.int()
    })


    export const ProjectTaskPriorityUpdateSchema = z.object({ 
        projectId:z.int().optional(),
priorityId:z.int().optional()
    })


    export const ProjectTaskPriorityOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
projectId: PZ.OrderDirectionSchema,
priorityId: PZ.OrderDirectionSchema
    }).partial()
    


    export const ProjectTaskPriorityWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
projectId: PZ.IntegerFilterSchema,
priorityId: PZ.IntegerFilterSchema,
project: z.object({ 
        some: ProjectOwnWhereSchema,
        every: ProjectOwnWhereSchema,
        none: ProjectOwnWhereSchema,
      }).partial(),
priority: z.object({ 
        some: PriorityOwnWhereSchema,
        every: PriorityOwnWhereSchema,
        none: PriorityOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ProjectTaskPriorityProjectionSchema = z.object({ 
          id: z.boolean(),
projectId: z.boolean(),
priorityId: z.boolean(),
project: ProjectOwnQueryOneSchema,
priority: PriorityOwnQueryOneSchema
     }).partial()
     


    export const ProjectTaskPriorityQueryOneSchema = z.object({ 
      where: ProjectTaskPriorityWhereSchema,
      select:ProjectTaskPriorityProjectionSchema, 
      omit:ProjectTaskPriorityProjectionSchema
    }).partial()
    


    export const ProjectTaskPriorityQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ProjectTaskPriorityWhereSchema, 
      select: ProjectTaskPriorityProjectionSchema, 
      omit: ProjectTaskPriorityProjectionSchema
    }).partial()
    


export type  UserCreate = z.infer<typeof UserCreateSchema>; 

export type  UserUpdate = z.infer<typeof UserUpdateSchema>; 

export type  UserOrderBy = z.infer<typeof UserOrderBySchema>; 

export type  UserOwnProjection = z.infer<typeof UserOwnProjectionSchema>; 

export type  UserOwnWhere = z.infer<typeof UserOwnWhereSchema>; 

export type  UserOwnQuery = z.infer<typeof UserOwnQuerySchema>; 

export type  UserOwnQueryOne = z.infer<typeof UserOwnQueryOneSchema>; 

export type  UserWhere = z.infer<typeof UserWhereSchema>; 

export type  UserQueryOne = z.infer<typeof UserQueryOneSchema>; 

export type  UserQuery = z.infer<typeof UserQuerySchema>; 

export type  UserProjection = z.infer<typeof UserProjectionSchema>; 

    


export type  TeamCreate = z.infer<typeof TeamCreateSchema>; 

export type  TeamUpdate = z.infer<typeof TeamUpdateSchema>; 

export type  TeamOrderBy = z.infer<typeof TeamOrderBySchema>; 

export type  TeamOwnProjection = z.infer<typeof TeamOwnProjectionSchema>; 

export type  TeamOwnWhere = z.infer<typeof TeamOwnWhereSchema>; 

export type  TeamOwnQuery = z.infer<typeof TeamOwnQuerySchema>; 

export type  TeamOwnQueryOne = z.infer<typeof TeamOwnQueryOneSchema>; 

export type  TeamWhere = z.infer<typeof TeamWhereSchema>; 

export type  TeamQueryOne = z.infer<typeof TeamQueryOneSchema>; 

export type  TeamQuery = z.infer<typeof TeamQuerySchema>; 

export type  TeamProjection = z.infer<typeof TeamProjectionSchema>; 

    


export type  TeamManagerCreate = z.infer<typeof TeamManagerCreateSchema>; 

export type  TeamManagerUpdate = z.infer<typeof TeamManagerUpdateSchema>; 

export type  TeamManagerOrderBy = z.infer<typeof TeamManagerOrderBySchema>; 

export type  TeamManagerOwnProjection = z.infer<typeof TeamManagerOwnProjectionSchema>; 

export type  TeamManagerOwnWhere = z.infer<typeof TeamManagerOwnWhereSchema>; 

export type  TeamManagerOwnQuery = z.infer<typeof TeamManagerOwnQuerySchema>; 

export type  TeamManagerOwnQueryOne = z.infer<typeof TeamManagerOwnQueryOneSchema>; 

export type  TeamManagerWhere = z.infer<typeof TeamManagerWhereSchema>; 

export type  TeamManagerQueryOne = z.infer<typeof TeamManagerQueryOneSchema>; 

export type  TeamManagerQuery = z.infer<typeof TeamManagerQuerySchema>; 

export type  TeamManagerProjection = z.infer<typeof TeamManagerProjectionSchema>; 

    


export type  TeamMemberCreate = z.infer<typeof TeamMemberCreateSchema>; 

export type  TeamMemberUpdate = z.infer<typeof TeamMemberUpdateSchema>; 

export type  TeamMemberOrderBy = z.infer<typeof TeamMemberOrderBySchema>; 

export type  TeamMemberOwnProjection = z.infer<typeof TeamMemberOwnProjectionSchema>; 

export type  TeamMemberOwnWhere = z.infer<typeof TeamMemberOwnWhereSchema>; 

export type  TeamMemberOwnQuery = z.infer<typeof TeamMemberOwnQuerySchema>; 

export type  TeamMemberOwnQueryOne = z.infer<typeof TeamMemberOwnQueryOneSchema>; 

export type  TeamMemberWhere = z.infer<typeof TeamMemberWhereSchema>; 

export type  TeamMemberQueryOne = z.infer<typeof TeamMemberQueryOneSchema>; 

export type  TeamMemberQuery = z.infer<typeof TeamMemberQuerySchema>; 

export type  TeamMemberProjection = z.infer<typeof TeamMemberProjectionSchema>; 

    


export type  ProjectCreate = z.infer<typeof ProjectCreateSchema>; 

export type  ProjectUpdate = z.infer<typeof ProjectUpdateSchema>; 

export type  ProjectOrderBy = z.infer<typeof ProjectOrderBySchema>; 

export type  ProjectOwnProjection = z.infer<typeof ProjectOwnProjectionSchema>; 

export type  ProjectOwnWhere = z.infer<typeof ProjectOwnWhereSchema>; 

export type  ProjectOwnQuery = z.infer<typeof ProjectOwnQuerySchema>; 

export type  ProjectOwnQueryOne = z.infer<typeof ProjectOwnQueryOneSchema>; 

export type  ProjectWhere = z.infer<typeof ProjectWhereSchema>; 

export type  ProjectQueryOne = z.infer<typeof ProjectQueryOneSchema>; 

export type  ProjectQuery = z.infer<typeof ProjectQuerySchema>; 

export type  ProjectProjection = z.infer<typeof ProjectProjectionSchema>; 

    


export type  TagCreate = z.infer<typeof TagCreateSchema>; 

export type  TagUpdate = z.infer<typeof TagUpdateSchema>; 

export type  TagOrderBy = z.infer<typeof TagOrderBySchema>; 

export type  TagOwnProjection = z.infer<typeof TagOwnProjectionSchema>; 

export type  TagOwnWhere = z.infer<typeof TagOwnWhereSchema>; 

export type  TagOwnQuery = z.infer<typeof TagOwnQuerySchema>; 

export type  TagOwnQueryOne = z.infer<typeof TagOwnQueryOneSchema>; 

export type  TagWhere = z.infer<typeof TagWhereSchema>; 

export type  TagQueryOne = z.infer<typeof TagQueryOneSchema>; 

export type  TagQuery = z.infer<typeof TagQuerySchema>; 

export type  TagProjection = z.infer<typeof TagProjectionSchema>; 

    


export type  CategoryCreate = z.infer<typeof CategoryCreateSchema>; 

export type  CategoryUpdate = z.infer<typeof CategoryUpdateSchema>; 

export type  CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>; 

export type  CategoryOwnProjection = z.infer<typeof CategoryOwnProjectionSchema>; 

export type  CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>; 

export type  CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>; 

export type  CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>; 

export type  CategoryWhere = z.infer<typeof CategoryWhereSchema>; 

export type  CategoryQueryOne = z.infer<typeof CategoryQueryOneSchema>; 

export type  CategoryQuery = z.infer<typeof CategoryQuerySchema>; 

export type  CategoryProjection = z.infer<typeof CategoryProjectionSchema>; 

    


export type  SprintCreate = z.infer<typeof SprintCreateSchema>; 

export type  SprintUpdate = z.infer<typeof SprintUpdateSchema>; 

export type  SprintOrderBy = z.infer<typeof SprintOrderBySchema>; 

export type  SprintOwnProjection = z.infer<typeof SprintOwnProjectionSchema>; 

export type  SprintOwnWhere = z.infer<typeof SprintOwnWhereSchema>; 

export type  SprintOwnQuery = z.infer<typeof SprintOwnQuerySchema>; 

export type  SprintOwnQueryOne = z.infer<typeof SprintOwnQueryOneSchema>; 

export type  SprintWhere = z.infer<typeof SprintWhereSchema>; 

export type  SprintQueryOne = z.infer<typeof SprintQueryOneSchema>; 

export type  SprintQuery = z.infer<typeof SprintQuerySchema>; 

export type  SprintProjection = z.infer<typeof SprintProjectionSchema>; 

    


export type  PriorityCreate = z.infer<typeof PriorityCreateSchema>; 

export type  PriorityUpdate = z.infer<typeof PriorityUpdateSchema>; 

export type  PriorityOrderBy = z.infer<typeof PriorityOrderBySchema>; 

export type  PriorityOwnProjection = z.infer<typeof PriorityOwnProjectionSchema>; 

export type  PriorityOwnWhere = z.infer<typeof PriorityOwnWhereSchema>; 

export type  PriorityOwnQuery = z.infer<typeof PriorityOwnQuerySchema>; 

export type  PriorityOwnQueryOne = z.infer<typeof PriorityOwnQueryOneSchema>; 

export type  PriorityWhere = z.infer<typeof PriorityWhereSchema>; 

export type  PriorityQueryOne = z.infer<typeof PriorityQueryOneSchema>; 

export type  PriorityQuery = z.infer<typeof PriorityQuerySchema>; 

export type  PriorityProjection = z.infer<typeof PriorityProjectionSchema>; 

    


export type  StatusCreate = z.infer<typeof StatusCreateSchema>; 

export type  StatusUpdate = z.infer<typeof StatusUpdateSchema>; 

export type  StatusOrderBy = z.infer<typeof StatusOrderBySchema>; 

export type  StatusOwnProjection = z.infer<typeof StatusOwnProjectionSchema>; 

export type  StatusOwnWhere = z.infer<typeof StatusOwnWhereSchema>; 

export type  StatusOwnQuery = z.infer<typeof StatusOwnQuerySchema>; 

export type  StatusOwnQueryOne = z.infer<typeof StatusOwnQueryOneSchema>; 

export type  StatusWhere = z.infer<typeof StatusWhereSchema>; 

export type  StatusQueryOne = z.infer<typeof StatusQueryOneSchema>; 

export type  StatusQuery = z.infer<typeof StatusQuerySchema>; 

export type  StatusProjection = z.infer<typeof StatusProjectionSchema>; 

    


export type  PointCreate = z.infer<typeof PointCreateSchema>; 

export type  PointUpdate = z.infer<typeof PointUpdateSchema>; 

export type  PointOrderBy = z.infer<typeof PointOrderBySchema>; 

export type  PointOwnProjection = z.infer<typeof PointOwnProjectionSchema>; 

export type  PointOwnWhere = z.infer<typeof PointOwnWhereSchema>; 

export type  PointOwnQuery = z.infer<typeof PointOwnQuerySchema>; 

export type  PointOwnQueryOne = z.infer<typeof PointOwnQueryOneSchema>; 

export type  PointWhere = z.infer<typeof PointWhereSchema>; 

export type  PointQueryOne = z.infer<typeof PointQueryOneSchema>; 

export type  PointQuery = z.infer<typeof PointQuerySchema>; 

export type  PointProjection = z.infer<typeof PointProjectionSchema>; 

    


export type  TaskCreate = z.infer<typeof TaskCreateSchema>; 

export type  TaskUpdate = z.infer<typeof TaskUpdateSchema>; 

export type  TaskOrderBy = z.infer<typeof TaskOrderBySchema>; 

export type  TaskOwnProjection = z.infer<typeof TaskOwnProjectionSchema>; 

export type  TaskOwnWhere = z.infer<typeof TaskOwnWhereSchema>; 

export type  TaskOwnQuery = z.infer<typeof TaskOwnQuerySchema>; 

export type  TaskOwnQueryOne = z.infer<typeof TaskOwnQueryOneSchema>; 

export type  TaskWhere = z.infer<typeof TaskWhereSchema>; 

export type  TaskQueryOne = z.infer<typeof TaskQueryOneSchema>; 

export type  TaskQuery = z.infer<typeof TaskQuerySchema>; 

export type  TaskProjection = z.infer<typeof TaskProjectionSchema>; 

    


export type  AssignmentHistoryCreate = z.infer<typeof AssignmentHistoryCreateSchema>; 

export type  AssignmentHistoryUpdate = z.infer<typeof AssignmentHistoryUpdateSchema>; 

export type  AssignmentHistoryOrderBy = z.infer<typeof AssignmentHistoryOrderBySchema>; 

export type  AssignmentHistoryOwnProjection = z.infer<typeof AssignmentHistoryOwnProjectionSchema>; 

export type  AssignmentHistoryOwnWhere = z.infer<typeof AssignmentHistoryOwnWhereSchema>; 

export type  AssignmentHistoryOwnQuery = z.infer<typeof AssignmentHistoryOwnQuerySchema>; 

export type  AssignmentHistoryOwnQueryOne = z.infer<typeof AssignmentHistoryOwnQueryOneSchema>; 

export type  AssignmentHistoryWhere = z.infer<typeof AssignmentHistoryWhereSchema>; 

export type  AssignmentHistoryQueryOne = z.infer<typeof AssignmentHistoryQueryOneSchema>; 

export type  AssignmentHistoryQuery = z.infer<typeof AssignmentHistoryQuerySchema>; 

export type  AssignmentHistoryProjection = z.infer<typeof AssignmentHistoryProjectionSchema>; 

    


export type  PriorityHistoryCreate = z.infer<typeof PriorityHistoryCreateSchema>; 

export type  PriorityHistoryUpdate = z.infer<typeof PriorityHistoryUpdateSchema>; 

export type  PriorityHistoryOrderBy = z.infer<typeof PriorityHistoryOrderBySchema>; 

export type  PriorityHistoryOwnProjection = z.infer<typeof PriorityHistoryOwnProjectionSchema>; 

export type  PriorityHistoryOwnWhere = z.infer<typeof PriorityHistoryOwnWhereSchema>; 

export type  PriorityHistoryOwnQuery = z.infer<typeof PriorityHistoryOwnQuerySchema>; 

export type  PriorityHistoryOwnQueryOne = z.infer<typeof PriorityHistoryOwnQueryOneSchema>; 

export type  PriorityHistoryWhere = z.infer<typeof PriorityHistoryWhereSchema>; 

export type  PriorityHistoryQueryOne = z.infer<typeof PriorityHistoryQueryOneSchema>; 

export type  PriorityHistoryQuery = z.infer<typeof PriorityHistoryQuerySchema>; 

export type  PriorityHistoryProjection = z.infer<typeof PriorityHistoryProjectionSchema>; 

    


export type  StatusHistoryCreate = z.infer<typeof StatusHistoryCreateSchema>; 

export type  StatusHistoryUpdate = z.infer<typeof StatusHistoryUpdateSchema>; 

export type  StatusHistoryOrderBy = z.infer<typeof StatusHistoryOrderBySchema>; 

export type  StatusHistoryOwnProjection = z.infer<typeof StatusHistoryOwnProjectionSchema>; 

export type  StatusHistoryOwnWhere = z.infer<typeof StatusHistoryOwnWhereSchema>; 

export type  StatusHistoryOwnQuery = z.infer<typeof StatusHistoryOwnQuerySchema>; 

export type  StatusHistoryOwnQueryOne = z.infer<typeof StatusHistoryOwnQueryOneSchema>; 

export type  StatusHistoryWhere = z.infer<typeof StatusHistoryWhereSchema>; 

export type  StatusHistoryQueryOne = z.infer<typeof StatusHistoryQueryOneSchema>; 

export type  StatusHistoryQuery = z.infer<typeof StatusHistoryQuerySchema>; 

export type  StatusHistoryProjection = z.infer<typeof StatusHistoryProjectionSchema>; 

    


export type  PointHistoryCreate = z.infer<typeof PointHistoryCreateSchema>; 

export type  PointHistoryUpdate = z.infer<typeof PointHistoryUpdateSchema>; 

export type  PointHistoryOrderBy = z.infer<typeof PointHistoryOrderBySchema>; 

export type  PointHistoryOwnProjection = z.infer<typeof PointHistoryOwnProjectionSchema>; 

export type  PointHistoryOwnWhere = z.infer<typeof PointHistoryOwnWhereSchema>; 

export type  PointHistoryOwnQuery = z.infer<typeof PointHistoryOwnQuerySchema>; 

export type  PointHistoryOwnQueryOne = z.infer<typeof PointHistoryOwnQueryOneSchema>; 

export type  PointHistoryWhere = z.infer<typeof PointHistoryWhereSchema>; 

export type  PointHistoryQueryOne = z.infer<typeof PointHistoryQueryOneSchema>; 

export type  PointHistoryQuery = z.infer<typeof PointHistoryQuerySchema>; 

export type  PointHistoryProjection = z.infer<typeof PointHistoryProjectionSchema>; 

    


export type  TeamHistoryCreate = z.infer<typeof TeamHistoryCreateSchema>; 

export type  TeamHistoryUpdate = z.infer<typeof TeamHistoryUpdateSchema>; 

export type  TeamHistoryOrderBy = z.infer<typeof TeamHistoryOrderBySchema>; 

export type  TeamHistoryOwnProjection = z.infer<typeof TeamHistoryOwnProjectionSchema>; 

export type  TeamHistoryOwnWhere = z.infer<typeof TeamHistoryOwnWhereSchema>; 

export type  TeamHistoryOwnQuery = z.infer<typeof TeamHistoryOwnQuerySchema>; 

export type  TeamHistoryOwnQueryOne = z.infer<typeof TeamHistoryOwnQueryOneSchema>; 

export type  TeamHistoryWhere = z.infer<typeof TeamHistoryWhereSchema>; 

export type  TeamHistoryQueryOne = z.infer<typeof TeamHistoryQueryOneSchema>; 

export type  TeamHistoryQuery = z.infer<typeof TeamHistoryQuerySchema>; 

export type  TeamHistoryProjection = z.infer<typeof TeamHistoryProjectionSchema>; 

    


export type  TaskTagCreate = z.infer<typeof TaskTagCreateSchema>; 

export type  TaskTagUpdate = z.infer<typeof TaskTagUpdateSchema>; 

export type  TaskTagOrderBy = z.infer<typeof TaskTagOrderBySchema>; 

export type  TaskTagOwnProjection = z.infer<typeof TaskTagOwnProjectionSchema>; 

export type  TaskTagOwnWhere = z.infer<typeof TaskTagOwnWhereSchema>; 

export type  TaskTagOwnQuery = z.infer<typeof TaskTagOwnQuerySchema>; 

export type  TaskTagOwnQueryOne = z.infer<typeof TaskTagOwnQueryOneSchema>; 

export type  TaskTagWhere = z.infer<typeof TaskTagWhereSchema>; 

export type  TaskTagQueryOne = z.infer<typeof TaskTagQueryOneSchema>; 

export type  TaskTagQuery = z.infer<typeof TaskTagQuerySchema>; 

export type  TaskTagProjection = z.infer<typeof TaskTagProjectionSchema>; 

    


export type  TaskCategoryCreate = z.infer<typeof TaskCategoryCreateSchema>; 

export type  TaskCategoryUpdate = z.infer<typeof TaskCategoryUpdateSchema>; 

export type  TaskCategoryOrderBy = z.infer<typeof TaskCategoryOrderBySchema>; 

export type  TaskCategoryOwnProjection = z.infer<typeof TaskCategoryOwnProjectionSchema>; 

export type  TaskCategoryOwnWhere = z.infer<typeof TaskCategoryOwnWhereSchema>; 

export type  TaskCategoryOwnQuery = z.infer<typeof TaskCategoryOwnQuerySchema>; 

export type  TaskCategoryOwnQueryOne = z.infer<typeof TaskCategoryOwnQueryOneSchema>; 

export type  TaskCategoryWhere = z.infer<typeof TaskCategoryWhereSchema>; 

export type  TaskCategoryQueryOne = z.infer<typeof TaskCategoryQueryOneSchema>; 

export type  TaskCategoryQuery = z.infer<typeof TaskCategoryQuerySchema>; 

export type  TaskCategoryProjection = z.infer<typeof TaskCategoryProjectionSchema>; 

    


export type  AssignmentCreate = z.infer<typeof AssignmentCreateSchema>; 

export type  AssignmentUpdate = z.infer<typeof AssignmentUpdateSchema>; 

export type  AssignmentOrderBy = z.infer<typeof AssignmentOrderBySchema>; 

export type  AssignmentOwnProjection = z.infer<typeof AssignmentOwnProjectionSchema>; 

export type  AssignmentOwnWhere = z.infer<typeof AssignmentOwnWhereSchema>; 

export type  AssignmentOwnQuery = z.infer<typeof AssignmentOwnQuerySchema>; 

export type  AssignmentOwnQueryOne = z.infer<typeof AssignmentOwnQueryOneSchema>; 

export type  AssignmentWhere = z.infer<typeof AssignmentWhereSchema>; 

export type  AssignmentQueryOne = z.infer<typeof AssignmentQueryOneSchema>; 

export type  AssignmentQuery = z.infer<typeof AssignmentQuerySchema>; 

export type  AssignmentProjection = z.infer<typeof AssignmentProjectionSchema>; 

    


export type  CommentCreate = z.infer<typeof CommentCreateSchema>; 

export type  CommentUpdate = z.infer<typeof CommentUpdateSchema>; 

export type  CommentOrderBy = z.infer<typeof CommentOrderBySchema>; 

export type  CommentOwnProjection = z.infer<typeof CommentOwnProjectionSchema>; 

export type  CommentOwnWhere = z.infer<typeof CommentOwnWhereSchema>; 

export type  CommentOwnQuery = z.infer<typeof CommentOwnQuerySchema>; 

export type  CommentOwnQueryOne = z.infer<typeof CommentOwnQueryOneSchema>; 

export type  CommentWhere = z.infer<typeof CommentWhereSchema>; 

export type  CommentQueryOne = z.infer<typeof CommentQueryOneSchema>; 

export type  CommentQuery = z.infer<typeof CommentQuerySchema>; 

export type  CommentProjection = z.infer<typeof CommentProjectionSchema>; 

    


export type  ProjectTaskTagCreate = z.infer<typeof ProjectTaskTagCreateSchema>; 

export type  ProjectTaskTagUpdate = z.infer<typeof ProjectTaskTagUpdateSchema>; 

export type  ProjectTaskTagOrderBy = z.infer<typeof ProjectTaskTagOrderBySchema>; 

export type  ProjectTaskTagOwnProjection = z.infer<typeof ProjectTaskTagOwnProjectionSchema>; 

export type  ProjectTaskTagOwnWhere = z.infer<typeof ProjectTaskTagOwnWhereSchema>; 

export type  ProjectTaskTagOwnQuery = z.infer<typeof ProjectTaskTagOwnQuerySchema>; 

export type  ProjectTaskTagOwnQueryOne = z.infer<typeof ProjectTaskTagOwnQueryOneSchema>; 

export type  ProjectTaskTagWhere = z.infer<typeof ProjectTaskTagWhereSchema>; 

export type  ProjectTaskTagQueryOne = z.infer<typeof ProjectTaskTagQueryOneSchema>; 

export type  ProjectTaskTagQuery = z.infer<typeof ProjectTaskTagQuerySchema>; 

export type  ProjectTaskTagProjection = z.infer<typeof ProjectTaskTagProjectionSchema>; 

    


export type  ProjectTaskStatusCreate = z.infer<typeof ProjectTaskStatusCreateSchema>; 

export type  ProjectTaskStatusUpdate = z.infer<typeof ProjectTaskStatusUpdateSchema>; 

export type  ProjectTaskStatusOrderBy = z.infer<typeof ProjectTaskStatusOrderBySchema>; 

export type  ProjectTaskStatusOwnProjection = z.infer<typeof ProjectTaskStatusOwnProjectionSchema>; 

export type  ProjectTaskStatusOwnWhere = z.infer<typeof ProjectTaskStatusOwnWhereSchema>; 

export type  ProjectTaskStatusOwnQuery = z.infer<typeof ProjectTaskStatusOwnQuerySchema>; 

export type  ProjectTaskStatusOwnQueryOne = z.infer<typeof ProjectTaskStatusOwnQueryOneSchema>; 

export type  ProjectTaskStatusWhere = z.infer<typeof ProjectTaskStatusWhereSchema>; 

export type  ProjectTaskStatusQueryOne = z.infer<typeof ProjectTaskStatusQueryOneSchema>; 

export type  ProjectTaskStatusQuery = z.infer<typeof ProjectTaskStatusQuerySchema>; 

export type  ProjectTaskStatusProjection = z.infer<typeof ProjectTaskStatusProjectionSchema>; 

    


export type  ProjectTaskPriorityCreate = z.infer<typeof ProjectTaskPriorityCreateSchema>; 

export type  ProjectTaskPriorityUpdate = z.infer<typeof ProjectTaskPriorityUpdateSchema>; 

export type  ProjectTaskPriorityOrderBy = z.infer<typeof ProjectTaskPriorityOrderBySchema>; 

export type  ProjectTaskPriorityOwnProjection = z.infer<typeof ProjectTaskPriorityOwnProjectionSchema>; 

export type  ProjectTaskPriorityOwnWhere = z.infer<typeof ProjectTaskPriorityOwnWhereSchema>; 

export type  ProjectTaskPriorityOwnQuery = z.infer<typeof ProjectTaskPriorityOwnQuerySchema>; 

export type  ProjectTaskPriorityOwnQueryOne = z.infer<typeof ProjectTaskPriorityOwnQueryOneSchema>; 

export type  ProjectTaskPriorityWhere = z.infer<typeof ProjectTaskPriorityWhereSchema>; 

export type  ProjectTaskPriorityQueryOne = z.infer<typeof ProjectTaskPriorityQueryOneSchema>; 

export type  ProjectTaskPriorityQuery = z.infer<typeof ProjectTaskPriorityQuerySchema>; 

export type  ProjectTaskPriorityProjection = z.infer<typeof ProjectTaskPriorityProjectionSchema>; 

    