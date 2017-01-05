/**
 * Created by danieldihardja on 05/01/17.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {Project} from '../services/client-models';

class DashboardPage extends React.Component{

    componentDidMount() {
        Project.create({name: 'p1'}).then((p) => {
            console.log(p);
            p.name = 'p4';
            return p.save();
        })
        .then((p) => {
            console.log(p);
        })
    }

    onClick() {
        console.log('click');
    }

    render() {
        return(
            <RaisedButton label="Dashboard" onClick={this.onClick.bind(this)}/>
        );
    }
}
export default DashboardPage;