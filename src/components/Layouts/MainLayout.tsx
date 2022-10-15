import { DesktopOutlined, FileOutlined, TeamOutlined, DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, Dropdown, Space } from 'antd'
import React, { useState } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { userAtom } from '@/stores'
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil'
import { useUser } from '@/hooks'

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(<NavLink to="/">首页</NavLink>, '1', <DesktopOutlined />),
  getItem('分组', '2', <TeamOutlined />, [getItem('业务模块 1', '2-1'), getItem('页面模块 2', '2-2')]),
  getItem('其它', '9', <FileOutlined />)
]

const RenderContent = () => {
	const userInfo: any = useRecoilValue(userAtom)
	if(userInfo){
		// 渲染子路由 匹配到子路由会用子路由组件替换此处的内容
		return <Outlet />
	}
	// 无用户信息 跳转登录页
	return <Navigate to="/auth/login"/>
}

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const userInfo: any = useRecoilValue(userAtom)
  const {logout} = useUser()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="flex text-white justify-between">
      <div className="font-extrabold text-blue-400">Seeker React</div>
      <Dropdown overlay={<Menu
      items={[
        {
          key: 'profile',
          label: '个人中心',
          disabled: true
        },
        {
          key: 'logout',
          label: (<div onClick={logout}>退出系统</div>),
        },
      ]}
    />}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        <div>{userInfo?.username}</div>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
      </Header>
      <Layout>
        <Sider className='bg-white' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Content className="flex p-12px justify-center items-center">
          {RenderContent()}
        </Content>
      </Layout>
    </Layout>
  )
}
