import { useState } from 'react'
import { message } from 'antd'
import { NoticeType } from 'antd/lib/message'

interface IErrorMsg {
  // 唯一 key 一般使用状态码与消息内容组成
  [key: string]: string
}

const useSingletonMsg = () => {
  const [msgMap, setMsgMap] = useState<IErrorMsg>({})

  const globalMsgFn = (key: NoticeType) => (code: string | number, msg: string) => {
    if (msgMap[code]) {
      // 如果此时有相同 code 的消息弹窗 则不显示新的
      return
    } else {
      // 否则 显示新的消息弹窗 并清空 msgMap
      msgMap[code] = msg
      message.open({ type: key, content: msg }).then(() => setMsgMap({}))
    }
  }
  return {
    errMessage: globalMsgFn('error'),
    warnMessage: globalMsgFn('warning'),
    successMessage: globalMsgFn('success'),
    infoMessage: globalMsgFn('info')
  }
}

export default useSingletonMsg
