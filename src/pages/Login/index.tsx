import { Form, Input } from 'antd'
import './index.scss'

const FormItem = Form.Item

function Login() {
  return (
    <div className="login-total">
      <div className="login-module">
        <Form style={{ margin: '40px 0px' }}>
          <FormItem label="登录名" required>
            <Input
              name="username"
              placeholder="请输入用户名"
              aria-label="input with config of addonTextBefore and addonTextAfter"
            />
          </FormItem>
          <FormItem label="密码" required>
            <Input placeholder="请输入密码" />
          </FormItem>
          <FormItem className="login-button">登录</FormItem>
        </Form>
      </div>
    </div>
  )
}

export default Login
