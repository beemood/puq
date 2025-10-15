import PZ from '@puq/zod';
import { z } from 'zod';
import { slugify } from '@puq/names';

export const ContactTypeSchema = z.enum(["WORK","HOME","EMERGENCY"])

export const GenderSchema = z.enum(["MALE","FEMALE"])


      export const IndustryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
companies: z.boolean()
      }).partial()
      


      export const CompanyOwnProjectionSchema = z.object({ 
          id: z.boolean(),
uuid: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
agents: z.boolean(),
industries: z.boolean()
      }).partial()
      


      export const CompanyIndustryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
companyId: z.boolean(),
industryId: z.boolean(),
industry: z.boolean(),
company: z.boolean()
      }).partial()
      


      export const DepartmentOwnProjectionSchema = z.object({ 
          id: z.boolean(),
parentId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
parent: z.boolean(),
children: z.boolean(),
titles: z.boolean()
      }).partial()
      


      export const TitleOwnProjectionSchema = z.object({ 
          id: z.boolean(),
departmentId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
agents: z.boolean(),
department: z.boolean()
      }).partial()
      


      export const AgentOwnProjectionSchema = z.object({ 
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
title: z.boolean()
      }).partial()
      


      export const ContactOwnProjectionSchema = z.object({ 
          id: z.boolean(),
uuid: z.boolean(),
agentId: z.boolean(),
type: z.boolean(),
order: z.boolean(),
emails: z.boolean(),
phones: z.boolean(),
addresses: z.boolean(),
websites: z.boolean(),
agent: z.boolean()
      }).partial()
      


      export const StateOwnProjectionSchema = z.object({ 
          id: z.boolean(),
countryId: z.boolean(),
state: z.boolean(),
code: z.boolean(),
country: z.boolean(),
cities: z.boolean()
      }).partial()
      


      export const CountryOwnProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
code: z.boolean(),
states: z.boolean()
      }).partial()
      


      export const CityOwnProjectionSchema = z.object({ 
          id: z.boolean(),
stateId: z.boolean(),
name: z.boolean(),
state: z.boolean(),
addresses: z.boolean()
      }).partial()
      


      export const AddressOwnProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
cityId: z.boolean(),
street: z.boolean(),
zip: z.boolean(),
order: z.boolean(),
city: z.boolean(),
contact: z.boolean()
      }).partial()
      


      export const EmailOwnProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
email: z.boolean(),
order: z.boolean(),
contact: z.boolean()
      }).partial()
      


      export const PhoneOwnProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
phone: z.boolean(),
order: z.boolean(),
contact: z.boolean()
      }).partial()
      


      export const WebsiteOwnProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
url: z.boolean(),
order: z.boolean(),
contact: z.boolean()
      }).partial()
      


    export const IndustryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const CompanyOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
uuid:PZ.StringFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema
    }).partial()


    export const CompanyIndustryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
companyId:PZ.IntegerFilterSchema,
industryId:PZ.IntegerFilterSchema
    }).partial()


    export const DepartmentOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
parentId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema
    }).partial()


    export const TitleOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
departmentId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
slug:PZ.StringFilterSchema,
description:PZ.StringFilterSchema
    }).partial()


    export const AgentOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
companyId:PZ.IntegerFilterSchema,
titleId:PZ.IntegerFilterSchema,
firstName:PZ.StringFilterSchema,
middleName:PZ.StringFilterSchema,
lastName:PZ.StringFilterSchema,
preferedName:PZ.StringFilterSchema,
gender:GenderSchema,
slug:PZ.StringFilterSchema,
note:PZ.StringFilterSchema
    }).partial()


    export const ContactOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
uuid:PZ.StringFilterSchema,
agentId:PZ.IntegerFilterSchema,
type:ContactTypeSchema,
order:PZ.IntegerFilterSchema
    }).partial()


    export const StateOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
countryId:PZ.IntegerFilterSchema,
state:PZ.StringFilterSchema,
code:PZ.StringFilterSchema
    }).partial()


    export const CountryOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema,
code:PZ.StringFilterSchema
    }).partial()


    export const CityOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
stateId:PZ.IntegerFilterSchema,
name:PZ.StringFilterSchema
    }).partial()


    export const AddressOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
contactId:PZ.IntegerFilterSchema,
cityId:PZ.IntegerFilterSchema,
street:PZ.StringFilterSchema,
zip:PZ.StringFilterSchema,
order:PZ.IntegerFilterSchema
    }).partial()


    export const EmailOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
contactId:PZ.IntegerFilterSchema,
email:PZ.StringFilterSchema,
order:PZ.IntegerFilterSchema
    }).partial()


    export const PhoneOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
contactId:PZ.IntegerFilterSchema,
phone:PZ.StringFilterSchema,
order:PZ.IntegerFilterSchema
    }).partial()


    export const WebsiteOwnWhereSchema = z.object({ 
      id:PZ.IntegerFilterSchema,
contactId:PZ.IntegerFilterSchema,
url:PZ.StringFilterSchema,
order:PZ.IntegerFilterSchema
    }).partial()


    export const IndustryOwnQueryOneSchema = z.object({ 
        where:IndustryOwnWhereSchema, 
        select: IndustryOwnProjectionSchema, 
        omit: IndustryOwnProjectionSchema, 
    }).partial()
    


    export const IndustryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: IndustryOwnWhereSchema,
      select: IndustryOwnProjectionSchema, 
      omit: IndustryOwnProjectionSchema, 
    }).partial()
    


    export const CompanyOwnQueryOneSchema = z.object({ 
        where:CompanyOwnWhereSchema, 
        select: CompanyOwnProjectionSchema, 
        omit: CompanyOwnProjectionSchema, 
    }).partial()
    


    export const CompanyOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CompanyOwnWhereSchema,
      select: CompanyOwnProjectionSchema, 
      omit: CompanyOwnProjectionSchema, 
    }).partial()
    


    export const CompanyIndustryOwnQueryOneSchema = z.object({ 
        where:CompanyIndustryOwnWhereSchema, 
        select: CompanyIndustryOwnProjectionSchema, 
        omit: CompanyIndustryOwnProjectionSchema, 
    }).partial()
    


    export const CompanyIndustryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CompanyIndustryOwnWhereSchema,
      select: CompanyIndustryOwnProjectionSchema, 
      omit: CompanyIndustryOwnProjectionSchema, 
    }).partial()
    


    export const DepartmentOwnQueryOneSchema = z.object({ 
        where:DepartmentOwnWhereSchema, 
        select: DepartmentOwnProjectionSchema, 
        omit: DepartmentOwnProjectionSchema, 
    }).partial()
    


    export const DepartmentOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: DepartmentOwnWhereSchema,
      select: DepartmentOwnProjectionSchema, 
      omit: DepartmentOwnProjectionSchema, 
    }).partial()
    


    export const TitleOwnQueryOneSchema = z.object({ 
        where:TitleOwnWhereSchema, 
        select: TitleOwnProjectionSchema, 
        omit: TitleOwnProjectionSchema, 
    }).partial()
    


    export const TitleOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TitleOwnWhereSchema,
      select: TitleOwnProjectionSchema, 
      omit: TitleOwnProjectionSchema, 
    }).partial()
    


    export const AgentOwnQueryOneSchema = z.object({ 
        where:AgentOwnWhereSchema, 
        select: AgentOwnProjectionSchema, 
        omit: AgentOwnProjectionSchema, 
    }).partial()
    


    export const AgentOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AgentOwnWhereSchema,
      select: AgentOwnProjectionSchema, 
      omit: AgentOwnProjectionSchema, 
    }).partial()
    


    export const ContactOwnQueryOneSchema = z.object({ 
        where:ContactOwnWhereSchema, 
        select: ContactOwnProjectionSchema, 
        omit: ContactOwnProjectionSchema, 
    }).partial()
    


    export const ContactOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ContactOwnWhereSchema,
      select: ContactOwnProjectionSchema, 
      omit: ContactOwnProjectionSchema, 
    }).partial()
    


    export const StateOwnQueryOneSchema = z.object({ 
        where:StateOwnWhereSchema, 
        select: StateOwnProjectionSchema, 
        omit: StateOwnProjectionSchema, 
    }).partial()
    


    export const StateOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StateOwnWhereSchema,
      select: StateOwnProjectionSchema, 
      omit: StateOwnProjectionSchema, 
    }).partial()
    


    export const CountryOwnQueryOneSchema = z.object({ 
        where:CountryOwnWhereSchema, 
        select: CountryOwnProjectionSchema, 
        omit: CountryOwnProjectionSchema, 
    }).partial()
    


    export const CountryOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CountryOwnWhereSchema,
      select: CountryOwnProjectionSchema, 
      omit: CountryOwnProjectionSchema, 
    }).partial()
    


    export const CityOwnQueryOneSchema = z.object({ 
        where:CityOwnWhereSchema, 
        select: CityOwnProjectionSchema, 
        omit: CityOwnProjectionSchema, 
    }).partial()
    


    export const CityOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CityOwnWhereSchema,
      select: CityOwnProjectionSchema, 
      omit: CityOwnProjectionSchema, 
    }).partial()
    


    export const AddressOwnQueryOneSchema = z.object({ 
        where:AddressOwnWhereSchema, 
        select: AddressOwnProjectionSchema, 
        omit: AddressOwnProjectionSchema, 
    }).partial()
    


    export const AddressOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AddressOwnWhereSchema,
      select: AddressOwnProjectionSchema, 
      omit: AddressOwnProjectionSchema, 
    }).partial()
    


    export const EmailOwnQueryOneSchema = z.object({ 
        where:EmailOwnWhereSchema, 
        select: EmailOwnProjectionSchema, 
        omit: EmailOwnProjectionSchema, 
    }).partial()
    


    export const EmailOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: EmailOwnWhereSchema,
      select: EmailOwnProjectionSchema, 
      omit: EmailOwnProjectionSchema, 
    }).partial()
    


    export const PhoneOwnQueryOneSchema = z.object({ 
        where:PhoneOwnWhereSchema, 
        select: PhoneOwnProjectionSchema, 
        omit: PhoneOwnProjectionSchema, 
    }).partial()
    


    export const PhoneOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PhoneOwnWhereSchema,
      select: PhoneOwnProjectionSchema, 
      omit: PhoneOwnProjectionSchema, 
    }).partial()
    


    export const WebsiteOwnQueryOneSchema = z.object({ 
        where:WebsiteOwnWhereSchema, 
        select: WebsiteOwnProjectionSchema, 
        omit: WebsiteOwnProjectionSchema, 
    }).partial()
    


    export const WebsiteOwnQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: WebsiteOwnWhereSchema,
      select: WebsiteOwnProjectionSchema, 
      omit: WebsiteOwnProjectionSchema, 
    }).partial()
    


    export const IndustryCreateSchema = z.object({ 
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


    export const IndustryUpdateSchema = z.object({ 
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


    export const IndustryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const IndustryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
companies: z.object({ 
        some: CompanyIndustryOwnWhereSchema,
        every: CompanyIndustryOwnWhereSchema,
        none: CompanyIndustryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const IndustryProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
companies: CompanyIndustryOwnQuerySchema
     }).partial()
     


    export const IndustryQueryOneSchema = z.object({ 
      where: IndustryWhereSchema,
      select:IndustryProjectionSchema, 
      omit:IndustryProjectionSchema
    }).partial()
    


    export const IndustryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: IndustryWhereSchema, 
      select: IndustryProjectionSchema, 
      omit: IndustryProjectionSchema
    }).partial()
    


    export const CompanyCreateSchema = z.object({ 
      name:z.string(),
slug:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const CompanyUpdateSchema = z.object({ 
        name:z.string().optional(),
slug:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const CompanyOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
uuid: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema
    }).partial()
    


    export const CompanyWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
uuid: PZ.StringFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
agents: z.object({ 
        some: AgentOwnWhereSchema,
        every: AgentOwnWhereSchema,
        none: AgentOwnWhereSchema,
      }).partial(),
industries: z.object({ 
        some: CompanyIndustryOwnWhereSchema,
        every: CompanyIndustryOwnWhereSchema,
        none: CompanyIndustryOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CompanyProjectionSchema = z.object({ 
          id: z.boolean(),
uuid: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
agents: AgentOwnQuerySchema,
industries: CompanyIndustryOwnQuerySchema
     }).partial()
     


    export const CompanyQueryOneSchema = z.object({ 
      where: CompanyWhereSchema,
      select:CompanyProjectionSchema, 
      omit:CompanyProjectionSchema
    }).partial()
    


    export const CompanyQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CompanyWhereSchema, 
      select: CompanyProjectionSchema, 
      omit: CompanyProjectionSchema
    }).partial()
    


    export const CompanyIndustryCreateSchema = z.object({ 
      companyId:z.int(),
industryId:z.int()
    })


    export const CompanyIndustryUpdateSchema = z.object({ 
        companyId:z.int().optional(),
industryId:z.int().optional()
    })


    export const CompanyIndustryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
companyId: PZ.OrderDirectionSchema,
industryId: PZ.OrderDirectionSchema
    }).partial()
    


    export const CompanyIndustryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
companyId: PZ.IntegerFilterSchema,
industryId: PZ.IntegerFilterSchema,
industry: z.object({ 
        some: IndustryOwnWhereSchema,
        every: IndustryOwnWhereSchema,
        none: IndustryOwnWhereSchema,
      }).partial(),
company: z.object({ 
        some: CompanyOwnWhereSchema,
        every: CompanyOwnWhereSchema,
        none: CompanyOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CompanyIndustryProjectionSchema = z.object({ 
          id: z.boolean(),
companyId: z.boolean(),
industryId: z.boolean(),
industry: IndustryOwnQueryOneSchema,
company: CompanyOwnQueryOneSchema
     }).partial()
     


    export const CompanyIndustryQueryOneSchema = z.object({ 
      where: CompanyIndustryWhereSchema,
      select:CompanyIndustryProjectionSchema, 
      omit:CompanyIndustryProjectionSchema
    }).partial()
    


    export const CompanyIndustryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CompanyIndustryWhereSchema, 
      select: CompanyIndustryProjectionSchema, 
      omit: CompanyIndustryProjectionSchema
    }).partial()
    


    export const DepartmentCreateSchema = z.object({ 
      parentId:z.int().optional(),
name:z.string(),
slug:z.string().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const DepartmentUpdateSchema = z.object({ 
        parentId:z.int().optional().optional(),
name:z.string().optional(),
slug:z.string().optional().optional()
    }).transform((value)=>{ 
        
      
      if(value.slug==undefined && value.name!=undefined){ 
        return { 
          ...value, 
          slug: slugify(value.name) 
          }
          }
      return value 
      })


    export const DepartmentOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
parentId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema
    }).partial()
    


    export const DepartmentWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
parentId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
parent: z.object({ 
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      }).partial(),
children: z.object({ 
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      }).partial(),
titles: z.object({ 
        some: TitleOwnWhereSchema,
        every: TitleOwnWhereSchema,
        none: TitleOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const DepartmentProjectionSchema = z.object({ 
          id: z.boolean(),
parentId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
parent: DepartmentOwnQueryOneSchema,
children: DepartmentOwnQuerySchema,
titles: TitleOwnQuerySchema
     }).partial()
     


    export const DepartmentQueryOneSchema = z.object({ 
      where: DepartmentWhereSchema,
      select:DepartmentProjectionSchema, 
      omit:DepartmentProjectionSchema
    }).partial()
    


    export const DepartmentQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: DepartmentWhereSchema, 
      select: DepartmentProjectionSchema, 
      omit: DepartmentProjectionSchema
    }).partial()
    


    export const TitleCreateSchema = z.object({ 
      departmentId:z.int().optional(),
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


    export const TitleUpdateSchema = z.object({ 
        departmentId:z.int().optional().optional(),
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


    export const TitleOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
departmentId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
description: PZ.OrderDirectionSchema
    }).partial()
    


    export const TitleWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
departmentId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
slug: PZ.StringFilterSchema,
description: PZ.StringFilterSchema,
agents: z.object({ 
        some: AgentOwnWhereSchema,
        every: AgentOwnWhereSchema,
        none: AgentOwnWhereSchema,
      }).partial(),
department: z.object({ 
        some: DepartmentOwnWhereSchema,
        every: DepartmentOwnWhereSchema,
        none: DepartmentOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const TitleProjectionSchema = z.object({ 
          id: z.boolean(),
departmentId: z.boolean(),
name: z.boolean(),
slug: z.boolean(),
description: z.boolean(),
agents: AgentOwnQuerySchema,
department: DepartmentOwnQueryOneSchema
     }).partial()
     


    export const TitleQueryOneSchema = z.object({ 
      where: TitleWhereSchema,
      select:TitleProjectionSchema, 
      omit:TitleProjectionSchema
    }).partial()
    


    export const TitleQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: TitleWhereSchema, 
      select: TitleProjectionSchema, 
      omit: TitleProjectionSchema
    }).partial()
    


    export const AgentCreateSchema = z.object({ 
      companyId:z.int().optional(),
titleId:z.int().optional(),
firstName:z.string(),
middleName:z.string().optional(),
lastName:z.string(),
preferedName:z.string().optional(),
gender:GenderSchema.optional(),
slug:z.string().optional(),
note:z.string().optional()
    })


    export const AgentUpdateSchema = z.object({ 
        companyId:z.int().optional().optional(),
titleId:z.int().optional().optional(),
firstName:z.string().optional(),
middleName:z.string().optional().optional(),
lastName:z.string().optional(),
preferedName:z.string().optional().optional(),
gender:GenderSchema.optional().optional(),
slug:z.string().optional().optional(),
note:z.string().optional().optional()
    })


    export const AgentOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
companyId: PZ.OrderDirectionSchema,
titleId: PZ.OrderDirectionSchema,
firstName: PZ.OrderDirectionSchema,
middleName: PZ.OrderDirectionSchema,
lastName: PZ.OrderDirectionSchema,
preferedName: PZ.OrderDirectionSchema,
slug: PZ.OrderDirectionSchema,
note: PZ.OrderDirectionSchema
    }).partial()
    


    export const AgentWhereSchema = z.object({ 
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
company: z.object({ 
        some: CompanyOwnWhereSchema,
        every: CompanyOwnWhereSchema,
        none: CompanyOwnWhereSchema,
      }).partial(),
contacts: z.object({ 
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      }).partial(),
title: z.object({ 
        some: TitleOwnWhereSchema,
        every: TitleOwnWhereSchema,
        none: TitleOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AgentProjectionSchema = z.object({ 
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
company: CompanyOwnQueryOneSchema,
contacts: ContactOwnQuerySchema,
title: TitleOwnQueryOneSchema
     }).partial()
     


    export const AgentQueryOneSchema = z.object({ 
      where: AgentWhereSchema,
      select:AgentProjectionSchema, 
      omit:AgentProjectionSchema
    }).partial()
    


    export const AgentQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AgentWhereSchema, 
      select: AgentProjectionSchema, 
      omit: AgentProjectionSchema
    }).partial()
    


    export const ContactCreateSchema = z.object({ 
      agentId:z.int(),
type:ContactTypeSchema,
order:z.int().optional()
    })


    export const ContactUpdateSchema = z.object({ 
        agentId:z.int().optional(),
type:ContactTypeSchema.optional(),
order:z.int().optional().optional()
    })


    export const ContactOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
uuid: PZ.OrderDirectionSchema,
agentId: PZ.OrderDirectionSchema,
order: PZ.OrderDirectionSchema
    }).partial()
    


    export const ContactWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
uuid: PZ.StringFilterSchema,
agentId: PZ.IntegerFilterSchema,
type: ContactTypeSchema,
order: PZ.IntegerFilterSchema,
emails: z.object({ 
        some: EmailOwnWhereSchema,
        every: EmailOwnWhereSchema,
        none: EmailOwnWhereSchema,
      }).partial(),
phones: z.object({ 
        some: PhoneOwnWhereSchema,
        every: PhoneOwnWhereSchema,
        none: PhoneOwnWhereSchema,
      }).partial(),
addresses: z.object({ 
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      }).partial(),
websites: z.object({ 
        some: WebsiteOwnWhereSchema,
        every: WebsiteOwnWhereSchema,
        none: WebsiteOwnWhereSchema,
      }).partial(),
agent: z.object({ 
        some: AgentOwnWhereSchema,
        every: AgentOwnWhereSchema,
        none: AgentOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const ContactProjectionSchema = z.object({ 
          id: z.boolean(),
uuid: z.boolean(),
agentId: z.boolean(),
type: z.boolean(),
order: z.boolean(),
emails: EmailOwnQuerySchema,
phones: PhoneOwnQuerySchema,
addresses: AddressOwnQuerySchema,
websites: WebsiteOwnQuerySchema,
agent: AgentOwnQueryOneSchema
     }).partial()
     


    export const ContactQueryOneSchema = z.object({ 
      where: ContactWhereSchema,
      select:ContactProjectionSchema, 
      omit:ContactProjectionSchema
    }).partial()
    


    export const ContactQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: ContactWhereSchema, 
      select: ContactProjectionSchema, 
      omit: ContactProjectionSchema
    }).partial()
    


    export const StateCreateSchema = z.object({ 
      countryId:z.int(),
state:z.string(),
code:z.string()
    })


    export const StateUpdateSchema = z.object({ 
        countryId:z.int().optional(),
state:z.string().optional(),
code:z.string().optional()
    })


    export const StateOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
countryId: PZ.OrderDirectionSchema,
state: PZ.OrderDirectionSchema,
code: PZ.OrderDirectionSchema
    }).partial()
    


    export const StateWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
countryId: PZ.IntegerFilterSchema,
state: PZ.StringFilterSchema,
code: PZ.StringFilterSchema,
country: z.object({ 
        some: CountryOwnWhereSchema,
        every: CountryOwnWhereSchema,
        none: CountryOwnWhereSchema,
      }).partial(),
cities: z.object({ 
        some: CityOwnWhereSchema,
        every: CityOwnWhereSchema,
        none: CityOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const StateProjectionSchema = z.object({ 
          id: z.boolean(),
countryId: z.boolean(),
state: z.boolean(),
code: z.boolean(),
country: CountryOwnQueryOneSchema,
cities: CityOwnQuerySchema
     }).partial()
     


    export const StateQueryOneSchema = z.object({ 
      where: StateWhereSchema,
      select:StateProjectionSchema, 
      omit:StateProjectionSchema
    }).partial()
    


    export const StateQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: StateWhereSchema, 
      select: StateProjectionSchema, 
      omit: StateProjectionSchema
    }).partial()
    


    export const CountryCreateSchema = z.object({ 
      name:z.string(),
code:z.string()
    })


    export const CountryUpdateSchema = z.object({ 
        name:z.string().optional(),
code:z.string().optional()
    })


    export const CountryOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema,
code: PZ.OrderDirectionSchema
    }).partial()
    


    export const CountryWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
code: PZ.StringFilterSchema,
states: z.object({ 
        some: StateOwnWhereSchema,
        every: StateOwnWhereSchema,
        none: StateOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CountryProjectionSchema = z.object({ 
          id: z.boolean(),
name: z.boolean(),
code: z.boolean(),
states: StateOwnQuerySchema
     }).partial()
     


    export const CountryQueryOneSchema = z.object({ 
      where: CountryWhereSchema,
      select:CountryProjectionSchema, 
      omit:CountryProjectionSchema
    }).partial()
    


    export const CountryQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CountryWhereSchema, 
      select: CountryProjectionSchema, 
      omit: CountryProjectionSchema
    }).partial()
    


    export const CityCreateSchema = z.object({ 
      stateId:z.int(),
name:z.string()
    })


    export const CityUpdateSchema = z.object({ 
        stateId:z.int().optional(),
name:z.string().optional()
    })


    export const CityOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
stateId: PZ.OrderDirectionSchema,
name: PZ.OrderDirectionSchema
    }).partial()
    


    export const CityWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
stateId: PZ.IntegerFilterSchema,
name: PZ.StringFilterSchema,
state: z.object({ 
        some: StateOwnWhereSchema,
        every: StateOwnWhereSchema,
        none: StateOwnWhereSchema,
      }).partial(),
addresses: z.object({ 
        some: AddressOwnWhereSchema,
        every: AddressOwnWhereSchema,
        none: AddressOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const CityProjectionSchema = z.object({ 
          id: z.boolean(),
stateId: z.boolean(),
name: z.boolean(),
state: StateOwnQueryOneSchema,
addresses: AddressOwnQuerySchema
     }).partial()
     


    export const CityQueryOneSchema = z.object({ 
      where: CityWhereSchema,
      select:CityProjectionSchema, 
      omit:CityProjectionSchema
    }).partial()
    


    export const CityQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: CityWhereSchema, 
      select: CityProjectionSchema, 
      omit: CityProjectionSchema
    }).partial()
    


    export const AddressCreateSchema = z.object({ 
      contactId:z.int(),
cityId:z.int(),
street:z.string(),
zip:z.string(),
order:z.int().optional()
    })


    export const AddressUpdateSchema = z.object({ 
        contactId:z.int().optional(),
cityId:z.int().optional(),
street:z.string().optional(),
zip:z.string().optional(),
order:z.int().optional().optional()
    })


    export const AddressOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
contactId: PZ.OrderDirectionSchema,
cityId: PZ.OrderDirectionSchema,
street: PZ.OrderDirectionSchema,
zip: PZ.OrderDirectionSchema,
order: PZ.OrderDirectionSchema
    }).partial()
    


    export const AddressWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
contactId: PZ.IntegerFilterSchema,
cityId: PZ.IntegerFilterSchema,
street: PZ.StringFilterSchema,
zip: PZ.StringFilterSchema,
order: PZ.IntegerFilterSchema,
city: z.object({ 
        some: CityOwnWhereSchema,
        every: CityOwnWhereSchema,
        none: CityOwnWhereSchema,
      }).partial(),
contact: z.object({ 
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const AddressProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
cityId: z.boolean(),
street: z.boolean(),
zip: z.boolean(),
order: z.boolean(),
city: CityOwnQueryOneSchema,
contact: ContactOwnQueryOneSchema
     }).partial()
     


    export const AddressQueryOneSchema = z.object({ 
      where: AddressWhereSchema,
      select:AddressProjectionSchema, 
      omit:AddressProjectionSchema
    }).partial()
    


    export const AddressQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: AddressWhereSchema, 
      select: AddressProjectionSchema, 
      omit: AddressProjectionSchema
    }).partial()
    


    export const EmailCreateSchema = z.object({ 
      contactId:z.int(),
email:z.string(),
order:z.int().optional()
    })


    export const EmailUpdateSchema = z.object({ 
        contactId:z.int().optional(),
email:z.string().optional(),
order:z.int().optional().optional()
    })


    export const EmailOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
contactId: PZ.OrderDirectionSchema,
email: PZ.OrderDirectionSchema,
order: PZ.OrderDirectionSchema
    }).partial()
    


    export const EmailWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
contactId: PZ.IntegerFilterSchema,
email: PZ.StringFilterSchema,
order: PZ.IntegerFilterSchema,
contact: z.object({ 
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const EmailProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
email: z.boolean(),
order: z.boolean(),
contact: ContactOwnQueryOneSchema
     }).partial()
     


    export const EmailQueryOneSchema = z.object({ 
      where: EmailWhereSchema,
      select:EmailProjectionSchema, 
      omit:EmailProjectionSchema
    }).partial()
    


    export const EmailQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: EmailWhereSchema, 
      select: EmailProjectionSchema, 
      omit: EmailProjectionSchema
    }).partial()
    


    export const PhoneCreateSchema = z.object({ 
      contactId:z.int(),
phone:z.string(),
order:z.int().optional()
    })


    export const PhoneUpdateSchema = z.object({ 
        contactId:z.int().optional(),
phone:z.string().optional(),
order:z.int().optional().optional()
    })


    export const PhoneOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
contactId: PZ.OrderDirectionSchema,
phone: PZ.OrderDirectionSchema,
order: PZ.OrderDirectionSchema
    }).partial()
    


    export const PhoneWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
contactId: PZ.IntegerFilterSchema,
phone: PZ.StringFilterSchema,
order: PZ.IntegerFilterSchema,
contact: z.object({ 
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const PhoneProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
phone: z.boolean(),
order: z.boolean(),
contact: ContactOwnQueryOneSchema
     }).partial()
     


    export const PhoneQueryOneSchema = z.object({ 
      where: PhoneWhereSchema,
      select:PhoneProjectionSchema, 
      omit:PhoneProjectionSchema
    }).partial()
    


    export const PhoneQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: PhoneWhereSchema, 
      select: PhoneProjectionSchema, 
      omit: PhoneProjectionSchema
    }).partial()
    


    export const WebsiteCreateSchema = z.object({ 
      contactId:z.int(),
url:z.string(),
order:z.int().optional()
    })


    export const WebsiteUpdateSchema = z.object({ 
        contactId:z.int().optional(),
url:z.string().optional(),
order:z.int().optional().optional()
    })


    export const WebsiteOrderBySchema = z.object({
        id: PZ.OrderDirectionSchema,
contactId: PZ.OrderDirectionSchema,
url: PZ.OrderDirectionSchema,
order: PZ.OrderDirectionSchema
    }).partial()
    


    export const WebsiteWhereSchema = z.object({ 
        id: PZ.IntegerFilterSchema,
contactId: PZ.IntegerFilterSchema,
url: PZ.StringFilterSchema,
order: PZ.IntegerFilterSchema,
contact: z.object({ 
        some: ContactOwnWhereSchema,
        every: ContactOwnWhereSchema,
        none: ContactOwnWhereSchema,
      }).partial()
    }).partial()
    


    export const WebsiteProjectionSchema = z.object({ 
          id: z.boolean(),
contactId: z.boolean(),
url: z.boolean(),
order: z.boolean(),
contact: ContactOwnQueryOneSchema
     }).partial()
     


    export const WebsiteQueryOneSchema = z.object({ 
      where: WebsiteWhereSchema,
      select:WebsiteProjectionSchema, 
      omit:WebsiteProjectionSchema
    }).partial()
    


    export const WebsiteQuerySchema = z.object({ 
      take: z.int().min(1).default(20),
      skip: z.int().min(0).default(0),
      where: WebsiteWhereSchema, 
      select: WebsiteProjectionSchema, 
      omit: WebsiteProjectionSchema
    }).partial()
    


export type  IndustryCreate = z.infer<typeof IndustryCreateSchema>; 

export type  IndustryUpdate = z.infer<typeof IndustryUpdateSchema>; 

export type  IndustryOrderBy = z.infer<typeof IndustryOrderBySchema>; 

export type  IndustryOwnProjection = z.infer<typeof IndustryOwnProjectionSchema>; 

export type  IndustryOwnWhere = z.infer<typeof IndustryOwnWhereSchema>; 

export type  IndustryOwnQuery = z.infer<typeof IndustryOwnQuerySchema>; 

export type  IndustryOwnQueryOne = z.infer<typeof IndustryOwnQueryOneSchema>; 

export type  IndustryWhere = z.infer<typeof IndustryWhereSchema>; 

export type  IndustryQueryOne = z.infer<typeof IndustryQueryOneSchema>; 

export type  IndustryQuery = z.infer<typeof IndustryQuerySchema>; 

export type  IndustryProjection = z.infer<typeof IndustryProjectionSchema>; 

    


export type  CompanyCreate = z.infer<typeof CompanyCreateSchema>; 

export type  CompanyUpdate = z.infer<typeof CompanyUpdateSchema>; 

export type  CompanyOrderBy = z.infer<typeof CompanyOrderBySchema>; 

export type  CompanyOwnProjection = z.infer<typeof CompanyOwnProjectionSchema>; 

export type  CompanyOwnWhere = z.infer<typeof CompanyOwnWhereSchema>; 

export type  CompanyOwnQuery = z.infer<typeof CompanyOwnQuerySchema>; 

export type  CompanyOwnQueryOne = z.infer<typeof CompanyOwnQueryOneSchema>; 

export type  CompanyWhere = z.infer<typeof CompanyWhereSchema>; 

export type  CompanyQueryOne = z.infer<typeof CompanyQueryOneSchema>; 

export type  CompanyQuery = z.infer<typeof CompanyQuerySchema>; 

export type  CompanyProjection = z.infer<typeof CompanyProjectionSchema>; 

    


export type  CompanyIndustryCreate = z.infer<typeof CompanyIndustryCreateSchema>; 

export type  CompanyIndustryUpdate = z.infer<typeof CompanyIndustryUpdateSchema>; 

export type  CompanyIndustryOrderBy = z.infer<typeof CompanyIndustryOrderBySchema>; 

export type  CompanyIndustryOwnProjection = z.infer<typeof CompanyIndustryOwnProjectionSchema>; 

export type  CompanyIndustryOwnWhere = z.infer<typeof CompanyIndustryOwnWhereSchema>; 

export type  CompanyIndustryOwnQuery = z.infer<typeof CompanyIndustryOwnQuerySchema>; 

export type  CompanyIndustryOwnQueryOne = z.infer<typeof CompanyIndustryOwnQueryOneSchema>; 

export type  CompanyIndustryWhere = z.infer<typeof CompanyIndustryWhereSchema>; 

export type  CompanyIndustryQueryOne = z.infer<typeof CompanyIndustryQueryOneSchema>; 

export type  CompanyIndustryQuery = z.infer<typeof CompanyIndustryQuerySchema>; 

export type  CompanyIndustryProjection = z.infer<typeof CompanyIndustryProjectionSchema>; 

    


export type  DepartmentCreate = z.infer<typeof DepartmentCreateSchema>; 

export type  DepartmentUpdate = z.infer<typeof DepartmentUpdateSchema>; 

export type  DepartmentOrderBy = z.infer<typeof DepartmentOrderBySchema>; 

export type  DepartmentOwnProjection = z.infer<typeof DepartmentOwnProjectionSchema>; 

export type  DepartmentOwnWhere = z.infer<typeof DepartmentOwnWhereSchema>; 

export type  DepartmentOwnQuery = z.infer<typeof DepartmentOwnQuerySchema>; 

export type  DepartmentOwnQueryOne = z.infer<typeof DepartmentOwnQueryOneSchema>; 

export type  DepartmentWhere = z.infer<typeof DepartmentWhereSchema>; 

export type  DepartmentQueryOne = z.infer<typeof DepartmentQueryOneSchema>; 

export type  DepartmentQuery = z.infer<typeof DepartmentQuerySchema>; 

export type  DepartmentProjection = z.infer<typeof DepartmentProjectionSchema>; 

    


export type  TitleCreate = z.infer<typeof TitleCreateSchema>; 

export type  TitleUpdate = z.infer<typeof TitleUpdateSchema>; 

export type  TitleOrderBy = z.infer<typeof TitleOrderBySchema>; 

export type  TitleOwnProjection = z.infer<typeof TitleOwnProjectionSchema>; 

export type  TitleOwnWhere = z.infer<typeof TitleOwnWhereSchema>; 

export type  TitleOwnQuery = z.infer<typeof TitleOwnQuerySchema>; 

export type  TitleOwnQueryOne = z.infer<typeof TitleOwnQueryOneSchema>; 

export type  TitleWhere = z.infer<typeof TitleWhereSchema>; 

export type  TitleQueryOne = z.infer<typeof TitleQueryOneSchema>; 

export type  TitleQuery = z.infer<typeof TitleQuerySchema>; 

export type  TitleProjection = z.infer<typeof TitleProjectionSchema>; 

    


export type  AgentCreate = z.infer<typeof AgentCreateSchema>; 

export type  AgentUpdate = z.infer<typeof AgentUpdateSchema>; 

export type  AgentOrderBy = z.infer<typeof AgentOrderBySchema>; 

export type  AgentOwnProjection = z.infer<typeof AgentOwnProjectionSchema>; 

export type  AgentOwnWhere = z.infer<typeof AgentOwnWhereSchema>; 

export type  AgentOwnQuery = z.infer<typeof AgentOwnQuerySchema>; 

export type  AgentOwnQueryOne = z.infer<typeof AgentOwnQueryOneSchema>; 

export type  AgentWhere = z.infer<typeof AgentWhereSchema>; 

export type  AgentQueryOne = z.infer<typeof AgentQueryOneSchema>; 

export type  AgentQuery = z.infer<typeof AgentQuerySchema>; 

export type  AgentProjection = z.infer<typeof AgentProjectionSchema>; 

    


export type  ContactCreate = z.infer<typeof ContactCreateSchema>; 

export type  ContactUpdate = z.infer<typeof ContactUpdateSchema>; 

export type  ContactOrderBy = z.infer<typeof ContactOrderBySchema>; 

export type  ContactOwnProjection = z.infer<typeof ContactOwnProjectionSchema>; 

export type  ContactOwnWhere = z.infer<typeof ContactOwnWhereSchema>; 

export type  ContactOwnQuery = z.infer<typeof ContactOwnQuerySchema>; 

export type  ContactOwnQueryOne = z.infer<typeof ContactOwnQueryOneSchema>; 

export type  ContactWhere = z.infer<typeof ContactWhereSchema>; 

export type  ContactQueryOne = z.infer<typeof ContactQueryOneSchema>; 

export type  ContactQuery = z.infer<typeof ContactQuerySchema>; 

export type  ContactProjection = z.infer<typeof ContactProjectionSchema>; 

    


export type  StateCreate = z.infer<typeof StateCreateSchema>; 

export type  StateUpdate = z.infer<typeof StateUpdateSchema>; 

export type  StateOrderBy = z.infer<typeof StateOrderBySchema>; 

export type  StateOwnProjection = z.infer<typeof StateOwnProjectionSchema>; 

export type  StateOwnWhere = z.infer<typeof StateOwnWhereSchema>; 

export type  StateOwnQuery = z.infer<typeof StateOwnQuerySchema>; 

export type  StateOwnQueryOne = z.infer<typeof StateOwnQueryOneSchema>; 

export type  StateWhere = z.infer<typeof StateWhereSchema>; 

export type  StateQueryOne = z.infer<typeof StateQueryOneSchema>; 

export type  StateQuery = z.infer<typeof StateQuerySchema>; 

export type  StateProjection = z.infer<typeof StateProjectionSchema>; 

    


export type  CountryCreate = z.infer<typeof CountryCreateSchema>; 

export type  CountryUpdate = z.infer<typeof CountryUpdateSchema>; 

export type  CountryOrderBy = z.infer<typeof CountryOrderBySchema>; 

export type  CountryOwnProjection = z.infer<typeof CountryOwnProjectionSchema>; 

export type  CountryOwnWhere = z.infer<typeof CountryOwnWhereSchema>; 

export type  CountryOwnQuery = z.infer<typeof CountryOwnQuerySchema>; 

export type  CountryOwnQueryOne = z.infer<typeof CountryOwnQueryOneSchema>; 

export type  CountryWhere = z.infer<typeof CountryWhereSchema>; 

export type  CountryQueryOne = z.infer<typeof CountryQueryOneSchema>; 

export type  CountryQuery = z.infer<typeof CountryQuerySchema>; 

export type  CountryProjection = z.infer<typeof CountryProjectionSchema>; 

    


export type  CityCreate = z.infer<typeof CityCreateSchema>; 

export type  CityUpdate = z.infer<typeof CityUpdateSchema>; 

export type  CityOrderBy = z.infer<typeof CityOrderBySchema>; 

export type  CityOwnProjection = z.infer<typeof CityOwnProjectionSchema>; 

export type  CityOwnWhere = z.infer<typeof CityOwnWhereSchema>; 

export type  CityOwnQuery = z.infer<typeof CityOwnQuerySchema>; 

export type  CityOwnQueryOne = z.infer<typeof CityOwnQueryOneSchema>; 

export type  CityWhere = z.infer<typeof CityWhereSchema>; 

export type  CityQueryOne = z.infer<typeof CityQueryOneSchema>; 

export type  CityQuery = z.infer<typeof CityQuerySchema>; 

export type  CityProjection = z.infer<typeof CityProjectionSchema>; 

    


export type  AddressCreate = z.infer<typeof AddressCreateSchema>; 

export type  AddressUpdate = z.infer<typeof AddressUpdateSchema>; 

export type  AddressOrderBy = z.infer<typeof AddressOrderBySchema>; 

export type  AddressOwnProjection = z.infer<typeof AddressOwnProjectionSchema>; 

export type  AddressOwnWhere = z.infer<typeof AddressOwnWhereSchema>; 

export type  AddressOwnQuery = z.infer<typeof AddressOwnQuerySchema>; 

export type  AddressOwnQueryOne = z.infer<typeof AddressOwnQueryOneSchema>; 

export type  AddressWhere = z.infer<typeof AddressWhereSchema>; 

export type  AddressQueryOne = z.infer<typeof AddressQueryOneSchema>; 

export type  AddressQuery = z.infer<typeof AddressQuerySchema>; 

export type  AddressProjection = z.infer<typeof AddressProjectionSchema>; 

    


export type  EmailCreate = z.infer<typeof EmailCreateSchema>; 

export type  EmailUpdate = z.infer<typeof EmailUpdateSchema>; 

export type  EmailOrderBy = z.infer<typeof EmailOrderBySchema>; 

export type  EmailOwnProjection = z.infer<typeof EmailOwnProjectionSchema>; 

export type  EmailOwnWhere = z.infer<typeof EmailOwnWhereSchema>; 

export type  EmailOwnQuery = z.infer<typeof EmailOwnQuerySchema>; 

export type  EmailOwnQueryOne = z.infer<typeof EmailOwnQueryOneSchema>; 

export type  EmailWhere = z.infer<typeof EmailWhereSchema>; 

export type  EmailQueryOne = z.infer<typeof EmailQueryOneSchema>; 

export type  EmailQuery = z.infer<typeof EmailQuerySchema>; 

export type  EmailProjection = z.infer<typeof EmailProjectionSchema>; 

    


export type  PhoneCreate = z.infer<typeof PhoneCreateSchema>; 

export type  PhoneUpdate = z.infer<typeof PhoneUpdateSchema>; 

export type  PhoneOrderBy = z.infer<typeof PhoneOrderBySchema>; 

export type  PhoneOwnProjection = z.infer<typeof PhoneOwnProjectionSchema>; 

export type  PhoneOwnWhere = z.infer<typeof PhoneOwnWhereSchema>; 

export type  PhoneOwnQuery = z.infer<typeof PhoneOwnQuerySchema>; 

export type  PhoneOwnQueryOne = z.infer<typeof PhoneOwnQueryOneSchema>; 

export type  PhoneWhere = z.infer<typeof PhoneWhereSchema>; 

export type  PhoneQueryOne = z.infer<typeof PhoneQueryOneSchema>; 

export type  PhoneQuery = z.infer<typeof PhoneQuerySchema>; 

export type  PhoneProjection = z.infer<typeof PhoneProjectionSchema>; 

    


export type  WebsiteCreate = z.infer<typeof WebsiteCreateSchema>; 

export type  WebsiteUpdate = z.infer<typeof WebsiteUpdateSchema>; 

export type  WebsiteOrderBy = z.infer<typeof WebsiteOrderBySchema>; 

export type  WebsiteOwnProjection = z.infer<typeof WebsiteOwnProjectionSchema>; 

export type  WebsiteOwnWhere = z.infer<typeof WebsiteOwnWhereSchema>; 

export type  WebsiteOwnQuery = z.infer<typeof WebsiteOwnQuerySchema>; 

export type  WebsiteOwnQueryOne = z.infer<typeof WebsiteOwnQueryOneSchema>; 

export type  WebsiteWhere = z.infer<typeof WebsiteWhereSchema>; 

export type  WebsiteQueryOne = z.infer<typeof WebsiteQueryOneSchema>; 

export type  WebsiteQuery = z.infer<typeof WebsiteQuerySchema>; 

export type  WebsiteProjection = z.infer<typeof WebsiteProjectionSchema>; 

    