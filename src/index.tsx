import React from 'react'
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
