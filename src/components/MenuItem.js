import React from 'react';
import uuidv from  'uuid/v4';
import { Dropdown } from 'semantic-ui-react';

import Link from './Link';
import SubMenu from './SubMenu';

const MenuItem = ({ menuName, subMenus }) => {
    return (
        <Dropdown item text={`${menuName}`}>
          <Dropdown.Menu>
                {Object.keys(subMenus).map(subMenuName => {
                    let subMenu = subMenus[subMenuName];

                    if (subMenuName === 'Other') {
                        return subMenu.links.map(linkData => <Link key={uuidv()} data={linkData} />)
                    }
                    else {
                        return <SubMenu key={uuidv()} name={subMenuName} links={subMenu.links} />
                    }
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MenuItem;

