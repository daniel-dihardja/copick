/**
 * Created by danieldihardja on 05/01/17.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {Project} from '../services/project';

class DashboardPage extends React.Component{

    componentDidMount() {
        Project.create({name: 'p1'}).then((project) => {
            console.log('project', project);
            project.name = 'joe';
            return project.save();
        })
        .then(function(res) {
            console.log(res);
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