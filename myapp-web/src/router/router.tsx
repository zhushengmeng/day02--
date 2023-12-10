import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../layout'

const Home = lazy(() => import('../views/home'))
const Listcz = lazy(() => import('../views/listcz'))
const Shangchuan = lazy(() => import('../views/shangchuan'))
const Set = lazy(() => import('../views/set'))

export const routers = [
    {
        path:'/',
        element:<Home></Home>,
        meta:{
            title:'首页'
        }
    },
    {
        path:'/listcz',
        element:<Listcz></Listcz>,
        meta:{
            title:'列表操作'
        }
    },
    {
        path:'/shangchuan',
        element:<Shangchuan></Shangchuan>,
        meta:{
            title:'上传文件'
        }
    },
    {
        path:'/set',
        element:<Set></Set>,
        meta:{
            title:'管理人员'
        }
    }
]

const routes = [
    {
        path:'/',
        element:<Layout></Layout>,
        children:routers
    }
]

const RouterView = () => useRoutes(routes)
const Router = () => {
    return (
        <Suspense fallback='...路由加载中'>
            <RouterView></RouterView>
        </Suspense>
    )
}

export default Router