import React, { useState } from 'react'
import './index.module.scss'
import { Outlet } from 'react-router-dom'
// import { useRoutes } from 'react-router-dom'
// import { IntlProvider } from 'react-intl'
// import routesConfig from '@/routes/index'
import classnames from 'classnames'
import HeaderCom from './Header/index'
import { Breadcrumb, Layout, theme } from 'antd'
const { Sider, Content } = Layout
import MenuCom from './Menu/index'

const LayoutCom: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <MenuCom />
      </Sider>
      <Layout className={classnames('layout-right')}>
        <HeaderCom changeCollapsed={changeCollapsed} collapsed={collapsed} />
        <Breadcrumb
          items={[{ key: 'home', path: 'home', title: '/home' }]}
          style={{ margin: '8px 12px' }}
        />
        <Content
          className={classnames('layout-Content')}
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutCom
