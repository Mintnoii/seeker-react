// 异常拦截处理器
import { AxiosError } from 'axios'
import {useSingletonMsg} from '@/hooks/index'

declare interface codeMessageMapTypes {
  400: string
  401: string
  403: string
  404: string
  405: string
  408: string
  500: string
  501: string
  502: string
  503: string
  504: string
  505: string
  [key: string]: string
}

const codeMessageMap: codeMessageMapTypes = {
  400: '[400]:请求参数错误',
  401: '[401]:账户未授权，请先登录',
  403: '[403]:拒绝访问',
  404: '[404]:请求地址错误', // `请求地址出错: ${error.response?.config.url}`;
  405: '[405]:请求方法错误',
  408: '[408]:请求超时',
  500: '[500]:服务器内部错误',
  501: '[501]:服务未实现',
  502: '[502]:网关错误',
  503: '[503]:服务不可用',
  504: '[504]:网关超时',
  505: '[505]:HTTP版本不受支持',
  other: '网络连接异常,请稍后再试!'
}


const ErrorHandler = (error: AxiosError) => {
	const status = error?.response?.status || 'other'
	const { errMessage } = useSingletonMsg()
	const showCodeMessage = (statusKey: string | number) => errMessage(statusKey, codeMessageMap[statusKey])

  // const { logout } = useUserInfo()
  showCodeMessage(status)
  // * 自定义一些处理逻辑
  // ? status 401 可以清除token信息并跳转到登录页面 伪代码
  // ? status 404 可以打印具体的路径
  if (status === 401) {
    console.log('退出登录')
    // logout()
  }
  // 返回接口返回的错误信息
  return Promise.reject(error?.response?.data)
}
export default ErrorHandler
