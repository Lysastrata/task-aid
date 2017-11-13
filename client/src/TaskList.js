import React, { Component } from 'react';
import Task from './Task.js';
import { observer } from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


@observer
class TaskList extends Component {
    render() {
        console.log('THE STORE:', this.props.template);
        const template = this.props.template;
        const tasks =  this.props.template.tasks || [];
        return (
            <div>
                   <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        transitionAppear={true}
                        transitionLeave={true}
                    >
                {tasks.map(task => <Task key={task.id} task={task} template={template} />)}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default TaskList;