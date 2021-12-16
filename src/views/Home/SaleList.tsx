import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Layout, Row, Tabs } from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;
const { Content } = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
}

export const SalesListView = () => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const { connected } = useWallet();

  return (
    <>
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%', marginTop: 32 }}>
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
              >
                <TabPane
                  tab={
                    <>
                      <span className="live"></span> Live
                    </>
                  }
                  key={LiveAuctionViewState.All}
                ></TabPane>
                  <TabPane
                    tab="Secondary Marketplace"
                    key={LiveAuctionViewState.Resale}
                  ></TabPane>
                <TabPane tab="Ended" key={LiveAuctionViewState.Ended}></TabPane>
                {connected && (
                  <TabPane
                    tab="Participated"
                    key={LiveAuctionViewState.Participated}
                  ></TabPane>
                )}
              </Tabs>
            </Row>
            <Row>
              <div className="artwork-grid">
                  <Link
                    to={`/auction/111`}
                  >
                  </Link>
              </div>
            </Row>
          </Col>
        </Content>
      </Layout>
    </>
  );
};
