const a = 23

console.log(Object.getOwnPropertyNames(a))
const as = {
  asd: 'as',
  asdss: 'aaa',
}
console.log(Object.getOwnPropertyNames(as))
const asdf = [as, a, null, () => {}]
const aass = ['sdf', 'add']
console.log(Object.getOwnPropertyNames(asdf))

console.log(Function instanceof Object)
console.log(Object instanceof Function)
