/**
 * Created by danieldihardja on 05/01/17.
 */
import React from 'react';
import ace from 'ace';
import 'ace/mode-json';

class Ace extends React.Component {

    componentDidMount() {
        var editor = ace.edit('editor');
        var JSONMode = ace.require('ace/mode/json').Mode;
        editor.session.setMode(new JSONMode());
    }

    render() {
        return (
            <div id="editor" />
        );
    }
}

export default Ace;