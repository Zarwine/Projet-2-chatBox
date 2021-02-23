// REACT
import React from 'react';
import { render } from 'react-dom';
// Components
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom'
// CSS
import './index.css';

const Root = () => {
    return (
        <Router>
            <div>
                <Route path={"/"} exact component={Connexion} />
                <Route path={"/pseudo/:pseudo"} exact component={App} />
                <Route component={NotFound} />
            </div>
        </Router>
    )
}

render(
    <Root />,
    document.getElementById('root')
);