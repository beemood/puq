
import { toOrderBySchema, toWhereQuerySchema } from '@puq/zod';
import {z} from 'zod';
    

// ---------- Industry Schemas ----------


export const IndustrySchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const IndustryCreateSchema = z.object({
  name: z.string(),
});

export const IndustryUpdateSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export const IndustryWhereSchema = toWhereQuerySchema(IndustrySchema);

export const IndustryOrderSchema =  toOrderBySchema(IndustrySchema);

export const IndustrySelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
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
});

export const OrgCreateSchema = z.object({
  name: z.string(),
});

export const OrgUpdateSchema = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional(),
  name: z.string().optional(),
});

export const OrgWhereSchema = toWhereQuerySchema(OrgSchema);

export const OrgOrderSchema =  toOrderBySchema(OrgSchema);

export const OrgSelectSchema = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  name: z.boolean().optional(),
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
  organization: z.boolean().optional(),
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




// ---------- Agent Schemas ----------


export const AgentSchema = z.object({
  id: z.number().int(),
  orgId: z.number().int().nullish(),
  firstName: z.string().nullish(),
  middleName: z.string().nullish(),
  lastName: z.string().nullish(),
  occupation: z.string().nullish(),
  gender: z.string().nullish(),
  phoneNumber: z.string().nullish(),
  note: z.string().nullish(),
});

export const AgentCreateSchema = z.object({
  orgId: z.number().int().nullish(),
  firstName: z.string().nullish(),
  middleName: z.string().nullish(),
  lastName: z.string().nullish(),
  occupation: z.string().nullish(),
  gender: z.string().nullish(),
  phoneNumber: z.string().nullish(),
  note: z.string().nullish(),
});

export const AgentUpdateSchema = z.object({
  id: z.number().int().optional(),
  orgId: z.number().int().nullish().optional(),
  firstName: z.string().nullish().optional(),
  middleName: z.string().nullish().optional(),
  lastName: z.string().nullish().optional(),
  occupation: z.string().nullish().optional(),
  gender: z.string().nullish().optional(),
  phoneNumber: z.string().nullish().optional(),
  note: z.string().nullish().optional(),
});

export const AgentWhereSchema = toWhereQuerySchema(AgentSchema);

export const AgentOrderSchema =  toOrderBySchema(AgentSchema);

export const AgentSelectSchema = z.object({
  id: z.boolean().optional(),
  orgId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  occupation: z.boolean().optional(),
  gender: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  note: z.boolean().optional(),
  organization: z.boolean().optional(),
  contacts: z.boolean().optional(),
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
  agentId: z.number().int(),
  uuid: z.string(),
  order: z.number().int().nullish(),
  type: z.any(),
});

export const ContactCreateSchema = z.object({
  agentId: z.number().int(),
  order: z.number().int().nullish(),
  type: z.any(),
});

export const ContactUpdateSchema = z.object({
  id: z.number().int().optional(),
  agentId: z.number().int().optional(),
  uuid: z.string().optional(),
  order: z.number().int().nullish().optional(),
  type: z.any().optional(),
});

export const ContactWhereSchema = toWhereQuerySchema(ContactSchema);

export const ContactOrderSchema =  toOrderBySchema(ContactSchema);

export const ContactSelectSchema = z.object({
  id: z.boolean().optional(),
  agentId: z.boolean().optional(),
  uuid: z.boolean().optional(),
  order: z.boolean().optional(),
  type: z.boolean().optional(),
  emails: z.boolean().optional(),
  phones: z.boolean().optional(),
  address: z.boolean().optional(),
  website: z.boolean().optional(),
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




// ---------- Email Schemas ----------


export const EmailSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  order: z.number().int().nullish(),
  email: z.string(),
});

export const EmailCreateSchema = z.object({
  contactId: z.number().int(),
  order: z.number().int().nullish(),
  email: z.string(),
});

export const EmailUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  order: z.number().int().nullish().optional(),
  email: z.string().optional(),
});

export const EmailWhereSchema = toWhereQuerySchema(EmailSchema);

export const EmailOrderSchema =  toOrderBySchema(EmailSchema);

export const EmailSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  order: z.boolean().optional(),
  email: z.boolean().optional(),
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
  order: z.number().int().nullish(),
  phone: z.string(),
});

export const PhoneCreateSchema = z.object({
  contactId: z.number().int(),
  order: z.number().int().nullish(),
  phone: z.string(),
});

export const PhoneUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  order: z.number().int().nullish().optional(),
  phone: z.string().optional(),
});

export const PhoneWhereSchema = toWhereQuerySchema(PhoneSchema);

export const PhoneOrderSchema =  toOrderBySchema(PhoneSchema);

export const PhoneSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  order: z.boolean().optional(),
  phone: z.boolean().optional(),
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




// ---------- Address Schemas ----------


export const AddressSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  order: z.number().int().nullish(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zip: z.string(),
});

export const AddressCreateSchema = z.object({
  contactId: z.number().int(),
  order: z.number().int().nullish(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zip: z.string(),
});

export const AddressUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  order: z.number().int().nullish().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  zip: z.string().optional(),
});

export const AddressWhereSchema = toWhereQuerySchema(AddressSchema);

export const AddressOrderSchema =  toOrderBySchema(AddressSchema);

export const AddressSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  order: z.boolean().optional(),
  street: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  country: z.boolean().optional(),
  zip: z.boolean().optional(),
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




// ---------- Website Schemas ----------


export const WebsiteSchema = z.object({
  id: z.number().int(),
  contactId: z.number().int(),
  order: z.number().int().nullish(),
  url: z.string(),
});

export const WebsiteCreateSchema = z.object({
  contactId: z.number().int(),
  order: z.number().int().nullish(),
  url: z.string(),
});

export const WebsiteUpdateSchema = z.object({
  id: z.number().int().optional(),
  contactId: z.number().int().optional(),
  order: z.number().int().nullish().optional(),
  url: z.string().optional(),
});

export const WebsiteWhereSchema = toWhereQuerySchema(WebsiteSchema);

export const WebsiteOrderSchema =  toOrderBySchema(WebsiteSchema);

export const WebsiteSelectSchema = z.object({
  id: z.boolean().optional(),
  contactId: z.boolean().optional(),
  order: z.boolean().optional(),
  url: z.boolean().optional(),
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


