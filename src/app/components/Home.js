import React from 'react'
import {Segment} from 'react-semantify'

import UsefulLinks from './UsefulLinks'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Segment>
                    <UsefulLinks title="React useful links"/>
                </Segment>
            </div>
        )
    }
}

export default Home