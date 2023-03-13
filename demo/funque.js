class Demo {
  constructor(name) {
    this.name = name
    // 构造函数中定义函数，将会在每个实例中存在该函数的属性
    this.getNameIn = () => {
      console.log(this.name, 'getNameIn')
    }

    // this.getNameOut = this.getNameOut.bind(this);
  }

  // 构造函数外面定义函数，将会存在这个实例的原型链上，实例遍历原型链获取改函数
  getNameOut() {
    console.log(this.name, 'getNameOut')
  }

  // 此时注意的是写箭头函数，和在构造函数里面写一样，会绑定在实例的属性上。
  getName = () => {
    console.log(this.name, 'getNameOut')
  }
}

const demo1 = new Demo('Lillian')
const demo2 = new Demo('Lillian')

console.log(demo1.__proto__.getNameIn)
console.log(demo1.__proto__.getName)
console.log(demo1.__proto__.getNameOut)

console.log(demo1.getNameIn === demo2.getNameIn)
console.log(demo1.getNameOut === demo2.getNameOut)

console.log(Object.getOwnPropertyNames(demo1))

console.log(Demo.prototype)
console.log(Demo.prototype.getNameOut)

demo1.getNameIn()
demo1.getNameOut()
