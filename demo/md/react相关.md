React18 有哪些新变化？
1. 并发渲染机制. 根据用户的设备和网速对渲染过程进行适当调整 中断和根据优先级调度,优先响应用户
2. 新的创建方式 creatRoot => render
3. 自动批处理优化 React 将多个状态更新分组到一个重新渲染中以获得更好的性能。（将多次 setstate 事件合并）
4. useId：主要用于 SSR 服务端渲染的场景，方便在服务端渲染和客户端渲染时，产生唯一的 id；


react 声明周期
组件的挂载 
组件的更新
组件的卸载

挂载和更新阶段 getDerivedStateFromProps 