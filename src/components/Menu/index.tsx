import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as AntMenu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = AntMenu;

export const Menu = () => {
  const [selectedItem, setSelectedItem] = useState('')

  return (
    <AntMenu onClick={(e) => setSelectedItem(e.key)} selectedKeys={[selectedItem]} mode="horizontal">
    <AntMenu.Item key="logo" icon={<MailOutlined />}>
      <Link to={`/`}>
        LOGO
      </Link>
    </AntMenu.Item>
      <SubMenu key="explore" icon={<SettingOutlined />} title="Explorer">
        <AntMenu.Item key="nfts">
          NFTs
        </AntMenu.Item>
        <AntMenu.Item key="collections">Collection</AntMenu.Item>
      </SubMenu>
      <SubMenu key="create" icon={<SettingOutlined />} title="Create">
        <AntMenu.Item key="nft">
          <Link to={`/art/create`}>
            NFT
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="collection">Collection</AntMenu.Item>
      </SubMenu>
      <AntMenu.Item key="state" icon={<MailOutlined />}>
        State
      </AntMenu.Item>
    </AntMenu>
  );
};
