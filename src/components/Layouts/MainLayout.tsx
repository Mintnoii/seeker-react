import { DesktopOutlined, FileOutlined, TeamOutlined, DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, Dropdown, Space } from 'antd'
import React, { useState } from 'react'
import { Link, NavLink, matchRoutes, Outlet, useLocation, useNavigate } from 'react-router-dom'
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
  getItem('Team', '2', <TeamOutlined />, [getItem('Team 1', '2-1'), getItem('Team 2', '2-2')]),
  getItem('Files', '9', <FileOutlined />)
]

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const userInfo: any = useRecoilValue(userAtom)
  const {logout} = useUser()
  const navigate = useNavigate()
  const test = async () => {
    await logout()
    navigate('/auth/login')
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="flex justify-between text-white">
      <div className="text-blue-400 font-extrabold">Seeker React</div>
      <Dropdown overlay={<Menu
      items={[
        {
          key: 'profile',
          label: '个人中心',
          disabled: true
        },
        {
          key: 'logout',
          label: (<div onClick={test}>退出系统</div>),
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
        <Content className="p-12px flex justify-center items-center">
          {/* 渲染子路由 匹配到子路由会用子路由组件替换此处的内容 */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
