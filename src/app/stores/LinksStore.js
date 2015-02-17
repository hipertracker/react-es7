import Reflux from 'reflux'

import LinksActions from '../actions/LinksActions'

const LinksStore = Reflux.createStore({
    listenables: [LinksActions],

    onLoadDataSuccess: function (data) {
        this.trigger({links: data});
    }
});

export default LinksStore;
