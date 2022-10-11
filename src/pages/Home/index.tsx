import { useEffect } from 'react'

export const HomePage = () => {
  useEffect(() => {
    console.log('这是后台首页')
  }, [])

  return <div className="homepage">这是后台首页</div>
}
