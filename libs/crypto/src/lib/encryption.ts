import { Buffer } from 'buffer'; // Explicitly import Buffer if not using Node's global types
import type { CipherGCM, DecipherGCM } from 'crypto';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import { Readable } from 'stream';

export type DecryptedParts = {
  version: string;
  iv: string;
  authTag: string;
  content: string;
};

const delimeter = '::::::';

/**
 * A utility class for aes-256-gcm encryption and decryption operations.
 * It uses streams for processing to handle potentially large data efficiently.
 */
export class Encryption {
  // Static Properties (Configuration)
  private static readonly ALGORITHM: string = 'aes-256-gcm';
  private static readonly KEY_LENGTH: number = 32; // 32 bytes for aes-256
  private static readonly IV_LENGTH: number = 12; // 12 bytes
  private static readonly ENCODING: BufferEncoding = 'hex'; // Encoding for IV and ciphertext

  /**
   * Validates that the provided key is the correct length for the chosen algorithm.
   * @param key The encryption key (Buffer or string that can be converted to Buffer).
   */
  private static validateKey(key: Buffer | string): void {
    const keyBuffer = Buffer.isBuffer(key)
      ? key
      : Buffer.from(key, this.ENCODING);
    if (keyBuffer.length !== this.KEY_LENGTH) {
      throw new Error(`Key must be ${this.KEY_LENGTH} bytes`);
    }
  }

  /**
   * Encrypts data using AES-256-CBC with a promise-based stream approach.
   * @param data The plaintext data to encrypt (can be a Buffer or string).
   * @param key The encryption key (32 bytes).
   * @param version A header/version to prefix the ciphertext (e.g., version info).
   * @returns A promise that resolves to the combined encrypted string: "[version]:[iv]:[ciphertext]".
   */
  public static async encrypt(
    data: string | Buffer,
    key: Buffer | string,
    version: string | number
  ): Promise<string> {
    this.validateKey(key);
    const keyBuffer: Buffer = Buffer.isBuffer(key)
      ? key
      : Buffer.from(key, this.ENCODING);

    // 1. Generate a random Initialization Vector (IV)
    const iv: Buffer = randomBytes(this.IV_LENGTH);

    // 2. Create the cipher stream
    const cipher = createCipheriv(this.ALGORITHM, keyBuffer, iv) as CipherGCM;

    return new Promise((resolve, reject) => {
      let ciphertext = '';

      // 3. Create a readable stream from the input data
      const readableStream = Readable.from([data]);

      // 4. Pipe the data through the cipher
      readableStream
        .pipe(cipher)
        .on('data', (chunk: Buffer) => {
          // Collect the encrypted data chunk by chunk, converting to hex
          ciphertext += chunk.toString(this.ENCODING);
        })
        .on('end', () => {
          const authTag: Buffer = cipher.getAuthTag();

          // Resolve with the combined formatted string
          resolve(
            [
              version.toString(),
              iv.toString(this.ENCODING),
              authTag.toString(this.ENCODING),
              ciphertext,
            ].join(delimeter)
          );
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  public static decryptParts(encryptedData: string): DecryptedParts {
    const parts = encryptedData.split(delimeter);
    if (parts.length != 4) {
      throw new Error(`Invalid encripted data!`);
    }
    const [version, iv, authTag, content] = parts;

    return {
      version,
      iv,
      authTag,
      content,
    };
  }

  /**
   * Decrypts an encrypted string created by the 'encrypt' method.
   * @param encryptedData The combined encrypted string: "[version]:[iv]:[ciphertext]".
   * @param key The decryption key (32 bytes).
   * @returns A promise that resolves to the original plaintext string.
   */
  public static async decrypt(
    encryptedData: string,
    key: Buffer | string
  ): Promise<string> {
    this.validateKey(key);
    const keyBuffer: Buffer = Buffer.isBuffer(key)
      ? key
      : Buffer.from(key, this.ENCODING);

    const { authTag, content, iv } = this.decryptParts(encryptedData);

    // 2. Convert hex parts back to Buffers
    const ivBuffer: Buffer = Buffer.from(iv, this.ENCODING);
    const authTagBuffer: Buffer = Buffer.from(authTag, this.ENCODING);
    const contentBuffer: Buffer = Buffer.from(content, this.ENCODING);

    // 3. Create the decipher stream
    const decipher = createDecipheriv(
      this.ALGORITHM,
      keyBuffer,
      ivBuffer
    ) as DecipherGCM;

    decipher.setAuthTag(authTagBuffer);

    // 4. Create a readable stream from the ciphertext buffer
    const readableStream = Readable.from([contentBuffer]);

    return new Promise((resolve, reject) => {
      let plaintext = '';

      // 5. Pipe the ciphertext through the decipher
      readableStream
        .pipe(decipher)
        .on('data', (chunk: Buffer) => {
          // Collect the decrypted data chunk by chunk, converting to utf8
          plaintext += chunk.toString('utf8');
        })
        .on('end', () => {
          // Resolve with the final plaintext
          resolve(plaintext);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  /**
   * Generates a cryptographically secure random key of the required length (32 bytes).
   * @returns A Buffer containing the secret key.
   */
  public static generateKey(): Buffer {
    return randomBytes(this.KEY_LENGTH);
  }
}
