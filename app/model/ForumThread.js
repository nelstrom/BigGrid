Ext.define('BigGrid.model.ForumThread', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'title', type: 'auto' },
        { name: 'forumtitle', type: 'auto' },
        { name: 'forumid', type: 'auto' },
        { name: 'username', type: 'auto' },
        { name: 'replycount', type: 'int' },
        {
            name: 'lastpost',
            mapping: 'lastpost',
            type: 'date',
            dateFormat: 'timestamp'
        },
        { name: 'lastposter', type: 'auto' },
        { name: 'excerpt', type: 'auto' },
        { name: 'threadid', type: 'auto' }
    ],
    idProperty: 'threadid'
});

