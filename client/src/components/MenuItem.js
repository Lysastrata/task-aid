import React, { Component } from 'react';
import { Menu } from 'antd';

class MenuItem extends Component {
    render() {
        const props = {
            ...this.props,
            style: {
                fontSize: 20,
                ...this.props.style,
            }
        };
        return (
            <Menu.Item {...props} />
        );
    }
}