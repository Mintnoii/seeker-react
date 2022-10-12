import { RouteObject } from 'react-router'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
const routes: RouteObject[] = [
  ...protectedRoutes,
  ...publicRoutes
]
// console.log(routes, 'routes')
export default routes
