import * as React from 'react'
import { Form, Input, Select } from 'antd'
import { IFormProps } from '../interfaceList'

const { Option } = Select

const FormDemo: React.FC<IFormProps> = () => {
  const [form] = Form.useForm()
  const moneyValidate = (_: any, value: string, callback: any) => {
    const reg = /^[1-9]\d*$/
    if (!reg.test(value)) {
      callback('你这输的啥')
    } else {
      callback()
    }
  }

  const webValidate = (_: any, value: string, callback: any) => {
    const reg =
      /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
    if (!reg.test(value)) {
      callback('你这输的啥')
    } else {
      callback()
    }
  }

  const selectAfter = (
    <Select defaultValue="$">
      <Option value="$">$</Option>
      <Option value="￥">￥</Option>
    </Select>
  )

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 12 }}
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Donation"
        name="Donation"
        rules={[
          {
            pattern: new RegExp(/^[1-9]\d*$/),
            required: true,
            message: '你这输的啥啊',
            validator: moneyValidate,
          },
        ]}
      >
        <Input addonAfter={selectAfter} />
      </Form.Item>

      <Form.Item
        label="Website"
        name="Website"
        rules={[
          {
            pattern: new RegExp(
              /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
            ),
            required: true,
            message: '请输入你的网址',
            validator: webValidate,
          },
        ]}
      >
        <Input placeholder="Website" />
      </Form.Item>
    </Form>
  )
}

export default FormDemo
