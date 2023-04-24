


at(整数) 返回位于指定位置的单个 utf-16 码元组成的String 或者 undefined
charAt(0 到 length-1) 从一个字符串中返回指定的字符串 或者 空字符串 默认参数为 0
charCodeAt(0 到 length-1) 返回 0 到 65535 表示返回值的utf16的码元 或者 NaN ，默认参数为 0， 
codePointAt()
concat(strN) 不修改原数组 返回一个字符串 性能低 建议使用 + +=
endsWith(searchString, length「默认是字符串长度」) 大小写敏感的 返回 boolean
String.fromCharCode(numN「0 到 65535（0xFFFF）之间」 ) 静态方法 返回由指定的 UTF-16 代码单元序列创建的字符串。 可用于一些特殊的字符串
String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串。可用于一些特殊的字符串

includes(str,position?) 返回boolean
indexOf(searchValue「不传会强制转为undefined」,position『默认0』)

localeCompare()

match(regexp)

matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

normalize(form「unicode规范形式 NFC NFD NFKC NFKD」)
会按照指定的一种 Unicode正规格式将当前字符字符规范化。（如果该值不是字符字符，则首先将其转换为）一个字符字符。
"NFC" 规范分解，然后是规范组合。
"NFD"：规范分解。
"NFKC"：兼容性分解，然后是规范组合。
"NFKC"：兼容性分解。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize

padEnd(targetLength,padString?) 填充字符串，到指定长度，如果targetLength小于字符串长度，就不填充；如果padstring不传就默认填空字符串
padStart(targetLength,padString?) 与上述方法类似

String.raw() 静态方法

repeat(count) 将调用它的字符串，重复count次 count不能为负数

replace()  详情请看mdn
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace