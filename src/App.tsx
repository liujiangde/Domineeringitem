import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import classnames from 'classnames'
import { Layout, Menu, theme } from 'antd'
import './App.scss'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Sider
        className={classnames('layout-sider')}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '4',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '5',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '6',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '7',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '8',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className={classnames('layout-sider')}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
