import React from 'react';

import * as fetcher from '../utils/fetcher';
import * as menuBuilder from '../utils/menuBuilder';

import Navigation from './Navigation';
import { Responsive, Message, Grid, Container, Header, Divider } from 'semantic-ui-react';

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
            <Container>
                <Responsive as={Navigation} minWidth={995} items={this.menuItems()} />
                <Responsive as={Message} maxWidth={994} info header='Need a bigger screen to see the menu' />
                <Divider />
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Header as='h1' textAlign='center'>
                            <span role="img" aria-label="cool icon">🚀</span> Homework Assignment
                        </Header>
                        <Header as='h3' textAlign='center' color='grey'>
                            <b>By Cesar Garcia</b>
                        </Header>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default App;