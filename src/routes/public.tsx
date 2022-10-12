import { lazyLoad } from '@/utils/lazyLoad'
const AuthRoutes = lazyLoad(() => import('@/features/auth'), 'AuthRoutes')

export const publicRoutes = [
  {
    path: '/auth/*',
    element: AuthRoutes
  }
]
