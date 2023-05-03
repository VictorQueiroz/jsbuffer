import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {IRequest} from "./__types__";
export function Message(params: Omit<Message,'_name'>): Message {
  return {
    _name: 'message.Message',
    ...params
  };
}
export function encodeMessage(s: ISerializer, value: Message) {
  s.writeInt32(-1988975903);
  /**
   * encoding param: id
   */
  const pv0 = value['id'];
  s.writeInt32(pv0);
}
export function decodeMessage(__d: IDeserializer): Message | null {
  const __id = __d.readInt32();
  if(__id !== -1988975903) return null;
  let id: number;
  /**
   * decoding param: id
   */
  id = __d.readInt32();
  return {
    _name: 'message.Message',
    id
  };
}
export interface Message  {
  _name: 'message.Message';
  id: number;
}
export function Messages(params: Omit<Messages,'_name'>): Messages {
  return {
    _name: 'message.Messages',
    ...params
  };
}
export function encodeMessages(s: ISerializer, value: Messages) {
  s.writeInt32(-863342777);
  /**
   * encoding param: messages
   */
  const pv0 = value['messages'];
  const __l0 = pv0.length;
  s.writeUint32(__l0);
  for(let __i0 = 0; __i0 < __l0; __i0++) {
    const v__i0 = pv0[__i0];
    encodeMessage(s,v__i0);
  }
}
export function decodeMessages(__d: IDeserializer): Messages | null {
  const __id = __d.readInt32();
  if(__id !== -863342777) return null;
  let messages: Array<Message>;
  /**
   * decoding param: messages
   */
  {
    const iindex0 = __d.readUint32();
    const oindex0 = new Array(iindex0);
    messages = oindex0;
    for(let index0 = 0; index0 < iindex0; index0++) {
      const tmp1 = decodeMessage(__d);
      if(tmp1 === null) return null;
      oindex0[index0] = tmp1;
    }
  }
  return {
    _name: 'message.Messages',
    messages
  };
}
export interface Messages  {
  _name: 'message.Messages';
  messages: ReadonlyArray<Message>;
}
export function GetMessages(params: Omit<GetMessages,'_name'>): GetMessages {
  return {
    _name: 'message.GetMessages',
    ...params
  };
}
export function encodeGetMessages(s: ISerializer, value: GetMessages) {
  s.writeInt32(-1766600538);
  /**
   * encoding param: offset
   */
  const pv0 = value['offset'];
  s.writeInt32(pv0);
  /**
   * encoding param: limit
   */
  const pv1 = value['limit'];
  s.writeInt32(pv1);
}
export function decodeGetMessages(__d: IDeserializer): GetMessages | null {
  const __id = __d.readInt32();
  if(__id !== -1766600538) return null;
  let offset: number;
  let limit: number;
  /**
   * decoding param: offset
   */
  offset = __d.readInt32();
  /**
   * decoding param: limit
   */
  limit = __d.readInt32();
  return {
    _name: 'message.GetMessages',
    offset,
    limit
  };
}
export interface GetMessages extends IRequest<Messages> {
  _name: 'message.GetMessages';
  offset: number;
  limit: number;
}
