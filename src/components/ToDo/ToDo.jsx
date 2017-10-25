import React from 'react';

import styles from './ToDo.scss';

export const ToDo = () => (
    <div>
        <div></div>
        <div className={styles['todo-list-container']}>
            <h2>My List</h2>
            <div>Please wait...</div>
            <ul className={styles['todo-list']}>
                <li>
                    <div className={styles['task-complete']}>
                        <span className="fa fa-check-circle"></span>
                    </div>
                </li>
            </ul>

        </div>
        <hr />
        <div className={styles.card}>
            <form noValidate>
                <label>Add a task:
                    <input type="text" name="name" id="taskName" />
                </label> 
                <input type="submit" id="taskAdd" value="Add" />    
            </form>
        </div>  
    </div>  
);