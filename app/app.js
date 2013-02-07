Ext.application({
    models: ["ForumThread"],

    stores: ["ForumThreads"],

    controllers: ["Main"],

    views: ["BigGrid","Main"],


    name: 'BigGrid',

    autoCreateViewport: true
});
