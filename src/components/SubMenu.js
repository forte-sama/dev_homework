import React from 'react';
import uuidv from  'uuid/v4';
import { Dropdown  } from 'semantic-ui-react';

import Link from './Link';

const SubMenu = ({ name, links }) => {
    let textShown = `∙ ${name}`;

    return (
        <Dropdown item text={textShown} icon={null}>
            <Dropdown.Menu>
                {links.map(linkData => <Link key={uuidv()} data={linkData} />)}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SubMenu;