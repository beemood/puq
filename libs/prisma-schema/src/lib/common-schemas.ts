export const _int = `
export const _int = z.coerce.number().int()
`;

export const _string = `
export const _string = z.string()
`;

export const _number = `
export const _number = z.coerce.number()
`;

export const _bool = `
export const _bool = z.coerce.boolean()
`;

export const _datetime = `
export const _datetime = z.iso.datetime()
`;

export const _shortText = `
export const _shortText = z.string().max(30)
`;

export const _longText = `
export const _longText = z.string().max(2000)
`;

export const _id = `
export const _id = z.coerce.number().int().min(1)
`;

export const _currency = `
export const _currency = z.coerce.number().min(0)
`;

export const _positiveInt = `
export const _positiveInt = z.coerce.number().int().min(0)
`;

export const _name = `
export const _name = z.string().min(3).max(30)
`;

export const _slug = `
export const _slug = z.string().min(3).max(30).regex(/[0-9a-z-]{0,30}/, { error:'Slug must contain only lowercase letters, numbers, and dash.'})
`;

export const _description = `
export const _description = z.string().max(1000)
`;

export const _email = `
export const _email = z.string().max(1000)
`;

export const _url = `
export const _url = z.url()
`;

export const _password = `
export const _password = z.string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: 'must contain at least one upper-case letter' })
  .regex(/[a-z]{1,}/, { error: 'must contain at least one lower-case letter' })
  .regex(/[0-9]{1,}/, { error: 'must contain at least one number' })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {error: 'must contain at least one special character' })
`;

export const _select = `
export const _select = z.coerce.boolean().optional()
`;

export const _direction = `
export const _direction = z.enum(['asc', 'desc']).optional()
`;

export const _orderByCount = `
export const _orderByCount = z.object({ _count: _direction }).optional();
`;

export const _jsonPreprocessor = `
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
`;
