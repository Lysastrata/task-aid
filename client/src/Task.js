import React, { Component } from 'react';
import { Card, Row, Input, Icon } from 'antd';
import SuggestionList from './SuggestionList.js';
import { observer } from 'mobx-react';

@observer
class Task extends Component {
    editTask(e) {
        this.props.task[e.target.name] = e.target.value;
        console.log(e.target.name);
    }
    deleteTask(e) {
        this.props.template.deleteTask(this.props.task);
    }
    render() {
        const { name, daysBefore, description } = this.props.task;
        return (
            <Card style={{margin: 10, padding: 0,}}>
                <Icon 
                    type="close-circle"
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        opacity: 0.3,
                    }}
                    onClick={this.deleteTask.bind(this)}
                />
                <Row type="flex">
                    <input name="name" onChange={this.editTask.bind(this)} placeholder="Task name" value={name} style={{fontSize: 24, flexGrow: 1, border: 'none'}}/>
                    <div>
                        Due <input style={{
                            width: 20,
                            borderTop: 0,
                            borderRight: 0,
                            borderLeft: 0,
                            marginTop: 5,
                            textAlign: 'center',
                            borderBottom: '2px solid #ccc',
                        }}
                        name="daysBefore"
                        onChange={this.editTask.bind(this)}
                        value={daysBefore}
                        /> days before
                    </div>
                </Row>
                <Row type="flex">
                    <textarea name="description" onChange={this.editTask.bind(this)} className="hidden-focus" placeholder="Task description" style={{
                        border: 'none',
                        resize: 'none',
                        width: '100%',
                    }} 
                    value={description}
                    />
                </Row>
            </Card>
        );
    }
}

export default Task;