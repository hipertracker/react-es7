let React = require('react');
import UsefulLinks from './UsefulLinks';
import LinksActions from '../actions/LinksActions';

var App = React.createClass({
    componentDidMount() {
        LinksActions.loadData();
    },
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