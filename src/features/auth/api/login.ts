import Axios from '@/service'

export type UserResponse = {
  user_id?: number
  key?: string
  expire_time?: string
  expire_in?: number
}

export type LoginCredentialsDTO = {
  username: string
  password: string
  rsa_key_id?: number
}

export const userLogin = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return Axios.post('/user/account/admin_login', data)
}
