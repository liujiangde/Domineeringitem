import * as React from 'react'
import { Button, Input } from 'antd'
import HeadImage from '../headImage'
import { IUserInputProps } from '../interfaceList'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

const UserInput: React.FC<IUserInputProps> = (props: IUserInputProps) => {
  const [inputValue, setInputValue] = React.useState(props.inputValue || '')
  const changeInput = e => {
    setInputValue(e.target.value)
  }
  // 存在跨域问题
  const imageLink =
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
  return (
    <Input
      onChange={changeInput}
      value={inputValue}
      prefix={<HeadImage imageLink={imageLink} />}
      suffix={
        <Button type="primary" disabled={inputValue === ''}>
          post
        </Button>
      }
      placeholder="Add a comment"
    />
  )
}

export default UserInput
