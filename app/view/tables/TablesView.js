Ext.define('AzureTest.view.tables.TablesView',{
    extend: "Ext.panel.Panel",
    xtype: 'tablesview',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'AzureTest.view.tables.TablesViewController'
    ],
    controller: 'tablesviewcontroller',
    layout: 'vbox',
    //layout: 'border',
    bodyPadding: 10,

    config: {
        activeRecord: null
    },

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.setTitle(me.tableName);
        me.model = me.getController().getModel(me.tableName, me.fields);

        me.editing = Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 2 });
        //me.editing = Ext.create('Ext.grid.plugin.RowEditing', { });
        //plugins: [Ext.create('Ext.grid.plugin.RowEditing', {
        //    clicksToMoveEditor: 1,
        //    autoCancel: false
        //})],

        me.add([
            {
                region: 'center',
                xtype: 'grid',
                width: '100%',
                height: 200,
                border: true,


                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
                            //http://fortawesome.github.io/Font-Awesome/cheatsheet/
                            { text: 'sync',   glyph: 'xf1c0@FontAwesome', handler: 'onSyncButton'  },
                            { text: 'Add', glyph: 'xf067@FontAwesome', handler: 'onAddClick' },
                            { text: 'Save', glyph: 'xf0c7@FontAwesome', handler: 'onSaveClick' },
                            { text: 'Delete', glyph: 'xf00d@FontAwesome', handler: 'onDeleteClick' }
                        ]
                    }
                ],

                reference: 'grid',
                listeners: {
                    selectionchange: 'onSelectionChange'
                },
                plugins: [me.editing],
                store: {
                    model: me.model,
                    autoLoad: true
                },
                columns: me.fields
            },
            {
                //region: 'south',
                xtype: 'form',
                reference: 'form',
                width: '100%',
                //split: true,
                flex: 1,
                activeRecord: null,
                //iconCls: 'icon-user',
                //frame: true,
                title: me.tableName + ' record details',
                defaultType: 'textfield',
                bodyPadding: '10 0 5 0',
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'right'
                },
                items:me.fields
            }
        ]);
    }
});