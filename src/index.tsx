// import React from 'react'; // =>   "jsx": "react-jsx", // 这里改成react-jsx，就不需要在tsx文件中手动引入React了
// import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'

import './index.scss'

try {
  const rootElement = document.getElementById('root')
  console.log('运行')
  const root = createRoot(rootElement)
  const App = () => <div className="hello">Hello</div>
  root.render(<App />)
} catch (e) {
  console.log('e', e)
}
