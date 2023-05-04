import React, { Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import { ConfigProvider, Spin } from 'antd'
import RenderRouter from '@/routes/index'
import './App.scss'

const App: React.FC = () => (
  <ConfigProvider componentSize="middle">
    <IntlProvider locale={'zh-CN'}>
      <Suspense fallback={null}>
        <Spin
          spinning={false}
          className="app-loading-wrapper"
          // tip={<LocaleFormatter id="gloabal.tips.loading" />}
        />
        <RenderRouter />
      </Suspense>
      <RenderRouter />
    </IntlProvider>
  </ConfigProvider>
)

export default App
