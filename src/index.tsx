// import React from 'react'; // =>   "jsx": "react-jsx", // 这里改成react-jsx，就不需要在tsx文件中手动引入React了
// import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import './index.css'

try {
  const rootElement = document.getElementById('root')
  const root = createRoot(rootElement)
  root.render(
    <HashRouter>
      <App />
    </HashRouter>,
  )
} catch (e) {
  console.log('error', e)
}
