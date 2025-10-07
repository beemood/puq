
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- Industry Schemas ----------


export const IndustrySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const IndustryCreateSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const IndustryUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const IndustryWhereSchema = toWhereQuerySchema(IndustrySchema);

export const IndustryOrderSchema =  toOrderBySchema(IndustrySchema);

export const IndustrySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  orgs: z.boolean().optional(),
});

export const IndustryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: IndustryWhereSchema.optional(),
  orderBy: IndustryOrderSchema.optional(),
  select: IndustrySelectSchema.optional()
});

export type Industry = z.infer<typeof IndustrySchema>;
export type IndustryCreate = z.infer<typeof IndustryCreateSchema>;
export type IndustryUpdate = z.infer<typeof IndustryUpdateSchema>;
export type IndustryWhere = z.infer<typeof IndustryWhereSchema>;
export type IndustryOrder = z.infer<typeof IndustryOrderSchema>;
export type IndustrySelect = z.infer<typeof IndustrySelectSchema>;
export type IndustryQuery = z.infer<typeof IndustryQuerySchema>;




// ---------- Org Schemas ----------


export const OrgSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  name: z.string(),
  slug: z.string(),
});

export const OrgCreateSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export const OrgUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
});

export const OrgWhereSchema = toWhereQuerySchema(OrgSchema);

export const OrgOrderSchema =  toOrderBySchema(OrgSchema);

export const OrgSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  agents: z.boolean().optional(),
  industries: z.boolean().optional(),
});

export const OrgQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: OrgWhereSchema.optional(),
  orderBy: OrgOrderSchema.optional(),
  select: OrgSelectSchema.optional()
});

export type Org = z.infer<typeof OrgSchema>;
export type OrgCreate = z.infer<typeof OrgCreateSchema>;
export type OrgUpdate = z.infer<typeof OrgUpdateSchema>;
export type OrgWhere = z.infer<typeof OrgWhereSchema>;
export type OrgOrder = z.infer<typeof OrgOrderSchema>;
export type OrgSelect = z.infer<typeof OrgSelectSchema>;
export type OrgQuery = z.infer<typeof OrgQuerySchema>;




// ---------- OrgIndustry Schemas ----------


export const OrgIndustrySchema = z.object({
  id: z.number().int(),
  orgId: z.number().int(),
  industryId: z.number().int(),
});

export const OrgIndustryCreateSchema = z.object({
  orgId: z.number().int(),
  industryId: z.number().int(),
});

export const OrgIndustryUpdateSchema = z.object({
  id: z.number().int().optional(),
  orgId: z.number().int().optional(),
  industryId: z.number().int().optional(),
});

export const OrgIndustryWhereSchema = toWhereQuerySchema(OrgIndustrySchema);

export const OrgIndustryOrderSchema =  toOrderBySchema(OrgIndustrySchema);

export const OrgIndustrySelectSchema = z.object({
  id: z.boolean().optional(),
  orgId: z.boolean().optional(),
  industryId: z.boolean().optional(),
  industry: z.boolean().optional(),
  org: z.boolean().optional(),
});

export const OrgIndustryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: OrgIndustryWhereSchema.optional(),
  orderBy: OrgIndustryOrderSchema.optional(),
  select: OrgIndustrySelectSchema.optional()
});

export type OrgIndustry = z.infer<typeof OrgIndustrySchema>;
export type OrgIndustryCreate = z.infer<typeof OrgIndustryCreateSchema>;
export type OrgIndustryUpdate = z.infer<typeof OrgIndustryUpdateSchema>;
export type OrgIndustryWhere = z.infer<typeof OrgIndustryWhereSchema>;
export type OrgIndustryOrder = z.infer<typeof OrgIndustryOrderSchema>;
export type OrgIndustrySelect = z.infer<typeof OrgIndustrySelectSchema>;
export type OrgIndustryQuery = z.infer<typeof OrgIndustryQuerySchema>;




// ---------- Occupation Schemas ----------


export const OccupationSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const OccupationCreateSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
});

export const OccupationUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().nullish().optional(),
});

export const OccupationWhereSchema = toWhereQuerySchema(OccupationSchema);

export const OccupationOrderSchema =  toOrderBySchema(OccupationSchema);

export const OccupationSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  agents: z.boolean().optional(),
});

export const OccupationQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: OccupationWhereSchema.optional(),
  orderBy: OccupationOrderSchema.optional(),
  select: OccupationSelectSchema.optional()
});

export type Occupation = z.infer<typeof OccupationSchema>;
export type OccupationCreate = z.infer<typeof OccupationCreateSchema>;
export type OccupationUpdate = z.infer<typeof OccupationUpdateSchema>;
export type OccupationWhere = z.infer<typeof OccupationWhereSchema>;
export type OccupationOrder = z.infer<typeof OccupationOrderSchema>;
export type OccupationSelect = z.infer<typeof OccupationSelectSchema>;
export type OccupationQuery = z.infer<typeof OccupationQuerySchema>;




// ---------- Agent Schemas ----------


export const AgentSchema = z.object({
  id: z.number().int(),
  orgId: z.number().int().nullish(),
  occupationId: z.number().int().nullish(),
  firstName: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  gender: z.any().nullish(),
  slug: z.string(),
  note: z.string().nullish(),
});

export const AgentCreateSchema = z.object({
  orgId: z.number().int().nullish(),
  occupationId: z.number().int().nullish(),
  firstName: z.string(),
  middleName: z.string().nullish(),
  lastName: z.string(),
  gender: z.any().nullish(),
  slug: z.string(),
  note: z.string().nullish(),
});

export const AgentUpdateSchema = z.object({
  id: z.number().int().optional(),
  orgId: z.number().int().nullish().optional(),
  occupationId: z.number().int().nullish().optional(),
  firstName: z.string().optional(),
  middleName: z.string().nullish().optional(),
  lastName: z.string().optional(),
  gender: z.any().nullish().optional(),
  slug: z.string().optional(),
  note: z.string().nullish().optional(),
});

export const AgentWhereSchema = toWhereQuerySchema(AgentSchema);

export const AgentOrderSchema =  toOrderBySchema(AgentSchema);

export const AgentSelectSchema = z.object({
  id: z.boolean().optional(),
  orgId: z.boolean().optional(),
  occupationId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  gender: z.boolean().optional(),
  slug: z.boolean().optional(),
  note: z.boolean().optional(),
  org: z.boolean().optional(),
  contacts: z.boolean().optional(),
  occupation: z.boolean().optional(),
});

export const AgentQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AgentWhereSchema.optional(),
  orderBy: AgentOrderSchema.optional(),
  select: AgentSelectSchema.optional()
});

export type Agent = z.infer<typeof AgentSchema>;
export type AgentCreate = z.infer<typeof AgentCreateSchema>;
export type AgentUpdate = z.infer<typeof AgentUpdateSchema>;
export type AgentWhere = z.infer<typeof AgentWhereSchema>;
export type AgentOrder = z.infer<typeof AgentOrderSchema>;
export type AgentSelect = z.infer<typeof AgentSelectSchema>;
export type AgentQuery = z.infer<typeof AgentQuerySchema>;




// ---------- Contact Schemas ----------


export const ContactSchema = z.object({
  id: z.number().int(),
  uuid: z.string(),
  agentId: z.number().int(),
  type: z.any(),
  order: z.number().int().nullish(),
});

export const ContactCreateSchema = z.object({
  agentId: z.number().int(),
  type: z.any(),
  order: z.number().int().nullish(),
});

export const ContactUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  agentId: z.number().int().optional(),
  type: z.any().optional(),
  order: z.number().int().nullish().optional(),
});

export const ContactWhereSchema = toWhereQuerySchema(ContactSchema);

export const ContactOrderSchema =  toOrderBySchema(ContactSchema);

export const ContactSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  agentId: z.boolean().optional(),
  type: z.boolean().optional(),
  order: z.boolean().optional(),
  emails: z.boolean().optional(),
  phones: z.boolean().optional(),
  addresses: z.boolean().optional(),
  websites: z.boolean().optional(),
  agent: z.boolean().optional(),
});

export const ContactQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: ContactWhereSchema.optional(),
  orderBy: ContactOrderSchema.optional(),
  select: ContactSelectSchema.optional()
});

export type Contact = z.infer<typeof ContactSchema>;
export type ContactCreate = z.infer<typeof ContactCreateSchema>;
export type ContactUpdate = z.infer<typeof ContactUpdateSchema>;
export type ContactWhere = z.infer<typeof ContactWhereSchema>;
export type ContactOrder = z.infer<typeof ContactOrderSchema>;
export type ContactSelect = z.infer<typeof ContactSelectSchema>;
export type ContactQuery = z.infer<typeof ContactQuerySchema>;




// ---------- State Schemas ----------


export const StateSchema = z.object({
  id: z.number().int(),
  countryId: z.number().int(),
  state: z.string(),
  code: z.string(),
});

export const StateCreateSchema = z.object({
  countryId: z.number().int(),
  state: z.string(),
  code: z.string(),
});

export const StateUpdateSchema = z.object({
  id: z.number().int().optional(),
  countryId: z.number().int().optional(),
  state: z.string().optional(),
  code: z.string().optional(),
});

export const StateWhereSchema = toWhereQuerySchema(StateSchema);

export const StateOrderSchema =  toOrderBySchema(StateSchema);

export const StateSelectSchema = z.object({
  id: z.boolean().optional(),
  countryId: z.boolean().optional(),
  state: z.boolean().optional(),
  code: z.boolean().optional(),
  country: z.boolean().optional(),
  cities: z.boolean().optional(),
});

export const StateQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: StateWhereSchema.optional(),
  orderBy: StateOrderSchema.optional(),
  select: StateSelectSchema.optional()
});

export type State = z.infer<typeof StateSchema>;
export type StateCreate = z.infer<typeof StateCreateSchema>;
export type StateUpdate = z.infer<typeof StateUpdateSchema>;
export type StateWhere = z.infer<typeof StateWhereSchema>;
export type StateOrder = z.infer<typeof StateOrderSchema>;
export type StateSelect = z.infer<typeof StateSelectSchema>;
export type StateQuery = z.infer<typeof StateQuerySchema>;




// ---------- Country Schemas ----------


export const CountrySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  code: z.string(),
});

export const CountryCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const CountryUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
});

export const CountryWhereSchema = toWhereQuerySchema(CountrySchema);

export const CountryOrderSchema =  toOrderBySchema(CountrySchema);

export const CountrySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  states: z.boolean().optional(),
});

export const CountryQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CountryWhereSchema.optional(),
  orderBy: CountryOrderSchema.optional(),
  select: CountrySelectSchema.optional()
});

export type Country = z.infer<typeof CountrySchema>;
export type CountryCreate = z.infer<typeof CountryCreateSchema>;
export type CountryUpdate = z.infer<typeof CountryUpdateSchema>;
export type CountryWhere = z.infer<typeof CountryWhereSchema>;
export type CountryOrder = z.infer<typeof CountryOrderSchema>;
export type CountrySelect = z.infer<typeof CountrySelectSchema>;
export type CountryQuery = z.infer<typeof CountryQuerySchema>;




// ---------- City Schemas ----------


export const CitySchema = z.object({
  id: z.number().int(),
  stateId: z.number().int(),
  name: z.string(),
});

export const CityCreateSchema = z.object({
  stateId: z.number().int(),
  name: z.string(),
});

export const CityUpdateSchema = z.object({
  id: z.number().int().optional(),
  stateId: z.number().int().optional(),
  name: z.string().optional(),
});

export const CityWhereSchema = toWhereQuerySchema(CitySchema);

export const CityOrderSchema =  toOrderBySchema(CitySchema);

export const CitySelectSchema = z.object({
  id: z.boolean().optional(),
  stateId: z.boolean().optional(),
  name: z.boolean().optional(),
  state: z.boolean().optional(),
  addresses: z.boolean().optional(),
});

export const CityQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: CityWhereSchema.optional(),
  orderBy: CityOrderSchema.optional(),
  select: CitySelectSchema.optional()
});

export type City = z.infer<typeof CitySchema>;
export type CityCreate = z.infer<typeof CityCreateSchema>;
export type CityUpdate = z.infer<typeof CityUpdateSchema>;
export type CityWhere = z.infer<typeof CityWhereSchema>;
export type CityOrder = z.infer<typeof CityOrderSchema>;
export type CitySelect = z.infer<typeof CitySelectSchema>;
export type CityQuery = z.infer<typeof CityQuerySchema>;




// ---------- Address Schemas ----------


export const AddressSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  cityId: z.number().int(),
  street: z.string(),
  zip: z.string(),
  order: z.number().int().nullish(),
});

export const AddressCreateSchema = z.object({
  contactId: z.number().int(),
  cityId: z.number().int(),
  street: z.string(),
  zip: z.string(),
  order: z.number().int().nullish(),
});

export const AddressUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  cityId: z.number().int().optional(),
  street: z.string().optional(),
  zip: z.string().optional(),
  order: z.number().int().nullish().optional(),
});

export const AddressWhereSchema = toWhereQuerySchema(AddressSchema);

export const AddressOrderSchema =  toOrderBySchema(AddressSchema);

export const AddressSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  cityId: z.boolean().optional(),
  street: z.boolean().optional(),
  zip: z.boolean().optional(),
  order: z.boolean().optional(),
  city: z.boolean().optional(),
  contact: z.boolean().optional(),
});

export const AddressQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: AddressWhereSchema.optional(),
  orderBy: AddressOrderSchema.optional(),
  select: AddressSelectSchema.optional()
});

export type Address = z.infer<typeof AddressSchema>;
export type AddressCreate = z.infer<typeof AddressCreateSchema>;
export type AddressUpdate = z.infer<typeof AddressUpdateSchema>;
export type AddressWhere = z.infer<typeof AddressWhereSchema>;
export type AddressOrder = z.infer<typeof AddressOrderSchema>;
export type AddressSelect = z.infer<typeof AddressSelectSchema>;
export type AddressQuery = z.infer<typeof AddressQuerySchema>;




// ---------- Email Schemas ----------


export const EmailSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  email: z.string(),
  order: z.number().int().nullish(),
});

export const EmailCreateSchema = z.object({
  contactId: z.number().int(),
  email: z.string(),
  order: z.number().int().nullish(),
});

export const EmailUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  email: z.string().optional(),
  order: z.number().int().nullish().optional(),
});

export const EmailWhereSchema = toWhereQuerySchema(EmailSchema);

export const EmailOrderSchema =  toOrderBySchema(EmailSchema);

export const EmailSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  email: z.boolean().optional(),
  order: z.boolean().optional(),
  contact: z.boolean().optional(),
});

export const EmailQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: EmailWhereSchema.optional(),
  orderBy: EmailOrderSchema.optional(),
  select: EmailSelectSchema.optional()
});

export type Email = z.infer<typeof EmailSchema>;
export type EmailCreate = z.infer<typeof EmailCreateSchema>;
export type EmailUpdate = z.infer<typeof EmailUpdateSchema>;
export type EmailWhere = z.infer<typeof EmailWhereSchema>;
export type EmailOrder = z.infer<typeof EmailOrderSchema>;
export type EmailSelect = z.infer<typeof EmailSelectSchema>;
export type EmailQuery = z.infer<typeof EmailQuerySchema>;




// ---------- Phone Schemas ----------


export const PhoneSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  phone: z.string(),
  order: z.number().int().nullish(),
});

export const PhoneCreateSchema = z.object({
  contactId: z.number().int(),
  phone: z.string(),
  order: z.number().int().nullish(),
});

export const PhoneUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  phone: z.string().optional(),
  order: z.number().int().nullish().optional(),
});

export const PhoneWhereSchema = toWhereQuerySchema(PhoneSchema);

export const PhoneOrderSchema =  toOrderBySchema(PhoneSchema);

export const PhoneSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  phone: z.boolean().optional(),
  order: z.boolean().optional(),
  contact: z.boolean().optional(),
});

export const PhoneQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: PhoneWhereSchema.optional(),
  orderBy: PhoneOrderSchema.optional(),
  select: PhoneSelectSchema.optional()
});

export type Phone = z.infer<typeof PhoneSchema>;
export type PhoneCreate = z.infer<typeof PhoneCreateSchema>;
export type PhoneUpdate = z.infer<typeof PhoneUpdateSchema>;
export type PhoneWhere = z.infer<typeof PhoneWhereSchema>;
export type PhoneOrder = z.infer<typeof PhoneOrderSchema>;
export type PhoneSelect = z.infer<typeof PhoneSelectSchema>;
export type PhoneQuery = z.infer<typeof PhoneQuerySchema>;




// ---------- Website Schemas ----------


export const WebsiteSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  url: z.string(),
  order: z.number().int().nullish(),
});

export const WebsiteCreateSchema = z.object({
  contactId: z.number().int(),
  url: z.string(),
  order: z.number().int().nullish(),
});

export const WebsiteUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  url: z.string().optional(),
  order: z.number().int().nullish().optional(),
});

export const WebsiteWhereSchema = toWhereQuerySchema(WebsiteSchema);

export const WebsiteOrderSchema =  toOrderBySchema(WebsiteSchema);

export const WebsiteSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  url: z.boolean().optional(),
  order: z.boolean().optional(),
  contact: z.boolean().optional(),
});

export const WebsiteQuerySchema = z.object({
  take: z.coerce.number().int().min(1), 
  skip: z.coerce.number().int().min(0), 
  where: WebsiteWhereSchema.optional(),
  orderBy: WebsiteOrderSchema.optional(),
  select: WebsiteSelectSchema.optional()
});

export type Website = z.infer<typeof WebsiteSchema>;
export type WebsiteCreate = z.infer<typeof WebsiteCreateSchema>;
export type WebsiteUpdate = z.infer<typeof WebsiteUpdateSchema>;
export type WebsiteWhere = z.infer<typeof WebsiteWhereSchema>;
export type WebsiteOrder = z.infer<typeof WebsiteOrderSchema>;
export type WebsiteSelect = z.infer<typeof WebsiteSelectSchema>;
export type WebsiteQuery = z.infer<typeof WebsiteQuerySchema>;


