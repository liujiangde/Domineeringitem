import React from 'react'
import './index.module.scss'
import StepsDemo from './stepsDemo'
import UserInput from './userInput'
import FormDemo from './formDemo'
import { MoneyType } from './interfaceList'
import classNames from 'classnames'
const stepEventListmock = [
  {
    status: 6,
    roleType: 3,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小白',
    time: '2023-01-15 23:19',
    isProgress: true,
    isMe: false,
  },

  {
    status: 5,
    roleType: 2,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小白',
    time: '2023-01-15 23:18',
    isProgress: false,
    isMe: false,
  },
  {
    status: 4,
    roleType: 2,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小白',
    time: '2023-01-15 23:17',
    isProgress: false,
    isMe: false,
  },
  {
    status: 1,
    roleType: 1,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小白',
    time: '2023-01-15 23:16',
    isProgress: false,
    isMe: false,
  },
  {
    status: 3,
    roleType: 1,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小白',
    time: '2023-01-15 23:15',
    isProgress: false,
    isMe: false,
  },
  {
    status: 2,
    roleType: 2,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小白',
    time: '2023-01-15 23:14',
    isProgress: false,
    isMe: false,
  },
  {
    status: 1,
    roleType: 3,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小张',
    time: '2023-01-15 23:13',
    isProgress: false,
    isMe: false,
  },
  {
    status: 0,
    roleType: 2,
    roleName: '小白',
    targetRole: 1,
    targetRoleName: '小白',
    time: '2023-01-15 23:12',
    isProgress: false,
    isMe: false,
  },
]

const Home: React.FC = () => (
  <div className={classNames('home-content1', 'home-content')}>
    <UserInput inputValue={'12'} />
    <br />
    <br />
    <FormDemo moneyNum={100} website={'www.baidu.com'} moneyType={MoneyType.$} />
    <br />
    <br />
    <StepsDemo stepEventList={stepEventListmock} />
  </div>
)

export default Home
