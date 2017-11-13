import React, { Component } from 'react';
import { Row, Col, Layout, Button, Icon, Spin } from 'antd';
import TaskList from './TaskList.js';
import { observer } from 'mobx-react';
const { Header, Footer, Sider, Content } = Layout;

@observer
class Template extends Component {
    addTask() {
        this.props.template.addTask();
        setTimeout(function() {
            const fields = document.querySelectorAll('[name="name"]');
        const last = fields[fields.length - 1];
        last.focus();
        last.select();
    }, 100);
    }
    saveTemplate() {
        this.props.store.saveTemplate(this.props.template);
    }
    editName(e) {
        console.log('edit name');
        console.log(e.target.value);
        this.props.template.name = e.target.value;
    }
    renderTaskList() {
        const template = this.props.template;
        return <TaskList template={template} />;
    }
    renderEmptyTemplate() {
        const template = this.props.template;
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'absolute',
                top: 100,
                bottom: 0,
                left: 200,
                right: 0,
            }}>
                <div style={{
                    fontSize: 30,
                    opacity: 0.5,
                }}>You don't have any tasks yet&mdash;<br />Click here to get started.</div>
                <Button type="primary" size="large" style={{
                    // fontSize: 25,
                    // padding: '15px 20px',
                    margin: 30,
                    // height: 'auto',
                }} onClick={this.addTask.bind(this)}><Icon type="plus" /> Add task</Button>
            </div>
        );      
    }
    renderBody() {
        const template = this.props.template;
        if (template.tasks.length) {
            return this.renderTaskList();
        } else {
            return this.renderEmptyTemplate();
        }
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
            <input name="template-name" value={this.props.template.name} style={{
              fontSize: 40,
              border: 'none',
            }}
            onChange={this.editName.bind(this)}
            />
            <div style={{flexGrow: 1}}></div>
            <div>
            <Spin spinning={this.props.store.saving} style={{
                margin: 10,
                position: 'relative',
                top: 4,
            }} />
            <Button type="default" size="large" onClick={this.saveTemplate.bind(this)} style={{marginRight: 10}}>
                <Icon type="save" />Save
              </Button>
              <Button type="primary" size="large" onClick={this.addTask.bind(this)}>
                <Icon type="plus" />Add task
              </Button>
            </div>
          </Header>
          <Content>
            {this.renderBody()}
          </Content>
          <Footer></Footer>
        </Layout>
            
        );
    }
}

export default Template;