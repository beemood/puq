import z from 'zod';

export const bool = () => z.coerce.boolean();
