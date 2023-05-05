import {User} from "./SecondUser";
import {ISerializer} from "./../__types__";
import {encodeUser} from "./SecondUser";
import {IDeserializer} from "./../__types__";
import {decodeUser} from "./SecondUser";
import {defaultUser} from "./SecondUser";
import {compareUser} from "./SecondUser";
import {compareUser as compareUser1} from "./SecondUser";
export interface ConversationInputParams {
  id: number;
  user: User;
}
export function Conversation(params: ConversationInputParams): Conversation {
  return {
    _name: 'conversation.index.Conversation',
    id: params['id'],
    user: params['user']
  };
}
export function encodeConversation(s: ISerializer, value: Conversation) {
  s.writeInt32(-563833943);
  /**
   * encoding param: id
   */
  const __pv0 = value['id'];
  s.writeInt32(__pv0);
  /**
   * encoding param: user
   */
  const __pv1 = value['user'];
  encodeUser(s,__pv1);
}
export function decodeConversation(__d: IDeserializer): Conversation | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -563833943) return null;
  let id: number;
  let user: User;
  /**
   * decoding param: id
   */
  id = __d.readInt32();
  /**
   * decoding param: user
   */
  const tmp3 = decodeUser(__d);
  if(tmp3 === null) return null;
  user = tmp3;
  return {
    _name: 'conversation.index.Conversation',
    id,
    user
  };
}
export interface Conversation  {
  _name: 'conversation.index.Conversation';
  id: number;
  user: User;
}
export function defaultConversation(params: Partial<ConversationInputParams> = {}): Conversation {
  return Conversation({
    id: 0,
    user: defaultUser(),
    ...params
  });
}
export function compareConversation(__a: Conversation, __b: Conversation) {
  return (
    /**
     * compare parameter id
     */
    __a['id'] === __b['id'] &&
    /**
     * compare parameter user
     */
    compareUser(__a['user'],__b['user'])
  );
}
export function updateConversation(value: Conversation, changes: Partial<ConversationInputParams>) {
  if(typeof changes['id'] !== 'undefined') {
    if(!(changes['id'] === value['id'])) {
      value = Conversation({
        ...value,
        id: changes['id'],
      });
    }
  }
  if(typeof changes['user'] !== 'undefined') {
    if(!(compareUser1(changes['user'],value['user']))) {
      value = Conversation({
        ...value,
        user: changes['user'],
      });
    }
  }
  return value;
}
export interface ConversationsInputParams {
  conversations: ReadonlyArray<Conversation>;
}
export function Conversations(params: ConversationsInputParams): Conversations {
  return {
    _name: 'conversation.index.Conversations',
    conversations: params['conversations']
  };
}
export function encodeConversations(s: ISerializer, value: Conversations) {
  s.writeInt32(-1956221194);
  /**
   * encoding param: conversations
   */
  const __pv0 = value['conversations'];
  const __l0 = __pv0.length;
  s.writeUint32(__l0);
  for(let __i0 = 0; __i0 < __l0; __i0++) {
    const __v__i0 = __pv0[__i0];
    encodeConversation(s,__v__i0);
  }
}
export function decodeConversations(__d: IDeserializer): Conversations | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1956221194) return null;
  let conversations: Array<Conversation>;
  /**
   * decoding param: conversations
   */
  const iindex1 = __d.readUint32();
  const oindex1 = new Array<Conversation>(iindex1);
  conversations = oindex1;
  for(let index1 = 0; index1 < iindex1; index1++) {
    const __tmp2 = decodeConversation(__d);
    if(__tmp2 === null) return null;
    oindex1[index1] = __tmp2;
  }
  return {
    _name: 'conversation.index.Conversations',
    conversations
  };
}
export interface Conversations  {
  _name: 'conversation.index.Conversations';
  conversations: ReadonlyArray<Conversation>;
}
export function defaultConversations(params: Partial<ConversationsInputParams> = {}): Conversations {
  return Conversations({
    conversations: [],
    ...params
  });
}
export function compareConversations(__a: Conversations, __b: Conversations) {
  return (
    /**
     * compare parameter conversations
     */
    __a['conversations'].length === __b['conversations'].length && __a['conversations'].every((__i,index) => (compareConversation(__i,__b['conversations'][index])))
  );
}
export function updateConversations(value: Conversations, changes: Partial<ConversationsInputParams>) {
  if(typeof changes['conversations'] !== 'undefined') {
    if(!(changes['conversations'].length === value['conversations'].length && changes['conversations'].every((__i,index) => (compareConversation(__i,value['conversations'][index]))))) {
      value = Conversations({
        ...value,
        conversations: changes['conversations'],
      });
    }
  }
  return value;
}
