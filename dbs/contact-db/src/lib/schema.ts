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

export const ContactTypeSchema = z.enum(['WORK', 'HOME', 'EMERGENCY']);

export const GenderSchema = z.enum(['MALE', 'FEMALE']);

export const IndustryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    companies: z.boolean(),
  })
  .partial();

export const IndustryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  IndustryOwnProjectionSchema
);

export const CompanyOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    agents: z.boolean(),
    industries: z.boolean(),
  })
  .partial();

export const CompanyOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CompanyOwnProjectionSchema
);

export const CompanyIndustryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    companyId: z.boolean(),
    industryId: z.boolean(),
    industry: z.boolean(),
    company: z.boolean(),
  })
  .partial();

export const CompanyIndustryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CompanyIndustryOwnProjectionSchema
);

export const DepartmentOwnProjectionSchema = z
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

export const DepartmentOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  DepartmentOwnProjectionSchema
);

export const TitleOwnProjectionSchema = z
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

export const TitleOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  TitleOwnProjectionSchema
);

export const AgentOwnProjectionSchema = z
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

export const AgentOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AgentOwnProjectionSchema
);

export const ContactOwnProjectionSchema = z
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

export const ContactOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  ContactOwnProjectionSchema
);

export const StateOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    state: z.boolean(),
    code: z.boolean(),
    country: z.boolean(),
    cities: z.boolean(),
  })
  .partial();

export const StateOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  StateOwnProjectionSchema
);

export const CountryOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean(),
  })
  .partial();

export const CountryOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CountryOwnProjectionSchema
);

export const CityOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    stateId: z.boolean(),
    name: z.boolean(),
    state: z.boolean(),
    addresses: z.boolean(),
  })
  .partial();

export const CityOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  CityOwnProjectionSchema
);

export const AddressOwnProjectionSchema = z
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

export const AddressOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  AddressOwnProjectionSchema
);

export const EmailOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    order: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const EmailOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmailOwnProjectionSchema
);

export const PhoneOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    order: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const PhoneOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  PhoneOwnProjectionSchema
);

export const WebsiteOwnProjectionSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    url: z.boolean(),
    order: z.boolean(),
    contact: z.boolean(),
  })
  .partial();

export const WebsiteOwnProjectionSchemaJson = z.preprocess(
  jsonParser,
  WebsiteOwnProjectionSchema
);

export const IndustryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const IndustryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  IndustryOwnWhereSchema
);

export const CompanyOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
  })
  .partial();

export const CompanyOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CompanyOwnWhereSchema
);

export const CompanyIndustryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    companyId: PZ.IntegerFilterSchema,
    industryId: PZ.IntegerFilterSchema,
  })
  .partial();

export const CompanyIndustryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CompanyIndustryOwnWhereSchema
);

export const DepartmentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
  })
  .partial();

export const DepartmentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  DepartmentOwnWhereSchema
);

export const TitleOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    departmentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
  })
  .partial();

export const TitleOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  TitleOwnWhereSchema
);

export const AgentOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    companyId: PZ.IntegerFilterSchema,
    titleId: PZ.IntegerFilterSchema,
    firstName: PZ.StringFilterSchema,
    middleName: PZ.StringFilterSchema,
    lastName: PZ.StringFilterSchema,
    preferedName: PZ.StringFilterSchema,
    gender: GenderSchema,
    slug: PZ.StringFilterSchema,
    note: PZ.StringFilterSchema,
  })
  .partial();

export const AgentOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AgentOwnWhereSchema
);

export const ContactOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    agentId: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    order: PZ.IntegerFilterSchema,
  })
  .partial();

export const ContactOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  ContactOwnWhereSchema
);

export const StateOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    countryId: PZ.IntegerFilterSchema,
    state: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

export const StateOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  StateOwnWhereSchema
);

export const CountryOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
  })
  .partial();

export const CountryOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CountryOwnWhereSchema
);

export const CityOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    stateId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
  })
  .partial();

export const CityOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  CityOwnWhereSchema
);

export const AddressOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    cityId: PZ.IntegerFilterSchema,
    street: PZ.StringFilterSchema,
    zip: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
  })
  .partial();

export const AddressOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  AddressOwnWhereSchema
);

export const EmailOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    email: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
  })
  .partial();

export const EmailOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  EmailOwnWhereSchema
);

export const PhoneOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    phone: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
  })
  .partial();

export const PhoneOwnWhereSchemaJson = z.preprocess(
  jsonParser,
  PhoneOwnWhereSchema
);

export const WebsiteOwnWhereSchema = z
  .object({
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    url: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
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
    select: IndustryOwnProjectionSchemaJson,
    omit: IndustryOwnProjectionSchemaJson,
    include: IndustryOwnIncludeSchemaJson,
  })
  .partial();

export const IndustryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: IndustryOwnWhereSchemaJson,
    select: IndustryOwnProjectionSchemaJson,
    omit: IndustryOwnProjectionSchemaJson,
    include: IndustryOwnIncludeSchemaJson,
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
    select: CompanyOwnProjectionSchemaJson,
    omit: CompanyOwnProjectionSchemaJson,
    include: CompanyOwnIncludeSchemaJson,
  })
  .partial();

export const CompanyOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CompanyOwnWhereSchemaJson,
    select: CompanyOwnProjectionSchemaJson,
    omit: CompanyOwnProjectionSchemaJson,
    include: CompanyOwnIncludeSchemaJson,
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
    select: CompanyIndustryOwnProjectionSchemaJson,
    omit: CompanyIndustryOwnProjectionSchemaJson,
    include: CompanyIndustryOwnIncludeSchemaJson,
  })
  .partial();

export const CompanyIndustryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CompanyIndustryOwnWhereSchemaJson,
    select: CompanyIndustryOwnProjectionSchemaJson,
    omit: CompanyIndustryOwnProjectionSchemaJson,
    include: CompanyIndustryOwnIncludeSchemaJson,
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
    select: DepartmentOwnProjectionSchemaJson,
    omit: DepartmentOwnProjectionSchemaJson,
    include: DepartmentOwnIncludeSchemaJson,
  })
  .partial();

export const DepartmentOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DepartmentOwnWhereSchemaJson,
    select: DepartmentOwnProjectionSchemaJson,
    omit: DepartmentOwnProjectionSchemaJson,
    include: DepartmentOwnIncludeSchemaJson,
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
    select: TitleOwnProjectionSchemaJson,
    omit: TitleOwnProjectionSchemaJson,
    include: TitleOwnIncludeSchemaJson,
  })
  .partial();

export const TitleOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TitleOwnWhereSchemaJson,
    select: TitleOwnProjectionSchemaJson,
    omit: TitleOwnProjectionSchemaJson,
    include: TitleOwnIncludeSchemaJson,
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
    select: AgentOwnProjectionSchemaJson,
    omit: AgentOwnProjectionSchemaJson,
    include: AgentOwnIncludeSchemaJson,
  })
  .partial();

export const AgentOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AgentOwnWhereSchemaJson,
    select: AgentOwnProjectionSchemaJson,
    omit: AgentOwnProjectionSchemaJson,
    include: AgentOwnIncludeSchemaJson,
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
    select: ContactOwnProjectionSchemaJson,
    omit: ContactOwnProjectionSchemaJson,
    include: ContactOwnIncludeSchemaJson,
  })
  .partial();

export const ContactOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ContactOwnWhereSchemaJson,
    select: ContactOwnProjectionSchemaJson,
    omit: ContactOwnProjectionSchemaJson,
    include: ContactOwnIncludeSchemaJson,
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
    select: StateOwnProjectionSchemaJson,
    omit: StateOwnProjectionSchemaJson,
    include: StateOwnIncludeSchemaJson,
  })
  .partial();

export const StateOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StateOwnWhereSchemaJson,
    select: StateOwnProjectionSchemaJson,
    omit: StateOwnProjectionSchemaJson,
    include: StateOwnIncludeSchemaJson,
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
    select: CountryOwnProjectionSchemaJson,
    omit: CountryOwnProjectionSchemaJson,
    include: CountryOwnIncludeSchemaJson,
  })
  .partial();

export const CountryOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CountryOwnWhereSchemaJson,
    select: CountryOwnProjectionSchemaJson,
    omit: CountryOwnProjectionSchemaJson,
    include: CountryOwnIncludeSchemaJson,
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
    select: CityOwnProjectionSchemaJson,
    omit: CityOwnProjectionSchemaJson,
    include: CityOwnIncludeSchemaJson,
  })
  .partial();

export const CityOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CityOwnWhereSchemaJson,
    select: CityOwnProjectionSchemaJson,
    omit: CityOwnProjectionSchemaJson,
    include: CityOwnIncludeSchemaJson,
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
    select: AddressOwnProjectionSchemaJson,
    omit: AddressOwnProjectionSchemaJson,
    include: AddressOwnIncludeSchemaJson,
  })
  .partial();

export const AddressOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AddressOwnWhereSchemaJson,
    select: AddressOwnProjectionSchemaJson,
    omit: AddressOwnProjectionSchemaJson,
    include: AddressOwnIncludeSchemaJson,
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
    select: EmailOwnProjectionSchemaJson,
    omit: EmailOwnProjectionSchemaJson,
    include: EmailOwnIncludeSchemaJson,
  })
  .partial();

export const EmailOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmailOwnWhereSchemaJson,
    select: EmailOwnProjectionSchemaJson,
    omit: EmailOwnProjectionSchemaJson,
    include: EmailOwnIncludeSchemaJson,
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
    select: PhoneOwnProjectionSchemaJson,
    omit: PhoneOwnProjectionSchemaJson,
    include: PhoneOwnIncludeSchemaJson,
  })
  .partial();

export const PhoneOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PhoneOwnWhereSchemaJson,
    select: PhoneOwnProjectionSchemaJson,
    omit: PhoneOwnProjectionSchemaJson,
    include: PhoneOwnIncludeSchemaJson,
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
    select: WebsiteOwnProjectionSchemaJson,
    omit: WebsiteOwnProjectionSchemaJson,
    include: WebsiteOwnIncludeSchemaJson,
  })
  .partial();

export const WebsiteOwnQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: WebsiteOwnWhereSchemaJson,
    select: WebsiteOwnProjectionSchemaJson,
    omit: WebsiteOwnProjectionSchemaJson,
    include: WebsiteOwnIncludeSchemaJson,
  })
  .partial();

export const IndustryCreateSchema = z
  .object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const IndustryUpdateSchema = z
  .object({
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
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

export const IndustryProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    description: z.boolean(),
    companies: z.boolean().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const IndustryProjectionSchemaJson = z.preprocess(
  jsonParser,
  IndustryProjectionSchema
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

export const CompanyCreateSchema = z
  .object({
    name: z.string(),
    slug: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const CompanyUpdateSchema = z
  .object({
    name: z.string().optional(),
    slug: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
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

export const CompanyProjectionSchema = z
  .object({
    id: z.boolean(),
    uuid: z.boolean(),
    name: z.boolean(),
    slug: z.boolean(),
    agents: z.boolean().or(AgentOwnQuerySchema),
    industries: z.boolean().or(CompanyIndustryOwnQuerySchema),
  })
  .partial();

export const CompanyProjectionSchemaJson = z.preprocess(
  jsonParser,
  CompanyProjectionSchema
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

export const CompanyIndustryCreateSchema = z.object({
  companyId: z.int(),
  industryId: z.int(),
});

export const CompanyIndustryUpdateSchema = z.object({
  companyId: z.int().optional(),
  industryId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    companyId: PZ.IntegerFilterSchema,
    industryId: PZ.IntegerFilterSchema,
    industry: z
      .object({
        some: IndustryOwnWhereSchema,
        every: IndustryOwnWhereSchema,
        none: IndustryOwnWhereSchema,
      })
      .partial(),
    company: z
      .object({
        some: CompanyOwnWhereSchema,
        every: CompanyOwnWhereSchema,
        none: CompanyOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const CompanyIndustryWhereSchemaJson = z.preprocess(
  jsonParser,
  CompanyIndustryWhereSchema
);

export const CompanyIndustryProjectionSchema = z
  .object({
    id: z.boolean(),
    companyId: z.boolean(),
    industryId: z.boolean(),
    industry: z.boolean().or(IndustryOwnQueryOneSchema),
    company: z.boolean().or(CompanyOwnQueryOneSchema),
  })
  .partial();

export const CompanyIndustryProjectionSchemaJson = z.preprocess(
  jsonParser,
  CompanyIndustryProjectionSchema
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

export const DepartmentCreateSchema = z
  .object({
    parentId: z.int().optional(),
    name: z.string(),
    slug: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const DepartmentUpdateSchema = z
  .object({
    parentId: z.int().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    parentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    parent: z
      .object({
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      })
      .partial(),
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

export const DepartmentProjectionSchema = z
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

export const DepartmentProjectionSchemaJson = z.preprocess(
  jsonParser,
  DepartmentProjectionSchema
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

export const TitleCreateSchema = z
  .object({
    departmentId: z.int().optional(),
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  })
  .transform(slugTransformer('name'));

export const TitleUpdateSchema = z
  .object({
    departmentId: z.int().optional().optional(),
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    description: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    departmentId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    slug: PZ.StringFilterSchema,
    description: PZ.StringFilterSchema,
    agents: z
      .object({
        some: AgentOwnWhereSchema,
        every: AgentOwnWhereSchema,
        none: AgentOwnWhereSchema,
      })
      .partial(),
    department: z
      .object({
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const TitleWhereSchemaJson = z.preprocess(jsonParser, TitleWhereSchema);

export const TitleProjectionSchema = z
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

export const TitleProjectionSchemaJson = z.preprocess(
  jsonParser,
  TitleProjectionSchema
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

export const AgentCreateSchema = z.object({
  companyId: z.int().optional(),
  titleId: z.int().optional(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  preferedName: z.string().optional(),
  gender: GenderSchema.optional(),
  slug: z.string().optional(),
  note: z.string().optional(),
});

export const AgentUpdateSchema = z.object({
  companyId: z.int().optional().optional(),
  titleId: z.int().optional().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional().optional(),
  lastName: z.string().optional(),
  preferedName: z.string().optional().optional(),
  gender: GenderSchema.optional().optional(),
  slug: z.string().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    companyId: PZ.IntegerFilterSchema,
    titleId: PZ.IntegerFilterSchema,
    firstName: PZ.StringFilterSchema,
    middleName: PZ.StringFilterSchema,
    lastName: PZ.StringFilterSchema,
    preferedName: PZ.StringFilterSchema,
    gender: GenderSchema,
    slug: PZ.StringFilterSchema,
    note: PZ.StringFilterSchema,
    company: z
      .object({
        some: CompanyOwnWhereSchema,
        every: CompanyOwnWhereSchema,
        none: CompanyOwnWhereSchema,
      })
      .partial(),
    contacts: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
    title: z
      .object({
        some: TitleOwnWhereSchema,
        every: TitleOwnWhereSchema,
        none: TitleOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AgentWhereSchemaJson = z.preprocess(jsonParser, AgentWhereSchema);

export const AgentProjectionSchema = z
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

export const AgentProjectionSchemaJson = z.preprocess(
  jsonParser,
  AgentProjectionSchema
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

export const ContactCreateSchema = z.object({
  agentId: z.int(),
  type: ContactTypeSchema,
  order: z.int().optional(),
});

export const ContactUpdateSchema = z.object({
  agentId: z.int().optional(),
  type: ContactTypeSchema.optional(),
  order: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    uuid: PZ.StringFilterSchema,
    agentId: PZ.IntegerFilterSchema,
    type: ContactTypeSchema,
    order: PZ.IntegerFilterSchema,
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
    agent: z
      .object({
        some: AgentOwnWhereSchema,
        every: AgentOwnWhereSchema,
        none: AgentOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const ContactWhereSchemaJson = z.preprocess(
  jsonParser,
  ContactWhereSchema
);

export const ContactProjectionSchema = z
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

export const ContactProjectionSchemaJson = z.preprocess(
  jsonParser,
  ContactProjectionSchema
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

export const StateCreateSchema = z.object({
  countryId: z.int(),
  state: z.string(),
  code: z.string(),
});

export const StateUpdateSchema = z.object({
  countryId: z.int().optional(),
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
    id: PZ.IntegerFilterSchema,
    countryId: PZ.IntegerFilterSchema,
    state: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
    country: z
      .object({
        some: CountryOwnWhereSchema,
        every: CountryOwnWhereSchema,
        none: CountryOwnWhereSchema,
      })
      .partial(),
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

export const StateProjectionSchema = z
  .object({
    id: z.boolean(),
    countryId: z.boolean(),
    state: z.boolean(),
    code: z.boolean(),
    country: z.boolean().or(CountryOwnQueryOneSchema),
    cities: z.boolean().or(CityOwnQuerySchema),
  })
  .partial();

export const StateProjectionSchemaJson = z.preprocess(
  jsonParser,
  StateProjectionSchema
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

export const CountryCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const CountryUpdateSchema = z.object({
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    code: PZ.StringFilterSchema,
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

export const CountryProjectionSchema = z
  .object({
    id: z.boolean(),
    name: z.boolean(),
    code: z.boolean(),
    states: z.boolean().or(StateOwnQuerySchema),
  })
  .partial();

export const CountryProjectionSchemaJson = z.preprocess(
  jsonParser,
  CountryProjectionSchema
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

export const CityCreateSchema = z.object({
  stateId: z.int(),
  name: z.string(),
});

export const CityUpdateSchema = z.object({
  stateId: z.int().optional(),
  name: z.string().optional(),
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
    id: PZ.IntegerFilterSchema,
    stateId: PZ.IntegerFilterSchema,
    name: PZ.StringFilterSchema,
    state: z
      .object({
        some: StateOwnWhereSchema,
        every: StateOwnWhereSchema,
        none: StateOwnWhereSchema,
      })
      .partial(),
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

export const CityProjectionSchema = z
  .object({
    id: z.boolean(),
    stateId: z.boolean(),
    name: z.boolean(),
    state: z.boolean().or(StateOwnQueryOneSchema),
    addresses: z.boolean().or(AddressOwnQuerySchema),
  })
  .partial();

export const CityProjectionSchemaJson = z.preprocess(
  jsonParser,
  CityProjectionSchema
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

export const AddressCreateSchema = z.object({
  contactId: z.int(),
  cityId: z.int(),
  street: z.string(),
  zip: z.string(),
  order: z.int().optional(),
});

export const AddressUpdateSchema = z.object({
  contactId: z.int().optional(),
  cityId: z.int().optional(),
  street: z.string().optional(),
  zip: z.string().optional(),
  order: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    cityId: PZ.IntegerFilterSchema,
    street: PZ.StringFilterSchema,
    zip: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
    city: z
      .object({
        some: CityOwnWhereSchema,
        every: CityOwnWhereSchema,
        none: CityOwnWhereSchema,
      })
      .partial(),
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const AddressWhereSchemaJson = z.preprocess(
  jsonParser,
  AddressWhereSchema
);

export const AddressProjectionSchema = z
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

export const AddressProjectionSchemaJson = z.preprocess(
  jsonParser,
  AddressProjectionSchema
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

export const EmailCreateSchema = z.object({
  contactId: z.int(),
  email: z.string(),
  order: z.int().optional(),
});

export const EmailUpdateSchema = z.object({
  contactId: z.int().optional(),
  email: z.string().optional(),
  order: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    email: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const EmailWhereSchemaJson = z.preprocess(jsonParser, EmailWhereSchema);

export const EmailProjectionSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    email: z.boolean(),
    order: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const EmailProjectionSchemaJson = z.preprocess(
  jsonParser,
  EmailProjectionSchema
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

export const PhoneCreateSchema = z.object({
  contactId: z.int(),
  phone: z.string(),
  order: z.int().optional(),
});

export const PhoneUpdateSchema = z.object({
  contactId: z.int().optional(),
  phone: z.string().optional(),
  order: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    phone: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const PhoneWhereSchemaJson = z.preprocess(jsonParser, PhoneWhereSchema);

export const PhoneProjectionSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    phone: z.boolean(),
    order: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const PhoneProjectionSchemaJson = z.preprocess(
  jsonParser,
  PhoneProjectionSchema
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

export const WebsiteCreateSchema = z.object({
  contactId: z.int(),
  url: z.string(),
  order: z.int().optional(),
});

export const WebsiteUpdateSchema = z.object({
  contactId: z.int().optional(),
  url: z.string().optional(),
  order: z.int().optional().optional(),
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
    id: PZ.IntegerFilterSchema,
    contactId: PZ.IntegerFilterSchema,
    url: PZ.StringFilterSchema,
    order: PZ.IntegerFilterSchema,
    contact: z
      .object({
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      })
      .partial(),
  })
  .partial();

export const WebsiteWhereSchemaJson = z.preprocess(
  jsonParser,
  WebsiteWhereSchema
);

export const WebsiteProjectionSchema = z
  .object({
    id: z.boolean(),
    contactId: z.boolean(),
    url: z.boolean(),
    order: z.boolean(),
    contact: z.boolean().or(ContactOwnQueryOneSchema),
  })
  .partial();

export const WebsiteProjectionSchemaJson = z.preprocess(
  jsonParser,
  WebsiteProjectionSchema
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

export const IndustryQueryOneSchema = z
  .object({
    where: IndustryWhereSchemaJson,
    select: IndustryProjectionSchemaJson,
    omit: IndustryProjectionSchemaJson,
    include: IndustryIncludeSchemaJson,
  })
  .partial();

export const IndustryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: IndustryWhereSchemaJson,
    select: IndustryProjectionSchemaJson,
    omit: IndustryProjectionSchemaJson,
    include: IndustryIncludeSchemaJson,
  })
  .partial();

export type IndustryCreate = z.infer<typeof IndustryCreateSchema>;

export type IndustryUpdate = z.infer<typeof IndustryUpdateSchema>;

export type IndustryOrderBy = z.infer<typeof IndustryOrderBySchema>;

export type IndustryOwnProjection = z.infer<typeof IndustryOwnProjectionSchema>;

export type IndustryOwnWhere = z.infer<typeof IndustryOwnWhereSchema>;

export type IndustryOwnQuery = z.infer<typeof IndustryOwnQuerySchema>;

export type IndustryOwnQueryOne = z.infer<typeof IndustryOwnQueryOneSchema>;

export type IndustryWhere = z.infer<typeof IndustryWhereSchema>;

export type IndustryInclude = z.infer<typeof IndustryIncludeSchema>;

export type IndustryQueryOne = z.infer<typeof IndustryQueryOneSchema>;

export type IndustryQuery = z.infer<typeof IndustryQuerySchema>;

export type IndustryProjection = z.infer<typeof IndustryProjectionSchema>;

export const CompanyQueryOneSchema = z
  .object({
    where: CompanyWhereSchemaJson,
    select: CompanyProjectionSchemaJson,
    omit: CompanyProjectionSchemaJson,
    include: CompanyIncludeSchemaJson,
  })
  .partial();

export const CompanyQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CompanyWhereSchemaJson,
    select: CompanyProjectionSchemaJson,
    omit: CompanyProjectionSchemaJson,
    include: CompanyIncludeSchemaJson,
  })
  .partial();

export type CompanyCreate = z.infer<typeof CompanyCreateSchema>;

export type CompanyUpdate = z.infer<typeof CompanyUpdateSchema>;

export type CompanyOrderBy = z.infer<typeof CompanyOrderBySchema>;

export type CompanyOwnProjection = z.infer<typeof CompanyOwnProjectionSchema>;

export type CompanyOwnWhere = z.infer<typeof CompanyOwnWhereSchema>;

export type CompanyOwnQuery = z.infer<typeof CompanyOwnQuerySchema>;

export type CompanyOwnQueryOne = z.infer<typeof CompanyOwnQueryOneSchema>;

export type CompanyWhere = z.infer<typeof CompanyWhereSchema>;

export type CompanyInclude = z.infer<typeof CompanyIncludeSchema>;

export type CompanyQueryOne = z.infer<typeof CompanyQueryOneSchema>;

export type CompanyQuery = z.infer<typeof CompanyQuerySchema>;

export type CompanyProjection = z.infer<typeof CompanyProjectionSchema>;

export const CompanyIndustryQueryOneSchema = z
  .object({
    where: CompanyIndustryWhereSchemaJson,
    select: CompanyIndustryProjectionSchemaJson,
    omit: CompanyIndustryProjectionSchemaJson,
    include: CompanyIndustryIncludeSchemaJson,
  })
  .partial();

export const CompanyIndustryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CompanyIndustryWhereSchemaJson,
    select: CompanyIndustryProjectionSchemaJson,
    omit: CompanyIndustryProjectionSchemaJson,
    include: CompanyIndustryIncludeSchemaJson,
  })
  .partial();

export type CompanyIndustryCreate = z.infer<typeof CompanyIndustryCreateSchema>;

export type CompanyIndustryUpdate = z.infer<typeof CompanyIndustryUpdateSchema>;

export type CompanyIndustryOrderBy = z.infer<
  typeof CompanyIndustryOrderBySchema
>;

export type CompanyIndustryOwnProjection = z.infer<
  typeof CompanyIndustryOwnProjectionSchema
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

export type CompanyIndustryProjection = z.infer<
  typeof CompanyIndustryProjectionSchema
>;

export const DepartmentQueryOneSchema = z
  .object({
    where: DepartmentWhereSchemaJson,
    select: DepartmentProjectionSchemaJson,
    omit: DepartmentProjectionSchemaJson,
    include: DepartmentIncludeSchemaJson,
  })
  .partial();

export const DepartmentQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: DepartmentWhereSchemaJson,
    select: DepartmentProjectionSchemaJson,
    omit: DepartmentProjectionSchemaJson,
    include: DepartmentIncludeSchemaJson,
  })
  .partial();

export type DepartmentCreate = z.infer<typeof DepartmentCreateSchema>;

export type DepartmentUpdate = z.infer<typeof DepartmentUpdateSchema>;

export type DepartmentOrderBy = z.infer<typeof DepartmentOrderBySchema>;

export type DepartmentOwnProjection = z.infer<
  typeof DepartmentOwnProjectionSchema
>;

export type DepartmentOwnWhere = z.infer<typeof DepartmentOwnWhereSchema>;

export type DepartmentOwnQuery = z.infer<typeof DepartmentOwnQuerySchema>;

export type DepartmentOwnQueryOne = z.infer<typeof DepartmentOwnQueryOneSchema>;

export type DepartmentWhere = z.infer<typeof DepartmentWhereSchema>;

export type DepartmentInclude = z.infer<typeof DepartmentIncludeSchema>;

export type DepartmentQueryOne = z.infer<typeof DepartmentQueryOneSchema>;

export type DepartmentQuery = z.infer<typeof DepartmentQuerySchema>;

export type DepartmentProjection = z.infer<typeof DepartmentProjectionSchema>;

export const TitleQueryOneSchema = z
  .object({
    where: TitleWhereSchemaJson,
    select: TitleProjectionSchemaJson,
    omit: TitleProjectionSchemaJson,
    include: TitleIncludeSchemaJson,
  })
  .partial();

export const TitleQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: TitleWhereSchemaJson,
    select: TitleProjectionSchemaJson,
    omit: TitleProjectionSchemaJson,
    include: TitleIncludeSchemaJson,
  })
  .partial();

export type TitleCreate = z.infer<typeof TitleCreateSchema>;

export type TitleUpdate = z.infer<typeof TitleUpdateSchema>;

export type TitleOrderBy = z.infer<typeof TitleOrderBySchema>;

export type TitleOwnProjection = z.infer<typeof TitleOwnProjectionSchema>;

export type TitleOwnWhere = z.infer<typeof TitleOwnWhereSchema>;

export type TitleOwnQuery = z.infer<typeof TitleOwnQuerySchema>;

export type TitleOwnQueryOne = z.infer<typeof TitleOwnQueryOneSchema>;

export type TitleWhere = z.infer<typeof TitleWhereSchema>;

export type TitleInclude = z.infer<typeof TitleIncludeSchema>;

export type TitleQueryOne = z.infer<typeof TitleQueryOneSchema>;

export type TitleQuery = z.infer<typeof TitleQuerySchema>;

export type TitleProjection = z.infer<typeof TitleProjectionSchema>;

export const AgentQueryOneSchema = z
  .object({
    where: AgentWhereSchemaJson,
    select: AgentProjectionSchemaJson,
    omit: AgentProjectionSchemaJson,
    include: AgentIncludeSchemaJson,
  })
  .partial();

export const AgentQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AgentWhereSchemaJson,
    select: AgentProjectionSchemaJson,
    omit: AgentProjectionSchemaJson,
    include: AgentIncludeSchemaJson,
  })
  .partial();

export type AgentCreate = z.infer<typeof AgentCreateSchema>;

export type AgentUpdate = z.infer<typeof AgentUpdateSchema>;

export type AgentOrderBy = z.infer<typeof AgentOrderBySchema>;

export type AgentOwnProjection = z.infer<typeof AgentOwnProjectionSchema>;

export type AgentOwnWhere = z.infer<typeof AgentOwnWhereSchema>;

export type AgentOwnQuery = z.infer<typeof AgentOwnQuerySchema>;

export type AgentOwnQueryOne = z.infer<typeof AgentOwnQueryOneSchema>;

export type AgentWhere = z.infer<typeof AgentWhereSchema>;

export type AgentInclude = z.infer<typeof AgentIncludeSchema>;

export type AgentQueryOne = z.infer<typeof AgentQueryOneSchema>;

export type AgentQuery = z.infer<typeof AgentQuerySchema>;

export type AgentProjection = z.infer<typeof AgentProjectionSchema>;

export const ContactQueryOneSchema = z
  .object({
    where: ContactWhereSchemaJson,
    select: ContactProjectionSchemaJson,
    omit: ContactProjectionSchemaJson,
    include: ContactIncludeSchemaJson,
  })
  .partial();

export const ContactQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: ContactWhereSchemaJson,
    select: ContactProjectionSchemaJson,
    omit: ContactProjectionSchemaJson,
    include: ContactIncludeSchemaJson,
  })
  .partial();

export type ContactCreate = z.infer<typeof ContactCreateSchema>;

export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;

export type ContactOrderBy = z.infer<typeof ContactOrderBySchema>;

export type ContactOwnProjection = z.infer<typeof ContactOwnProjectionSchema>;

export type ContactOwnWhere = z.infer<typeof ContactOwnWhereSchema>;

export type ContactOwnQuery = z.infer<typeof ContactOwnQuerySchema>;

export type ContactOwnQueryOne = z.infer<typeof ContactOwnQueryOneSchema>;

export type ContactWhere = z.infer<typeof ContactWhereSchema>;

export type ContactInclude = z.infer<typeof ContactIncludeSchema>;

export type ContactQueryOne = z.infer<typeof ContactQueryOneSchema>;

export type ContactQuery = z.infer<typeof ContactQuerySchema>;

export type ContactProjection = z.infer<typeof ContactProjectionSchema>;

export const StateQueryOneSchema = z
  .object({
    where: StateWhereSchemaJson,
    select: StateProjectionSchemaJson,
    omit: StateProjectionSchemaJson,
    include: StateIncludeSchemaJson,
  })
  .partial();

export const StateQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: StateWhereSchemaJson,
    select: StateProjectionSchemaJson,
    omit: StateProjectionSchemaJson,
    include: StateIncludeSchemaJson,
  })
  .partial();

export type StateCreate = z.infer<typeof StateCreateSchema>;

export type StateUpdate = z.infer<typeof StateUpdateSchema>;

export type StateOrderBy = z.infer<typeof StateOrderBySchema>;

export type StateOwnProjection = z.infer<typeof StateOwnProjectionSchema>;

export type StateOwnWhere = z.infer<typeof StateOwnWhereSchema>;

export type StateOwnQuery = z.infer<typeof StateOwnQuerySchema>;

export type StateOwnQueryOne = z.infer<typeof StateOwnQueryOneSchema>;

export type StateWhere = z.infer<typeof StateWhereSchema>;

export type StateInclude = z.infer<typeof StateIncludeSchema>;

export type StateQueryOne = z.infer<typeof StateQueryOneSchema>;

export type StateQuery = z.infer<typeof StateQuerySchema>;

export type StateProjection = z.infer<typeof StateProjectionSchema>;

export const CountryQueryOneSchema = z
  .object({
    where: CountryWhereSchemaJson,
    select: CountryProjectionSchemaJson,
    omit: CountryProjectionSchemaJson,
    include: CountryIncludeSchemaJson,
  })
  .partial();

export const CountryQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CountryWhereSchemaJson,
    select: CountryProjectionSchemaJson,
    omit: CountryProjectionSchemaJson,
    include: CountryIncludeSchemaJson,
  })
  .partial();

export type CountryCreate = z.infer<typeof CountryCreateSchema>;

export type CountryUpdate = z.infer<typeof CountryUpdateSchema>;

export type CountryOrderBy = z.infer<typeof CountryOrderBySchema>;

export type CountryOwnProjection = z.infer<typeof CountryOwnProjectionSchema>;

export type CountryOwnWhere = z.infer<typeof CountryOwnWhereSchema>;

export type CountryOwnQuery = z.infer<typeof CountryOwnQuerySchema>;

export type CountryOwnQueryOne = z.infer<typeof CountryOwnQueryOneSchema>;

export type CountryWhere = z.infer<typeof CountryWhereSchema>;

export type CountryInclude = z.infer<typeof CountryIncludeSchema>;

export type CountryQueryOne = z.infer<typeof CountryQueryOneSchema>;

export type CountryQuery = z.infer<typeof CountryQuerySchema>;

export type CountryProjection = z.infer<typeof CountryProjectionSchema>;

export const CityQueryOneSchema = z
  .object({
    where: CityWhereSchemaJson,
    select: CityProjectionSchemaJson,
    omit: CityProjectionSchemaJson,
    include: CityIncludeSchemaJson,
  })
  .partial();

export const CityQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: CityWhereSchemaJson,
    select: CityProjectionSchemaJson,
    omit: CityProjectionSchemaJson,
    include: CityIncludeSchemaJson,
  })
  .partial();

export type CityCreate = z.infer<typeof CityCreateSchema>;

export type CityUpdate = z.infer<typeof CityUpdateSchema>;

export type CityOrderBy = z.infer<typeof CityOrderBySchema>;

export type CityOwnProjection = z.infer<typeof CityOwnProjectionSchema>;

export type CityOwnWhere = z.infer<typeof CityOwnWhereSchema>;

export type CityOwnQuery = z.infer<typeof CityOwnQuerySchema>;

export type CityOwnQueryOne = z.infer<typeof CityOwnQueryOneSchema>;

export type CityWhere = z.infer<typeof CityWhereSchema>;

export type CityInclude = z.infer<typeof CityIncludeSchema>;

export type CityQueryOne = z.infer<typeof CityQueryOneSchema>;

export type CityQuery = z.infer<typeof CityQuerySchema>;

export type CityProjection = z.infer<typeof CityProjectionSchema>;

export const AddressQueryOneSchema = z
  .object({
    where: AddressWhereSchemaJson,
    select: AddressProjectionSchemaJson,
    omit: AddressProjectionSchemaJson,
    include: AddressIncludeSchemaJson,
  })
  .partial();

export const AddressQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: AddressWhereSchemaJson,
    select: AddressProjectionSchemaJson,
    omit: AddressProjectionSchemaJson,
    include: AddressIncludeSchemaJson,
  })
  .partial();

export type AddressCreate = z.infer<typeof AddressCreateSchema>;

export type AddressUpdate = z.infer<typeof AddressUpdateSchema>;

export type AddressOrderBy = z.infer<typeof AddressOrderBySchema>;

export type AddressOwnProjection = z.infer<typeof AddressOwnProjectionSchema>;

export type AddressOwnWhere = z.infer<typeof AddressOwnWhereSchema>;

export type AddressOwnQuery = z.infer<typeof AddressOwnQuerySchema>;

export type AddressOwnQueryOne = z.infer<typeof AddressOwnQueryOneSchema>;

export type AddressWhere = z.infer<typeof AddressWhereSchema>;

export type AddressInclude = z.infer<typeof AddressIncludeSchema>;

export type AddressQueryOne = z.infer<typeof AddressQueryOneSchema>;

export type AddressQuery = z.infer<typeof AddressQuerySchema>;

export type AddressProjection = z.infer<typeof AddressProjectionSchema>;

export const EmailQueryOneSchema = z
  .object({
    where: EmailWhereSchemaJson,
    select: EmailProjectionSchemaJson,
    omit: EmailProjectionSchemaJson,
    include: EmailIncludeSchemaJson,
  })
  .partial();

export const EmailQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: EmailWhereSchemaJson,
    select: EmailProjectionSchemaJson,
    omit: EmailProjectionSchemaJson,
    include: EmailIncludeSchemaJson,
  })
  .partial();

export type EmailCreate = z.infer<typeof EmailCreateSchema>;

export type EmailUpdate = z.infer<typeof EmailUpdateSchema>;

export type EmailOrderBy = z.infer<typeof EmailOrderBySchema>;

export type EmailOwnProjection = z.infer<typeof EmailOwnProjectionSchema>;

export type EmailOwnWhere = z.infer<typeof EmailOwnWhereSchema>;

export type EmailOwnQuery = z.infer<typeof EmailOwnQuerySchema>;

export type EmailOwnQueryOne = z.infer<typeof EmailOwnQueryOneSchema>;

export type EmailWhere = z.infer<typeof EmailWhereSchema>;

export type EmailInclude = z.infer<typeof EmailIncludeSchema>;

export type EmailQueryOne = z.infer<typeof EmailQueryOneSchema>;

export type EmailQuery = z.infer<typeof EmailQuerySchema>;

export type EmailProjection = z.infer<typeof EmailProjectionSchema>;

export const PhoneQueryOneSchema = z
  .object({
    where: PhoneWhereSchemaJson,
    select: PhoneProjectionSchemaJson,
    omit: PhoneProjectionSchemaJson,
    include: PhoneIncludeSchemaJson,
  })
  .partial();

export const PhoneQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: PhoneWhereSchemaJson,
    select: PhoneProjectionSchemaJson,
    omit: PhoneProjectionSchemaJson,
    include: PhoneIncludeSchemaJson,
  })
  .partial();

export type PhoneCreate = z.infer<typeof PhoneCreateSchema>;

export type PhoneUpdate = z.infer<typeof PhoneUpdateSchema>;

export type PhoneOrderBy = z.infer<typeof PhoneOrderBySchema>;

export type PhoneOwnProjection = z.infer<typeof PhoneOwnProjectionSchema>;

export type PhoneOwnWhere = z.infer<typeof PhoneOwnWhereSchema>;

export type PhoneOwnQuery = z.infer<typeof PhoneOwnQuerySchema>;

export type PhoneOwnQueryOne = z.infer<typeof PhoneOwnQueryOneSchema>;

export type PhoneWhere = z.infer<typeof PhoneWhereSchema>;

export type PhoneInclude = z.infer<typeof PhoneIncludeSchema>;

export type PhoneQueryOne = z.infer<typeof PhoneQueryOneSchema>;

export type PhoneQuery = z.infer<typeof PhoneQuerySchema>;

export type PhoneProjection = z.infer<typeof PhoneProjectionSchema>;

export const WebsiteQueryOneSchema = z
  .object({
    where: WebsiteWhereSchemaJson,
    select: WebsiteProjectionSchemaJson,
    omit: WebsiteProjectionSchemaJson,
    include: WebsiteIncludeSchemaJson,
  })
  .partial();

export const WebsiteQuerySchema = z
  .object({
    take: takeSchema.clone(),
    skip: skipSchema.clone(),
    where: WebsiteWhereSchemaJson,
    select: WebsiteProjectionSchemaJson,
    omit: WebsiteProjectionSchemaJson,
    include: WebsiteIncludeSchemaJson,
  })
  .partial();

export type WebsiteCreate = z.infer<typeof WebsiteCreateSchema>;

export type WebsiteUpdate = z.infer<typeof WebsiteUpdateSchema>;

export type WebsiteOrderBy = z.infer<typeof WebsiteOrderBySchema>;

export type WebsiteOwnProjection = z.infer<typeof WebsiteOwnProjectionSchema>;

export type WebsiteOwnWhere = z.infer<typeof WebsiteOwnWhereSchema>;

export type WebsiteOwnQuery = z.infer<typeof WebsiteOwnQuerySchema>;

export type WebsiteOwnQueryOne = z.infer<typeof WebsiteOwnQueryOneSchema>;

export type WebsiteWhere = z.infer<typeof WebsiteWhereSchema>;

export type WebsiteInclude = z.infer<typeof WebsiteIncludeSchema>;

export type WebsiteQueryOne = z.infer<typeof WebsiteQueryOneSchema>;

export type WebsiteQuery = z.infer<typeof WebsiteQuerySchema>;

export type WebsiteProjection = z.infer<typeof WebsiteProjectionSchema>;
