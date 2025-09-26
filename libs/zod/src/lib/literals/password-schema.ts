import z from 'zod';

export const PasswordSchema = z
  .string()
  .min(6)
  .regex(/[A-Z]{1,}/, {
    error(name) {
      return `${name.path} should contain at least one uppercase letter`;
    },
  })
  .regex(/[a-z]{1,}/, {
    error(name) {
      return `${name.path} should contain at least one lowercase letter`;
    },
  })
  .regex(/[~!@#$%^&*()_+{}|:"<>?]{1,}/, {
    error(name) {
      return `${name.path} should contain at least one special character`;
    },
  })
  .regex(/[0-9]{1,}/, {
    error(name) {
      return `${name.path} should contain at least one number`;
    },
  });
