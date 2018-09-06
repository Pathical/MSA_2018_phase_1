import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
import FirstComponent from './components/FirstComponent';
import { Header } from './components/Header';
import SecondComponent from './components/SecondComponent';
import './css/styles.css';

// What are components in react ?
// Components let you split the UI into independent, reusable pieces, 
// and think about each piece in isolation. 
// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called “props”, I like to think of them as arbitrary 
// properties) and return React elements describing what should appear on the screen.

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/FirstComponent" component={FirstComponent} />
                    <Route path="/SecondComponent" component={SecondComponent} />
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>
    );
}