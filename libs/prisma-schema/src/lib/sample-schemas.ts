import z from 'zod';


export const _int = z.coerce.number().int()


export const _str = z.string()


export const _num = z.coerce.number()


export const _bool = z.coerce.boolean()


export const _date = z.iso.datetime()


export const _shortText = z.string().max(30)


export const _longText = z.string().max(2000)


export const _id = z.coerce.number().int().min(1)


export const _idObject = z.object({ 
   id: _id
})

export const _currency = z.coerce.number().min(0)


export const _positiveInt = z.coerce.number().int().min(0)


export const _name = z.string().min(3).max(30)


export const _slug = z.string().min(3).max(30).regex(/[0-9a-z-]{0,30}/, { error:'Slug must contain only lowercase letters, numbers, and dash.'})


export const _description = z.string().max(1000)


export const _email = z.string().max(1000)


export const _phone = z.string().regex(/^[0-9]{3} [0-9]{3} [0-9]{2}-[0-9]{2}$/, {error: 'Invalid phone format' })


export const _url = z.url()


export const _password = z.string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: 'must contain at least one upper-case letter' })
  .regex(/[a-z]{1,}/, { error: 'must contain at least one lower-case letter' })
  .regex(/[0-9]{1,}/, { error: 'must contain at least one number' })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {error: 'must contain at least one special character' })


export const _select = z.coerce.boolean().optional()


export const _direction = z.enum(['asc', 'desc']).optional()


export const _orderByCount = z.object({ _count: _direction }).optional();


export const _take = _int.min(1).default(20).optional()


export const _skip = _int.min(0).optional()


export const _json = z.preprocess((value) => {
  if (typeof value === 'string') {
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
}


export const _0_boolFilter = z.object({
  equals: _bool.optional()
})

export const _1_boolFilter =  z.object({ 
  equals: _bool.optional(),
  not: _bool.or(_0_boolFilter).optional()
})

export const _boolFilter = _bool.or(_1_boolFilter)


export const _0_intFilter = z.object({
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
})

export const _1_intFilter =  z.object({ 
  equals: _int.optional(),
  gt: _int.optional(),
  gte: _int.optional(),
  lt: _int.optional(),
  lte: _int.optional(),
  in: _int.array().optional(),
  notIn: _int.array().optional(),
  not: _0_intFilter.optional()
})

export const _intFilter = _int.or(_1_intFilter)


export const _0_numFilter = z.object({
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
})

export const _1_numFilter =  z.object({ 
  equals: _num.optional(),
  gt: _num.optional(),
  gte: _num.optional(),
  lt: _num.optional(),
  lte: _num.optional(),
  in: _num.array().optional(),
  notIn: _num.array().optional(),
  not: _0_numFilter.optional()
})

export const _numFilter = _num.or(_1_numFilter)


export const _0_dateFilter = z.object({
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
})

export const _1_dateFilter =  z.object({ 
  equals: _date.optional(),
  gt: _date.optional(),
  gte: _date.optional(),
  lt: _date.optional(),
  lte: _date.optional(),
  in: _date.array().optional(),
  notIn: _date.array().optional(),
  not: _0_dateFilter.optional()
})

export const _dateFilter = _date.or(_1_dateFilter)


export const _strMode = z.enum(['default', 'insensitive'])

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
})

export const _1_strFilter =  z.object({ 
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
  not: _str.or(_0_strFilter).optional()
})

export const _strFilter = _str.or(_1_strFilter)


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
  not: _str.optional()
})


export const _strArrayFilter = z.object({
    equals: _str.array().optional(),
    has: _str.optional(),
    hasEvery: _str.array().optional(),
    hasSome: _str.array().optional(),
    isEmpty: _bool.optional(),
})


export const _numArrayFilter= z.object({
    equals: _num.array().optional(),
    has: _num.optional(),
    hasEvery: _num.array().optional(),
    hasSome: _num.array().optional(),
    isEmpty: _bool.optional(),
})


export const _intArrayFilter= z.object({
    equals: _int.array().optional(),
    has: _int.optional(),
    hasEvery: _int.array().optional(),
    hasSome: _int.array().optional(),
    isEmpty: _bool.optional(),
})


export const _dateArrayFilter= z.object({
    equals: _date.array().optional(),
    has: _date.optional(),
    hasEvery: _date.array().optional(),
    hasSome: _date.array().optional(),
    isEmpty: _bool.optional(),
})


export const StatusSchema = z.enum(["DONE","IN_PROGRESS","NEW"])

export const __StatusFilterSchema = z.object({
equals: StatusSchema.optional(),
in: StatusSchema.array().optional(),
notIn: StatusSchema.array().optional()
})
export const StatusFilterSchema = z.object({
equals: StatusSchema.optional(),
in: StatusSchema.array().optional(),
notIn: StatusSchema.array().optional(),
not:  StatusSchema.or(__StatusFilterSchema).optional()
})

export const StatusArrayFilterSchema = z.object({
equals: StatusSchema.array().optional(),
has: StatusSchema.optional(),
hasEvery: StatusSchema.array().optional(),
hasSome: StatusSchema.array().optional(),
isEmpty: _bool.optional()
})

export const CategoryDistinctSchema = z.enum([ "id","parentId","name","description"]).array().optional()

export const TagDistinctSchema = z.enum([ "id","name"]).array().optional()

export const SampleDistinctSchema = z.enum([ "id","uuid","otherUuid","createdAt","updatedAt","deletedAt","categoryId","name","slug","description","active","notes","nums","url","json","email","password","price","cost","status","statuses"]).array().optional()

export const SampleTagDistinctSchema = z.enum([ "id","tagId","sampleId"]).array().optional()

export const CategoryOwnWhereSchema = z.object({id: _intFilter.optional(),parentId: _intFilter.optional(),name: _strFilter.optional(),description: _strFilter.optional()})

export const TagOwnWhereSchema = z.object({id: _intFilter.optional(),name: _strFilter.optional()})

export const SampleOwnWhereSchema = z.object({id: _intFilter.optional(),uuid: _strFilter.optional(),otherUuid: _strFilter.optional(),createdAt: _dateFilter.optional(),updatedAt: _dateFilter.optional(),deletedAt: _dateFilter.optional(),categoryId: _intFilter.optional(),name: _strFilter.optional(),slug: _strFilter.optional(),description: _strFilter.optional(),active: _boolFilter.optional(),notes: _strArrayFilter.optional(),nums: _intArrayFilter.optional(),url: _strFilter.optional(),json: _jsonFilter.optional(),email: _strFilter.optional(),password: _strFilter.optional(),price: _numFilter.optional(),cost: _numFilter.optional(),status: StatusFilterSchema.optional(),statuses: StatusArrayFilterSchema.optional()})

export const SampleTagOwnWhereSchema = z.object({id: _intFilter.optional(),tagId: _intFilter.optional(),sampleId: _intFilter.optional()})

export const CategoryOwnWhereSchemaJson = z.preprocess(_jsonPreprocessor,CategoryOwnWhereSchema)

export const TagOwnWhereSchemaJson = z.preprocess(_jsonPreprocessor,TagOwnWhereSchema)

export const SampleOwnWhereSchemaJson = z.preprocess(_jsonPreprocessor,SampleOwnWhereSchema)

export const SampleTagOwnWhereSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagOwnWhereSchema)

export const CategoryWhereSchema = z.object({id: _intFilter.optional(),parentId: _intFilter.optional(),name: _strFilter.optional(),description: _strFilter.optional(),parent: CategoryOwnWhereSchema.optional(),children: z.object({
            every: CategoryOwnWhereSchema.optional(), 
            some: CategoryOwnWhereSchema.optional(), 
            none: CategoryOwnWhereSchema.optional()
          }).optional(),samples: z.object({
            every: SampleOwnWhereSchema.optional(), 
            some: SampleOwnWhereSchema.optional(), 
            none: SampleOwnWhereSchema.optional()
          }).optional()})

export const TagWhereSchema = z.object({id: _intFilter.optional(),name: _strFilter.optional(),samples: z.object({
            every: SampleTagOwnWhereSchema.optional(), 
            some: SampleTagOwnWhereSchema.optional(), 
            none: SampleTagOwnWhereSchema.optional()
          }).optional()})

export const SampleWhereSchema = z.object({id: _intFilter.optional(),uuid: _strFilter.optional(),otherUuid: _strFilter.optional(),createdAt: _dateFilter.optional(),updatedAt: _dateFilter.optional(),deletedAt: _dateFilter.optional(),categoryId: _intFilter.optional(),name: _strFilter.optional(),slug: _strFilter.optional(),description: _strFilter.optional(),active: _boolFilter.optional(),notes: _strArrayFilter.optional(),nums: _intArrayFilter.optional(),url: _strFilter.optional(),json: _jsonFilter.optional(),email: _strFilter.optional(),password: _strFilter.optional(),price: _numFilter.optional(),cost: _numFilter.optional(),category: CategoryOwnWhereSchema.optional(),tags: z.object({
            every: SampleTagOwnWhereSchema.optional(), 
            some: SampleTagOwnWhereSchema.optional(), 
            none: SampleTagOwnWhereSchema.optional()
          }).optional(),status: StatusFilterSchema.optional(),statuses: StatusArrayFilterSchema.optional()})

export const SampleTagWhereSchema = z.object({id: _intFilter.optional(),tagId: _intFilter.optional(),sampleId: _intFilter.optional(),sample: SampleOwnWhereSchema.optional(),tag: TagOwnWhereSchema.optional()})

export const CategoryWhereSchemaJson = z.preprocess(_jsonPreprocessor,CategoryWhereSchema)

export const TagWhereSchemaJson = z.preprocess(_jsonPreprocessor,TagWhereSchema)

export const SampleWhereSchemaJson = z.preprocess(_jsonPreprocessor,SampleWhereSchema)

export const SampleTagWhereSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagWhereSchema)

export const CategoryOwnOrderBySchema = z.object({id: _direction,parentId: _direction,name: _direction,description: _direction})

export const TagOwnOrderBySchema = z.object({id: _direction,name: _direction})

export const SampleOwnOrderBySchema = z.object({id: _direction,uuid: _direction,otherUuid: _direction,createdAt: _direction,updatedAt: _direction,deletedAt: _direction,categoryId: _direction,name: _direction,slug: _direction,description: _direction,active: _direction,notes: _direction,nums: _direction,url: _direction,json: _direction,email: _direction,password: _direction,price: _direction,cost: _direction,status: _direction,statuses: _direction})

export const SampleTagOwnOrderBySchema = z.object({id: _direction,tagId: _direction,sampleId: _direction})

export const CategoryOwnOrderBySchemaJson = z.preprocess(_jsonPreprocessor,CategoryOwnOrderBySchema)

export const TagOwnOrderBySchemaJson = z.preprocess(_jsonPreprocessor,TagOwnOrderBySchema)

export const SampleOwnOrderBySchemaJson = z.preprocess(_jsonPreprocessor,SampleOwnOrderBySchema)

export const SampleTagOwnOrderBySchemaJson = z.preprocess(_jsonPreprocessor,SampleTagOwnOrderBySchema)

export const CategoryOrderBySchema = z.object({id: _direction,parentId: _direction,name: _direction,description: _direction,parent: CategoryOwnOrderBySchema.optional(),children: _orderByCount,samples: _orderByCount})

export const TagOrderBySchema = z.object({id: _direction,name: _direction,samples: _orderByCount})

export const SampleOrderBySchema = z.object({id: _direction,uuid: _direction,otherUuid: _direction,createdAt: _direction,updatedAt: _direction,deletedAt: _direction,categoryId: _direction,name: _direction,slug: _direction,description: _direction,active: _direction,notes: _direction,nums: _direction,url: _direction,json: _direction,email: _direction,password: _direction,price: _direction,cost: _direction,category: CategoryOwnOrderBySchema.optional(),tags: _orderByCount,status: _direction,statuses: _direction})

export const SampleTagOrderBySchema = z.object({id: _direction,tagId: _direction,sampleId: _direction,sample: SampleOwnOrderBySchema.optional(),tag: TagOwnOrderBySchema.optional()})

export const CategoryOrderBySchemaJson = z.preprocess(_jsonPreprocessor,CategoryOrderBySchema)

export const TagOrderBySchemaJson = z.preprocess(_jsonPreprocessor,TagOrderBySchema)

export const SampleOrderBySchemaJson = z.preprocess(_jsonPreprocessor,SampleOrderBySchema)

export const SampleTagOrderBySchemaJson = z.preprocess(_jsonPreprocessor,SampleTagOrderBySchema)

export const CategoryOwnSelectSchema = z.object({id: _select,parentId: _select,name: _select,description: _select})

export const TagOwnSelectSchema = z.object({id: _select,name: _select})

export const SampleOwnSelectSchema = z.object({id: _select,uuid: _select,otherUuid: _select,createdAt: _select,updatedAt: _select,deletedAt: _select,categoryId: _select,name: _select,slug: _select,description: _select,active: _select,notes: _select,nums: _select,url: _select,json: _select,email: _select,password: _select,price: _select,cost: _select,status: _select,statuses: _select})

export const SampleTagOwnSelectSchema = z.object({id: _select,tagId: _select,sampleId: _select})

export const CategoryOwnSelectSchemaJson = z.preprocess(_jsonPreprocessor,CategoryOwnSelectSchema)

export const TagOwnSelectSchemaJson = z.preprocess(_jsonPreprocessor,TagOwnSelectSchema)

export const SampleOwnSelectSchemaJson = z.preprocess(_jsonPreprocessor,SampleOwnSelectSchema)

export const SampleTagOwnSelectSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagOwnSelectSchema)

export const CategorySelectSchema = z.object({id: _select,parentId: _select,name: _select,description: _select,parent: _select,children: _select,samples: _select})

export const TagSelectSchema = z.object({id: _select,name: _select,samples: _select})

export const SampleSelectSchema = z.object({id: _select,uuid: _select,otherUuid: _select,createdAt: _select,updatedAt: _select,deletedAt: _select,categoryId: _select,name: _select,slug: _select,description: _select,active: _select,notes: _select,nums: _select,url: _select,json: _select,email: _select,password: _select,price: _select,cost: _select,category: _select,tags: _select,status: _select,statuses: _select})

export const SampleTagSelectSchema = z.object({id: _select,tagId: _select,sampleId: _select,sample: _select,tag: _select})

export const CategorySelectSchemaJson = z.preprocess(_jsonPreprocessor,CategorySelectSchema)

export const TagSelectSchemaJson = z.preprocess(_jsonPreprocessor,TagSelectSchema)

export const SampleSelectSchemaJson = z.preprocess(_jsonPreprocessor,SampleSelectSchema)

export const SampleTagSelectSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagSelectSchema)

export const CategoryOmitSchema = z.object({id: _select,parentId: _select,name: _select,description: _select})

export const TagOmitSchema = z.object({id: _select,name: _select})

export const SampleOmitSchema = z.object({id: _select,uuid: _select,otherUuid: _select,createdAt: _select,updatedAt: _select,deletedAt: _select,categoryId: _select,name: _select,slug: _select,description: _select,active: _select,notes: _select,nums: _select,url: _select,json: _select,email: _select,password: _select,price: _select,cost: _select,status: _select,statuses: _select})

export const SampleTagOmitSchema = z.object({id: _select,tagId: _select,sampleId: _select})

export const CategoryOmitSchemaJson = z.preprocess(_jsonPreprocessor,CategoryOmitSchema)

export const TagOmitSchemaJson = z.preprocess(_jsonPreprocessor,TagOmitSchema)

export const SampleOmitSchemaJson = z.preprocess(_jsonPreprocessor,SampleOmitSchema)

export const SampleTagOmitSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagOmitSchema)

export const CategoryOwnQueryOneSchema = z.object({select: CategoryOwnSelectSchemaJson.optional(),omit: CategoryOmitSchemaJson.optional(),where: CategoryOwnWhereSchemaJson.optional()})

export const TagOwnQueryOneSchema = z.object({select: TagOwnSelectSchemaJson.optional(),omit: TagOmitSchemaJson.optional(),where: TagOwnWhereSchemaJson.optional()})

export const SampleOwnQueryOneSchema = z.object({select: SampleOwnSelectSchemaJson.optional(),omit: SampleOmitSchemaJson.optional(),where: SampleOwnWhereSchemaJson.optional()})

export const SampleTagOwnQueryOneSchema = z.object({select: SampleTagOwnSelectSchemaJson.optional(),omit: SampleTagOmitSchemaJson.optional(),where: SampleTagOwnWhereSchemaJson.optional()})

export const CategoryOwnQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,CategoryOwnQueryOneSchema)

export const TagOwnQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,TagOwnQueryOneSchema)

export const SampleOwnQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,SampleOwnQueryOneSchema)

export const SampleTagOwnQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagOwnQueryOneSchema)

export const CategoryOwnQuerySchema = z.object({take: _take,skip: _skip,distinct: CategoryDistinctSchema.optional(),select: CategoryOwnSelectSchemaJson.optional(),omit: CategoryOmitSchemaJson.optional(),where: CategoryOwnWhereSchemaJson.optional(),orderBy: CategoryOwnOrderBySchemaJson.optional()})

export const TagOwnQuerySchema = z.object({take: _take,skip: _skip,distinct: TagDistinctSchema.optional(),select: TagOwnSelectSchemaJson.optional(),omit: TagOmitSchemaJson.optional(),where: TagOwnWhereSchemaJson.optional(),orderBy: TagOwnOrderBySchemaJson.optional()})

export const SampleOwnQuerySchema = z.object({take: _take,skip: _skip,distinct: SampleDistinctSchema.optional(),select: SampleOwnSelectSchemaJson.optional(),omit: SampleOmitSchemaJson.optional(),where: SampleOwnWhereSchemaJson.optional(),orderBy: SampleOwnOrderBySchemaJson.optional()})

export const SampleTagOwnQuerySchema = z.object({take: _take,skip: _skip,distinct: SampleTagDistinctSchema.optional(),select: SampleTagOwnSelectSchemaJson.optional(),omit: SampleTagOmitSchemaJson.optional(),where: SampleTagOwnWhereSchemaJson.optional(),orderBy: SampleTagOwnOrderBySchemaJson.optional()})

export const CategoryOwnQuerySchemaJson = z.preprocess(_jsonPreprocessor,CategoryOwnQuerySchema)

export const TagOwnQuerySchemaJson = z.preprocess(_jsonPreprocessor,TagOwnQuerySchema)

export const SampleOwnQuerySchemaJson = z.preprocess(_jsonPreprocessor,SampleOwnQuerySchema)

export const SampleTagOwnQuerySchemaJson = z.preprocess(_jsonPreprocessor,SampleTagOwnQuerySchema)

export const CategoryIncludeSchema = z.object({parent : _select.or(CategoryOwnQueryOneSchema).optional(),children : _select.or(CategoryOwnQueryOneSchema).optional(),samples : _select.or(SampleOwnQueryOneSchema).optional()})

export const TagIncludeSchema = z.object({samples : _select.or(SampleTagOwnQueryOneSchema).optional()})

export const SampleIncludeSchema = z.object({category : _select.or(CategoryOwnQueryOneSchema).optional(),tags : _select.or(SampleTagOwnQueryOneSchema).optional()})

export const SampleTagIncludeSchema = z.object({sample : _select.or(SampleOwnQueryOneSchema).optional(),tag : _select.or(TagOwnQueryOneSchema).optional()})

export const CategoryIncludeSchemaJson = z.preprocess(_jsonPreprocessor,CategoryIncludeSchema)

export const TagIncludeSchemaJson = z.preprocess(_jsonPreprocessor,TagIncludeSchema)

export const SampleIncludeSchemaJson = z.preprocess(_jsonPreprocessor,SampleIncludeSchema)

export const SampleTagIncludeSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagIncludeSchema)

export const CategoryCompleteSelectSchema = z.object({id: _select,parentId: _select,name: _select,description: _select,parent : _select.or(CategoryOwnQueryOneSchema).optional(),children : _select.or(CategoryOwnQueryOneSchema).optional(),samples : _select.or(SampleOwnQueryOneSchema).optional()})

export const TagCompleteSelectSchema = z.object({id: _select,name: _select,samples : _select.or(SampleTagOwnQueryOneSchema).optional()})

export const SampleCompleteSelectSchema = z.object({id: _select,uuid: _select,otherUuid: _select,createdAt: _select,updatedAt: _select,deletedAt: _select,categoryId: _select,name: _select,slug: _select,description: _select,active: _select,notes: _select,nums: _select,url: _select,json: _select,email: _select,password: _select,price: _select,cost: _select,category : _select.or(CategoryOwnQueryOneSchema).optional(),tags : _select.or(SampleTagOwnQueryOneSchema).optional(),status: _select,statuses: _select})

export const SampleTagCompleteSelectSchema = z.object({id: _select,tagId: _select,sampleId: _select,sample : _select.or(SampleOwnQueryOneSchema).optional(),tag : _select.or(TagOwnQueryOneSchema).optional()})

export const CategoryCompleteSelectSchemaJson = z.preprocess(_jsonPreprocessor,CategoryCompleteSelectSchema)

export const TagCompleteSelectSchemaJson = z.preprocess(_jsonPreprocessor,TagCompleteSelectSchema)

export const SampleCompleteSelectSchemaJson = z.preprocess(_jsonPreprocessor,SampleCompleteSelectSchema)

export const SampleTagCompleteSelectSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagCompleteSelectSchema)

export const CategoryQuerySchema = z.object({take: _take,skip: _skip,distinct: CategoryDistinctSchema.optional(),select: CategoryOwnSelectSchemaJson.optional(),omit: CategoryOmitSchemaJson.optional(),include: CategoryIncludeSchemaJson.optional(),where: CategoryWhereSchemaJson.optional(),orderBy: CategoryOrderBySchemaJson.optional()})

export const TagQuerySchema = z.object({take: _take,skip: _skip,distinct: TagDistinctSchema.optional(),select: TagOwnSelectSchemaJson.optional(),omit: TagOmitSchemaJson.optional(),include: TagIncludeSchemaJson.optional(),where: TagWhereSchemaJson.optional(),orderBy: TagOrderBySchemaJson.optional()})

export const SampleQuerySchema = z.object({take: _take,skip: _skip,distinct: SampleDistinctSchema.optional(),select: SampleOwnSelectSchemaJson.optional(),omit: SampleOmitSchemaJson.optional(),include: SampleIncludeSchemaJson.optional(),where: SampleWhereSchemaJson.optional(),orderBy: SampleOrderBySchemaJson.optional()})

export const SampleTagQuerySchema = z.object({take: _take,skip: _skip,distinct: SampleTagDistinctSchema.optional(),select: SampleTagOwnSelectSchemaJson.optional(),omit: SampleTagOmitSchemaJson.optional(),include: SampleTagIncludeSchemaJson.optional(),where: SampleTagWhereSchemaJson.optional(),orderBy: SampleTagOrderBySchemaJson.optional()})

export const CategoryQuerySchemaJson = z.preprocess(_jsonPreprocessor,CategoryQuerySchema)

export const TagQuerySchemaJson = z.preprocess(_jsonPreprocessor,TagQuerySchema)

export const SampleQuerySchemaJson = z.preprocess(_jsonPreprocessor,SampleQuerySchema)

export const SampleTagQuerySchemaJson = z.preprocess(_jsonPreprocessor,SampleTagQuerySchema)

export const CategoryCompleteQueryOneSchema = z.object({select: CategorySelectSchemaJson.optional(),omit: CategoryOmitSchemaJson.optional(),include: CategoryIncludeSchemaJson.optional(),where: CategoryWhereSchemaJson.optional()})

export const TagCompleteQueryOneSchema = z.object({select: TagSelectSchemaJson.optional(),omit: TagOmitSchemaJson.optional(),include: TagIncludeSchemaJson.optional(),where: TagWhereSchemaJson.optional()})

export const SampleCompleteQueryOneSchema = z.object({select: SampleSelectSchemaJson.optional(),omit: SampleOmitSchemaJson.optional(),include: SampleIncludeSchemaJson.optional(),where: SampleWhereSchemaJson.optional()})

export const SampleTagCompleteQueryOneSchema = z.object({select: SampleTagSelectSchemaJson.optional(),omit: SampleTagOmitSchemaJson.optional(),include: SampleTagIncludeSchemaJson.optional(),where: SampleTagWhereSchemaJson.optional()})

export const CategoryCompleteQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,CategoryCompleteQueryOneSchema)

export const TagCompleteQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,TagCompleteQueryOneSchema)

export const SampleCompleteQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,SampleCompleteQueryOneSchema)

export const SampleTagCompleteQueryOneSchemaJson = z.preprocess(_jsonPreprocessor,SampleTagCompleteQueryOneSchema)

export const CategoryCompleteQuerySchema = z.object({take: _take,skip: _skip,distinct: CategoryDistinctSchema.optional(),select: CategoryCompleteSelectSchemaJson.optional(),omit: CategoryOmitSchemaJson.optional(),include: CategoryIncludeSchemaJson.optional(),where: CategoryWhereSchemaJson.optional(),orderBy: CategoryOrderBySchemaJson.optional()})

export const TagCompleteQuerySchema = z.object({take: _take,skip: _skip,distinct: TagDistinctSchema.optional(),select: TagCompleteSelectSchemaJson.optional(),omit: TagOmitSchemaJson.optional(),include: TagIncludeSchemaJson.optional(),where: TagWhereSchemaJson.optional(),orderBy: TagOrderBySchemaJson.optional()})

export const SampleCompleteQuerySchema = z.object({take: _take,skip: _skip,distinct: SampleDistinctSchema.optional(),select: SampleCompleteSelectSchemaJson.optional(),omit: SampleOmitSchemaJson.optional(),include: SampleIncludeSchemaJson.optional(),where: SampleWhereSchemaJson.optional(),orderBy: SampleOrderBySchemaJson.optional()})

export const SampleTagCompleteQuerySchema = z.object({take: _take,skip: _skip,distinct: SampleTagDistinctSchema.optional(),select: SampleTagCompleteSelectSchemaJson.optional(),omit: SampleTagOmitSchemaJson.optional(),include: SampleTagIncludeSchemaJson.optional(),where: SampleTagWhereSchemaJson.optional(),orderBy: SampleTagOrderBySchemaJson.optional()})

export const CategoryCompleteQuerySchemaJson = z.preprocess(_jsonPreprocessor,CategoryCompleteQuerySchema)

export const TagCompleteQuerySchemaJson = z.preprocess(_jsonPreprocessor,TagCompleteQuerySchema)

export const SampleCompleteQuerySchemaJson = z.preprocess(_jsonPreprocessor,SampleCompleteQuerySchema)

export const SampleTagCompleteQuerySchemaJson = z.preprocess(_jsonPreprocessor,SampleTagCompleteQuerySchema)

export const CategoryProjectionSchema = z.union([z.object({ omit: CategoryOmitSchemaJson}),z.object({ select: CategorySelectSchemaJson}),z.object({ include: CategoryIncludeSchemaJson}),z.object({})]);

export const TagProjectionSchema = z.union([z.object({ omit: TagOmitSchemaJson}),z.object({ select: TagSelectSchemaJson}),z.object({ include: TagIncludeSchemaJson}),z.object({})]);

export const SampleProjectionSchema = z.union([z.object({ omit: SampleOmitSchemaJson}),z.object({ select: SampleSelectSchemaJson}),z.object({ include: SampleIncludeSchemaJson}),z.object({})]);

export const SampleTagProjectionSchema = z.union([z.object({ omit: SampleTagOmitSchemaJson}),z.object({ select: SampleTagSelectSchemaJson}),z.object({ include: SampleTagIncludeSchemaJson}),z.object({})]);

export const CategoryOwnCreateSchema = z.object({parentId: _id.optional(),name: _name,description: _description.optional()})

export const TagOwnCreateSchema = z.object({name: _name})

export const SampleOwnCreateSchema = z.object({otherUuid: _str.optional(),categoryId: _id.optional(),name: _name,slug: _slug,description: _description.optional(),active: _bool.optional(),notes: _str.array(),nums: _int.array(),url: _url.optional(),json: _json.optional(),email: _email,password: _password.optional(),price: _currency,cost: _currency,status: StatusSchema.optional(),statuses: StatusSchema.array()})

export const SampleTagOwnCreateSchema = z.object({tagId: _id,sampleId: _id})

export const CategoryCreateSchema = z.object({parentId: _id.optional(),name: _name,description: _description.optional()})

export const TagCreateSchema = z.object({name: _name})

export const SampleCreateSchema = z.object({otherUuid: _str.optional(),categoryId: _id.optional(),name: _name,slug: _slug,description: _description.optional(),active: _bool.optional(),notes: _str.array(),nums: _int.array(),url: _url.optional(),json: _json.optional(),email: _email,password: _password.optional(),price: _currency,cost: _currency,status: StatusSchema.optional(),statuses: StatusSchema.array()})

export const SampleTagCreateSchema = z.object({tagId: _id,sampleId: _id})

export const CategoryUpdateSchema = z.object({id: _id.optional(),parentId: _id.optional(),name: _name.optional(),description: _description.optional()})

export const TagUpdateSchema = z.object({id: _id.optional(),name: _name.optional()})

export const SampleUpdateSchema = z.object({id: _id.optional(),otherUuid: _str.optional(),createdAt: _date.optional(),updatedAt: _date.optional(),deletedAt: _date.optional(),categoryId: _id.optional(),name: _name.optional(),slug: _slug.optional(),description: _description.optional(),active: _bool.optional(),notes: _str.array().optional(),nums: _int.array().optional(),url: _url.optional(),json: _json.optional(),email: _email.optional(),password: _password.optional(),price: _currency.optional(),cost: _currency.optional(),status: StatusSchema.optional(),statuses: StatusSchema.array().optional()})

export const SampleTagUpdateSchema = z.object({id: _id.optional(),tagId: _id.optional(),sampleId: _id.optional()})

export type CategoryDistinct = z.infer<typeof CategoryDistinctSchema>;

export type TagDistinct = z.infer<typeof TagDistinctSchema>;

export type SampleDistinct = z.infer<typeof SampleDistinctSchema>;

export type SampleTagDistinct = z.infer<typeof SampleTagDistinctSchema>;

export type CategoryOwnWhere = z.infer<typeof CategoryOwnWhereSchema>;

export type TagOwnWhere = z.infer<typeof TagOwnWhereSchema>;

export type SampleOwnWhere = z.infer<typeof SampleOwnWhereSchema>;

export type SampleTagOwnWhere = z.infer<typeof SampleTagOwnWhereSchema>;

export type CategoryWhere = z.infer<typeof CategoryWhereSchema>;

export type TagWhere = z.infer<typeof TagWhereSchema>;

export type SampleWhere = z.infer<typeof SampleWhereSchema>;

export type SampleTagWhere = z.infer<typeof SampleTagWhereSchema>;

export type CategoryOwnOrderBy = z.infer<typeof CategoryOwnOrderBySchema>;

export type TagOwnOrderBy = z.infer<typeof TagOwnOrderBySchema>;

export type SampleOwnOrderBy = z.infer<typeof SampleOwnOrderBySchema>;

export type SampleTagOwnOrderBy = z.infer<typeof SampleTagOwnOrderBySchema>;

export type CategoryOrderBy = z.infer<typeof CategoryOrderBySchema>;

export type TagOrderBy = z.infer<typeof TagOrderBySchema>;

export type SampleOrderBy = z.infer<typeof SampleOrderBySchema>;

export type SampleTagOrderBy = z.infer<typeof SampleTagOrderBySchema>;

export type CategoryOwnSelect = z.infer<typeof CategoryOwnSelectSchema>;

export type TagOwnSelect = z.infer<typeof TagOwnSelectSchema>;

export type SampleOwnSelect = z.infer<typeof SampleOwnSelectSchema>;

export type SampleTagOwnSelect = z.infer<typeof SampleTagOwnSelectSchema>;

export type CategorySelect = z.infer<typeof CategorySelectSchema>;

export type TagSelect = z.infer<typeof TagSelectSchema>;

export type SampleSelect = z.infer<typeof SampleSelectSchema>;

export type SampleTagSelect = z.infer<typeof SampleTagSelectSchema>;

export type CategoryOmit = z.infer<typeof CategoryOmitSchema>;

export type TagOmit = z.infer<typeof TagOmitSchema>;

export type SampleOmit = z.infer<typeof SampleOmitSchema>;

export type SampleTagOmit = z.infer<typeof SampleTagOmitSchema>;

export type CategoryOwnQueryOne = z.infer<typeof CategoryOwnQueryOneSchema>;

export type TagOwnQueryOne = z.infer<typeof TagOwnQueryOneSchema>;

export type SampleOwnQueryOne = z.infer<typeof SampleOwnQueryOneSchema>;

export type SampleTagOwnQueryOne = z.infer<typeof SampleTagOwnQueryOneSchema>;

export type CategoryOwnQuery = z.infer<typeof CategoryOwnQuerySchema>;

export type TagOwnQuery = z.infer<typeof TagOwnQuerySchema>;

export type SampleOwnQuery = z.infer<typeof SampleOwnQuerySchema>;

export type SampleTagOwnQuery = z.infer<typeof SampleTagOwnQuerySchema>;

export type CategoryInclude = z.infer<typeof CategoryIncludeSchema>;

export type TagInclude = z.infer<typeof TagIncludeSchema>;

export type SampleInclude = z.infer<typeof SampleIncludeSchema>;

export type SampleTagInclude = z.infer<typeof SampleTagIncludeSchema>;

export type CategoryCompleteSelect = z.infer<typeof CategoryCompleteSelectSchema>;

export type TagCompleteSelect = z.infer<typeof TagCompleteSelectSchema>;

export type SampleCompleteSelect = z.infer<typeof SampleCompleteSelectSchema>;

export type SampleTagCompleteSelect = z.infer<typeof SampleTagCompleteSelectSchema>;

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

export type TagQuery = z.infer<typeof TagQuerySchema>;

export type SampleQuery = z.infer<typeof SampleQuerySchema>;

export type SampleTagQuery = z.infer<typeof SampleTagQuerySchema>;

export type CategoryCompleteQueryOne = z.infer<typeof CategoryCompleteQueryOneSchema>;

export type TagCompleteQueryOne = z.infer<typeof TagCompleteQueryOneSchema>;

export type SampleCompleteQueryOne = z.infer<typeof SampleCompleteQueryOneSchema>;

export type SampleTagCompleteQueryOne = z.infer<typeof SampleTagCompleteQueryOneSchema>;

export type CategoryCompleteQuery = z.infer<typeof CategoryCompleteQuerySchema>;

export type TagCompleteQuery = z.infer<typeof TagCompleteQuerySchema>;

export type SampleCompleteQuery = z.infer<typeof SampleCompleteQuerySchema>;

export type SampleTagCompleteQuery = z.infer<typeof SampleTagCompleteQuerySchema>;

export type CategoryProjection = z.infer<typeof CategoryProjectionSchema>;

export type TagProjection = z.infer<typeof TagProjectionSchema>;

export type SampleProjection = z.infer<typeof SampleProjectionSchema>;

export type SampleTagProjection = z.infer<typeof SampleTagProjectionSchema>;

export type CategoryOwnCreate = z.infer<typeof CategoryOwnCreateSchema>;

export type TagOwnCreate = z.infer<typeof TagOwnCreateSchema>;

export type SampleOwnCreate = z.infer<typeof SampleOwnCreateSchema>;

export type SampleTagOwnCreate = z.infer<typeof SampleTagOwnCreateSchema>;

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;

export type TagCreate = z.infer<typeof TagCreateSchema>;

export type SampleCreate = z.infer<typeof SampleCreateSchema>;

export type SampleTagCreate = z.infer<typeof SampleTagCreateSchema>;

export type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;

export type TagUpdate = z.infer<typeof TagUpdateSchema>;

export type SampleUpdate = z.infer<typeof SampleUpdateSchema>;

export type SampleTagUpdate = z.infer<typeof SampleTagUpdateSchema>;