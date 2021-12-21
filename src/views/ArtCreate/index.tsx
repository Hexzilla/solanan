import React, { useEffect, useState, useCallback } from 'react';
import { Button, Layout, Row, Col, Input, Select } from 'antd';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Menu } from '../../components/Menu'
import { ImageUploader } from '../../components/Uploader'

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const LabelQuestion = ({ label, required }: { label: string, required: boolean}) => {
  return (
    <h3 className={required ? "required" : "" }>
      { label }
      <span style={{ marginLeft: '6px' }}>
        <QuestionCircleTwoTone twoToneColor="#52c41a"/>
      </span>
    </h3>
  )
}

export const ArtCreateView = () => {
  return (
    <Layout className="container">
      <Header>
        <Menu />
      </Header>
      <Content className="content mint">
        <h1>Create NFT</h1>
        <Row>
          <Col span="16">
            <div className="item-group">
              <LabelQuestion label="Upload static preview" required={true} />
              <ImageUploader name="static-preview"/>
            </div>
            <div className="item-group">
              <LabelQuestion label="Upload animated preview" required={false} />
              <ImageUploader name="animated-preview"/>
            </div>
            <div className="item-group">
              <LabelQuestion label="Upload artwork file" required={true} />
              <ImageUploader name="artwork-file"/>
            </div>
            <div className="item-group">
              <LabelQuestion label="Title" required={true} />
              <Input placeholder="e.g. 'Flower'" />
            </div>
            <div className="item-group">
              <LabelQuestion label="Short description" required={true} />
              <TextArea rows={5} placeholder="e.g. 'It was a beautiful flower'" />
            </div>
            <div className="item-group">
              <LabelQuestion label="Description" required={true} />
              <TextArea rows={8} placeholder="e.g. 'It was a beautiful flower'" />
            </div>
            <div className="item-group">
              <LabelQuestion label="Royalties from secondary sales" required={true} />
              <Input placeholder="Royalties on secondary sales (%), number from 0 till 50" />
            </div>
            <div className="item-group">
              <LabelQuestion label="External URL" required={true} />
              <Input placeholder="Link to artwork page, if you have one" />
            </div>
            <div className="item-group">
              <LabelQuestion label="Tags" required={true} />
              <Select defaultValue="Option1-1">
                <Option value="Option1-1">Option1-1</Option>
                <Option value="Option1-2">Option1-2</Option>
              </Select>
            </div>
            <div className="item-group">
              <LabelQuestion label="License" required={true} />
              <Select defaultValue="0">
                <Option value="0" disabled={true}>Select License</Option>
                <Option value="1">Private use/Non-Commercial exploitation</Option>
                <Option value="2">Personal public display/Non-Commercial exploitation</Option>
                <Option value="3">Public display/Non-Commercial exploitation</Option>
                <Option value="4">Reproduction/Commercial exploitation</Option>
              </Select>
            </div>
            <div className="item-group">
              <LabelQuestion label="Collection" required={true} />
              <Select defaultValue="Option1-1">
                <Option value="Option1-1">Option1-1</Option>
                <Option value="Option1-2">Option1-2</Option>
              </Select>
            </div>
            <div className="item-group">
              <LabelQuestion label="Traits" required={true} />
              <Select defaultValue="Option1-1">
                <Option value="Option1-1">Option1-1</Option>
                <Option value="Option1-2">Option1-2</Option>
              </Select>
            </div>
            <div className="item-group">
              <LabelQuestion label="NSFW" required={true} />
            </div>
            <div className="item-group">
              <Button>Mint NFT</Button>
            </div>
          </Col>
          <Col span="8">
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}