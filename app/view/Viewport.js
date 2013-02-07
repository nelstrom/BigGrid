Ext.define('BigGrid.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'BigGrid.view.BigGrid'
    ],

    layout: { type: 'fit' },

    items: [{ xtype: 'biggrid' }]
});
