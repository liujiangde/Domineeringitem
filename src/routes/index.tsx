import { FC } from 'react'
import type { RouteObject } from 'react-router-dom'
import Layout from '@/layout/index'

import { Navigate } from 'react-router'
import { useRoutes } from 'react-router-dom'
import Home from '@/pages/Home/index'
import Login from '@/pages/Login/index'
// import menu from '@/mock/menu.json'
// import Dashboard from '@/pages/dashboard';
// import LoginPage from '@/pages/login';
// const Home = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/Home/index'))

// 导入你的路由组件

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
        ErrorBoundary: () => <div>报错了，哈哈哈,咋办</div>,
      },
      {
        path: '*',
        element: <div>还没有开发这个页面哦</div>,
      },
    ],
  },
]

const RenderRouter: FC = () => {
  const element = useRoutes(routes)
  return element
}

export default RenderRouter
