let Reflux = require('reflux');
import LinksActions from '../actions/LinksActions';

let LinksStore = Reflux.createStore({
    listenables: [LinksActions],

    onLoadDataSuccess: function (data) {
        this.trigger({links: data});
    }
});

export default LinksStore;
