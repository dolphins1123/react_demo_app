// 創建數據
import * as action from './action' //引用所有 export
var obj = [{ name: 'paul', skill: 'c#', age: 20 }]
//引入 ACTION  判斷要ADD   或是DEL

export function data(state = obj[0].age, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.data
      break
    case 'DEL':
      return state - action.data
      break
    default:
      return state
      break
  }
}
