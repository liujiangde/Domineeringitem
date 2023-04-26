import React from 'react'
import { IntlProvider } from 'react-intl'
import RenderRouter from '@/routes/index'
import './App.scss'

const App: React.FC = () => (
  <div className="app-container">
    <IntlProvider locale={'en-us'}>
      <RenderRouter />
    </IntlProvider>
  </div>
)

export default App
