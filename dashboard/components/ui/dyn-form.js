/**
 * Created by danieldihardja on 05/01/17.
 */
import React from 'react';
import TextField from 'material-ui/TextField';

/**
 * dynamicly generate forms based on a json schema
 */
class DynForm extends React.Component {

    constructor(props) {
        super(props);
    }

    onTextFieldChange(evt, value) {
        var key = evt.target.name;
        this.props.model[key] = value;
    }

    getTextFieldRow(field, key) {
        var tf = <TextField
                    floatingLabelText={field.label || field.name}
                    multiLine={field.ui === 'text-ml'}
                    name={field.name}
                    onChange={this.onTextFieldChange.bind(this)} />;

        return (<div key={key}>{tf}</div>);
    }

    render() {
        var rows = [];
        var count = 0;
        this.props.schema.map(function (field) {
            rows.push(this.getTextFieldRow(field, count ++));
        }.bind(this));
        return(<div>{rows}</div>);
    }
}
export default DynForm;