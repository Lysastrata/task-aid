import React, { Component } from 'react';
import MainMenu from './MainMenu.js';
import Template from './Template.js';
import './App.css';
import { Layout, Button, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout
        style={{height: "100vh"}}>
        <Sider
          style={{width: 240, display: 'flex', flexDirection: 'column'}}>
          
            <div style={{
              height: 70,
              fontSize: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aaa'
            }}>Connexxio</div>
            

            <MainMenu />

            <div style={{
              background: '#333',
              paddingTop: 25,
              paddingBottom: 25,
              textAlign: 'center',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}>
              <img
                src="https://d3iw72m71ie81c.cloudfront.net/male-44.jpg"
                style={{
                  borderRadius: 100,
                  width: 72,
                  height: 72,
                  display: 'block',
                  margin: '0 auto',
                }} 
              />
              <h3 style={{
                color: '#aaa',
                marginTop: 10,
              }}>Nick Tesla</h3>
              <a href="#">Logout</a>
          </div>
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              height: 70,
              display: 'flex',
              alignItems: 'center',
              padding: '0px 34px',
            }}
          >
            <input value="Flip House" style={{
              fontSize: 24,
              border: 'none',
            }}/>
            <div style={{flexGrow: 1}}></div>
            <div>
              <Button type="primary" size="large">
                <Icon type="plus" />Add task
              </Button>
            </div>
          </Header>
          <Content>
            <Template />
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
