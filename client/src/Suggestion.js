import React, { Component } from 'react';
import { Avatar, Rate } from 'antd';

class Suggestion extends Component {
    render() {
        return (
            <div style={{
                textAlign: 'center',
                padding: 10,
                margin: 10,
                width: 150,
                flexShrink: 0,
            }}>
                <Avatar size="large" icon="user" />
                <h3>Demo Worker</h3>
                <p>123-456-7890</p>
            </div>
        );
    }
}

export default Suggestion;