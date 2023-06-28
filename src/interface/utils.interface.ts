export interface MenuDataItem {
  id: number
  permissions?: string
  path?: string
  component?: string
  name?: string
  iconCls?: string
  keepAlive?: null
  requireAuth: boolean
  parentId: number
  children?: MenuDataItem[]
}
