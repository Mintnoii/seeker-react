import { DesktopOutlined, FileOutlined, TeamOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link, NavLink, matchRoutes, Outlet, useLocation } from 'react-router-dom'

const { Content, Footer, Sider } = Layout

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
  getItem(<NavLink to="/">Home</NavLink>, '1', <DesktopOutlined />),
  getItem('Team', '2', <TeamOutlined />, [getItem('Team 1', '2-1'), getItem('Team 2', '2-2')]),
  getItem('Files', '9', <FileOutlined />)
]

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="text-blue-400 text-center h-32px m-14px">XMOV ADMIN</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Content className="p-12px flex justify-center items-center">
          {/* 渲染子路由 匹配到子路由会用子路由组件替换此处的内容 */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Xmov React App Template</Footer>
      </Layout>
    </Layout>
  )
}
