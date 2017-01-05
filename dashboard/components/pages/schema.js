/**
 * Created by danieldihardja on 05/01/17.
 */
import React from 'react';
import DynForm from '../ui/dyn-form';

export class Schema extends React.Component {

    constructor() {
        super();
        this.schema = [
            {
                name: 'title',
                type: 'string',
                ui: 'text',
                label: 'Title'
            },
            {
                name: 'description',
                type: 'string',
                ui: 'text-ml',
                label: 'Description'
            }
        ];

        this.model = {};
    };

    render() {
        return(<DynForm schema={this.schema} model={this.model}/>);
    }
}
