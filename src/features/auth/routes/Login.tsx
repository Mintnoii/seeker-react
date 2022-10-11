import { useNavigate } from 'react-router-dom'
import BackgroundImg from '@/assets/images/background.webp'
import { Button, Form, Input } from 'antd'
import { useUser } from '@/hooks'

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useUser()
  const onFinish = async (values: any) => {
    // console.log('Success:', values)
    const user = await login(values)
    if(user){
      console.log('登录成功', user);
      navigate('/')
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImg})` }}
      className="flex h-screen min-w-screen min-h-screen w-screen justify-center items-center"
    >
      <div className="h-300px p-10px w-400px">
        {/* <p className="text-center mb-40px text-32px">Xmov-{userInfo?.user_id}</p> */}
				<p className="text-center mb-40px text-32px">Seeker - React</p>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{ username: 'admin', password: 'admin123' }}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: '请输入账号' },
              { max: 20, message: '最多支持20个字' }
            ]}
          >
            <Input className="rounded-6px h-48px" placeholder="输入账号" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              { max: 20, message: '最多支持20个字' }
            ]}
          >
            <Input.Password className="rounded-6px h-48px" placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button
              className="rounded-30px h-52px text-white w-full"
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default LoginPage
