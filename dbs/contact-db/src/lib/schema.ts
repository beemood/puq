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

export const ContactTypeSchema = z.enum(['WORK', 'HOME', 'EMERGENCY']);

export const GenderSchema = z.enum(['MALE', 'FEMALE']);

export const IndustryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    companies: z.boolean(),
  })
  .partial();

export const IndustryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  IndustryOwnSelectFieldsSchema
);

export const IndustryDistinctFieldsSchema = z.enum([
  'id',
  'name',
  'slug',
  'description',
  'companies',
]);

export const CompanyOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    agents: z.boolean(),
    industries: z.boolean(),
  })
  .partial();

export const CompanyOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CompanyOwnSelectFieldsSchema
);

export const CompanyDistinctFieldsSchema = z.enum([
  'id',
  'uuid',
  'name',
  'slug',
  'agents',
  'industries',
]);

export const CompanyIndustryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    companyId: z.boolean(),
    industryId: z.boolean(),
    industry: z.boolean(),
    company: z.boolean(),
  })
  .partial();

export const CompanyIndustryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CompanyIndustryOwnSelectFieldsSchema
);

export const CompanyIndustryDistinctFieldsSchema = z.enum([
  'id',
  'companyId',
  'industryId',
  'industry',
  'company',
]);

export const DepartmentOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    parent: z.boolean(),
    children: z.boolean(),
    titles: z.boolean(),
  })
  .partial();

export const DepartmentOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DepartmentOwnSelectFieldsSchema
);

export const DepartmentDistinctFieldsSchema = z.enum([
  'id',
  'parentId',
  'name',
  'slug',
  'parent',
  'children',
  'titles',
]);

export const TitleOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    departmentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    agents: z.boolean(),
    department: z.boolean(),
  })
  .partial();

export const TitleOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TitleOwnSelectFieldsSchema
);

export const TitleDistinctFieldsSchema = z.enum([
  'id',
  'departmentId',
  'name',
  'slug',
  'description',
  'agents',
  'department',
]);

export const AgentOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    companyId: z.boolean(),
    titleId: z.boolean(),
    firstName: z.boolean(),
    middleName: z.boolean(),
    lastName: z.boolean(),
    preferedName: z.boolean(),
    gender: z.boolean(),
    slug: z.boolean(),
    note: z.boolean(),
    company: z.boolean(),
    contacts: z.boolean(),
    title: z.boolean(),
  })
  .partial();

export const AgentOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AgentOwnSelectFieldsSchema
);

export const AgentDistinctFieldsSchema = z.enum([
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
  'company',
  'contacts',
  'title',
]);

export const ContactOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    agentId: z.boolean(),
    type: z.boolean(),
    order: z.boolean(),
    emails: z.boolean(),
    phones: z.boolean(),
    addresses: z.boolean(),
    websites: z.boolean(),
    agent: z.boolean(),
  })
  .partial();

export const ContactOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ContactOwnSelectFieldsSchema
);

export const ContactDistinctFieldsSchema = z.enum([
  'id',
  'uuid',
  'agentId',
  'type',
  'order',
  'emails',
  'phones',
  'addresses',
  'websites',
  'agent',
]);

export const StateOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    state: z.boolean(),
    code: z.boolean(),
    country: z.boolean(),
    cities: z.boolean(),
  })
  .partial();

export const StateOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StateOwnSelectFieldsSchema
);

export const StateDistinctFieldsSchema = z.enum([
  'id',
  'countryId',
  'state',
  'code',
  'country',
  'cities',
]);

export const CountryOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean(),
  })
  .partial();

export const CountryOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CountryOwnSelectFieldsSchema
);

export const CountryDistinctFieldsSchema = z.enum([
  'id',
  'name',
  'code',
  'states',
]);

export const CityOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    stateId: z.boolean(),
    name: z.boolean(),
    state: z.boolean(),
    addresses: z.boolean(),
  })
  .partial();

export const CityOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CityOwnSelectFieldsSchema
);

export const CityDistinctFieldsSchema = z.enum([
  'id',
  'stateId',
  'name',
  'state',
  'addresses',
]);

export const AddressOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    cityId: z.boolean(),
    street: z.boolean(),
    zip: z.boolean(),
    order: z.boolean(),
    city: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const AddressOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AddressOwnSelectFieldsSchema
);

export const AddressDistinctFieldsSchema = z.enum([
  'id',
  'contactId',
  'cityId',
  'street',
  'zip',
  'order',
  'city',
  'contact',
]);

export const EmailOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    order: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const EmailOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmailOwnSelectFieldsSchema
);

export const EmailDistinctFieldsSchema = z.enum([
  'id',
  'contactId',
  'email',
  'order',
  'contact',
]);

export const PhoneOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    order: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PhoneOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PhoneOwnSelectFieldsSchema
);

export const PhoneDistinctFieldsSchema = z.enum([
  'id',
  'contactId',
  'phone',
  'order',
  'contact',
]);

export const WebsiteOwnSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    url: z.boolean(),
    order: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const WebsiteOwnSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  WebsiteOwnSelectFieldsSchema
);

export const WebsiteDistinctFieldsSchema = z.enum([
  'id',
  'contactId',
  'url',
  'order',
  'contact',
]);

export const IndustryOwnWhereSchema = z
  .object({
    id: z.coerce.number().int().or(PZ.IntegerFilterSchema),
    name: z.string().or(PZ.StringFilterSchema),
    slug: z.string().or(PZ.StringFilterSchema),
    description: z.string().or(PZ.StringFilterSchema),
  })
  .partial();

export const IndustryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
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
  jsonParser,
  WebsiteOwnWhereSchema
);

export const IndustryOwnIncludeSchema = z
  .object({
    companies: z.boolean(),
  })
  .partial();

export const IndustryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    agents: z.boolean(),
    industries: z.boolean(),
  })
  .partial();

export const CompanyOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    industry: z.boolean(),
    company: z.boolean(),
  })
  .partial();

export const CompanyIndustryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    parent: z.boolean(),
    children: z.boolean(),
    titles: z.boolean(),
  })
  .partial();

export const DepartmentOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    agents: z.boolean(),
    department: z.boolean(),
  })
  .partial();

export const TitleOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    company: z.boolean(),
    contacts: z.boolean(),
    title: z.boolean(),
  })
  .partial();

export const AgentOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    emails: z.boolean(),
    phones: z.boolean(),
    addresses: z.boolean(),
    websites: z.boolean(),
    agent: z.boolean(),
  })
  .partial();

export const ContactOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    country: z.boolean(),
    cities: z.boolean(),
  })
  .partial();

export const StateOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    states: z.boolean(),
  })
  .partial();

export const CountryOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    state: z.boolean(),
    addresses: z.boolean(),
  })
  .partial();

export const CityOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    city: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const AddressOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    contact: z.boolean(),
  })
  .partial();

export const EmailOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    contact: z.boolean(),
  })
  .partial();

export const PhoneOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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
    contact: z.boolean(),
  })
  .partial();

export const WebsiteOwnIncludeSchemaJson = z.preprocess(
  jsonParser,
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

export const IndustryCreateSchema = z
  .object({
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const IndustryUpdateSchema = z
  .object({
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const IndustryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const IndustryOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  IndustryWhereSchema
);

export const IndustrySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    companies: z.boolean().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const IndustrySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  IndustrySelectFieldsSchema
);

export const IndustryIncludeSchema = z
  .object({
    companies: z.boolean().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const IndustryIncludeSchemaJson = z.preprocess(
  jsonParser,
  IndustryIncludeSchema
);

export const IndustryProjectionSchema = z.union([
  z
    .object({
      omit: IndustrySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: IndustrySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: IndustryIncludeSchemaJson,
    })
    .optional(),
]);

export const CompanyCreateSchema = z
  .object({
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const CompanyUpdateSchema = z
  .object({
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const CompanyOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial();

export const CompanyOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  CompanyWhereSchema
);

export const CompanySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    agents: z.boolean().or(AgentOwnQuerySchema),
    industries: z.boolean().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const CompanySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CompanySelectFieldsSchema
);

export const CompanyIncludeSchema = z
  .object({
    agents: z.boolean().or(AgentOwnQuerySchema),
    industries: z.boolean().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const CompanyIncludeSchemaJson = z.preprocess(
  jsonParser,
  CompanyIncludeSchema
);

export const CompanyProjectionSchema = z.union([
  z
    .object({
      omit: CompanySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: CompanySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: CompanyIncludeSchemaJson,
    })
    .optional(),
]);

export const CompanyIndustryCreateSchema = z.object({
  companyId: z.coerce.number().int(),
  industryId: z.coerce.number().int(),
});

export const CompanyIndustryUpdateSchema = z.object({
  companyId: z.coerce.number().int().optional(),
  industryId: z.coerce.number().int().optional(),
});

export const CompanyIndustryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    companyId: PZ.OrderDirectionSchema,
    industryId: PZ.OrderDirectionSchema,
  })
  .partial();

export const CompanyIndustryOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  CompanyIndustryWhereSchema
);

export const CompanyIndustrySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    companyId: z.boolean(),
    industryId: z.boolean(),
    industry: z.boolean().or(IndustryOwnQueryOneSchema),
    company: z.boolean().or(CompanyOwnQueryOneSchema),
  })
  .partial();

export const CompanyIndustrySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CompanyIndustrySelectFieldsSchema
);

export const CompanyIndustryIncludeSchema = z
  .object({
    industry: z.boolean().or(IndustryOwnQueryOneSchema),
    company: z.boolean().or(CompanyOwnQueryOneSchema),
  })
  .partial();

export const CompanyIndustryIncludeSchemaJson = z.preprocess(
  jsonParser,
  CompanyIndustryIncludeSchema
);

export const CompanyIndustryProjectionSchema = z.union([
  z
    .object({
      omit: CompanyIndustrySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: CompanyIndustrySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: CompanyIndustryIncludeSchemaJson,
    })
    .optional(),
]);

export const DepartmentCreateSchema = z
  .object({
    parentId: z.coerce.number().int().optional(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const DepartmentUpdateSchema = z
  .object({
    parentId: z.coerce.number().int().optional().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const DepartmentOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    parentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
  })
  .partial();

export const DepartmentOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  DepartmentWhereSchema
);

export const DepartmentSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    parentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    parent: z.boolean().or(DepartmentOwnQueryOneSchema),
    children: z.boolean().or(DepartmentOwnQuerySchema),
    titles: z.boolean().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  DepartmentSelectFieldsSchema
);

export const DepartmentIncludeSchema = z
  .object({
    parent: z.boolean().or(DepartmentOwnQueryOneSchema),
    children: z.boolean().or(DepartmentOwnQuerySchema),
    titles: z.boolean().or(TitleOwnQuerySchema),
  })
  .partial();

export const DepartmentIncludeSchemaJson = z.preprocess(
  jsonParser,
  DepartmentIncludeSchema
);

export const DepartmentProjectionSchema = z.union([
  z
    .object({
      omit: DepartmentSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: DepartmentSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: DepartmentIncludeSchemaJson,
    })
    .optional(),
]);

export const TitleCreateSchema = z
  .object({
    departmentId: z.coerce.number().int().optional(),
    name: nameSchema.clone(),
    slug: slugSchema.clone().optional(),
    description: descriptionSchema.clone().optional(),
  })
  .transform(slugTransformer('name'));

export const TitleUpdateSchema = z
  .object({
    departmentId: z.coerce.number().int().optional().optional(),
    name: nameSchema.clone().optional(),
    slug: slugSchema.clone().optional().optional(),
    description: descriptionSchema.clone().optional().optional(),
  })
  .transform(slugTransformer('name'));

export const TitleOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    departmentId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    slug: PZ.OrderDirectionSchema,
    description: PZ.OrderDirectionSchema,
  })
  .partial();

export const TitleOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const TitleWhereSchemaJson = z.preprocess(jsonParser, TitleWhereSchema);

export const TitleSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    departmentId: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    agents: z.boolean().or(AgentOwnQuerySchema),
    department: z.boolean().or(DepartmentOwnQueryOneSchema),
  })
  .partial();

export const TitleSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  TitleSelectFieldsSchema
);

export const TitleIncludeSchema = z
  .object({
    agents: z.boolean().or(AgentOwnQuerySchema),
    department: z.boolean().or(DepartmentOwnQueryOneSchema),
  })
  .partial();

export const TitleIncludeSchemaJson = z.preprocess(
  jsonParser,
  TitleIncludeSchema
);

export const TitleProjectionSchema = z.union([
  z
    .object({
      omit: TitleSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: TitleSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: TitleIncludeSchemaJson,
    })
    .optional(),
]);

export const AgentCreateSchema = z.object({
  companyId: z.coerce.number().int().optional(),
  titleId: z.coerce.number().int().optional(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  preferedName: z.string().optional(),
  gender: GenderSchema.optional(),
  slug: slugSchema.clone().optional(),
  note: z.string().optional(),
});

export const AgentUpdateSchema = z.object({
  companyId: z.coerce.number().int().optional().optional(),
  titleId: z.coerce.number().int().optional().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional().optional(),
  lastName: z.string().optional(),
  preferedName: z.string().optional().optional(),
  gender: GenderSchema.optional().optional(),
  slug: slugSchema.clone().optional().optional(),
  note: z.string().optional().optional(),
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
  .partial();

export const AgentOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const AgentWhereSchemaJson = z.preprocess(jsonParser, AgentWhereSchema);

export const AgentSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    companyId: z.boolean(),
    titleId: z.boolean(),
    firstName: z.boolean(),
    middleName: z.boolean(),
    lastName: z.boolean(),
    preferedName: z.boolean(),
    gender: z.boolean(),
    slug: z.boolean(),
    note: z.boolean(),
    company: z.boolean().or(CompanyOwnQueryOneSchema),
    contacts: z.boolean().or(ContactOwnQuerySchema),
    title: z.boolean().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const AgentSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AgentSelectFieldsSchema
);

export const AgentIncludeSchema = z
  .object({
    company: z.boolean().or(CompanyOwnQueryOneSchema),
    contacts: z.boolean().or(ContactOwnQuerySchema),
    title: z.boolean().or(TitleOwnQueryOneSchema),
  })
  .partial();

export const AgentIncludeSchemaJson = z.preprocess(
  jsonParser,
  AgentIncludeSchema
);

export const AgentProjectionSchema = z.union([
  z
    .object({
      omit: AgentSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: AgentSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: AgentIncludeSchemaJson,
    })
    .optional(),
]);

export const ContactCreateSchema = z.object({
  agentId: z.coerce.number().int(),
  type: ContactTypeSchema,
  order: z.coerce.number().int().optional(),
});

export const ContactUpdateSchema = z.object({
  agentId: z.coerce.number().int().optional(),
  type: ContactTypeSchema.optional(),
  order: z.coerce.number().int().optional().optional(),
});

export const ContactOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    uuid: PZ.OrderDirectionSchema,
    agentId: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial();

export const ContactOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  ContactWhereSchema
);

export const ContactSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    agentId: z.boolean(),
    type: z.boolean(),
    order: z.boolean(),
    emails: z.boolean().or(EmailOwnQuerySchema),
    phones: z.boolean().or(PhoneOwnQuerySchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
    websites: z.boolean().or(WebsiteOwnQuerySchema),
    agent: z.boolean().or(AgentOwnQueryOneSchema),
  })
  .partial();

export const ContactSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  ContactSelectFieldsSchema
);

export const ContactIncludeSchema = z
  .object({
    emails: z.boolean().or(EmailOwnQuerySchema),
    phones: z.boolean().or(PhoneOwnQuerySchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
    websites: z.boolean().or(WebsiteOwnQuerySchema),
    agent: z.boolean().or(AgentOwnQueryOneSchema),
  })
  .partial();

export const ContactIncludeSchemaJson = z.preprocess(
  jsonParser,
  ContactIncludeSchema
);

export const ContactProjectionSchema = z.union([
  z
    .object({
      omit: ContactSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: ContactSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: ContactIncludeSchemaJson,
    })
    .optional(),
]);

export const StateCreateSchema = z.object({
  countryId: z.coerce.number().int(),
  state: z.string(),
  code: z.string(),
});

export const StateUpdateSchema = z.object({
  countryId: z.coerce.number().int().optional(),
  state: z.string().optional(),
  code: z.string().optional(),
});

export const StateOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    countryId: PZ.OrderDirectionSchema,
    state: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial();

export const StateOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const StateWhereSchemaJson = z.preprocess(jsonParser, StateWhereSchema);

export const StateSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    state: z.boolean(),
    code: z.boolean(),
    country: z.boolean().or(CountryOwnQueryOneSchema),
    cities: z.boolean().or(CityOwnQuerySchema),
  })
  .partial();

export const StateSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  StateSelectFieldsSchema
);

export const StateIncludeSchema = z
  .object({
    country: z.boolean().or(CountryOwnQueryOneSchema),
    cities: z.boolean().or(CityOwnQuerySchema),
  })
  .partial();

export const StateIncludeSchemaJson = z.preprocess(
  jsonParser,
  StateIncludeSchema
);

export const StateProjectionSchema = z.union([
  z
    .object({
      omit: StateSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: StateSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: StateIncludeSchemaJson,
    })
    .optional(),
]);

export const CountryCreateSchema = z.object({
  name: nameSchema.clone(),
  code: z.string(),
});

export const CountryUpdateSchema = z.object({
  name: nameSchema.clone().optional(),
  code: z.string().optional(),
});

export const CountryOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
    code: PZ.OrderDirectionSchema,
  })
  .partial();

export const CountryOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  CountryWhereSchema
);

export const CountrySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean().or(StateOwnQuerySchema),
  })
  .partial();

export const CountrySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CountrySelectFieldsSchema
);

export const CountryIncludeSchema = z
  .object({
    states: z.boolean().or(StateOwnQuerySchema),
  })
  .partial();

export const CountryIncludeSchemaJson = z.preprocess(
  jsonParser,
  CountryIncludeSchema
);

export const CountryProjectionSchema = z.union([
  z
    .object({
      omit: CountrySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: CountrySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: CountryIncludeSchemaJson,
    })
    .optional(),
]);

export const CityCreateSchema = z.object({
  stateId: z.coerce.number().int(),
  name: nameSchema.clone(),
});

export const CityUpdateSchema = z.object({
  stateId: z.coerce.number().int().optional(),
  name: nameSchema.clone().optional(),
});

export const CityOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    stateId: PZ.OrderDirectionSchema,
    name: PZ.OrderDirectionSchema,
  })
  .partial();

export const CityOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const CityWhereSchemaJson = z.preprocess(jsonParser, CityWhereSchema);

export const CitySelectFieldsSchema = z
  .object({
    id: z.boolean(),
    stateId: z.boolean(),
    name: z.boolean(),
    state: z.boolean().or(StateOwnQueryOneSchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
  })
  .partial();

export const CitySelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  CitySelectFieldsSchema
);

export const CityIncludeSchema = z
  .object({
    state: z.boolean().or(StateOwnQueryOneSchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
  })
  .partial();

export const CityIncludeSchemaJson = z.preprocess(
  jsonParser,
  CityIncludeSchema
);

export const CityProjectionSchema = z.union([
  z
    .object({
      omit: CitySelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: CitySelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: CityIncludeSchemaJson,
    })
    .optional(),
]);

export const AddressCreateSchema = z.object({
  contactId: z.coerce.number().int(),
  cityId: z.coerce.number().int(),
  street: z.string(),
  zip: z.string(),
  order: z.coerce.number().int().optional(),
});

export const AddressUpdateSchema = z.object({
  contactId: z.coerce.number().int().optional(),
  cityId: z.coerce.number().int().optional(),
  street: z.string().optional(),
  zip: z.string().optional(),
  order: z.coerce.number().int().optional().optional(),
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
  .partial();

export const AddressOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  AddressWhereSchema
);

export const AddressSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    cityId: z.boolean(),
    street: z.boolean(),
    zip: z.boolean(),
    order: z.boolean(),
    city: z.boolean().or(CityOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const AddressSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  AddressSelectFieldsSchema
);

export const AddressIncludeSchema = z
  .object({
    city: z.boolean().or(CityOwnQueryOneSchema),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const AddressIncludeSchemaJson = z.preprocess(
  jsonParser,
  AddressIncludeSchema
);

export const AddressProjectionSchema = z.union([
  z
    .object({
      omit: AddressSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: AddressSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: AddressIncludeSchemaJson,
    })
    .optional(),
]);

export const EmailCreateSchema = z.object({
  contactId: z.coerce.number().int(),
  email: emailSchema.clone(),
  order: z.coerce.number().int().optional(),
});

export const EmailUpdateSchema = z.object({
  contactId: z.coerce.number().int().optional(),
  email: emailSchema.clone().optional(),
  order: z.coerce.number().int().optional().optional(),
});

export const EmailOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    email: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial();

export const EmailOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const EmailWhereSchemaJson = z.preprocess(jsonParser, EmailWhereSchema);

export const EmailSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    order: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmailSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  EmailSelectFieldsSchema
);

export const EmailIncludeSchema = z
  .object({
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmailIncludeSchemaJson = z.preprocess(
  jsonParser,
  EmailIncludeSchema
);

export const EmailProjectionSchema = z.union([
  z
    .object({
      omit: EmailSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: EmailSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: EmailIncludeSchemaJson,
    })
    .optional(),
]);

export const PhoneCreateSchema = z.object({
  contactId: z.coerce.number().int(),
  phone: z.string(),
  order: z.coerce.number().int().optional(),
});

export const PhoneUpdateSchema = z.object({
  contactId: z.coerce.number().int().optional(),
  phone: z.string().optional(),
  order: z.coerce.number().int().optional().optional(),
});

export const PhoneOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    phone: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial();

export const PhoneOrderBySchemaJson = z.preprocess(
  jsonParser,
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

export const PhoneWhereSchemaJson = z.preprocess(jsonParser, PhoneWhereSchema);

export const PhoneSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    order: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PhoneSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  PhoneSelectFieldsSchema
);

export const PhoneIncludeSchema = z
  .object({
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PhoneIncludeSchemaJson = z.preprocess(
  jsonParser,
  PhoneIncludeSchema
);

export const PhoneProjectionSchema = z.union([
  z
    .object({
      omit: PhoneSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: PhoneSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: PhoneIncludeSchemaJson,
    })
    .optional(),
]);

export const WebsiteCreateSchema = z.object({
  contactId: z.coerce.number().int(),
  url: z.string(),
  order: z.coerce.number().int().optional(),
});

export const WebsiteUpdateSchema = z.object({
  contactId: z.coerce.number().int().optional(),
  url: z.string().optional(),
  order: z.coerce.number().int().optional().optional(),
});

export const WebsiteOrderBySchema = z
  .object({
    id: PZ.OrderDirectionSchema,
    contactId: PZ.OrderDirectionSchema,
    url: PZ.OrderDirectionSchema,
    order: PZ.OrderDirectionSchema,
  })
  .partial();

export const WebsiteOrderBySchemaJson = z.preprocess(
  jsonParser,
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
  jsonParser,
  WebsiteWhereSchema
);

export const WebsiteSelectFieldsSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    url: z.boolean(),
    order: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const WebsiteSelectFieldsSchemaJson = z.preprocess(
  jsonParser,
  WebsiteSelectFieldsSchema
);

export const WebsiteIncludeSchema = z
  .object({
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const WebsiteIncludeSchemaJson = z.preprocess(
  jsonParser,
  WebsiteIncludeSchema
);

export const WebsiteProjectionSchema = z.union([
  z
    .object({
      omit: WebsiteSelectFieldsSchemaJson,
    })
    .optional(),
  z
    .object({
      select: WebsiteSelectFieldsSchemaJson,
    })
    .optional(),

  z
    .object({
      include: WebsiteIncludeSchemaJson,
    })
    .optional(),
]);

export const IndustryQueryOneSchema = z
  .object({
    where: IndustryWhereSchemaJson,
    distinct: IndustryDistinctFieldsSchema,
  })
  .partial();

export const IndustryQuerySchema = z
  .object({
    where: IndustryWhereSchemaJson,
    distinct: IndustryDistinctFieldsSchema,
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
    where: CompanyWhereSchemaJson,
    distinct: CompanyDistinctFieldsSchema,
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
    where: CompanyIndustryWhereSchemaJson,
    distinct: CompanyIndustryDistinctFieldsSchema,
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
    where: DepartmentWhereSchemaJson,
    distinct: DepartmentDistinctFieldsSchema,
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
    where: TitleWhereSchemaJson,
    distinct: TitleDistinctFieldsSchema,
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
    where: AgentWhereSchemaJson,
    distinct: AgentDistinctFieldsSchema,
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
    where: ContactWhereSchemaJson,
    distinct: ContactDistinctFieldsSchema,
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
    where: StateWhereSchemaJson,
    distinct: StateDistinctFieldsSchema,
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
    where: CountryWhereSchemaJson,
    distinct: CountryDistinctFieldsSchema,
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
    where: CityWhereSchemaJson,
    distinct: CityDistinctFieldsSchema,
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
    where: AddressWhereSchemaJson,
    distinct: AddressDistinctFieldsSchema,
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
    where: EmailWhereSchemaJson,
    distinct: EmailDistinctFieldsSchema,
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
    where: PhoneWhereSchemaJson,
    distinct: PhoneDistinctFieldsSchema,
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
    where: WebsiteWhereSchemaJson,
    distinct: WebsiteDistinctFieldsSchema,
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

export type WebsiteSelectFields = z.infer<typeof WebsiteSelectFieldsSchema>;

export type WebsiteProjection = z.infer<typeof WebsiteProjectionSchema>;
