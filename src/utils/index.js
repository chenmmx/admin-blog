export function deepCopy (obj) {
  let temp = obj.constructor === Array ? [] : {}
  for (let val in obj) {
    temp[val] = typeof obj[val] === 'object' ? deepCopy(obj[val]) : obj[val]
  }
  return temp
}

export function copy (obj) {
  let temp = {}
  for (let val in obj) {
    temp[val] = obj[val]
  }
  return temp
}
