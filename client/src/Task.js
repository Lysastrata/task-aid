import React, { Component } from 'react';
import { Card, Row, Input } from 'antd';
import SuggestionList from './SuggestionList.js';

class Task extends Component {
    render() {
        return (
            <Card style={{margin: 10, padding: 0,}}>
                <Row type="flex">
                    <input value="Hire demo worker" style={{fontSize: 18, flexGrow: 1, border: 'none'}}/>
                    <div>
                        Due <input style={{
                            width: 20,
                            borderTop: 0,
                            borderRight: 0,
                            borderLeft: 0,
                            marginTop: 5,
                            textAlign: 'center',
                            borderBottom: '2px solid #ccc',
                        }}/> days before
                    </div>
                </Row>
                <Row type="flex">
                    <textarea className="hidden-focus" placeholder="Task description" style={{
                        border: 'none',
                        resize: 'none',
                        width: '100%',
                    }}/>
                </Row>
            </Card>
        );
    }
}

export default Task;