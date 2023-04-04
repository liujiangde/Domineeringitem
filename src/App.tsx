import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import classnames from 'classnames'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import './App.scss'
const { Item } = Breadcrumb
const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
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
      <Layout className={classnames('layout-right')}>
        <Header
          className={classnames('layout-r-header')}
          style={{ padding: 0, background: colorBgContainer }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          />
        </Header>
        <Breadcrumb style={{ margin: '8px 12px' }}>
          <Item>User</Item>
          <Item>Bill</Item>
        </Breadcrumb>
        <Content
          className={classnames('layout-Content')}
          style={{
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              height: '100%',
            }}
          >
            asdf
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
