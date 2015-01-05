const React = require('react');
import UsefulLinks from './UsefulLinks';
const {Segment} = require('react-semantify');

const Home = React.createClass({
    render() {
        return (
            <Segment>
                <UsefulLinks title="React useful links"/>
            </Segment>
        )
    }
});

export default Home;