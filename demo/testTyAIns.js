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
const obj = new Object()
// eslint-disable-next-line @typescript-eslint/no-implied-eval
const fun = new Function()
const Object1 = Object
console.log(obj, 'obj')
console.log(fun, 'fun')
console.log(Object)
console.log(Function instanceof Object)
console.log(Object instanceof Function)

