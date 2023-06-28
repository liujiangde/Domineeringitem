import { MenuDataItem } from '@interface/utils.interface'
import { ItemType } from 'antd/es/menu/hooks/useItems'

export const recursion = (data: MenuDataItem[]): ItemType[] => {
  const ls = []
  data.forEach(element => {
    if (element.children.length !== 0) {
      ls.push({
        key: element.path,
        label: element.name,
        children: recursion(element.children),
      })
    } else {
      ls.push({
        key: element.path,
        label: element.name,
      })
    }
  })
  return ls as unknown as ItemType[]
}
