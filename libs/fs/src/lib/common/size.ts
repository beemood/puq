export enum Size {
  BIT = 1,
  BYTE = 8,
  KB = 1 * 1024,
  KB16 = Size.KB * 16,
  KB32 = Size.KB * 32,
  KB64 = Size.KB * 64,
  MB = Size.KB * 1024,
  GB = Size.MB * 1024,
}
