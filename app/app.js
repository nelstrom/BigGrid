Ext.application({
    models: ["ForumThread"],

    stores: ["ForumThreads"],

    controllers: ["Main"],

    views: ["BigGrid"],


    name: 'BigGrid',

    autoCreateViewport: true
});
