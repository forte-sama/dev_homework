import React from 'react';
import { Dropdown  } from 'semantic-ui-react';

const Link = ({ data }) => {
    return (
        <Dropdown.Item>
            <a className="dropdown-item" tabIndex="-1" href={data['URL']}>
                {data['Link Name']}
            </a>
        </Dropdown.Item>
    );
};

export default Link;