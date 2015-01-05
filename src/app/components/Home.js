import * as React from 'react';
import UsefulLinks from './UsefulLinks';
import {Segment} from 'react-semantify';

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