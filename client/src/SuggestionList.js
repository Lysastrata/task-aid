import React, { Component } from 'react';
import Suggestion from './Suggestion.js';
import { Row } from 'antd';

class SuggestionList extends Component {
    render() {
        return (
            <Row type="flex" style={{
                flexWrap: 'nowrap',
                overflowX: 'scroll',
            }}>
                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
            </Row>
        );
    }
}

export default SuggestionList