import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
	const navigate = useNavigate()
	const backHome = () => navigate('/')
  return (
    <div className="not-found">
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在。"
        extra={<Button onClick={backHome} type="primary">返回首页</Button>}
      />
    </div>
  )
}
