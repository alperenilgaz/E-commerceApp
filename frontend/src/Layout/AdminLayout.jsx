import React from 'react'
import { Layout, Menu } from 'antd';


import {
  UserOutlined,
  AreaChartOutlined,
  LaptopOutlined,
  HomeOutlined,
  GlobalOutlined,
  RollbackOutlined,
  BarcodeOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  FileImageOutlined 
} from "@ant-design/icons";

import { useNavigate } from 'react-router-dom';

const { Sider, Header, Content } = Layout
const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return user ? user.role : null
}

const AdminLayout = ({ children }) => {
  const navigate = useNavigate()
  const userRole = getUserRole()
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Kategoriler",
      path: "/",
      children: [
        {
          key: "3",
          label: "Kategori Listesi",
          path: "/admin/categories",
          onClick: () => {
            navigate(`/admin/categories`);
          },
        },
        {
          key: "4",
          label: "Yeni Kategori Oluştur",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Ürünler",
      path: "/",
      children: [
        {
          key: "6",
          label: "Ürün Listesi",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/products`);
          },
        },
        {
          key: "7",
          label: "Yeni Ürün Oluştur",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
      ],
    },
    {
      key: "8",
      icon: <BarcodeOutlined />,
      label: "Kuponlar",
      path: "/admin/coupons",
      children: [
        {
          key: "9",
          label: "Kupon Listesi",
          path: "/admin/coupons",
          onClick: () => {
            navigate(`/admin/coupons`);
          },
        },
        {
          key: "10",
          label: "Yeni Kupon Oluştur",
          path: "/admin/coupons/create",
          onClick: () => {
            navigate("/admin/coupons/create");
          },
        },
      ],
    },
    {
      key: "11",
      icon: <UserOutlined />,
      label: "Kullanıcı Listesi",
      path: "/admin/users",
      onClick: () => {
        navigate(`/admin/users`);
      },
    },
    {
      key: "12",
      icon: <ShoppingCartOutlined />,
      label: "Siparişler",
      onClick: () => {
        navigate(`/admin/orders`);
      },
    },
    {
      key: "13",
      icon: <AreaChartOutlined />,
      label: "Marklar",
      path: "/",
      children: [
        {
          key: "14",
          label: "Marka Listesi",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/brands`);
          },
        },
        {
          key: "15",
          label: "Yeni Marka Oluştur",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/brands/create");
          },
        },
      ],
    },

    {
      key: "16",
      icon: <BarcodeOutlined />,
      label: "Hakkımızda Resimler",
      path: "/admin/about",
      children: [
        {
          key: "17",
          label: "Resim Listesi",
          path: "/admin/about",
          onClick: () => {
            navigate(`/admin/about`);
          },
        },
        {
          key: "18",
          label: "Yeni bir resim Oluştur",
          path: "/admin/about/create",
          onClick: () => {
            navigate("/admin/about/create");
          },
        },
      ],
    },
    {
      key: "19",
      icon: <AppstoreOutlined />,
      label: "Anasayfa Resim",
      path: "/",
      onClick: () => {
        navigate("admin/slider")
      }
    },
    {
      key: "20",
      icon: < GlobalOutlined/>,
      label: "Logo",
      onClick: () => {
        navigate(`/admin/logo`);
      },
    },
    {
      key: "21",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => {
        window.location.href = "/"
      },
    },
  ];

    const getPageTitle = () => {
      for(const item of menuItems){
        if(item.children){
          for(const child of item.children){
            if(child.path===window.location.pathname){
              return child.label
            }
          }
        }else{
          if(item.path===window.location.pathname){
            return item.label
          }
        }
      }
    }
  if (userRole === "admin") {
    return (
      <div style={{backgroundColor:"#000"}}  className="admin-layout">
        <Layout style={{
          minHeight: "100vh"
        }}>
          <Sider theme='dark' width={200}>
            <Menu
              mode="vertical"
              style={{
                height: "100%"
              }}
              items={menuItems}
            />
          </Sider>
          <Layout>
            <Header>
              <div>
               
                <div style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <h2>{getPageTitle()}</h2>
                  <h2>ADMİN PANEL</h2>
                </div>
                
              </div>
            </Header>
            <Content>
              <div
                className="site-layout-background"
                style={{
                  padding: 50,
                  minHeight: 360,

                }}
              >
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  } else {
    return window.location.href = "/"
  }

}

export default AdminLayout