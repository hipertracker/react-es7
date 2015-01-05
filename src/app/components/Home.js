const React = require('react');
import UsefulLinks from './UsefulLinks';

const Home = React.createClass({
    render() {
        return (
            <section>
                <UsefulLinks title="Useful Links"/>
            </section>
        )
    }
});

export default Home;