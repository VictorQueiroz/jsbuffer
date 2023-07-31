import { ISerializer } from './__types__';
import { IDeserializer } from './__types__';
import JSBI from 'jsbi';
export type E = Readonly<A> | Readonly<B> | Readonly<C> | Readonly<D>;
export function isETrait(value: unknown): value is E {
  if (isA(value)) return true;
  if (isB(value)) return true;
  if (isC(value)) return true;
  if (isD(value)) return true;
  return false;
}
export const EMetadata = {
  name: 'E',
  id: 2091979600,
  kind: 'trait',
};
export const EMetadataV2 = {
  kind: 'trait',
  name: 'E',
  nodes: [
    {
      type: 'externalType',
      name: 'A',
      relativePath: './testUpdateFunction',
    },
    {
      type: 'externalType',
      name: 'B',
      relativePath: './testUpdateFunction',
    },
    {
      type: 'externalType',
      name: 'C',
      relativePath: './testUpdateFunction',
    },
    {
      type: 'externalType',
      name: 'D',
      relativePath: './testUpdateFunction',
    },
  ],
};
export function encodeETrait(__s: ISerializer, value: E) {
  switch (value._name) {
    case 'testUpdateFunction.A':
      encodeA(__s, value);
      break;
    case 'testUpdateFunction.B':
      encodeB(__s, value);
      break;
    case 'testUpdateFunction.C':
      encodeC(__s, value);
      break;
    case 'testUpdateFunction.D':
      encodeD(__s, value);
      break;
  }
}
export function decodeETrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: A | B | C | D;
  switch (__id) {
    case -344653639: {
      const tmp = decodeA(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case 141301319: {
      const tmp = decodeB(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case -276770684: {
      const tmp = decodeC(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case 224185341: {
      const tmp = decodeD(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    default:
      return null;
  }
  return value;
}
export function defaultETrait() {
  return defaultA();
}
export function compareETrait(__a: E, __b: E) {
  switch (__a._name) {
    case 'testUpdateFunction.A':
      if (__b._name !== 'testUpdateFunction.A') return false;
      return compareA(__a, __b);
    case 'testUpdateFunction.B':
      if (__b._name !== 'testUpdateFunction.B') return false;
      return compareB(__a, __b);
    case 'testUpdateFunction.C':
      if (__b._name !== 'testUpdateFunction.C') return false;
      return compareC(__a, __b);
    case 'testUpdateFunction.D':
      if (__b._name !== 'testUpdateFunction.D') return false;
      return compareD(__a, __b);
  }
}
export function isA(value: unknown): value is A {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testUpdateFunction.A'
    )
  )
    return false;
  if (
    !(
      'a' in value &&
      ((__v0) =>
        typeof __v0 === 'number' &&
        JSBI.equal(JSBI.BigInt(__v0), JSBI.BigInt(__v0)) &&
        JSBI.greaterThanOrEqual(
          JSBI.BigInt(__v0),
          JSBI.BigInt('-2147483648')
        ) &&
        JSBI.lessThanOrEqual(JSBI.BigInt(__v0), JSBI.BigInt('2147483647')))(
        value['a']
      )
    )
  )
    return false;
  return true;
}
export const AMetadata = {
  name: 'A',
  id: -344653639,
  kind: 'type',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'int',
      },
    },
  ],
};
export const AMetadataV2 = {
  kind: 'type',
  id: -344653639,
  globalName: 'testUpdateFunction.A',
  name: 'A',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'int',
      },
    },
  ],
};
export interface AInputParams {
  a: number;
}
export function A(params: AInputParams): A {
  return {
    _name: 'testUpdateFunction.A',
    a: params['a'],
  };
}
export function encodeA(__s: ISerializer, value: A) {
  __s.writeInt32(-344653639);
  /**
   * encoding param: a
   */
  const __pv0 = value['a'];
  __s.writeInt32(__pv0);
}
export function decodeA(__d: IDeserializer): A | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -344653639) return null;
  let a: number;
  /**
   * decoding param: a
   */
  a = __d.readInt32();
  return {
    _name: 'testUpdateFunction.A',
    a,
  };
}
export interface A {
  _name: 'testUpdateFunction.A';
  a: number;
}
export function defaultA(params: Partial<AInputParams> = {}): A {
  return A({
    a: 0,
    ...params,
  });
}
export function compareA(__a: A, __b: A): boolean {
  return (
    /**
     * compare parameter a
     */
    __a['a'] === __b['a']
  );
}
export function updateA(value: A, changes: Partial<AInputParams>) {
  if (typeof changes['a'] !== 'undefined') {
    if (!(changes['a'] === value['a'])) {
      value = A({
        ...value,
        a: changes['a'],
      });
    }
  }
  return value;
}
export function isB(value: unknown): value is B {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testUpdateFunction.B'
    )
  )
    return false;
  if (!('a' in value && ((__v0) => typeof __v0 === 'string')(value['a'])))
    return false;
  return true;
}
export const BMetadata = {
  name: 'B',
  id: 141301319,
  kind: 'type',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'string',
      },
    },
  ],
};
export const BMetadataV2 = {
  kind: 'type',
  id: 141301319,
  globalName: 'testUpdateFunction.B',
  name: 'B',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'string',
      },
    },
  ],
};
export interface BInputParams {
  a: string;
}
export function B(params: BInputParams): B {
  return {
    _name: 'testUpdateFunction.B',
    a: params['a'],
  };
}
export function encodeB(__s: ISerializer, value: B) {
  __s.writeInt32(141301319);
  /**
   * encoding param: a
   */
  const __pv0 = value['a'];
  __s.writeString(__pv0);
}
export function decodeB(__d: IDeserializer): B | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== 141301319) return null;
  let a: string;
  /**
   * decoding param: a
   */
  a = __d.readString();
  return {
    _name: 'testUpdateFunction.B',
    a,
  };
}
export interface B {
  _name: 'testUpdateFunction.B';
  a: string;
}
export function defaultB(params: Partial<BInputParams> = {}): B {
  return B({
    a: '',
    ...params,
  });
}
export function compareB(__a: B, __b: B): boolean {
  return (
    /**
     * compare parameter a
     */
    __a['a'] === __b['a']
  );
}
export function updateB(value: B, changes: Partial<BInputParams>) {
  if (typeof changes['a'] !== 'undefined') {
    if (!(changes['a'] === value['a'])) {
      value = B({
        ...value,
        a: changes['a'],
      });
    }
  }
  return value;
}
export function isC(value: unknown): value is C {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testUpdateFunction.C'
    )
  )
    return false;
  if (!('a' in value && ((__v0) => typeof __v0 === 'number')(value['a'])))
    return false;
  return true;
}
export const CMetadata = {
  name: 'C',
  id: -276770684,
  kind: 'type',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'double',
      },
    },
  ],
};
export const CMetadataV2 = {
  kind: 'type',
  id: -276770684,
  globalName: 'testUpdateFunction.C',
  name: 'C',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'double',
      },
    },
  ],
};
export interface CInputParams {
  a: number;
}
export function C(params: CInputParams): C {
  return {
    _name: 'testUpdateFunction.C',
    a: params['a'],
  };
}
export function encodeC(__s: ISerializer, value: C) {
  __s.writeInt32(-276770684);
  /**
   * encoding param: a
   */
  const __pv0 = value['a'];
  __s.writeDouble(__pv0);
}
export function decodeC(__d: IDeserializer): C | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -276770684) return null;
  let a: number;
  /**
   * decoding param: a
   */
  a = __d.readDouble();
  return {
    _name: 'testUpdateFunction.C',
    a,
  };
}
export interface C {
  _name: 'testUpdateFunction.C';
  a: number;
}
export function defaultC(params: Partial<CInputParams> = {}): C {
  return C({
    a: 0.0,
    ...params,
  });
}
export function compareC(__a: C, __b: C): boolean {
  return (
    /**
     * compare parameter a
     */
    __a['a'] === __b['a']
  );
}
export function updateC(value: C, changes: Partial<CInputParams>) {
  if (typeof changes['a'] !== 'undefined') {
    if (!(changes['a'] === value['a'])) {
      value = C({
        ...value,
        a: changes['a'],
      });
    }
  }
  return value;
}
export function isD(value: unknown): value is D {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testUpdateFunction.D'
    )
  )
    return false;
  if (!('a' in value && ((__v0) => typeof __v0 === 'number')(value['a'])))
    return false;
  return true;
}
export const DMetadata = {
  name: 'D',
  id: 224185341,
  kind: 'type',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'float',
      },
    },
  ],
};
export const DMetadataV2 = {
  kind: 'type',
  id: 224185341,
  globalName: 'testUpdateFunction.D',
  name: 'D',
  params: [
    {
      name: 'a',
      type: {
        type: 'generic',
        value: 'float',
      },
    },
  ],
};
export interface DInputParams {
  a: number;
}
export function D(params: DInputParams): D {
  return {
    _name: 'testUpdateFunction.D',
    a: params['a'],
  };
}
export function encodeD(__s: ISerializer, value: D) {
  __s.writeInt32(224185341);
  /**
   * encoding param: a
   */
  const __pv0 = value['a'];
  __s.writeFloat(__pv0);
}
export function decodeD(__d: IDeserializer): D | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== 224185341) return null;
  let a: number;
  /**
   * decoding param: a
   */
  a = __d.readFloat();
  return {
    _name: 'testUpdateFunction.D',
    a,
  };
}
export interface D {
  _name: 'testUpdateFunction.D';
  a: number;
}
export function defaultD(params: Partial<DInputParams> = {}): D {
  return D({
    a: 0.0,
    ...params,
  });
}
export function compareD(__a: D, __b: D): boolean {
  return (
    /**
     * compare parameter a
     */
    __a['a'] === __b['a']
  );
}
export function updateD(value: D, changes: Partial<DInputParams>) {
  if (typeof changes['a'] !== 'undefined') {
    if (!(changes['a'] === value['a'])) {
      value = D({
        ...value,
        a: changes['a'],
      });
    }
  }
  return value;
}
export function isTest(value: unknown): value is test {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testUpdateFunction.test'
    )
  )
    return false;
  if (
    !('traitParam' in value && ((__v0) => isETrait(__v0))(value['traitParam']))
  )
    return false;
  return true;
}
export const testMetadata = {
  name: 'test',
  id: 1011101560,
  kind: 'type',
  params: [
    {
      name: 'traitParam',
      type: {
        id: 2091979600,
        type: 'internalType',
        kind: 'trait',
        name: 'E',
      },
    },
  ],
};
export const testMetadataV2 = {
  kind: 'type',
  id: 1011101560,
  globalName: 'testUpdateFunction.test',
  name: 'test',
  params: [
    {
      name: 'traitParam',
      type: {
        type: 'internalType',
        interfaceName: 'E',
      },
    },
  ],
};
export interface testInputParams {
  traitParam: Readonly<E>;
}
export function test(params: testInputParams): test {
  return {
    _name: 'testUpdateFunction.test',
    traitParam: params['traitParam'],
  };
}
export function encodeTest(__s: ISerializer, value: test) {
  __s.writeInt32(1011101560);
  /**
   * encoding param: traitParam
   */
  const __pv0 = value['traitParam'];
  encodeETrait(__s, __pv0);
}
export function decodeTest(__d: IDeserializer): test | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== 1011101560) return null;
  let traitParam: E;
  /**
   * decoding param: traitParam
   */
  const __tmp1 = decodeETrait(__d);
  if (__tmp1 === null) return null;
  traitParam = __tmp1;
  return {
    _name: 'testUpdateFunction.test',
    traitParam,
  };
}
export interface test {
  _name: 'testUpdateFunction.test';
  traitParam: Readonly<E>;
}
export function defaultTest(params: Partial<testInputParams> = {}): test {
  return test({
    traitParam: defaultETrait(),
    ...params,
  });
}
export function compareTest(__a: test, __b: test): boolean {
  return (
    /**
     * compare parameter traitParam
     */
    compareETrait(__a['traitParam'], __b['traitParam'])
  );
}
export function updateTest(value: test, changes: Partial<testInputParams>) {
  if (typeof changes['traitParam'] !== 'undefined') {
    if (!compareETrait(changes['traitParam'], value['traitParam'])) {
      value = test({
        ...value,
        traitParam: changes['traitParam'],
      });
    }
  }
  return value;
}
export const __metadataObjects__ = [
  EMetadataV2,
  AMetadataV2,
  BMetadataV2,
  CMetadataV2,
  DMetadataV2,
  testMetadataV2,
];
