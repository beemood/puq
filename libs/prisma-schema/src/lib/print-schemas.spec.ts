import { writeFileSync } from 'fs';
import { join } from 'path';
import { Prisma } from '../../generated/index.js';
import { printSchemas } from './print-schemas.js';

// z.string()
//   .min(6)
//   .regex(/[A-Z]{1,}/, { error: 'must contain at least one upper-case letter' })
//   .regex(/[a-z]{1,}/, { error: 'must contain at least one lower-case letter' })
//   .regex(/[0-9]{1,}/, { error: 'must contain at least one number' })
//   .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
//     error: 'must contain at least one special character',
//   });

describe('printSchemas', () => {
  it('should print schemas', () => {
    const printableSchemas = printSchemas(Prisma.dmmf.datamodel);
    const formatedSchemas = require('prettier').format(printableSchemas);
    writeFileSync(
      join(__dirname, '..', '..', 'schemas', 'schema.ts'),
      [formatedSchemas].join('\n\n')
    );
  });
});
