import React, { Component } from 'react';
import { Row, Col, Layout, Button, Icon } from 'antd';
import TaskList from './TaskList.js';
import { observer } from 'mobx-react';
const { Header, Footer, Sider, Content } = Layout;

@observer
class Template extends Component {
    addTask() {
        this.props.template.addTask();
    }
    editName(e) {
        console.log('edit name');
        console.log(e.target.value);
        this.props.template.name = e.target.value;
    }
    render() {
        const template = this.props.template;
        console.log('template', template);
        return (

            <Layout>
          <Header
            style={{
              background: '#fff',
              height: 100,
              display: 'flex',
              alignItems: 'center',
              padding: '0px 34px',
            }}
          >
            <input value={this.props.template.name} style={{
              fontSize: 40,
              border: 'none',
            }}
            onChange={this.editName.bind(this)}
            />
            <div style={{flexGrow: 1}}></div>
            <div>
            <Button type="default" size="large" style={{marginRight: 10}}>
                <Icon type="save" />Save
              </Button>
              <Button type="primary" size="large" onClick={this.addTask.bind(this)}>
                <Icon type="plus" />Add task
              </Button>
            </div>
          </Header>
          <Content>
            <TaskList template={template} />
          </Content>
          <Footer></Footer>
        </Layout>
            
        );
    }
}

export default Template;