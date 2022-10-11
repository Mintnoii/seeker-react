/**
 * 网络请求模块
 * 根据项目需求拓展 Axios 的拦截器，而不是过度封装 Axios 增加学习与使用成本
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import errorHandler from '@/service/errorHandler'
import { message } from 'antd'
// import { useUserInfo } from '@/hooks/index'

const baseURL = import.meta.env.SEEKER_REACT_BASE_URL
// console.log(baseURL, 'baseURL')
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 1000 * 5,
  headers: { 'Content-Type': 'application/json' }
})

// TODO 请求拦截器
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  // const { userInfo } = useUserInfo()
  // const { accessToken = '' } = userInfo.value
  const accessToken = ''
  // 根据实际情况自行修改
  if (accessToken !== '' && config.headers && config.url !== '/user/account/remote_login/') {
    config.headers.Authorization = accessToken
  }
  return config
}, errorHandler)

// TODO 响应拦截器 可以和后端约定状态码来进行对应的提示
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  // const { logout } = useUserInfo()
  const dataAxios = response.data;
  const { error_code, error_reason, data } = dataAxios
  // 心跳轮询接口 无论是什么状态码 只要 error_code 不为 0，则直接退出
  // if (response.config.url === '/user/client/account_status/' && dataAxios.error_code !== 0) {
    // logout()
  // }
  console.log('dataAxios', dataAxios)
  if (response.status === 200 && error_code === 0) {
    return data
    // response.data = data
    // return response
  }
  message.warn(`[${error_code}]:${error_reason}`)
  return response
}, errorHandler)

export default axiosInstance
