//action.js
//操作數據    增加 或減小  AGE

//增加
export const add = (num) => {
  return { type: 'ADD', data: num }
}

export const del = (num) => {
  return { type: 'DEL', data: num }
}
