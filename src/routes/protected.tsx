import { lazyLoad } from '@/utils/lazyLoad'
import { MainLayout } from '@/components/Layouts'

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
      }
    ],
    loader: () => {
      console.log('router guard?');
    }
  },
	{
		path: '*',
    name: '404',
		element: <MainLayout />,
	}
]
