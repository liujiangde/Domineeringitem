export enum MoneyType {
  '$' = 1,
  '￥' = 2,
}

export enum EventStatus {
  '已创建',
  '添加了备注',
  '已转交',
  '已接单',
  '重新打开',
  '已完成',
  '已评价',
}

export interface IPosition {
  longitude: number
  latitude: number
  name: string
}

export interface IStepParams {
  status: number
  roleType: number
  roleName: string
  imageList?: string[]
  targetRole?: number
  targetRoleName?: string
  time: string
  position?: IPosition
  isProgress: boolean // 是否正在执行
  isMe: boolean // 判断是不是本人
}

export interface IUserInputProps {
  callback?: () => void
  inputValue?: string
  imageLink?: string
}

export interface IStepProps {
  stepEventList: Array<IStepParams>
  callback?: () => void
}

export interface IFormProps {
  moneyNum?: number
  website?: string
  moneyType?: MoneyType
}
