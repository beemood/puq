export const __Create__ = 'Create';
export const __Update__ = 'Update';
export const __Query__ = 'Query';
export const __QueryOne__ = 'QueryOne';
export const __OrderBy__ = 'OrderBy';
export const __Select__ = 'Select';
export const __Omit__ = 'Omit';
export const __Include__ = 'Include';
export const __Projection__ = 'Projection';
export const __Field__ = 'Field';
export const __Where__ = 'Where';
export const __Enum__ = '';
export const __Filter__ = 'Filter';
export const __ArrayFilter__ = 'ArrayFilter';

export const __CreateOwn__ = 'CreateOwn';
export const __UpdateOwn__ = 'UpdateOwn';
export const __QueryOwn__ = 'QueryOwn';
export const __QueryOneOwn__ = 'QueryOneOwn';
export const __OrderByOwn__ = 'OrderByOwn';
export const __SelectOwn__ = 'SelectOwn';
export const __ProjectionOwn__ = 'ProjectionOwn';
export const __WhereOwn__ = 'WhereOwn';
export const __WhereScalarOwn__ = 'WhereScalarOwn';

/**
 * Create model's Create schema name
 * @param name
 * @returns
 */
export const toCreate = (name: string) => `${name}${__Create__}`;

/**
 * Create model's Update schema name
 * @param name
 * @returns
 */
export const toUpdate = (name: string) => `${name}${__Update__}`;

/**
 * Create model's Query schema name
 * @param name
 * @returns
 */
export const toQuery = (name: string) => `${name}${__Query__}`;

/**
 * Create model's QueryOne schema name
 * @param name
 * @returns
 */
export const toQueryOne = (name: string) => `${name}${__QueryOne__}`;

/**
 * Create model's OrderBy schema name
 * @param name
 * @returns
 */
export const toOrderBy = (name: string) => `${name}${__OrderBy__}`;

/**
 * Create model's Select schema name
 * @param name
 * @returns
 */
export const toSelect = (name: string) => `${name}${__Select__}`;

/**
 * Create model's Omit schema name
 * @param name
 * @returns
 */
export const toOmit = (name: string) => `${name}${__Omit__}`;

/**
 * Create model's Include schema name
 * @param name
 * @returns
 */
export const toInclude = (name: string) => `${name}${__Include__}`;

/**
 * Create model's Projection schema name
 * @param name
 * @returns
 */
export const toProjection = (name: string) => `${name}${__Projection__}`;

/**
 * Create model-field enum schema name
 * @param name
 * @returns
 */
export const toField = (name: string) => `${name}${__Field__}`;
export const toWhere = (name: string) => `${name}${__Where__}`;

/**
 * Create enum model schema name (Not for data models)
 * @param name Enum model name
 * @returns
 */
export const toEnum = (name: string) => `${name}${__Enum__}`;

// Own
/**
 * Create model's CreateOwn schema name
 * @param name
 * @returns
 */
export const toCreateOwn = (name: string) => `${name}${__CreateOwn__}`;

/**
 * Create model's UpdateOwn schema name
 * @param name
 * @returns
 */
export const toUpdateOwn = (name: string) => `${name}${__UpdateOwn__}`;

/**
 * Create model's QueryOwn schema name
 * @param name
 * @returns
 */
export const toQueryOwn = (name: string) => `${name}${__QueryOwn__}`;

/**
 * Create model's QueryOneOwn schema name
 * @param name
 * @returns
 */
export const toQueryOneOwn = (name: string) => `${name}${__QueryOneOwn__}`;

/**
 * Create model's OrderByOwn schema name
 * @param name
 * @returns
 */
export const toOrderByOwn = (name: string) => `${name}${__OrderByOwn__}`;

/**
 * Create model's SelectOwn schema name
 * @param name
 * @returns
 */
export const toSelectOwn = (name: string) => `${name}${__SelectOwn__}`;

/**
 * Create model's WhereOwn schema name
 * @param name
 * @returns
 */
export const toWhereOwn = (name: string) => `${name}${__WhereOwn__}`;

/**
 * Create model's WhereOwn schema name
 * @param name
 * @returns
 */
export const toWhereScalarOwn = (name: string) =>
  `${name}${__WhereScalarOwn__}`;

/**
 * Create model's Filter schema name
 * @param name
 * @returns
 */
export const toFilter = (name: string) => `${name}${__Filter__}`;

/**
 * Create model's ArrayFilter schema name
 * @param name
 * @returns
 */
export const toArrayFilter = (name: string) => `${name}${__ArrayFilter__}`;
