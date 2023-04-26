import React from 'react'
import './index.module.scss'
import { Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

const MenuCom: React.FC = () => (
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
)
export default MenuCom
