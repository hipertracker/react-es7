let React = require('react');

import UsefulLinks from './UsefulLinks';

let Home = React.createClass({
    render() {
        return (
            <section>
                <UsefulLinks title="Useful Links"/>
            </section>
        )
    }
});

export default Home;