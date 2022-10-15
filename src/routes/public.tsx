import { lazyLoad } from '@/utils/lazyLoad'
import { NotFound } from '@/components/views'

// 引入 Auth 相关的页面路由
const AuthRoutes = lazyLoad(() => import('@/features/auth'), 'AuthRoutes')

export const publicRoutes = [
  {
    path: '/auth/*',
    element: AuthRoutes
  },
	{
		path: '*',
    name: '404',
		element: <NotFound/>
	}
]
