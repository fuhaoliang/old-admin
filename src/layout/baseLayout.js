/*
 * @Author: your name
 * @Date: 2020-05-13 15:54:04
 * @LastEditTime: 2020-05-13 16:19:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-dva/dva-quickstart/src/layout/baseLayout.js
 */
import './baseLayout.css';
import React, { useState } from "react";
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import AppMenu from '../components/Menu'


const { Header, Sider, Content } = Layout;

const SiderDemo = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  
  const toggle = () => {
    setCollapsed(!collapsed)
  };
  return (
    <Layout>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          left: 0,
        }}
      >
        <div className="logo" />
        <AppMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => toggle(),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '100%',
            minHeight: 280,
          }}
        >
          <h2>我是content</h2>
          { children }
        </Content>
      </Layout>
    </Layout>
  );
}

export default SiderDemo
