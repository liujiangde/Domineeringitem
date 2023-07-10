// 第一题
// 6 2 1 5 3 4
//  2 6 1 3 4 5
const arr = [
  {
    id: 1,
    name: 'a',
    birth: 896630400000,
  },
  {
    id: 2,
    name: 'b',
    birth: 896630400000,
  },
  {
    id: 3,
    name: 'c',
    birth: 896630400000,
  },
]
// 按照 name 属性降序排序（字母顺序从大到小）
const resu = arr.sort((a, b) => b.name > a.name)
// console.log('resu', resu)
// 去除 id 属性相同的元素（如出现重复，后出现的覆盖先出现的，不要求保留原始顺序）

// const resu2 = arr.reduce((pre, now, index, res) => {
//   const ind = res.findIndex(value => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     value.id === pre.id
//   })
//   if (ind !== -1) {
//     res.replace()
//   }
// }, [])
const resu2 = []
const temp = new Map()
arr.reverse().forEach(item => {
  if (!temp.has(item.id)) {
    resu2.push(item)
  } else {
    temp.set(item.id, true)
  }
})

new Date('1995-01-01')
arr.fill(item => item.birth > new Date('1995-00-01').getTime())
// 如何做前端分页
// 前端分页逻辑,当获取所有的数据之后，需要将所有的数据进行存储 当前的pageSize和pageNum,去从所有的数据中

let list = [
  { id: '1234', name: 'a', children: [{ id: '12341', name: 'aa' }] },
  {
    id: '1235',
    name: 'b',
    children: [
      {
        id: '12351',
        name: 'ba',
        children: [
          { id: '123511', name: 'baa' },
          { id: '123512', name: 'bab' },
        ],
      },
      { id: '12352', name: 'bb' },
    ],
  },
  { id: '1236', name: 'c' },
]

// list, ['1235', '12351', '123512', '1236']
const filter = (arrTar, arrPar) => {
  arrTar.map((item, index) => {
    if (item.children) {
      filter(item.children, arrPar)
    } else {
      if (!arrPar.includes(item.id)) {
        item.splice(index, 1)
      }
    }
  })
}

// const demo = {
//   a: '11',
// },
// demo.a = 'aaaa'
