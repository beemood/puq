export enum WriteFlag {
  /**
   * Create the file if not exist, and override the content
   */
  WRITE_FLAG = 'w',

  /**
   * Create the file if not exist, and append the content
   */
  APPEND_FLAG = 'a',

  /**
   * Fail if the file already exists, or create and write the file
   */
  EXCLUSIVE_FLAG = 'wx',


  APPEND_MODE = 0o666,
}
