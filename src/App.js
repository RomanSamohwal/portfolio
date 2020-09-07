import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Main} from './main/Main';
import {About} from './about/About';
import {Portfolio} from './portfolio/Portfolio'
import {Contacts} from './contacts/Contacts'

function App() {
    return (
        <HashRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path={'/main'} render={() => <Main/>}/>
                    <Route path={'/about'} render={() => <About/>}/>
                    <Route path={'/portfolio'} render={() => <Portfolio/>}/>
                    <Route path={'/contacts'} render={() => <Contacts/>}/>
                    <Route path={'/'} render={() => <Main/>}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
