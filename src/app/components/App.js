import React from 'react'
import ReactRouter, {RouteHandler, Link} from 'react-router'
import {Menu, Segment, Section} from 'react-semantify'

class App extends React.Component {
    render() {
        const styles= {
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
}

export default App