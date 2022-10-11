import { Route, Routes } from 'react-router-dom'

import Login from './Login'
// TODO 根据需要自己实现注册页面
// import Register from './Register'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
    </Routes>
  )
}
