import React, { Component } from 'react';
import Task from './Task.js';
import { observer } from 'mobx-react';

@observer
class TaskList extends Component {
    render() {
        console.log('THE STORE:', this.props.template);
        const template = this.props.template;
        const tasks =  this.props.template.tasks || [];
        return (
            <div>
                {tasks.map(task => <Task task={task} template={template} />)}
            </div>
        );
    }
}

export default TaskList;