const React = require('react');
const RouteHandler = require('react-router').RouteHandler;
import Menu from './Menu';

const App = React.createClass({
    render() {
        let styles = {
            margin: 10
        };
        return (
            <section style={styles}>
                <Menu/>
                <RouteHandler/>
            </section>
        )
    }
});

export default App;