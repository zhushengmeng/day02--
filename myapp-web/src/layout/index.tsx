import React from 'react';
import { Layout, Menu, theme, Image, Button } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { routers } from '../router/router'
import logo from '../images/logo.gif'

const { Header, Content, Sider } = Layout;

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const items2 = routers.map((v, i) => {
        return {
            label: v.meta.title,
            key: v.path
        }
    })
    return (
        <Layout style={{
            height: '100vh'
        }}>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'space-between'
            }}>
                <div className="left" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    color: 'white'
                }}>
                    <Image width={50} height={50} src={logo} />
                    <span>
                        <h1>后端管理系统</h1>
                    </span>
                </div>
                <div className="right">
                    <Button>管理员</Button>
                </div>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        theme='dark'
                        mode="inline"
                        defaultSelectedKeys={[pathname]}
                        onClick={({ key }) => navigate(key)}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;