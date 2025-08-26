import z from 'zod';

export const num = z.number();

export const int = z.int();

export const positive = num.positive();

export const quantity = int.nonnegative();

export const rate = int.min(0).max(5);

export const percent = int.min(0).max(100);

export const id = z.int().positive();
