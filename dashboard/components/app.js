/**
 * Created by danieldihardja on 04/01/17.
 */



import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
    render() {
        return(
            <MuiThemeProvider>
                <RaisedButton label="Default" />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));