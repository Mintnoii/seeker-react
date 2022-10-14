# seeker-react
👾 使用 vite + react 最新技术栈实现的应用，从项目架构设计的各个方面尝试一些最佳实践

## 技术栈

- Vite 3
- React 18
- React-Router v6
- Recoil
- TypeScript
- Axios
- Windi CSS

## 使用

1. `git clone git@github.com:Mintnoii/seeker-react.git my-app`
2. `cd my-app`
3. `yarn`
4. `yarn dev`

## 项目设计

### 文件结构

文件组织不仅是 React 应用程序的最佳实践，也是其他应用程序的最佳实践。 虽然不能说一种文件组织方式比另外一种更好，但保持文件的组织性非常重要。

大多数代码都保存在 src 文件夹中，一般包括下面的结构：

- `assets`  资源文件夹可以包含所有静态文件，如图片资源、字体文件等
- `components` 整个应用程序中使用的公共组件
- `config` 所有的全局配置，环境变量等从这里导出，并在应用中使用
- `features` 基于不同功能特性的模块
- `hooks` 在整个应用程序中使用的公用 Hooks
- `lib` 二次导出的第三方库
- `providers` 应用程序的所有 Provider
- `routes` 路由配置
- `stores` 全局状态 stores
- `test` 测试工具和 mock 服务器
- `types` 全局类型定义文件
- `utils` 通用的工具函数

其中，所有与 **「特性相关」** 的内容都会收敛到 `src/features/xxx-feature` 里，某个特性具体可能包括：

- `api` 与特性相关的请求
- `assets` 与特性相关的静态资源
- `components` 与特性相关的组件
- `hooks` 与特性相关的 hooks
- `routes` 与特性相关的页面路由
- `stores` 与特性相关的状态 stores
- `types` 与特性相关的类型申明
- `utils` 与特性相关的工具函数
- `index.ts` 入口

相比于将「特性相关的内容」都以「扁平的形式」存放在全局目录下（比如将特性的 hooks 存放在全局 hooks 目录），以 `features` 目录作为「相关代码的集合」能够有效防止项目体积增大后代码组织混乱的情况。

特性导出的所有内容只能通过统一的入口调用，比如：

`import {AwesomeComponent} from "@/features/awesome-feature"`

而不是：

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`

这可以通过配置 `ESLint` 实现：

```typescript
{
  rules: {
    'no-restricted-imports': [
      'error',
        {
            patterns: ['@/features/*/*'],
        },
    ],
  	// ...rest of the configuration
	}
}
```

### 工程化配置
### 状态管理
### 网络请求层