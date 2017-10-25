import React from 'react';
import axios from 'axios';

import { AddTask } from './AddTask/AddTask';

import styles from './ToDo.scss';

export class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            loading: true
        }
    }

    onAddTask(task) {
        const tasks = this.state.tasks;
        tasks.push(task);
        this.setState({ tasks: tasks });
    }

    componentDidMount() {
        axios.get('http://localhost:3001/tasks')
            .then((res) => {
                const tasks = res.data;
                this.setState({ loading: false, tasks: tasks });
            });
    }

    render() {
        
        const loading = this.state.loading;

        return (
            <div>
                <div className={styles['todo-list-container']}>
                    <h2>My List</h2>
                    {loading &&
                        <div>Please wait...</div>
                    }
                    <ul className={styles['todo-list']}>
                        {this.state.tasks.map(task =>
                            <li key={task.id}>
                                {task.name}
                                <div className={styles['task-complete']}>
                                    <span className="fa fa-check-circle"></span>
                                </div>
                            </li>
                        )}
                    </ul>

                </div>
                <hr />
                <div className={styles.card}>
                    <AddTask onAdd={this.onAddTask.bind(this)} />
                </div>  
            </div>  
        );
    }

}
