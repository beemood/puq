export enum OpenMode {
  /**
   * Create the file if not exist, and override the content
   */
  WRITE = 'w',

  /**
   * Create the file if not exist, and append the content
   */
  APPEND = 'a',

  /**
   * Fail if the file already exists, or create and write the file
   */
  EXCLUSIVE = 'wx',
}
