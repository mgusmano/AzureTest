Ext.define('AzureTest.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'Ext.azure.Azure'
    ],
    name: 'AzureTest',

    azure: {
        appKey: 'RWoarrhdtvpsDSrmoBLOIxTgqDXyiY10',
        appUrl: 'touchazure.azure-mobile.net'
    },

    init: function () {
        var me = this;
    },

    launch: function () {
        var me = this;
        Ext.setGlyphFontFamily('FontAwesome');
        Ext.Azure.init(this.azure);
    }
});
