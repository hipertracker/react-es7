import React from 'react'
import Reflux from 'reflux'

import LinksActions from '../actions/LinksActions'
import LinksStore from '../stores/LinksStore'
import {m} from '../lib/tools'

const T = React.PropTypes;

const UsefulLinks = React.createClass({
    mixins: [Reflux.listenTo(LinksStore, 'linksUpdate')],
    propTypes: {
        title: T.string.isRequired
    },
    getInitialState() {
        return {
            links: []
        }
    },
    linksUpdate(data) {
        this.setState({links: data.links});
    },
    componentWillMount() {
        LinksActions.loadData();
    },
    render() {
        if (!this.state.links.length) {
            return <span/>;
        }
        const styles = {
            item: {
                paddingLeft: 30
            }
        };
        const style = m(styles.item, this.props.style);
        const items = this.state.links.map((item, key) =>
            <li key={key}>
            {item.title} (<a href={item.url} target="_blank">{item.url}</a>)
            </li>);
        return (
            <div>
                <b>{this.props.title}</b>
                <ul style={style}>{items}</ul>
            </div>
        );
    }
});

export default UsefulLinks;
