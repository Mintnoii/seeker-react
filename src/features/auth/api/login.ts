import Axios from '@/service'
import {IUserInfo} from '@/types'

export type LoginCredentialsDTO = {
  username: string
  password: string
  rsa_key_id?: number
}

export const userLogin = (data: LoginCredentialsDTO): Promise<IUserInfo> => {
  return Axios.post('/user/account/admin_login', data)
}
