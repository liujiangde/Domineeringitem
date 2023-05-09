import * as React from 'react'
import classnames from 'classnames'
import { roleMap } from '@/pages/Home/constand'
import { Button } from 'antd'
import HeadImage from '../headImage'
import './index.module.scss'
import { IStepProps, EventStatus, IStepParams } from '../interfaceList'
const imageLink =
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'

/**
 * 一个事件处理流程，依照倒序的时间排序，
 *
 */
const StepsDemo: React.FC<IStepProps> = (props: IStepProps) => {
  const [stepEventList] = React.useState<Array<IStepParams>>(props.stepEventList)
  return (
    <React.Fragment>
      {stepEventList.length > 0 &&
        stepEventList.map(item => (
          <div key={item.time} className="step-list">
            <div
              className={classnames(
                {
                  'step-info-isProgress': item.isProgress,
                },
                'step-info-content',
                'step-info',
              )}
            >
              <div>
                {[1, 5, 6].some(ele => ele === item.status) &&
                  `${roleMap[item.roleType]} ${item.roleName} `}
                {EventStatus[item.status]}
              </div>
            </div>
            <span className="step-occur-time">{item.time}</span>
            <div
              className={classnames({
                'step-info-content': true,
              })}
            >
              {item.status === 6 && <Button type="link">查看评价</Button>}
              {item.status === 5 && (
                <div className="event-detail">
                  <div>航汇大厦</div>
                  <div>
                    {[1, 2].map(info => (
                      <HeadImage key={info} imageLink={imageLink} />
                    ))}
                  </div>
                  <div>这是一条完成情况的说明</div>
                </div>
              )}
              {item.roleType === 1 && item.status === 1 && (
                <div className="event-detail">这是一条备注信息</div>
              )}
              {item.roleType === 2 && item.status === 4 && (
                <div>
                  {`${roleMap[item.roleType]} ${item.roleName} ${'转交给'} ${
                    roleMap[item.targetRole]
                  } ${item.targetRoleName} `}
                </div>
              )}
              {item.roleType === 1 && item.status === 3 && (
                <div>
                  {`${roleMap[item.roleType]} ${item.roleName} ${EventStatus[item.status]} `}
                </div>
              )}
              {item.roleType === 2 && item.status === 2 && (
                <div>
                  {`${roleMap[item.roleType]} ${item.roleName} ${EventStatus[item.status]} ${
                    roleMap[item.targetRole]
                  } ${item.targetRoleName} `}
                </div>
              )}
              {item.roleType === 3 && item.status === 1 && (
                <div className="event-detail">这是一条用户订单需求描述的备注</div>
              )}
              {item.status === 0 && <div>你的工单已创建，请您耐心等待</div>}
            </div>
          </div>
        ))}
    </React.Fragment>
  )
}
export default StepsDemo
