import Reflux from 'reflux'

// Each action is like an event channel for one specific event. Actions are called by components.
// The store is listening to all actions, and the components in turn are listening to the store.
// Thus the flow is: User interaction -> component calls action -> store reacts and triggers -> components update
const LinksActions = Reflux.createActions([
    'loadData',
    'loadDataSuccess'
]);

const data = [
    {
        url: 'http://facebook.github.io/react/',
        title: 'React home page'
    },
    {
        "url": "https://github.com/enaqx/awesome-react",
        "title": "A collection of awesome React libraries, resources and shiny things."
    },
    {
        "url": "https://reactjsnews.com/",
        "title": "ReactJS News and tutorials from the community"
    },
    {
        "url": "http://spoike.ghost.io/deconstructing-reactjss-flux/",
        "title": "Reflux - deconstructing ReactJS's Flux"
    },
    {
        "url": "https://github.com/echenley/react-news",
        "title": "Hacker News clone written in React + Reflux + Firebase"
    },
    {
        "url": "https://github.com/WRidder/react-spa",
        "title": "Community site SPA based on ReactJS + Reflux"
    },
    {
        "url": "http://react-components.com",
        "title": "Searchable database of React components"
    },
    {
        "url": "http://www.reactjsx.com/",
        "title": "Search reusable React components"
    },
    {
        "url": "http://formatjs.io/react/",
        "title": "React mixin for internationalization"
    },
    {
        "url": "http://isomorphic.net/",
        "title": "Isomorphic JavaScript - The future of web app development"
    },
    {
        "url": "https://code.tutsplus.com/courses/getting-started-with-reactjs",
        "title": "Getting Started With React.js [screencasts]"
    },
    {
        "url": "https://egghead.io/series/react-flux-architecture",
        "title": "React: Flux Architecture [screencasts]"
    },
    {
        "url": "https://www.facebook.com/groups/228321510706889/",
        "title": "ReactJS (Facebook group)"
    },
    {
        "url": "http://react-bootstrap.github.io/",
        "title": "Bootstrap 3 in React"
    },
    {
        "url": "http://react-components.com/component/react-semantify",
        "title": "Semantic-UI in React"
    },
    {
        "url": "https://github.com/sterpe/quantum-flux",
        "title": "https://github.com/sterpe/quantum-flux"
    },
    {
        "url": "http://react.rocks/",
        "title": "Collection of examples and tutorials"
    },
    {
        "url": "https://reactjsnews.com/react-style-guide-patterns-i-like/",
        "title": "React Style Guide"
    }
];

LinksActions.loadData.listen(function () {
    // here is the place for external communication with servers...
    LinksActions.loadDataSuccess(data);
});

export default LinksActions
