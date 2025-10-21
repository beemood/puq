/* eslint-disable @typescript-eslint/no-explicit-any */
import * as PZ from '@puq/zod';
import { z } from 'zod';

export const PaginationSchema = z
  .object({
    take: PZ.Scalar.take(),
    skip: PZ.Scalar.skip(),
  })
  .partial();

export const ContactTypeSchema = z.enum(['WORK', 'HOME', 'EMERGENCY']);

export const GenderSchema = z.enum(['MALE', 'FEMALE']);

export const IndustryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    companies: PZ.Scalar.bool(),
  })
  .partial();

export const IndustryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustryOwnSelectFieldsSchema
);

export const IndustryDistinctFieldsSchema = z
  .enum(['id', 'name', 'slug', 'description'])
  .array();

export const CompanyOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    agents: PZ.Scalar.bool(),
    industries: PZ.Scalar.bool(),
  })
  .partial();

export const CompanyOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyOwnSelectFieldsSchema
);

export const CompanyDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'name', 'slug'])
  .array();

export const CompanyIndustryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    companyId: PZ.Scalar.bool(),
    industryId: PZ.Scalar.bool(),
    industry: PZ.Scalar.bool(),
    company: PZ.Scalar.bool(),
  })
  .partial();

export const CompanyIndustryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustryOwnSelectFieldsSchema
);

export const CompanyIndustryDistinctFieldsSchema = z
  .enum(['id', 'companyId', 'industryId'])
  .array();

export const DepartmentOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool(),
    children: PZ.Scalar.bool(),
    titles: PZ.Scalar.bool(),
  })
  .partial();

export const DepartmentOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOwnSelectFieldsSchema
);

export const DepartmentDistinctFieldsSchema = z
  .enum(['id', 'parentId', 'name', 'slug'])
  .array();

export const TitleOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    departmentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    agents: PZ.Scalar.bool(),
    department: PZ.Scalar.bool(),
  })
  .partial();

export const TitleOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOwnSelectFieldsSchema
);

export const TitleDistinctFieldsSchema = z
  .enum(['id', 'departmentId', 'name', 'slug', 'description'])
  .array();

export const AgentOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    companyId: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    firstName: PZ.Scalar.bool(),
    middleName: PZ.Scalar.bool(),
    lastName: PZ.Scalar.bool(),
    preferedName: PZ.Scalar.bool(),
    gender: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
    company: PZ.Scalar.bool(),
    contacts: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
  })
  .partial();

export const AgentOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentOwnSelectFieldsSchema
);

export const AgentDistinctFieldsSchema = z
  .enum([
    'id',
    'companyId',
    'titleId',
    'firstName',
    'middleName',
    'lastName',
    'preferedName',
    'gender',
    'slug',
    'note',
  ])
  .array();

export const ContactOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    agentId: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    emails: PZ.Scalar.bool(),
    phones: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
    websites: PZ.Scalar.bool(),
    agent: PZ.Scalar.bool(),
  })
  .partial();

export const ContactOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOwnSelectFieldsSchema
);

export const ContactDistinctFieldsSchema = z
  .enum(['id', 'uuid', 'agentId', 'type', 'order'])
  .array();

export const StateOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    countryId: PZ.Scalar.bool(),
    state: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    country: PZ.Scalar.bool(),
    cities: PZ.Scalar.bool(),
  })
  .partial();

export const StateOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOwnSelectFieldsSchema
);

export const StateDistinctFieldsSchema = z
  .enum(['id', 'countryId', 'state', 'code'])
  .array();

export const CountryOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    states: PZ.Scalar.bool(),
  })
  .partial();

export const CountryOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOwnSelectFieldsSchema
);

export const CountryDistinctFieldsSchema = z
  .enum(['id', 'name', 'code'])
  .array();

export const CityOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    stateId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    state: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
  })
  .partial();

export const CityOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CityOwnSelectFieldsSchema
);

export const CityDistinctFieldsSchema = z
  .enum(['id', 'stateId', 'name'])
  .array();

export const AddressOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    cityId: PZ.Scalar.bool(),
    street: PZ.Scalar.bool(),
    zip: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    city: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const AddressOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOwnSelectFieldsSchema
);

export const AddressDistinctFieldsSchema = z
  .enum(['id', 'contactId', 'cityId', 'street', 'zip', 'order'])
  .array();

export const EmailOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const EmailOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOwnSelectFieldsSchema
);

export const EmailDistinctFieldsSchema = z
  .enum(['id', 'contactId', 'email', 'order'])
  .array();

export const PhoneOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PhoneOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOwnSelectFieldsSchema
);

export const PhoneDistinctFieldsSchema = z
  .enum(['id', 'contactId', 'phone', 'order'])
  .array();

export const WebsiteOwnSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    url: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const WebsiteOwnSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteOwnSelectFieldsSchema
);

export const WebsiteDistinctFieldsSchema = z
  .enum(['id', 'contactId', 'url', 'order'])
  .array();

export const IndustryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const IndustryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustryOwnWhereSchema
);

export const CompanyOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CompanyOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyOwnWhereSchema
);

export const CompanyIndustryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    companyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    industryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const CompanyIndustryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustryOwnWhereSchema
);

export const DepartmentOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const DepartmentOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOwnWhereSchema
);

export const TitleOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    departmentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const TitleOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOwnWhereSchema
);

export const AgentOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    companyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    titleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    firstName: z.string().or(PZ.StringFilterSchema),
    middleName: z.string().or(PZ.StringFilterSchema),
    lastName: z.string().or(PZ.StringFilterSchema),
    preferedName: z.string().or(PZ.StringFilterSchema),
    gender: GenderSchema,
    slug: z.string().or(PZ.StringFilterSchema),
    note: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const AgentOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentOwnWhereSchema
);

export const ContactOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    agentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const ContactOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOwnWhereSchema
);

export const StateOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    countryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    state: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const StateOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOwnWhereSchema
);

export const CountryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CountryOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOwnWhereSchema
);

export const CityOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    stateId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const CityOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CityOwnWhereSchema
);

export const AddressOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    cityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    street: z.string().or(PZ.StringFilterSchema),
    zip: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const AddressOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOwnWhereSchema
);

export const EmailOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    email: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const EmailOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOwnWhereSchema
);

export const PhoneOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phone: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const PhoneOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOwnWhereSchema
);

export const WebsiteOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    url: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
  })
  .partial();

export const WebsiteOwnWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteOwnWhereSchema
);

export const IndustryOwnIncludeSchema = z
  .object({
    companies: PZ.Scalar.bool(),
  })
  .partial();

export const IndustryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustryOwnIncludeSchema
);

export const IndustryOwnQueryOneSchema = z
  .object({
    where: IndustryOwnWhereSchemaJson,
    distinct: IndustryDistinctFieldsSchema,
  })
  .partial();

export const IndustryOwnQuerySchema = z
  .object({
    where: IndustryOwnWhereSchemaJson,
    distinct: IndustryDistinctFieldsSchema,
  })
  .partial();

export const CompanyOwnIncludeSchema = z
  .object({
    agents: PZ.Scalar.bool(),
    industries: PZ.Scalar.bool(),
  })
  .partial();

export const CompanyOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyOwnIncludeSchema
);

export const CompanyOwnQueryOneSchema = z
  .object({
    where: CompanyOwnWhereSchemaJson,
    distinct: CompanyDistinctFieldsSchema,
  })
  .partial();

export const CompanyOwnQuerySchema = z
  .object({
    where: CompanyOwnWhereSchemaJson,
    distinct: CompanyDistinctFieldsSchema,
  })
  .partial();

export const CompanyIndustryOwnIncludeSchema = z
  .object({
    industry: PZ.Scalar.bool(),
    company: PZ.Scalar.bool(),
  })
  .partial();

export const CompanyIndustryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustryOwnIncludeSchema
);

export const CompanyIndustryOwnQueryOneSchema = z
  .object({
    where: CompanyIndustryOwnWhereSchemaJson,
    distinct: CompanyIndustryDistinctFieldsSchema,
  })
  .partial();

export const CompanyIndustryOwnQuerySchema = z
  .object({
    where: CompanyIndustryOwnWhereSchemaJson,
    distinct: CompanyIndustryDistinctFieldsSchema,
  })
  .partial();

export const DepartmentOwnIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool(),
    children: PZ.Scalar.bool(),
    titles: PZ.Scalar.bool(),
  })
  .partial();

export const DepartmentOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOwnIncludeSchema
);

export const DepartmentOwnQueryOneSchema = z
  .object({
    where: DepartmentOwnWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
  })
  .partial();

export const DepartmentOwnQuerySchema = z
  .object({
    where: DepartmentOwnWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
  })
  .partial();

export const TitleOwnIncludeSchema = z
  .object({
    agents: PZ.Scalar.bool(),
    department: PZ.Scalar.bool(),
  })
  .partial();

export const TitleOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOwnIncludeSchema
);

export const TitleOwnQueryOneSchema = z
  .object({
    where: TitleOwnWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
  })
  .partial();

export const TitleOwnQuerySchema = z
  .object({
    where: TitleOwnWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
  })
  .partial();

export const AgentOwnIncludeSchema = z
  .object({
    company: PZ.Scalar.bool(),
    contacts: PZ.Scalar.bool(),
    title: PZ.Scalar.bool(),
  })
  .partial();

export const AgentOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentOwnIncludeSchema
);

export const AgentOwnQueryOneSchema = z
  .object({
    where: AgentOwnWhereSchemaJson,
    distinct: AgentDistinctFieldsSchema,
  })
  .partial();

export const AgentOwnQuerySchema = z
  .object({
    where: AgentOwnWhereSchemaJson,
    distinct: AgentDistinctFieldsSchema,
  })
  .partial();

export const ContactOwnIncludeSchema = z
  .object({
    emails: PZ.Scalar.bool(),
    phones: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
    websites: PZ.Scalar.bool(),
    agent: PZ.Scalar.bool(),
  })
  .partial();

export const ContactOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOwnIncludeSchema
);

export const ContactOwnQueryOneSchema = z
  .object({
    where: ContactOwnWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
  })
  .partial();

export const ContactOwnQuerySchema = z
  .object({
    where: ContactOwnWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
  })
  .partial();

export const StateOwnIncludeSchema = z
  .object({
    country: PZ.Scalar.bool(),
    cities: PZ.Scalar.bool(),
  })
  .partial();

export const StateOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOwnIncludeSchema
);

export const StateOwnQueryOneSchema = z
  .object({
    where: StateOwnWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
  })
  .partial();

export const StateOwnQuerySchema = z
  .object({
    where: StateOwnWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
  })
  .partial();

export const CountryOwnIncludeSchema = z
  .object({
    states: PZ.Scalar.bool(),
  })
  .partial();

export const CountryOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOwnIncludeSchema
);

export const CountryOwnQueryOneSchema = z
  .object({
    where: CountryOwnWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
  })
  .partial();

export const CountryOwnQuerySchema = z
  .object({
    where: CountryOwnWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
  })
  .partial();

export const CityOwnIncludeSchema = z
  .object({
    state: PZ.Scalar.bool(),
    addresses: PZ.Scalar.bool(),
  })
  .partial();

export const CityOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CityOwnIncludeSchema
);

export const CityOwnQueryOneSchema = z
  .object({
    where: CityOwnWhereSchemaJson,
    distinct: CityDistinctFieldsSchema,
  })
  .partial();

export const CityOwnQuerySchema = z
  .object({
    where: CityOwnWhereSchemaJson,
    distinct: CityDistinctFieldsSchema,
  })
  .partial();

export const AddressOwnIncludeSchema = z
  .object({
    city: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const AddressOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOwnIncludeSchema
);

export const AddressOwnQueryOneSchema = z
  .object({
    where: AddressOwnWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
  })
  .partial();

export const AddressOwnQuerySchema = z
  .object({
    where: AddressOwnWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
  })
  .partial();

export const EmailOwnIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const EmailOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOwnIncludeSchema
);

export const EmailOwnQueryOneSchema = z
  .object({
    where: EmailOwnWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
  })
  .partial();

export const EmailOwnQuerySchema = z
  .object({
    where: EmailOwnWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
  })
  .partial();

export const PhoneOwnIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const PhoneOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOwnIncludeSchema
);

export const PhoneOwnQueryOneSchema = z
  .object({
    where: PhoneOwnWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
  })
  .partial();

export const PhoneOwnQuerySchema = z
  .object({
    where: PhoneOwnWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
  })
  .partial();

export const WebsiteOwnIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool(),
  })
  .partial();

export const WebsiteOwnIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteOwnIncludeSchema
);

export const WebsiteOwnQueryOneSchema = z
  .object({
    where: WebsiteOwnWhereSchemaJson,
    distinct: WebsiteDistinctFieldsSchema,
  })
  .partial();

export const WebsiteOwnQuerySchema = z
  .object({
    where: WebsiteOwnWhereSchemaJson,
    distinct: WebsiteDistinctFieldsSchema,
  })
  .partial();

export const IndustryCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
    description: PZ.Scalar.description().optional(),
  })
);

export const IndustryUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const IndustryOrderBySchema = z
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

export const IndustryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustryOrderBySchema
);

export const IndustryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    companies: z
      .object({
        some: CompanyIndustryOwnWhereSchema,
        every: CompanyIndustryOwnWhereSchema,
        none: CompanyIndustryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const IndustryWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustryWhereSchema
);

export const IndustrySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    companies: PZ.Scalar.bool().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const IndustrySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustrySelectFieldsSchema
);

export const IndustryOmitFieldsSchema = z
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

export const IndustryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustryOmitFieldsSchema
);

export const IndustryIncludeSchema = z
  .object({
    companies: PZ.Scalar.bool().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const IndustryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  IndustryIncludeSchema
);

export const IndustryProjectionSchema = z.union([
  z.object({ omit: IndustryOmitFieldsSchemaJson }),
  z.object({ select: IndustrySelectFieldsSchemaJson }),
  z.object({ include: IndustryIncludeSchemaJson }),
  z.object({}),
]);

export const CompanyCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
  })
);

export const CompanyUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
});

export const CompanyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CompanyOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyOrderBySchema
);

export const CompanyWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    agents: z
      .object({
        some: AgentOwnWhereSchema,
        every: AgentOwnWhereSchema,
        none: AgentOwnWhereSchema,
      })
      .partial(),
    industries: z
      .object({
        some: CompanyIndustryOwnWhereSchema,
        every: CompanyIndustryOwnWhereSchema,
        none: CompanyIndustryOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CompanyWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyWhereSchema
);

export const CompanySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    agents: PZ.Scalar.bool().or(AgentOwnQuerySchema),
    industries: PZ.Scalar.bool().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const CompanySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanySelectFieldsSchema
);

export const CompanyOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'name', 'slug'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CompanyOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyOmitFieldsSchema
);

export const CompanyIncludeSchema = z
  .object({
    agents: PZ.Scalar.bool().or(AgentOwnQuerySchema),
    industries: PZ.Scalar.bool().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const CompanyIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIncludeSchema
);

export const CompanyProjectionSchema = z.union([
  z.object({ omit: CompanyOmitFieldsSchemaJson }),
  z.object({ select: CompanySelectFieldsSchemaJson }),
  z.object({ include: CompanyIncludeSchemaJson }),
  z.object({}),
]);

export const CompanyIndustryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    companyId: PZ.Scalar.id(),
    industryId: PZ.Scalar.id(),
  })
);

export const CompanyIndustryUpdateSchema = z.object({
  companyId: PZ.Scalar.id().optional(),
  industryId: PZ.Scalar.id().optional(),
});

export const CompanyIndustryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    companyId: PZ.OrderDirectionSchema,
    industryId: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CompanyIndustryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustryOrderBySchema
);

export const CompanyIndustryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    companyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    industryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    industry: IndustryOwnWhereSchema,
    company: CompanyOwnWhereSchema,
  })
  .partial();

export const CompanyIndustryWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustryWhereSchema
);

export const CompanyIndustrySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    companyId: PZ.Scalar.bool(),
    industryId: PZ.Scalar.bool(),
    industry: PZ.Scalar.bool().or(IndustryOwnQueryOneSchema),
    company: PZ.Scalar.bool().or(CompanyOwnQueryOneSchema),
  })
  .partial();

export const CompanyIndustrySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustrySelectFieldsSchema
);

export const CompanyIndustryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    companyId: PZ.Scalar.bool(),
    industryId: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'companyId', 'industryId'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CompanyIndustryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustryOmitFieldsSchema
);

export const CompanyIndustryIncludeSchema = z
  .object({
    industry: PZ.Scalar.bool().or(IndustryOwnQueryOneSchema),
    company: PZ.Scalar.bool().or(CompanyOwnQueryOneSchema),
  })
  .partial();

export const CompanyIndustryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CompanyIndustryIncludeSchema
);

export const CompanyIndustryProjectionSchema = z.union([
  z.object({ omit: CompanyIndustryOmitFieldsSchemaJson }),
  z.object({ select: CompanyIndustrySelectFieldsSchemaJson }),
  z.object({ include: CompanyIndustryIncludeSchemaJson }),
  z.object({}),
]);

export const DepartmentCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    parentId: PZ.Scalar.id().optional(),
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
  })
);

export const DepartmentUpdateSchema = z.object({
  parentId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
});

export const DepartmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const DepartmentOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOrderBySchema
);

export const DepartmentWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    parentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    parent: DepartmentOwnWhereSchema,
    children: z
      .object({
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      })
      .partial(),
    titles: z
      .object({
        some: TitleOwnWhereSchema,
        every: TitleOwnWhereSchema,
        none: TitleOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const DepartmentWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentWhereSchema
);

export const DepartmentSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    parent: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
    children: PZ.Scalar.bool().or(DepartmentOwnQuerySchema),
    titles: PZ.Scalar.bool().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentSelectFieldsSchema
);

export const DepartmentOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    parentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'parentId', 'name', 'slug'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const DepartmentOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentOmitFieldsSchema
);

export const DepartmentIncludeSchema = z
  .object({
    parent: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
    children: PZ.Scalar.bool().or(DepartmentOwnQuerySchema),
    titles: PZ.Scalar.bool().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  DepartmentIncludeSchema
);

export const DepartmentProjectionSchema = z.union([
  z.object({ omit: DepartmentOmitFieldsSchemaJson }),
  z.object({ select: DepartmentSelectFieldsSchemaJson }),
  z.object({ include: DepartmentIncludeSchemaJson }),
  z.object({}),
]);

export const TitleCreateSchema = z.preprocess(
  PZ.slugTransformer('name'),
  z.object({
    departmentId: PZ.Scalar.id().optional(),
    name: PZ.Scalar.name(),
    slug: PZ.Scalar.slug().optional(),
    description: PZ.Scalar.description().optional(),
  })
);

export const TitleUpdateSchema = z.object({
  departmentId: PZ.Scalar.id().optional().optional(),
  name: PZ.Scalar.name().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  description: PZ.Scalar.description().optional().optional(),
});

export const TitleOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    departmentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const TitleOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOrderBySchema
);

export const TitleWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    departmentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
    agents: z
      .object({
        some: AgentOwnWhereSchema,
        every: AgentOwnWhereSchema,
        none: AgentOwnWhereSchema,
      })
      .partial(),
    department: DepartmentOwnWhereSchema,
  })
  .partial();

export const TitleWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleWhereSchema
);

export const TitleSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    departmentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
    agents: PZ.Scalar.bool().or(AgentOwnQuerySchema),
    department: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
  })
  .partial();

export const TitleSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleSelectFieldsSchema
);

export const TitleOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    departmentId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    description: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'departmentId', 'name', 'slug', 'description'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const TitleOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleOmitFieldsSchema
);

export const TitleIncludeSchema = z
  .object({
    agents: PZ.Scalar.bool().or(AgentOwnQuerySchema),
    department: PZ.Scalar.bool().or(DepartmentOwnQueryOneSchema),
  })
  .partial();

export const TitleIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  TitleIncludeSchema
);

export const TitleProjectionSchema = z.union([
  z.object({ omit: TitleOmitFieldsSchemaJson }),
  z.object({ select: TitleSelectFieldsSchemaJson }),
  z.object({ include: TitleIncludeSchemaJson }),
  z.object({}),
]);

export const AgentCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    companyId: PZ.Scalar.id().optional(),
    titleId: PZ.Scalar.id().optional(),
    firstName: PZ.Scalar.string(),
    middleName: PZ.Scalar.string().optional(),
    lastName: PZ.Scalar.string(),
    preferedName: PZ.Scalar.string().optional(),
    gender: GenderSchema.optional(),
    slug: PZ.Scalar.slug().optional(),
    note: PZ.Scalar.string().optional(),
  })
);

export const AgentUpdateSchema = z.object({
  companyId: PZ.Scalar.id().optional().optional(),
  titleId: PZ.Scalar.id().optional().optional(),
  firstName: PZ.Scalar.string().optional(),
  middleName: PZ.Scalar.string().optional().optional(),
  lastName: PZ.Scalar.string().optional(),
  preferedName: PZ.Scalar.string().optional().optional(),
  gender: GenderSchema.optional().optional(),
  slug: PZ.Scalar.slug().optional().optional(),
  note: PZ.Scalar.string().optional().optional(),
});

export const AgentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    companyId: PZ.OrderDirectionSchema,
    titleId: PZ.OrderDirectionSchema,
    firstName: PZ.OrderDirectionSchema,
    middleName: PZ.OrderDirectionSchema,
    lastName: PZ.OrderDirectionSchema,
    preferedName: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    note: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AgentOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentOrderBySchema
);

export const AgentWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    companyId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    titleId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    firstName: z.string().or(PZ.StringFilterSchema),
    middleName: z.string().or(PZ.StringFilterSchema),
    lastName: z.string().or(PZ.StringFilterSchema),
    preferedName: z.string().or(PZ.StringFilterSchema),
    gender: GenderSchema,
    slug: z.string().or(PZ.StringFilterSchema),
    note: z.string().or(PZ.StringFilterSchema),
    company: CompanyOwnWhereSchema,
    contacts: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
    title: TitleOwnWhereSchema,
  })
  .partial();

export const AgentWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentWhereSchema
);

export const AgentSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    companyId: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    firstName: PZ.Scalar.bool(),
    middleName: PZ.Scalar.bool(),
    lastName: PZ.Scalar.bool(),
    preferedName: PZ.Scalar.bool(),
    gender: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
    company: PZ.Scalar.bool().or(CompanyOwnQueryOneSchema),
    contacts: PZ.Scalar.bool().or(ContactOwnQuerySchema),
    title: PZ.Scalar.bool().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const AgentSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentSelectFieldsSchema
);

export const AgentOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    companyId: PZ.Scalar.bool(),
    titleId: PZ.Scalar.bool(),
    firstName: PZ.Scalar.bool(),
    middleName: PZ.Scalar.bool(),
    lastName: PZ.Scalar.bool(),
    preferedName: PZ.Scalar.bool(),
    gender: PZ.Scalar.bool(),
    slug: PZ.Scalar.bool(),
    note: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      ![
        'id',
        'companyId',
        'titleId',
        'firstName',
        'middleName',
        'lastName',
        'preferedName',
        'gender',
        'slug',
        'note',
      ].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AgentOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentOmitFieldsSchema
);

export const AgentIncludeSchema = z
  .object({
    company: PZ.Scalar.bool().or(CompanyOwnQueryOneSchema),
    contacts: PZ.Scalar.bool().or(ContactOwnQuerySchema),
    title: PZ.Scalar.bool().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const AgentIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AgentIncludeSchema
);

export const AgentProjectionSchema = z.union([
  z.object({ omit: AgentOmitFieldsSchemaJson }),
  z.object({ select: AgentSelectFieldsSchemaJson }),
  z.object({ include: AgentIncludeSchemaJson }),
  z.object({}),
]);

export const ContactCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    agentId: PZ.Scalar.id(),
    type: ContactTypeSchema,
    order: PZ.Scalar.int().optional(),
  })
);

export const ContactUpdateSchema = z.object({
  agentId: PZ.Scalar.id().optional(),
  type: ContactTypeSchema.optional(),
  order: PZ.Scalar.int().optional().optional(),
});

export const ContactOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    agentId: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const ContactOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOrderBySchema
);

export const ContactWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    uuid: z.string().or(PZ.StringFilterSchema),
    agentId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    type: ContactTypeSchema,
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    emails: z
      .object({
        some: EmailOwnWhereSchema,
        every: EmailOwnWhereSchema,
        none: EmailOwnWhereSchema,
      })
      .partial(),
    phones: z
      .object({
        some: PhoneOwnWhereSchema,
        every: PhoneOwnWhereSchema,
        none: PhoneOwnWhereSchema,
      })
      .partial(),
    addresses: z
      .object({
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      })
      .partial(),
    websites: z
      .object({
        some: WebsiteOwnWhereSchema,
        every: WebsiteOwnWhereSchema,
        none: WebsiteOwnWhereSchema,
      })
      .partial(),
    agent: AgentOwnWhereSchema,
  })
  .partial();

export const ContactWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactWhereSchema
);

export const ContactSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    agentId: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    emails: PZ.Scalar.bool().or(EmailOwnQuerySchema),
    phones: PZ.Scalar.bool().or(PhoneOwnQuerySchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
    websites: PZ.Scalar.bool().or(WebsiteOwnQuerySchema),
    agent: PZ.Scalar.bool().or(AgentOwnQueryOneSchema),
  })
  .partial();

export const ContactSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactSelectFieldsSchema
);

export const ContactOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    uuid: PZ.Scalar.bool(),
    agentId: PZ.Scalar.bool(),
    type: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'uuid', 'agentId', 'type', 'order'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const ContactOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactOmitFieldsSchema
);

export const ContactIncludeSchema = z
  .object({
    emails: PZ.Scalar.bool().or(EmailOwnQuerySchema),
    phones: PZ.Scalar.bool().or(PhoneOwnQuerySchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
    websites: PZ.Scalar.bool().or(WebsiteOwnQuerySchema),
    agent: PZ.Scalar.bool().or(AgentOwnQueryOneSchema),
  })
  .partial();

export const ContactIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  ContactIncludeSchema
);

export const ContactProjectionSchema = z.union([
  z.object({ omit: ContactOmitFieldsSchemaJson }),
  z.object({ select: ContactSelectFieldsSchemaJson }),
  z.object({ include: ContactIncludeSchemaJson }),
  z.object({}),
]);

export const StateCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    countryId: PZ.Scalar.id(),
    state: PZ.Scalar.string(),
    code: PZ.Scalar.string(),
  })
);

export const StateUpdateSchema = z.object({
  countryId: PZ.Scalar.id().optional(),
  state: PZ.Scalar.string().optional(),
  code: PZ.Scalar.string().optional(),
});

export const StateOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    countryId: PZ.OrderDirectionSchema,
    state: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const StateOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOrderBySchema
);

export const StateWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    countryId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    state: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    country: CountryOwnWhereSchema,
    cities: z
      .object({
        some: CityOwnWhereSchema,
        every: CityOwnWhereSchema,
        none: CityOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const StateWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateWhereSchema
);

export const StateSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    countryId: PZ.Scalar.bool(),
    state: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    country: PZ.Scalar.bool().or(CountryOwnQueryOneSchema),
    cities: PZ.Scalar.bool().or(CityOwnQuerySchema),
  })
  .partial();

export const StateSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateSelectFieldsSchema
);

export const StateOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    countryId: PZ.Scalar.bool(),
    state: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'countryId', 'state', 'code'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const StateOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateOmitFieldsSchema
);

export const StateIncludeSchema = z
  .object({
    country: PZ.Scalar.bool().or(CountryOwnQueryOneSchema),
    cities: PZ.Scalar.bool().or(CityOwnQuerySchema),
  })
  .partial();

export const StateIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  StateIncludeSchema
);

export const StateProjectionSchema = z.union([
  z.object({ omit: StateOmitFieldsSchemaJson }),
  z.object({ select: StateSelectFieldsSchemaJson }),
  z.object({ include: StateIncludeSchemaJson }),
  z.object({}),
]);

export const CountryCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    name: PZ.Scalar.name(),
    code: PZ.Scalar.string(),
  })
);

export const CountryUpdateSchema = z.object({
  name: PZ.Scalar.name().optional(),
  code: PZ.Scalar.string().optional(),
});

export const CountryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CountryOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOrderBySchema
);

export const CountryWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    code: z.string().or(PZ.StringFilterSchema),
    states: z
      .object({
        some: StateOwnWhereSchema,
        every: StateOwnWhereSchema,
        none: StateOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CountryWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryWhereSchema
);

export const CountrySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
    states: PZ.Scalar.bool().or(StateOwnQuerySchema),
  })
  .partial();

export const CountrySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountrySelectFieldsSchema
);

export const CountryOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    code: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'name', 'code'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CountryOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryOmitFieldsSchema
);

export const CountryIncludeSchema = z
  .object({
    states: PZ.Scalar.bool().or(StateOwnQuerySchema),
  })
  .partial();

export const CountryIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CountryIncludeSchema
);

export const CountryProjectionSchema = z.union([
  z.object({ omit: CountryOmitFieldsSchemaJson }),
  z.object({ select: CountrySelectFieldsSchemaJson }),
  z.object({ include: CountryIncludeSchemaJson }),
  z.object({}),
]);

export const CityCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    stateId: PZ.Scalar.id(),
    name: PZ.Scalar.name(),
  })
);

export const CityUpdateSchema = z.object({
  stateId: PZ.Scalar.id().optional(),
  name: PZ.Scalar.name().optional(),
});

export const CityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    stateId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const CityOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CityOrderBySchema
);

export const CityWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    stateId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    state: StateOwnWhereSchema,
    addresses: z
      .object({
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CityWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CityWhereSchema
);

export const CitySelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    stateId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
    state: PZ.Scalar.bool().or(StateOwnQueryOneSchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
  })
  .partial();

export const CitySelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CitySelectFieldsSchema
);

export const CityOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    stateId: PZ.Scalar.bool(),
    name: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) => !['id', 'stateId', 'name'].every((e) => Object.hasOwn(value, e)),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const CityOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CityOmitFieldsSchema
);

export const CityIncludeSchema = z
  .object({
    state: PZ.Scalar.bool().or(StateOwnQueryOneSchema),
    addresses: PZ.Scalar.bool().or(AddressOwnQuerySchema),
  })
  .partial();

export const CityIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  CityIncludeSchema
);

export const CityProjectionSchema = z.union([
  z.object({ omit: CityOmitFieldsSchemaJson }),
  z.object({ select: CitySelectFieldsSchemaJson }),
  z.object({ include: CityIncludeSchemaJson }),
  z.object({}),
]);

export const AddressCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    contactId: PZ.Scalar.id(),
    cityId: PZ.Scalar.id(),
    street: PZ.Scalar.string(),
    zip: PZ.Scalar.string(),
    order: PZ.Scalar.int().optional(),
  })
);

export const AddressUpdateSchema = z.object({
  contactId: PZ.Scalar.id().optional(),
  cityId: PZ.Scalar.id().optional(),
  street: PZ.Scalar.string().optional(),
  zip: PZ.Scalar.string().optional(),
  order: PZ.Scalar.int().optional().optional(),
});

export const AddressOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    cityId: PZ.OrderDirectionSchema,
    street: PZ.OrderDirectionSchema,
    zip: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const AddressOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOrderBySchema
);

export const AddressWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    cityId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    street: z.string().or(PZ.StringFilterSchema),
    zip: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    city: CityOwnWhereSchema,
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const AddressWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressWhereSchema
);

export const AddressSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    cityId: PZ.Scalar.bool(),
    street: PZ.Scalar.bool(),
    zip: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    city: PZ.Scalar.bool().or(CityOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const AddressSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressSelectFieldsSchema
);

export const AddressOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    cityId: PZ.Scalar.bool(),
    street: PZ.Scalar.bool(),
    zip: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'contactId', 'cityId', 'street', 'zip', 'order'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const AddressOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressOmitFieldsSchema
);

export const AddressIncludeSchema = z
  .object({
    city: PZ.Scalar.bool().or(CityOwnQueryOneSchema),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const AddressIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  AddressIncludeSchema
);

export const AddressProjectionSchema = z.union([
  z.object({ omit: AddressOmitFieldsSchemaJson }),
  z.object({ select: AddressSelectFieldsSchemaJson }),
  z.object({ include: AddressIncludeSchemaJson }),
  z.object({}),
]);

export const EmailCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    contactId: PZ.Scalar.id(),
    email: PZ.Scalar.email(),
    order: PZ.Scalar.int().optional(),
  })
);

export const EmailUpdateSchema = z.object({
  contactId: PZ.Scalar.id().optional(),
  email: PZ.Scalar.email().optional(),
  order: PZ.Scalar.int().optional().optional(),
});

export const EmailOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    email: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const EmailOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOrderBySchema
);

export const EmailWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    email: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const EmailWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailWhereSchema
);

export const EmailSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmailSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailSelectFieldsSchema
);

export const EmailOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    email: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'contactId', 'email', 'order'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const EmailOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailOmitFieldsSchema
);

export const EmailIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmailIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  EmailIncludeSchema
);

export const EmailProjectionSchema = z.union([
  z.object({ omit: EmailOmitFieldsSchemaJson }),
  z.object({ select: EmailSelectFieldsSchemaJson }),
  z.object({ include: EmailIncludeSchemaJson }),
  z.object({}),
]);

export const PhoneCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    contactId: PZ.Scalar.id(),
    phone: PZ.Scalar.string(),
    order: PZ.Scalar.int().optional(),
  })
);

export const PhoneUpdateSchema = z.object({
  contactId: PZ.Scalar.id().optional(),
  phone: PZ.Scalar.string().optional(),
  order: PZ.Scalar.int().optional().optional(),
});

export const PhoneOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    phone: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const PhoneOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOrderBySchema
);

export const PhoneWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    phone: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const PhoneWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneWhereSchema
);

export const PhoneSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PhoneSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneSelectFieldsSchema
);

export const PhoneOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    phone: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'contactId', 'phone', 'order'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const PhoneOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneOmitFieldsSchema
);

export const PhoneIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PhoneIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  PhoneIncludeSchema
);

export const PhoneProjectionSchema = z.union([
  z.object({ omit: PhoneOmitFieldsSchemaJson }),
  z.object({ select: PhoneSelectFieldsSchemaJson }),
  z.object({ include: PhoneIncludeSchemaJson }),
  z.object({}),
]);

export const WebsiteCreateSchema = z.preprocess(
  (value) => value,
  z.object({
    contactId: PZ.Scalar.id(),
    url: PZ.Scalar.string(),
    order: PZ.Scalar.int().optional(),
  })
);

export const WebsiteUpdateSchema = z.object({
  contactId: PZ.Scalar.id().optional(),
  url: PZ.Scalar.string().optional(),
  order: PZ.Scalar.int().optional().optional(),
});

export const WebsiteOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    url: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial()
  .refine(
    (value) => typeof value === 'object' && Object.keys(value).length === 1
  )
  .array();

export const WebsiteOrderBySchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteOrderBySchema
);

export const WebsiteWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contactId: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    url: z.string().or(PZ.StringFilterSchema),
    order: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    contact: ContactOwnWhereSchema,
  })
  .partial();

export const WebsiteWhereSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteWhereSchema
);

export const WebsiteSelectFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    url: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const WebsiteSelectFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteSelectFieldsSchema
);

export const WebsiteOmitFieldsSchema = z
  .object({
    id: PZ.Scalar.bool(),
    contactId: PZ.Scalar.bool(),
    url: PZ.Scalar.bool(),
    order: PZ.Scalar.bool(),
  })
  .partial()
  .refine(
    (value) =>
      !['id', 'contactId', 'url', 'order'].every((e) =>
        Object.hasOwn(value, e)
      ),
    { message: 'Cannot omit all fields', path: ['omit'] }
  );

export const WebsiteOmitFieldsSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteOmitFieldsSchema
);

export const WebsiteIncludeSchema = z
  .object({
    contact: PZ.Scalar.bool().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const WebsiteIncludeSchemaJson = z.preprocess(
  PZ.jsonPreprocessor,
  WebsiteIncludeSchema
);

export const WebsiteProjectionSchema = z.union([
  z.object({ omit: WebsiteOmitFieldsSchemaJson }),
  z.object({ select: WebsiteSelectFieldsSchemaJson }),
  z.object({ include: WebsiteIncludeSchemaJson }),
  z.object({}),
]);

export const IndustryQueryOneSchema = z
  .object({
    where: IndustryWhereSchemaJson,
    distinct: IndustryDistinctFieldsSchema,
  })
  .partial();

export const IndustryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: IndustryWhereSchemaJson,
    distinct: IndustryDistinctFieldsSchema,
    orderBy: IndustryOrderBySchemaJson,
  })
  .partial();

export type IndustryCreate = z.infer<typeof IndustryCreateSchema>;

export type IndustryUpdate = z.infer<typeof IndustryUpdateSchema>;

export type IndustryOrderBy = z.infer<typeof IndustryOrderBySchema>;

export type IndustryOwnSelectFields = z.infer<
  typeof IndustryOwnSelectFieldsSchema
>;

export type IndustryOwnWhere = z.infer<typeof IndustryOwnWhereSchema>;

export type IndustryOwnQuery = z.infer<typeof IndustryOwnQuerySchema>;

export type IndustryOwnQueryOne = z.infer<typeof IndustryOwnQueryOneSchema>;

export type IndustryWhere = z.infer<typeof IndustryWhereSchema>;

export type IndustryInclude = z.infer<typeof IndustryIncludeSchema>;

export type IndustryQueryOne = z.infer<typeof IndustryQueryOneSchema>;

export type IndustryQuery = z.infer<typeof IndustryQuerySchema>;

export type IndustryOmitFields = z.infer<typeof IndustryOmitFieldsSchema>;

export type IndustrySelectFields = z.infer<typeof IndustrySelectFieldsSchema>;

export type IndustryProjection = z.infer<typeof IndustryProjectionSchema>;

export const CompanyQueryOneSchema = z
  .object({
    where: CompanyWhereSchemaJson,
    distinct: CompanyDistinctFieldsSchema,
  })
  .partial();

export const CompanyQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CompanyWhereSchemaJson,
    distinct: CompanyDistinctFieldsSchema,
    orderBy: CompanyOrderBySchemaJson,
  })
  .partial();

export type CompanyCreate = z.infer<typeof CompanyCreateSchema>;

export type CompanyUpdate = z.infer<typeof CompanyUpdateSchema>;

export type CompanyOrderBy = z.infer<typeof CompanyOrderBySchema>;

export type CompanyOwnSelectFields = z.infer<
  typeof CompanyOwnSelectFieldsSchema
>;

export type CompanyOwnWhere = z.infer<typeof CompanyOwnWhereSchema>;

export type CompanyOwnQuery = z.infer<typeof CompanyOwnQuerySchema>;

export type CompanyOwnQueryOne = z.infer<typeof CompanyOwnQueryOneSchema>;

export type CompanyWhere = z.infer<typeof CompanyWhereSchema>;

export type CompanyInclude = z.infer<typeof CompanyIncludeSchema>;

export type CompanyQueryOne = z.infer<typeof CompanyQueryOneSchema>;

export type CompanyQuery = z.infer<typeof CompanyQuerySchema>;

export type CompanyOmitFields = z.infer<typeof CompanyOmitFieldsSchema>;

export type CompanySelectFields = z.infer<typeof CompanySelectFieldsSchema>;

export type CompanyProjection = z.infer<typeof CompanyProjectionSchema>;

export const CompanyIndustryQueryOneSchema = z
  .object({
    where: CompanyIndustryWhereSchemaJson,
    distinct: CompanyIndustryDistinctFieldsSchema,
  })
  .partial();

export const CompanyIndustryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CompanyIndustryWhereSchemaJson,
    distinct: CompanyIndustryDistinctFieldsSchema,
    orderBy: CompanyIndustryOrderBySchemaJson,
  })
  .partial();

export type CompanyIndustryCreate = z.infer<typeof CompanyIndustryCreateSchema>;

export type CompanyIndustryUpdate = z.infer<typeof CompanyIndustryUpdateSchema>;

export type CompanyIndustryOrderBy = z.infer<
  typeof CompanyIndustryOrderBySchema
>;

export type CompanyIndustryOwnSelectFields = z.infer<
  typeof CompanyIndustryOwnSelectFieldsSchema
>;

export type CompanyIndustryOwnWhere = z.infer<
  typeof CompanyIndustryOwnWhereSchema
>;

export type CompanyIndustryOwnQuery = z.infer<
  typeof CompanyIndustryOwnQuerySchema
>;

export type CompanyIndustryOwnQueryOne = z.infer<
  typeof CompanyIndustryOwnQueryOneSchema
>;

export type CompanyIndustryWhere = z.infer<typeof CompanyIndustryWhereSchema>;

export type CompanyIndustryInclude = z.infer<
  typeof CompanyIndustryIncludeSchema
>;

export type CompanyIndustryQueryOne = z.infer<
  typeof CompanyIndustryQueryOneSchema
>;

export type CompanyIndustryQuery = z.infer<typeof CompanyIndustryQuerySchema>;

export type CompanyIndustryOmitFields = z.infer<
  typeof CompanyIndustryOmitFieldsSchema
>;

export type CompanyIndustrySelectFields = z.infer<
  typeof CompanyIndustrySelectFieldsSchema
>;

export type CompanyIndustryProjection = z.infer<
  typeof CompanyIndustryProjectionSchema
>;

export const DepartmentQueryOneSchema = z
  .object({
    where: DepartmentWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
  })
  .partial();

export const DepartmentQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: DepartmentWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
    orderBy: DepartmentOrderBySchemaJson,
  })
  .partial();

export type DepartmentCreate = z.infer<typeof DepartmentCreateSchema>;

export type DepartmentUpdate = z.infer<typeof DepartmentUpdateSchema>;

export type DepartmentOrderBy = z.infer<typeof DepartmentOrderBySchema>;

export type DepartmentOwnSelectFields = z.infer<
  typeof DepartmentOwnSelectFieldsSchema
>;

export type DepartmentOwnWhere = z.infer<typeof DepartmentOwnWhereSchema>;

export type DepartmentOwnQuery = z.infer<typeof DepartmentOwnQuerySchema>;

export type DepartmentOwnQueryOne = z.infer<typeof DepartmentOwnQueryOneSchema>;

export type DepartmentWhere = z.infer<typeof DepartmentWhereSchema>;

export type DepartmentInclude = z.infer<typeof DepartmentIncludeSchema>;

export type DepartmentQueryOne = z.infer<typeof DepartmentQueryOneSchema>;

export type DepartmentQuery = z.infer<typeof DepartmentQuerySchema>;

export type DepartmentOmitFields = z.infer<typeof DepartmentOmitFieldsSchema>;

export type DepartmentSelectFields = z.infer<
  typeof DepartmentSelectFieldsSchema
>;

export type DepartmentProjection = z.infer<typeof DepartmentProjectionSchema>;

export const TitleQueryOneSchema = z
  .object({
    where: TitleWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
  })
  .partial();

export const TitleQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: TitleWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
    orderBy: TitleOrderBySchemaJson,
  })
  .partial();

export type TitleCreate = z.infer<typeof TitleCreateSchema>;

export type TitleUpdate = z.infer<typeof TitleUpdateSchema>;

export type TitleOrderBy = z.infer<typeof TitleOrderBySchema>;

export type TitleOwnSelectFields = z.infer<typeof TitleOwnSelectFieldsSchema>;

export type TitleOwnWhere = z.infer<typeof TitleOwnWhereSchema>;

export type TitleOwnQuery = z.infer<typeof TitleOwnQuerySchema>;

export type TitleOwnQueryOne = z.infer<typeof TitleOwnQueryOneSchema>;

export type TitleWhere = z.infer<typeof TitleWhereSchema>;

export type TitleInclude = z.infer<typeof TitleIncludeSchema>;

export type TitleQueryOne = z.infer<typeof TitleQueryOneSchema>;

export type TitleQuery = z.infer<typeof TitleQuerySchema>;

export type TitleOmitFields = z.infer<typeof TitleOmitFieldsSchema>;

export type TitleSelectFields = z.infer<typeof TitleSelectFieldsSchema>;

export type TitleProjection = z.infer<typeof TitleProjectionSchema>;

export const AgentQueryOneSchema = z
  .object({
    where: AgentWhereSchemaJson,
    distinct: AgentDistinctFieldsSchema,
  })
  .partial();

export const AgentQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AgentWhereSchemaJson,
    distinct: AgentDistinctFieldsSchema,
    orderBy: AgentOrderBySchemaJson,
  })
  .partial();

export type AgentCreate = z.infer<typeof AgentCreateSchema>;

export type AgentUpdate = z.infer<typeof AgentUpdateSchema>;

export type AgentOrderBy = z.infer<typeof AgentOrderBySchema>;

export type AgentOwnSelectFields = z.infer<typeof AgentOwnSelectFieldsSchema>;

export type AgentOwnWhere = z.infer<typeof AgentOwnWhereSchema>;

export type AgentOwnQuery = z.infer<typeof AgentOwnQuerySchema>;

export type AgentOwnQueryOne = z.infer<typeof AgentOwnQueryOneSchema>;

export type AgentWhere = z.infer<typeof AgentWhereSchema>;

export type AgentInclude = z.infer<typeof AgentIncludeSchema>;

export type AgentQueryOne = z.infer<typeof AgentQueryOneSchema>;

export type AgentQuery = z.infer<typeof AgentQuerySchema>;

export type AgentOmitFields = z.infer<typeof AgentOmitFieldsSchema>;

export type AgentSelectFields = z.infer<typeof AgentSelectFieldsSchema>;

export type AgentProjection = z.infer<typeof AgentProjectionSchema>;

export const ContactQueryOneSchema = z
  .object({
    where: ContactWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
  })
  .partial();

export const ContactQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: ContactWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
    orderBy: ContactOrderBySchemaJson,
  })
  .partial();

export type ContactCreate = z.infer<typeof ContactCreateSchema>;

export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;

export type ContactOrderBy = z.infer<typeof ContactOrderBySchema>;

export type ContactOwnSelectFields = z.infer<
  typeof ContactOwnSelectFieldsSchema
>;

export type ContactOwnWhere = z.infer<typeof ContactOwnWhereSchema>;

export type ContactOwnQuery = z.infer<typeof ContactOwnQuerySchema>;

export type ContactOwnQueryOne = z.infer<typeof ContactOwnQueryOneSchema>;

export type ContactWhere = z.infer<typeof ContactWhereSchema>;

export type ContactInclude = z.infer<typeof ContactIncludeSchema>;

export type ContactQueryOne = z.infer<typeof ContactQueryOneSchema>;

export type ContactQuery = z.infer<typeof ContactQuerySchema>;

export type ContactOmitFields = z.infer<typeof ContactOmitFieldsSchema>;

export type ContactSelectFields = z.infer<typeof ContactSelectFieldsSchema>;

export type ContactProjection = z.infer<typeof ContactProjectionSchema>;

export const StateQueryOneSchema = z
  .object({
    where: StateWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
  })
  .partial();

export const StateQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: StateWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
    orderBy: StateOrderBySchemaJson,
  })
  .partial();

export type StateCreate = z.infer<typeof StateCreateSchema>;

export type StateUpdate = z.infer<typeof StateUpdateSchema>;

export type StateOrderBy = z.infer<typeof StateOrderBySchema>;

export type StateOwnSelectFields = z.infer<typeof StateOwnSelectFieldsSchema>;

export type StateOwnWhere = z.infer<typeof StateOwnWhereSchema>;

export type StateOwnQuery = z.infer<typeof StateOwnQuerySchema>;

export type StateOwnQueryOne = z.infer<typeof StateOwnQueryOneSchema>;

export type StateWhere = z.infer<typeof StateWhereSchema>;

export type StateInclude = z.infer<typeof StateIncludeSchema>;

export type StateQueryOne = z.infer<typeof StateQueryOneSchema>;

export type StateQuery = z.infer<typeof StateQuerySchema>;

export type StateOmitFields = z.infer<typeof StateOmitFieldsSchema>;

export type StateSelectFields = z.infer<typeof StateSelectFieldsSchema>;

export type StateProjection = z.infer<typeof StateProjectionSchema>;

export const CountryQueryOneSchema = z
  .object({
    where: CountryWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
  })
  .partial();

export const CountryQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CountryWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
    orderBy: CountryOrderBySchemaJson,
  })
  .partial();

export type CountryCreate = z.infer<typeof CountryCreateSchema>;

export type CountryUpdate = z.infer<typeof CountryUpdateSchema>;

export type CountryOrderBy = z.infer<typeof CountryOrderBySchema>;

export type CountryOwnSelectFields = z.infer<
  typeof CountryOwnSelectFieldsSchema
>;

export type CountryOwnWhere = z.infer<typeof CountryOwnWhereSchema>;

export type CountryOwnQuery = z.infer<typeof CountryOwnQuerySchema>;

export type CountryOwnQueryOne = z.infer<typeof CountryOwnQueryOneSchema>;

export type CountryWhere = z.infer<typeof CountryWhereSchema>;

export type CountryInclude = z.infer<typeof CountryIncludeSchema>;

export type CountryQueryOne = z.infer<typeof CountryQueryOneSchema>;

export type CountryQuery = z.infer<typeof CountryQuerySchema>;

export type CountryOmitFields = z.infer<typeof CountryOmitFieldsSchema>;

export type CountrySelectFields = z.infer<typeof CountrySelectFieldsSchema>;

export type CountryProjection = z.infer<typeof CountryProjectionSchema>;

export const CityQueryOneSchema = z
  .object({
    where: CityWhereSchemaJson,
    distinct: CityDistinctFieldsSchema,
  })
  .partial();

export const CityQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: CityWhereSchemaJson,
    distinct: CityDistinctFieldsSchema,
    orderBy: CityOrderBySchemaJson,
  })
  .partial();

export type CityCreate = z.infer<typeof CityCreateSchema>;

export type CityUpdate = z.infer<typeof CityUpdateSchema>;

export type CityOrderBy = z.infer<typeof CityOrderBySchema>;

export type CityOwnSelectFields = z.infer<typeof CityOwnSelectFieldsSchema>;

export type CityOwnWhere = z.infer<typeof CityOwnWhereSchema>;

export type CityOwnQuery = z.infer<typeof CityOwnQuerySchema>;

export type CityOwnQueryOne = z.infer<typeof CityOwnQueryOneSchema>;

export type CityWhere = z.infer<typeof CityWhereSchema>;

export type CityInclude = z.infer<typeof CityIncludeSchema>;

export type CityQueryOne = z.infer<typeof CityQueryOneSchema>;

export type CityQuery = z.infer<typeof CityQuerySchema>;

export type CityOmitFields = z.infer<typeof CityOmitFieldsSchema>;

export type CitySelectFields = z.infer<typeof CitySelectFieldsSchema>;

export type CityProjection = z.infer<typeof CityProjectionSchema>;

export const AddressQueryOneSchema = z
  .object({
    where: AddressWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
  })
  .partial();

export const AddressQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: AddressWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
    orderBy: AddressOrderBySchemaJson,
  })
  .partial();

export type AddressCreate = z.infer<typeof AddressCreateSchema>;

export type AddressUpdate = z.infer<typeof AddressUpdateSchema>;

export type AddressOrderBy = z.infer<typeof AddressOrderBySchema>;

export type AddressOwnSelectFields = z.infer<
  typeof AddressOwnSelectFieldsSchema
>;

export type AddressOwnWhere = z.infer<typeof AddressOwnWhereSchema>;

export type AddressOwnQuery = z.infer<typeof AddressOwnQuerySchema>;

export type AddressOwnQueryOne = z.infer<typeof AddressOwnQueryOneSchema>;

export type AddressWhere = z.infer<typeof AddressWhereSchema>;

export type AddressInclude = z.infer<typeof AddressIncludeSchema>;

export type AddressQueryOne = z.infer<typeof AddressQueryOneSchema>;

export type AddressQuery = z.infer<typeof AddressQuerySchema>;

export type AddressOmitFields = z.infer<typeof AddressOmitFieldsSchema>;

export type AddressSelectFields = z.infer<typeof AddressSelectFieldsSchema>;

export type AddressProjection = z.infer<typeof AddressProjectionSchema>;

export const EmailQueryOneSchema = z
  .object({
    where: EmailWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
  })
  .partial();

export const EmailQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: EmailWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
    orderBy: EmailOrderBySchemaJson,
  })
  .partial();

export type EmailCreate = z.infer<typeof EmailCreateSchema>;

export type EmailUpdate = z.infer<typeof EmailUpdateSchema>;

export type EmailOrderBy = z.infer<typeof EmailOrderBySchema>;

export type EmailOwnSelectFields = z.infer<typeof EmailOwnSelectFieldsSchema>;

export type EmailOwnWhere = z.infer<typeof EmailOwnWhereSchema>;

export type EmailOwnQuery = z.infer<typeof EmailOwnQuerySchema>;

export type EmailOwnQueryOne = z.infer<typeof EmailOwnQueryOneSchema>;

export type EmailWhere = z.infer<typeof EmailWhereSchema>;

export type EmailInclude = z.infer<typeof EmailIncludeSchema>;

export type EmailQueryOne = z.infer<typeof EmailQueryOneSchema>;

export type EmailQuery = z.infer<typeof EmailQuerySchema>;

export type EmailOmitFields = z.infer<typeof EmailOmitFieldsSchema>;

export type EmailSelectFields = z.infer<typeof EmailSelectFieldsSchema>;

export type EmailProjection = z.infer<typeof EmailProjectionSchema>;

export const PhoneQueryOneSchema = z
  .object({
    where: PhoneWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
  })
  .partial();

export const PhoneQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: PhoneWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
    orderBy: PhoneOrderBySchemaJson,
  })
  .partial();

export type PhoneCreate = z.infer<typeof PhoneCreateSchema>;

export type PhoneUpdate = z.infer<typeof PhoneUpdateSchema>;

export type PhoneOrderBy = z.infer<typeof PhoneOrderBySchema>;

export type PhoneOwnSelectFields = z.infer<typeof PhoneOwnSelectFieldsSchema>;

export type PhoneOwnWhere = z.infer<typeof PhoneOwnWhereSchema>;

export type PhoneOwnQuery = z.infer<typeof PhoneOwnQuerySchema>;

export type PhoneOwnQueryOne = z.infer<typeof PhoneOwnQueryOneSchema>;

export type PhoneWhere = z.infer<typeof PhoneWhereSchema>;

export type PhoneInclude = z.infer<typeof PhoneIncludeSchema>;

export type PhoneQueryOne = z.infer<typeof PhoneQueryOneSchema>;

export type PhoneQuery = z.infer<typeof PhoneQuerySchema>;

export type PhoneOmitFields = z.infer<typeof PhoneOmitFieldsSchema>;

export type PhoneSelectFields = z.infer<typeof PhoneSelectFieldsSchema>;

export type PhoneProjection = z.infer<typeof PhoneProjectionSchema>;

export const WebsiteQueryOneSchema = z
  .object({
    where: WebsiteWhereSchemaJson,
    distinct: WebsiteDistinctFieldsSchema,
  })
  .partial();

export const WebsiteQuerySchema = z
  .object({
    ...PaginationSchema.shape,
    where: WebsiteWhereSchemaJson,
    distinct: WebsiteDistinctFieldsSchema,
    orderBy: WebsiteOrderBySchemaJson,
  })
  .partial();

export type WebsiteCreate = z.infer<typeof WebsiteCreateSchema>;

export type WebsiteUpdate = z.infer<typeof WebsiteUpdateSchema>;

export type WebsiteOrderBy = z.infer<typeof WebsiteOrderBySchema>;

export type WebsiteOwnSelectFields = z.infer<
  typeof WebsiteOwnSelectFieldsSchema
>;

export type WebsiteOwnWhere = z.infer<typeof WebsiteOwnWhereSchema>;

export type WebsiteOwnQuery = z.infer<typeof WebsiteOwnQuerySchema>;

export type WebsiteOwnQueryOne = z.infer<typeof WebsiteOwnQueryOneSchema>;

export type WebsiteWhere = z.infer<typeof WebsiteWhereSchema>;

export type WebsiteInclude = z.infer<typeof WebsiteIncludeSchema>;

export type WebsiteQueryOne = z.infer<typeof WebsiteQueryOneSchema>;

export type WebsiteQuery = z.infer<typeof WebsiteQuerySchema>;

export type WebsiteOmitFields = z.infer<typeof WebsiteOmitFieldsSchema>;

export type WebsiteSelectFields = z.infer<typeof WebsiteSelectFieldsSchema>;

export type WebsiteProjection = z.infer<typeof WebsiteProjectionSchema>;
