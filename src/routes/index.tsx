import { lazyImport } from '@/utils/lazyImport'
import { lazy, ReactNode, Suspense } from 'react'
import { RouteObject } from 'react-router'
import { publicRoutes } from './public'
// const { Home } = lazyImport(() => import("./Home"), "Home");
// import { MainLayout } from '@/components/Layouts'
// const HomePage = lazy(() => import('@/pages/Home'))

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense>{children}</Suspense>
}

// console.log(publicRoutes, 'publicRoutes')
const routes: RouteObject[] = [
  {
    path: '/',
    // element: <MainLayout />,
    //路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        index: true,
        // path: '/home',
        // element: lazyLoad(<HomePage />)
      }
      // {
      //   path: '/init',
      //   element: lazyLoad(<InitPage />)
      // },
      // {
      //   path: '/create',
      //   element: lazyLoad(<CreatePage />)
      // }
    ]
  },
  // TODO 待优化
  ...publicRoutes
]
console.log(routes, 'routes')
export default routes
