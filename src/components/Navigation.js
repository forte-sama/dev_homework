import React from 'react';
import uuidv from 'uuid/v4';
import { Menu, Loader, Dimmer } from 'semantic-ui-react';


import MenuItem from './MenuItem';

class Navigation extends React.Component {
    state = {}

    render() {
        let items = this.props.items;

        let content;
        if (Object.keys(items).length <= 0) {
            content = (
                <Dimmer active>
                    <Loader active inline='centered'>Loading Menu from Airtable</Loader>
                </Dimmer>
            );
        }
        else {
            content = Object.keys(items).map(itemName => 
                <MenuItem key={uuidv()} {...items[itemName]} />
            );
        }

        return (
            <Menu stackable color='teal'>
                {content}
            </Menu>
        );
    };
}

export default Navigation;