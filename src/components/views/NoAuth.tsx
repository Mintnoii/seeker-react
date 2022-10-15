import { Button, Result } from 'antd'
// import { useNavigate } from 'react-router-dom'

export const NoAuth = () => {
	// const navigate = useNavigate()
	// const backHome = () => navigate('/')
  return (
    <div className="no-auth">
      <Result
        status="403"
        title="403"
        subTitle="抱歉，您没有被授权访问该页面。"
        // extra={<Button onClick={backHome} type="primary">返回首页</Button>}
      />
    </div>
  )
}
