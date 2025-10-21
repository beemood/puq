import z from 'zod';

export class Scalar {
  static bool() {
    return z.coerce.boolean();
  }

  static string() {
    return z.string();
  }

  static number() {
    return z.coerce.number();
  }

  static currency() {
    return z.coerce.number().min(0);
  }

  static int() {
    return z.coerce.number().int();
  }

  static name() {
    return this.string().min(2).max(30);
  }

  static description() {
    return this.string().max(1000);
  }

  static positive() {
    return this.number().positive();
  }

  static positiveInt() {
    return this.number().int().positive();
  }

  static id() {
    return this.positiveInt();
  }

  static uuid() {
    return z.uuid();
  }

  static ipv4() {
    return z.ipv4();
  }

  static ipv6() {
    return z.ipv6();
  }

  static email() {
    return z.email();
  }

  static datetime() {
    return z.iso.datetime();
  }

  static slug() {
    return this.string()
      .min(2)
      .regex(/^[a-z-]{0,}$/);
  }

  static json() {
    return z.json();
  }

  static take() {
    return this.int().min(1).default(20).optional();
  }

  static skip() {
    return this.int().min(0).default(0).optional();
  }
}
