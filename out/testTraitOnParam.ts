import { A } from './testTraitOnParamTrait';
import { isATrait } from './testTraitOnParamTrait';
import { ISerializer } from './__types__';
import { encodeATrait } from './testTraitOnParamTrait';
import { IDeserializer } from './__types__';
import { decodeATrait } from './testTraitOnParamTrait';
import { defaultATrait } from './testTraitOnParamTrait';
import { compareATrait } from './testTraitOnParamTrait';
export function isA0(value: unknown): value is A0 {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testTraitOnParam.A0'
    )
  )
    return false;
  if (!('value' in value && ((__v0) => isATrait(__v0))(value['value'])))
    return false;
  return true;
}
export const A0Metadata = {
  name: 'A0',
  id: -1244603213,
  kind: 'type',
  params: [
    {
      name: 'value',
      type: {
        name: 'A',
        id: '-945659736',
        type: 'externalType',
        externalModule: false,
        relativePath: './testTraitOnParamTrait',
      },
    },
  ],
};
export const A0MetadataV2 = {
  kind: 'type',
  id: -1244603213,
  globalName: 'testTraitOnParam.A0',
  name: 'A0',
  params: [
    {
      name: 'value',
      type: {
        type: 'externalType',
        name: 'A',
        relativePath: './testTraitOnParamTrait',
      },
    },
  ],
};
export interface A0InputParams {
  value: Readonly<A>;
}
export function A0(params: A0InputParams): A0 {
  return {
    _name: 'testTraitOnParam.A0',
    value: params['value'],
  };
}
export function encodeA0(__s: ISerializer, value: A0) {
  __s.writeInt32(-1244603213);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  encodeATrait(__s, __pv0);
}
export function decodeA0(__d: IDeserializer): A0 | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -1244603213) return null;
  let value: A;
  /**
   * decoding param: value
   */
  const tmp2 = decodeATrait(__d);
  if (tmp2 === null) return null;
  value = tmp2;
  return {
    _name: 'testTraitOnParam.A0',
    value,
  };
}
export interface A0 {
  _name: 'testTraitOnParam.A0';
  value: Readonly<A>;
}
export function defaultA0(params: Partial<A0InputParams> = {}): A0 {
  return A0({
    value: defaultATrait(),
    ...params,
  });
}
export function compareA0(__a: A0, __b: A0): boolean {
  return (
    /**
     * compare parameter value
     */
    compareATrait(__a['value'], __b['value'])
  );
}
export function updateA0(value: A0, changes: Partial<A0InputParams>) {
  if (typeof changes['value'] !== 'undefined') {
    if (!compareATrait(changes['value'], value['value'])) {
      value = A0({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export function isA1(value: unknown): value is A1 {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testTraitOnParam.A1'
    )
  )
    return false;
  if (!('value' in value && ((__v0) => isATrait(__v0))(value['value'])))
    return false;
  return true;
}
export const A1Metadata = {
  name: 'A1',
  id: -2001668861,
  kind: 'type',
  params: [
    {
      name: 'value',
      type: {
        name: 'A',
        id: '-945659736',
        type: 'externalType',
        externalModule: false,
        relativePath: './testTraitOnParamTrait',
      },
    },
  ],
};
export const A1MetadataV2 = {
  kind: 'type',
  id: -2001668861,
  globalName: 'testTraitOnParam.A1',
  name: 'A1',
  params: [
    {
      name: 'value',
      type: {
        type: 'externalType',
        name: 'A',
        relativePath: './testTraitOnParamTrait',
      },
    },
  ],
};
export interface A1InputParams {
  value: Readonly<A>;
}
export function A1(params: A1InputParams): A1 {
  return {
    _name: 'testTraitOnParam.A1',
    value: params['value'],
  };
}
export function encodeA1(__s: ISerializer, value: A1) {
  __s.writeInt32(-2001668861);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  encodeATrait(__s, __pv0);
}
export function decodeA1(__d: IDeserializer): A1 | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -2001668861) return null;
  let value: A;
  /**
   * decoding param: value
   */
  const tmp2 = decodeATrait(__d);
  if (tmp2 === null) return null;
  value = tmp2;
  return {
    _name: 'testTraitOnParam.A1',
    value,
  };
}
export interface A1 {
  _name: 'testTraitOnParam.A1';
  value: Readonly<A>;
}
export function defaultA1(params: Partial<A1InputParams> = {}): A1 {
  return A1({
    value: defaultATrait(),
    ...params,
  });
}
export function compareA1(__a: A1, __b: A1): boolean {
  return (
    /**
     * compare parameter value
     */
    compareATrait(__a['value'], __b['value'])
  );
}
export function updateA1(value: A1, changes: Partial<A1InputParams>) {
  if (typeof changes['value'] !== 'undefined') {
    if (!compareATrait(changes['value'], value['value'])) {
      value = A1({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export function isA2(value: unknown): value is A2 {
  if (
    !(
      typeof value === 'object' &&
      value !== null &&
      '_name' in value &&
      typeof value['_name'] === 'string' &&
      value['_name'] === 'testTraitOnParam.A2'
    )
  )
    return false;
  if (!('value' in value && ((__v0) => isATrait(__v0))(value['value'])))
    return false;
  return true;
}
export const A2Metadata = {
  name: 'A2',
  id: -820998189,
  kind: 'type',
  params: [
    {
      name: 'value',
      type: {
        name: 'A',
        id: '-945659736',
        type: 'externalType',
        externalModule: false,
        relativePath: './testTraitOnParamTrait',
      },
    },
  ],
};
export const A2MetadataV2 = {
  kind: 'type',
  id: -820998189,
  globalName: 'testTraitOnParam.A2',
  name: 'A2',
  params: [
    {
      name: 'value',
      type: {
        type: 'externalType',
        name: 'A',
        relativePath: './testTraitOnParamTrait',
      },
    },
  ],
};
export interface A2InputParams {
  value: Readonly<A>;
}
export function A2(params: A2InputParams): A2 {
  return {
    _name: 'testTraitOnParam.A2',
    value: params['value'],
  };
}
export function encodeA2(__s: ISerializer, value: A2) {
  __s.writeInt32(-820998189);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  encodeATrait(__s, __pv0);
}
export function decodeA2(__d: IDeserializer): A2 | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -820998189) return null;
  let value: A;
  /**
   * decoding param: value
   */
  const tmp2 = decodeATrait(__d);
  if (tmp2 === null) return null;
  value = tmp2;
  return {
    _name: 'testTraitOnParam.A2',
    value,
  };
}
export interface A2 {
  _name: 'testTraitOnParam.A2';
  value: Readonly<A>;
}
export function defaultA2(params: Partial<A2InputParams> = {}): A2 {
  return A2({
    value: defaultATrait(),
    ...params,
  });
}
export function compareA2(__a: A2, __b: A2): boolean {
  return (
    /**
     * compare parameter value
     */
    compareATrait(__a['value'], __b['value'])
  );
}
export function updateA2(value: A2, changes: Partial<A2InputParams>) {
  if (typeof changes['value'] !== 'undefined') {
    if (!compareATrait(changes['value'], value['value'])) {
      value = A2({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export const __metadataObjects__ = [A0MetadataV2, A1MetadataV2, A2MetadataV2];
