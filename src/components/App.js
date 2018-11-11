import React from 'react';

import * as fetcher from '../utils/fetcher';
import * as menuBuilder from '../utils/menuBuilder';

import Navigation from './Navigation';

class App extends React.Component {

    state = {};

    componentDidMount() {
        menuBuilder.build(fetcher).then(items => {
            setTimeout(() => {
                console.log("app started (Finally)");
                
                this.setState({ items });
            }, 1678);
        });
    }

    menuItems() {
        return this.state.items || {};
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Navigation items={this.menuItems()} />
                    <div className="row">
                        <h1 className="btn btn-block btn-success"><span role="img" aria-label="cool icon">🚀</span> Dev Homework</h1>
                        <h3 className="ui grey">See menu above</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;