import * as React from 'react'
import {Segment} from 'react-semantify'

import UsefulLinks from './UsefulLinks'

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