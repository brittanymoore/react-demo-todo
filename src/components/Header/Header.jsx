import React, { Component } from 'react';

import styles from './Header.css';

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <h1>My ToDo App</h1>
            </header>
        )
    }
}

/*
export const Header = () => (
    <header className="header">
        <h1 className="header-h1">My ToDo App</h1>
    </header>
);
*/
