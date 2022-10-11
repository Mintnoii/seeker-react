import { useSetRecoilState } from 'recoil'
import { useRequest } from 'ahooks'
// import { useNavigate } from 'react-router-dom'
import { userLogin } from '@/features/auth/api/login'
import { userAtom } from '@/stores'

type IUser = {
  username: string
  password: string
}
// 用户相关的状态
const useUser = () => {
  const setUser = useSetRecoilState(userAtom)
  // const navigate = useNavigate();
  const { runAsync } = useRequest(userLogin, {
    manual: true,
    onSuccess: (data: any) => {
      localStorage.setItem('user-token', JSON.stringify(data))
      setUser(data)
    },
    onError: (err:any) => {
      console.log(err,'err');
    }
  })

  const login = (user: IUser) => runAsync(user)
  const logout = async () => {
    localStorage.removeItem('user-token')
    setUser(null)
    // navigate('/auth/login')
  }

  return { login, logout }
}
export default useUser
