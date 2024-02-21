import { Layout, Menu } from 'antd';
import { ReactNode, createElement } from 'react';
import { UserOutlined, PlusSquareOutlined, ProductOutlined } from '@ant-design/icons';
import { NavLink, Outlet } from 'react-router-dom';

type Titem = {
    key: string,
    icon?: ReactNode,
    label: ReactNode
}

const { Header, Content, Footer, Sider } = Layout;

const item: Titem[] = [
    {
        key: "krishiz",

        label: "Krishiz"
    },
    {
        key: "User Management",
        icon: createElement(UserOutlined),
        label: <NavLink to="/admin/user-management">User Management</NavLink>
    },
    {
        key: "Add Product",
        icon: createElement(PlusSquareOutlined),
        label: <NavLink to="/admin/add-product">Add Product</NavLink>
    },
    {
        key: "Product Management",
        icon: createElement(ProductOutlined),
        label: <NavLink to="/admin/product-management">Product Management</NavLink>
    },
]



const AdminLayout = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                style={{ height: "100vh", paddingTop: "12px" }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={item} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Krishiz ©{new Date().getFullYear()} Created by Mithon
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;