import { Layout } from 'antd';
import React from 'react';
import { SalesListView } from './SaleList'
import { Menu } from '../../components/Menu'

const { Header, Footer, Sider, Content } = Layout;

export const HomeView = () => {
  return (
    <Layout className="container">
      <Header>
        <Menu />
      </Header>
      <Content>
        <SalesListView></SalesListView>
      </Content>
    </Layout>
  );
};
