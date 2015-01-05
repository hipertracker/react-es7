const React = require('react');
const Reflux = require('reflux');
import LinksActions from '../actions/LinksActions';
import LinksStore from '../stores/LinksStore';
import {m} from '../lib/tools';

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
    componentDidMount() {
        LinksActions.loadData();
    },
    render() {
        if (!this.state.links.length) {
            return <span/>;
        }
        let styles = {
            item: {
                paddingLeft: 30
            }
        };
        let style = m(styles.item, this.props.style);
        let items = this.state.links.map((item, key) =>
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
