import * as React from 'react'
import * as ReactRouter from 'react-router'
import {Menu, Segment, Section} from 'react-semantify'

const RouteHandler = ReactRouter.RouteHandler;
const Link = ReactRouter.Link;

const App = React.createClass({
    render() {
        const styles = {
            margin: 10
        };
        return (
            <Section style={styles}>
                <Menu>
                    <Link to="home" className="item">
                        <i className="home icon"></i>
                        Home
                    </Link>
                    <Link to="about" className="item">
                        <i className="bomb icon"></i>
                        About
                    </Link>
                </Menu>
                <RouteHandler/>
                <Segment>
                    Git: &nbsp;
                    <a href="https://github.com/hipertracker/react-es7">
                        https://github.com/hipertracker/react-es7
                    </a>
                </Segment>
            </Section>
        )
    }
});

export default App;