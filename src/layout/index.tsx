import React, { useState } from 'react'
import './index.module.scss'
import { Outlet } from 'react-router-dom'
// import { useRoutes } from 'react-router-dom'
// import { IntlProvider } from 'react-intl'
import classnames from 'classnames'
import HeaderCom from './Header/index'
import { Breadcrumb, Layout, theme } from 'antd'
const { Sider, Content } = Layout
import MenuCom from './Menu/index'

/**
 * @description 页面布局组件
 * @author 柳江
 * @date 28/04/2023
 * @returns {*}
 */
const LayoutCom: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  /**
   * @description 切换侧边栏展示收缩状态
   * @author 柳江
   * @date 28/04/2023
   */
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
