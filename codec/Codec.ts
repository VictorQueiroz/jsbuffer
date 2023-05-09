import Deserializer, { ITextDecoder } from './Deserializer';
import Serializer, { ITextEncoder } from './Serializer';

export default class Codec {
  readonly #serializer;
  readonly #textDecoder;
  public constructor({
    textEncoder,
    textDecoder,
  }: {
    textEncoder: ITextEncoder;
    textDecoder: ITextDecoder;
  }) {
    this.#serializer = new Serializer({
      textEncoder,
    });
    this.#textDecoder = textDecoder;
  }
  /**
   * the ArrayBuffer used by the Uint8Array instance returned by this call will be reused by other calls to this encode function,
   * to avoid data corruption, make sure to copy if you will not send the message immediately after a call to this method.
   */
  public encode<T>(
    encode: (s: Serializer, value: T) => void,
    value: T
  ): Uint8Array {
    encode(this.#serializer, value);
    return this.#serializer.view();
  }
  public decode<T>(
    decode: (d: Deserializer) => T | null,
    buffer: Uint8Array
  ): T | null {
    const d = new Deserializer({
      buffer,
      textDecoder: this.#textDecoder,
    });
    return decode(d);
  }
}