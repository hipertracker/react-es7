const React = require('react');
const ReactRouter = require('react-router');
const {Menu, Segment} = require('react-semantify');

let RouteHandler = ReactRouter.RouteHandler;
let Link = ReactRouter.Link;

const App = React.createClass({
    render() {
        let styles = {
            margin: 10
        };
        return (
            <section style={styles}>
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
            </section>
        )
    }
});

export default App;