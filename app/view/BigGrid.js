Ext.define("BigGrid.view.BigGrid", {
    extend: 'Ext.grid.Panel',
    alias: ['widget.biggrid'],

    requires:[
        'Ext.data.proxy.JsonP',
        'Ext.grid.RowNumberer'
	],

    title: 'ExtJS.com - Browse Forums',
    store: 'ForumThreads',
    loadMask: true,

    plugins: 'bufferedrenderer',

    features:[{
        ftype: 'grouping',
        hideGroupedHeader: false
    }],

    columns:[{
        xtype: 'rownumberer',
        width: 50,
        sortable: false
    },{
        tdCls: 'x-grid-cell-topic',
        text: "Topic",
        dataIndex: 'title',
        width: 500,
        renderer: function (value, p, record) {
                return Ext.String.format(
                '<a href="http://sencha.com/forum/showthread.php?t={2}" target="_blank">{0}</a>',
                value,
                record.data.forumtitle,
                record.getId(),
                record.data.forumid
            );
        },
        sortable: true
    },{
        text: "Author",
        dataIndex: 'username',
        width: 100,
        hidden: true,
        sortable: true
    },{
        text: "Replies",
        dataIndex: 'replycount',
        align: 'center',
        width: 70,
        sortable: false
    },{
        id: 'last',
        text: "Last Post",
        dataIndex: 'lastpost',
        width: 130,
        renderer: Ext.util.Format.dateRenderer('n/j/Y g:i A'),
        sortable: true,
        groupable: false
    },{
        text: "Forum",
        dataIndex: 'forumtitle',
        width: 160,
        sortable: false
    },{
        text: "Author",
        dataIndex: 'username',
        width: 100,
        sortable: true
    },{
        text: "Replies",
        dataIndex: 'replycount',
        align: 'center',
        width: 70,
        sortable: false
    },{
        text: "Forum",
        dataIndex: 'forumtitle',
        width: 160,
        sortable: false
    },{
        text: "Author",
        dataIndex: 'username',
        width: 100,
        sortable: true
    },{
        text: "Replies",
        dataIndex: 'replycount',
        align: 'center',
        width: 70,
        sortable: false
    },{
        text: "Forum",
        dataIndex: 'forumtitle',
        width: 160,
        sortable: false
    },{
        text: "Author",
        dataIndex: 'username',
        width: 100,
        sortable: true
    },{
        text: "Replies",
        dataIndex: 'replycount',
        align: 'center',
        width: 70,
        sortable: false
    },{
        text: "Forum",
        dataIndex: 'forumtitle',
        width: 160,
        sortable: false
    },{
        text: "Author",
        dataIndex: 'username',
        width: 100,
        sortable: true
    },{
        text: "Replies",
        dataIndex: 'replycount',
        align: 'center',
        width: 70,
        sortable: false
    }]

});
