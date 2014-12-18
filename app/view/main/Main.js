Ext.define('AzureTest.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'AzureTest.view.main.MainController',
        'AzureTest.view.main.MainModel',
        'AzureTest.view.tables.TablesView'
    ],
    alias: 'widget.mainview',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',

    items: [

        {
            region: 'north',
            xtype: 'container',
            html: 'north'
        },
        {
            region: 'west',
            xtype: 'container',
            html: 'west'
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    xtype: 'tablesview', tableName: 'agenda', 
                    fields: [
                        //{ width: 120, fieldLabel: 'id', name: 'id', header: 'id', text: 'id', dataIndex: 'id', type: 'string', editor: { allowBlank: false } },
                        { width: 120, flex: 1, fieldLabel: 'day', name: 'day', header: 'day', text: 'day', dataIndex: 'day', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'active', name: 'active', header: 'active', text: 'active', dataIndex: 'active', type: 'boolean', editor: { allowBlank: false } }
                    ]
                },
                {
                    xtype: 'tablesview', tableName: 'Driver',
                    fields: [
                        //{ width: 120, fieldLabel: 'id', name: 'id', header: 'id', text: 'id', dataIndex: 'id', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'firstname', name: 'firstname', header: 'firstname', text: 'firstname', dataIndex: 'firstname', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'lastname', name: 'lastname', header: 'lastname', text: 'lastname', dataIndex: 'lastname', type: 'string', editor: { allowBlank: false } },
                        { width: 120, flex: 1, fieldLabel: 'image', name: 'image', header: 'image', text: 'image', dataIndex: 'image', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'active', name: 'active', header: 'active', text: 'active', dataIndex: 'active', type: 'boolean', editor: { allowBlank: false } }
                    ]
                },
                {
                    xtype: 'tablesview', tableName: 'restaurant',
                    fields: [
                        //{ width: 120, fieldLabel: 'id', name: 'id', header: 'id', text: 'id', dataIndex: 'id', type: 'string', editor: { allowBlank: false } },
                        { width: 120, flex: 1, fieldLabel: 'restaurant', name: 'restaurant', header: 'restaurant', text: 'restaurant', dataIndex: 'restaurant', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'address', name: 'address', header: 'address', text: 'address', dataIndex: 'address', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'restype', name: 'restype', header: 'restype', text: 'restype', dataIndex: 'restype', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'phonenumber', name: 'phonenumber', header: 'phonenumber', text: 'phonenumber', dataIndex: 'phonenumber', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'distance', name: 'distance', header: 'distance', text: 'distance', dataIndex: 'distance', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'price', name: 'price', header: 'price', text: 'price', dataIndex: 'price', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'active', name: 'active', header: 'active', text: 'active', dataIndex: 'active', type: 'boolean', editor: { allowBlank: false } }
                    ]
                },
                {
                    xtype: 'tablesview', tableName: 'event',
                    fields: [
                        //{ width: 120, fieldLabel: 'id', name: 'id', header: 'id', text: 'id', dataIndex: 'id', type: 'string', editor: { allowBlank: false } },
                        { width: 120, flex: 1, fieldLabel: 'name', name: 'name', header: 'name', text: 'name', dataIndex: 'name', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'seq', name: 'seq', header: 'seq', text: 'seq', dataIndex: 'seq', type: 'int', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'image', name: 'image', header: 'image', text: 'image', dataIndex: 'image', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'time', name: 'time', header: 'time', text: 'time', dataIndex: 'time', type: 'string', editor: { allowBlank: false } },
                        { width: 120, fieldLabel: 'active', name: 'active', header: 'active', text: 'active', dataIndex: 'active', type: 'boolean', editor: { allowBlank: false } }
                    ]
                }
            ]
        }
    ]
});