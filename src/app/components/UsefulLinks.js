let React = require('react');
let Reflux = require('reflux');

import LinksStore from '../stores/LinksStore';
import {m} from '../lib/tools';

let T = React.PropTypes;

let UsefulLinks = React.createClass({
    mixins: [Reflux.listenTo(LinksStore, 'linksUpdate')],
    propTypes: {
        title: T.string.isRequired
    },
    getDefaultProps() {
        return {
            title: 'Useful Links',
            style: {backgroundColor: 'white'}
        };
    },
    getInitialState() {
        return {
            links: []
        }
    },
    linksUpdate(data) {
        this.setState({links: data.links});
    },
    render() {
        if (!this.state.links.length) {
            return <span/>;
        }
        let styles = {
            item: {
                paddingLeft: '10px'
            }
        };
        let style = m(styles.item, this.props.style);
        let items = this.state.links.map((item, key) =>
            <li key={key}>
                <a href={item.url} target="_blank">{item.title}</a>
            </li>);
        return (
            <section>
                <h4>{this.props.title}</h4>
                <ul style={style}>{items}</ul>
            </section>
        );
    }
});

export default UsefulLinks;
