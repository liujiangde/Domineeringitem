at(index：正负数都行) 返回对应的元素 

concat() 返回一个新的数组  不修改原数组

copyWithin(指定位置，开始位置？，结束位置？) 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

entries() 返回一个新的数组迭代器对象 不修改原数组
console.log(iterator1.next().value); ==》 Array [0, "a"]

every(fun) 返回一个布尔值

fill(指定值，开始位置？，结束位置？) 修改原数组

filter(fun) 浅拷贝 不修改原数组

find(fun) 返回第一个符合的值 或者 undefined
findIndex(fun) 返回第一个符合的值索引 或者 -1
findLast(fun) 返回最后一个符合的值 或者 undefined
findLastIndex(fun) 返回最后一个符合的索引 或者 -1

flat(深度值) 返回一个新的数组 指定深度递归地将所有 子数组元素 拼接到 新的数组 中， 返回一个浅拷贝数组
flatMap()  等价于 先调用map 在调用flat

forEach()

Array.from(arrayLike, mapFn?, thisArg?) 对一个 类数组 或 可迭代对象 创建一个新的，浅拷贝的数组实例。

includes(searchElement, fromIndex?) 比较字符串和字符时是区分大小写的。 返回boolean

indexOf(searchElement, index?)  给定元素的第一个索引，如果不存在，则返回 -1

Array.isArray(value) 返回boolean

join(separator分隔符)  不修改原数组

keys() 返回一个包含数组中每个索引键的 Array Iterator 对象。
values()返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。

lastIndexOf(searchElement, fromIndex?)  返回最后一个出现的元素， 没有返回-1

map() 返回一个新数组 

Array.of(elementN)  新的 Array 实例。

pop() 删除最后一个元素 修改原数组 从数组中删除的元素（当数组为空时返回undefined）。
push(elementN) 一个或多个元素添加到数组的末尾 修改原数组  当调用该方法时，新的 length 属性值将被返回。
shift() 删除第一个元素
unshift(elementN)一个或多个元素添加到数组的开头，并返回该数组的新长度。 修改原数组

reduce((previousValue,currentValue,currentIndex,array) =>, initialValue) 使用“reducer”回调函数遍历整个数组后的结果。

reduceRight() 

reverse()  改变原数组 颠倒后的数组

slice()  返回一个新的数组对象 浅拷贝 原始数组不会被改变

some() 回的是一个 Boolean 类型的值。

sort(compareFn) 改变原数组   compareFn的返回值为false 不调换位置

splice(start, deleteCount, item1, item2, itemN) 改变原数组

with(index, value) 其中给定索引处的元素替换为给定值。 返回一个新数组  元素index替换为 的新数组value。
该with()方法总是创建一个密集数组（空元素的是变成undifined）。

