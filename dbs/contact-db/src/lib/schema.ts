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

export const ContactTypeSchema = z.enum(["WORK", "HOME", "EMERGENCY"]);

export const __ContactTypeFilterSchema = z.object({
  equals: ContactTypeSchema.optional(),
  in: ContactTypeSchema.array().optional(),
  notIn: ContactTypeSchema.array().optional(),
});
export const ContactTypeFilterSchema = z.object({
  equals: ContactTypeSchema.optional(),
  in: ContactTypeSchema.array().optional(),
  notIn: ContactTypeSchema.array().optional(),
  not: ContactTypeSchema.or(__ContactTypeFilterSchema).optional(),
});

export const ContactTypeArrayFilterSchema = z.object({
  equals: ContactTypeSchema.array().optional(),
  has: ContactTypeSchema.optional(),
  hasEvery: ContactTypeSchema.array().optional(),
  hasSome: ContactTypeSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const GenderSchema = z.enum(["MALE", "FEMALE"]);

export const __GenderFilterSchema = z.object({
  equals: GenderSchema.optional(),
  in: GenderSchema.array().optional(),
  notIn: GenderSchema.array().optional(),
});
export const GenderFilterSchema = z.object({
  equals: GenderSchema.optional(),
  in: GenderSchema.array().optional(),
  notIn: GenderSchema.array().optional(),
  not: GenderSchema.or(__GenderFilterSchema).optional(),
});

export const GenderArrayFilterSchema = z.object({
  equals: GenderSchema.array().optional(),
  has: GenderSchema.optional(),
  hasEvery: GenderSchema.array().optional(),
  hasSome: GenderSchema.array().optional(),
  isEmpty: _bool.optional(),
});

export const IndustryDistinctSchema = z
  .enum(["id", "name", "slug", "description"])
  .array()
  .optional();

export const CompanyDistinctSchema = z
  .enum(["id", "uuid", "name", "slug"])
  .array()
  .optional();

export const CompanyIndustryDistinctSchema = z
  .enum(["id", "companyId", "industryId"])
  .array()
  .optional();

export const DepartmentDistinctSchema = z
  .enum(["id", "parentId", "name", "slug"])
  .array()
  .optional();

export const TitleDistinctSchema = z
  .enum(["id", "departmentId", "name", "slug", "description"])
  .array()
  .optional();

export const AgentDistinctSchema = z
  .enum([
    "id",
    "companyId",
    "titleId",
    "firstName",
    "middleName",
    "lastName",
    "preferedName",
    "gender",
    "slug",
    "note",
  ])
  .array()
  .optional();

export const ContactDistinctSchema = z
  .enum(["id", "uuid", "agentId", "type", "order"])
  .array()
  .optional();

export const StateDistinctSchema = z
  .enum(["id", "countryId", "state", "code"])
  .array()
  .optional();

export const CountryDistinctSchema = z
  .enum(["id", "name", "code"])
  .array()
  .optional();

export const CityDistinctSchema = z
  .enum(["id", "stateId", "name"])
  .array()
  .optional();

export const AddressDistinctSchema = z
  .enum(["id", "contactId", "cityId", "street", "zip", "order"])
  .array()
  .optional();

export const EmailDistinctSchema = z
  .enum(["id", "contactId", "email", "order"])
  .array()
  .optional();

export const PhoneDistinctSchema = z
  .enum(["id", "contactId", "phone", "order"])
  .array()
  .optional();

export const WebsiteDistinctSchema = z
  .enum(["id", "contactId", "url", "order"])
  .array()
  .optional();

export const IndustryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const CompanyOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
});

export const CompanyIndustryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  companyId: _intFilter.optional(),
  industryId: _intFilter.optional(),
});

export const DepartmentOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
});

export const TitleOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  departmentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
});

export const AgentOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  companyId: _intFilter.optional(),
  titleId: _intFilter.optional(),
  firstName: _strFilter.optional(),
  middleName: _strFilter.optional(),
  lastName: _strFilter.optional(),
  preferedName: _strFilter.optional(),
  gender: GenderFilterSchema.optional(),
  slug: _strFilter.optional(),
  note: _strFilter.optional(),
});

export const ContactOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  agentId: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  order: _intFilter.optional(),
});

export const StateOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  countryId: _intFilter.optional(),
  state: _strFilter.optional(),
  code: _strFilter.optional(),
});

export const CountryOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
});

export const CityOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  stateId: _intFilter.optional(),
  name: _strFilter.optional(),
});

export const AddressOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  cityId: _intFilter.optional(),
  street: _strFilter.optional(),
  zip: _strFilter.optional(),
  order: _intFilter.optional(),
});

export const EmailOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  email: _strFilter.optional(),
  order: _intFilter.optional(),
});

export const PhoneOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  phone: _strFilter.optional(),
  order: _intFilter.optional(),
});

export const WebsiteOwnWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  url: _strFilter.optional(),
  order: _intFilter.optional(),
});

export const IndustryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryOwnWhereSchema
);

export const CompanyOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyOwnWhereSchema
);

export const CompanyIndustryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryOwnWhereSchema
);

export const DepartmentOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnWhereSchema
);

export const TitleOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnWhereSchema
);

export const AgentOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentOwnWhereSchema
);

export const ContactOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnWhereSchema
);

export const StateOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnWhereSchema
);

export const CountryOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnWhereSchema
);

export const CityOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityOwnWhereSchema
);

export const AddressOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnWhereSchema
);

export const EmailOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnWhereSchema
);

export const PhoneOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnWhereSchema
);

export const WebsiteOwnWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteOwnWhereSchema
);

export const IndustryWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  companies: z
    .object({
      every: CompanyIndustryOwnWhereSchema.optional(),
      some: CompanyIndustryOwnWhereSchema.optional(),
      none: CompanyIndustryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const CompanyWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  agents: z
    .object({
      every: AgentOwnWhereSchema.optional(),
      some: AgentOwnWhereSchema.optional(),
      none: AgentOwnWhereSchema.optional(),
    })
    .optional(),
  industries: z
    .object({
      every: CompanyIndustryOwnWhereSchema.optional(),
      some: CompanyIndustryOwnWhereSchema.optional(),
      none: CompanyIndustryOwnWhereSchema.optional(),
    })
    .optional(),
});

export const CompanyIndustryWhereSchema = z.object({
  id: _intFilter.optional(),
  companyId: _intFilter.optional(),
  industryId: _intFilter.optional(),
  industry: IndustryOwnWhereSchema.optional(),
  company: CompanyOwnWhereSchema.optional(),
});

export const DepartmentWhereSchema = z.object({
  id: _intFilter.optional(),
  parentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  parent: DepartmentOwnWhereSchema.optional(),
  children: z
    .object({
      every: DepartmentOwnWhereSchema.optional(),
      some: DepartmentOwnWhereSchema.optional(),
      none: DepartmentOwnWhereSchema.optional(),
    })
    .optional(),
  titles: z
    .object({
      every: TitleOwnWhereSchema.optional(),
      some: TitleOwnWhereSchema.optional(),
      none: TitleOwnWhereSchema.optional(),
    })
    .optional(),
});

export const TitleWhereSchema = z.object({
  id: _intFilter.optional(),
  departmentId: _intFilter.optional(),
  name: _strFilter.optional(),
  slug: _strFilter.optional(),
  description: _strFilter.optional(),
  agents: z
    .object({
      every: AgentOwnWhereSchema.optional(),
      some: AgentOwnWhereSchema.optional(),
      none: AgentOwnWhereSchema.optional(),
    })
    .optional(),
  department: DepartmentOwnWhereSchema.optional(),
});

export const AgentWhereSchema = z.object({
  id: _intFilter.optional(),
  companyId: _intFilter.optional(),
  titleId: _intFilter.optional(),
  firstName: _strFilter.optional(),
  middleName: _strFilter.optional(),
  lastName: _strFilter.optional(),
  preferedName: _strFilter.optional(),
  gender: GenderFilterSchema.optional(),
  slug: _strFilter.optional(),
  note: _strFilter.optional(),
  company: CompanyOwnWhereSchema.optional(),
  contacts: z
    .object({
      every: ContactOwnWhereSchema.optional(),
      some: ContactOwnWhereSchema.optional(),
      none: ContactOwnWhereSchema.optional(),
    })
    .optional(),
  title: TitleOwnWhereSchema.optional(),
});

export const ContactWhereSchema = z.object({
  id: _intFilter.optional(),
  uuid: _strFilter.optional(),
  agentId: _intFilter.optional(),
  type: ContactTypeFilterSchema.optional(),
  order: _intFilter.optional(),
  emails: z
    .object({
      every: EmailOwnWhereSchema.optional(),
      some: EmailOwnWhereSchema.optional(),
      none: EmailOwnWhereSchema.optional(),
    })
    .optional(),
  phones: z
    .object({
      every: PhoneOwnWhereSchema.optional(),
      some: PhoneOwnWhereSchema.optional(),
      none: PhoneOwnWhereSchema.optional(),
    })
    .optional(),
  addresses: z
    .object({
      every: AddressOwnWhereSchema.optional(),
      some: AddressOwnWhereSchema.optional(),
      none: AddressOwnWhereSchema.optional(),
    })
    .optional(),
  websites: z
    .object({
      every: WebsiteOwnWhereSchema.optional(),
      some: WebsiteOwnWhereSchema.optional(),
      none: WebsiteOwnWhereSchema.optional(),
    })
    .optional(),
  agent: AgentOwnWhereSchema.optional(),
});

export const StateWhereSchema = z.object({
  id: _intFilter.optional(),
  countryId: _intFilter.optional(),
  state: _strFilter.optional(),
  code: _strFilter.optional(),
  country: CountryOwnWhereSchema.optional(),
  cities: z
    .object({
      every: CityOwnWhereSchema.optional(),
      some: CityOwnWhereSchema.optional(),
      none: CityOwnWhereSchema.optional(),
    })
    .optional(),
});

export const CountryWhereSchema = z.object({
  id: _intFilter.optional(),
  name: _strFilter.optional(),
  code: _strFilter.optional(),
  states: z
    .object({
      every: StateOwnWhereSchema.optional(),
      some: StateOwnWhereSchema.optional(),
      none: StateOwnWhereSchema.optional(),
    })
    .optional(),
});

export const CityWhereSchema = z.object({
  id: _intFilter.optional(),
  stateId: _intFilter.optional(),
  name: _strFilter.optional(),
  state: StateOwnWhereSchema.optional(),
  addresses: z
    .object({
      every: AddressOwnWhereSchema.optional(),
      some: AddressOwnWhereSchema.optional(),
      none: AddressOwnWhereSchema.optional(),
    })
    .optional(),
});

export const AddressWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  cityId: _intFilter.optional(),
  street: _strFilter.optional(),
  zip: _strFilter.optional(),
  order: _intFilter.optional(),
  city: CityOwnWhereSchema.optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const EmailWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  email: _strFilter.optional(),
  order: _intFilter.optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const PhoneWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  phone: _strFilter.optional(),
  order: _intFilter.optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const WebsiteWhereSchema = z.object({
  id: _intFilter.optional(),
  contactId: _intFilter.optional(),
  url: _strFilter.optional(),
  order: _intFilter.optional(),
  contact: ContactOwnWhereSchema.optional(),
});

export const IndustryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryWhereSchema
);

export const CompanyWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyWhereSchema
);

export const CompanyIndustryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryWhereSchema
);

export const DepartmentWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentWhereSchema
);

export const TitleWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleWhereSchema
);

export const AgentWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentWhereSchema
);

export const ContactWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactWhereSchema
);

export const StateWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateWhereSchema
);

export const CountryWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryWhereSchema
);

export const CityWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityWhereSchema
);

export const AddressWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressWhereSchema
);

export const EmailWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailWhereSchema
);

export const PhoneWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneWhereSchema
);

export const WebsiteWhereSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteWhereSchema
);

export const IndustryOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
});

export const CompanyOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  name: _direction,
  slug: _direction,
});

export const CompanyIndustryOwnOrderBySchema = z.object({
  id: _direction,
  companyId: _direction,
  industryId: _direction,
});

export const DepartmentOwnOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  slug: _direction,
});

export const TitleOwnOrderBySchema = z.object({
  id: _direction,
  departmentId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
});

export const AgentOwnOrderBySchema = z.object({
  id: _direction,
  companyId: _direction,
  titleId: _direction,
  firstName: _direction,
  middleName: _direction,
  lastName: _direction,
  preferedName: _direction,
  gender: _direction,
  slug: _direction,
  note: _direction,
});

export const ContactOwnOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  agentId: _direction,
  type: _direction,
  order: _direction,
});

export const StateOwnOrderBySchema = z.object({
  id: _direction,
  countryId: _direction,
  state: _direction,
  code: _direction,
});

export const CountryOwnOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
});

export const CityOwnOrderBySchema = z.object({
  id: _direction,
  stateId: _direction,
  name: _direction,
});

export const AddressOwnOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  cityId: _direction,
  street: _direction,
  zip: _direction,
  order: _direction,
});

export const EmailOwnOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  email: _direction,
  order: _direction,
});

export const PhoneOwnOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  phone: _direction,
  order: _direction,
});

export const WebsiteOwnOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  url: _direction,
  order: _direction,
});

export const IndustryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryOwnOrderBySchema
);

export const CompanyOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyOwnOrderBySchema
);

export const CompanyIndustryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryOwnOrderBySchema
);

export const DepartmentOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnOrderBySchema
);

export const TitleOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnOrderBySchema
);

export const AgentOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentOwnOrderBySchema
);

export const ContactOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnOrderBySchema
);

export const StateOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnOrderBySchema
);

export const CountryOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnOrderBySchema
);

export const CityOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityOwnOrderBySchema
);

export const AddressOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnOrderBySchema
);

export const EmailOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnOrderBySchema
);

export const PhoneOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnOrderBySchema
);

export const WebsiteOwnOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteOwnOrderBySchema
);

export const IndustryOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  companies: _orderByCount,
});

export const CompanyOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  name: _direction,
  slug: _direction,
  agents: _orderByCount,
  industries: _orderByCount,
});

export const CompanyIndustryOrderBySchema = z.object({
  id: _direction,
  companyId: _direction,
  industryId: _direction,
  industry: IndustryOwnOrderBySchema.optional(),
  company: CompanyOwnOrderBySchema.optional(),
});

export const DepartmentOrderBySchema = z.object({
  id: _direction,
  parentId: _direction,
  name: _direction,
  slug: _direction,
  parent: DepartmentOwnOrderBySchema.optional(),
  children: _orderByCount,
  titles: _orderByCount,
});

export const TitleOrderBySchema = z.object({
  id: _direction,
  departmentId: _direction,
  name: _direction,
  slug: _direction,
  description: _direction,
  agents: _orderByCount,
  department: DepartmentOwnOrderBySchema.optional(),
});

export const AgentOrderBySchema = z.object({
  id: _direction,
  companyId: _direction,
  titleId: _direction,
  firstName: _direction,
  middleName: _direction,
  lastName: _direction,
  preferedName: _direction,
  gender: _direction,
  slug: _direction,
  note: _direction,
  company: CompanyOwnOrderBySchema.optional(),
  contacts: _orderByCount,
  title: TitleOwnOrderBySchema.optional(),
});

export const ContactOrderBySchema = z.object({
  id: _direction,
  uuid: _direction,
  agentId: _direction,
  type: _direction,
  order: _direction,
  emails: _orderByCount,
  phones: _orderByCount,
  addresses: _orderByCount,
  websites: _orderByCount,
  agent: AgentOwnOrderBySchema.optional(),
});

export const StateOrderBySchema = z.object({
  id: _direction,
  countryId: _direction,
  state: _direction,
  code: _direction,
  country: CountryOwnOrderBySchema.optional(),
  cities: _orderByCount,
});

export const CountryOrderBySchema = z.object({
  id: _direction,
  name: _direction,
  code: _direction,
  states: _orderByCount,
});

export const CityOrderBySchema = z.object({
  id: _direction,
  stateId: _direction,
  name: _direction,
  state: StateOwnOrderBySchema.optional(),
  addresses: _orderByCount,
});

export const AddressOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  cityId: _direction,
  street: _direction,
  zip: _direction,
  order: _direction,
  city: CityOwnOrderBySchema.optional(),
  contact: ContactOwnOrderBySchema.optional(),
});

export const EmailOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  email: _direction,
  order: _direction,
  contact: ContactOwnOrderBySchema.optional(),
});

export const PhoneOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  phone: _direction,
  order: _direction,
  contact: ContactOwnOrderBySchema.optional(),
});

export const WebsiteOrderBySchema = z.object({
  id: _direction,
  contactId: _direction,
  url: _direction,
  order: _direction,
  contact: ContactOwnOrderBySchema.optional(),
});

export const IndustryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryOrderBySchema
);

export const CompanyOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyOrderBySchema
);

export const CompanyIndustryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryOrderBySchema
);

export const DepartmentOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOrderBySchema
);

export const TitleOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOrderBySchema
);

export const AgentOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentOrderBySchema
);

export const ContactOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOrderBySchema
);

export const StateOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOrderBySchema
);

export const CountryOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOrderBySchema
);

export const CityOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityOrderBySchema
);

export const AddressOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOrderBySchema
);

export const EmailOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOrderBySchema
);

export const PhoneOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOrderBySchema
);

export const WebsiteOrderBySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteOrderBySchema
);

export const IndustryOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const CompanyOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  name: _select,
  slug: _select,
});

export const CompanyIndustryOwnSelectSchema = z.object({
  id: _select,
  companyId: _select,
  industryId: _select,
});

export const DepartmentOwnSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
});

export const TitleOwnSelectSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const AgentOwnSelectSchema = z.object({
  id: _select,
  companyId: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  gender: _select,
  slug: _select,
  note: _select,
});

export const ContactOwnSelectSchema = z.object({
  id: _select,
  uuid: _select,
  agentId: _select,
  type: _select,
  order: _select,
});

export const StateOwnSelectSchema = z.object({
  id: _select,
  countryId: _select,
  state: _select,
  code: _select,
});

export const CountryOwnSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
});

export const CityOwnSelectSchema = z.object({
  id: _select,
  stateId: _select,
  name: _select,
});

export const AddressOwnSelectSchema = z.object({
  id: _select,
  contactId: _select,
  cityId: _select,
  street: _select,
  zip: _select,
  order: _select,
});

export const EmailOwnSelectSchema = z.object({
  id: _select,
  contactId: _select,
  email: _select,
  order: _select,
});

export const PhoneOwnSelectSchema = z.object({
  id: _select,
  contactId: _select,
  phone: _select,
  order: _select,
});

export const WebsiteOwnSelectSchema = z.object({
  id: _select,
  contactId: _select,
  url: _select,
  order: _select,
});

export const IndustryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryOwnSelectSchema
);

export const CompanyOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyOwnSelectSchema
);

export const CompanyIndustryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryOwnSelectSchema
);

export const DepartmentOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnSelectSchema
);

export const TitleOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnSelectSchema
);

export const AgentOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentOwnSelectSchema
);

export const ContactOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnSelectSchema
);

export const StateOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnSelectSchema
);

export const CountryOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnSelectSchema
);

export const CityOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityOwnSelectSchema
);

export const AddressOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnSelectSchema
);

export const EmailOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnSelectSchema
);

export const PhoneOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnSelectSchema
);

export const WebsiteOwnSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteOwnSelectSchema
);

export const IndustrySelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
  companies: _select,
});

export const CompanySelectSchema = z.object({
  id: _select,
  uuid: _select,
  name: _select,
  slug: _select,
  agents: _select,
  industries: _select,
});

export const CompanyIndustrySelectSchema = z.object({
  id: _select,
  companyId: _select,
  industryId: _select,
  industry: _select,
  company: _select,
});

export const DepartmentSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  parent: _select,
  children: _select,
  titles: _select,
});

export const TitleSelectSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  agents: _select,
  department: _select,
});

export const AgentSelectSchema = z.object({
  id: _select,
  companyId: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  gender: _select,
  slug: _select,
  note: _select,
  company: _select,
  contacts: _select,
  title: _select,
});

export const ContactSelectSchema = z.object({
  id: _select,
  uuid: _select,
  agentId: _select,
  type: _select,
  order: _select,
  emails: _select,
  phones: _select,
  addresses: _select,
  websites: _select,
  agent: _select,
});

export const StateSelectSchema = z.object({
  id: _select,
  countryId: _select,
  state: _select,
  code: _select,
  country: _select,
  cities: _select,
});

export const CountrySelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  states: _select,
});

export const CitySelectSchema = z.object({
  id: _select,
  stateId: _select,
  name: _select,
  state: _select,
  addresses: _select,
});

export const AddressSelectSchema = z.object({
  id: _select,
  contactId: _select,
  cityId: _select,
  street: _select,
  zip: _select,
  order: _select,
  city: _select,
  contact: _select,
});

export const EmailSelectSchema = z.object({
  id: _select,
  contactId: _select,
  email: _select,
  order: _select,
  contact: _select,
});

export const PhoneSelectSchema = z.object({
  id: _select,
  contactId: _select,
  phone: _select,
  order: _select,
  contact: _select,
});

export const WebsiteSelectSchema = z.object({
  id: _select,
  contactId: _select,
  url: _select,
  order: _select,
  contact: _select,
});

export const IndustrySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustrySelectSchema
);

export const CompanySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanySelectSchema
);

export const CompanyIndustrySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustrySelectSchema
);

export const DepartmentSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentSelectSchema
);

export const TitleSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleSelectSchema
);

export const AgentSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentSelectSchema
);

export const ContactSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactSelectSchema
);

export const StateSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateSelectSchema
);

export const CountrySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountrySelectSchema
);

export const CitySelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CitySelectSchema
);

export const AddressSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressSelectSchema
);

export const EmailSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailSelectSchema
);

export const PhoneSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneSelectSchema
);

export const WebsiteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteSelectSchema
);

export const IndustryOmitSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const CompanyOmitSchema = z.object({
  id: _select,
  uuid: _select,
  name: _select,
  slug: _select,
});

export const CompanyIndustryOmitSchema = z.object({
  id: _select,
  companyId: _select,
  industryId: _select,
});

export const DepartmentOmitSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
});

export const TitleOmitSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
});

export const AgentOmitSchema = z.object({
  id: _select,
  companyId: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  gender: _select,
  slug: _select,
  note: _select,
});

export const ContactOmitSchema = z.object({
  id: _select,
  uuid: _select,
  agentId: _select,
  type: _select,
  order: _select,
});

export const StateOmitSchema = z.object({
  id: _select,
  countryId: _select,
  state: _select,
  code: _select,
});

export const CountryOmitSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
});

export const CityOmitSchema = z.object({
  id: _select,
  stateId: _select,
  name: _select,
});

export const AddressOmitSchema = z.object({
  id: _select,
  contactId: _select,
  cityId: _select,
  street: _select,
  zip: _select,
  order: _select,
});

export const EmailOmitSchema = z.object({
  id: _select,
  contactId: _select,
  email: _select,
  order: _select,
});

export const PhoneOmitSchema = z.object({
  id: _select,
  contactId: _select,
  phone: _select,
  order: _select,
});

export const WebsiteOmitSchema = z.object({
  id: _select,
  contactId: _select,
  url: _select,
  order: _select,
});

export const IndustryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryOmitSchema
);

export const CompanyOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyOmitSchema
);

export const CompanyIndustryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryOmitSchema
);

export const DepartmentOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOmitSchema
);

export const TitleOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOmitSchema
);

export const AgentOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentOmitSchema
);

export const ContactOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOmitSchema
);

export const StateOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOmitSchema
);

export const CountryOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOmitSchema
);

export const CityOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityOmitSchema
);

export const AddressOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOmitSchema
);

export const EmailOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOmitSchema
);

export const PhoneOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOmitSchema
);

export const WebsiteOmitSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteOmitSchema
);

export const IndustryOwnQueryOneSchema = z.object({
  select: IndustryOwnSelectSchemaJson.optional(),
  omit: IndustryOmitSchemaJson.optional(),
  where: IndustryOwnWhereSchemaJson.optional(),
});

export const CompanyOwnQueryOneSchema = z.object({
  select: CompanyOwnSelectSchemaJson.optional(),
  omit: CompanyOmitSchemaJson.optional(),
  where: CompanyOwnWhereSchemaJson.optional(),
});

export const CompanyIndustryOwnQueryOneSchema = z.object({
  select: CompanyIndustryOwnSelectSchemaJson.optional(),
  omit: CompanyIndustryOmitSchemaJson.optional(),
  where: CompanyIndustryOwnWhereSchemaJson.optional(),
});

export const DepartmentOwnQueryOneSchema = z.object({
  select: DepartmentOwnSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  where: DepartmentOwnWhereSchemaJson.optional(),
});

export const TitleOwnQueryOneSchema = z.object({
  select: TitleOwnSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  where: TitleOwnWhereSchemaJson.optional(),
});

export const AgentOwnQueryOneSchema = z.object({
  select: AgentOwnSelectSchemaJson.optional(),
  omit: AgentOmitSchemaJson.optional(),
  where: AgentOwnWhereSchemaJson.optional(),
});

export const ContactOwnQueryOneSchema = z.object({
  select: ContactOwnSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  where: ContactOwnWhereSchemaJson.optional(),
});

export const StateOwnQueryOneSchema = z.object({
  select: StateOwnSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  where: StateOwnWhereSchemaJson.optional(),
});

export const CountryOwnQueryOneSchema = z.object({
  select: CountryOwnSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  where: CountryOwnWhereSchemaJson.optional(),
});

export const CityOwnQueryOneSchema = z.object({
  select: CityOwnSelectSchemaJson.optional(),
  omit: CityOmitSchemaJson.optional(),
  where: CityOwnWhereSchemaJson.optional(),
});

export const AddressOwnQueryOneSchema = z.object({
  select: AddressOwnSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  where: AddressOwnWhereSchemaJson.optional(),
});

export const EmailOwnQueryOneSchema = z.object({
  select: EmailOwnSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  where: EmailOwnWhereSchemaJson.optional(),
});

export const PhoneOwnQueryOneSchema = z.object({
  select: PhoneOwnSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  where: PhoneOwnWhereSchemaJson.optional(),
});

export const WebsiteOwnQueryOneSchema = z.object({
  select: WebsiteOwnSelectSchemaJson.optional(),
  omit: WebsiteOmitSchemaJson.optional(),
  where: WebsiteOwnWhereSchemaJson.optional(),
});

export const IndustryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryOwnQueryOneSchema
);

export const CompanyOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyOwnQueryOneSchema
);

export const CompanyIndustryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryOwnQueryOneSchema
);

export const DepartmentOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnQueryOneSchema
);

export const TitleOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnQueryOneSchema
);

export const AgentOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentOwnQueryOneSchema
);

export const ContactOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnQueryOneSchema
);

export const StateOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnQueryOneSchema
);

export const CountryOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnQueryOneSchema
);

export const CityOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityOwnQueryOneSchema
);

export const AddressOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnQueryOneSchema
);

export const EmailOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnQueryOneSchema
);

export const PhoneOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnQueryOneSchema
);

export const WebsiteOwnQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteOwnQueryOneSchema
);

export const IndustryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: IndustryDistinctSchema.optional(),
  select: IndustryOwnSelectSchemaJson.optional(),
  omit: IndustryOmitSchemaJson.optional(),
  where: IndustryOwnWhereSchemaJson.optional(),
  orderBy: IndustryOwnOrderBySchemaJson.optional(),
});

export const CompanyOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CompanyDistinctSchema.optional(),
  select: CompanyOwnSelectSchemaJson.optional(),
  omit: CompanyOmitSchemaJson.optional(),
  where: CompanyOwnWhereSchemaJson.optional(),
  orderBy: CompanyOwnOrderBySchemaJson.optional(),
});

export const CompanyIndustryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CompanyIndustryDistinctSchema.optional(),
  select: CompanyIndustryOwnSelectSchemaJson.optional(),
  omit: CompanyIndustryOmitSchemaJson.optional(),
  where: CompanyIndustryOwnWhereSchemaJson.optional(),
  orderBy: CompanyIndustryOwnOrderBySchemaJson.optional(),
});

export const DepartmentOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DepartmentDistinctSchema.optional(),
  select: DepartmentOwnSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  where: DepartmentOwnWhereSchemaJson.optional(),
  orderBy: DepartmentOwnOrderBySchemaJson.optional(),
});

export const TitleOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleDistinctSchema.optional(),
  select: TitleOwnSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  where: TitleOwnWhereSchemaJson.optional(),
  orderBy: TitleOwnOrderBySchemaJson.optional(),
});

export const AgentOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AgentDistinctSchema.optional(),
  select: AgentOwnSelectSchemaJson.optional(),
  omit: AgentOmitSchemaJson.optional(),
  where: AgentOwnWhereSchemaJson.optional(),
  orderBy: AgentOwnOrderBySchemaJson.optional(),
});

export const ContactOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ContactDistinctSchema.optional(),
  select: ContactOwnSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  where: ContactOwnWhereSchemaJson.optional(),
  orderBy: ContactOwnOrderBySchemaJson.optional(),
});

export const StateOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateDistinctSchema.optional(),
  select: StateOwnSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  where: StateOwnWhereSchemaJson.optional(),
  orderBy: StateOwnOrderBySchemaJson.optional(),
});

export const CountryOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CountryDistinctSchema.optional(),
  select: CountryOwnSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  where: CountryOwnWhereSchemaJson.optional(),
  orderBy: CountryOwnOrderBySchemaJson.optional(),
});

export const CityOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CityDistinctSchema.optional(),
  select: CityOwnSelectSchemaJson.optional(),
  omit: CityOmitSchemaJson.optional(),
  where: CityOwnWhereSchemaJson.optional(),
  orderBy: CityOwnOrderBySchemaJson.optional(),
});

export const AddressOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AddressDistinctSchema.optional(),
  select: AddressOwnSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  where: AddressOwnWhereSchemaJson.optional(),
  orderBy: AddressOwnOrderBySchemaJson.optional(),
});

export const EmailOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmailDistinctSchema.optional(),
  select: EmailOwnSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  where: EmailOwnWhereSchemaJson.optional(),
  orderBy: EmailOwnOrderBySchemaJson.optional(),
});

export const PhoneOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PhoneDistinctSchema.optional(),
  select: PhoneOwnSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  where: PhoneOwnWhereSchemaJson.optional(),
  orderBy: PhoneOwnOrderBySchemaJson.optional(),
});

export const WebsiteOwnQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: WebsiteDistinctSchema.optional(),
  select: WebsiteOwnSelectSchemaJson.optional(),
  omit: WebsiteOmitSchemaJson.optional(),
  where: WebsiteOwnWhereSchemaJson.optional(),
  orderBy: WebsiteOwnOrderBySchemaJson.optional(),
});

export const IndustryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryOwnQuerySchema
);

export const CompanyOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyOwnQuerySchema
);

export const CompanyIndustryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryOwnQuerySchema
);

export const DepartmentOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentOwnQuerySchema
);

export const TitleOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleOwnQuerySchema
);

export const AgentOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentOwnQuerySchema
);

export const ContactOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactOwnQuerySchema
);

export const StateOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateOwnQuerySchema
);

export const CountryOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryOwnQuerySchema
);

export const CityOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityOwnQuerySchema
);

export const AddressOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressOwnQuerySchema
);

export const EmailOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailOwnQuerySchema
);

export const PhoneOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneOwnQuerySchema
);

export const WebsiteOwnQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteOwnQuerySchema
);

export const IndustryIncludeSchema = z.object({
  companies: _select.or(CompanyIndustryOwnQueryOneSchema).optional(),
});

export const CompanyIncludeSchema = z.object({
  agents: _select.or(AgentOwnQueryOneSchema).optional(),
  industries: _select.or(CompanyIndustryOwnQueryOneSchema).optional(),
});

export const CompanyIndustryIncludeSchema = z.object({
  industry: _select.or(IndustryOwnQueryOneSchema).optional(),
  company: _select.or(CompanyOwnQueryOneSchema).optional(),
});

export const DepartmentIncludeSchema = z.object({
  parent: _select.or(DepartmentOwnQueryOneSchema).optional(),
  children: _select.or(DepartmentOwnQueryOneSchema).optional(),
  titles: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const TitleIncludeSchema = z.object({
  agents: _select.or(AgentOwnQueryOneSchema).optional(),
  department: _select.or(DepartmentOwnQueryOneSchema).optional(),
});

export const AgentIncludeSchema = z.object({
  company: _select.or(CompanyOwnQueryOneSchema).optional(),
  contacts: _select.or(ContactOwnQueryOneSchema).optional(),
  title: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const ContactIncludeSchema = z.object({
  emails: _select.or(EmailOwnQueryOneSchema).optional(),
  phones: _select.or(PhoneOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
  websites: _select.or(WebsiteOwnQueryOneSchema).optional(),
  agent: _select.or(AgentOwnQueryOneSchema).optional(),
});

export const StateIncludeSchema = z.object({
  country: _select.or(CountryOwnQueryOneSchema).optional(),
  cities: _select.or(CityOwnQueryOneSchema).optional(),
});

export const CountryIncludeSchema = z.object({
  states: _select.or(StateOwnQueryOneSchema).optional(),
});

export const CityIncludeSchema = z.object({
  state: _select.or(StateOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
});

export const AddressIncludeSchema = z.object({
  city: _select.or(CityOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const EmailIncludeSchema = z.object({
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const PhoneIncludeSchema = z.object({
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const WebsiteIncludeSchema = z.object({
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const IndustryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryIncludeSchema
);

export const CompanyIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIncludeSchema
);

export const CompanyIndustryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryIncludeSchema
);

export const DepartmentIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentIncludeSchema
);

export const TitleIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleIncludeSchema
);

export const AgentIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentIncludeSchema
);

export const ContactIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactIncludeSchema
);

export const StateIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateIncludeSchema
);

export const CountryIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryIncludeSchema
);

export const CityIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityIncludeSchema
);

export const AddressIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressIncludeSchema
);

export const EmailIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailIncludeSchema
);

export const PhoneIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneIncludeSchema
);

export const WebsiteIncludeSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteIncludeSchema
);

export const IndustryCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  slug: _select,
  description: _select,
  companies: _select.or(CompanyIndustryOwnQueryOneSchema).optional(),
});

export const CompanyCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  name: _select,
  slug: _select,
  agents: _select.or(AgentOwnQueryOneSchema).optional(),
  industries: _select.or(CompanyIndustryOwnQueryOneSchema).optional(),
});

export const CompanyIndustryCompleteSelectSchema = z.object({
  id: _select,
  companyId: _select,
  industryId: _select,
  industry: _select.or(IndustryOwnQueryOneSchema).optional(),
  company: _select.or(CompanyOwnQueryOneSchema).optional(),
});

export const DepartmentCompleteSelectSchema = z.object({
  id: _select,
  parentId: _select,
  name: _select,
  slug: _select,
  parent: _select.or(DepartmentOwnQueryOneSchema).optional(),
  children: _select.or(DepartmentOwnQueryOneSchema).optional(),
  titles: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const TitleCompleteSelectSchema = z.object({
  id: _select,
  departmentId: _select,
  name: _select,
  slug: _select,
  description: _select,
  agents: _select.or(AgentOwnQueryOneSchema).optional(),
  department: _select.or(DepartmentOwnQueryOneSchema).optional(),
});

export const AgentCompleteSelectSchema = z.object({
  id: _select,
  companyId: _select,
  titleId: _select,
  firstName: _select,
  middleName: _select,
  lastName: _select,
  preferedName: _select,
  gender: _select,
  slug: _select,
  note: _select,
  company: _select.or(CompanyOwnQueryOneSchema).optional(),
  contacts: _select.or(ContactOwnQueryOneSchema).optional(),
  title: _select.or(TitleOwnQueryOneSchema).optional(),
});

export const ContactCompleteSelectSchema = z.object({
  id: _select,
  uuid: _select,
  agentId: _select,
  type: _select,
  order: _select,
  emails: _select.or(EmailOwnQueryOneSchema).optional(),
  phones: _select.or(PhoneOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
  websites: _select.or(WebsiteOwnQueryOneSchema).optional(),
  agent: _select.or(AgentOwnQueryOneSchema).optional(),
});

export const StateCompleteSelectSchema = z.object({
  id: _select,
  countryId: _select,
  state: _select,
  code: _select,
  country: _select.or(CountryOwnQueryOneSchema).optional(),
  cities: _select.or(CityOwnQueryOneSchema).optional(),
});

export const CountryCompleteSelectSchema = z.object({
  id: _select,
  name: _select,
  code: _select,
  states: _select.or(StateOwnQueryOneSchema).optional(),
});

export const CityCompleteSelectSchema = z.object({
  id: _select,
  stateId: _select,
  name: _select,
  state: _select.or(StateOwnQueryOneSchema).optional(),
  addresses: _select.or(AddressOwnQueryOneSchema).optional(),
});

export const AddressCompleteSelectSchema = z.object({
  id: _select,
  contactId: _select,
  cityId: _select,
  street: _select,
  zip: _select,
  order: _select,
  city: _select.or(CityOwnQueryOneSchema).optional(),
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const EmailCompleteSelectSchema = z.object({
  id: _select,
  contactId: _select,
  email: _select,
  order: _select,
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const PhoneCompleteSelectSchema = z.object({
  id: _select,
  contactId: _select,
  phone: _select,
  order: _select,
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const WebsiteCompleteSelectSchema = z.object({
  id: _select,
  contactId: _select,
  url: _select,
  order: _select,
  contact: _select.or(ContactOwnQueryOneSchema).optional(),
});

export const IndustryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryCompleteSelectSchema
);

export const CompanyCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyCompleteSelectSchema
);

export const CompanyIndustryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryCompleteSelectSchema
);

export const DepartmentCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentCompleteSelectSchema
);

export const TitleCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleCompleteSelectSchema
);

export const AgentCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentCompleteSelectSchema
);

export const ContactCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactCompleteSelectSchema
);

export const StateCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateCompleteSelectSchema
);

export const CountryCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryCompleteSelectSchema
);

export const CityCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityCompleteSelectSchema
);

export const AddressCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressCompleteSelectSchema
);

export const EmailCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailCompleteSelectSchema
);

export const PhoneCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneCompleteSelectSchema
);

export const WebsiteCompleteSelectSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteCompleteSelectSchema
);

export const IndustryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: IndustryDistinctSchema.optional(),
  select: IndustryOwnSelectSchemaJson.optional(),
  omit: IndustryOmitSchemaJson.optional(),
  include: IndustryIncludeSchemaJson.optional(),
  where: IndustryOwnWhereSchemaJson.optional(),
  orderBy: IndustryOwnOrderBySchemaJson.optional(),
});

export const CompanyQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CompanyDistinctSchema.optional(),
  select: CompanyOwnSelectSchemaJson.optional(),
  omit: CompanyOmitSchemaJson.optional(),
  include: CompanyIncludeSchemaJson.optional(),
  where: CompanyOwnWhereSchemaJson.optional(),
  orderBy: CompanyOwnOrderBySchemaJson.optional(),
});

export const CompanyIndustryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CompanyIndustryDistinctSchema.optional(),
  select: CompanyIndustryOwnSelectSchemaJson.optional(),
  omit: CompanyIndustryOmitSchemaJson.optional(),
  include: CompanyIndustryIncludeSchemaJson.optional(),
  where: CompanyIndustryOwnWhereSchemaJson.optional(),
  orderBy: CompanyIndustryOwnOrderBySchemaJson.optional(),
});

export const DepartmentQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DepartmentDistinctSchema.optional(),
  select: DepartmentOwnSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  include: DepartmentIncludeSchemaJson.optional(),
  where: DepartmentOwnWhereSchemaJson.optional(),
  orderBy: DepartmentOwnOrderBySchemaJson.optional(),
});

export const TitleQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleDistinctSchema.optional(),
  select: TitleOwnSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  include: TitleIncludeSchemaJson.optional(),
  where: TitleOwnWhereSchemaJson.optional(),
  orderBy: TitleOwnOrderBySchemaJson.optional(),
});

export const AgentQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AgentDistinctSchema.optional(),
  select: AgentOwnSelectSchemaJson.optional(),
  omit: AgentOmitSchemaJson.optional(),
  include: AgentIncludeSchemaJson.optional(),
  where: AgentOwnWhereSchemaJson.optional(),
  orderBy: AgentOwnOrderBySchemaJson.optional(),
});

export const ContactQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ContactDistinctSchema.optional(),
  select: ContactOwnSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  include: ContactIncludeSchemaJson.optional(),
  where: ContactOwnWhereSchemaJson.optional(),
  orderBy: ContactOwnOrderBySchemaJson.optional(),
});

export const StateQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateDistinctSchema.optional(),
  select: StateOwnSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  include: StateIncludeSchemaJson.optional(),
  where: StateOwnWhereSchemaJson.optional(),
  orderBy: StateOwnOrderBySchemaJson.optional(),
});

export const CountryQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CountryDistinctSchema.optional(),
  select: CountryOwnSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  include: CountryIncludeSchemaJson.optional(),
  where: CountryOwnWhereSchemaJson.optional(),
  orderBy: CountryOwnOrderBySchemaJson.optional(),
});

export const CityQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CityDistinctSchema.optional(),
  select: CityOwnSelectSchemaJson.optional(),
  omit: CityOmitSchemaJson.optional(),
  include: CityIncludeSchemaJson.optional(),
  where: CityOwnWhereSchemaJson.optional(),
  orderBy: CityOwnOrderBySchemaJson.optional(),
});

export const AddressQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AddressDistinctSchema.optional(),
  select: AddressOwnSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  include: AddressIncludeSchemaJson.optional(),
  where: AddressOwnWhereSchemaJson.optional(),
  orderBy: AddressOwnOrderBySchemaJson.optional(),
});

export const EmailQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmailDistinctSchema.optional(),
  select: EmailOwnSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  include: EmailIncludeSchemaJson.optional(),
  where: EmailOwnWhereSchemaJson.optional(),
  orderBy: EmailOwnOrderBySchemaJson.optional(),
});

export const PhoneQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PhoneDistinctSchema.optional(),
  select: PhoneOwnSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  include: PhoneIncludeSchemaJson.optional(),
  where: PhoneOwnWhereSchemaJson.optional(),
  orderBy: PhoneOwnOrderBySchemaJson.optional(),
});

export const WebsiteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: WebsiteDistinctSchema.optional(),
  select: WebsiteOwnSelectSchemaJson.optional(),
  omit: WebsiteOmitSchemaJson.optional(),
  include: WebsiteIncludeSchemaJson.optional(),
  where: WebsiteOwnWhereSchemaJson.optional(),
  orderBy: WebsiteOwnOrderBySchemaJson.optional(),
});

export const IndustryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryQuerySchema
);

export const CompanyQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyQuerySchema
);

export const CompanyIndustryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryQuerySchema
);

export const DepartmentQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentQuerySchema
);

export const TitleQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleQuerySchema
);

export const AgentQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentQuerySchema
);

export const ContactQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactQuerySchema
);

export const StateQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateQuerySchema
);

export const CountryQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryQuerySchema
);

export const CityQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityQuerySchema
);

export const AddressQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressQuerySchema
);

export const EmailQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailQuerySchema
);

export const PhoneQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneQuerySchema
);

export const WebsiteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteQuerySchema
);

export const IndustryCompleteQueryOneSchema = z.object({
  select: IndustrySelectSchemaJson.optional(),
  omit: IndustryOmitSchemaJson.optional(),
  include: IndustryIncludeSchemaJson.optional(),
  where: IndustryWhereSchemaJson.optional(),
});

export const CompanyCompleteQueryOneSchema = z.object({
  select: CompanySelectSchemaJson.optional(),
  omit: CompanyOmitSchemaJson.optional(),
  include: CompanyIncludeSchemaJson.optional(),
  where: CompanyWhereSchemaJson.optional(),
});

export const CompanyIndustryCompleteQueryOneSchema = z.object({
  select: CompanyIndustrySelectSchemaJson.optional(),
  omit: CompanyIndustryOmitSchemaJson.optional(),
  include: CompanyIndustryIncludeSchemaJson.optional(),
  where: CompanyIndustryWhereSchemaJson.optional(),
});

export const DepartmentCompleteQueryOneSchema = z.object({
  select: DepartmentSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  include: DepartmentIncludeSchemaJson.optional(),
  where: DepartmentWhereSchemaJson.optional(),
});

export const TitleCompleteQueryOneSchema = z.object({
  select: TitleSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  include: TitleIncludeSchemaJson.optional(),
  where: TitleWhereSchemaJson.optional(),
});

export const AgentCompleteQueryOneSchema = z.object({
  select: AgentSelectSchemaJson.optional(),
  omit: AgentOmitSchemaJson.optional(),
  include: AgentIncludeSchemaJson.optional(),
  where: AgentWhereSchemaJson.optional(),
});

export const ContactCompleteQueryOneSchema = z.object({
  select: ContactSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  include: ContactIncludeSchemaJson.optional(),
  where: ContactWhereSchemaJson.optional(),
});

export const StateCompleteQueryOneSchema = z.object({
  select: StateSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  include: StateIncludeSchemaJson.optional(),
  where: StateWhereSchemaJson.optional(),
});

export const CountryCompleteQueryOneSchema = z.object({
  select: CountrySelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  include: CountryIncludeSchemaJson.optional(),
  where: CountryWhereSchemaJson.optional(),
});

export const CityCompleteQueryOneSchema = z.object({
  select: CitySelectSchemaJson.optional(),
  omit: CityOmitSchemaJson.optional(),
  include: CityIncludeSchemaJson.optional(),
  where: CityWhereSchemaJson.optional(),
});

export const AddressCompleteQueryOneSchema = z.object({
  select: AddressSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  include: AddressIncludeSchemaJson.optional(),
  where: AddressWhereSchemaJson.optional(),
});

export const EmailCompleteQueryOneSchema = z.object({
  select: EmailSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  include: EmailIncludeSchemaJson.optional(),
  where: EmailWhereSchemaJson.optional(),
});

export const PhoneCompleteQueryOneSchema = z.object({
  select: PhoneSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  include: PhoneIncludeSchemaJson.optional(),
  where: PhoneWhereSchemaJson.optional(),
});

export const WebsiteCompleteQueryOneSchema = z.object({
  select: WebsiteSelectSchemaJson.optional(),
  omit: WebsiteOmitSchemaJson.optional(),
  include: WebsiteIncludeSchemaJson.optional(),
  where: WebsiteWhereSchemaJson.optional(),
});

export const IndustryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryCompleteQueryOneSchema
);

export const CompanyCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyCompleteQueryOneSchema
);

export const CompanyIndustryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryCompleteQueryOneSchema
);

export const DepartmentCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentCompleteQueryOneSchema
);

export const TitleCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleCompleteQueryOneSchema
);

export const AgentCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentCompleteQueryOneSchema
);

export const ContactCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactCompleteQueryOneSchema
);

export const StateCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateCompleteQueryOneSchema
);

export const CountryCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryCompleteQueryOneSchema
);

export const CityCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityCompleteQueryOneSchema
);

export const AddressCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressCompleteQueryOneSchema
);

export const EmailCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailCompleteQueryOneSchema
);

export const PhoneCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneCompleteQueryOneSchema
);

export const WebsiteCompleteQueryOneSchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteCompleteQueryOneSchema
);

export const IndustryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: IndustryDistinctSchema.optional(),
  select: IndustryCompleteSelectSchemaJson.optional(),
  omit: IndustryOmitSchemaJson.optional(),
  include: IndustryIncludeSchemaJson.optional(),
  where: IndustryWhereSchemaJson.optional(),
  orderBy: IndustryOrderBySchemaJson.optional(),
});

export const CompanyCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CompanyDistinctSchema.optional(),
  select: CompanyCompleteSelectSchemaJson.optional(),
  omit: CompanyOmitSchemaJson.optional(),
  include: CompanyIncludeSchemaJson.optional(),
  where: CompanyWhereSchemaJson.optional(),
  orderBy: CompanyOrderBySchemaJson.optional(),
});

export const CompanyIndustryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CompanyIndustryDistinctSchema.optional(),
  select: CompanyIndustryCompleteSelectSchemaJson.optional(),
  omit: CompanyIndustryOmitSchemaJson.optional(),
  include: CompanyIndustryIncludeSchemaJson.optional(),
  where: CompanyIndustryWhereSchemaJson.optional(),
  orderBy: CompanyIndustryOrderBySchemaJson.optional(),
});

export const DepartmentCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: DepartmentDistinctSchema.optional(),
  select: DepartmentCompleteSelectSchemaJson.optional(),
  omit: DepartmentOmitSchemaJson.optional(),
  include: DepartmentIncludeSchemaJson.optional(),
  where: DepartmentWhereSchemaJson.optional(),
  orderBy: DepartmentOrderBySchemaJson.optional(),
});

export const TitleCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: TitleDistinctSchema.optional(),
  select: TitleCompleteSelectSchemaJson.optional(),
  omit: TitleOmitSchemaJson.optional(),
  include: TitleIncludeSchemaJson.optional(),
  where: TitleWhereSchemaJson.optional(),
  orderBy: TitleOrderBySchemaJson.optional(),
});

export const AgentCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AgentDistinctSchema.optional(),
  select: AgentCompleteSelectSchemaJson.optional(),
  omit: AgentOmitSchemaJson.optional(),
  include: AgentIncludeSchemaJson.optional(),
  where: AgentWhereSchemaJson.optional(),
  orderBy: AgentOrderBySchemaJson.optional(),
});

export const ContactCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: ContactDistinctSchema.optional(),
  select: ContactCompleteSelectSchemaJson.optional(),
  omit: ContactOmitSchemaJson.optional(),
  include: ContactIncludeSchemaJson.optional(),
  where: ContactWhereSchemaJson.optional(),
  orderBy: ContactOrderBySchemaJson.optional(),
});

export const StateCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: StateDistinctSchema.optional(),
  select: StateCompleteSelectSchemaJson.optional(),
  omit: StateOmitSchemaJson.optional(),
  include: StateIncludeSchemaJson.optional(),
  where: StateWhereSchemaJson.optional(),
  orderBy: StateOrderBySchemaJson.optional(),
});

export const CountryCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CountryDistinctSchema.optional(),
  select: CountryCompleteSelectSchemaJson.optional(),
  omit: CountryOmitSchemaJson.optional(),
  include: CountryIncludeSchemaJson.optional(),
  where: CountryWhereSchemaJson.optional(),
  orderBy: CountryOrderBySchemaJson.optional(),
});

export const CityCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: CityDistinctSchema.optional(),
  select: CityCompleteSelectSchemaJson.optional(),
  omit: CityOmitSchemaJson.optional(),
  include: CityIncludeSchemaJson.optional(),
  where: CityWhereSchemaJson.optional(),
  orderBy: CityOrderBySchemaJson.optional(),
});

export const AddressCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: AddressDistinctSchema.optional(),
  select: AddressCompleteSelectSchemaJson.optional(),
  omit: AddressOmitSchemaJson.optional(),
  include: AddressIncludeSchemaJson.optional(),
  where: AddressWhereSchemaJson.optional(),
  orderBy: AddressOrderBySchemaJson.optional(),
});

export const EmailCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: EmailDistinctSchema.optional(),
  select: EmailCompleteSelectSchemaJson.optional(),
  omit: EmailOmitSchemaJson.optional(),
  include: EmailIncludeSchemaJson.optional(),
  where: EmailWhereSchemaJson.optional(),
  orderBy: EmailOrderBySchemaJson.optional(),
});

export const PhoneCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: PhoneDistinctSchema.optional(),
  select: PhoneCompleteSelectSchemaJson.optional(),
  omit: PhoneOmitSchemaJson.optional(),
  include: PhoneIncludeSchemaJson.optional(),
  where: PhoneWhereSchemaJson.optional(),
  orderBy: PhoneOrderBySchemaJson.optional(),
});

export const WebsiteCompleteQuerySchema = z.object({
  take: _take,
  skip: _skip,
  distinct: WebsiteDistinctSchema.optional(),
  select: WebsiteCompleteSelectSchemaJson.optional(),
  omit: WebsiteOmitSchemaJson.optional(),
  include: WebsiteIncludeSchemaJson.optional(),
  where: WebsiteWhereSchemaJson.optional(),
  orderBy: WebsiteOrderBySchemaJson.optional(),
});

export const IndustryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  IndustryCompleteQuerySchema
);

export const CompanyCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyCompleteQuerySchema
);

export const CompanyIndustryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CompanyIndustryCompleteQuerySchema
);

export const DepartmentCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  DepartmentCompleteQuerySchema
);

export const TitleCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  TitleCompleteQuerySchema
);

export const AgentCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AgentCompleteQuerySchema
);

export const ContactCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  ContactCompleteQuerySchema
);

export const StateCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  StateCompleteQuerySchema
);

export const CountryCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CountryCompleteQuerySchema
);

export const CityCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  CityCompleteQuerySchema
);

export const AddressCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  AddressCompleteQuerySchema
);

export const EmailCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  EmailCompleteQuerySchema
);

export const PhoneCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  PhoneCompleteQuerySchema
);

export const WebsiteCompleteQuerySchemaJson = z.preprocess(
  _jsonPreprocessor,
  WebsiteCompleteQuerySchema
);

export const IndustryProjectionSchema = z.union([
  z.object({ omit: IndustryOmitSchemaJson }),
  z.object({ select: IndustrySelectSchemaJson }),
  z.object({ include: IndustryIncludeSchemaJson }),
  z.object({}),
]);

export const CompanyProjectionSchema = z.union([
  z.object({ omit: CompanyOmitSchemaJson }),
  z.object({ select: CompanySelectSchemaJson }),
  z.object({ include: CompanyIncludeSchemaJson }),
  z.object({}),
]);

export const CompanyIndustryProjectionSchema = z.union([
  z.object({ omit: CompanyIndustryOmitSchemaJson }),
  z.object({ select: CompanyIndustrySelectSchemaJson }),
  z.object({ include: CompanyIndustryIncludeSchemaJson }),
  z.object({}),
]);

export const DepartmentProjectionSchema = z.union([
  z.object({ omit: DepartmentOmitSchemaJson }),
  z.object({ select: DepartmentSelectSchemaJson }),
  z.object({ include: DepartmentIncludeSchemaJson }),
  z.object({}),
]);

export const TitleProjectionSchema = z.union([
  z.object({ omit: TitleOmitSchemaJson }),
  z.object({ select: TitleSelectSchemaJson }),
  z.object({ include: TitleIncludeSchemaJson }),
  z.object({}),
]);

export const AgentProjectionSchema = z.union([
  z.object({ omit: AgentOmitSchemaJson }),
  z.object({ select: AgentSelectSchemaJson }),
  z.object({ include: AgentIncludeSchemaJson }),
  z.object({}),
]);

export const ContactProjectionSchema = z.union([
  z.object({ omit: ContactOmitSchemaJson }),
  z.object({ select: ContactSelectSchemaJson }),
  z.object({ include: ContactIncludeSchemaJson }),
  z.object({}),
]);

export const StateProjectionSchema = z.union([
  z.object({ omit: StateOmitSchemaJson }),
  z.object({ select: StateSelectSchemaJson }),
  z.object({ include: StateIncludeSchemaJson }),
  z.object({}),
]);

export const CountryProjectionSchema = z.union([
  z.object({ omit: CountryOmitSchemaJson }),
  z.object({ select: CountrySelectSchemaJson }),
  z.object({ include: CountryIncludeSchemaJson }),
  z.object({}),
]);

export const CityProjectionSchema = z.union([
  z.object({ omit: CityOmitSchemaJson }),
  z.object({ select: CitySelectSchemaJson }),
  z.object({ include: CityIncludeSchemaJson }),
  z.object({}),
]);

export const AddressProjectionSchema = z.union([
  z.object({ omit: AddressOmitSchemaJson }),
  z.object({ select: AddressSelectSchemaJson }),
  z.object({ include: AddressIncludeSchemaJson }),
  z.object({}),
]);

export const EmailProjectionSchema = z.union([
  z.object({ omit: EmailOmitSchemaJson }),
  z.object({ select: EmailSelectSchemaJson }),
  z.object({ include: EmailIncludeSchemaJson }),
  z.object({}),
]);

export const PhoneProjectionSchema = z.union([
  z.object({ omit: PhoneOmitSchemaJson }),
  z.object({ select: PhoneSelectSchemaJson }),
  z.object({ include: PhoneIncludeSchemaJson }),
  z.object({}),
]);

export const WebsiteProjectionSchema = z.union([
  z.object({ omit: WebsiteOmitSchemaJson }),
  z.object({ select: WebsiteSelectSchemaJson }),
  z.object({ include: WebsiteIncludeSchemaJson }),
  z.object({}),
]);

export const IndustryOwnCreateSchema = z.object({
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const CompanyOwnCreateSchema = z.object({
  uuid: _str.optional(),
  name: _name,
  slug: _slug,
});

export const CompanyIndustryOwnCreateSchema = z.object({
  companyId: _id,
  industryId: _id,
});

export const DepartmentOwnCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
});

export const TitleOwnCreateSchema = z.object({
  departmentId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const AgentOwnCreateSchema = z.object({
  companyId: _id.optional(),
  titleId: _id.optional(),
  firstName: _str,
  middleName: _str.optional(),
  lastName: _str,
  preferedName: _str.optional(),
  gender: GenderSchema.optional(),
  slug: _slug,
  note: _str.optional(),
});

export const ContactOwnCreateSchema = z.object({
  uuid: _str.optional(),
  agentId: _id,
  type: ContactTypeSchema,
  order: _int.optional(),
});

export const StateOwnCreateSchema = z.object({
  countryId: _id,
  state: _str,
  code: _str,
});

export const CountryOwnCreateSchema = z.object({ name: _name, code: _str });

export const CityOwnCreateSchema = z.object({ stateId: _id, name: _name });

export const AddressOwnCreateSchema = z.object({
  contactId: _id,
  cityId: _id,
  street: _str,
  zip: _str,
  order: _int.optional(),
});

export const EmailOwnCreateSchema = z.object({
  contactId: _id,
  email: _email,
  order: _int.optional(),
});

export const PhoneOwnCreateSchema = z.object({
  contactId: _id,
  phone: _phone,
  order: _int.optional(),
});

export const WebsiteOwnCreateSchema = z.object({
  contactId: _id,
  url: _url,
  order: _int.optional(),
});

export const IndustryCreateSchema = z.object({
  name: _name,
  slug: _slug,
  description: _description.optional(),
  companies: z
    .object({ createMany: CompanyIndustryOwnCreateSchema.array() })
    .array(),
});

export const CompanyCreateSchema = z.object({
  uuid: _str.optional(),
  name: _name,
  slug: _slug,
  agents: z.object({ createMany: AgentOwnCreateSchema.array() }).array(),
  industries: z
    .object({ createMany: CompanyIndustryOwnCreateSchema.array() })
    .array(),
});

export const CompanyIndustryCreateSchema = z.object({
  companyId: _id,
  industryId: _id,
  industry: z.object({ create: IndustryOwnCreateSchema }),
  company: z.object({ create: CompanyOwnCreateSchema }),
});

export const DepartmentCreateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
  parent: z.object({ create: DepartmentOwnCreateSchema }).optional(),
  children: z.object({ createMany: DepartmentOwnCreateSchema.array() }).array(),
  titles: z.object({ createMany: TitleOwnCreateSchema.array() }).array(),
});

export const TitleCreateSchema = z.object({
  departmentId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
  agents: z.object({ createMany: AgentOwnCreateSchema.array() }).array(),
  department: z.object({ create: DepartmentOwnCreateSchema }).optional(),
});

export const AgentCreateSchema = z.object({
  companyId: _id.optional(),
  titleId: _id.optional(),
  firstName: _str,
  middleName: _str.optional(),
  lastName: _str,
  preferedName: _str.optional(),
  gender: GenderSchema.optional(),
  slug: _slug,
  note: _str.optional(),
  company: z.object({ create: CompanyOwnCreateSchema }).optional(),
  contacts: z.object({ createMany: ContactOwnCreateSchema.array() }).array(),
  title: z.object({ create: TitleOwnCreateSchema }).optional(),
});

export const ContactCreateSchema = z.object({
  uuid: _str.optional(),
  agentId: _id,
  type: ContactTypeSchema,
  order: _int.optional(),
  emails: z.object({ createMany: EmailOwnCreateSchema.array() }).array(),
  phones: z.object({ createMany: PhoneOwnCreateSchema.array() }).array(),
  addresses: z.object({ createMany: AddressOwnCreateSchema.array() }).array(),
  websites: z.object({ createMany: WebsiteOwnCreateSchema.array() }).array(),
  agent: z.object({ create: AgentOwnCreateSchema }),
});

export const StateCreateSchema = z.object({
  countryId: _id,
  state: _str,
  code: _str,
  country: z.object({ create: CountryOwnCreateSchema }),
  cities: z.object({ createMany: CityOwnCreateSchema.array() }).array(),
});

export const CountryCreateSchema = z.object({
  name: _name,
  code: _str,
  states: z.object({ createMany: StateOwnCreateSchema.array() }).array(),
});

export const CityCreateSchema = z.object({
  stateId: _id,
  name: _name,
  state: z.object({ create: StateOwnCreateSchema }),
  addresses: z.object({ createMany: AddressOwnCreateSchema.array() }).array(),
});

export const AddressCreateSchema = z.object({
  contactId: _id,
  cityId: _id,
  street: _str,
  zip: _str,
  order: _int.optional(),
  city: z.object({ create: CityOwnCreateSchema }),
  contact: z.object({ create: ContactOwnCreateSchema }),
});

export const EmailCreateSchema = z.object({
  contactId: _id,
  email: _email,
  order: _int.optional(),
  contact: z.object({ create: ContactOwnCreateSchema }),
});

export const PhoneCreateSchema = z.object({
  contactId: _id,
  phone: _phone,
  order: _int.optional(),
  contact: z.object({ create: ContactOwnCreateSchema }),
});

export const WebsiteCreateSchema = z.object({
  contactId: _id,
  url: _url,
  order: _int.optional(),
  contact: z.object({ create: ContactOwnCreateSchema }),
});

export const IndustryUpdateSchema = z.object({
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const CompanyUpdateSchema = z.object({ name: _name, slug: _slug });

export const CompanyIndustryUpdateSchema = z.object({
  companyId: _id,
  industryId: _id,
});

export const DepartmentUpdateSchema = z.object({
  parentId: _id.optional(),
  name: _name,
  slug: _slug,
});

export const TitleUpdateSchema = z.object({
  departmentId: _id.optional(),
  name: _name,
  slug: _slug,
  description: _description.optional(),
});

export const AgentUpdateSchema = z.object({
  companyId: _id.optional(),
  titleId: _id.optional(),
  firstName: _str,
  middleName: _str.optional(),
  lastName: _str,
  preferedName: _str.optional(),
  gender: GenderSchema.optional(),
  slug: _slug,
  note: _str.optional(),
});

export const ContactUpdateSchema = z.object({
  agentId: _id,
  type: ContactTypeSchema,
  order: _int.optional(),
});

export const StateUpdateSchema = z.object({
  countryId: _id,
  state: _str,
  code: _str,
});

export const CountryUpdateSchema = z.object({ name: _name, code: _str });

export const CityUpdateSchema = z.object({ stateId: _id, name: _name });

export const AddressUpdateSchema = z.object({
  contactId: _id,
  cityId: _id,
  street: _str,
  zip: _str,
  order: _int.optional(),
});

export const EmailUpdateSchema = z.object({
  contactId: _id,
  email: _email,
  order: _int.optional(),
});

export const PhoneUpdateSchema = z.object({
  contactId: _id,
  phone: _phone,
  order: _int.optional(),
});

export const WebsiteUpdateSchema = z.object({
  contactId: _id,
  url: _url,
  order: _int.optional(),
});
