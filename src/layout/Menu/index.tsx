import React from 'react'
import './index.module.scss'
import { Menu } from 'antd'
import { recursion } from '@/utils/utils'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
// import { MenuDataItem } from '@interface/utils.interface'
import { menuData } from '@/mock/menu'
interface IMenuProps {
  // menuData?: MenuItem
}

const MenuCom: React.FC<IMenuProps> = () => {
  const navigate = useNavigate()
  const menuList = recursion(menuData)

  const onMenuClick: MenuProps['onClick'] = menuParams => {
    // onChangeSelectedKey(menuParams.path)
    navigate(menuParams.key)
  }

  return (
    <Menu
      onClick={onMenuClick}
      className="menu-content"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={menuList}
    />
  )
}
export default MenuCom
