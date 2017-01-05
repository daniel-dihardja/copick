/**
 * Created by danieldihardja on 05/01/17.
 */
import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';

class Ace extends React.Component {

    onChange() {
        console.log('change');
    }

    render() {
        return (
            <div>
            <AceEditor
                mode="json"
                theme="github"
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                className="jsonEditor"
            />
            </div>
        );
    }
}

export default Ace;