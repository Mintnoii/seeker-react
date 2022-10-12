import { lazyLoad } from '@/utils/lazyLoad'
import { RouteObject } from 'react-router'
import { publicRoutes } from './public'
import { MainLayout } from '@/components/Layouts'

const HomePage = lazyLoad(() => import("@/pages/Home"), "HomePage");
// console.log(publicRoutes, 'publicRoutes')
const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    // 路由嵌套，子路由的元素需使用 <Outlet />
    children: [
      {
        index: true,
        // path: '/home',
        element: HomePage
      }
      // {
      //   path: '/create',
      //   element: lazyLoad(<CreatePage />)
      // }
    ]
  },
  // TODO 待优化
  ...publicRoutes
]
// console.log(routes, 'routes')
export default routes
