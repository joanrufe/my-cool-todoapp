export const arrayObjAssign = (arr, id, newProps) => 
  arr.map(el => el.id === id ? Object.assign({}, el, newProps) : el )

export const log = (message, ...params) => console.log(message, ...params)