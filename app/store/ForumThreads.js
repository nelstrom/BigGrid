Ext.define('BigGrid.store.ForumThreads', {
    extend: 'Ext.data.Store',

    id: 'ForumThreadsStore',
    model: 'BigGrid.model.ForumThread',
    pageSize: 100,
    buffered: true,
    autoLoad: true,
    proxy: {
        type: 'jsonp',
        url: 'http://www.sencha.com/forum/remote_topics/index.php',
        reader: {
            root: 'topics',
            totalProperty: 'totalCount'
        },
    }
});
