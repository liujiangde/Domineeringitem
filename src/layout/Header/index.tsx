import React from 'react'
import './index.module.scss'
import classnames from 'classnames'
import { Layout, Menu, theme } from 'antd'
import { HeaderComProps } from '@/interface/layout.interface'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Header } = Layout

const HeaderCom: React.FC<HeaderComProps> = (props: HeaderComProps) => {
  const { changeCollapsed, collapsed } = props
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Header
      className={classnames('layout-r-header')}
      style={{ padding: 0, background: colorBgContainer }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: changeCollapsed,
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
  )
}
export default HeaderCom
