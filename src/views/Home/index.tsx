import { Layout } from 'antd';
import React from 'react';
import { SetupView } from './Setup'

export const HomeView = () => {
  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <SetupView></SetupView>
    </Layout>
  );
};
