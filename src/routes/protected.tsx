import { lazyLoad } from '@/utils/lazyLoad'
import { MainLayout } from '@/components/layouts'

const HomePage = lazyLoad(() => import("@/pages/Home"), "HomePage")

export const protectedRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    // 路由嵌套，子路由的元素需使用 <Outlet />
    children: [
      {
        index: true,
        // path: '/home',
        element: HomePage
      },
			// {
			// 	path: '*',
  // 	name: '403',
			// 	element: <MainLayout />,
			// }
    ],
    loader: () => {
      console.log('router guard?');
    }
  }
]
