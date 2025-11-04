import * as P from '@puq/zod';
import { z } from 'zod';

/**
 * AttributeField schema (Tue Nov 04 2025)
 */
export const AttributeField = z.enum(['id', 'name']);
export type AttributeField = z.infer<typeof AttributeField>;

/**
 * CountryField schema (Tue Nov 04 2025)
 */
export const CountryField = z.enum([
  'id',
  'name',
  'countryCode',
  'phoneCode',
  'flag',
]);
export type CountryField = z.infer<typeof CountryField>;

/**
 * CurrencyField schema (Tue Nov 04 2025)
 */
export const CurrencyField = z.enum(['id', 'name', 'symbol']);
export type CurrencyField = z.infer<typeof CurrencyField>;

/**
 * CategoryField schema (Tue Nov 04 2025)
 */
export const CategoryField = z.enum([
  'id',
  'parentId',
  'name',
  'slug',
  'description',
  'icon',
  'image',
]);
export type CategoryField = z.infer<typeof CategoryField>;

/**
 * DepartmentField schema (Tue Nov 04 2025)
 */
export const DepartmentField = z.enum([
  'id',
  'parentId',
  'name',
  'slug',
  'description',
  'icon',
  'image',
]);
export type DepartmentField = z.infer<typeof DepartmentField>;

/**
 * IndustryField schema (Tue Nov 04 2025)
 */
export const IndustryField = z.enum(['id', 'name', 'description', 'slug']);
export type IndustryField = z.infer<typeof IndustryField>;

/**
 * OccupationField schema (Tue Nov 04 2025)
 */
export const OccupationField = z.enum([
  'id',
  'industryId',
  'name',
  'slug',
  'description',
]);
export type OccupationField = z.infer<typeof OccupationField>;

/**
 * CompanyField schema (Tue Nov 04 2025)
 */
export const CompanyField = z.enum(['id', 'name', 'slug']);
export type CompanyField = z.infer<typeof CompanyField>;

/**
 * CompanyIndustryField schema (Tue Nov 04 2025)
 */
export const CompanyIndustryField = z.enum(['id', 'companyId', 'industryId']);
export type CompanyIndustryField = z.infer<typeof CompanyIndustryField>;

/**
 * TagField schema (Tue Nov 04 2025)
 */
export const TagField = z.enum(['id', 'name', 'slug']);
export type TagField = z.infer<typeof TagField>;

/**
 * HtmlTemplateField schema (Tue Nov 04 2025)
 */
export const HtmlTemplateField = z.enum([
  'id',
  'name',
  'slug',
  'tags',
  'template',
]);
export type HtmlTemplateField = z.infer<typeof HtmlTemplateField>;

/**
 * RecordField schema (Tue Nov 04 2025)
 */
export const RecordField = z.enum(['id', 'key', 'value']);
export type RecordField = z.infer<typeof RecordField>;

/**
 * AttributeOmit schema (Tue Nov 04 2025)
 */
export const AttributeOmit = z.object({ id: P.bool, name: P.bool }).partial();
export type AttributeOmit = z.infer<typeof AttributeOmit>;

/**
 * CountryOmit schema (Tue Nov 04 2025)
 */
export const CountryOmit = z
  .object({
    id: P.bool,
    name: P.bool,
    countryCode: P.bool,
    phoneCode: P.bool,
    flag: P.bool,
  })
  .partial();
export type CountryOmit = z.infer<typeof CountryOmit>;

/**
 * CurrencyOmit schema (Tue Nov 04 2025)
 */
export const CurrencyOmit = z
  .object({ id: P.bool, name: P.bool, symbol: P.bool })
  .partial();
export type CurrencyOmit = z.infer<typeof CurrencyOmit>;

/**
 * CategoryOmit schema (Tue Nov 04 2025)
 */
export const CategoryOmit = z
  .object({
    id: P.bool,
    parentId: P.bool,
    name: P.bool,
    slug: P.bool,
    description: P.bool,
    icon: P.bool,
    image: P.bool,
  })
  .partial();
export type CategoryOmit = z.infer<typeof CategoryOmit>;

/**
 * DepartmentOmit schema (Tue Nov 04 2025)
 */
export const DepartmentOmit = z
  .object({
    id: P.bool,
    parentId: P.bool,
    name: P.bool,
    slug: P.bool,
    description: P.bool,
    icon: P.bool,
    image: P.bool,
  })
  .partial();
export type DepartmentOmit = z.infer<typeof DepartmentOmit>;

/**
 * IndustryOmit schema (Tue Nov 04 2025)
 */
export const IndustryOmit = z
  .object({ id: P.bool, name: P.bool, description: P.bool, slug: P.bool })
  .partial();
export type IndustryOmit = z.infer<typeof IndustryOmit>;

/**
 * OccupationOmit schema (Tue Nov 04 2025)
 */
export const OccupationOmit = z
  .object({
    id: P.bool,
    industryId: P.bool,
    name: P.bool,
    slug: P.bool,
    description: P.bool,
  })
  .partial();
export type OccupationOmit = z.infer<typeof OccupationOmit>;

/**
 * CompanyOmit schema (Tue Nov 04 2025)
 */
export const CompanyOmit = z
  .object({ id: P.bool, name: P.bool, slug: P.bool })
  .partial();
export type CompanyOmit = z.infer<typeof CompanyOmit>;

/**
 * CompanyIndustryOmit schema (Tue Nov 04 2025)
 */
export const CompanyIndustryOmit = z
  .object({ id: P.bool, companyId: P.bool, industryId: P.bool })
  .partial();
export type CompanyIndustryOmit = z.infer<typeof CompanyIndustryOmit>;

/**
 * TagOmit schema (Tue Nov 04 2025)
 */
export const TagOmit = z
  .object({ id: P.bool, name: P.bool, slug: P.bool })
  .partial();
export type TagOmit = z.infer<typeof TagOmit>;

/**
 * HtmlTemplateOmit schema (Tue Nov 04 2025)
 */
export const HtmlTemplateOmit = z
  .object({
    id: P.bool,
    name: P.bool,
    slug: P.bool,
    tags: P.bool,
    template: P.bool,
  })
  .partial();
export type HtmlTemplateOmit = z.infer<typeof HtmlTemplateOmit>;

/**
 * RecordOmit schema (Tue Nov 04 2025)
 */
export const RecordOmit = z
  .object({ id: P.bool, key: P.bool, value: P.bool })
  .partial();
export type RecordOmit = z.infer<typeof RecordOmit>;

/**
 * AttributeSelectOwn schema (Tue Nov 04 2025)
 */
export const AttributeSelectOwn = AttributeOmit;
export type AttributeSelectOwn = z.infer<typeof AttributeSelectOwn>;

/**
 * CountrySelectOwn schema (Tue Nov 04 2025)
 */
export const CountrySelectOwn = CountryOmit;
export type CountrySelectOwn = z.infer<typeof CountrySelectOwn>;

/**
 * CurrencySelectOwn schema (Tue Nov 04 2025)
 */
export const CurrencySelectOwn = CurrencyOmit;
export type CurrencySelectOwn = z.infer<typeof CurrencySelectOwn>;

/**
 * CategorySelectOwn schema (Tue Nov 04 2025)
 */
export const CategorySelectOwn = CategoryOmit;
export type CategorySelectOwn = z.infer<typeof CategorySelectOwn>;

/**
 * DepartmentSelectOwn schema (Tue Nov 04 2025)
 */
export const DepartmentSelectOwn = DepartmentOmit;
export type DepartmentSelectOwn = z.infer<typeof DepartmentSelectOwn>;

/**
 * IndustrySelectOwn schema (Tue Nov 04 2025)
 */
export const IndustrySelectOwn = IndustryOmit;
export type IndustrySelectOwn = z.infer<typeof IndustrySelectOwn>;

/**
 * OccupationSelectOwn schema (Tue Nov 04 2025)
 */
export const OccupationSelectOwn = OccupationOmit;
export type OccupationSelectOwn = z.infer<typeof OccupationSelectOwn>;

/**
 * CompanySelectOwn schema (Tue Nov 04 2025)
 */
export const CompanySelectOwn = CompanyOmit;
export type CompanySelectOwn = z.infer<typeof CompanySelectOwn>;

/**
 * CompanyIndustrySelectOwn schema (Tue Nov 04 2025)
 */
export const CompanyIndustrySelectOwn = CompanyIndustryOmit;
export type CompanyIndustrySelectOwn = z.infer<typeof CompanyIndustrySelectOwn>;

/**
 * TagSelectOwn schema (Tue Nov 04 2025)
 */
export const TagSelectOwn = TagOmit;
export type TagSelectOwn = z.infer<typeof TagSelectOwn>;

/**
 * HtmlTemplateSelectOwn schema (Tue Nov 04 2025)
 */
export const HtmlTemplateSelectOwn = HtmlTemplateOmit;
export type HtmlTemplateSelectOwn = z.infer<typeof HtmlTemplateSelectOwn>;

/**
 * RecordSelectOwn schema (Tue Nov 04 2025)
 */
export const RecordSelectOwn = RecordOmit;
export type RecordSelectOwn = z.infer<typeof RecordSelectOwn>;

/**
 * AttributeOrderByOwn schema (Tue Nov 04 2025)
 */
export const AttributeOrderByOwn = z
  .object({
    id: P.dir,
    name: P.dir,
  })
  .partial();
export type AttributeOrderByOwn = z.infer<typeof AttributeOrderByOwn>;

/**
 * CountryOrderByOwn schema (Tue Nov 04 2025)
 */
export const CountryOrderByOwn = z
  .object({
    id: P.dir,
    name: P.dir,
    countryCode: P.dir,
    phoneCode: P.dir,
    flag: P.dir,
  })
  .partial();
export type CountryOrderByOwn = z.infer<typeof CountryOrderByOwn>;

/**
 * CurrencyOrderByOwn schema (Tue Nov 04 2025)
 */
export const CurrencyOrderByOwn = z
  .object({
    id: P.dir,
    name: P.dir,
    symbol: P.dir,
  })
  .partial();
export type CurrencyOrderByOwn = z.infer<typeof CurrencyOrderByOwn>;

/**
 * CategoryOrderByOwn schema (Tue Nov 04 2025)
 */
export const CategoryOrderByOwn = z
  .object({
    id: P.dir,
    parentId: P.dir,
    name: P.dir,
    slug: P.dir,
    description: P.dir,
    icon: P.dir,
    image: P.dir,
  })
  .partial();
export type CategoryOrderByOwn = z.infer<typeof CategoryOrderByOwn>;

/**
 * DepartmentOrderByOwn schema (Tue Nov 04 2025)
 */
export const DepartmentOrderByOwn = z
  .object({
    id: P.dir,
    parentId: P.dir,
    name: P.dir,
    slug: P.dir,
    description: P.dir,
    icon: P.dir,
    image: P.dir,
  })
  .partial();
export type DepartmentOrderByOwn = z.infer<typeof DepartmentOrderByOwn>;

/**
 * IndustryOrderByOwn schema (Tue Nov 04 2025)
 */
export const IndustryOrderByOwn = z
  .object({
    id: P.dir,
    name: P.dir,
    description: P.dir,
    slug: P.dir,
  })
  .partial();
export type IndustryOrderByOwn = z.infer<typeof IndustryOrderByOwn>;

/**
 * OccupationOrderByOwn schema (Tue Nov 04 2025)
 */
export const OccupationOrderByOwn = z
  .object({
    id: P.dir,
    industryId: P.dir,
    name: P.dir,
    slug: P.dir,
    description: P.dir,
  })
  .partial();
export type OccupationOrderByOwn = z.infer<typeof OccupationOrderByOwn>;

/**
 * CompanyOrderByOwn schema (Tue Nov 04 2025)
 */
export const CompanyOrderByOwn = z
  .object({
    id: P.dir,
    name: P.dir,
    slug: P.dir,
  })
  .partial();
export type CompanyOrderByOwn = z.infer<typeof CompanyOrderByOwn>;

/**
 * CompanyIndustryOrderByOwn schema (Tue Nov 04 2025)
 */
export const CompanyIndustryOrderByOwn = z
  .object({
    id: P.dir,
    companyId: P.dir,
    industryId: P.dir,
  })
  .partial();
export type CompanyIndustryOrderByOwn = z.infer<
  typeof CompanyIndustryOrderByOwn
>;

/**
 * TagOrderByOwn schema (Tue Nov 04 2025)
 */
export const TagOrderByOwn = z
  .object({
    id: P.dir,
    name: P.dir,
    slug: P.dir,
  })
  .partial();
export type TagOrderByOwn = z.infer<typeof TagOrderByOwn>;

/**
 * HtmlTemplateOrderByOwn schema (Tue Nov 04 2025)
 */
export const HtmlTemplateOrderByOwn = z
  .object({
    id: P.dir,
    name: P.dir,
    slug: P.dir,
    tags: P.dir,
    template: P.dir,
  })
  .partial();
export type HtmlTemplateOrderByOwn = z.infer<typeof HtmlTemplateOrderByOwn>;

/**
 * RecordOrderByOwn schema (Tue Nov 04 2025)
 */
export const RecordOrderByOwn = z
  .object({
    id: P.dir,
    key: P.dir,
    value: P.dir,
  })
  .partial();
export type RecordOrderByOwn = z.infer<typeof RecordOrderByOwn>;

/**
 * AttributeOrderBy schema (Tue Nov 04 2025)
 */
export const AttributeOrderBy = z
  .object({
    ...AttributeOrderByOwn.shape,
  })
  .partial();
export type AttributeOrderBy = z.infer<typeof AttributeOrderBy>;

/**
 * CountryOrderBy schema (Tue Nov 04 2025)
 */
export const CountryOrderBy = z
  .object({
    ...CountryOrderByOwn.shape,
  })
  .partial();
export type CountryOrderBy = z.infer<typeof CountryOrderBy>;

/**
 * CurrencyOrderBy schema (Tue Nov 04 2025)
 */
export const CurrencyOrderBy = z
  .object({
    ...CurrencyOrderByOwn.shape,
  })
  .partial();
export type CurrencyOrderBy = z.infer<typeof CurrencyOrderBy>;

/**
 * CategoryOrderBy schema (Tue Nov 04 2025)
 */
export const CategoryOrderBy = z
  .object({
    ...CategoryOrderByOwn.shape,
    parent: CategoryOrderByOwn,
    children: P.orderByCount,
  })
  .partial();
export type CategoryOrderBy = z.infer<typeof CategoryOrderBy>;

/**
 * DepartmentOrderBy schema (Tue Nov 04 2025)
 */
export const DepartmentOrderBy = z
  .object({
    ...DepartmentOrderByOwn.shape,
    parent: DepartmentOrderByOwn,
    children: P.orderByCount,
  })
  .partial();
export type DepartmentOrderBy = z.infer<typeof DepartmentOrderBy>;

/**
 * IndustryOrderBy schema (Tue Nov 04 2025)
 */
export const IndustryOrderBy = z
  .object({
    ...IndustryOrderByOwn.shape,
    occupations: P.orderByCount,
    companyIndustries: P.orderByCount,
  })
  .partial();
export type IndustryOrderBy = z.infer<typeof IndustryOrderBy>;

/**
 * OccupationOrderBy schema (Tue Nov 04 2025)
 */
export const OccupationOrderBy = z
  .object({
    ...OccupationOrderByOwn.shape,
    industry: IndustryOrderByOwn,
  })
  .partial();
export type OccupationOrderBy = z.infer<typeof OccupationOrderBy>;

/**
 * CompanyOrderBy schema (Tue Nov 04 2025)
 */
export const CompanyOrderBy = z
  .object({
    ...CompanyOrderByOwn.shape,
    companyIndustries: P.orderByCount,
  })
  .partial();
export type CompanyOrderBy = z.infer<typeof CompanyOrderBy>;

/**
 * CompanyIndustryOrderBy schema (Tue Nov 04 2025)
 */
export const CompanyIndustryOrderBy = z
  .object({
    ...CompanyIndustryOrderByOwn.shape,
    company: CompanyOrderByOwn,
    industry: IndustryOrderByOwn,
  })
  .partial();
export type CompanyIndustryOrderBy = z.infer<typeof CompanyIndustryOrderBy>;

/**
 * TagOrderBy schema (Tue Nov 04 2025)
 */
export const TagOrderBy = z
  .object({
    ...TagOrderByOwn.shape,
  })
  .partial();
export type TagOrderBy = z.infer<typeof TagOrderBy>;

/**
 * HtmlTemplateOrderBy schema (Tue Nov 04 2025)
 */
export const HtmlTemplateOrderBy = z
  .object({
    ...HtmlTemplateOrderByOwn.shape,
  })
  .partial();
export type HtmlTemplateOrderBy = z.infer<typeof HtmlTemplateOrderBy>;

/**
 * RecordOrderBy schema (Tue Nov 04 2025)
 */
export const RecordOrderBy = z
  .object({
    ...RecordOrderByOwn.shape,
  })
  .partial();
export type RecordOrderBy = z.infer<typeof RecordOrderBy>;

/**
 * AttributeWhereOwn schema (Tue Nov 04 2025)
 */
export const AttributeWhereOwn = z
  .object({ id: P.intFilter, name: P.strFilter })
  .partial();
export type AttributeWhereOwn = z.infer<typeof AttributeWhereOwn>;

/**
 * CountryWhereOwn schema (Tue Nov 04 2025)
 */
export const CountryWhereOwn = z
  .object({
    id: P.intFilter,
    name: P.strFilter,
    countryCode: P.strFilter,
    phoneCode: P.strFilter,
    flag: P.strFilter,
  })
  .partial();
export type CountryWhereOwn = z.infer<typeof CountryWhereOwn>;

/**
 * CurrencyWhereOwn schema (Tue Nov 04 2025)
 */
export const CurrencyWhereOwn = z
  .object({ id: P.intFilter, name: P.strFilter, symbol: P.strFilter })
  .partial();
export type CurrencyWhereOwn = z.infer<typeof CurrencyWhereOwn>;

/**
 * CategoryWhereOwn schema (Tue Nov 04 2025)
 */
export const CategoryWhereOwn = z
  .object({
    id: P.intFilter,
    parentId: P.intFilter,
    name: P.strFilter,
    slug: P.strFilter,
    description: P.strFilter,
    icon: P.strFilter,
    image: P.strFilter,
  })
  .partial();
export type CategoryWhereOwn = z.infer<typeof CategoryWhereOwn>;

/**
 * DepartmentWhereOwn schema (Tue Nov 04 2025)
 */
export const DepartmentWhereOwn = z
  .object({
    id: P.intFilter,
    parentId: P.intFilter,
    name: P.strFilter,
    slug: P.strFilter,
    description: P.strFilter,
    icon: P.strFilter,
    image: P.strFilter,
  })
  .partial();
export type DepartmentWhereOwn = z.infer<typeof DepartmentWhereOwn>;

/**
 * IndustryWhereOwn schema (Tue Nov 04 2025)
 */
export const IndustryWhereOwn = z
  .object({
    id: P.intFilter,
    name: P.strFilter,
    description: P.strFilter,
    slug: P.strFilter,
  })
  .partial();
export type IndustryWhereOwn = z.infer<typeof IndustryWhereOwn>;

/**
 * OccupationWhereOwn schema (Tue Nov 04 2025)
 */
export const OccupationWhereOwn = z
  .object({
    id: P.intFilter,
    industryId: P.intFilter,
    name: P.strFilter,
    slug: P.strFilter,
    description: P.strFilter,
  })
  .partial();
export type OccupationWhereOwn = z.infer<typeof OccupationWhereOwn>;

/**
 * CompanyWhereOwn schema (Tue Nov 04 2025)
 */
export const CompanyWhereOwn = z
  .object({ id: P.intFilter, name: P.strFilter, slug: P.strFilter })
  .partial();
export type CompanyWhereOwn = z.infer<typeof CompanyWhereOwn>;

/**
 * CompanyIndustryWhereOwn schema (Tue Nov 04 2025)
 */
export const CompanyIndustryWhereOwn = z
  .object({ id: P.intFilter, companyId: P.intFilter, industryId: P.intFilter })
  .partial();
export type CompanyIndustryWhereOwn = z.infer<typeof CompanyIndustryWhereOwn>;

/**
 * TagWhereOwn schema (Tue Nov 04 2025)
 */
export const TagWhereOwn = z
  .object({ id: P.intFilter, name: P.strFilter, slug: P.strFilter })
  .partial();
export type TagWhereOwn = z.infer<typeof TagWhereOwn>;

/**
 * HtmlTemplateWhereOwn schema (Tue Nov 04 2025)
 */
export const HtmlTemplateWhereOwn = z
  .object({
    id: P.intFilter,
    name: P.strFilter,
    slug: P.strFilter,
    tags: P.strArrayFilter,
    template: P.strFilter,
  })
  .partial();
export type HtmlTemplateWhereOwn = z.infer<typeof HtmlTemplateWhereOwn>;

/**
 * RecordWhereOwn schema (Tue Nov 04 2025)
 */
export const RecordWhereOwn = z
  .object({ id: P.intFilter, key: P.strFilter, value: P.strFilter })
  .partial();
export type RecordWhereOwn = z.infer<typeof RecordWhereOwn>;

/**
 * AttributeWhere schema (Tue Nov 04 2025)
 */
export const AttributeWhere = z
  .object({
    ...AttributeWhereOwn.shape,
    AND: AttributeWhereOwn,
    OR: AttributeWhereOwn.array(),
    NOT: AttributeWhereOwn.or(AttributeWhereOwn.array()),
  })
  .partial();
export type AttributeWhere = z.infer<typeof AttributeWhere>;

/**
 * CountryWhere schema (Tue Nov 04 2025)
 */
export const CountryWhere = z
  .object({
    ...CountryWhereOwn.shape,
    AND: CountryWhereOwn,
    OR: CountryWhereOwn.array(),
    NOT: CountryWhereOwn.or(CountryWhereOwn.array()),
  })
  .partial();
export type CountryWhere = z.infer<typeof CountryWhere>;

/**
 * CurrencyWhere schema (Tue Nov 04 2025)
 */
export const CurrencyWhere = z
  .object({
    ...CurrencyWhereOwn.shape,
    AND: CurrencyWhereOwn,
    OR: CurrencyWhereOwn.array(),
    NOT: CurrencyWhereOwn.or(CurrencyWhereOwn.array()),
  })
  .partial();
export type CurrencyWhere = z.infer<typeof CurrencyWhere>;

/**
 * CategoryWhere schema (Tue Nov 04 2025)
 */
export const CategoryWhere = z
  .object({
    ...CategoryWhereOwn.shape,
    parent: CategoryWhereOwn.partial(),
    children: z
      .object({
        some: CategoryWhereOwn,
        every: CategoryWhereOwn,
        none: CategoryWhereOwn,
      })
      .partial(),
    AND: CategoryWhereOwn,
    OR: CategoryWhereOwn.array(),
    NOT: CategoryWhereOwn.or(CategoryWhereOwn.array()),
  })
  .partial();
export type CategoryWhere = z.infer<typeof CategoryWhere>;

/**
 * DepartmentWhere schema (Tue Nov 04 2025)
 */
export const DepartmentWhere = z
  .object({
    ...DepartmentWhereOwn.shape,
    parent: DepartmentWhereOwn.partial(),
    children: z
      .object({
        some: DepartmentWhereOwn,
        every: DepartmentWhereOwn,
        none: DepartmentWhereOwn,
      })
      .partial(),
    AND: DepartmentWhereOwn,
    OR: DepartmentWhereOwn.array(),
    NOT: DepartmentWhereOwn.or(DepartmentWhereOwn.array()),
  })
  .partial();
export type DepartmentWhere = z.infer<typeof DepartmentWhere>;

/**
 * IndustryWhere schema (Tue Nov 04 2025)
 */
export const IndustryWhere = z
  .object({
    ...IndustryWhereOwn.shape,
    occupations: z
      .object({
        some: OccupationWhereOwn,
        every: OccupationWhereOwn,
        none: OccupationWhereOwn,
      })
      .partial(),
    companyIndustries: z
      .object({
        some: CompanyIndustryWhereOwn,
        every: CompanyIndustryWhereOwn,
        none: CompanyIndustryWhereOwn,
      })
      .partial(),
    AND: IndustryWhereOwn,
    OR: IndustryWhereOwn.array(),
    NOT: IndustryWhereOwn.or(IndustryWhereOwn.array()),
  })
  .partial();
export type IndustryWhere = z.infer<typeof IndustryWhere>;

/**
 * OccupationWhere schema (Tue Nov 04 2025)
 */
export const OccupationWhere = z
  .object({
    ...OccupationWhereOwn.shape,
    industry: IndustryWhereOwn.partial(),
    AND: OccupationWhereOwn,
    OR: OccupationWhereOwn.array(),
    NOT: OccupationWhereOwn.or(OccupationWhereOwn.array()),
  })
  .partial();
export type OccupationWhere = z.infer<typeof OccupationWhere>;

/**
 * CompanyWhere schema (Tue Nov 04 2025)
 */
export const CompanyWhere = z
  .object({
    ...CompanyWhereOwn.shape,
    companyIndustries: z
      .object({
        some: CompanyIndustryWhereOwn,
        every: CompanyIndustryWhereOwn,
        none: CompanyIndustryWhereOwn,
      })
      .partial(),
    AND: CompanyWhereOwn,
    OR: CompanyWhereOwn.array(),
    NOT: CompanyWhereOwn.or(CompanyWhereOwn.array()),
  })
  .partial();
export type CompanyWhere = z.infer<typeof CompanyWhere>;

/**
 * CompanyIndustryWhere schema (Tue Nov 04 2025)
 */
export const CompanyIndustryWhere = z
  .object({
    ...CompanyIndustryWhereOwn.shape,
    company: CompanyWhereOwn.partial(),
    industry: IndustryWhereOwn.partial(),
    AND: CompanyIndustryWhereOwn,
    OR: CompanyIndustryWhereOwn.array(),
    NOT: CompanyIndustryWhereOwn.or(CompanyIndustryWhereOwn.array()),
  })
  .partial();
export type CompanyIndustryWhere = z.infer<typeof CompanyIndustryWhere>;

/**
 * TagWhere schema (Tue Nov 04 2025)
 */
export const TagWhere = z
  .object({
    ...TagWhereOwn.shape,
    AND: TagWhereOwn,
    OR: TagWhereOwn.array(),
    NOT: TagWhereOwn.or(TagWhereOwn.array()),
  })
  .partial();
export type TagWhere = z.infer<typeof TagWhere>;

/**
 * HtmlTemplateWhere schema (Tue Nov 04 2025)
 */
export const HtmlTemplateWhere = z
  .object({
    ...HtmlTemplateWhereOwn.shape,
    AND: HtmlTemplateWhereOwn,
    OR: HtmlTemplateWhereOwn.array(),
    NOT: HtmlTemplateWhereOwn.or(HtmlTemplateWhereOwn.array()),
  })
  .partial();
export type HtmlTemplateWhere = z.infer<typeof HtmlTemplateWhere>;

/**
 * RecordWhere schema (Tue Nov 04 2025)
 */
export const RecordWhere = z
  .object({
    ...RecordWhereOwn.shape,
    AND: RecordWhereOwn,
    OR: RecordWhereOwn.array(),
    NOT: RecordWhereOwn.or(RecordWhereOwn.array()),
  })
  .partial();
export type RecordWhere = z.infer<typeof RecordWhere>;

/**
 * AttributeQueryOwn schema (Tue Nov 04 2025)
 */
export const AttributeQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: AttributeField.array(),
    orderBy: AttributeOrderBy,
    where: AttributeWhere,
  })
  .partial();
export type AttributeQueryOwn = z.infer<typeof AttributeQueryOwn>;

/**
 * CountryQueryOwn schema (Tue Nov 04 2025)
 */
export const CountryQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: CountryField.array(),
    orderBy: CountryOrderBy,
    where: CountryWhere,
  })
  .partial();
export type CountryQueryOwn = z.infer<typeof CountryQueryOwn>;

/**
 * CurrencyQueryOwn schema (Tue Nov 04 2025)
 */
export const CurrencyQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: CurrencyField.array(),
    orderBy: CurrencyOrderBy,
    where: CurrencyWhere,
  })
  .partial();
export type CurrencyQueryOwn = z.infer<typeof CurrencyQueryOwn>;

/**
 * CategoryQueryOwn schema (Tue Nov 04 2025)
 */
export const CategoryQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: CategoryField.array(),
    orderBy: CategoryOrderBy,
    where: CategoryWhere,
  })
  .partial();
export type CategoryQueryOwn = z.infer<typeof CategoryQueryOwn>;

/**
 * DepartmentQueryOwn schema (Tue Nov 04 2025)
 */
export const DepartmentQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: DepartmentField.array(),
    orderBy: DepartmentOrderBy,
    where: DepartmentWhere,
  })
  .partial();
export type DepartmentQueryOwn = z.infer<typeof DepartmentQueryOwn>;

/**
 * IndustryQueryOwn schema (Tue Nov 04 2025)
 */
export const IndustryQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: IndustryField.array(),
    orderBy: IndustryOrderBy,
    where: IndustryWhere,
  })
  .partial();
export type IndustryQueryOwn = z.infer<typeof IndustryQueryOwn>;

/**
 * OccupationQueryOwn schema (Tue Nov 04 2025)
 */
export const OccupationQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: OccupationField.array(),
    orderBy: OccupationOrderBy,
    where: OccupationWhere,
  })
  .partial();
export type OccupationQueryOwn = z.infer<typeof OccupationQueryOwn>;

/**
 * CompanyQueryOwn schema (Tue Nov 04 2025)
 */
export const CompanyQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: CompanyField.array(),
    orderBy: CompanyOrderBy,
    where: CompanyWhere,
  })
  .partial();
export type CompanyQueryOwn = z.infer<typeof CompanyQueryOwn>;

/**
 * CompanyIndustryQueryOwn schema (Tue Nov 04 2025)
 */
export const CompanyIndustryQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: CompanyIndustryField.array(),
    orderBy: CompanyIndustryOrderBy,
    where: CompanyIndustryWhere,
  })
  .partial();
export type CompanyIndustryQueryOwn = z.infer<typeof CompanyIndustryQueryOwn>;

/**
 * TagQueryOwn schema (Tue Nov 04 2025)
 */
export const TagQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: TagField.array(),
    orderBy: TagOrderBy,
    where: TagWhere,
  })
  .partial();
export type TagQueryOwn = z.infer<typeof TagQueryOwn>;

/**
 * HtmlTemplateQueryOwn schema (Tue Nov 04 2025)
 */
export const HtmlTemplateQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: HtmlTemplateField.array(),
    orderBy: HtmlTemplateOrderBy,
    where: HtmlTemplateWhere,
  })
  .partial();
export type HtmlTemplateQueryOwn = z.infer<typeof HtmlTemplateQueryOwn>;

/**
 * RecordQueryOwn schema (Tue Nov 04 2025)
 */
export const RecordQueryOwn = z
  .object({
    take: P.take,
    skip: P.skip,
    distinct: RecordField.array(),
    orderBy: RecordOrderBy,
    where: RecordWhere,
  })
  .partial();
export type RecordQueryOwn = z.infer<typeof RecordQueryOwn>;

/**
 * AttributeQueryOne schema (Tue Nov 04 2025)
 */
export const AttributeQueryOne = z
  .object({
    select: AttributeSelectOwn,
    omit: AttributeOmit,
    where: AttributeWhere,
  })
  .partial();
export type AttributeQueryOne = z.infer<typeof AttributeQueryOne>;

/**
 * CountryQueryOne schema (Tue Nov 04 2025)
 */
export const CountryQueryOne = z
  .object({
    select: CountrySelectOwn,
    omit: CountryOmit,
    where: CountryWhere,
  })
  .partial();
export type CountryQueryOne = z.infer<typeof CountryQueryOne>;

/**
 * CurrencyQueryOne schema (Tue Nov 04 2025)
 */
export const CurrencyQueryOne = z
  .object({
    select: CurrencySelectOwn,
    omit: CurrencyOmit,
    where: CurrencyWhere,
  })
  .partial();
export type CurrencyQueryOne = z.infer<typeof CurrencyQueryOne>;

/**
 * CategoryQueryOne schema (Tue Nov 04 2025)
 */
export const CategoryQueryOne = z
  .object({
    select: CategorySelectOwn,
    omit: CategoryOmit,
    where: CategoryWhere,
  })
  .partial();
export type CategoryQueryOne = z.infer<typeof CategoryQueryOne>;

/**
 * DepartmentQueryOne schema (Tue Nov 04 2025)
 */
export const DepartmentQueryOne = z
  .object({
    select: DepartmentSelectOwn,
    omit: DepartmentOmit,
    where: DepartmentWhere,
  })
  .partial();
export type DepartmentQueryOne = z.infer<typeof DepartmentQueryOne>;

/**
 * IndustryQueryOne schema (Tue Nov 04 2025)
 */
export const IndustryQueryOne = z
  .object({
    select: IndustrySelectOwn,
    omit: IndustryOmit,
    where: IndustryWhere,
  })
  .partial();
export type IndustryQueryOne = z.infer<typeof IndustryQueryOne>;

/**
 * OccupationQueryOne schema (Tue Nov 04 2025)
 */
export const OccupationQueryOne = z
  .object({
    select: OccupationSelectOwn,
    omit: OccupationOmit,
    where: OccupationWhere,
  })
  .partial();
export type OccupationQueryOne = z.infer<typeof OccupationQueryOne>;

/**
 * CompanyQueryOne schema (Tue Nov 04 2025)
 */
export const CompanyQueryOne = z
  .object({
    select: CompanySelectOwn,
    omit: CompanyOmit,
    where: CompanyWhere,
  })
  .partial();
export type CompanyQueryOne = z.infer<typeof CompanyQueryOne>;

/**
 * CompanyIndustryQueryOne schema (Tue Nov 04 2025)
 */
export const CompanyIndustryQueryOne = z
  .object({
    select: CompanyIndustrySelectOwn,
    omit: CompanyIndustryOmit,
    where: CompanyIndustryWhere,
  })
  .partial();
export type CompanyIndustryQueryOne = z.infer<typeof CompanyIndustryQueryOne>;

/**
 * TagQueryOne schema (Tue Nov 04 2025)
 */
export const TagQueryOne = z
  .object({
    select: TagSelectOwn,
    omit: TagOmit,
    where: TagWhere,
  })
  .partial();
export type TagQueryOne = z.infer<typeof TagQueryOne>;

/**
 * HtmlTemplateQueryOne schema (Tue Nov 04 2025)
 */
export const HtmlTemplateQueryOne = z
  .object({
    select: HtmlTemplateSelectOwn,
    omit: HtmlTemplateOmit,
    where: HtmlTemplateWhere,
  })
  .partial();
export type HtmlTemplateQueryOne = z.infer<typeof HtmlTemplateQueryOne>;

/**
 * RecordQueryOne schema (Tue Nov 04 2025)
 */
export const RecordQueryOne = z
  .object({
    select: RecordSelectOwn,
    omit: RecordOmit,
    where: RecordWhere,
  })
  .partial();
export type RecordQueryOne = z.infer<typeof RecordQueryOne>;

/**
 * AttributeInclude schema (Tue Nov 04 2025)
 */
export const AttributeInclude = z.object({}).partial();
export type AttributeInclude = z.infer<typeof AttributeInclude>;

/**
 * CountryInclude schema (Tue Nov 04 2025)
 */
export const CountryInclude = z.object({}).partial();
export type CountryInclude = z.infer<typeof CountryInclude>;

/**
 * CurrencyInclude schema (Tue Nov 04 2025)
 */
export const CurrencyInclude = z.object({}).partial();
export type CurrencyInclude = z.infer<typeof CurrencyInclude>;

/**
 * CategoryInclude schema (Tue Nov 04 2025)
 */
export const CategoryInclude = z
  .object({
    parent: P.bool.or(z.object({ select: CategorySelectOwn })),
    children: P.bool.or(z.object({ select: CategorySelectOwn })),
  })
  .partial();
export type CategoryInclude = z.infer<typeof CategoryInclude>;

/**
 * DepartmentInclude schema (Tue Nov 04 2025)
 */
export const DepartmentInclude = z
  .object({
    parent: P.bool.or(z.object({ select: DepartmentSelectOwn })),
    children: P.bool.or(z.object({ select: DepartmentSelectOwn })),
  })
  .partial();
export type DepartmentInclude = z.infer<typeof DepartmentInclude>;

/**
 * IndustryInclude schema (Tue Nov 04 2025)
 */
export const IndustryInclude = z
  .object({
    occupations: P.bool.or(z.object({ select: OccupationSelectOwn })),
    companyIndustries: P.bool.or(
      z.object({ select: CompanyIndustrySelectOwn })
    ),
  })
  .partial();
export type IndustryInclude = z.infer<typeof IndustryInclude>;

/**
 * OccupationInclude schema (Tue Nov 04 2025)
 */
export const OccupationInclude = z
  .object({ industry: P.bool.or(z.object({ select: IndustrySelectOwn })) })
  .partial();
export type OccupationInclude = z.infer<typeof OccupationInclude>;

/**
 * CompanyInclude schema (Tue Nov 04 2025)
 */
export const CompanyInclude = z
  .object({
    companyIndustries: P.bool.or(
      z.object({ select: CompanyIndustrySelectOwn })
    ),
  })
  .partial();
export type CompanyInclude = z.infer<typeof CompanyInclude>;

/**
 * CompanyIndustryInclude schema (Tue Nov 04 2025)
 */
export const CompanyIndustryInclude = z
  .object({
    company: P.bool.or(z.object({ select: CompanySelectOwn })),
    industry: P.bool.or(z.object({ select: IndustrySelectOwn })),
  })
  .partial();
export type CompanyIndustryInclude = z.infer<typeof CompanyIndustryInclude>;

/**
 * TagInclude schema (Tue Nov 04 2025)
 */
export const TagInclude = z.object({}).partial();
export type TagInclude = z.infer<typeof TagInclude>;

/**
 * HtmlTemplateInclude schema (Tue Nov 04 2025)
 */
export const HtmlTemplateInclude = z.object({}).partial();
export type HtmlTemplateInclude = z.infer<typeof HtmlTemplateInclude>;

/**
 * RecordInclude schema (Tue Nov 04 2025)
 */
export const RecordInclude = z.object({}).partial();
export type RecordInclude = z.infer<typeof RecordInclude>;

/**
 * AttributeQuery schema (Tue Nov 04 2025)
 */
export const AttributeQuery = z
  .object({
    select: AttributeSelectOwn,
    omit: AttributeOmit,
    ...AttributeQueryOwn.shape,
  })
  .partial();
export type AttributeQuery = z.infer<typeof AttributeQuery>;

/**
 * CountryQuery schema (Tue Nov 04 2025)
 */
export const CountryQuery = z
  .object({
    select: CountrySelectOwn,
    omit: CountryOmit,
    ...CountryQueryOwn.shape,
  })
  .partial();
export type CountryQuery = z.infer<typeof CountryQuery>;

/**
 * CurrencyQuery schema (Tue Nov 04 2025)
 */
export const CurrencyQuery = z
  .object({
    select: CurrencySelectOwn,
    omit: CurrencyOmit,
    ...CurrencyQueryOwn.shape,
  })
  .partial();
export type CurrencyQuery = z.infer<typeof CurrencyQuery>;

/**
 * CategoryQuery schema (Tue Nov 04 2025)
 */
export const CategoryQuery = z
  .object({
    select: CategorySelectOwn,
    omit: CategoryOmit,
    ...CategoryQueryOwn.shape,
  })
  .partial();
export type CategoryQuery = z.infer<typeof CategoryQuery>;

/**
 * DepartmentQuery schema (Tue Nov 04 2025)
 */
export const DepartmentQuery = z
  .object({
    select: DepartmentSelectOwn,
    omit: DepartmentOmit,
    ...DepartmentQueryOwn.shape,
  })
  .partial();
export type DepartmentQuery = z.infer<typeof DepartmentQuery>;

/**
 * IndustryQuery schema (Tue Nov 04 2025)
 */
export const IndustryQuery = z
  .object({
    select: IndustrySelectOwn,
    omit: IndustryOmit,
    ...IndustryQueryOwn.shape,
  })
  .partial();
export type IndustryQuery = z.infer<typeof IndustryQuery>;

/**
 * OccupationQuery schema (Tue Nov 04 2025)
 */
export const OccupationQuery = z
  .object({
    select: OccupationSelectOwn,
    omit: OccupationOmit,
    ...OccupationQueryOwn.shape,
  })
  .partial();
export type OccupationQuery = z.infer<typeof OccupationQuery>;

/**
 * CompanyQuery schema (Tue Nov 04 2025)
 */
export const CompanyQuery = z
  .object({
    select: CompanySelectOwn,
    omit: CompanyOmit,
    ...CompanyQueryOwn.shape,
  })
  .partial();
export type CompanyQuery = z.infer<typeof CompanyQuery>;

/**
 * CompanyIndustryQuery schema (Tue Nov 04 2025)
 */
export const CompanyIndustryQuery = z
  .object({
    select: CompanyIndustrySelectOwn,
    omit: CompanyIndustryOmit,
    ...CompanyIndustryQueryOwn.shape,
  })
  .partial();
export type CompanyIndustryQuery = z.infer<typeof CompanyIndustryQuery>;

/**
 * TagQuery schema (Tue Nov 04 2025)
 */
export const TagQuery = z
  .object({
    select: TagSelectOwn,
    omit: TagOmit,
    ...TagQueryOwn.shape,
  })
  .partial();
export type TagQuery = z.infer<typeof TagQuery>;

/**
 * HtmlTemplateQuery schema (Tue Nov 04 2025)
 */
export const HtmlTemplateQuery = z
  .object({
    select: HtmlTemplateSelectOwn,
    omit: HtmlTemplateOmit,
    ...HtmlTemplateQueryOwn.shape,
  })
  .partial();
export type HtmlTemplateQuery = z.infer<typeof HtmlTemplateQuery>;

/**
 * RecordQuery schema (Tue Nov 04 2025)
 */
export const RecordQuery = z
  .object({
    select: RecordSelectOwn,
    omit: RecordOmit,
    ...RecordQueryOwn.shape,
  })
  .partial();
export type RecordQuery = z.infer<typeof RecordQuery>;

/**
 * AttributeSelect schema (Tue Nov 04 2025)
 */
export const AttributeSelect = z
  .object({ ...AttributeSelectOwn.shape })
  .partial();
export type AttributeSelect = z.infer<typeof AttributeSelect>;

/**
 * CountrySelect schema (Tue Nov 04 2025)
 */
export const CountrySelect = z.object({ ...CountrySelectOwn.shape }).partial();
export type CountrySelect = z.infer<typeof CountrySelect>;

/**
 * CurrencySelect schema (Tue Nov 04 2025)
 */
export const CurrencySelect = z
  .object({ ...CurrencySelectOwn.shape })
  .partial();
export type CurrencySelect = z.infer<typeof CurrencySelect>;

/**
 * CategorySelect schema (Tue Nov 04 2025)
 */
export const CategorySelect = z
  .object({ ...CategorySelectOwn.shape })
  .partial();
export type CategorySelect = z.infer<typeof CategorySelect>;

/**
 * DepartmentSelect schema (Tue Nov 04 2025)
 */
export const DepartmentSelect = z
  .object({ ...DepartmentSelectOwn.shape })
  .partial();
export type DepartmentSelect = z.infer<typeof DepartmentSelect>;

/**
 * IndustrySelect schema (Tue Nov 04 2025)
 */
export const IndustrySelect = z
  .object({ ...IndustrySelectOwn.shape })
  .partial();
export type IndustrySelect = z.infer<typeof IndustrySelect>;

/**
 * OccupationSelect schema (Tue Nov 04 2025)
 */
export const OccupationSelect = z
  .object({ ...OccupationSelectOwn.shape })
  .partial();
export type OccupationSelect = z.infer<typeof OccupationSelect>;

/**
 * CompanySelect schema (Tue Nov 04 2025)
 */
export const CompanySelect = z.object({ ...CompanySelectOwn.shape }).partial();
export type CompanySelect = z.infer<typeof CompanySelect>;

/**
 * CompanyIndustrySelect schema (Tue Nov 04 2025)
 */
export const CompanyIndustrySelect = z
  .object({ ...CompanyIndustrySelectOwn.shape })
  .partial();
export type CompanyIndustrySelect = z.infer<typeof CompanyIndustrySelect>;

/**
 * TagSelect schema (Tue Nov 04 2025)
 */
export const TagSelect = z.object({ ...TagSelectOwn.shape }).partial();
export type TagSelect = z.infer<typeof TagSelect>;

/**
 * HtmlTemplateSelect schema (Tue Nov 04 2025)
 */
export const HtmlTemplateSelect = z
  .object({ ...HtmlTemplateSelectOwn.shape })
  .partial();
export type HtmlTemplateSelect = z.infer<typeof HtmlTemplateSelect>;

/**
 * RecordSelect schema (Tue Nov 04 2025)
 */
export const RecordSelect = z.object({ ...RecordSelectOwn.shape }).partial();
export type RecordSelect = z.infer<typeof RecordSelect>;

/**
 * AttributeProjection schema (Tue Nov 04 2025)
 */
export const AttributeProjection = z.union([
  z.object({ select: AttributeSelect }),
  z.object({ omit: AttributeOmit }),
  z.object({ include: AttributeInclude }),
  z.object({}),
]);
export type AttributeProjection = z.infer<typeof AttributeProjection>;

/**
 * CountryProjection schema (Tue Nov 04 2025)
 */
export const CountryProjection = z.union([
  z.object({ select: CountrySelect }),
  z.object({ omit: CountryOmit }),
  z.object({ include: CountryInclude }),
  z.object({}),
]);
export type CountryProjection = z.infer<typeof CountryProjection>;

/**
 * CurrencyProjection schema (Tue Nov 04 2025)
 */
export const CurrencyProjection = z.union([
  z.object({ select: CurrencySelect }),
  z.object({ omit: CurrencyOmit }),
  z.object({ include: CurrencyInclude }),
  z.object({}),
]);
export type CurrencyProjection = z.infer<typeof CurrencyProjection>;

/**
 * CategoryProjection schema (Tue Nov 04 2025)
 */
export const CategoryProjection = z.union([
  z.object({ select: CategorySelect }),
  z.object({ omit: CategoryOmit }),
  z.object({ include: CategoryInclude }),
  z.object({}),
]);
export type CategoryProjection = z.infer<typeof CategoryProjection>;

/**
 * DepartmentProjection schema (Tue Nov 04 2025)
 */
export const DepartmentProjection = z.union([
  z.object({ select: DepartmentSelect }),
  z.object({ omit: DepartmentOmit }),
  z.object({ include: DepartmentInclude }),
  z.object({}),
]);
export type DepartmentProjection = z.infer<typeof DepartmentProjection>;

/**
 * IndustryProjection schema (Tue Nov 04 2025)
 */
export const IndustryProjection = z.union([
  z.object({ select: IndustrySelect }),
  z.object({ omit: IndustryOmit }),
  z.object({ include: IndustryInclude }),
  z.object({}),
]);
export type IndustryProjection = z.infer<typeof IndustryProjection>;

/**
 * OccupationProjection schema (Tue Nov 04 2025)
 */
export const OccupationProjection = z.union([
  z.object({ select: OccupationSelect }),
  z.object({ omit: OccupationOmit }),
  z.object({ include: OccupationInclude }),
  z.object({}),
]);
export type OccupationProjection = z.infer<typeof OccupationProjection>;

/**
 * CompanyProjection schema (Tue Nov 04 2025)
 */
export const CompanyProjection = z.union([
  z.object({ select: CompanySelect }),
  z.object({ omit: CompanyOmit }),
  z.object({ include: CompanyInclude }),
  z.object({}),
]);
export type CompanyProjection = z.infer<typeof CompanyProjection>;

/**
 * CompanyIndustryProjection schema (Tue Nov 04 2025)
 */
export const CompanyIndustryProjection = z.union([
  z.object({ select: CompanyIndustrySelect }),
  z.object({ omit: CompanyIndustryOmit }),
  z.object({ include: CompanyIndustryInclude }),
  z.object({}),
]);
export type CompanyIndustryProjection = z.infer<
  typeof CompanyIndustryProjection
>;

/**
 * TagProjection schema (Tue Nov 04 2025)
 */
export const TagProjection = z.union([
  z.object({ select: TagSelect }),
  z.object({ omit: TagOmit }),
  z.object({ include: TagInclude }),
  z.object({}),
]);
export type TagProjection = z.infer<typeof TagProjection>;

/**
 * HtmlTemplateProjection schema (Tue Nov 04 2025)
 */
export const HtmlTemplateProjection = z.union([
  z.object({ select: HtmlTemplateSelect }),
  z.object({ omit: HtmlTemplateOmit }),
  z.object({ include: HtmlTemplateInclude }),
  z.object({}),
]);
export type HtmlTemplateProjection = z.infer<typeof HtmlTemplateProjection>;

/**
 * RecordProjection schema (Tue Nov 04 2025)
 */
export const RecordProjection = z.union([
  z.object({ select: RecordSelect }),
  z.object({ omit: RecordOmit }),
  z.object({ include: RecordInclude }),
  z.object({}),
]);
export type RecordProjection = z.infer<typeof RecordProjection>;

/**
 * AttributeCreateOwn schema (Tue Nov 04 2025)
 */
export const AttributeCreateOwn = z.object({ name: P.short });
export type AttributeCreateOwn = z.infer<typeof AttributeCreateOwn>;

/**
 * CountryCreateOwn schema (Tue Nov 04 2025)
 */
export const CountryCreateOwn = z.object({ name: P.short });
export type CountryCreateOwn = z.infer<typeof CountryCreateOwn>;

/**
 * CurrencyCreateOwn schema (Tue Nov 04 2025)
 */
export const CurrencyCreateOwn = z.object({ name: P.short });
export type CurrencyCreateOwn = z.infer<typeof CurrencyCreateOwn>;

/**
 * CategoryCreateOwn schema (Tue Nov 04 2025)
 */
export const CategoryCreateOwn = z.object({ name: P.short });
export type CategoryCreateOwn = z.infer<typeof CategoryCreateOwn>;

/**
 * DepartmentCreateOwn schema (Tue Nov 04 2025)
 */
export const DepartmentCreateOwn = z.object({ name: P.short });
export type DepartmentCreateOwn = z.infer<typeof DepartmentCreateOwn>;

/**
 * IndustryCreateOwn schema (Tue Nov 04 2025)
 */
export const IndustryCreateOwn = z.object({ name: P.short });
export type IndustryCreateOwn = z.infer<typeof IndustryCreateOwn>;

/**
 * OccupationCreateOwn schema (Tue Nov 04 2025)
 */
export const OccupationCreateOwn = z.object({
  industryId: P.int,
  name: P.short,
});
export type OccupationCreateOwn = z.infer<typeof OccupationCreateOwn>;

/**
 * CompanyCreateOwn schema (Tue Nov 04 2025)
 */
export const CompanyCreateOwn = z.object({ name: P.short });
export type CompanyCreateOwn = z.infer<typeof CompanyCreateOwn>;

/**
 * CompanyIndustryCreateOwn schema (Tue Nov 04 2025)
 */
export const CompanyIndustryCreateOwn = z.object({
  companyId: P.int,
  industryId: P.int,
});
export type CompanyIndustryCreateOwn = z.infer<typeof CompanyIndustryCreateOwn>;

/**
 * TagCreateOwn schema (Tue Nov 04 2025)
 */
export const TagCreateOwn = z.object({ name: P.short });
export type TagCreateOwn = z.infer<typeof TagCreateOwn>;

/**
 * HtmlTemplateCreateOwn schema (Tue Nov 04 2025)
 */
export const HtmlTemplateCreateOwn = z.object({
  name: P.short,
  tags: P.str.array(),
  template: P.str,
});
export type HtmlTemplateCreateOwn = z.infer<typeof HtmlTemplateCreateOwn>;

/**
 * RecordCreateOwn schema (Tue Nov 04 2025)
 */
export const RecordCreateOwn = z.object({ key: P.str, value: P.str });
export type RecordCreateOwn = z.infer<typeof RecordCreateOwn>;

/**
 * AttributeCreate schema (Tue Nov 04 2025)
 */
export const AttributeCreate = z.object({ name: P.short });
export type AttributeCreate = z.infer<typeof AttributeCreate>;

/**
 * AttributeUpdate schema (Tue Nov 04 2025)
 */
export const AttributeUpdate = AttributeCreate.clone().partial();
export type AttributeUpdate = z.infer<typeof AttributeUpdate>;

/**
 * CountryCreate schema (Tue Nov 04 2025)
 */
export const CountryCreate = z.object({
  name: P.short,
  countryCode: P.str.optional(),
  phoneCode: P.str.optional(),
  flag: P.str.optional(),
});
export type CountryCreate = z.infer<typeof CountryCreate>;

/**
 * CountryUpdate schema (Tue Nov 04 2025)
 */
export const CountryUpdate = CountryCreate.clone().partial();
export type CountryUpdate = z.infer<typeof CountryUpdate>;

/**
 * CurrencyCreate schema (Tue Nov 04 2025)
 */
export const CurrencyCreate = z.object({
  name: P.short,
  symbol: P.str.optional(),
});
export type CurrencyCreate = z.infer<typeof CurrencyCreate>;

/**
 * CurrencyUpdate schema (Tue Nov 04 2025)
 */
export const CurrencyUpdate = CurrencyCreate.clone().partial();
export type CurrencyUpdate = z.infer<typeof CurrencyUpdate>;

/**
 * CategoryCreate schema (Tue Nov 04 2025)
 */
export const CategoryCreate = z.object({
  parentId: P.int.optional(),
  name: P.short,
  description: P.long.optional(),
  icon: P.str.optional(),
  image: P.str.optional(),
  children: P.connectMany.optional(),
});
export type CategoryCreate = z.infer<typeof CategoryCreate>;

/**
 * CategoryUpdate schema (Tue Nov 04 2025)
 */
export const CategoryUpdate = CategoryCreate.clone().partial();
export type CategoryUpdate = z.infer<typeof CategoryUpdate>;

/**
 * DepartmentCreate schema (Tue Nov 04 2025)
 */
export const DepartmentCreate = z.object({
  parentId: P.int.optional(),
  name: P.short,
  description: P.long.optional(),
  icon: P.str.optional(),
  image: P.str.optional(),
  children: P.connectMany.optional(),
});
export type DepartmentCreate = z.infer<typeof DepartmentCreate>;

/**
 * DepartmentUpdate schema (Tue Nov 04 2025)
 */
export const DepartmentUpdate = DepartmentCreate.clone().partial();
export type DepartmentUpdate = z.infer<typeof DepartmentUpdate>;

/**
 * IndustryCreate schema (Tue Nov 04 2025)
 */
export const IndustryCreate = z.object({
  name: P.short,
  description: P.long.optional(),
  occupations: P.connectMany.optional(),
  companyIndustries: P.connectMany.optional(),
});
export type IndustryCreate = z.infer<typeof IndustryCreate>;

/**
 * IndustryUpdate schema (Tue Nov 04 2025)
 */
export const IndustryUpdate = IndustryCreate.clone().partial();
export type IndustryUpdate = z.infer<typeof IndustryUpdate>;

/**
 * OccupationCreate schema (Tue Nov 04 2025)
 */
export const OccupationCreate = z.object({
  industryId: P.int,
  name: P.short,
  description: P.long.optional(),
});
export type OccupationCreate = z.infer<typeof OccupationCreate>;

/**
 * OccupationUpdate schema (Tue Nov 04 2025)
 */
export const OccupationUpdate = OccupationCreate.clone().partial();
export type OccupationUpdate = z.infer<typeof OccupationUpdate>;

/**
 * CompanyCreate schema (Tue Nov 04 2025)
 */
export const CompanyCreate = z.object({
  name: P.short,
  companyIndustries: P.connectMany.optional(),
});
export type CompanyCreate = z.infer<typeof CompanyCreate>;

/**
 * CompanyUpdate schema (Tue Nov 04 2025)
 */
export const CompanyUpdate = CompanyCreate.clone().partial();
export type CompanyUpdate = z.infer<typeof CompanyUpdate>;

/**
 * CompanyIndustryCreate schema (Tue Nov 04 2025)
 */
export const CompanyIndustryCreate = z.object({
  companyId: P.int,
  industryId: P.int,
});
export type CompanyIndustryCreate = z.infer<typeof CompanyIndustryCreate>;

/**
 * CompanyIndustryUpdate schema (Tue Nov 04 2025)
 */
export const CompanyIndustryUpdate = CompanyIndustryCreate.clone().partial();
export type CompanyIndustryUpdate = z.infer<typeof CompanyIndustryUpdate>;

/**
 * TagCreate schema (Tue Nov 04 2025)
 */
export const TagCreate = z.object({ name: P.short });
export type TagCreate = z.infer<typeof TagCreate>;

/**
 * TagUpdate schema (Tue Nov 04 2025)
 */
export const TagUpdate = TagCreate.clone().partial();
export type TagUpdate = z.infer<typeof TagUpdate>;

/**
 * HtmlTemplateCreate schema (Tue Nov 04 2025)
 */
export const HtmlTemplateCreate = z.object({
  name: P.short,
  tags: P.str.array(),
  template: P.str,
});
export type HtmlTemplateCreate = z.infer<typeof HtmlTemplateCreate>;

/**
 * HtmlTemplateUpdate schema (Tue Nov 04 2025)
 */
export const HtmlTemplateUpdate = HtmlTemplateCreate.clone().partial();
export type HtmlTemplateUpdate = z.infer<typeof HtmlTemplateUpdate>;

/**
 * RecordCreate schema (Tue Nov 04 2025)
 */
export const RecordCreate = z.object({ key: P.str, value: P.str });
export type RecordCreate = z.infer<typeof RecordCreate>;

/**
 * RecordUpdate schema (Tue Nov 04 2025)
 */
export const RecordUpdate = RecordCreate.clone().partial();
export type RecordUpdate = z.infer<typeof RecordUpdate>;
