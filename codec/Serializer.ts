import Long from 'long';

export interface ITextEncoder {
  encode(value: string): Uint8Array;
}

export interface ISerializerOptions {
  tailByteLength?: number;
  textEncoder: ITextEncoder;
  littleEndian?: boolean;
}

export default class Serializer {
  readonly #tailByteLength;
  readonly #textEncoder;
  readonly #littleEndian;
  #arrayBuffer;
  #writeOffset;
  public constructor({
    textEncoder,
    littleEndian = true,
    tailByteLength = 1024 * 1024 * 2,
  }: ISerializerOptions) {
    this.#writeOffset = 0;
    this.#textEncoder = textEncoder;
    this.#littleEndian = littleEndian;
    this.#tailByteLength = tailByteLength;
    this.#arrayBuffer = new ArrayBuffer(this.#tailByteLength);
  }
  public writeSignedLong(value: string) {
    this.#writeLong(value, false);
  }
  public writeUnsignedLong(value: string) {
    this.#writeLong(value, true);
  }
  public view() {
    return new Uint8Array(this.#arrayBuffer, 0, this.#writeOffset);
  }
  public writeUint8(value: number): void {
    this.#allocate(1);
    this.#dataView().setUint8(this.#writeOffset, value);
    this.#writeOffset++;
  }
  public writeInt8(value: number): void {
    this.#allocate(1);
    this.#dataView().setInt8(this.#writeOffset, value);
    this.#writeOffset++;
  }
  public writeBuffer(value: Uint8Array): void {
    this.#allocate(value.byteLength);
    this.#view().set(value, this.#writeOffset);
    this.#writeOffset += value.byteLength;
  }
  public writeUint32(value: number): void {
    this.#allocate(4);
    this.#dataView().setUint32(this.#writeOffset, value, this.#littleEndian);
    this.#writeOffset += 4;
  }
  public writeUint16(value: number): void {
    this.#allocate(2);
    this.#dataView().setUint16(this.#writeOffset, value, this.#littleEndian);
    this.#writeOffset += 2;
  }
  public writeString(value: string): void {
    const buffer = this.#textEncoder.encode(value);
    /**
     * write string length
     */
    this.writeUint32(buffer.byteLength);
    /**
     * write string
     */
    this.writeBuffer(buffer);
  }
  public writeInt32(value: number): void {
    this.#allocate(4);
    this.#dataView().setInt32(this.#writeOffset, value, this.#littleEndian);
    this.#writeOffset += 4;
  }
  public writeInt16(value: number): void {
    this.#allocate(2);
    this.#dataView().setInt16(this.#writeOffset, value, this.#littleEndian);
    this.#writeOffset += 2;
  }
  public writeDouble(value: number): void {
    this.#allocate(8);
    this.#dataView().setFloat64(this.#writeOffset, value, this.#littleEndian);
    this.#writeOffset += 8;
  }
  public writeNullTerminatedString(value: string) {
    const encoded = this.#textEncoder.encode(value);
    const finalBuffer = new Uint8Array(encoded.byteLength + 1);
    finalBuffer.set(encoded);
    finalBuffer[finalBuffer.byteLength - 1] = 0;
    this.writeBuffer(finalBuffer);
  }
  public writeFloat(value: number): void {
    this.#allocate(4);
    this.#dataView().setFloat32(this.#writeOffset, value, this.#littleEndian);
    this.#writeOffset += 4;
  }
  public rewind() {
    this.#writeOffset = 0;
  }
  #dataView() {
    return new DataView(this.#arrayBuffer);
  }
  #view() {
    return new Uint8Array(this.#arrayBuffer);
  }
  #allocate(requestedByteLength: number) {
    const remainingByteLength =
      this.#arrayBuffer.byteLength - this.#writeOffset;
    if (remainingByteLength > requestedByteLength) {
      return;
    }
    const newByteLength =
      this.#arrayBuffer.byteLength + requestedByteLength + this.#tailByteLength;
    const newArrayBuffer = new ArrayBuffer(newByteLength);
    new Uint8Array(newArrayBuffer).set(this.#view());
    this.#arrayBuffer = newArrayBuffer;
  }
  #writeLong(value: string, unsigned: boolean) {
    this.writeBuffer(
      new Uint8Array(Long.fromString(value, unsigned).toBytesLE())
    );
  }
}
