import { lazy,ReactNode,Suspense, ComponentType } from 'react'

// named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598

// export function lazyImport<
//   T extends ComponentType<any>,
//   I extends { [K2 in K]: T },
//   K extends keyof I
// >(factory: () => Promise<I>, name: K): I {
//   return Object.create({
//     [name]: lazy(() => factory().then((module) => ({ default: module[name] })))
//   })
// }

// const lazyLoadComponent = (children: ReactNode): ReactNode => {
// 	return <Suspense>{children}</Suspense>
// }
export function lazyLoad<
  T extends ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): ReactNode {
  const ModuleMap =  Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] })))
  })
  // 从映射中取出模板模块组件
  const TheComponent = ModuleMap[name]
  return <Suspense><TheComponent /></Suspense>
}

// Usage
// const { Home } = lazyImport(() => import("./Home"), "Home");
// const HomePage = lazyLoad(() => import("@/pages/Home"), "HomePage");