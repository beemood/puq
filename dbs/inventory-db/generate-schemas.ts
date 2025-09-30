/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateZodSchemaFiles } from '@puq/prisma-schema';
import { Prisma } from './generated';

generateZodSchemaFiles(Prisma.dmmf.datamodel as any, 'src/lib');
