/**
 * Created by danieldihardja on 04/01/17.
 */

import '../jspm_packages/github/twbs/bootstrap@4.0.0-alpha.5/css/bootstrap.css!';

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonGroup} from 'reactstrap';

class App extends React.Component {
    render() {
        return(
            <ButtonGroup>
                <Button color="danger">App 1</Button>
            </ButtonGroup>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));