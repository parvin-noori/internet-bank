import React, { useState } from "react";
import symbolDefs from "@/assets/images/symbol-defs.svg";
// import TopNav from "./TopNav";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
import { Button, Layout, Menu, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

export default function MainLayout() {
  // const [showMenu, setShowMenu] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <a href="#">
          <a href="#" className="p-4 block">
            <svg width="31" height="25" className="text-white">
              <use href={`${symbolDefs}#logo`}></use>
            </svg>
          </a>
        </a>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <svg width="16" height="20" className="text-white">
                  <use href={`${symbolDefs}#home`}></use>
                </svg>
              ),
              label: "خانه",
            },
            {
              key: "2",
              icon: (
                <svg width="20" height="20" className="text-white">
                  <use href={`${symbolDefs}#report`}></use>
                </svg>
              ),
              label: "گزارش",
            },
            {
              key: "3",
              icon: (
                <svg width="24" height="24" className="text-white">
                  <use href={`${symbolDefs}#transfer`}></use>
                </svg>
              ),
              label: "انتقال وجه",
            },
            {
              key: "4",
              icon: (
                <svg width="18" height="20" className="text-white">
                  <use href={`${symbolDefs}#setting`}></use>
                </svg>
              ),
              label: "",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
    // <>
    //   <TopNav setShowMenu={setShowMenu} showMenu={showMenu} />
    //   <div className="grid grid-cols-12">
    //     <div className="col-span-4">
    //       <Sidebar showMenu={showMenu} />
    //       <Outlet />
    //     </div>
    //   </div>
    // </>
  );
}
