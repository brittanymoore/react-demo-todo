import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import styles from './Main.scss';

import { ToDo } from './../ToDo/ToDo';

export const Main = () => (
    <main className={styles.main}>
        <Switch>
            <Route exact path="/todo" component={ToDo} />
            <Redirect from="/" to="/todo" />
        </Switch>
    </main>
);
