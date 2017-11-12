import React, { Component } from 'react';
import MainMenu from './MainMenu.js';
import Template from './Template.js';
import './App.css';
import { Layout, Button, Icon } from 'antd';
import appStore from './store';
import { observer } from 'mobx-react';
const { Header, Footer, Sider, Content } = Layout;

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [{
        name: 'Test template',
        tasks: [{name: 'test', daysBefore: 3, description: 'test description'}],
      }],
      activeTemplate: 0,
    };
  }
  handleClickAddTask() {
    const templates = this.state.templates;
    templates[0].tasks.push({});
    this.setState({
      templates,
    });
  }
  handleClickSaveTemplate() {
    alert('Saved!');
  }

  render() {
    console.log('the appStore:', appStore);
    return (
      <Layout
        style={{height: "100vh"}}>
        <Sider
          style={{width: 320, display: 'flex', flexDirection: 'column'}}>
          
            <div style={{
              height: 100,
              fontSize: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aaa'
            }}><img src="/blueprint-logo.png" style={{
              width: 150,
            }}/></div>
            

            <MainMenu store={appStore} />

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
                src="https://d3iw72m71ie81c.cloudfront.net/female-4.jpg"
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
              }}>Bernice Ferguson</h3>
              <a href="#">Logout</a>
          </div>
        </Sider>
        <Template template={appStore.activeTemplate} store={appStore} style={{height: '100%'}} />
      </Layout>
    );
  }
}

export default App;
