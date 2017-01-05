/**
 * Created by danieldihardja on 04/01/17.
 */

import './style.css!';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {$api} from './services/api';

// Pages
import DashboardPage from './pages/dashboard';
import {Schema} from './pages/schema';
import Ace from './pages/ace';

class App extends React.Component {

    constructor() {
        super();
        $api.baseURL = 'http://docker.local:3000/api';
    }

    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <Drawer open={true} className="pd-20">
                        <h1 className="main">Boilerplate</h1>
                        <p>Generic CMS</p>
                    </Drawer>
                    <div className="page">
                        <Ace/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));