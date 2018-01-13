const initState = {
  msgs: [
    {
      id: 1,
      name: `腾讯新闻`,
      msgNum: 8,
      msgText: '今天吃啥',
      date: '11:30'
    }
  ],
  id: 1
}

const CHAT_ADD_MSG = 'CHAT_ADD_MSG'
const CHAT_ADD_NUM = 'CHAT_ADD_NUM'

export function chat (state = initState, action) {
  switch (action.type) {
    case CHAT_ADD_MSG:
      return {...state, msgs: state.msgs.concat([action.payload])}
    case CHAT_ADD_NUM:
      return {...state, id: action.id}
    default:
      return state
  }
}

export function addMsg (msgData) {
  return {
    type: CHAT_ADD_MSG,
    payload: msgData
  }
}

export function addNum (id) {
  return {
    type: CHAT_ADD_NUM,
    id: id
  }
}