https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API

# IndexedDB相关总结
作用：客户端存储大量的结构化数据 也包括文件、二级制大型对象（blobs）
使用索引实现对数据的高性能搜索

##相关概念 
  是一个事务型数据库系统
  是一个基于js的面向对象数据库

##用法
存储和检索 键索引 的对象可以存储 结构化克隆算法（https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm）
支持的任何对象只需要指定数据库模式，打开与数据库的连接，然后检索和更新一系列事务。遵守同源策略, 不能操作其他域名下的数据

##同步-异步
  使用indexedDB执行的操作时是异步执行的，防止阻断应用程序
  如果想需要同步去操作数据库，也可以通过重新引入同步Api

##储存限制和回收标准
  不同浏览器的标准是不同的
  因为同源策略：浏览器需要分离不用网站的数据
  
使用
为了获取数据库的访问权限 需要调用window的indexDB属性  调用open()方法 返回一个IDBRequest (控制台打印的是IDBFactory{}) 对象，异步操作，通过在IDBRequest对象上触发事件来实现通信
```javascript
window.indexedDB.open('liujiang')  // return IDBOpenDBRequest对象
```
IDBFactory


