let React = require('react');
import UsefulLinks from './UsefulLinks';

var App = React.createClass({
    render() {
        let styles = {
            margin: 20
        };
        return (
            <section style={styles}>
                <UsefulLinks title="Useful Links"/>
            </section>
        )
    }
});

export default App;